window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "sidebar",
  "title": "Sidebar",
  "description": "Full vertical navigation panel preview with grouped section headers, collapsible menu items and compact badges.",
  "states": [
    "Grouped sections",
    "Collapsible row",
    "Active item",
    "Compact badges"
  ],
  "html": "<div class=\"vib-nav-demo-grid\">\n  <aside class=\"vib-nav-preview-sidebar\" aria-label=\"Preview sidebar navigation\">\n    <div class=\"vib-nav-preview-brand\"><span class=\"vib-nav-logo-dot\">V</span><span>Workspace</span></div>\n    <div class=\"vib-nav-preview-group\">\n      <p class=\"vib-nav-group-title\">Main</p>\n      <a class=\"vib-nav-item is-active\" href=\"#\"><span class=\"vib-nav-glyph\">\u2301</span>Overview<span class=\"vib-badge\">12</span></a>\n      <a class=\"vib-nav-item\" href=\"#\"><span class=\"vib-nav-glyph\">\u25a1</span>Projects<span class=\"vib-badge\">4</span></a>\n      <button class=\"vib-nav-item vib-nav-collapse\" type=\"button\" data-nav-collapse aria-expanded=\"true\"><span class=\"vib-nav-glyph\">\u25be</span>Settings<span class=\"vib-nav-meta\">open</span></button>\n      <div class=\"vib-nav-sublist\" data-nav-sublist>\n        <a href=\"#\" class=\"vib-nav-subitem\">General</a>\n        <a href=\"#\" class=\"vib-nav-subitem\">Security</a>\n      </div>\n    </div>\n    <div class=\"vib-nav-preview-group\">\n      <p class=\"vib-nav-group-title\">System</p>\n      <a class=\"vib-nav-item\" href=\"#\"><span class=\"vib-nav-glyph\">\u25c7</span>Tokens</a>\n    </div>\n  </aside>\n  <article class=\"vib-nav-state-card\">\n    <h3 class=\"vib-nav-title\">Collapsible sidebar contract</h3>\n    <p class=\"vib-nav-desc mt-2\">Grouped labels stay muted, selected links use a border-only active state, and badges stay compact without heavy text.</p>\n  </article>\n</div>",
  "init": function () {
    document.querySelectorAll('[data-nav-collapse]').forEach(function (button) {
      button.addEventListener('click', function () {
        var list = button.parentElement ? button.parentElement.querySelector('[data-nav-sublist]') : null;
        var open = button.getAttribute('aria-expanded') !== 'false';
        button.setAttribute('aria-expanded', open ? 'false' : 'true');
        if (list) list.hidden = open;
        var meta = button.querySelector('.vib-nav-meta');
        if (meta) meta.textContent = open ? 'closed' : 'open';
      });
    });
  }
});
