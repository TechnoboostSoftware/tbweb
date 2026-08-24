import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cases import CASES

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
idx = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

def between(a, b, s=idx):
    i = s.index(a); j = s.index(b, i)
    return s[i:j+len(b)]

SPRITE = between('<svg width="0" height="0"', '</svg>\n')
BADGE  = between('<a class="call-badge"', '</a>\n')
HEADER = between('  <!-- ===================== HEADER =====================', '  </header>')
MODAL  = between('<div class="modal" id="careers"', '</div>\n</div>')
FOOTER = between('  <!-- ===================== FOOTER =====================', '  </footer>')

# nav + footer links point back to the homepage from a case page
def to_home(html):
    html = re.sub(r'href="#(top|about|services|case-studies|products|contact)"',
                  lambda m: 'href="index.html#' + m.group(1) + '"', html)
    return html.replace('href="index.html#top"', 'href="index.html"')

HEADER = to_home(HEADER).replace('class="main-nav__link is-current" href="index.html"',
                                 'class="main-nav__link" href="index.html"')
HEADER = HEADER.replace('href="index.html#case-studies">Case Studies</a>',
                        'href="index.html#case-studies">Case Studies</a>').replace(
                        '<a class="main-nav__link" href="index.html#case-studies">',
                        '<a class="main-nav__link is-current" href="index.html#case-studies">')
FOOTER = to_home(FOOTER)
BADGE  = BADGE.replace('href="#contact"', 'href="index.html#contact"')

BRK = ('<span class="eyebrow__num">'
       '<svg class="brk" viewBox="0 0 3.84779 15.391"><use href="#g-bracket-l"/></svg>%s'
       '<svg class="brk" viewBox="0 0 3.8478 15.391"><use href="#g-bracket-r"/></svg></span>')

def eyebrow(num, text, mod="eyebrow--teal"):
    """num=None renders the label without the bracketed index; only the hero
    carries a number, and it matches the card number on the homepage."""
    inner = (BRK % num + "\n          ") if num else ""
    return ('<p class="eyebrow %s">\n          %s'
            '<span class="eyebrow__text">%s</span>\n        </p>' % (mod, inner, text))

ARROW = '<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#g-arrow-ne"/></svg>'

PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} | Technoboost case study</title>
<meta name="description" content="{lead}">
<link rel="icon" href="assets/img/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
<link rel="icon" type="image/png" sizes="64x64" href="assets/img/favicon-64.png">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="page-case">

{sprite}

<div class="cursor" aria-hidden="true"><span class="cursor__ring"></span></div>

{badge}

<div class="site" id="scroll-content">

{header}

  <main>

    <!-- ===================== CASE HERO ===================== -->
    <section class="case-hero">
      <div class="container">
        {hero_eyebrow}
        <p class="case-hero__label">{label}</p>
        <h1 class="case-hero__title">{title}</h1>
        <p class="case-hero__lead">{lead}</p>
        <dl class="case-facts">
{facts}
        </dl>
      </div>
    </section>

{blocks}

    <!-- ===================== NEXT ===================== -->
    <section class="section case-next">
      <div class="container">
        <div class="case-next__row">
          <div>
            {next_eyebrow}
            <h2 class="h2">{next_title}</h2>
          </div>
          <a class="btn-arrow" href="{next_slug}.html" data-cursor="action">
            <span class="btn-arrow__label">Next case</span>
            <span class="btn-arrow__circle">{arrow}</span>
          </a>
        </div>
      </div>
    </section>

  </main>

{footer}

</div>

{modal}

<script src="assets/js/main.js"></script>
</body>
</html>
"""

PROSE = """    <section class="section{soft}">
      <div class="container case-block">
        {eyebrow}
        <h2 class="h2{light}">{h}</h2>
{paras}
      </div>
    </section>
"""

GRID = """    <section class="section{soft}">
      <div class="container">
        {eyebrow}
        <h2 class="h2{light}">{h}</h2>
{paras}
        <div class="deliver-grid">
{items}
        </div>
      </div>
    </section>
"""

WHY = """    <section class="section section--dark case-why">
      <div class="container">
        <div class="case-why__row">
          <div class="case-why__left">
            {eyebrow}
            <h2 class="h2 h2--light">{h}</h2>
          </div>
          <div class="case-why__right">
{paras}
            <a class="btn-arrow" href="index.html#contact" data-cursor="action">
              <span class="btn-arrow__label">Discuss this</span>
              <span class="btn-arrow__circle">{arrow}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
"""

def build(case, nxt):
    facts = "\n".join(
        '          <div class="case-fact"><dt>%s</dt><dd>%s</dd></div>' % (k, v)
        for k, v in case["facts"])

    blocks = []
    n = 0
    for b in case["blocks"]:
        n += 1
        num = "%02d" % n
        soft = " section--soft" if n % 2 == 1 else ""
        paras = "\n".join('        <p class="sec-intro">%s</p>' % p for p in b["p"])

        if b["kind"] == "prose":
            blocks.append(PROSE.format(soft=soft, light="",
                          eyebrow=eyebrow(None, b["eyebrow"]), h=b["h"], paras=paras))
        elif b["kind"] == "grid":
            items = "\n".join(
                '          <article class="deliver">\n'
                '            <span class="deliver__num">%02d</span>\n'
                '            <h3 class="deliver__title">%s</h3>\n'
                '            <p class="deliver__text">%s</p>\n'
                '          </article>' % (i + 1, t, d)
                for i, (t, d) in enumerate(b["items"]))
            blocks.append(GRID.format(soft=soft, light="",
                          eyebrow=eyebrow(None, b["eyebrow"]), h=b["h"], paras=paras, items=items))
        else:  # why
            paras = "\n".join('            <p class="sec-intro sec-intro--light">%s</p>' % p for p in b["p"])
            blocks.append(WHY.format(eyebrow=eyebrow(None, b["eyebrow"], "eyebrow--teal"),
                          h=b["h"], paras=paras, arrow=ARROW))

    html = PAGE.format(
        title=case["title"], lead=case["lead"], label=case["label"],
        modal=MODAL, sprite=SPRITE, badge=BADGE, header=HEADER, footer=FOOTER,
        hero_eyebrow=eyebrow(case["n"], "Case study"),
        facts=facts, blocks="\n".join(blocks),
        next_eyebrow=eyebrow(nxt["n"], "Next case study"),
        next_title=nxt["title"], next_slug=nxt["slug"], arrow=ARROW)
    return html

for i, c in enumerate(CASES):
    nxt = CASES[(i + 1) % len(CASES)]
    out = os.path.join(ROOT, c["slug"] + ".html")
    open(out, "w", encoding="utf-8").write(build(c, nxt))
    print("wrote", c["slug"] + ".html", len(build(c, nxt)), "bytes")
