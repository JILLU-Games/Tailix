window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "stat",
  "title": "Stat",
  "description": "Single key-value display cards with compact trend badges for positive and negative movement.",
  "states": [
    "Key-value metric",
    "Green trend",
    "Red trend",
    "Tabular numbers"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad\">\n    <p class=\"vib-card-stat-label\">Deployments</p>\n    <div class=\"vib-row justify-between mt-1\"><strong class=\"vib-card-stat-value\">1,284</strong><span class=\"vib-card-trend is-up\">↗ +12.5%</span></div>\n    <p class=\"vib-card-text mt-2\">Successful runs this month.</p>\n  </article>\n  <article class=\"vib-card vib-card-pad\">\n    <p class=\"vib-card-stat-label\">Error rate</p>\n    <div class=\"vib-row justify-between mt-1\"><strong class=\"vib-card-stat-value\">0.8%</strong><span class=\"vib-card-trend is-down\">↘ -3.2%</span></div>\n    <p class=\"vib-card-text mt-2\">Reduced failures across monitored projects.</p>\n  </article>\n</div>"
});
