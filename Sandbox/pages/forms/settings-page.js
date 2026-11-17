(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function notify(type, message) {
    var toast = window.VibToast;
    if (toast && typeof toast[type] === 'function') {
      toast[type](message, 3000);
    }
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function copyText(value, successMsg) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(value).then(function () {
        notify('success', successMsg);
      }).catch(function () {
        notify('success', successMsg);
      });
      return;
    }
    notify('success', successMsg);
  }

  function randomSuffix(length) {
    var chars = 'abcdef0123456789';
    var out = '';
    for (var i = 0; i < length; i++) {
      out += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return out;
  }

  function bindInteractions(main) {
    var searchInput = main.querySelector('#settings-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        var q = searchInput.value.toLowerCase().trim();
        var sections = main.querySelectorAll('.vib-settings-section');
        sections.forEach(function (section) {
          var text = section.textContent.toLowerCase();
          section.style.display = (!q || text.indexOf(q) !== -1) ? '' : 'none';
        });
      });
    }

    var navLinks = main.querySelectorAll('.vib-settings-nav-item');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.forEach(function (el) {
          el.classList.remove('active');
          el.removeAttribute('aria-current');
        });
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      });
    });

    var webhookForm = main.querySelector('#webhooks-form');
    if (webhookForm) {
      webhookForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var urlInput = main.querySelector('#webhook-url-input');
        var envSelect = main.querySelector('#webhook-env-select');
        var list = main.querySelector('#webhooks-list');
        if (!urlInput || !list) return;
        var url = urlInput.value.trim();
        if (!url) {
          notify('warning', 'Enter a valid webhook URL.');
          return;
        }
        var envLabel = envSelect ? envSelect.value : 'Live (Production)';
        var row = document.createElement('div');
        row.className = 'flex items-center justify-between py-3 border-b border-vib-border last:border-0';
        row.setAttribute('data-webhook-row', '');
        row.innerHTML = ''
          + '<div class="flex items-center gap-3">'
          + '  <div class="w-2 h-2 rounded-full bg-vib-success"></div>'
          + '  <div>'
          + '    <div class="text-sm font-medium text-vib-text">' + escapeHtml(url) + '</div>'
          + '    <div class="text-xs text-vib-muted mt-1">' + escapeHtml(envLabel) + ' &bull; Added just now</div>'
          + '  </div>'
          + '</div>'
          + '<button type="button" class="text-vib-muted hover:text-vib-danger transition-colors" aria-label="Remove webhook" data-settings-action="remove-webhook">'
          + '  <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor">'
          + '    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />'
          + '  </svg>'
          + '</button>';
        list.appendChild(row);
        webhookForm.reset();
        notify('success', 'Webhook endpoint added.');
      });
    }

    main.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-settings-action]');
      if (!trigger) return;
      var action = trigger.getAttribute('data-settings-action');

      if (action === 'copy-sandbox-key') {
        var input = main.querySelector('#sandbox-api-key-input');
        copyText(input ? (input.getAttribute('data-key-value') || input.value) : '', 'Key copied to clipboard');
      } else if (action === 'regenerate-sandbox-key') {
        var keyInput = main.querySelector('#sandbox-api-key-input');
        if (keyInput) {
          var nextFull = 'vib_sk_test_' + randomSuffix(12);
          keyInput.setAttribute('data-key-value', nextFull);
          keyInput.value = 'vib_sk_test_••••••••••••';
        }
        notify('success', 'Sandbox API key regenerated');
      } else if (action === 'toggle-key') {
        var row = trigger.closest('[data-key-row]');
        var span = row ? row.querySelector('[data-token-display]') : null;
        if (span) {
          var isVisible = span.getAttribute('data-visible') === 'true';
          span.textContent = isVisible ? span.getAttribute('data-masked') : span.getAttribute('data-full');
          span.setAttribute('data-visible', isVisible ? 'false' : 'true');
        }
      } else if (action === 'copy-key') {
        var copyRow = trigger.closest('[data-key-row]');
        var tokenEl = copyRow ? copyRow.querySelector('[data-token-display]') : null;
        copyText(tokenEl ? (tokenEl.getAttribute('data-full') || tokenEl.textContent) : '', 'Key copied to clipboard');
      } else if (action === 'rotate-key') {
        var rotRow = trigger.closest('[data-key-row]');
        var rotToken = rotRow ? rotRow.querySelector('[data-token-display]') : null;
        var lastUsed = rotRow ? rotRow.querySelector('[data-last-used]') : null;
        if (rotToken) {
          var prefix = (rotToken.getAttribute('data-full') || '').indexOf('vib_live_') === 0 ? 'vib_live_' : 'vib_test_';
          var tail = randomSuffix(4);
          var fullVal = prefix + randomSuffix(8) + tail;
          var maskedVal = prefix + '••••••••' + tail;
          rotToken.setAttribute('data-full', fullVal);
          rotToken.setAttribute('data-masked', maskedVal);
          rotToken.textContent = rotToken.getAttribute('data-visible') === 'true' ? fullVal : maskedVal;
        }
        if (lastUsed) lastUsed.textContent = 'Rotated just now';
        notify('info', 'API token rotated');
      } else if (action === 'revoke-key') {
        var revRow = trigger.closest('[data-key-row]');
        if (!revRow) return;
        if (window.VibModal && typeof window.VibModal.open === 'function') {
          window.VibModal.open({
            title: 'Revoke API Key',
            body: 'Are you sure you want to revoke this API key? Requests using this token will stop working.',
            confirmText: 'Revoke Key',
            onConfirm: function () {
              revRow.remove();
              notify('warning', 'API key revoked');
            }
          });
        } else {
          revRow.remove();
          notify('warning', 'API key revoked');
        }
      } else if (action === 'generate-key') {
        var tbody = main.querySelector('#api-keys-tbody');
        if (!tbody) return;
        if (window.VibModal && typeof window.VibModal.open === 'function') {
          window.VibModal.open({
            title: 'Generate New API Key',
            body: '<label class="block text-xs text-vib-muted mb-1" for="new-api-key-name">Key Name</label><input id="new-api-key-name" class="vib-input w-full" value="CLI Deployment Key">',
            confirmText: 'Create Key',
            onConfirm: function () {
              var nameInput = document.getElementById('new-api-key-name');
              var keyName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Generated Key';
              var suffix = randomSuffix(4);
              var masked = 'vib_live_••••••••' + suffix;
              var full = 'vib_live_' + randomSuffix(8) + suffix;
              var tr = document.createElement('tr');
              tr.setAttribute('data-key-row', '');
              tr.innerHTML = ''
                + '<td class="px-4 py-4 text-vib-text font-medium">' + escapeHtml(keyName) + '</td>'
                + '<td class="px-4 py-4">'
                + '  <div class="flex items-center gap-2">'
                + '    <span class="font-mono text-xs bg-vib-surface border border-vib-border px-2 py-1 rounded" data-token-display data-masked="' + masked + '" data-full="' + full + '" data-visible="false">' + masked + '</span>'
                + '    <button type="button" class="text-vib-muted hover:text-vib-primary transition-colors" aria-label="Toggle visibility" data-settings-action="toggle-key">'
                + '      <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
                + '    </button>'
                + '  </div>'
                + '</td>'
                + '<td class="px-4 py-4"><span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-vib-stateSuccessBg text-vib-stateSuccessText border border-vib-stateSuccessBorder">Active</span></td>'
                + '<td class="px-4 py-4"><div class="text-vib-primary">Just now</div><div class="text-vib-muted text-xs mt-1" data-last-used>Last used: Never</div></td>'
                + '<td class="px-4 py-4 text-right"><div class="flex items-center justify-end gap-2">'
                + '  <button type="button" class="vib-button vib-button-secondary text-xs px-2 py-1 h-auto" data-settings-action="copy-key">Copy</button>'
                + '  <button type="button" class="vib-button vib-button-ghost text-xs px-2 py-1 h-auto" data-settings-action="rotate-key">Rotate</button>'
                + '  <button type="button" class="text-vib-danger hover:text-vib-stateDangerText transition-colors ml-2" aria-label="Revoke" data-settings-action="revoke-key">'
                + '    <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>'
                + '  </button>'
                + '</div></td>';
              tbody.appendChild(tr);
              notify('success', 'Generated API key: ' + keyName);
            }
          });
        }
      } else if (action === 'remove-webhook') {
        var whRow = trigger.closest('[data-webhook-row]');
        if (whRow) {
          whRow.remove();
          notify('info', 'Webhook endpoint removed');
        }
      } else if (action === 'reset-settings') {
        if (window.VibModal && typeof window.VibModal.open === 'function') {
          window.VibModal.open({
            title: 'Reset workspace settings',
            body: 'Restore all sandbox toggles and preferences to the default compact configuration?',
            confirmText: 'Reset Settings',
            onConfirm: function () {
              var homeSel = main.querySelector('#setting-default-home');
              var ptr = main.querySelector('#setting-pointer-cursors');
              var cmp = main.querySelector('#setting-compact-names');
              var themeSel = main.querySelector('#setting-interface-theme');
              var fontSel = main.querySelector('#setting-font-size');
              var dep = main.querySelector('#setting-deploy-approval');
              var email = main.querySelector('#setting-email-notifications');
              if (homeSel) homeSel.selectedIndex = 0;
              if (ptr) ptr.checked = true;
              if (cmp) cmp.checked = true;
              if (themeSel) themeSel.selectedIndex = 0;
              if (fontSel) fontSel.selectedIndex = 0;
              if (dep) dep.checked = true;
              if (email) email.checked = false;
              notify('success', 'Workspace settings restored to defaults');
            }
          });
        }
      } else if (action === 'plan-chat') {
        notify('info', 'Support chat preview opened in sandbox mode.');
      } else if (action === 'plan-upgrade') {
        notify('info', 'Workspace upgrade preview: currently on compact sandbox plan.');
      } else if (action === 'customize-badge') {
        notify('info', 'Sidebar badge preset: Compact neutral.');
      } else if (action === 'setup-2fa') {
        notify('info', 'Two-factor authentication is enabled for sandbox admins.');
      } else if (action === 'configure-github') {
        notify('info', 'GitHub sync sandbox preview connected.');
      }
    });
  }

  function initSettingsPage() {
    var main = document.querySelector('main.vib-main');
    if (!main || main.dataset.ready === 'true') return;

    var modules = window.VibForms ? window.VibForms.modules : [];
    function getMod(id) {
      return (modules.find(function (m) { return m.id === id; }) || { html: '' }).html;
    }

    var header = getMod('settings-header');
    var plan = getMod('settings-plan');
    var sidebar = getMod('settings-sidebar');
    var general = getMod('settings-general');
    var appearance = getMod('settings-appearance');
    var security = getMod('settings-security');
    var integrations = getMod('settings-integrations');
    var apiKeys = getMod('settings-api-keys');
    var webhooks = getMod('settings-webhooks');
    var dangerZone = getMod('settings-danger-zone');

    main.innerHTML = ''
      + '<section class="vib-app-page">'
      + header
      + plan
      + '<div class="vib-settings-layout mt-5">'
      + sidebar
      + '<div class="vib-settings-content">'
      + general
      + appearance
      + security
      + integrations
      + apiKeys
      + webhooks
      + dangerZone
      + '</div>'
      + '</div>'
      + '</section>';

    bindInteractions(main);
    main.dataset.ready = 'true';
  }

  ready(initSettingsPage);
})();
