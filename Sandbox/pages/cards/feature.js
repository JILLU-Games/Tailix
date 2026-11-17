window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "feature",
  "title": "Feature",
  "description": "Visual feature highlight card with icon badge, feature list and compact CTA button.",
  "states": [
    "Icon badge",
    "Feature list",
    "CTA action",
    "Flat surface"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad\">\n    <span class=\"vib-card-icon-badge\" aria-hidden=\"true\">◇</span>\n    <h3 class=\"vib-card-title mt-3\">Reusable UI contract</h3>\n    <p class=\"vib-card-text mt-2\">Feature card with icon badge, compact list and CTA.</p>\n    <ul class=\"vib-card-feature-list\">\n      <li><span aria-hidden=\"true\">✓</span> Border-driven depth</li>\n      <li><span aria-hidden=\"true\">✓</span> Soft text weights</li>\n      <li><span aria-hidden=\"true\">✓</span> Zero-shadow surfaces</li>\n    </ul>\n    <div class=\"vib-card-demo-actions\"><button class=\"vib-button vib-button-secondary\" type=\"button\">View contract</button></div>\n  </article>\n</div>"
});
