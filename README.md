# Technoboost — Figma → HTML/CSS/JS

A 1:1 static replication of the Figma frame **“1432w default”**
(`3rFMfT2sCB7m9IKL6tHSEi`, node `1347-6995`) in plain HTML, CSS and JavaScript.
No build step, no framework, no CSS library.

```
index.html
case-*.html          seven case-study pages (one per homepage card)
blog.html            insights index
blog-*.html          five articles
robots.txt
sitemap.xml
assets/
  css/style.css      all layout + design tokens
  js/main.js         nav, dropdown, accordions, form, marquee
  img/               every image & icon exported from the Figma file
```

### Deploying

The site is served from the repository root — there is no build step, so the
files are the deployment. Three of them exist only for the host:

* `CNAME` — GitHub Pages reads this to keep the custom domain. **Do not delete
  it when replacing the site**, or `technoboostservices.com` reverts to a
  `github.io` address.
* `.nojekyll` — stops Pages running the files through Jekyll, which this site
  does not need and which would skip anything named with a leading underscore.
* `notes/` — internal documentation, deliberately *not* called `docs/`, since
  Pages can be configured to serve a `docs/` folder as the site root.
  `notes/build/` holds the generators for the eleven pages that are not
  hand-written. Run them from the repo root, in this order:

  ```bash
  python3 notes/build/build_cases.py && python3 notes/build/build_blog.py && python3 notes/build/build_legal.py && python3 notes/build/build_seo.py
  ```

  They lift the header, footer, careers modal and SVG sprite out of
  `index.html`, so **edit the nav or footer there and re-run them** or the
  generated pages drift. `build_seo.py` runs last: it injects the metadata into
  all fifteen pages and rewrites `robots.txt` and `sitemap.xml`.

`shopify/index.html` and the flat `assets/*.js|.jpg|.png|.svg` bundles beside it
are **not part of this site**. They are the previous React build's Shopify
landing page, which is live at `/shopify/` and was carried across intact so
replacing the homepage would not take it down. Leave them alone; the new site's
own assets all live under `assets/css`, `assets/img` and `assets/js`.

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

## Design tokens

Transcribed from the Figma variable set into `:root` in `style.css`.

| Token | Value | Used for |
| --- | --- | --- |
| `--teal` | `#2AB7CA` | primary buttons, eyebrows, accents |
| `--ebony-clay` | `#242E3D` | headings on light |
| `--shuttle` | `#64676D` | body copy on light |
| `--silver` | `#C4C4C4` | body copy on dark |
| `--soft` | `#F5F8FB` | tinted section background |
| `--footer-bg` | `#050E1D` | footer |
| `--marquee-bg` / `--marquee-ink` | `#171717` / `#2A2A2A` | bottom marquee |
| `--alto` `--ghost` `--botticelli` | `#D9D9D9` `#C8D0D8` `#C1CDDE` | hairlines & card borders |

Type: **DM Sans** (font family 1) and **Inter** (font family 2), loaded from
Google Fonts.

**Layout system.** One shared content column, `--content: 1140px`, centred in
every section with a fluid gutter (`--pad-x: clamp(20px, 4vw, 60px)`). The
column holds its full design width down to ~1240px and only then shrinks, so
section proportions never squeeze unevenly. Every internal column is a *share*
of that 1140 — `.acc-row__left` 31.404%, `.s-process__head` 50.621%,
`.promo-wrap` 37.736% and so on — rather than the px widths lifted from the
1441 canvas. Vertical rhythm is viewport-relative:
`--sec-y: clamp(48px, 8.5vh, 100px)`, `--gap-y`, `--head-gap`.

Three responsive tiers: `>1024` design proportions, `641–1024` stacked with a
hamburger nav, `<=640` single column. Three places need a genuinely different
layout rather than a narrower one, so they get it: the services head stacks its
heading above the button (flex-basis 0 means wrapping alone lets the button
squeeze the heading into a column); each accordion row becomes a grid so the
title and its toggle share the first line; and under `hover:none` the product
card reads top to bottom — logo, description, then a title/arrow action row —
since the description panel has no hover to slide up on.

