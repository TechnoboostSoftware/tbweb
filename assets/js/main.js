/* =========================================================================
   Technoboost: interactions & motion
   ========================================================================= */
(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     Where form submissions go.

     Both the contact form and the careers application POST to the Technoboost
     mail service. It accepts a subject and a body string only, with no
     attachments, so a resume is uploaded to Drive first and the email
     carries the link.

     The service checks the browser's Origin header against a whitelist, and
     the only host on it is https://technoboostservices.com, exactly that:
     apex and https. Anywhere else (a Vercel preview, localhost, a www
     subdomain) the send returns 404 "Access Token or Host not Verified".
     That is not something the page can work around: Origin is set by the
     browser, not by this script. To allow another host, it has to be added
     on the mail service's side.

     DRIVE_ENDPOINT is the Apps Script web app from notes/resume-drive-upload.gs.
     It answers with a 302 to script.googleusercontent.com; fetch follows that
     automatically and the final response carries Access-Control-Allow-Origin,
     so no proxy is needed. Empty it and the application still sends; the
     email just says the CV could not be attached.
     ----------------------------------------------------------------------- */
  var MAIL_ENDPOINT  = 'https://es.technoboost.in/api/v1/mail-send';
  var MAIL_TOKEN     = 'P8gRVxM%P8gRVxYHS';
  var DRIVE_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyXrqDGkXcCQUG5KR1_rk3Mr9SwJamJl_KrWYA2MQJiD087bKR4Atud4V7tyWBsW-KskA/exec';
  var MAIL_TO        = 'contactus@technoboost.in';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* =======================================================================
     Smooth scrolling  (lerped wheel scrolling, in the spirit of Lenis)
     ======================================================================= */
  var smooth = (function () {
    if (reduced || !finePointer) return null;

    var target = window.scrollY;
    var current = target;
    var running = false;
    var EASE = 0.11;

    document.documentElement.classList.add('smooth');

    function max() {
      return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    }

    function frame() {
      var diff = target - current;

      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        running = false;
        return;
      }

      current += diff * EASE;
      window.scrollTo(0, current);
      requestAnimationFrame(frame);
    }

    function start() {
      if (!running) { running = true; requestAnimationFrame(frame); }
    }

    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey) return;                                  // pinch-zoom
      if (e.target.closest && e.target.closest('.main-nav__dropdown, .modal')) return;
      e.preventDefault();
      target = Math.min(Math.max(target + e.deltaY, 0), max());
      start();
    }, { passive: false });

    // keep in sync when something else moves the page
    window.addEventListener('scroll', function () {
      if (!running) { target = current = window.scrollY; }
    }, { passive: true });

    window.addEventListener('resize', function () {
      target = current = window.scrollY;
    });

    return {
      to: function (y) {
        target = Math.min(Math.max(y, 0), max());
        start();
      },
      sync: function () { target = current = window.scrollY; }
    };
  })();

  /* anchor links ride the smooth scroller ---------------------------------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id === '#' || id.length < 2) return;
    var el = document.querySelector(id);
    if (!el) return;

    e.preventDefault();
    var head = document.querySelector('.site-header');
    var y = Math.max(0, el.getBoundingClientRect().top + window.scrollY
                        - (head ? head.offsetHeight : 0) - 12);

    if (smooth) smooth.to(y);
    else window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  });


  /* =======================================================================
     Header: sticky, and coloured by whatever is behind it
     ======================================================================= */
  (function () {
    var head = document.querySelector('.site-header');
    if (!head) return;

    // every band the header can pass over that is dark
    var dark = document.querySelectorAll(
      '.hero, .section--dark, .case-hero, .legal-hero, .blog-hero, .site-footer');
    if (!dark.length) { head.classList.add('site-header--light'); return; }

    var queued = false;

    function paint() {
      queued = false;
      // Dark wins on any overlap with the header band, so the header stays
      // black for the whole of a dark section, from the moment its top edge
      // reaches the header until its bottom edge has cleared the viewport top.
      // A midpoint sample would flicker white in the first 30px of the hero,
      // where nothing sits behind the header yet.
      var h = head.offsetHeight;
      var onDark = false;
      for (var i = 0; i < dark.length; i++) {
        var r = dark[i].getBoundingClientRect();
        if (r.top <= h && r.bottom >= 0) { onDark = true; break; }
      }
      head.classList.toggle('site-header--light', !onDark);
    }

    function request() {
      if (!queued) { queued = true; requestAnimationFrame(paint); }
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    window.addEventListener('load', request);
    paint();
  })();

  /* =======================================================================
     Custom cursor
     ======================================================================= */
  (function () {
    var el = document.querySelector('.cursor');
    if (!el || !finePointer || reduced) { if (el) el.remove(); return; }

    document.documentElement.classList.add('has-cursor');

    var x = window.innerWidth / 2, y = window.innerHeight / 2;
    var cx = x, cy = y;
    var HOVER = 'a, button, input, textarea, label, [data-cursor], .acc-row, .faq__item, .logo-cell';

    window.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
      el.classList.add('is-live');

      var t = e.target;
      el.classList.toggle('is-hover', !!(t.closest && t.closest(HOVER)));
      el.classList.toggle('on-dark', !!(t.closest && t.closest('.hero, .s-thinking, .site-footer, .site-header, .marquee')));
    }, { passive: true });

    window.addEventListener('mousedown', function () { el.classList.add('is-down'); });
    window.addEventListener('mouseup', function () { el.classList.remove('is-down'); });
    document.addEventListener('mouseleave', function () { el.classList.remove('is-live'); });
    document.addEventListener('mouseenter', function () { el.classList.add('is-live'); });

    (function loop() {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
      requestAnimationFrame(loop);
    })();
  })();

  /* =======================================================================
     Scroll reveals
     ======================================================================= */
  (function () {
    var groups = [
      ['.s-clients__head, .s-services__head, .s-thinking__head, .s-products__head, .s-cases__head, .s-faq__head, .s-contact__left', 0],
      ['.logo-cell', 0.05],
      ['.quote-card, .s-contact__right', 0],
      ['.acc-row', 0.04],
      ['.think-cell', 0.07],
      ['.step', 0],
      ['.product', 0.08],
      ['.case', 0.06],
      ['.faq__item', 0.05],
      ['.promo, .site-footer__cols', 0],
      ['.case-hero .container > *', 0.05],
      ['.case-block, .case-facts, .case-why__row, .case-next__row', 0],
      ['.deliver', 0.05]
    ];

    var items = [];
    groups.forEach(function (g) {
      document.querySelectorAll(g[0]).forEach(function (el, i) {
        el.setAttribute('data-rv', '');
        if (g[1]) el.style.setProperty('--d', (i % 6) * g[1] + 's');
        items.push(el);
      });
    });

    if (reduced) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    // A plain rAF-throttled sweep: deterministic, and elements drop out of the
    // list as soon as they are revealed, so the cost trends to zero.
    var queued = false;

    function sweep() {
      queued = false;
      var vh = window.innerHeight;
      for (var i = items.length - 1; i >= 0; i--) {
        // anything at or above the fold reveals, including content the
        // visitor jumped straight past via an anchor link
        var r = items[i].getBoundingClientRect();
        if (r.top < vh - 60) {
          items[i].classList.add('is-in');
          items.splice(i, 1);
        }
      }
      if (!items.length) {
        window.removeEventListener('scroll', request);
        window.removeEventListener('resize', request);
      }
    }

    function request() {
      if (!queued) { queued = true; requestAnimationFrame(sweep); }
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    window.addEventListener('load', request);
    request();
  })();

  /* hero entrance ---------------------------------------------------------- */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { document.body.classList.add('is-ready'); });
  });

  /* =======================================================================
     Navigation
     ======================================================================= */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* every nav flyout, products and case studies alike, shares one handler */
  var menus = [].slice.call(document.querySelectorAll('.nav-menu'));

  menus.forEach(function (menu) {
    var trigger = menu.querySelector('.main-nav__link--menu');
    var panel = menu.querySelector('.main-nav__dropdown');
    if (!trigger || !panel) return;

    function setMenu(open) {
      menu.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    }
    menu._close = function () { setMenu(false); };

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var willOpen = panel.hidden;
      menus.forEach(function (m) { if (m !== menu) m._close && m._close(); });
      if (willOpen && menu._reset) menu._reset();   // always open on the first product
      setMenu(willOpen);
    });

    /* products flyout: hovering a name swaps the logo + blurb on its left */
    var links = panel.querySelectorAll('.np__list a');
    var cards = panel.querySelectorAll('.np__card');
    if (links.length && cards.length) {
      var show = function (key) {
        cards.forEach(function (c) { c.classList.toggle('is-active', c.dataset.np === key); });
        links.forEach(function (a) { a.classList.toggle('is-active', a.dataset.np === key); });
      };
      links.forEach(function (a) {
        a.addEventListener('mouseenter', function () { show(a.dataset.np); });
        a.addEventListener('focus', function () { show(a.dataset.np); });
      });
      show(links[0].dataset.np);
      menu._reset = function () { show(links[0].dataset.np); };
    }
  });

  document.addEventListener('click', function (e) {
    menus.forEach(function (m) { if (!m.contains(e.target)) m._close && m._close(); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') menus.forEach(function (m) { m._close && m._close(); });
  });

  /* =======================================================================
     Accordions
     ======================================================================= */
  function accordion(root, itemSel, btnSel) {
    var el = document.querySelector(root);
    if (!el) return;

    el.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;            // links inside a row still work
      var item = e.target.closest(itemSel);         // the whole row is the target
      if (!item) return;
      var btn = item.querySelector(btnSel);
      if (!btn) return;
      var open = !item.classList.contains('is-open');

      el.querySelectorAll(itemSel).forEach(function (i) {
        i.classList.remove('is-open');
        var b = i.querySelector(btnSel);
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      if (open) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }

      // heights changed under the smooth scroller, so resync it
      if (smooth) setTimeout(smooth.sync, 600);
    });
  }

  accordion('[data-accordion="services"]', '.acc-row', '.acc-row__toggle');
  accordion('[data-accordion="faq"]', '.faq__item', '.faq__q');

  /* =======================================================================
     Careers modal
     ======================================================================= */
  (function () {
    var modal = document.getElementById('careers');
    if (!modal) return;
    var lastFocus = null;

    function open(e) {
      if (e) e.preventDefault();
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      var f = modal.querySelector('a, button');
      if (f) f.focus();
    }
    function close() {
      modal.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
      // a confirmed application shouldn't still be on screen next time
      var panel = modal.querySelector('.thanks');
      if (panel && !panel.hidden) {
        panel.hidden = true;
        var f = modal.querySelector('form');
        f.hidden = false;
        f.style.display = '';
        panel.parentElement.classList.remove('is-done');
      }
    }

    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-careers]')) { open(e); return; }
      if (!modal.hidden && e.target.closest('[data-close]')) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) close();
    });
    if (location.hash === '#careers') open();
  })();


  /* =======================================================================
     Form delivery: one path for the contact form and the job application
     ======================================================================= */

  function esc(v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // The mail service takes one body string. Whether it renders that as HTML or
  // as plain text is not documented, so each line carries both a <br> and a
  // newline, so it reads correctly either way.
  function line(label, value) {
    if (!value) return '';
    return '<strong>' + esc(label) + ':</strong> ' + esc(value) + '<br>\n';
  }

  function postMail(subject, body) {
    return fetch(MAIL_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: MAIL_TOKEN,
        emailSubjectLine: subject,
        emailBodyContent: body
      })
    })
    .then(function (r) { return r.json().catch(function () { return { success: r.ok }; }); })
    .then(function (j) {
      var ok = !!(j && j.success !== false);
      if (!ok && window.console) console.warn('[technoboost] mail-send:', j && j.message);
      return ok;
    });
  }

  /* Resume upload ---------------------------------------------------------
     The mail service cannot carry an attachment, so the file goes to a Drive
     folder first and the email carries a view link.

     Two quirks of Apps Script shape this:

     * It is sent as text/plain on purpose. Apps Script web apps do not answer
       a CORS preflight, and an application/json content type would trigger
       one.
     * Its /exec answers with a redirect, and that redirect intermittently
       serves Google's own HTML error page instead of the script's JSON,
       often enough to matter on a first submission, and more so once Google
       starts throttling. Three attempts with a widening gap clear it in
       practice; the whole thing is still bounded at about four seconds. A
       retry can leave a duplicate file in the folder, which is much the
       better failure: a spare copy of a CV beats a lost one. */
  function uploadResume(file) {
    if (!DRIVE_ENDPOINT || !file) return Promise.resolve(null);

    var TRIES = 3;

    function readBase64() {
      return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onload = function () { resolve(String(reader.result).split(',')[1]); };
        reader.readAsDataURL(file);
      });
    }

    function attempt(payload, n) {
      return fetch(DRIVE_ENDPOINT, {
        method: 'POST',
        cache: 'no-store',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: payload
      })
      .then(function (r) { return r.text(); })
      .then(function (text) {
        var parsed = null;
        try { parsed = JSON.parse(text); } catch (e) { /* an HTML error page */ }
        if (parsed && parsed.ok && parsed.link) return parsed.link;
        return retry(payload, n, parsed ? parsed.error : text.slice(0, 120));
      })
      .catch(function (err) { return retry(payload, n, err); });
    }

    function retry(payload, n, reason) {
      if (n >= TRIES) {
        if (window.console) console.warn('[technoboost] resume upload failed:', reason);
        return null;
      }
      return new Promise(function (resolve) {
        setTimeout(function () { resolve(attempt(payload, n + 1)); }, 1200 * n);
      });
    }

    return readBase64()
      .then(function (base64) {
        return attempt(JSON.stringify({
          name: file.name, mimeType: file.type, data: base64
        }), 1);
      })
      .catch(function () { return null; });
  }

  function setStatus(form, ok, msg) {
    var el = form.querySelector('.form-status');
    if (!el) return;
    el.textContent = msg;
    el.classList.toggle('is-error', !ok);
  }

  function showThanks(form) {
    var panel = form.parentElement.querySelector('.thanks');
    if (!panel) return false;

    form.hidden = true;
    form.style.display = 'none';                   // beats the form's own grid
    panel.hidden = false;
    form.parentElement.classList.add('is-done');   // hides the form's intro line
    setStatus(form, true, '');
    panel.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' });
    return true;
  }

  function restoreForm(panel) {
    var form = panel.parentElement.querySelector('form');
    if (!form) return;
    panel.hidden = true;
    form.hidden = false;
    form.style.display = '';
    form.parentElement.classList.remove('is-done');
    form.reset();
    var shown = form.querySelector('.dropzone__file');
    if (shown) shown.hidden = true;
  }

  // "submit another" puts the empty form back
  document.addEventListener('click', function (e) {
    var again = e.target.closest && e.target.closest('[data-again]');
    if (again) restoreForm(again.closest('.thanks'));
  });

  /* =======================================================================
     Job application
     ======================================================================= */
  (function () {
    var form = document.querySelector('.apply-form');
    if (!form) return;

    var input = form.querySelector('#ap-cv');
    var drop  = form.querySelector('.dropzone');
    var shown = form.querySelector('.dropzone__file');
    var MAX   = 5 * 1024 * 1024;
    var OK_EXT = /\.(pdf|docx?)$/i;

    function showFile() {
      var f = input.files[0];
      shown.hidden = !f;
      if (f) shown.textContent = f.name + '  ·  ' + (f.size / 1024 / 1024).toFixed(1) + ' MB';
    }
    input.addEventListener('change', showFile);

    ['dragenter', 'dragover'].forEach(function (t) {
      drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('is-over'); });
    });
    ['dragleave', 'drop'].forEach(function (t) {
      drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.remove('is-over'); });
    });
    drop.addEventListener('drop', function (e) {
      if (e.dataTransfer.files.length) { input.files = e.dataTransfer.files; showFile(); }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#ap-name');
      var mail = form.querySelector('#ap-email');
      var f = input.files[0];

      if (!name.value.trim())  { setStatus(form, false, 'Please enter your full name.'); name.focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim())) {
        setStatus(form, false, 'Please enter a valid email address.'); mail.focus(); return;
      }
      if (!f)                  { setStatus(form, false, 'Please attach your resume.'); drop.focus(); return; }
      if (!OK_EXT.test(f.name)) { setStatus(form, false, 'Resume must be a PDF, DOC or DOCX.'); return; }
      if (f.size > MAX)        { setStatus(form, false, 'Resume must be under 5 MB.'); return; }

      setStatus(form, true, 'Uploading your resume…');
      form.classList.add('is-sending');

      uploadResume(f).then(function (link) {
        setStatus(form, true, 'Sending…');

        var body =
          '<strong>New job application</strong><br>\n<br>\n' +
          line('Name', name.value.trim()) +
          line('Email', mail.value.trim()) +
          line('Phone', form.querySelector('#ap-phone').value.trim()) +
          line('Position', form.querySelector('#ap-role').value.trim()) +
          '<br>\n' +
          (link
            ? '<strong>Resume:</strong> <a href="' + link + '">' + esc(f.name) + '</a><br>\n' +
              esc(link) + '<br>\n'
            : '<strong>Resume:</strong> ' + esc(f.name) + ' could not be uploaded. ' +
              'reply to this candidate and ask them to send it.<br>\n');

        var note = form.querySelector('#ap-note').value.trim();
        if (note) body += '<br>\n<strong>Cover letter</strong><br>\n' + esc(note).replace(/\n/g, '<br>\n') + '<br>\n';

        return postMail('Job application: ' + name.value.trim(), body);
      })
      .then(function (ok) {
        form.classList.remove('is-sending');
        if (!ok) {
          setStatus(form, false, 'Something went wrong. Please email ' + MAIL_TO + ' instead.');
          return;
        }
        shown.hidden = true;
        if (!showThanks(form)) setStatus(form, true, 'Thanks, your application is in.');
      })
      .catch(function () {
        form.classList.remove('is-sending');
        setStatus(form, false, 'Something went wrong. Please email ' + MAIL_TO + ' instead.');
      });
    });
  })();

  /* =======================================================================
     Contact form
     ======================================================================= */
  var form = document.querySelector('.contact-form');
  if (form) {
    var status = form.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = form.querySelector('#cf-email');
      var name = form.querySelector('#cf-name');

      if (!name.value.trim()) {
        setStatus(form, false, 'Please tell us your name.');
        name.focus();
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setStatus(form, false, 'Please enter a valid email address.');
        email.focus();
        return;
      }

      setStatus(form, true, 'Sending…');
      form.classList.add('is-sending');

      var body =
        '<strong>New website enquiry</strong><br>\n<br>\n' +
        line('Name', name.value.trim()) +
        line('Email', email.value.trim()) +
        line('Phone', form.querySelector('#cf-phone').value.trim()) +
        line('Company', form.querySelector('#cf-company').value.trim());

      var msg = form.querySelector('#cf-msg').value.trim();
      if (msg) body += '<br>\n<strong>Message</strong><br>\n' + esc(msg).replace(/\n/g, '<br>\n') + '<br>\n';

      postMail('Website enquiry: ' + name.value.trim(), body).then(function (ok) {
        form.classList.remove('is-sending');
        if (!ok) {
          setStatus(form, false, 'Something went wrong. Please email ' + MAIL_TO + ' instead.');
          return;
        }
        form.reset();
        if (!showThanks(form)) {
          setStatus(form, true, 'Thanks, we\u2019ll be in touch shortly.');
          return;
        }
        var panel = form.parentElement.querySelector('.thanks');
        setTimeout(function () { restoreForm(panel); }, 3000);
      })
      .catch(function () {
        form.classList.remove('is-sending');
        setStatus(form, false, 'Something went wrong. Please email ' + MAIL_TO + ' instead.');
      });
    });
  }

  /* =======================================================================
     Marquee: pause on hover
     ======================================================================= */
  var marquee = document.querySelector('.marquee');
  if (marquee) {
    var tracks = marquee.querySelectorAll('.marquee__track');
    marquee.addEventListener('mouseenter', function () {
      tracks.forEach(function (t) { t.style.animationPlayState = 'paused'; });
    });
    marquee.addEventListener('mouseleave', function () {
      tracks.forEach(function (t) { t.style.animationPlayState = 'running'; });
    });
  }
})();
