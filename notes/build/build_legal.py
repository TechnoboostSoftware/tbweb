import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from legal import PAGES, UPDATED

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

def to_home(html):
    html = re.sub(r'href="#(top|about|services|case-studies|products|contact|blog)"',
                  lambda m: 'href="index.html#' + m.group(1) + '"', html)
    return html.replace('href="index.html#top"', 'href="index.html"')

HEADER = to_home(HEADER).replace('class="main-nav__link is-current" href="index.html"',
                                 'class="main-nav__link" href="index.html"')
FOOTER = to_home(FOOTER)
BADGE  = BADGE.replace('href="#contact"', 'href="index.html#contact"')

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
<body class="page-legal">

{sprite}

<div class="cursor" aria-hidden="true"><span class="cursor__ring"></span></div>

{badge}

<div class="site" id="scroll-content">

{header}

  <main>

    <section class="legal-hero">
      <div class="container">
        <p class="eyebrow eyebrow--teal"><span class="eyebrow__text">{eyebrow}</span></p>
        <h1 class="case-hero__title">{title}</h1>
        <p class="case-hero__lead">{lead}</p>
        <p class="legal-hero__meta">Last updated {updated}</p>
      </div>
    </section>

    <section class="section legal-body">
      <div class="container">
        <div class="legal-doc">
{body}
        </div>

        <aside class="legal-aside">
          <h2 class="legal-aside__h">The other documents</h2>
          <div class="legal-aside__links">
{siblings}
          </div>
        </aside>
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

def render(body):
    out = []
    for kind, val in body:
        if kind == "h2":
            out.append('          <h2 class="legal-h2">%s</h2>' % val)
        elif kind == "p":
            out.append('          <p class="legal-p">%s</p>' % val)
        elif kind == "list":
            items = "\n".join('            <li>%s</li>' % i for i in val)
            out.append('          <ul class="legal-list">\n%s\n          </ul>' % items)
    return "\n".join(out)

ARROW = '<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><use href="#g-arrow-ne"/></svg>'

def build():
    for p in PAGES:
        sibs = "\n".join(
            '            <a href="%s.html" data-cursor="action">%s'
            '<span class="circle-arrow" aria-hidden="true">%s</span></a>'
            % (o["slug"], o["title"], ARROW)
            for o in PAGES if o["slug"] != p["slug"])

        html = SHELL.format(sprite=SPRITE, badge=BADGE, header=HEADER, footer=FOOTER,
                            modal=MODAL, eyebrow=p["eyebrow"], title=p["title"],
                            lead=p["lead"], updated=UPDATED,
                            body=render(p["body"]), siblings=sibs)
        path = os.path.join(ROOT, p["slug"] + ".html")
        open(path, "w", encoding="utf-8").write(html)
        print("wrote", p["slug"] + ".html", len(html), "bytes")

if __name__ == "__main__":
    build()
