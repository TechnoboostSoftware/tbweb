/* =========================================================================
   Techno AI chat
   Self-contained: it builds its own markup, so a page only needs the
   stylesheet and this script.

   Answers come from the Cloudflare Worker in chat-worker/. When a visitor
   has given their details, the Worker hands back a lead; the visitor checks
   it on a card and taps Send, and it is emailed through the same postMail
   the contact form uses (exposed by main.js as window.technoboost).

   The conversation lives in sessionStorage: it survives moving between
   pages, and is gone when the tab closes. Nothing is kept on a server.
   ========================================================================= */
(function () {
  'use strict';

  var local = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/.test(location.hostname);

  // Locally: `npx wrangler dev` in chat-worker/, and Cloudflare's always-pass
  // Turnstile test key. Live: the Worker on the Technoflowboost account.
  var CHAT_ENDPOINT = local ? 'http://localhost:8787' : 'https://techno-ai-chat.technoflowboost.workers.dev';
  var TURNSTILE_SITEKEY = local ? '1x00000000000000000000AA' : '0x4AAAAAAE7mcjuyB0vpQGsq';
  var MAIL_TO = 'contactus@technoboost.in';
  var STORE = 'tb-chat';

  if (!CHAT_ENDPOINT) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var IMG = 'assets/img/chat/';

  /* ------------------------------------------------------------ markup ---- */
  var root = document.createElement('div');
  root.className = 'chat';
  root.innerHTML =
    '<button class="chat-launcher" type="button" aria-expanded="false" aria-controls="chat-panel" data-cursor="action">' +
      '<img class="chat-launcher__bloub" src="' + IMG + 'bloub-idle.gif" alt="" width="38" height="38">' +
      '<span class="chat-launcher__label">Ask Techno AI</span>' +
    '</button>' +
    '<section class="chat-panel" id="chat-panel" role="dialog" aria-label="Techno AI" aria-modal="false">' +
      '<header class="chat-head">' +
        '<span class="chat-avatar"><img src="' + IMG + 'bloub-idle.gif" alt="" width="30" height="30"></span>' +
        '<p class="chat-title">Techno AI</p>' +
        '<button class="chat-sound" type="button" aria-pressed="true" aria-label="Sound on" title="Sound" data-cursor="action">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 6h2.2L8 3.2v9.6L4.7 10H2.5z" fill="currentColor"/>' +
          '<path class="chat-sound__wave" d="M10.4 5.6a3.4 3.4 0 0 1 0 4.8M12.2 3.8a6 6 0 0 1 0 8.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' +
          '<path class="chat-sound__off" d="M10.3 6l3.6 4M13.9 6l-3.6 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>' +
        '</button>' +
        '<button class="chat-new" type="button" aria-label="Start a new chat" title="New chat" data-cursor="action">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.2 6.2A5.4 5.4 0 1 0 13.4 9.6M13.4 2.8v3.6H9.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<button class="chat-close" type="button" aria-label="Close chat" data-cursor="action">' +
          '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' +
        '</button>' +
      '</header>' +
      '<div class="chat-body">' +
        '<div class="chat-fade chat-fade--top" aria-hidden="true"></div>' +
        '<div class="chat-log" role="log" aria-live="polite" aria-relevant="additions"></div>' +
        '<div class="chat-fade chat-fade--bottom" aria-hidden="true"></div>' +
      '</div>' +
      '<div class="chat-turnstile"></div>' +
      '<form class="chat-composer" novalidate>' +
        '<div class="chat-input">' +
          '<div class="chat-input__field">' +
            '<input type="text" name="q" autocomplete="off" maxlength="600" placeholder="Ask me anything" aria-label="Message Techno AI">' +
          '</div>' +
        '</div>' +
        '<button class="chat-send" type="submit" aria-label="Send" disabled data-cursor="action">' +
          '<img src="' + IMG + 'send-arrow.svg" alt="" width="20" height="20">' +
        '</button>' +
      '</form>' +
    '</section>';
  document.body.appendChild(root);

  var launcher = root.querySelector('.chat-launcher');
  var panel    = root.querySelector('.chat-panel');
  var body     = root.querySelector('.chat-body');
  var log      = root.querySelector('.chat-log');
  var form     = root.querySelector('.chat-composer');
  var input    = form.querySelector('input');
  var send     = form.querySelector('.chat-send');
  var avatar   = root.querySelector('.chat-avatar img');

  // decode the three moods up front so switching never flashes
  ['bloub-idle.gif', 'bloub-thinking.gif', 'bloub-wink.gif', 'bloub-still.png'].forEach(function (f) { var i = new Image(); i.src = IMG + f; });

  setTimeout(function () { root.classList.add('is-ready'); }, reduced ? 0 : 900);

  /* ------------------------------------------------------------ sound ----- */
  /* Small synthesised sounds, no audio files: a soft tick as words land, a
     pop on send, a two-note chime when a reply starts and a brighter one
     when details are sent. Quiet by design, and one tap mutes them for good. */
  var sound = (function () {
    var KEY = 'tb-chat-sound';
    var on = true, ctx = null, last = 0;
    try { on = localStorage.getItem(KEY) !== 'off'; } catch (e) {}

    function audio() {
      if (!on) return null;
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!ctx) ctx = new AC();
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    }
    function tone(freq, start, dur, vol, type) {
      var c = audio(); if (!c) return;
      var t = c.currentTime + start;
      var o = c.createOscillator(), g = c.createGain();
      o.type = type || 'sine';
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(c.destination);
      o.start(t); o.stop(t + dur + 0.02);
    }
    return {
      // a key-like click: a few ms of filtered noise, pitch varied per word
      tick: function () {
        var c = audio(); if (!c) return;
        var now = performance.now();
        if (now - last < 45) return;
        last = now;
        var len = Math.floor(c.sampleRate * 0.018);
        var buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
        for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 4);
        var src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
        src.buffer = buf;
        f.type = 'bandpass'; f.frequency.value = 2400 + Math.random() * 1600; f.Q.value = 1.2;
        g.gain.value = 0.16;
        src.connect(f).connect(g).connect(c.destination);
        src.start();
      },
      send: function () {
        var c = audio(); if (!c) return;
        var t = c.currentTime, o = c.createOscillator(), g = c.createGain();
        o.frequency.setValueAtTime(420, t);
        o.frequency.exponentialRampToValueAtTime(880, t + 0.09);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.07, t + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
        o.connect(g).connect(c.destination);
        o.start(t); o.stop(t + 0.16);
      },
      reply: function () { tone(659.25, 0, 0.22, 0.045); tone(880, 0.09, 0.3, 0.04); },
      done: function () { tone(523.25, 0, 0.25, 0.05); tone(659.25, 0.1, 0.25, 0.05); tone(1046.5, 0.2, 0.45, 0.045); },
      get on() { return on; },
      toggle: function () {
        on = !on;
        try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
        if (on) tone(880, 0, 0.12, 0.04);
        return on;
      }
    };
  })();

  var soundBtn = root.querySelector('.chat-sound');
  function paintSound() {
    soundBtn.setAttribute('aria-pressed', String(sound.on));
    soundBtn.setAttribute('aria-label', sound.on ? 'Sound on' : 'Sound off');
    soundBtn.classList.toggle('is-off', !sound.on);
  }
  paintSound();
  soundBtn.addEventListener('click', function () { sound.toggle(); paintSound(); });

  /* ------------------------------------------------------------ mood ------ */
  var moodTimer = null;
  function mood(name, hold) {
    clearTimeout(moodTimer);
    avatar.src = IMG + 'bloub-' + name + '.gif';
    if (hold) moodTimer = setTimeout(function () { avatar.src = IMG + 'bloub-idle.gif'; }, hold);
  }

  /* ---------------------------------------------------- open and close ---- */
  var greeted = false;
  function open() {
    root.classList.add('is-open');
    document.body.classList.add('chat-open');
    launcher.setAttribute('aria-expanded', 'true');
    if (!greeted) { greeted = true; if (!session) turnstile.load(); if (history.length) restore(); else greet(); }
    setTimeout(function () { input.focus({ preventScroll: true }); }, reduced ? 0 : 260);
  }
  function close() {
    root.classList.remove('is-open');
    document.body.classList.remove('chat-open');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.focus({ preventScroll: true });
  }
  launcher.addEventListener('click', open);
  root.querySelector('.chat-close').addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && root.classList.contains('is-open')) close();
  });

  /* ---------------------------------------------------------- scrolling ---- */
  function fades() {
    body.classList.toggle('has-above', log.scrollTop > 4);
    body.classList.toggle('has-below', log.scrollHeight - log.scrollTop - log.clientHeight > 4);
  }
  log.addEventListener('scroll', fades, { passive: true });

  // follow the conversation only while the reader is already at the bottom,
  // so scrolling up to reread is never yanked away
  function nearBottom() { return log.scrollHeight - log.scrollTop - log.clientHeight < 60; }
  var following = true;
  log.addEventListener('scroll', function () { following = nearBottom(); }, { passive: true });

  var glide = null;
  function toBottom(force) {
    if (!force && !following) return;
    var target = log.scrollHeight - log.clientHeight;
    if (reduced) { log.scrollTop = target; fades(); return; }
    cancelAnimationFrame(glide);
    (function step() {
      var d = target - log.scrollTop;
      if (Math.abs(d) < 0.6) { log.scrollTop = target; fades(); return; }
      log.scrollTop += d * 0.18;
      fades();
      glide = requestAnimationFrame(step);
    })();
  }

  /* ------------------------------------------------------------ messages -- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // [label](url) is the only markup answers use. Only web, mail and on-site
  // links survive, so a coaxed reply can never carry a javascript: URL.
  var home = !!document.getElementById('contact');
  function linkify(s) {
    return esc(s).replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (all, t, u) {
      if (!/^(https?:\/\/|mailto:|#|[\w-]+\.html(#[\w-]+)?$)/.test(u)) return t;
      if (home) u = u.replace(/^index\.html#/, '#');     // stay on the page, just scroll
      var ext = /^https?:/.test(u);
      return '<a href="' + u + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>';
    });
  }

  function addUser(text) {
    var el = document.createElement('div');
    el.className = 'chat-msg chat-msg--user';
    el.textContent = text;
    log.appendChild(el);
    toBottom(true);
  }

  /* Words land a few at a time, each fading in, so a reply reads like it is
     being written rather than dropped in whole. Links are kept intact. */
  /* Each reply sits beside the bloub. Only the newest one moves: it winks as
     the reply lands and then idles, while earlier ones settle to a still
     frame so the log never fills up with animation. */
  function aiRow() {
    log.querySelectorAll('.chat-row--ai .chat-row__avatar img').forEach(function (img) {
      img.src = IMG + 'bloub-still.png';
    });
    var row = document.createElement('div');
    row.className = 'chat-row chat-row--ai';
    row.innerHTML = '<span class="chat-row__avatar" aria-hidden="true"><img src="' + IMG + 'bloub-wink.gif" alt="" width="28" height="28"></span>';
    var img = row.querySelector('img');
    setTimeout(function () { if (img.src.indexOf('wink') > -1) img.src = IMG + 'bloub-idle.gif'; }, 1600);
    log.appendChild(row);
    return row;
  }

  function addAI(text, instant) {
    return new Promise(function (resolve) {
      var row = aiRow();
      var el = document.createElement('div');
      el.className = 'chat-msg chat-msg--ai';
      row.appendChild(el);
      var html = linkify(text);
      if (reduced || instant) { el.innerHTML = html; toBottom(); resolve(el); return; }

      var parts = html.match(/<a [^>]*>.*?<\/a>|\S+|\s+/g) || [];
      var i = 0;
      sound.reply();
      (function tick() {
        var n = 1 + (Math.random() < .35 ? 1 : 0);
        while (n-- && i < parts.length) {
          var p = parts[i++];
          if (/^\s+$/.test(p)) { el.appendChild(document.createTextNode(p)); n++; continue; }
          var w = document.createElement('span');
          w.className = 'chat-word';
          w.innerHTML = p;
          el.appendChild(w);
        }
        if (i > 2) sound.tick();                // let the chime ring before typing
        toBottom();
        if (i < parts.length) setTimeout(tick, 26 + Math.random() * 34);
        else resolve(el);
      })();
    });
  }

  function addChips(list) {
    var box = document.createElement('div');
    box.className = 'chat-chips';
    list.forEach(function (q) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chat-chip';
      b.textContent = q;
      b.addEventListener('click', function () { box.remove(); ask(q); });
      box.appendChild(b);
    });
    log.appendChild(box);
    toBottom(true);
  }

  /* ------------------------------------------------------------ the orb --- */
  /* A sphere of dots turning in 3D. Latitude bands brighten in a travelling
     wave, which is what gives the libraries.dev "thinking" orb its motion. */
  function orb(canvas) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var S = 24;
    canvas.width = S * dpr; canvas.height = S * dpr;
    var c = canvas.getContext('2d');
    c.scale(dpr, dpr);
    var N = 110, pts = [];
    var golden = Math.PI * (3 - Math.sqrt(5));
    for (var k = 0; k < N; k++) {
      var y = 1 - (k / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = golden * k;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
    var raf = null, t0 = performance.now();
    function frame(now) {
      var t = (now - t0) / 1000;
      var ay = t * 1.1, ax = 0.45 + Math.sin(t * 0.7) * 0.15;
      var cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
      c.clearRect(0, 0, S, S);
      var R = S * 0.42;
      for (var i = 0; i < N; i++) {
        var p = pts[i];
        var x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy;
        var y2 = p[1] * cx - z * sx, z2 = p[1] * sx + z * cx;
        var depth = (z2 + 1) / 2;                                // 0 back .. 1 front
        var band = 0.5 + 0.5 * Math.sin(p[1] * 6 - t * 4.2);     // travelling wave
        var a = (0.12 + 0.88 * depth) * (0.35 + 0.65 * band);
        c.fillStyle = 'rgba(36,46,61,' + a.toFixed(3) + ')';
        c.beginPath();
        c.arc(S / 2 + x * R, S / 2 + y2 * R, 0.45 + depth * 0.75, 0, 6.2832);
        c.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
    return function stop() { cancelAnimationFrame(raf); };
  }

  function thinking() {
    var row = document.createElement('div');
    row.className = 'chat-row chat-thinking';
    row.setAttribute('aria-label', 'Techno AI is thinking');
    row.innerHTML = '<span class="chat-row__avatar chat-row__avatar--orb"><canvas aria-hidden="true"></canvas></span>' +
                    '<span class="chat-thinking__bubble"><span class="chat-thinking__label">Thinking…</span></span>';
    log.appendChild(row);
    var stop = orb(row.querySelector('canvas'));
    toBottom(true);
    return function done() {
      return new Promise(function (resolve) {
        row.classList.add('is-leaving');
        setTimeout(function () { stop(); row.remove(); resolve(); }, reduced ? 0 : 200);
      });
    };
  }

  /* ----------------------------------------------------------- memory ---- */
  var saved = (function () {
    try { return JSON.parse(sessionStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
  })();
  var history  = saved.history || [];   // [{role, content}]
  var session  = saved.session || '';   // the Worker's signed token, skips Turnstile
  var lead     = saved.lead || null;    // details awaiting Send
  var leadDone = !!saved.leadDone;      // card shown once; never ask again this chat
  var leadSent = !!saved.leadSent;

  function save() {
    try {
      sessionStorage.setItem(STORE, JSON.stringify({
        history: history.slice(-40), session: session, lead: lead, leadDone: leadDone, leadSent: leadSent
      }));
    } catch (e) { /* private mode: the chat just won't survive a page change */ }
  }

  function restore() {
    history.forEach(function (m) {
      if (m.role === 'user') addUser(m.content);
      else addAI(m.content, true);
    });
    if (lead && !leadSent) leadCard(lead);
    toBottom(true);
  }

  root.querySelector('.chat-new').addEventListener('click', function () {
    if (busy) return;
    history = []; lead = null; leadDone = false; leadSent = false;
    save();                                  // the session token is kept: no new challenge
    log.innerHTML = '';
    input.placeholder = 'Ask me anything';
    greet();
    input.focus({ preventScroll: true });
  });

  /* -------------------------------------------------------- Turnstile ---- */
  /* Proves a person is here before the first answer. It stays invisible
     unless Cloudflare wants an interaction, and sets no cookies. After the
     first reply the Worker's session token stands in for it. */
  var turnstile = (function () {
    var slot = root.querySelector('.chat-turnstile');
    var box = document.createElement('div');
    slot.innerHTML = '<p class="chat-turnstile__hint">Quick check before I answer: tick the box below.</p>';
    slot.appendChild(box);
    var id = null, token = '', waiting = [], lastError = '';

    // a token goes to exactly one waiter, or is kept for the next one
    function give(t) {
      if (waiting.length) waiting.shift()(t);
      else token = t;
    }
    function render() {
      if (id !== null || !window.turnstile) return;
      id = window.turnstile.render(box, {
        sitekey: TURNSTILE_SITEKEY,
        appearance: 'interaction-only',
        theme: 'light',
        size: 'flexible',
        callback: function (t) { slot.classList.remove('is-asking'); lastError = ''; give(t); },
        'before-interactive-callback': function () { slot.classList.add('is-asking'); toBottom(true); },
        'after-interactive-callback': function () { slot.classList.remove('is-asking'); },
        'expired-callback': function () { token = ''; },
        'error-callback': function (code) {
          lastError = String(code || 'error');
          if (window.console) console.warn('[techno-ai] Turnstile error', lastError);
          var w = waiting; waiting = [];
          w.forEach(function (fn) { fn(''); });
          return true;                       // handled: no console noise from Cloudflare
        }
      });
    }
    function load() {
      if (window.turnstile) { render(); return; }
      if (document.querySelector('script[data-chat-turnstile]')) return;
      var tag = document.createElement('script');
      tag.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      tag.async = true; tag.defer = true;
      tag.setAttribute('data-chat-turnstile', '');
      tag.onload = render;
      document.head.appendChild(tag);
    }
    return {
      load: load,
      // A fresh single-use token. Waits as long as a person might need to
      // tick the box; resolves '' on an error or after two minutes.
      take: function () {
        return new Promise(function (resolve) {
          if (token) { var t = token; token = ''; resolve(t); return; }
          var done = false;
          function once(t) { if (!done) { done = true; resolve(t); } }
          waiting.push(once);
          load();
          // a token already used, or an earlier error: ask for a new one
          if (id !== null && window.turnstile && !slot.classList.contains('is-asking')) {
            try { window.turnstile.reset(id); } catch (e) {}
          }
          setTimeout(function () {
            waiting = waiting.filter(function (fn) { return fn !== once; });
            once('');
          }, 120000);
        });
      },
      get error() { return lastError; }
    };
  })();

  /* ------------------------------------------------------------ asking ---- */
  var busy = false;

  function ask(q) {
    q = q.trim();
    if (!q || busy) return;
    busy = true;
    var chips = log.querySelector('.chat-chips');
    if (chips) chips.remove();
    input.value = '';
    send.disabled = true;
    addUser(q);
    sound.send();
    history.push({ role: 'user', content: q });
    save();

    root.classList.add('is-thinking');
    mood('thinking');
    var done = thinking();
    var started = performance.now();

    answer().then(function (res) {
      // a thought that flickers for 80ms reads as a glitch; hold it briefly
      var wait = Math.max(0, 750 - (performance.now() - started));
      return new Promise(function (r) { setTimeout(r, wait); }).then(function () { return done(); })
        .then(function () {
          root.classList.remove('is-thinking');
          mood('wink', 1600);
          history.push({ role: 'assistant', content: res.reply });
          if (res.lead && !leadDone) { lead = res.lead; leadDone = true; }
          save();
          return addAI(res.reply).then(function () {
            if (res.lead && lead === res.lead) leadCard(lead);
          });
        });
    }).catch(function (err) {
      history.pop();                         // let them ask the same thing again
      save();
      return done().then(function () {
        root.classList.remove('is-thinking');
        mood('idle');
        if (err && err.challenge) {
          return addAI("I couldn't confirm you're a person just now. Please send your message again, and tick the box if one appears. You can also write to [" + MAIL_TO + '](mailto:' + MAIL_TO + ').');
        }
        return addAI('Something went wrong on my side. Try again in a moment, or write to [' + MAIL_TO + '](mailto:' + MAIL_TO + ').');
      });
    }).then(function () {
      busy = false;
      input.placeholder = 'How else can I help';
      send.disabled = !input.value.trim();
    });
  }

  function post(extra) {
    var payload = { messages: history.slice(-12), session: session, leadDone: leadDone };
    for (var k in extra) payload[k] = extra[k];
    return fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { j.status = r.status; return j; });
    });
  }

  function withToken() {
    return turnstile.take().then(function (t) { return post({ turnstile: t }); });
  }

  function answer() {
    // no session yet (or it lapsed): prove we're human first
    return (session ? post({}) : withToken()).then(function (j) {
      if (j.challenge) {
        if (window.console) console.warn('[techno-ai] check failed', j.codes, turnstile.error);
        session = '';
        return withToken();
      }
      return j;
    }).then(function (j) {
      if (j.session) session = j.session;
      if (j.challenge) { var e = new Error('challenge'); e.challenge = true; throw e; }
      if (!j.reply) throw new Error('chat ' + j.status);
      return j;
    });
  }

  /* ------------------------------------------------------------ the lead -- */
  /* The visitor sees exactly what will be sent, can correct it, and nothing
     leaves until they tap Send. One send per chat. */
  function leadCard(d) {
    var card = document.createElement('form');
    card.className = 'chat-lead';
    card.noValidate = true;
    function field(name, label, value, type) {
      return '<label class="chat-lead__field"><span>' + label + '</span>' +
        (type === 'area'
          ? '<textarea name="' + name + '" rows="2" maxlength="800">' + esc(value) + '</textarea>'
          : '<input name="' + name + '" type="' + (type || 'text') + '" maxlength="160" value="' + esc(value) + '">') +
        '</label>';
    }
    card.innerHTML =
      '<p class="chat-lead__title">Your details for the team</p>' +
      field('name', 'Name', d.name) +
      field('email', 'Email', d.email, 'email') +
      '<div class="chat-lead__pair">' +
        field('company', 'Company', d.company) +
        field('phone', 'Phone', d.phone, 'tel') +
      '</div>' +
      field('need', 'What you need', d.need, 'area') +
      '<p class="chat-lead__status" role="status"></p>' +
      '<button class="chat-lead__send" type="submit" data-cursor="action">Send to team</button>';
    log.appendChild(card);
    toBottom(true);

    var status = card.querySelector('.chat-lead__status');
    var btn = card.querySelector('.chat-lead__send');
    function val(n) { return card.elements[n].value.trim(); }

    // edits are kept, so a page change mid-edit doesn't lose them
    card.addEventListener('input', function () {
      lead = { name: val('name'), email: val('email'), company: val('company'), phone: val('phone'), need: val('need') };
      save();
    });

    card.addEventListener('submit', function (e) {
      e.preventDefault();
      if (leadSent || btn.disabled) return;
      if (!val('name')) { status.textContent = 'Please add your name.'; card.elements.name.focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val('email'))) { status.textContent = 'Please check your email address.'; card.elements.email.focus(); return; }
      btn.disabled = true;
      btn.textContent = 'Sending…';
      status.textContent = '';
      sendLead(lead = { name: val('name'), email: val('email'), company: val('company'), phone: val('phone'), need: val('need') })
        .then(function (ok) {
          if (!ok) throw new Error('mail');
          leadSent = true;
          card.classList.add('is-sent');
          [].forEach.call(card.elements, function (el) { el.disabled = true; });
          btn.textContent = 'Sent';
          var msg = 'Done. The team has your details and will reply to ' + lead.email + ' within a working day.';
          history.push({ role: 'assistant', content: msg });
          save();
          mood('wink', 1600);
          sound.done();
          addAI(msg);
        })
        .catch(function () {
          btn.disabled = false;
          btn.textContent = 'Send to team';
          status.innerHTML = linkify('That didn’t go through. Try again, or write to [' + MAIL_TO + '](mailto:' + MAIL_TO + ').');
        });
    });
  }

  function sendLead(d) {
    var tb = window.technoboost;
    var line = tb ? tb.line : function (l, v) { return v ? '<strong>' + esc(l) + ':</strong> ' + esc(v) + '<br>\n' : ''; };
    var said = history.map(function (m) {
      return '<strong>' + (m.role === 'user' ? 'Visitor' : 'Techno AI') + ':</strong> ' + esc(m.content) + '<br>\n';
    }).join('');
    var subject = 'Chat enquiry: ' + d.name;
    var body =
      line('Name', d.name) +
      line('Email', d.email) +
      line('Company', d.company) +
      line('Phone', d.phone) +
      line('What they need', d.need) +
      line('Page', location.href) +
      '<br>\n<strong>Conversation with Techno AI</strong><br>\n' + said;

    // The mail service only accepts the live site's origin, so a local run
    // shows what would be sent instead of sending it.
    if (local) {
      if (window.console) console.info('[techno-ai] would email ' + MAIL_TO + '\n' + subject + '\n\n' + body);
      return new Promise(function (r) { setTimeout(function () { r(true); }, 700); });
    }
    if (!tb) return Promise.resolve(false);
    return tb.postMail(subject, body, '');
  }

  /* ------------------------------------------------------------ opening --- */
  function greet() {
    mood('wink', 1600);
    addAI("Hi, I'm Techno AI. Ask me about our services, products or past work, and I'll point you to the right place.")
      .then(function () {
        addChips(['What do you build?', 'Show me a case study', 'I’d like to talk to the team']);
      });
  }

  log.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (a) close();
  });

  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });
  input.addEventListener('input', function () { send.disabled = busy || !input.value.trim(); });
})();