**Page shell.** Every page — homepage and case studies — uses the same
skeleton: sprite, cursor, floating CTA, `.site` > header > `main` > footer.
The footer's teal card overhangs its own top edge by 105px, so the shell
reserves that clearance automatically with
`main > section:last-child { padding-bottom: max(var(--sec-y), 132px) }`
rather than relying on whatever section happens to come last.

## Display target

Built and verified against the client's setup: **1920x1080 at 150% OS scale**,
which is a **1280x720 CSS viewport** (~1280x600 of usable area once browser
chrome is deducted). Vertical rhythm, headings, hero art and the process
stacking offsets are all `clamp()`-driven off `vh`, so the page fits any
screen height at any OS scale rather than only at the 1441px design canvas.

Verified with no horizontal overflow, a fully visible hero, and every
section's content column landing on the **same left and right edge**, at
1920x1080, 1441x900, 1280x720, 1280x600, 1100x700, 1024x700, 768x900 and
390x844. At 1441 the column lands on x=150.5 — the exact Figma position.

## Changes from the 14 Aug review

| Ask | Done |
| --- | --- |
| Remove white line boxes | 40px inter-section gutters, the white corner plates/blobs, and the nav divider + header rule all removed |
| Delete "Trusted by 100+ founders" | Removed from the hero |
| Fit the screen, no overlap or half-screens | Hero is `100svh - header`; all vertical spacing is viewport-relative |
| Fix alignment across the page | Header, hero, sections and footer now share one centred 1140px column (the hero sat 20px left of everything else in Figma) |
| Commerce -> e-commerce, add ERP | "E-commerce & ERP platforms", with ERP solutions added to its list |
| Workflow platforms -> Smart Sheet solutions | Renamed |
| E-commerce/ERP before AI & automation | Service order is now Product engineering, E-commerce & ERP, AI & automation, Data & analytics, Smart Sheet solutions, Process & project consulting |
| Product engineering as one unified team | Description condensed to "One product team from discovery through production..." |
| Technoflow hover -> description -> click | Product cards slide a description panel up on hover with a "View product" CTA; the Products nav flyout shows the hovered product's logo + blurb in a preview panel on its left |
| Understanding before Technology | Already the order of the "Our way of thinking" flow: understand, find friction, design, build, launch, improve |
| Contact us is an animation, not a page | It is an on-page section |

## Layout fidelity

Measured against the Figma export at a 1441px viewport (before the review
changes above):

| Section | Δ top | Δ height |
| --- | --- | --- |
| Header / Hero | 0.0 | 0.0 |
| 01 Built for the real world | 0.0 | +0.8 |
| 04 Our services | +0.8 | −0.5 |
| 03 Our way of thinking | +0.3 | −0.6 |
| 05 Our process | −0.3 | −0.3 |
| 08 Our products | −0.6 | −1.1 |
| 03 Case studies | −1.7 | +4.9 |
| 09 FAQ | +3.2 | +3.7 |
| 10 Contact | +6.9 | −2.0 |
| Footer | +4.9 | 0.0 |

Total document height **10236px** vs **10231.6px** in Figma.

## JavaScript & motion

All hand-written — no GSAP, Lenis or any other dependency.

* **Smooth scrolling** — wheel input is lerped onto `window.scrollY`
  (`EASE 0.11`), the same feel as Lenis on the reference site. Disabled for
  touch input and under `prefers-reduced-motion`; anchor links ride the same
  scroller.
* **Custom cursor** — a 26px transparent ring that lerps toward the pointer,
  grows to 52px over anything interactive and 62px on mousedown, and flips to
  white over the dark sections. Only active on `hover:hover + pointer:fine`,
  where it replaces the native pointer.
