window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "topbar",
  "title": "Topbar",
  "description": "Horizontal application header with app logo slot, global search trigger, active context indicator and right-aligned user menu.",
  "states": [
    "Logo slot",
    "Search trigger",
    "Context indicator",
    "User menu"
  ],
  "html": "<div class=\"vib-nav-topbar-preview\" role=\"banner\">\n  <div class=\"vib-nav-topbar-left\"><span class=\"vib-nav-logo-dot\">V</span><span class=\"vib-nav-title\">VibTools Console</span><span class=\"vib-badge\">Team</span></div>\n  <button class=\"vib-nav-search-trigger\" type=\"button\" aria-label=\"Open global search\"><span>\u2315</span> Search workspace<span class=\"vib-hotkey-badge\">Ctrl+K</span></button>\n  <div class=\"vib-nav-topbar-right\"><span class=\"vib-nav-context\">Production</span><button class=\"vib-button vib-button-secondary\" type=\"button\">User menu</button></div>\n</div>\n<div class=\"vib-nav-demo-note\"><span class=\"vib-badge\">Responsive</span><p class=\"vib-nav-desc\">The topbar keeps search centered and user actions right-aligned while preserving flat border depth.</p></div>"
});
