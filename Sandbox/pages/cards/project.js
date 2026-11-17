window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "project",
  "title": "Project",
  "description": "Repository card with tags, language chips, star count and Open repo action.",
  "states": [
    "Repository card",
    "Tags",
    "Star count",
    "Open repo action"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad\">\n    <div class=\"vib-row justify-between\"><h3 class=\"vib-card-title\">ContextVault</h3><span class=\"vib-badge\">Open source</span></div>\n    <p class=\"vib-card-text mt-2\">Portable, integrity-checked, RAG-ready ChatGPT conversation archive utility.</p>\n    <div class=\"vib-card-repo-meta\"><span class=\"vib-chip\">Python</span><span class=\"vib-chip\">Desktop</span><span class=\"vib-chip\">★ 128</span></div>\n    <div class=\"vib-card-demo-actions\"><a class=\"vib-button vib-button-secondary\" href=\"https://github.com/vibtools/ContextVault\">Open repo</a></div>\n  </article>\n  <article class=\"vib-card vib-card-pad\">\n    <div class=\"vib-row justify-between\"><h3 class=\"vib-card-title\">Licora</h3><span class=\"vib-badge\">Open source</span></div>\n    <p class=\"vib-card-text mt-2\">Central license management system for access control and product records.</p>\n    <div class=\"vib-card-repo-meta\"><span class=\"vib-chip\">License</span><span class=\"vib-chip\">Platform</span><span class=\"vib-chip\">★ 94</span></div>\n    <div class=\"vib-card-demo-actions\"><a class=\"vib-button vib-button-secondary\" href=\"https://github.com/vibtools/Licora\">Open repo</a></div>\n  </article>\n</div>"
});
