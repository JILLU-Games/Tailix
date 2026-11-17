(function () {
  'use strict';
  window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function escapeAttr(value) {
    return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderModule(module, index) {
    var stateTags = (module.states || []).map(function (state) {
      return '<span class="vib-badge">' + escapeAttr(state) + '</span>';
    }).join('');
    return [
      '<section class="vib-card-section" id="' + escapeAttr(module.id) + '" data-card-component="' + escapeAttr(module.id) + '">',
      '  <div class="vib-component-header">',
      '    <div>',
      '      <p class="vib-kicker">' + String(index + 1).padStart(2, '0') + ' / Card primitive</p>',
      '      <h2 class="vib-h2 mt-1">' + escapeAttr(module.title) + '</h2>',
      '    </div>',
      '    <a class="vib-component-source" href="cards/' + escapeAttr(module.id) + '.html">Source snippet</a>',
      '  </div>',
      '  <p class="vib-card-text">' + escapeAttr(module.description) + '</p>',
      '  <div class="vib-state-tags" aria-label="States covered">' + stateTags + '</div>',
      '  <div class="vib-component-body">' + module.html + '</div>',
      '</section>'
    ].join('\n');
  }

  function initCardPlayground() {
    var root = document.getElementById('vib-cards-playground');
    var nav = document.getElementById('vib-cards-playground-nav');
    if (!root || !nav || root.dataset.ready === 'true') return;
    var modules = window.VibCards.modules || [];
    root.innerHTML = modules.map(renderModule).join('\n');
    nav.innerHTML = modules.map(function (module, index) {
      return '<a class="vib-playground-nav-link" href="#' + escapeAttr(module.id) + '"><span>' + String(index + 1).padStart(2, '0') + '</span>' + escapeAttr(module.title) + '</a>';
    }).join('');
    root.dataset.ready = 'true';
  }

  ready(initCardPlayground);
})();
