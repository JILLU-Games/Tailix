window.VibNavigation = window.VibNavigation || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibNavigation.register({
  "id": "pagination",
  "title": "Pagination",
  "description": "Page selector bar with Previous/Next buttons, active page indicator, page number list and per-page dropdown selector.",
  "states": [
    "Previous/Next",
    "Active page",
    "Page numbers",
    "Per-page select"
  ],
  "html": "<div class=\"vib-nav-pagination\" data-nav-pagination aria-label=\"Pagination preview\">\n  <button class=\"vib-button vib-button-secondary\" type=\"button\" data-page-prev>Previous</button>\n  <div class=\"vib-nav-page-list\" role=\"list\">\n    <button class=\"vib-nav-page\" type=\"button\">1</button>\n    <button class=\"vib-nav-page active\" type=\"button\" aria-current=\"page\">2</button>\n    <button class=\"vib-nav-page\" type=\"button\">3</button>\n    <span class=\"vib-nav-page-gap\">\u2026</span>\n    <button class=\"vib-nav-page\" type=\"button\">8</button>\n  </div>\n  <button class=\"vib-button vib-button-secondary\" type=\"button\" data-page-next>Next</button>\n  <label class=\"vib-nav-page-size\"><span>Rows</span><select class=\"vib-select\" aria-label=\"Rows per page\"><option>10 / page</option><option>25 / page</option><option>50 / page</option></select></label>\n</div>",
  "init": function () {
    document.querySelectorAll('[data-nav-pagination]').forEach(function (wrap) {
      wrap.querySelectorAll('.vib-nav-page').forEach(function (page) {
        page.addEventListener('click', function () {
          wrap.querySelectorAll('.vib-nav-page').forEach(function (item) {
            item.classList.remove('active');
            item.removeAttribute('aria-current');
          });
          page.classList.add('active');
          page.setAttribute('aria-current', 'page');
        });
      });
    });
  }
});