* **Hero** — staggered entrance, then the cube cluster and the big cube float
  on independent loops.
* **Intro-call badge** — a fixed floating CTA pinned to the right edge,
  present on every section rather than only the hero. The ring and its
  lettering spin (16s, 6s on hover) while the hand stays upright; the badge
  SVG was split into `badge-ring.svg` + `badge-hand.svg` to make that
  possible. It sits outside `.site` so no section's `overflow` can clip it.
* **Header** — sticky, and it takes its colour from whatever is behind it. A
  rAF-throttled test overlaps the header band against the dark
  zones (`.hero, .section--dark, .case-hero, .legal-hero, .blog-hero,
  .site-footer`); over those it stays black with the white wordmark, everywhere
  else it becomes a solid white bar with the ink wordmark
  (`logo-technoboost-ink.png`), dark links and a hairline. Dark wins on *any*
  overlap, so the header stays black for the whole of a dark section rather
  than flicking white in the first 30px of the hero, where nothing sits behind
  it yet. The bar is solid rather than translucent — a blurred backdrop on a
  sticky element leaves stale paint on mobile. Both nav flyouts and the mobile
  panel follow the same theme, so a black slab never hangs off a white bar.
* **Scroll reveals** — a rAF-throttled sweep fades and lifts each block in;
  elements drop out of the list once revealed, and anything jumped past via an
  anchor link reveals immediately.
* Accordions, hover states on cards / logos / chips / nav, and a marquee that
  pauses on hover.

Everything above collapses to a static page under `prefers-reduced-motion`.

## Case studies

Five pages, one per card in the homepage case-studies grid, all sharing the
homepage header, footer, cursor, smooth scroll and floating CTA:

Five studies (18 Aug review): the DiTOS entry was dropped, and document
sections 2 and 3 were combined into a single engagement.

Titles are descriptor + impact — the sector and scale of the client, then what
changed — so a card reads as a result rather than a category.

| # | Page | Title |
| --- | --- | --- |
| 1 | `case-retail-operations-digitization` | A multi-store jewellery brand, digitalised retail operations. |
| 2 | `case-analytics-inventory-intelligence` | A global pharma brand, reporting on live data instead of exports. |
| 3 | `case-fashion-ecommerce-erp` | A growing fashion brand, e-commerce and custom ERP. |
| 4 | `case-healthcare-workflow-automation` | A US medical supply operation, orchestrated instead of manual. |
| 5 | `case-manufacturing-bom-platform` | A BOM that plans production from sales order to finished goods. |

Study 1 runs engagement → what we studied → what we found → what we built,
covering both the consulting and the delivery halves of that relationship.

Each page runs: dark hero with a four-column facts strip → the problem →
what we built/delivered (numbered grid) → why it matters (dark, teal CTA) →
next case → footer. Section labels use the document's own headings
("The problem", "What we studied", "Why it matters") rather than invented ones.

**Every sentence comes from `TechnoBoost_Case_Studies_V2.docx`.** Nothing is
invented. **No client is named** — engagements are described by sector, scale
and problem only. Our own products (DiTOS, the BOM & manufacturing platform) are named,
since they are ours.

The pages are generated from a data file so they cannot drift apart; the
header, footer and SVG sprite are lifted from `index.html` at build time.

## Forms

Both the contact form and the careers application POST to the Technoboost mail
service, `https://es.technoboost.in/api/v1/mail-send`. It takes a token, a
subject line and one body string. Each body line carries both a `<br>` and a
newline, so it reads correctly whether the service renders the body as HTML or
as plain text — that is undocumented, so the markup degrades either way.

Careers opens as a modal (footer -> Careers) with name, email, phone, position,
a drag-and-drop resume field (PDF/DOC/DOCX, 5 MB) and a cover letter. It
validates client-side before anything is sent, then swaps itself for a
confirmation panel.

