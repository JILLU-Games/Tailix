window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "readonly",
  "title": "Readonly",
  "description": "Readonly fields with unmodifiable values, lock indicator and no hover/focus elevation.",
  "states": [
    "Readonly value",
    "Unmodifiable value",
    "Locked icon",
    "No hover focus",
    "Copy-ready layout"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"readonly-id\">Workspace ID</label><div class=\"vib-input-wrap\"><span class=\"vib-input-icon\" aria-hidden=\"true\">⌘</span><input id=\"readonly-id\" class=\"vib-input vib-input-with-left is-readonly\" value=\"vib_workspace_001\" readonly></div><p class=\"vib-helper-text\">Readonly fields are selectable but not editable.</p></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"readonly-locked\">Locked value</label><div class=\"vib-input-wrap\"><input id=\"readonly-locked\" class=\"vib-input vib-input-with-right is-readonly\" value=\"Production branch\" readonly><span class=\"vib-input-action vib-static-action\" aria-hidden=\"true\">🔒</span></div></div>\n</div>"
});
