window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "nav-link",
  "title": "Nav Link",
  "description": "Base inline and menu navigation link states for default, hover preview and focused outline.",
  "states": [
    "Default",
    "Hover background #1F242C",
    "Focused outline",
    "Inline menu"
  ],
  "html": "<div class=\"vib-nav-demo-grid\">\n  <nav class=\"vib-nav-link-strip\" aria-label=\"Inline navigation states\">\n    <a class=\"vib-nav-item\" href=\"#\">Default link</a>\n    <a class=\"vib-nav-item is-hover-preview\" href=\"#\">Hover preview</a>\n    <a class=\"vib-nav-item is-focus-preview\" href=\"#\">Focused outline</a>\n  </nav>\n  <nav class=\"vib-nav-menu-list\" aria-label=\"Menu navigation states\">\n    <a class=\"vib-nav-item\" href=\"#\"><span class=\"vib-nav-glyph\">\u21b3</span>Menu item</a>\n    <a class=\"vib-nav-item is-hover-preview\" href=\"#\"><span class=\"vib-nav-glyph\">\u21b3</span>Hover item</a>\n    <a class=\"vib-nav-item is-focus-preview\" href=\"#\"><span class=\"vib-nav-glyph\">\u21b3</span>Keyboard focus</a>\n  </nav>\n</div>"
});