**Resumes go to Drive, not into the email.** The mail service carries no
attachment, so the browser uploads the CV to a Drive folder first and the email
carries a view link. `notes/resume-drive-upload.gs` is the Apps Script that does
it, deployed as a web app whose `/exec` URL is `DRIVE_ENDPOINT` in `main.js`.
The script runs as its owner, so no Google credentials reach the browser.

Apps Script answers `/exec` with a redirect, and that redirect intermittently
serves Google's own HTML error page instead of the script's JSON — reliably so
once Google starts throttling the caller. The upload therefore makes three
attempts with a widening gap, bounded at about four seconds, and treats an
unparseable response as a failed attempt rather than an exception. A retry can
leave a duplicate file in the folder; that is the better failure, since a spare
copy of a CV beats a lost one.

If an upload does fail all three times, the application **still sends** — the
email says the CV could not be attached and asks you to reply for it, and the
browser console carries the reason. No application is ever lost to this.

**This is the weakest link in the site**, and it is Google's flakiness rather
than anything in the script. If it proves unreliable in practice, the durable
fix is attachment support on `mail-send` — see
`notes/backend-resume-upload-request.md`.

**The mail service is host-locked.** It checks the browser's `Origin` header
against a whitelist, and the only host on it is `https://technoboostservices.com`
— exactly that: apex, https, no `www`. Anywhere else the send returns
`404 Access Token or Host not Verified`, and the page cannot work around it,
since `Origin` is set by the browser rather than by script. Two consequences:

* **The forms cannot be tested on a preview URL or on localhost.** Everything
  up to the request works there; the response is the 404. The API's own message
  is logged to the console so a failed send is diagnosable at a glance.
* **If the site ever serves on `www.`, sending breaks.** That host is not
  whitelisted. Today the apex answers directly and `www` has no valid
  certificate, so this only matters if the DNS setup changes.

### Spam control

Three layers, in `main.js`:

1. **A honeypot field** on both forms, moved off-screen rather than
   `display:none`, which the better bots detect. If it comes back filled, the
   submission is dropped.
2. **A minimum fill time** of three seconds. Bots submit instantly.
3. **A captcha**, dormant until `CAPTCHA_SITEKEY` is set. `CAPTCHA_PROVIDER`
   takes `'recaptcha'` or `'turnstile'`, so whichever key you have works.

A submission that trips layer 1 or 2 is shown the normal confirmation and
nothing is sent, so a bot has no signal to adapt to.

**reCAPTCHA sets cookies; Turnstile does not.** So reCAPTCHA is loaded *only
after* the visitor accepts on the cookie banner, and Turnstile loads straight
away. The consent choice lives in `localStorage`, not a cookie, so recording a
refusal does not itself store anything on a third party's behalf.

The banner appears only when a cookie-setting captcha is actually configured.
It does not appear at all while `CAPTCHA_SITEKEY` is empty, and it never lists
categories the site does not use. Declining leaves the forms fully working on
layers 1 and 2.

**None of this stops a spammer posting straight to the mail API**, because the
token below is public. The forms send the Turnstile result as `captchaToken`
for the service to verify server-side — see `notes/backend-spam-hardening.md`.

**`MAIL_TOKEN` is in client-side JavaScript, which means it is public.** The
host lock is what actually protects the endpoint — the token alone is not a
secret. If it ever needs to be one, move the call behind a Vercel function
(`api/mail.js`) with the token in an environment variable; the front end would
change by one URL.

## Insights (blog)

`blog.html` plus five articles, each covering a capability the case studies
evidence — multi-channel stock accuracy, discovery-led digitisation, BOM-driven
production planning, live operational reporting and purchase-order automation.
The three most recent appear on the homepage under "Insights". No client is
named and no outcome figures are claimed. **The publication dates are
placeholders** — change them in the generator before launch.

## Legal pages

