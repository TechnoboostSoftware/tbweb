"""Inject SEO/AEO metadata, JSON-LD, robots.txt and sitemap.xml.

Change BASE if the site moves to its own domain; it is the only place the
absolute URL is written.
"""
import os, re, sys, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from blog import POSTS
from legal import PAGES as LEGAL

BASE = "https://technoboostservices.com"
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ORG  = "Technoboost"
TODAY = "2026-08-18"

FAVICONS = '''<link rel="icon" href="assets/img/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">
<link rel="icon" type="image/png" sizes="64x64" href="assets/img/favicon-64.png">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">'''

# ---------------------------------------------------------------- pages ---
PAGES = {
"index.html": dict(
  title="Technoboost: Custom Software, Retail ERP & AI Automation",
  desc="We build software around how your business actually works: retail ERP, ecommerce, AI automation, data analytics and product engineering. Bengaluru.",
  kw="custom software development, retail ERP, ecommerce development, AI automation, data analytics, Power BI, Smartsheet solutions, product engineering, Bengaluru software company, workflow automation",
  prio="1.0", freq="weekly"),

"blog.html": dict(
  title="Insights on Operational Software & Retail ERP | Technoboost",
  desc="Practical writing on stock accuracy, process discovery, manufacturing planning, operational reporting and workflow automation from our engineers.",
  kw="operational software blog, retail ERP insights, inventory synchronisation, manufacturing software, business intelligence, workflow automation",
  prio="0.8", freq="weekly"),
}

CASE_SEO = {
"case-retail-operations-digitization": dict(
  title="Retail Digitisation: Study the Operation, Then Build",
  desc="A process study across stores, warehouse, intake and marketplace operations, turned into a digitisation roadmap and delivered as web, mobile, ecommerce and ERP.",
  kw="operations consulting case study, process audit, retail digitisation, workflow automation, warehouse process mapping"),
"case-fashion-ecommerce-erp": dict(
  title="Ecommerce & Custom ERP: Spreadsheets to a Real System",
  desc="A synchronised ecommerce and ERP operation replacing manual stock, pricing and reporting processes for a growing direct-to-consumer fashion business.",
  kw="ecommerce ERP integration, D2C fashion ecommerce, inventory management software, spreadsheet replacement, retail back office"),
"case-analytics-inventory-intelligence": dict(
  title="Pharma BI Case Study: Power BI & Tableau on Live Data",
  desc="Interactive Power BI and Tableau dashboards consolidating multiple sources into inventory health, ageing, movement and dead-stock views fed by automated pipelines.",
  kw="Power BI case study, Tableau dashboards, inventory analytics, dead stock analysis, business intelligence consulting, data pipeline"),
"case-healthcare-workflow-automation": dict(
  title="Purchase Order Automation: Healthcare Supply Workflow",
  desc="A purchase-order automation and workflow platform for multi-state order lifecycles, webhook integrations and asynchronous processing with full traceability.",
  kw="purchase order automation, healthcare supply chain software, workflow orchestration, webhook integration, order lifecycle management"),
"case-manufacturing-bom-platform": dict(
  title="Manufacturing & BOM: Order to Finished Goods, Traceably",
  desc="A nine-module manufacturing system connecting product master, BOMs, raw materials, planning, factory execution, inventory and analytics with full traceability.",
  kw="BOM software, manufacturing execution system, production planning software, shop floor tracking, discrete manufacturing, bill of materials"),
}
for slug, d in CASE_SEO.items():
    PAGES[slug + ".html"] = dict(title=d["title"], desc=d["desc"], kw=d["kw"],
                                 prio="0.8", freq="monthly", kind="case")

for lp in LEGAL:
    PAGES[lp["slug"] + ".html"] = dict(title=lp["seo_title"], desc=lp["seo_desc"],
                                       kw=lp["kw"], prio="0.3", freq="yearly",
                                       kind="legal", legal=lp)

for p in POSTS:
    PAGES[p["slug"] + ".html"] = dict(title=p["seo_title"],
                                      desc=p["seo_desc"], kw=p["keywords"],
                                      prio="0.7", freq="monthly", kind="post", post=p)

# ------------------------------------------------------------- JSON-LD ----
def org_ld():
    return {
      "@context":"https://schema.org","@type":"Organization","@id":BASE+"/#org",
      "name":ORG,"legalName":"Technoboost Services Pvt. Ltd.","url":BASE+"/","logo":BASE+"/assets/img/apple-touch-icon.png",
      "description":"Product engineering firm building retail ERP, ecommerce, AI and automation, data analytics and workflow platforms.",
      "email":"contactus@technoboost.in",
      "address":{"@type":"PostalAddress",
        "streetAddress":"24, 2nd Floor, Shree Durga Arcade, 1st Cross Rd, Kasavanahalli",
        "addressLocality":"Bengaluru","addressCountry":"IN"},
      "sameAs":["https://www.linkedin.com/company/technoboost-services/",
                "https://technoflow.io/","https://truevisual.io/"]}

