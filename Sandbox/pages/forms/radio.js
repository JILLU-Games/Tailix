window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "radio",
  "title": "Radio",
  "description": "Radio groups in stacked controls and horizontal card selection variants.",
  "states": [
    "Unselected",
    "Selected",
    "Stacked group",
    "Horizontal card group"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <fieldset class=\"vib-control-group\"><legend class=\"vib-label\">Stacked radio group</legend><label class=\"vib-check\"><input type=\"radio\" name=\"density\" checked> Compact density</label><label class=\"vib-check\"><input type=\"radio\" name=\"density\"> Comfortable density</label><label class=\"vib-check\"><input type=\"radio\" name=\"density\"> Spacious density</label></fieldset>\n  <fieldset class=\"vib-radio-cards\"><legend class=\"vib-label\">Horizontal card group</legend><label class=\"vib-radio-card\"><input type=\"radio\" name=\"deploy-target\" checked><span>Cloudflare</span><small>Preview deploy</small></label><label class=\"vib-radio-card\"><input type=\"radio\" name=\"deploy-target\"><span>Render</span><small>Server runtime</small></label><label class=\"vib-radio-card\"><input type=\"radio\" name=\"deploy-target\"><span>Static</span><small>Docs only</small></label></fieldset>\n</div>"
});
