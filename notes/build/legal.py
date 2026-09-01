import os
# Legal pages.
#
# Written against what the site actually does: no cookies, no analytics, no
# accounts, one form endpoint, rather than a generic template. Anything that
# depends on facts only Technoboost can confirm (registered entity name, GST,
# the name of a data-protection contact) is left out rather than invented.

COMPANY  = "Technoboost Services Pvt. Ltd."
BRAND    = "Technoboost"
EMAIL    = "contactus@technoboost.in"
ADDRESS  = ("24, 2nd Floor, Shree Durga Arcade, 1st Cross Rd, "
            "Kasavanahalli, Bengaluru, Karnataka, India")
UPDATED  = "18 August 2026"
SITE     = "technoboostservices.com"

PAGES = [
# ============================================================ PRIVACY =====
dict(
  slug="privacy-policy",
  eyebrow="Legal",
  title="Privacy Policy",
  lead=("This policy explains what personal information Technoboost collects "
        "through this website, why we collect it, how long we keep it and what "
        "you can ask us to do with it."),
  seo_title="Privacy Policy | Technoboost",
  seo_desc=("How Technoboost collects, uses and retains information submitted "
            "through this site, covering enquiries and job applications, and your rights "
            "under the DPDP Act 2023."),
  kw="Technoboost privacy policy, data protection, DPDP Act 2023, personal data, GDPR",
  body=[
    ("h2", "Who we are"),
    ("p",  "%s (\u201cTechnoboost\u201d, \u201cwe\u201d, \u201cus\u201d) is a software consulting and "
           "product engineering company registered in India, at %s. "
           "For the information described here, we are the data fiduciary: the party "
           "that decides why and how your information is used. You can reach us about "
           "anything in this policy at <a href=\"mailto:%s\">%s</a>."
           % (COMPANY, ADDRESS, EMAIL, EMAIL)),

    ("h2", "What we collect"),
    ("p",  "We only collect information you type into a form and send to us. There is no "
           "account system on this site, no tracking pixel and no advertising network."),
    ("list", [
      "<strong>Contact enquiries.</strong> Your name, phone number, company name, email "
      "address and whatever you write in the message field.",
      "<strong>Job applications.</strong> Your name, email address, phone number, the "
      "position you are applying for, your CV and your cover letter, if you include one.",
      "<strong>Email you send us directly.</strong> Anything in a message you write to our "
      "published address.",
    ]),
    ("p",  "We do not ask for, and you should not send us, payment card details, "
           "government identity numbers, health information or any other sensitive "
           "category of personal data through this website."),

    ("h2", "Why we use it"),
    ("list", [
      "To reply to your enquiry and, if it goes further, to scope and discuss work.",
      "To assess a job application and to contact you about the role.",
      "To keep a record of what was agreed with a client or a candidate.",
    ]),
    ("p",  "The basis for this is straightforward: you gave us the information so that we "
           "would use it for exactly this purpose. We do not use it for anything else, and "
           "we do not send marketing email to addresses collected through these forms "
           "unless you ask us to."),

    ("h2", "Who else sees it"),
    ("p",  "Your information is read by the Technoboost people who need to act on it: the "
           "person answering your enquiry, or the people reviewing applications. Beyond "
           "that, it passes through a small number of service providers who operate parts "
           "of this site:"),
    ("list", [
      "<strong>Our hosting provider</strong>, which serves the pages and keeps standard "
      "server logs (IP address, browser type, page requested, timestamp) for security and "
      "diagnostics.",
      "<strong>Our form-delivery provider</strong>, which passes a submitted form to our "
      "inbox. It handles the content of the form in transit and does not use it for its "
      "own purposes.",
      "<strong>Our email provider</strong>, which stores the message once it arrives.",
      "<strong>Google Fonts</strong>, which serves the two typefaces this site uses. Your "
      "browser requests those font files directly from Google, which means Google receives "
      "your IP address as part of that request. Google Fonts sets no cookies.",
      "<strong>Our form spam check</strong>, which confirms a submission came from a person "
      "rather than a script. Where the provider sets cookies it is loaded only with your "
      "consent, and it receives your IP address and interaction with the challenge. See the "
      "<a href=\"cookie-policy.html\">Cookie Policy</a>.",
    ]),
    ("p",  "We do not sell personal information, and we do not share it with advertisers "
           "or data brokers. We will disclose information if we are legally required to."),

    ("h2", "Where it is held, and for how long"),
    ("p",  "Our hosting and form providers operate globally, so your information may be "
           "processed on servers outside India. We keep enquiry correspondence for as long "
           "as the conversation is live and for a reasonable period afterwards as a "
           "business record. We keep applications for the duration of the hiring process "
           "and for up to twelve months afterwards in case a suitable role opens, unless "
           "you ask us to delete them sooner."),

    ("h2", "What you can ask us to do"),
    ("p",  "Whatever your location, you can write to us and ask to:"),
    ("list", [
      "see what personal information of yours we hold,",
      "correct anything that is wrong or out of date,",
      "have it deleted,",
      "withdraw a consent you previously gave,",
      "receive a copy in a portable form.",
    ]),
    ("p",  "Email <a href=\"mailto:%s\">%s</a> and we will respond within thirty days. If "
           "you are in India, the Digital Personal Data Protection Act 2023 gives you these "
           "rights and the right to complain to the Data Protection Board of India. If you "
           "are in the UK or the EEA, the UK GDPR or the GDPR gives you equivalent rights "
           "and the right to complain to your national supervisory authority."
           % (EMAIL, EMAIL)),

    ("h2", "Security"),
    ("p",  "The site is served over HTTPS, so anything you submit is encrypted in transit. "
           "Access to the inbox that receives form submissions is limited to the people who "
           "need it. No transmission over the internet is ever completely secure, and we "
           "cannot guarantee absolute security, but we will tell you promptly if a breach "
           "affects your information."),

    ("h2", "Children"),
    ("p",  "This site is meant for business use and is not directed at children. We do not "
           "knowingly collect information from anyone under eighteen. If you believe a "
           "child has sent us personal information, write to us and we will delete it."),

    ("h2", "Changes"),
    ("p",  "If we change this policy we will update the date at the top of this page. "
           "Material changes will be noted here rather than made quietly."),
  ]),

# ============================================================== TERMS =====
dict(
  slug="terms-and-conditions",
  eyebrow="Legal",
  title="Terms &amp; Conditions",
  lead=("These terms govern your use of this website. They are not the contract "
        "for any engagement. Paid work is always covered by a separate signed "
        "agreement between us."),
  seo_title="Terms & Conditions | Technoboost",
  seo_desc=("The terms that govern use of the Technoboost website: acceptable use, "
            "intellectual property, third-party links, liability and governing law."),
  kw="Technoboost terms and conditions, website terms of use, acceptable use, governing law",
  body=[
    ("h2", "Who these terms are with"),
    ("p",  "This website is operated by %s, a company registered in India at %s. "
           "\u201cTechnoboost\u201d, \u201cwe\u201d and \u201cus\u201d in these terms mean that company."
           % (COMPANY, ADDRESS)),

    ("h2", "Accepting these terms"),
    ("p",  "By using %s you agree to these terms. If you do not agree with them, please do "
           "not use the site. We may update them from time to time; the version published "
           "here is the one that applies." % SITE),

    ("h2", "What this site is"),
    ("p",  "This website describes Technoboost, the services we offer, the products we "
           "build and work we have delivered. It is published for information. Nothing on "
           "it is an offer, a quotation, or professional advice you should act on without "
           "talking to us. Any engagement between us starts with a written proposal and a "
           "signed agreement, and that agreement, not this page, governs the work."),

    ("h2", "Case studies and figures"),
    ("p",  "Case studies describe real engagements. Clients are not named, and each study "
           "is written at the level of the operational problem and the system we designed "
           "for it. Descriptions of past work are not a promise of a particular result on "
           "any future project."),

    ("h2", "Using the site"),
    ("p",  "You may read, print and share pages from this site for your own reference. You "
           "may not:"),
    ("list", [
      "copy substantial parts of the site to republish as your own,",
      "scrape or systematically harvest content in a way that burdens the service,",
      "attempt to gain unauthorised access to any part of the site or its infrastructure,",
      "submit anything unlawful, misleading, or containing malicious code through a form,",
      "use the site or our contact addresses to send unsolicited commercial messages.",
    ]),

    ("h2", "What you send us"),
    ("p",  "You are responsible for the accuracy of what you submit through our forms and "
           "for having the right to send it. Do not send us confidential information "
           "belonging to someone else, and do not send us your own confidential material "
           "before there is a confidentiality agreement in place. An unsolicited "
           "submission is not treated as confidential. Ideas and suggestions you send us "
           "unprompted may be used without restriction or payment."),

    ("h2", "Intellectual property"),
    ("p",  "The text, design, layout, code, graphics and logos on this site belong to "
           "%s or are used under licence," % COMPANY + " and are protected by copyright and trade "
           "mark law. The Technoboost name and logo, and the names of our products, are our "
           "marks. Other companies' names and marks appearing on the site belong to their "
           "owners and are used to identify them."),

    ("h2", "Links to other sites"),
    ("p",  "Some pages link to sites we do not control, including our product sites and our "
           "LinkedIn page. We are not responsible for their content, their availability or "
           "their privacy practices. A link is not an endorsement."),

    ("h2", "Availability"),
    ("p",  "We aim to keep the site available but do not guarantee it. We may change, "
           "suspend or withdraw any part of it, at any time, without notice."),

    ("h2", "Liability"),
    ("p",  "The site is provided as it is. To the fullest extent the law allows, we exclude "
           "implied warranties about the site and are not liable for indirect or "
           "consequential loss, loss of profit, loss of business or loss of data arising "
           "from your use of it, or from your inability to use it. Nothing here limits "
           "liability for death or personal injury caused by negligence, for fraud, or for "
           "anything else that cannot lawfully be limited."),

    ("h2", "Governing law"),
    ("p",  "These terms are governed by the laws of India, and the courts at Bengaluru, "
           "Karnataka have exclusive jurisdiction over any dispute arising from them."),

    ("h2", "Contact"),
    ("p",  "Questions about these terms go to <a href=\"mailto:%s\">%s</a>, or to %s."
           % (EMAIL, EMAIL, ADDRESS)),
  ]),

# ============================================================= COOKIES ====
dict(
  slug="cookie-policy",
  eyebrow="Legal",
  title="Cookie Policy",
  lead=("Short version: this website sets no cookies of its own. The only ones "
        "involved come from the spam check on our forms, and you can switch that "
        "off without losing anything."),
  seo_title="Cookie Policy | Technoboost",
  seo_desc=("The Technoboost website sets no cookies of its own and uses no "
            "analytics or ad networks. What the form spam check does, and how "
            "to decline it."),
  kw="Technoboost cookie policy, no cookies, cookie consent, tracking, privacy",
  body=[
    ("h2", "What we set: nothing"),
    ("p",  "A cookie is a small file a website asks your browser to store so it can "
           "recognise you later. This site asks your browser to store nothing of its "
           "own. It sets no cookies, uses no analytics, no tracking pixel, no "
           "advertising network and no browser fingerprinting."),

    ("h2", "The one exception: our form spam check"),
    ("p",  "Our contact and careers forms are protected by Google reCAPTCHA, which "
           "tells a person from a script. It is the only thing on this site that "
           "sets cookies, and it sets them on Google's domain rather than ours. It "
           "is loaded by default, because a contact form without spam protection "
           "stops being usable very quickly."),
    ("p",  "<strong>You can turn it off.</strong> Click Decline on the banner and "
           "reCAPTCHA is removed, nothing further is requested from Google, and it "
           "stays off on later visits. The forms keep working: they fall back to "
           "checks that run entirely on this site. Nothing you can do on this site "
           "is gated behind accepting."),
    ("p",  "Your choice is remembered in your browser's local storage rather than in "
           "a cookie, so recording a refusal does not itself store anything on a "
           "third party's behalf. It stays on your device, is never sent to us, and "
           "clearing your browsing data removes it. To change your mind, clear site "
           "data for this domain and the banner will ask again."),

    ("h2", "Server logs"),
    ("p",  "Our hosting provider keeps standard web server logs: IP address, browser type, "
           "the page requested and the time. These are ordinary infrastructure records used "
           "for security and diagnostics, not cookies, and they are not used to build a "
           "profile of you or to follow you across other sites."),

    ("h2", "Forms"),
    ("p",  "When you send an enquiry or an application, the contents go to our inbox and "
           "nowhere else. No cookie is set before, during or after that. What happens to "
           "the information itself is covered in our "
           "<a href=\"privacy-policy.html\">Privacy Policy</a>."),

    ("h2", "Do Not Track"),
    ("p",  "Since we do not track anyone, there is nothing for a Do Not Track signal to "
           "switch off. We honour it by default."),

    ("h2", "Questions"),
    ("p",  "Write to <a href=\"mailto:%s\">%s</a>." % (EMAIL, EMAIL)),
  ]),
]