def faq_ld():
    src = open(os.path.join(ROOT,"index.html"),encoding="utf-8").read()
    qs = re.findall(r'<span class="faq__text">(.*?)</span>.*?<div class="faq__a">\s*<div><p>(.*?)</p>', src, re.S)
    out=[]
    for q,a in qs:
        a = re.sub(r'<[^>]+>','',a).strip()
        if not a: continue
        out.append({"@type":"Question","name":re.sub(r'<[^>]+>','',q).strip(),
                    "acceptedAnswer":{"@type":"Answer","text":a}})
    return {"@context":"https://schema.org","@type":"FAQPage","mainEntity":out} if out else None

def breadcrumb(name, url, parent=None):
    items=[{"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"}]
    if parent: items.append({"@type":"ListItem","position":2,"name":parent[0],"item":parent[1]})
    items.append({"@type":"ListItem","position":len(items)+1,"name":name,"item":url})
    return {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":items}

def article_ld(p, url):
    return {"@context":"https://schema.org","@type":"BlogPosting","headline":p["title"],
            "description":p["seo_desc"],"datePublished":p["date"],"dateModified":p["date"],
            "author":{"@type":"Organization","name":ORG,"url":BASE+"/"},
            "publisher":{"@id":BASE+"/#org"},
            "mainEntityOfPage":{"@type":"WebPage","@id":url},
            "articleSection":p["cat"],"inLanguage":"en"}

def ld(obj):
    return '<script type="application/ld+json">%s</script>' % json.dumps(obj, separators=(",",":"))

# ------------------------------------------------------------- inject -----
def head_block(fn, m):
    url = BASE + "/" + ("" if fn=="index.html" else fn)
    parts = [
      '<title>%s</title>' % m["title"],
      '<meta name="description" content="%s">' % m["desc"],
      '<meta name="keywords" content="%s">' % m["kw"],
      '<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">',
      '<meta name="author" content="%s">' % ORG,
      '<link rel="canonical" href="%s">' % url,
      FAVICONS,
      '<meta property="og:type" content="%s">' % ("article" if m.get("kind")=="post" else "website"),
      '<meta property="og:site_name" content="%s">' % ORG,
      '<meta property="og:title" content="%s">' % m["title"],
      '<meta property="og:description" content="%s">' % m["desc"],
      '<meta property="og:url" content="%s">' % url,
      '<meta property="og:image" content="%s/assets/img/apple-touch-icon.png">' % BASE,
      '<meta name="twitter:card" content="summary_large_image">',
      '<meta name="twitter:title" content="%s">' % m["title"],
      '<meta name="twitter:description" content="%s">' % m["desc"],
      '<meta name="twitter:image" content="%s/assets/img/apple-touch-icon.png">' % BASE,
    ]
    if fn == "index.html":
        parts.append(ld(org_ld()))
        f = faq_ld()
        if f: parts.append(ld(f))
    elif m.get("kind") == "case":
        parts.append(ld(breadcrumb(re.split(r"\s[|:]\s", m["title"])[0].strip(), url,
                                   ("Case studies", BASE+"/#case-studies"))))
    elif m.get("kind") == "legal":
        parts.append(ld(breadcrumb(m["legal"]["title"].replace("&amp;", "&"), url,
                                   ("Home", BASE + "/"))))
    elif m.get("kind") == "post":
        parts.append(ld(article_ld(m["post"], url)))
        parts.append(ld(breadcrumb(m["post"]["title"], url, ("Insights", BASE+"/blog.html"))))
    return "\n".join(parts)

changed = 0
for fn, m in PAGES.items():
    path = os.path.join(ROOT, fn)
    s = open(path, encoding="utf-8").read()
    block = head_block(fn, m)

    if "<!--SEO-->" in s:                       # generated blog pages
        s = s.replace("<!--SEO-->", block, 1)
    else:                                        # existing pages: replace the head chunk
        start = s.index("<title>")
        end = s.index('<link rel="preconnect" href="https://fonts.googleapis.com">')
        s = s[:start] + block + "\n" + s[end:]
    open(path, "w", encoding="utf-8").write(s)
    changed += 1
print("SEO injected into", changed, "pages")

# ------------------------------------------------------- robots + sitemap -
open(os.path.join(ROOT,"robots.txt"),"w").write(
"""# Every crawler is welcome, including AI answer engines.
User-agent: *
Allow: /

Sitemap: %s/sitemap.xml
""" % BASE)

urls = []
for fn, m in PAGES.items():
    loc = BASE + "/" + ("" if fn=="index.html" else fn)
    lastmod = m["post"]["date"] if m.get("kind")=="post" else TODAY
    urls.append("  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n"
                "    <changefreq>%s</changefreq>\n    <priority>%s</priority>\n  </url>"
                % (loc, lastmod, m["freq"], m["prio"]))
open(os.path.join(ROOT,"sitemap.xml"),"w").write(
'<?xml version="1.0" encoding="UTF-8"?>\n'
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n%s\n</urlset>\n' % "\n".join(urls))
print("robots.txt + sitemap.xml written:", len(urls), "urls")
