window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "search",
  "title": "Search",
  "description": "Search field with clear action, keyboard shortcut badge and async spinner state.",
  "states": [
    "Clear button",
    "Ctrl+K badge",
    "Async spinner",
    "Placeholder"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\" for=\"search-records\">Search records</label><div class=\"vib-input-wrap\"><span class=\"vib-input-icon\" aria-hidden=\"true\">⌕</span><input id=\"search-records\" class=\"vib-input vib-input-with-left vib-input-with-right\" value=\"deployments\"><button class=\"vib-input-action\" type=\"button\" data-search-clear=\"search-records\" aria-label=\"Clear search\">×</button></div><p class=\"vib-helper-text\">Clear button empties the field without shifting layout.</p></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"search-hotkey\">Command search</label><div class=\"vib-input-wrap\"><span class=\"vib-input-icon\" aria-hidden=\"true\">⌕</span><input id=\"search-hotkey\" class=\"vib-input vib-input-with-left vib-input-with-right\" placeholder=\"Search docs...\"><span class=\"vib-hotkey-badge\">Ctrl+K</span></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"search-loading\">Async loading</label><div class=\"vib-input-wrap\"><input id=\"search-loading\" class=\"vib-input vib-input-with-right\" value=\"sync\"><span class=\"vib-input-spinner\" aria-label=\"Loading\"></span></div></div>\n</div>"
});
