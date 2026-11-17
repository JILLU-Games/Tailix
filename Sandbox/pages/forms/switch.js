window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "switch",
  "title": "Switch",
  "description": "Switch controls with soft-green active state, compact sizing and label placement.",
  "states": [
    "Off",
    "On",
    "Compact",
    "Large",
    "Label placement"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-settings-row\"><div><p class=\"vib-row-title\">Enable compact mode</p><p class=\"vib-helper-text\">Uses the soft green active state.</p></div><label class=\"vib-switch\"><input type=\"checkbox\" checked><span class=\"vib-slider\"></span></label></div>\n  <div class=\"vib-settings-row\"><div><p class=\"vib-row-title\">Email notifications</p><p class=\"vib-helper-text\">Off state remains muted and border-driven.</p></div><label class=\"vib-switch\"><input type=\"checkbox\"><span class=\"vib-slider\"></span></label></div>\n  <div class=\"vib-switch-size-row\"><label class=\"vib-switch vib-switch-sm\"><input type=\"checkbox\" checked><span class=\"vib-slider\"></span></label><span class=\"vib-helper-text\">Compact</span><label class=\"vib-switch vib-switch-lg\"><input type=\"checkbox\" checked><span class=\"vib-slider\"></span></label><span class=\"vib-helper-text\">Large</span></div>\n</div>"
});
