window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "input",
  "title": "Input",
  "description": "Text fields with placeholder, value, hover preview, focus preview, icons and compact sizing variants.",
  "states": [
    "Default",
    "Placeholder",
    "Value",
    "Hover preview",
    "Focus preview",
    "Left icon",
    "Right action",
    "Small",
    "Medium"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-default\">Default</label><input id=\"input-default\" class=\"vib-input\" placeholder=\"Project name\"></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-value\">Value</label><input id=\"input-value\" class=\"vib-input\" value=\"ContextVault\"></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-hover\">Hover preview</label><input id=\"input-hover\" class=\"vib-input is-hover\" value=\"Hover surface state\" aria-label=\"Hover state preview\"></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-focus\">Focus preview</label><input id=\"input-focus\" class=\"vib-input is-focus\" value=\"Focused border state\" aria-label=\"Focus state preview\"></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-left-icon\">Left icon</label><div class=\"vib-input-wrap\"><span class=\"vib-input-icon\" aria-hidden=\"true\">⌕</span><input id=\"input-left-icon\" class=\"vib-input vib-input-with-left\" placeholder=\"Search package\"></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-right-action\">Right action</label><div class=\"vib-input-wrap\"><input id=\"input-right-action\" class=\"vib-input vib-input-with-right\" value=\"vib_sk_test_••••••••\"><button class=\"vib-input-action\" type=\"button\">Copy</button></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-small\">Small</label><input id=\"input-small\" class=\"vib-input vib-input-sm\" placeholder=\"28px height\"></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"input-medium\">Medium</label><input id=\"input-medium\" class=\"vib-input vib-input-md\" placeholder=\"30px standard height\"></div>\n</div>"
});
