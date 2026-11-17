window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "base",
  "title": "Base",
  "description": "Default flat surface, header/body text and compact action buttons with selected state evidence.",
  "states": [
    "Default flat surface",
    "Header/body/actions",
    "Selected border state",
    "Zero shadow"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad\">\n    <div class=\"vib-row justify-between\">\n      <h3 class=\"vib-card-title\">Base deployment card</h3>\n      <span class=\"vib-badge\">Default</span>\n    </div>\n    <p class=\"vib-card-text mt-2\">Flat bordered surface with compact body copy, zero shadow, primary and secondary actions.</p>\n    <div class=\"vib-card-demo-actions\">\n      <button class=\"vib-button vib-button-primary\" type=\"button\">Deploy</button>\n      <button class=\"vib-button vib-button-secondary\" type=\"button\">Preview</button>\n    </div>\n  </article>\n  <article class=\"vib-card vib-card-pad\" aria-selected=\"true\">\n    <div class=\"vib-row justify-between\">\n      <h3 class=\"vib-card-title\">Selected base state</h3>\n      <span class=\"vib-badge\">Selected</span>\n    </div>\n    <p class=\"vib-card-text mt-2\">Selected/active treatment uses a crisp border only; it does not use glow or shadow elevation.</p>\n    <div class=\"vib-card-demo-actions\"><button class=\"vib-button vib-button-secondary\" type=\"button\">Open</button></div>\n  </article>\n</div>"
});
