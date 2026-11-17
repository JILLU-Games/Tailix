window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "compact",
  "title": "Compact",
  "description": "Low-padding cards for sidebars, inline widgets and dense dashboard surfaces.",
  "states": [
    "8–12px density",
    "Small dashboard widget",
    "Muted body copy",
    "Zero shadow"
  ],
  "html": "<div class=\"vib-card-demo-grid\" data-density=\"compact\">\n  <article class=\"vib-card-compact\">\n    <h3 class=\"vib-card-title\">Compact task</h3>\n    <p class=\"vib-card-text mt-1\">Dense sidebar/widget card using 10px/12px rhythm.</p>\n  </article>\n  <article class=\"vib-card-compact\">\n    <h3 class=\"vib-card-title\">Inline widget</h3>\n    <p class=\"vib-card-text mt-1\">Small content block for dashboard side panels.</p>\n  </article>\n  <article class=\"vib-card-compact\">\n    <h3 class=\"vib-card-title\">Tight status</h3>\n    <p class=\"vib-card-text mt-1\">Preserves readable 12px body copy.</p>\n  </article>\n</div>"
});
