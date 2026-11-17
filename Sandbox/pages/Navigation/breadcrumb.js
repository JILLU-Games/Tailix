window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "breadcrumb",
  "title": "Breadcrumb",
  "description": "Hierarchical page trails with slash and chevron separators, responsive ellipsis collapse and current-page state.",
  "states": [
    "Slash separator",
    "Chevron separator",
    "Ellipsis collapse",
    "Current page"
  ],
  "html": "<div class=\"vib-nav-breadcrumb-stack\">\n  <nav class=\"vib-nav-breadcrumb\" aria-label=\"Slash breadcrumb\"><a href=\"#\">Workspace</a><span>/</span><a href=\"#\">Projects</a><span>/</span><span aria-current=\"page\">Navigation</span></nav>\n  <nav class=\"vib-nav-breadcrumb\" aria-label=\"Chevron breadcrumb\"><a href=\"#\">VibTools</a><span>\u203a</span><a href=\"#\">Sandbox</a><span>\u203a</span><span aria-current=\"page\">Playground</span></nav>\n  <nav class=\"vib-nav-breadcrumb\" aria-label=\"Collapsed breadcrumb\"><a href=\"#\">Home</a><span>\u203a</span><span class=\"vib-nav-ellipsis\">\u2026</span><span>\u203a</span><span aria-current=\"page\">Dropdown</span></nav>\n</div>"
});
