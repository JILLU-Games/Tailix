window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "validation",
  "title": "Validation",
  "description": "Success, warning and error messages with matching border states and readable labels.",
  "states": [
    "Success",
    "Error",
    "Warning",
    "Message row",
    "Accessible copy"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"validation-success\">Repository URL</label><input id=\"validation-success\" class=\"vib-input is-success\" value=\"github.com/vibtools/ui\"><p class=\"vib-validation-message is-success\">Success: repository is reachable.</p></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"validation-warning\">Deployment region</label><input id=\"validation-warning\" class=\"vib-input is-warning\" value=\"global-edge\"><p class=\"vib-validation-message is-warning\">Warning: confirm region before deploy.</p></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"validation-error\">Token</label><input id=\"validation-error\" class=\"vib-input is-error\" value=\"expired-token\" aria-invalid=\"true\"><p class=\"vib-validation-message is-error\">Error: token expired safely.</p></div>\n</div>"
});
