# Request: stop spam reaching the mail service

## The problem, stated plainly

`MAIL_TOKEN` is in the website's JavaScript, so it is public. Anyone can read it
and post directly to the API. This is not theoretical:

```bash
curl -X POST 'https://es.technoboost.in/api/v1/mail-send' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://technoboostservices.com' \
  --data '{"token":"<the public token>",
           "emailSubjectLine":"anything",
           "emailBodyContent":"anything"}'
```

That returns `201 Email Sent`. No browser, no form, no CAPTCHA involved. The
`Origin` check does not help here: browsers set that header honestly, but any
script can send whatever it likes.

**So a CAPTCHA on the website cannot fix this on its own.** It stops bots that
drive the form; it does nothing about a script posting straight to the API. If
the spam is arriving through the second route, only the changes below will stop
it.

## What the website already does

Three layers, live now:

| Layer | Stops | Needs |
| --- | --- | --- |
| Honeypot field | bots that fill every input they find | nothing |
| Minimum fill time (3s) | bots that submit instantly | nothing |
| Cloudflare Turnstile | scripted browsers | a site key, and **item 1 below** |

The first two are working today. Turnstile is wired but dormant until a site
key is set in `assets/js/main.js`.

The website already sends a `captchaToken` field on every request. It is `""`
while Turnstile is off, and a real token once it is on.

## What we need from the service

### 1. Verify the captcha token

When a request arrives, POST the token to Cloudflare and reject the send if it
does not verify:

```
POST https://challenges.cloudflare.com/turnstile/v0/siteverify
Content-Type: application/x-www-form-urlencoded

secret=<the Turnstile SECRET key>&response=<captchaToken from the request>&remoteip=<caller IP>
```

Response is `{"success": true|false, ...}`. If `success` is false, or
`captchaToken` is missing or empty, **return an error and send nothing.**

The secret key must live on the server. It must never be given to the website.

### 2. Rate limit

Independently of the captcha, cap sends per caller IP: something like 5 per
hour and 20 per day is far above real use and far below what a spammer needs.
Return `429` beyond that.

### 3. Consider making the token a real secret

The strongest fix is for the website to stop holding a credential at all.
Options, best first:

* **Per-session tokens.** The site requests a short-lived token before sending;
  it expires in minutes and is single-use.
* **Keep the static token but treat items 1 and 2 as mandatory.** Workable, and
  much less effort.

### 4. While you are in there

Two things noticed earlier that bear on the missing-mail problem:

* `success: true` is returned before SMTP has accepted the message, and `id` is
  always `null`. Please return the transport's message id, and report failure
  when the transport fails.
* The API server `13.201.223.114` is not in the SPF record for `technoboost.in`,
  which authorises Zoho only. Mail sent as that domain from this server fails
  SPF and is likely being filtered on arrival.

## What changes on the website

One constant. Send us the Turnstile **site** key (not the secret) and we set
`TURNSTILE_SITEKEY` in `assets/js/main.js`. Nothing else changes.

## Note on the choice of captcha

Cloudflare Turnstile, not Google reCAPTCHA, and the reason is concrete:
**reCAPTCHA sets cookies.** Our published cookie policy states this site sets
none, and adding reCAPTCHA would make that untrue and require a consent banner.
Turnstile sets no cookies and is free with no request cap.

**If Turnstile is switched on, the cookie and privacy policies still need one
line each** noting that Cloudflare receives the visitor's IP for the challenge,
in the same way Google Fonts already does. Ask us and we will update them.
