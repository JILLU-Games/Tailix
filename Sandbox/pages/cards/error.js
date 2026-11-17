window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "error",
  "title": "Error",
  "description": "Alert/error state card with subtle red accent line, warning message and retry button.",
  "states": [
    "Red accent line",
    "Warning message",
    "Retry action",
    "No shadow"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad vib-card-error-state\">\n    <div class=\"vib-row justify-between\"><span class=\"vib-card-icon-badge\" aria-hidden=\"true\">!</span><span class=\"vib-badge\">Error</span></div>\n    <h3 class=\"vib-card-title mt-3\">Repository sync failed</h3>\n    <p class=\"vib-card-text mt-2\">The card keeps the flat surface but adds a restrained red accent line and retry action.</p>\n    <div class=\"vib-card-demo-actions\"><button class=\"vib-button vib-button-secondary\" type=\"button\">Retry</button><button class=\"vib-button vib-button-ghost\" type=\"button\">Details</button></div>\n  </article>\n</div>"
});
