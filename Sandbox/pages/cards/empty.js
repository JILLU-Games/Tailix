window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "empty",
  "title": "Empty",
  "description": "Zero-data placeholder card with dashed border, icon, concise copy and create action.",
  "states": [
    "Dashed border",
    "Empty icon",
    "Create action",
    "Muted copy"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card-empty-state\">\n    <span class=\"vib-card-icon-badge\" aria-hidden=\"true\">＋</span>\n    <h3 class=\"vib-card-title\">No projects yet</h3>\n    <p class=\"vib-card-text\">Create your first compact project card to start tracking work.</p>\n    <button class=\"vib-button vib-button-primary\" type=\"button\">Create project</button>\n  </article>\n</div>"
});
