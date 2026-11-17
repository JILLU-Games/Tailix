window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };

window.VibForms.register({
  "id": "upload-advanced-dropzone",
  "title": "Advanced Upload Dropzone",
  "description": "Full-width upload dropzone with custom SVG icon, layered labels, and interactive keyboard support.",
  "states": ["Default", "Drag active", "Focus outline"],
  "html": "<label class=\"vib-upload-dropzone\" data-upload-zone tabindex=\"0\" aria-label=\"Upload files by browsing or dragging files here\">\n  <input type=\"file\" multiple class=\"sr-only\" aria-label=\"Browse files\">\n  <span class=\"vib-upload-icon\" aria-hidden=\"true\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"var(--icon-stroke)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 15V5\"/><path d=\"m8 9 4-4 4 4\"/><path d=\"M5 15v2.5A2.5 2.5 0 0 0 7.5 20h9A2.5 2.5 0 0 0 19 17.5V15\"/></svg>\n  </span>\n  <span>\n    <span class=\"vib-upload-label\"><span>Click to upload</span> or drag and drop</span>\n    <span class=\"vib-upload-help block mt-1\">Supports PDF, PNG, DOCX and MP4 up to 50 MB.</span>\n  </span>\n</label>"
});

window.VibForms.register({
  "id": "upload-advanced-tabs",
  "title": "Upload Source Tabs",
  "description": "Tablist for switching between local device upload, URL embedding, and Cloud storage integrations.",
  "states": ["Active", "Inactive"],
  "html": "<div class=\"vib-upload-tabs\" role=\"tablist\" aria-label=\"Upload source\">\n  <button class=\"vib-upload-tab active\" type=\"button\" role=\"tab\" aria-selected=\"true\">Your device</button>\n  <button class=\"vib-upload-tab\" type=\"button\" role=\"tab\" aria-selected=\"false\">URL embed</button>\n  <button class=\"vib-upload-tab\" type=\"button\" role=\"tab\" aria-selected=\"false\">Cloud</button>\n</div>"
});

window.VibForms.register({
  "id": "upload-advanced-queue",
  "title": "Advanced Upload Queue",
  "description": "Detailed upload items featuring extension badges, exact progress tracking, and success/error states.",
  "states": ["Uploaded", "Uploading", "Upload failed"],
  "html": "<div class=\"vib-upload-queue\" aria-label=\"Upload queue examples\">\n  <article class=\"vib-upload-item\" aria-current=\"true\">\n    <span class=\"vib-file-badge mp4\">MP4</span>\n    <div class=\"vib-upload-file-main\">\n      <div class=\"vib-upload-file-title\">Prototype recording 01.mp4</div>\n      <div class=\"vib-upload-file-meta\"><span>20 MB</span><span class=\"vib-upload-status\" data-state=\"success\">Uploaded</span></div>\n      <div class=\"vib-upload-progress-row\"><div class=\"vib-progress-track\"><span class=\"vib-progress-fill\" style=\"--vib-progress:100%\"></span></div><span class=\"vib-upload-percent\">100%</span></div>\n    </div>\n    <button class=\"vib-upload-remove\" type=\"button\" aria-label=\"Remove Prototype recording 01.mp4\">&times;</button>\n  </article>\n  <article class=\"vib-upload-item\">\n    <span class=\"vib-file-badge pdf\">PDF</span>\n    <div class=\"vib-upload-file-main\">\n      <div class=\"vib-upload-file-title\">Report.pdf</div>\n      <div class=\"vib-upload-file-meta\"><span>12.5 MB / 14 MB</span><span>12 sec left</span><span class=\"vib-upload-status\"><span class=\"vib-upload-spinner\" aria-hidden=\"true\"></span> Uploading</span></div>\n      <div class=\"vib-upload-progress-row\"><div class=\"vib-progress-track\"><span class=\"vib-progress-fill\" style=\"--vib-progress:76%\"></span></div><span class=\"vib-upload-percent\">76%</span></div>\n    </div>\n    <button class=\"vib-upload-remove\" type=\"button\" aria-label=\"Cancel Report.pdf upload\">&times;</button>\n  </article>\n  <article class=\"vib-upload-item\">\n    <span class=\"vib-file-badge docx\">DOCX</span>\n    <div class=\"vib-upload-file-main\">\n      <div class=\"vib-upload-file-title\">Timesheet.docx</div>\n      <div class=\"vib-upload-file-meta\"><span>3.2 MB</span><span class=\"vib-upload-status\" data-state=\"error\">Upload failed</span><button type=\"button\" class=\"vib-button vib-button-ghost !h-[24px] !min-h-[24px] !px-2\">Try Again</button></div>\n    </div>\n    <button class=\"vib-upload-remove\" type=\"button\" aria-label=\"Dismiss Timesheet.docx\">&times;</button>\n  </article>\n</div>"
});
