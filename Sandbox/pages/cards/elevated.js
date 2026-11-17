window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "elevated",
  "title": "Elevated",
  "description": "Flat interactive card states that simulate elevation through border contrast only.",
  "states": [
    "Hover preview",
    "Active border #388BFD",
    "No shadow",
    "No motion lift"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad vib-card-hover-preview\">\n    <div class=\"vib-row justify-between\">\n      <h3 class=\"vib-card-title\">Hover preview</h3>\n      <span class=\"vib-badge\">Hover</span>\n    </div>\n    <p class=\"vib-card-text mt-2\">Interactive preview uses border contrast only. No translate, glow or shadow is used.</p>\n  </article>\n  <article class=\"vib-card vib-card-pad vib-card-active-preview\" aria-selected=\"true\">\n    <div class=\"vib-row justify-between\">\n      <h3 class=\"vib-card-title\">Active border</h3>\n      <span class=\"vib-badge\">Active</span>\n    </div>\n    <p class=\"vib-card-text mt-2\">Active border color demonstrates the interactive card state in a flat UI contract.</p>\n  </article>\n</div>"
});
