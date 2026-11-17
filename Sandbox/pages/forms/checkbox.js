window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "checkbox",
  "title": "Checkbox",
  "description": "Checkbox states including unchecked, checked, indeterminate, stacked and inline groups.",
  "states": [
    "Unchecked",
    "Checked",
    "Indeterminate",
    "Inline group",
    "Stacked group"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <fieldset class=\"vib-control-group\"><legend class=\"vib-label\">Stacked group</legend><label class=\"vib-check\"><input type=\"checkbox\"> Enable notifications</label><label class=\"vib-check\"><input type=\"checkbox\" checked> Sync design tokens</label><label class=\"vib-check\"><input type=\"checkbox\" data-indeterminate> Partial selection</label></fieldset>\n  <fieldset class=\"vib-control-group vib-control-inline\"><legend class=\"vib-label\">Inline group</legend><label class=\"vib-check\"><input type=\"checkbox\" checked> Docs</label><label class=\"vib-check\"><input type=\"checkbox\"> Tables</label><label class=\"vib-check\"><input type=\"checkbox\"> Forms</label></fieldset>\n</div>"
});
