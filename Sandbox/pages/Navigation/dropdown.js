window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "dropdown",
  "title": "Dropdown",
  "description": "Menu overlay triggers, sub-item lists, divider lines and keyboard navigation state indicators.",
  "states": [
    "Menu trigger",
    "Open overlay",
    "Divider lines",
    "Keyboard hints"
  ],
  "html": "<div class=\"vib-nav-dropdown-demo\" data-nav-dropdown>\n  <button class=\"vib-button vib-button-secondary vib-nav-dropdown-trigger\" type=\"button\" aria-haspopup=\"menu\" aria-expanded=\"true\" data-nav-dropdown-trigger>Actions <span>\u2304</span></button>\n  <div class=\"vib-nav-dropdown-menu\" role=\"menu\" data-nav-dropdown-menu>\n    <button class=\"vib-nav-dropdown-item\" type=\"button\" role=\"menuitem\"><span>Open project</span><kbd>Enter</kbd></button>\n    <button class=\"vib-nav-dropdown-item\" type=\"button\" role=\"menuitem\"><span>Duplicate</span><kbd>D</kbd></button>\n    <div class=\"vib-nav-dropdown-divider\" role=\"separator\"></div>\n    <button class=\"vib-nav-dropdown-item\" type=\"button\" role=\"menuitem\"><span>Move to archive</span><kbd>\u2318\u232b</kbd></button>\n    <button class=\"vib-nav-dropdown-item is-danger\" type=\"button\" role=\"menuitem\"><span>Delete</span><kbd>Del</kbd></button>\n  </div>\n  <p class=\"vib-nav-desc\">Keyboard hints are visual indicators only; this sandbox module preserves existing app routing behavior.</p>\n</div>",
  "init": function () {
    document.querySelectorAll('[data-nav-dropdown]').forEach(function (wrap) {
      var trigger = wrap.querySelector('[data-nav-dropdown-trigger]');
      var menu = wrap.querySelector('[data-nav-dropdown-menu]');
      if (!trigger || !menu) return;
      trigger.addEventListener('click', function () {
        var open = trigger.getAttribute('aria-expanded') !== 'false';
        trigger.setAttribute('aria-expanded', open ? 'false' : 'true');
        menu.hidden = open;
      });
    });
  }
});
