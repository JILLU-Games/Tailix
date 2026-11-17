window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "select",
  "title": "Select",
  "description": "Native and custom select patterns including single and multi-selection states.",
  "states": [
    "Native select",
    "Custom dropdown",
    "Single selection",
    "Multi selection",
    "Disabled"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"select-native\">Native select</label><select id=\"select-native\" class=\"vib-select\"><option>Production</option><option>Staging</option><option>Preview</option></select></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\">Custom dropdown</label><details class=\"vib-custom-select\"><summary>Deployment status</summary><div class=\"vib-custom-select-menu\"><button type=\"button\">Active</button><button type=\"button\">Pending</button><button type=\"button\">Failed</button></div></details></div>\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\">Multi selection</label><div class=\"vib-chip-row\" role=\"list\" aria-label=\"Selected filters\"><span class=\"vib-chip\">Design tokens</span><span class=\"vib-chip\">Components</span><span class=\"vib-chip\">Forms</span><button type=\"button\" class=\"vib-chip vib-chip-action\">+ Add</button></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"select-disabled\">Disabled select</label><select id=\"select-disabled\" class=\"vib-select\" disabled><option>Locked</option></select></div>\n</div>"
});