`privacy-policy.html`, `terms-and-conditions.html` and `cookie-policy.html`,
generated from `legal.py` and linked from the footer's legal line. They are
written against what the site actually does rather than from a template, and
anything only Technoboost can confirm — registered entity name, GST number, a
named DPO — is left out rather than invented. **Have a lawyer read them before
launch**. The registered entity is **Technoboost Services Pvt. Ltd.** — that
name appears in the privacy "Who we are" clause, the terms "Who these terms are
with" and IP clauses, the footer copyright and the Organization schema's
`legalName`, while the shorter "Technoboost" stays as the brand in body copy.
Still worth confirming: the governing-law clause (currently India, courts at
Bengaluru), and whether the CIN and GST number should be published.

**No cookie banner, because the site sets no cookies.** There is no analytics,
no tracking pixel, no advertising network, no local or session storage and no
account system — verified by grep and in the browser's storage panel. Consent
is only required before non-essential cookies are set, so there is nothing to
ask about. The one third-party request the site makes is Google Fonts, which
sets no cookies but does receive the visitor's IP; self-host the two families
if you want to remove even that. If analytics is ever added, a consent banner
becomes mandatory and the cookie policy has to be rewritten.

## SEO / AEO

* Unique `<title>` (all <= 60 chars) and `<meta name="description">`
  (110-165 chars) on all 15 pages, plus `keywords`, `author` and an explicit
  `robots` directive with `max-snippet:-1, max-image-preview:large`.
* Canonical URL, Open Graph and Twitter card on every page.
* JSON-LD: `Organization` with the real NAP details **and `FAQPage` built from
  the live FAQ answers** on the homepage — the highest-value schema for answer
  engines; `BreadcrumbList` on case studies; `BlogPosting` + `BreadcrumbList`
  on articles. All validated as parseable JSON.
* `robots.txt` allows every crawler, AI answer engines included, and points at
  `sitemap.xml` (15 URLs with lastmod, changefreq and priority).
* One `<h1>` per page, descriptive `<h2>`s, several phrased as questions so
  answer engines can lift a direct response.

`BASE` in the SEO generator is the only place the absolute domain is written.
It points at `https://technoboostservices.com`, the domain this site replaces
the old one on. Canonicals, Open Graph URLs, the sitemap and the JSON-LD `@id`
all derive from it, so a preview deployment correctly points search engines at
the live domain rather than at itself.

## Content

Navigation, contact details and footer copy come from
**technoboostservices.com**: `contactus@technoboost.in`, `+91 96329 68050`,
24, 2nd Floor, Shree Durga Arcade, 1st Cross Rd, Kasavanahalli, Bengaluru, and
the Services / Company column links. Product cards link out to
[technoflow.io](https://technoflow.io/) and
[truevisual.io](https://truevisual.io/).

## Notes on the source design

* Section numbering in the Figma file is out of sequence — the frames run
  01, 04, 03, 05, 08, 03, 09, 10. Renumbered 01–08 in sequence here, and the
  "Our process" section was dropped in the 18 Aug review now that the blog
  covers the same ground; its CSS went with it.
* `#146EF5` (Blue Ribbon) is gone; every occurrence is now the brand teal
  `#2AB7CA`, including the footer social buttons and the badge's hand glyph.
* The FAQ rows in Figma are narrower collapsed (≈502px) than expanded
  (625.87px). Corrected — every row is now the full column width.
* The process section is taller than the Figma frame. Scroll-driven stacking
  needs travel between the cards; the cards themselves are unchanged.
* The footer nav labels wrap mid-word in the Figma render (“Abou / t”) because
  each label sits in a 40.1px text box. That is a Figma artefact, not a design
  intent, so the labels are kept on one line here.
* A handful of paragraphs break one word earlier or later than the Figma
  render — Figma and the browser measure the same webfont fractionally
  differently. Box sizes and line counts match.

## Assets

Every image, logo and icon in `assets/img/` was exported from the Figma file
(`download_assets`) and committed locally; nothing points at a temporary
Figma CDN URL.
