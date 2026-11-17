window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "file-input",
  "title": "File Input",
  "description": "Compact picker, drag-drop target and file progress badge state in one module.",
  "states": [
    "File picker",
    "Drag-drop dropzone",
    "Progress badge",
    "Cancel action"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\">Compact file picker</label><label class=\"vib-file-picker\"><input type=\"file\" data-form-file hidden><span class=\"vib-file-badge neutral\">FILE</span><span data-file-label>No file selected</span><span class=\"vib-button vib-button-secondary\">Browse</span></label></div>\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\">Drag-drop dropzone</label><div class=\"vib-form-dropzone\" tabindex=\"0\" data-form-dropzone><span class=\"vib-upload-icon\">⇧</span><strong>Drop files here or click to browse</strong><small>PDF, PNG, DOCX and MP4 up to 50 MB.</small></div></div>\n  <div class=\"vib-upload-mini-item\"><span class=\"vib-file-badge neutral\">PDF</span><span><strong>Report.pdf</strong><small>12.5 MB / 14 MB</small><span class=\"vib-progress-track\"><span class=\"vib-progress-fill\" style=\"width:76%\"></span></span></span><span class=\"vib-helper-text\">76%</span><button class=\"vib-icon-button\" type=\"button\" aria-label=\"Cancel upload\">×</button></div>\n</div>"
});
