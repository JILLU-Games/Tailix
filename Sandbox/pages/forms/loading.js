window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "loading",
  "title": "Loading",
  "description": "Skeleton loaders, input spinner and disabled button loading overlay.",
  "states": [
    "Skeleton loader",
    "Input spinner",
    "Disabled loading button",
    "Busy state"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\">Skeleton rows</label><div class=\"vib-loading-card\" aria-label=\"Loading skeleton preview\"><span class=\"vib-skeleton\" data-width=\"medium\"></span><span class=\"vib-skeleton\"></span><span class=\"vib-skeleton\" data-width=\"short\"></span></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"loading-input\">Loading input</label><div class=\"vib-input-wrap\"><input id=\"loading-input\" class=\"vib-input vib-input-with-right\" value=\"Fetching records\"><span class=\"vib-input-spinner\" aria-label=\"Loading\"></span></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\">Loading action</label><button type=\"button\" class=\"vib-button vib-button-primary\" aria-busy=\"true\" disabled>Saving</button></div>\n</div>"
});
