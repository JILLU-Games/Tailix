(function () {
  'use strict';
  window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };

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
      '<section class="vib-component-card" id="' + escapeAttr(module.id) + '" data-form-component="' + escapeAttr(module.id) + '">',
      '  <div class="vib-component-header">',
      '    <div>',
      '      <p class="vib-kicker">' + String(index + 1).padStart(2, '0') + ' / Form primitive</p>',
      '      <h2 class="vib-h2 mt-1">' + escapeAttr(module.title) + '</h2>',
      '    </div>',
      '    <a class="vib-component-source" href="forms/' + escapeAttr(module.id) + '.html">Source snippet</a>',
      '  </div>',
      '  <p class="vib-card-text">' + escapeAttr(module.description) + '</p>',
      '  <div class="vib-state-tags" aria-label="States covered">' + stateTags + '</div>',
      '  <div class="vib-component-body">' + module.html + '</div>',
      '</section>'
    ].join('\n');
  }

  function initPasswordToggles(root) {
    root.querySelectorAll('[data-password-toggle]').forEach(function (button) {
      var target = document.getElementById(button.getAttribute('data-password-toggle'));
      if (!target) return;
      button.addEventListener('click', function () {
        var visible = target.type === 'text';
        target.type = visible ? 'password' : 'text';
        var icon = button.querySelector('[aria-hidden="true"]');
        if (icon) icon.textContent = visible ? '◉' : '◎';
        button.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
        button.setAttribute('aria-pressed', visible ? 'false' : 'true');
      });
    });
  }

  function initSearchClear(root) {
    root.querySelectorAll('[data-search-clear]').forEach(function (button) {
      var target = document.getElementById(button.getAttribute('data-search-clear'));
      if (!target) return;
      button.addEventListener('click', function () {
        target.value = '';
        target.focus();
      });
    });
  }

  function initTextarea(root) {
    root.querySelectorAll('[data-auto-expand]').forEach(function (area) {
      function resize() {
        area.style.height = 'auto';
        area.style.height = Math.max(64, area.scrollHeight) + 'px';
      }
      area.addEventListener('input', resize);
      resize();
    });
    root.querySelectorAll('[data-character-counter]').forEach(function (counter) {
      var target = document.getElementById(counter.getAttribute('data-character-counter'));
      var max = counter.getAttribute('data-max') || (target ? target.getAttribute('maxlength') : '') || '';
      function update() {
        counter.textContent = (target ? target.value.length : 0) + (max ? '/' + max : '');
      }
      if (target) target.addEventListener('input', update);
      update();
    });
  }

  function initCheckboxes(root) {
    root.querySelectorAll('[data-indeterminate]').forEach(function (box) {
      box.indeterminate = true;
    });
  }

  function initFileInputs(root) {
    root.querySelectorAll('[data-form-file]').forEach(function (input) {
      var label = input.closest('.vib-file-picker');
      var text = label ? label.querySelector('[data-file-label]') : null;
      input.addEventListener('change', function () {
        if (text) text.textContent = input.files && input.files.length ? input.files[0].name : 'No file selected';
      });
    });
    root.querySelectorAll('[data-form-dropzone]').forEach(function (zone) {
      zone.addEventListener('dragenter', function (event) { event.preventDefault(); zone.classList.add('is-dragover'); });
      zone.addEventListener('dragover', function (event) { event.preventDefault(); zone.classList.add('is-dragover'); });
      zone.addEventListener('dragleave', function (event) { event.preventDefault(); zone.classList.remove('is-dragover'); });
      zone.addEventListener('drop', function (event) { event.preventDefault(); zone.classList.remove('is-dragover'); });
    });
  }

  function initPlayground() {
    var root = document.getElementById('vib-forms-playground');
    var nav = document.getElementById('vib-forms-playground-nav');
    if (!root || !nav || root.dataset.ready === 'true') return;
    var modules = window.VibForms.modules || [];
    root.innerHTML = modules.map(renderModule).join('\n');
    nav.innerHTML = modules.map(function (module, index) {
      return '<a class="vib-playground-nav-link" href="#' + escapeAttr(module.id) + '"><span>' + String(index + 1).padStart(2, '0') + '</span>' + escapeAttr(module.title) + '</a>';
    }).join('');
    initPasswordToggles(root);
    initSearchClear(root);
    initTextarea(root);
    initCheckboxes(root);
    initFileInputs(root);
    root.dataset.ready = 'true';
  }

  ready(initPlayground);
})();
