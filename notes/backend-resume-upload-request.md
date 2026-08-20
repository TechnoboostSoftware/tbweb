# Request: resume handling for the careers form

## Context

The new technoboostservices.com is a **static site on GitHub Pages** — no PHP,
no serverless functions, nothing running server-side. The browser calls
`es.technoboost.in` directly.

Both site forms already work against the existing endpoint:

```
POST https://es.technoboost.in/api/v1/mail-send
Content-Type: application/json

{ "token": "...", "emailSubjectLine": "...", "emailBodyContent": "..." }
```

Verified behaviour, for reference:

| | |
| --- | --- |
| Success | `201` · `{"message":"Email Sent","success":true}` |
| Wrong/unlisted origin | `404` · `{"message":"Access Token or Host not Verified !","success":false}` |
| Origin whitelist | `https://technoboostservices.com` only — not `www.`, not `http://` |
| Preflight | `OPTIONS` returns `200` with `Access-Control-Allow-Origin: *`, `Allow-Methods: POST`, `Allow-Headers: content-type` |

**The gap:** `mail-send` takes a subject and a body string only, so the careers
form cannot deliver the candidate's CV. Right now the application email arrives
with all the details and a line saying the CV has to be chased by replying to
the candidate.

We need one of the two options below. Either is fine — **option A is preferred**,
since the CV then lands in the mailbox the recruiter is already reading.

---

## Option A (preferred) — accept an attachment on `mail-send`

Add an optional attachment to the existing endpoint. No new route, no storage to
manage, nothing extra for the reader to click.

**Request**

```
POST https://es.technoboost.in/api/v1/mail-send
Content-Type: application/json

{
  "token": "...",
  "emailSubjectLine": "Job application — Ravi Kumar",
  "emailBodyContent": "<strong>Name:</strong> Ravi Kumar<br>...",
  "attachment": {
    "fileName": "ravi-cv.pdf",
    "mimeType": "application/pdf",
    "data": "JVBERi0xLjQKJ..."      // base64, no data: prefix
  }
}
```

**Response** — unchanged. Same `success` / `message` shape as today.

Base64 inflates the payload by about a third, so a 5 MB file arrives as roughly
6.7 MB of JSON. Please make sure the request body limit allows that (Spring's
`server.max-http-request-size` / any nginx `client_max_body_size` in front of
it). If that is a problem, say so and we will use option B instead.

---

## Option B — a separate upload endpoint that returns a link

If attachments are awkward, take the file and give us back a URL. The site then
puts that link in the email body.

**Request**

```
POST https://es.technoboost.in/api/v1/file-upload
Content-Type: application/json

{
  "token": "...",
  "fileName": "ravi-cv.pdf",
  "mimeType": "application/pdf",
  "data": "JVBERi0xLjQKJ..."      // base64, no data: prefix
}
```

`multipart/form-data` is fine too if that suits you better — it needs no CORS
preflight, so it is marginally simpler on the browser side. Tell us which and we
will send that instead.

**Response**

```json
{ "success": true, "link": "https://.../files/2026-08-19-ravi-cv.pdf" }
```

on failure:

```json
{ "success": false, "message": "why it failed" }
```

The link has to be openable by whoever reads the careers mailbox. A long
unguessable path is fine; it must not require a login they do not have.

---

## Applies to both options

**CORS.** Same treatment the current endpoint gets — `https://technoboostservices.com`
must pass, and the `OPTIONS` preflight has to answer, since a JSON content type
triggers one.

**Validate server-side, do not trust the client.** The form already checks these,
but the token sits in client-side JavaScript and is therefore public, so anyone
can post directly:

* file type — PDF, DOC, DOCX only
* size — 5 MB cap
* rate limit per IP, so the endpoint cannot be used as free file storage

**Personal data.** These are candidates' CVs. Wherever they are stored, they
should not be publicly listable, and our privacy policy commits to keeping
applications for up to twelve months — so a retention/cleanup rule would be
useful.

---

## What happens on our side

One function in `assets/js/main.js` changes — the endpoint URL and the request
shape. Nothing else on the site is affected, and until this lands the careers
form keeps working, just without the CV attached.

Please send back the endpoint URL, the exact request and response shape you
settled on, and confirmation of the size limit.
