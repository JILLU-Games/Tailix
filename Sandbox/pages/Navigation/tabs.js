window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "tabs",
  "title": "Tabs",
  "description": "Horizontal section tabs with underline accent border, pill/badge tabs and disabled tab states.",
  "states": [
    "Underline accent",
    "Pill tabs",
    "Disabled tab",
    "Keyboard selectable"
  ],
  "html": "<div class=\"vib-nav-tabs-demo\" data-nav-tabs>\n  <div class=\"vib-nav-tabs\" role=\"tablist\" aria-label=\"Underline tabs\">\n    <button class=\"vib-tab-item active\" type=\"button\" role=\"tab\" aria-selected=\"true\">General</button>\n    <button class=\"vib-tab-item\" type=\"button\" role=\"tab\" aria-selected=\"false\">Security</button>\n    <button class=\"vib-tab-item\" type=\"button\" role=\"tab\" aria-selected=\"false\">Integrations <span class=\"vib-badge\">3</span></button>\n    <button class=\"vib-tab-item\" type=\"button\" role=\"tab\" aria-disabled=\"true\" disabled>Disabled</button>\n  </div>\n  <div class=\"vib-nav-pill-tabs\" role=\"tablist\" aria-label=\"Pill tabs\">\n    <button class=\"vib-tab-pill active\" type=\"button\">Overview</button>\n    <button class=\"vib-tab-pill\" type=\"button\">Activity</button>\n    <button class=\"vib-tab-pill\" type=\"button\">Usage</button>\n  </div>\n</div>",
  "init": function () {
    document.querySelectorAll('[data-nav-tabs]').forEach(function (wrap) {
      wrap.querySelectorAll('[role="tab"]').forEach(function (tab) {
        tab.addEventListener('click', function () {
          if (tab.disabled) return;
          wrap.querySelectorAll('[role="tab"]').forEach(function (item) {
            item.classList.remove('active');
            item.setAttribute('aria-selected', 'false');
          });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
        });
      });
      wrap.querySelectorAll('.vib-tab-pill').forEach(function (pill) {
        pill.addEventListener('click', function () {
          wrap.querySelectorAll('.vib-tab-pill').forEach(function (item) { item.classList.remove('active'); });
          pill.classList.add('active');
        });
      });
    });
  }
});
