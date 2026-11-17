window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "metric",
  "title": "Metric",
  "description": "Multi-stat cards with progress bars and mini sparkline chart slots.",
  "states": [
    "Progress meter",
    "Sparkline slot",
    "Mini metric label",
    "Compact density"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad\">\n    <div class=\"vib-row justify-between\"><h3 class=\"vib-card-title\">CPU budget</h3><span class=\"vib-badge\">68%</span></div>\n    <div class=\"vib-card-meter mt-3\"><span class=\"vib-card-meter-track\"><span class=\"vib-card-meter-fill\" style=\"--vib-meter-value:68%\"></span></span><small class=\"vib-helper-text\">68% of compact sandbox threshold.</small></div>\n    <svg class=\"vib-card-sparkline mt-2\" viewBox=\"0 0 220 42\" role=\"img\" aria-label=\"CPU sparkline\"><polyline fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" points=\"0,32 24,27 48,30 72,20 96,22 120,13 144,18 168,11 192,16 220,8\"/></svg>\n  </article>\n  <article class=\"vib-card vib-card-pad\">\n    <div class=\"vib-row justify-between\"><h3 class=\"vib-card-title\">Queue health</h3><span class=\"vib-badge\">Stable</span></div>\n    <div class=\"vib-card-meter mt-3\"><span class=\"vib-card-meter-track\"><span class=\"vib-card-meter-fill\" style=\"--vib-meter-value:42%\"></span></span><small class=\"vib-helper-text\">42% queue utilization.</small></div>\n    <svg class=\"vib-card-sparkline mt-2\" viewBox=\"0 0 220 42\" role=\"img\" aria-label=\"Queue sparkline\"><polyline fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" points=\"0,24 24,23 48,18 72,26 96,19 120,20 144,14 168,18 192,12 220,15\"/></svg>\n  </article>\n</div>"
});
