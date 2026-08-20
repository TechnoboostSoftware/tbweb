/**
 * Resume upload for the Technoboost careers form.
 *
 * The mail service (es.technoboost.in/api/v1/mail-send) takes a subject and a
 * body string only — it cannot carry an attachment. So the browser sends the
 * CV here first, this script drops it in a Drive folder, and the link goes in
 * the email body.
 *
 * The script runs as the account that owns it, so no Google credentials ever
 * reach the browser.
 *
 * ---------------------------------------------------------------------------
 * SETUP
 *
 * 1. Create the Drive folder that should hold applications. Open it and copy
 *    the id out of the URL:
 *      https://drive.google.com/drive/folders/<THIS PART>
 *
 * 2. Go to script.google.com > New project, paste this file in, and set
 *    FOLDER_ID below.
 *
 * 3. Deploy > New deployment > type "Web app":
 *      Execute as:        Me
 *      Who has access:    Anyone
 *    Approve the Drive permission prompt, then copy the /exec URL.
 *
 * 4. Paste that URL into DRIVE_ENDPOINT at the top of assets/js/main.js.
 *
 * Until step 4 is done the application still sends — the email just says the
 * CV could not be attached and asks you to reply for it.
 * ---------------------------------------------------------------------------
 *
 * Note on "Who has access: Anyone": this endpoint only ever writes into the
 * one folder and returns a link. It never lists or reads existing files. Keep
 * the folder separate from anything else in the Drive.
 */

var FOLDER_ID = 'PASTE_YOUR_DRIVE_FOLDER_ID_HERE';

var MAX_BYTES = 5 * 1024 * 1024;
var ALLOWED   = /\.(pdf|docx?)$/i;

function doPost(e) {
  try {
    // The browser posts text/plain on purpose — Apps Script web apps do not
    // answer a CORS preflight, and application/json would trigger one.
    var p = JSON.parse(e.postData.contents);

    if (!p.name || !p.data) return json({ ok: false, error: 'missing file' });
    if (!ALLOWED.test(p.name)) return json({ ok: false, error: 'file type not allowed' });

    var bytes = Utilities.base64Decode(p.data);
    if (bytes.length > MAX_BYTES) return json({ ok: false, error: 'file too large' });

    // Prefix with the date so the folder stays sortable, and keep the
    // candidate's own filename after it.
    var stamp = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HHmm');
    var blob  = Utilities.newBlob(bytes, p.mimeType || 'application/octet-stream',
                                  stamp + ' — ' + p.name);

    var file = DriveApp.getFolderById(FOLDER_ID).createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    return json({ ok: true, link: file.getUrl() });

  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
