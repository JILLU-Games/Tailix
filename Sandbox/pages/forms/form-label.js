window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "form-label",
  "title": "Form Label",
  "description": "Required marker, optional tag and external tooltip button patterns for accessible form labels.",
  "states": [
    "Required indicator",
    "Optional tag",
    "Tooltip info icon",
    "Compact row"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"label-required\">Project name <span class=\"vib-required\">*</span></label><input id=\"label-required\" class=\"vib-input\" placeholder=\"Required field\"></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label vib-label-row\" for=\"label-optional\"><span>Internal note</span><span class=\"vib-label-tag\">Optional</span></label><input id=\"label-optional\" class=\"vib-input\" placeholder=\"Optional field\"></div>\n  <div class=\"vib-demo-field\"><div class=\"vib-label-row\"><label class=\"vib-label\" for=\"label-tooltip\">Environment</label><button class=\"vib-info-dot\" type=\"button\" title=\"Controls the deployment target\" aria-label=\"Environment info\">?</button></div><input id=\"label-tooltip\" class=\"vib-input\" value=\"Production\"></div>\n</div>"
});
