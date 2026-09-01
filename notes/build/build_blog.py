import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from blog import POSTS

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
idx = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()

def between(a, b, s=idx):
    i = s.index(a); j = s.index(b, i)
    return s[i:j+len(b)]

SPRITE = between('<svg width="0" height="0"', '</svg>\n')
BADGE  = between('<a class="call-badge"', '</a>\n')
HEADER = between('  <!-- ===================== HEADER =====================', '  </header>')
MODAL  = between('<div class="modal" id="careers"', '</div>\n</div>')
BANNER = between('<div class="cookie-bar"', '</div>\n</div>')
FOOTER = between('  <!-- ===================== FOOTER =====================', '  </footer>')

def to_home(html):
    html = re.sub(r'href="#(top|about|services|case-studies|products|contact|blog)"',
                  lambda m: 'href="index.html#' + m.group(1) + '"', html)
    return html.replace('href="index.html#top"', 'href="index.html"')

HEADER = to_home(HEADER).replace('class="main-nav__link is-current" href="index.html"',
                                 'class="main-nav__link" href="index.html"')
FOOTER = to_home(FOOTER)
BADGE  = BADGE.replace('href="#contact"', 'href="index.html#contact"')

def mark_current(header, href):
    return header.replace('<a class="main-nav__link" href="%s">' % href,
                          '<a class="main-nav__link is-current" href="%s">' % href, 1)

HEADER_BLOG = mark_current(HEADER, "blog.html")

BRK = ('<span class="eyebrow__num">'
       '<svg class="brk" viewBox="0 0 3.84779 15.391"><use href="#g-bracket-l"/></svg>%s'
       '<svg class="brk" viewBox="0 0 3.8478 15.391"><use href="#g-bracket-r"/></svg></span>')

def eyebrow(num, text):
    inner = (BRK % num + "\n          ") if num else ""
    return ('<p class="eyebrow eyebrow--teal">\n          %s'
            '<span class="eyebrow__text">%s</span>\n        </p>' % (inner, text))

ARROW = '<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#g-arrow-ne"/></svg>'

SHELL = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!--SEO-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="{bodycls}">

{sprite}

<div class="cursor" aria-hidden="true"><span class="cursor__ring"></span></div>

{badge}

<div class="site" id="scroll-content">

{header}

  <main>

{main}

  </main>

{footer}

</div>

{modal}

{banner}

<script src="assets/js/main.js"></script>
</body>
</html>
"""

# ---------------------------------------------------------------- index ---
def build_index():
    cards = "\n".join('''          <a class="post-card" href="%s.html" data-cursor="action">
            <span class="post-card__cat">%s</span>
            <h3 class="post-card__title">%s</h3>
            <p class="post-card__dek">%s</p>
            <span class="post-card__meta"><time datetime="%s">%s</time> · %s</span>
          </a>''' % (p["slug"], p["cat"], p["title"], p["dek"], p["date"], p["date_h"], p["read"])
        for p in POSTS)

    main = '''    <section class="blog-hero">
      <div class="container">
        %s
        <h1 class="case-hero__title">Notes from building operational software.</h1>
        <p class="case-hero__lead">Practical writing on stock accuracy, process discovery, manufacturing planning, operational reporting and workflow automation, drawn from the systems we build and run.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="post-grid post-grid--all">
%s
        </div>
      </div>
    </section>
''' % (eyebrow(None, "Insights"), cards)

    return SHELL.format(bodycls="page-blog", modal=MODAL, banner=BANNER, sprite=SPRITE, badge=BADGE,
                        header=HEADER_BLOG, footer=FOOTER, main=main)

# ----------------------------------------------------------------- post ---
def build_post(p, nxt):
    body = []
    for kind, val in p["body"]:
        if kind == "h2":
            body.append('        <h2 class="post-h2">%s</h2>' % val)
        elif kind == "p":
            body.append('        <p class="post-p">%s</p>' % val)
        elif kind == "list":
            lis = "\n".join('          <li>%s</li>' % x for x in val)
            body.append('        <ul class="post-list">\n%s\n        </ul>' % lis)

    main = '''    <section class="blog-hero blog-hero--post">
      <div class="container">
        %s
        <p class="case-hero__label">%s</p>
        <h1 class="case-hero__title">%s</h1>
        <p class="case-hero__lead">%s</p>
        <p class="post-meta"><time datetime="%s">%s</time> · %s</p>
      </div>
    </section>

    <section class="section">
      <article class="container post-body">
%s
      </article>
    </section>

    <section class="section section--dark case-why">
      <div class="container">
        <div class="case-why__row">
          <div class="case-why__left">
            %s
            <h2 class="h2 h2--light">Facing this in your operation?</h2>
          </div>
          <div class="case-why__right">
            <p class="sec-intro sec-intro--light">We study the system before choosing the solution. If any of the above sounds familiar, we would be glad to walk through it with you.</p>
            <a class="btn-arrow" href="index.html#contact" data-cursor="action">
              <span class="btn-arrow__label">Get in touch</span>
              <span class="btn-arrow__circle">%s</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section case-next">
      <div class="container">
        <div class="case-next__row">
          <div>
            %s
            <h2 class="h2">%s</h2>
          </div>
          <a class="btn-arrow" href="%s.html" data-cursor="action">
            <span class="btn-arrow__label">Read next</span>
            <span class="btn-arrow__circle">%s</span>
          </a>
        </div>
      </div>
    </section>
''' % (eyebrow(None, "Insights"), p["cat"], p["title"], p["dek"],
       p["date"], p["date_h"], p["read"], "\n".join(body),
       eyebrow(None, "Work with us"), ARROW,
       eyebrow(None, "Next article"), nxt["title"], nxt["slug"], ARROW)

    return SHELL.format(bodycls="page-blog page-post", modal=MODAL, banner=BANNER, sprite=SPRITE, badge=BADGE,
                        header=HEADER_BLOG, footer=FOOTER, main=main)

open(os.path.join(ROOT, "blog.html"), "w", encoding="utf-8").write(build_index())
print("wrote blog.html")
for i, p in enumerate(POSTS):
    nxt = POSTS[(i + 1) % len(POSTS)]
    open(os.path.join(ROOT, p["slug"] + ".html"), "w", encoding="utf-8").write(build_post(p, nxt))
    print("wrote", p["slug"] + ".html")
