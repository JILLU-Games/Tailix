window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "active-link",
  "title": "Active Link",
  "description": "Highlighted link treatments with a left indicator bar, subtle active background and crisp accent text.",
  "states": [
    "Left indicator bar",
    "Subtle blue active background",
    "Accent text #388BFD",
    "Border-only selected state"
  ],
  "html": "<div class=\"vib-nav-demo-grid\">\n  <nav class=\"vib-nav-menu-list\" aria-label=\"Active navigation link treatments\">\n    <a class=\"vib-nav-item\" href=\"#\">Default route</a>\n    <a class=\"vib-nav-item is-active\" aria-current=\"page\" href=\"#\">Active route</a>\n    <a class=\"vib-nav-item is-active-line\" href=\"#\">Left-indicator route</a>\n  </nav>\n  <article class=\"vib-nav-state-card vib-nav-active-card\">\n    <h3 class=\"vib-nav-title\">Active route treatment</h3>\n    <p class=\"vib-nav-desc mt-2\">The current state uses color and a crisp indicator only; no shadow, glow or motion lift is introduced.</p>\n  </article>\n</div>"
});
