/* ==========================================================================
   Tailix Standalone JS Engine — v2.2.0
   Zero-Dependency | Browser IIFE + CommonJS Export | Declarative data-tx-*
   ========================================================================== */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  if (root && typeof root === 'object') {
    root.Tailix = api;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  var VERSION = 'v2.2.0';
  var THEME_KEY = 'tailix-theme';
  var SIDEBAR_KEY = 'tailix-sidebar-collapsed';

  var ICONS = {
    home: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V20h5v-6h4v6h5V9.5"/>',
    dashboard: '<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="5"/><rect x="13" y="10" width="8" height="11"/><rect x="3" y="13" width="8" height="8"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    x: '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
    alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    'chevron-down': '<path d="M6 9l6 6 6-6"/>',
    'chevron-right': '<path d="M9 18l6-6-6-6"/>',
    copy: '<rect x="9" y="9" width="11" height="11"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
    'eye-off': '<path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-6.5 0-10-7-10-7a18.6 18.6 0 0 1 5.06-5.94"/><path d="M9.9 4.24A10.4 10.4 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19"/><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path d="M2 2l20 20"/>',
    terminal: '<path d="M4 17l6-5-6-5"/><path d="M12 19h8"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/>',
    refresh: '<path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'
  };

  var ICON_SIZES = { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, '2xl': 1 };
  var FALLBACK_ICON = '<circle cx="12" cy="12" r="4"/>';

  function icon(name, size) {
    var key = String(name || '').toLowerCase();
    var body = Object.prototype.hasOwnProperty.call(ICONS, key) ? ICONS[key] : FALLBACK_ICON;
    var sz = Object.prototype.hasOwnProperty.call(ICON_SIZES, size) ? size : 'md';
    return '<svg class="tx-icon tx-icon-' + sz + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }

  function hydrateIcons(root) {
    if (!hasDom()) return;
    var scope = root || document;
    scope.querySelectorAll('[data-tx-icon]').forEach(function (el) {
      var name = el.getAttribute('data-tx-icon');
      var sz = el.getAttribute('data-tx-icon-size') || 'md';
      el.innerHTML = icon(name, sz);
    });
  }

  /* ------------------------------------------------------------------------
     1. Pure Utility Functions (Unit-Tested & Safe)
     ------------------------------------------------------------------------ */
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function createEventBus() {
    var listeners = {};

    function on(event, handler) {
      if (!event || typeof handler !== 'function') return function () {};
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(handler);
      return function () { off(event, handler); };
    }

    function once(event, handler) {
      if (!event || typeof handler !== 'function') return function () {};
      function wrapped(payload) {
        off(event, wrapped);
        handler(payload);
      }
      return on(event, wrapped);
    }

    function off(event, handler) {
      if (!listeners[event]) return;
      listeners[event] = listeners[event].filter(function (fn) {
        return fn !== handler;
      });
    }

    function emit(event, payload) {
      var list = listeners[event];
      if (!list || !list.length) return 0;
      var invoked = 0;
      list.slice().forEach(function (fn) {
        try {
          fn(payload);
          invoked += 1;
        } catch (err) {
          if (typeof console !== 'undefined' && console.error) {
            console.error('[Tailix.bus] handler error on "' + event + '":', err);
          }
        }
      });
      return invoked;
    }

    return { on: on, once: once, off: off, emit: emit };
  }

  function validateValue(rawValue, rule, payload) {
    if (!rule) return '';
    var val = rawValue == null ? '' : String(rawValue);
    var trimmed = val.trim();

    if (rule.required && !trimmed) {
      return rule.message || 'This field is required.';
    }
    if (trimmed) {
      if (rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return rule.message || 'Enter a valid email address.';
      }
      if (rule.type === 'url') {
        try {
          var parsed = new URL(trimmed);
          if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
            return rule.message || 'Enter a valid http/https URL.';
          }
        } catch (_) {
          return rule.message || 'Enter a valid URL (https://...).';
        }
      }
      if (rule.type === 'number' && isNaN(Number(trimmed))) {
        return rule.message || 'Enter a valid number.';
      }
      if (rule.minLength && trimmed.length < Number(rule.minLength)) {
        return rule.message || ('Must be at least ' + rule.minLength + ' characters.');
      }
      if (rule.maxLength && trimmed.length > Number(rule.maxLength)) {
        return rule.message || ('Must be at most ' + rule.maxLength + ' characters.');
      }
      if (rule.pattern) {
        try {
          var re = rule.pattern instanceof RegExp ? rule.pattern : new RegExp(rule.pattern);
          if (!re.test(trimmed)) {
            return rule.message || 'Invalid format.';
          }
        } catch (_) {
          return rule.message || 'Invalid validation pattern configuration.';
        }
      }
    }
    if (typeof rule.custom === 'function') {
      try {
        var customErr = rule.custom(val, payload || {});
        if (customErr) return String(customErr);
      } catch (err) {
        return err && err.message ? err.message : 'Validation error.';
      }
    }
    return '';
  }

  function filterAndSortRows(rows, opts) {
    var list = Array.isArray(rows) ? rows.slice() : [];
    var query = opts && opts.query ? String(opts.query).trim().toLowerCase() : '';
    var filterCol = opts && opts.filterCol != null ? Number(opts.filterCol) : -1;
    var filterVal = opts && opts.filterVal ? String(opts.filterVal).trim().toLowerCase() : '';
    var sortCol = opts && opts.sortCol != null ? Number(opts.sortCol) : -1;
    var sortDir = opts && opts.sortDir === 'desc' ? -1 : 1;

    if (query) {
      list = list.filter(function (row) {
        return row.some(function (cell) {
          return String(cell).toLowerCase().indexOf(query) !== -1;
        });
      });
    }
    if (filterCol >= 0 && filterVal && filterVal !== 'all') {
      list = list.filter(function (row) {
        return String(row[filterCol] || '').toLowerCase() === filterVal;
      });
    }
    if (sortCol >= 0) {
      list.sort(function (a, b) {
        var va = String(a[sortCol] || '');
        var vb = String(b[sortCol] || '');
        var na = parseFloat(va.replace(/[^0-9.-]/g, ''));
        var nb = parseFloat(vb.replace(/[^0-9.-]/g, ''));
        if (!isNaN(na) && !isNaN(nb) && /^[+-]?[\d.,%$ms\s]+$/i.test(va) && /^[+-]?[\d.,%$ms\s]+$/i.test(vb)) {
          return (na - nb) * sortDir;
        }
        return va.localeCompare(vb, undefined, { numeric: true, sensitivity: 'base' }) * sortDir;
      });
    }
    return list;
  }

  var bus = createEventBus();

  /* ------------------------------------------------------------------------
     2. Safe DOM Helpers & Storage
     ------------------------------------------------------------------------ */
  function safeStorageGet(key) {
    try {
      return typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    } catch (_) {
      return null;
    }
  }

  function safeStorageSet(key, val) {
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem(key, String(val));
    } catch (_) {}
  }

  function hasDom() {
    return typeof document !== 'undefined' && typeof window !== 'undefined';
  }

  /* ------------------------------------------------------------------------
     3. Toast System (XSS-Safe, Max 5 Active, Lazy Container)
     ------------------------------------------------------------------------ */
  var MAX_TOASTS = 5;
  var toastContainer = null;

  function ensureToastContainer() {
    if (!hasDom() || !document.body) return null;
    if (toastContainer && document.body.contains(toastContainer)) return toastContainer;
    toastContainer = document.getElementById('tx-toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'tx-toast-container';
      toastContainer.className = 'tx-toast-container';
      toastContainer.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastContainer);
    }
    return toastContainer;
  }

  function dismissToast(el) {
    if (!el || !el.parentNode) return;
    el.parentNode.removeChild(el);
  }

  function toast(message, type, duration) {
    if (typeof message === 'object' && message !== null) {
      duration = message.duration;
      type = message.type;
      message = message.message;
    }
    var container = ensureToastContainer();
    if (!container) return null;

    while (container.children.length >= MAX_TOASTS) {
      container.removeChild(container.firstElementChild);
    }

    var variant = ['success', 'warning', 'danger', 'info'].indexOf(type) !== -1 ? type : 'info';
    var ms = typeof duration === 'number' ? duration : 3200;

    var el = document.createElement('div');
    el.className = 'tx-toast tx-toast-' + variant;
    el.setAttribute('role', 'status');

    var msgSpan = document.createElement('span');
    msgSpan.textContent = message == null ? '' : String(message);

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'tx-icon-btn';
    closeBtn.setAttribute('aria-label', 'Dismiss notification');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', function () {
      dismissToast(el);
    });

    el.appendChild(msgSpan);
    el.appendChild(closeBtn);
    container.appendChild(el);

    if (ms > 0) {
      setTimeout(function () {
        dismissToast(el);
      }, ms);
    }
    bus.emit('toast:shown', { message: msgSpan.textContent, type: variant });
    return el;
  }

  /* ------------------------------------------------------------------------
     4. Accessible Modal Engine (Declarative & Programmatic)
     ------------------------------------------------------------------------ */
  var activeBackdrop = null;
  var activeModalCleanup = null;
  var lastFocusedEl = null;

  function getFocusableElements(container) {
    if (!container) return [];
    var nodes = container.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    return Array.prototype.filter.call(nodes, function (el) {
      return !el.hasAttribute('hidden') && (el.offsetParent !== null || el === document.activeElement);
    });
  }

  function focusFirstIn(container) {
    if (!container) return;
    var focusables = getFocusableElements(container);
    var first = focusables[0];
    if (first && typeof first.focus === 'function') {
      first.focus();
    }
  }

  function trapModalFocus(e) {
    if (!activeBackdrop) return;
    var dialog = activeBackdrop.querySelector('.tx-modal') || activeBackdrop;
    var focusables = getFocusableElements(dialog);
    if (!focusables.length) {
      e.preventDefault();
      return;
    }
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first || !dialog.contains(document.activeElement)) {
        e.preventDefault();
        last.focus();
      }
    } else if (document.activeElement === last || !dialog.contains(document.activeElement)) {
      e.preventDefault();
      first.focus();
    }
  }

  function closeModal() {
    if (!activeBackdrop) return;
    if (activeBackdrop.getAttribute('data-tx-programmatic') === 'true') {
      if (activeBackdrop.parentNode) activeBackdrop.parentNode.removeChild(activeBackdrop);
    } else {
      activeBackdrop.setAttribute('hidden', '');
      activeBackdrop.setAttribute('aria-hidden', 'true');
    }
    if (typeof activeModalCleanup === 'function') {
      try { activeModalCleanup(); } catch (_) {}
    }
    activeBackdrop = null;
    activeModalCleanup = null;
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
      try { lastFocusedEl.focus(); } catch (_) {}
    }
    lastFocusedEl = null;
    bus.emit('modal:closed');
  }

  function openModalElement(backdrop, opts) {
    if (!hasDom() || !backdrop) return null;
    if (activeBackdrop && activeBackdrop !== backdrop) closeModal();
    lastFocusedEl = document.activeElement;
    activeBackdrop = backdrop;
    activeModalCleanup = opts && typeof opts.onClose === 'function' ? opts.onClose : null;
    backdrop.removeAttribute('hidden');
    backdrop.setAttribute('aria-hidden', 'false');
    setTimeout(function () {
      focusFirstIn(backdrop.querySelector('.tx-modal') || backdrop);
    }, 10);
    bus.emit('modal:opened', { id: backdrop.id || null });
    return backdrop;
  }

  function modal(opts) {
    if (!hasDom() || !document.body) return null;
    opts = opts || {};
    closeModal();

    var backdrop = document.createElement('div');
    backdrop.className = 'tx-modal-backdrop';
    backdrop.setAttribute('data-tx-programmatic', 'true');

    var dialog = document.createElement('div');
    dialog.className = 'tx-modal';
    dialog.setAttribute('role', 'dialog');
    dialog.setAttribute('aria-modal', 'true');

    var titleId = 'tx-modal-title-' + Date.now();
    dialog.setAttribute('aria-labelledby', titleId);

    var header = document.createElement('div');
    header.className = 'tx-modal-header';
    header.innerHTML =
      '<h2 id="' + titleId + '" class="tx-h2">' + escapeHtml(opts.title || 'Confirm') + '</h2>' +
      '<button type="button" class="tx-icon-btn" data-tx-modal-close aria-label="Close modal">×</button>';

    var body = document.createElement('div');
    body.className = 'tx-modal-body';
    if (opts.html != null) {
      body.innerHTML = String(opts.html);
    } else {
      body.textContent = opts.body != null ? String(opts.body) : '';
    }

    var footer = document.createElement('div');
    footer.className = 'tx-modal-footer';

    var cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 'tx-btn tx-btn-sm tx-btn-secondary';
    cancelBtn.textContent = opts.cancelText || 'Cancel';
    cancelBtn.addEventListener('click', function () {
      if (typeof opts.onCancel === 'function') {
        try { opts.onCancel(); } catch (_) {}
      }
      closeModal();
    });

    var confirmBtn = document.createElement('button');
    confirmBtn.type = 'button';
    confirmBtn.className = 'tx-btn tx-btn-sm ' + (opts.danger ? 'tx-btn-danger' : 'tx-btn-primary');
    confirmBtn.textContent = opts.confirmText || 'Confirm';
    confirmBtn.addEventListener('click', function () {
      if (typeof opts.onConfirm === 'function') {
        try {
          var res = opts.onConfirm(dialog);
          if (res === false) return;
        } catch (err) {
          toast(err && err.message ? err.message : 'Action failed.', 'danger');
          return;
        }
      }
      closeModal();
    });

    footer.appendChild(cancelBtn);
    footer.appendChild(confirmBtn);
    dialog.appendChild(header);
    dialog.appendChild(body);
    dialog.appendChild(footer);
    backdrop.appendChild(dialog);
    document.body.appendChild(backdrop);

    return openModalElement(backdrop, { onClose: opts.onCancel });
  }

  /* ------------------------------------------------------------------------
     5. Theme & Sidebar Managers
     ------------------------------------------------------------------------ */
  var theme = {
    get: function () {
      if (!hasDom()) return 'dark';
      return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    },
    set: function (mode) {
      if (!hasDom()) return 'dark';
      var next = mode === 'light' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      safeStorageSet(THEME_KEY, next);
      document.querySelectorAll('[data-tx-theme-toggle]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', next === 'light' ? 'true' : 'false');
      });
      bus.emit('theme:change', { theme: next });
      return next;
    },
    toggle: function () {
      return theme.set(theme.get() === 'light' ? 'dark' : 'light');
    },
    init: function () {
      if (!hasDom()) return;
      var saved = safeStorageGet(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        theme.set(saved);
      } else if (!document.documentElement.getAttribute('data-theme')) {
        theme.set('dark');
      }
    }
  };

  function isMobileViewport() {
    if (!hasDom()) return false;
    if (typeof window.matchMedia === 'function') {
      return window.matchMedia('(max-width: 768px)').matches;
    }
    return window.innerWidth <= 768;
  }

  function resolveSidebarEl(selector) {
    if (!hasDom()) return null;
    try {
      return document.querySelector(selector || '.tx-sidebar');
    } catch (_) {
      return null;
    }
  }

  function ensureSidebarBackdrop() {
    var backdrop = document.querySelector('.tx-sidebar-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'tx-sidebar-backdrop';
      backdrop.setAttribute('data-visible', 'false');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.appendChild(backdrop);
    }
    return backdrop;
  }

  function syncSidebarToggleAria(expanded) {
    document.querySelectorAll('[data-tx-sidebar-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  var sidebarListenerBound = false;

  var sidebar = {
    setCollapsed: function (collapsed, selector) {
      var el = resolveSidebarEl(selector);
      if (!el) return false;
      var next = Boolean(collapsed);
      el.setAttribute('data-collapsed', next ? 'true' : 'false');
      safeStorageSet(SIDEBAR_KEY, next ? 'true' : 'false');
      if (!isMobileViewport()) {
        syncSidebarToggleAria(!next);
      }
      bus.emit('sidebar:toggle', { collapsed: next });
      return next;
    },
    setMobileOpen: function (open, selector) {
      var el = resolveSidebarEl(selector);
      if (!el) return false;
      var next = Boolean(open);
      el.setAttribute('data-mobile-open', next ? 'true' : 'false');
      var backdrop = ensureSidebarBackdrop();
      backdrop.setAttribute('data-visible', next ? 'true' : 'false');
      syncSidebarToggleAria(next);
      bus.emit('sidebar:mobile-toggle', { open: next });
      return next;
    },
    closeMobile: function (selector) {
      return sidebar.setMobileOpen(false, selector);
    },
    toggle: function (selector) {
      var el = resolveSidebarEl(selector);
      if (!el) return false;
      if (isMobileViewport()) {
        var open = el.getAttribute('data-mobile-open') === 'true';
        return sidebar.setMobileOpen(!open, selector);
      }
      var current = el.getAttribute('data-collapsed') === 'true';
      return sidebar.setCollapsed(!current, selector);
    },
    init: function () {
      if (!hasDom()) return;
      ensureSidebarBackdrop();
      var el = resolveSidebarEl('.tx-sidebar');
      if (el && !el.hasAttribute('data-mobile-open')) {
        el.setAttribute('data-mobile-open', 'false');
      }
      var saved = safeStorageGet(SIDEBAR_KEY);
      if (saved === 'true') sidebar.setCollapsed(true);
      if (isMobileViewport()) {
        syncSidebarToggleAria(Boolean(el && el.getAttribute('data-mobile-open') === 'true'));
      }
      if (!sidebarListenerBound && typeof window.matchMedia === 'function') {
        sidebarListenerBound = true;
        var mq = window.matchMedia('(max-width: 768px)');
        var onChange = function (e) {
          if (!e.matches) sidebar.closeMobile();
        };
        if (typeof mq.addEventListener === 'function') mq.addEventListener('change', onChange);
        else if (typeof mq.addListener === 'function') mq.addListener(onChange);
      }
    }
  };

  /* ------------------------------------------------------------------------
     6. Declarative Tabs & Dropdowns
     ------------------------------------------------------------------------ */
  function activateTab(tabBtn) {
    var rootEl = tabBtn.closest('[data-tx-tabs]');
    if (!rootEl) return;
    var target = tabBtn.getAttribute('data-tx-tab');
    rootEl.querySelectorAll('[data-tx-tab]').forEach(function (btn) {
      var active = btn === tabBtn;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    var scope = rootEl.closest('[data-tx-tab-scope], .tx-code-block') || rootEl.parentElement || document;
    var panels = scope.querySelectorAll('[data-tx-tab-panel]');
    if (!panels.length && scope.parentElement) {
      panels = scope.parentElement.querySelectorAll('[data-tx-tab-panel]');
    }
    panels.forEach(function (panel) {
      var show = panel.getAttribute('data-tx-tab-panel') === target;
      if (show) panel.removeAttribute('hidden');
      else panel.setAttribute('hidden', '');
    });
    bus.emit('tabs:change', { tab: target });
  }

  function closeAllDropdowns(except) {
    if (!hasDom()) return;
    document.querySelectorAll('[data-tx-dropdown]').forEach(function (dd) {
      if (dd === except) return;
      var menu = dd.querySelector('[data-tx-dropdown-menu], .tx-dropdown-menu');
      var trigger = dd.querySelector('[data-tx-dropdown-trigger]');
      if (menu) menu.setAttribute('hidden', '');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  /* ------------------------------------------------------------------------
     7. FormController (Declarative [data-tx-validate] & Programmatic)
     ------------------------------------------------------------------------ */
  function Form(opts) {
    if (!opts || !opts.form) {
      throw new Error('Tailix.Form requires { form } element.');
    }
    this.form = opts.form;
    this.rules = opts.rules || {};
    this.onSubmit = typeof opts.onSubmit === 'function' ? opts.onSubmit : null;
    this._extractHtmlRules();
    this._bindEvents();
  }

  Form.prototype._extractHtmlRules = function () {
    var self = this;
    Array.prototype.forEach.call(this.form.elements, function (el) {
      if (!el.name || self.rules[el.name]) return;
      var r = {};
      if (el.hasAttribute('required')) r.required = true;
      var t = (el.getAttribute('type') || '').toLowerCase();
      if (t === 'email' || t === 'url' || t === 'number') r.type = t;
      if (el.hasAttribute('minlength')) r.minLength = Number(el.getAttribute('minlength'));
      if (el.hasAttribute('maxlength')) r.maxLength = Number(el.getAttribute('maxlength'));
      if (el.hasAttribute('pattern')) r.pattern = el.getAttribute('pattern');
      var customMsg = el.getAttribute('data-tx-error');
      if (customMsg) r.message = customMsg;
      if (Object.keys(r).length) self.rules[el.name] = r;
    });
  };

  Form.prototype.serialize = function () {
    var payload = {};
    Array.prototype.forEach.call(this.form.elements, function (el) {
      if (!el.name || el.disabled) return;
      if (el.type === 'checkbox') payload[el.name] = Boolean(el.checked);
      else if (el.type === 'radio') {
        if (el.checked) payload[el.name] = el.value;
      } else {
        payload[el.name] = el.value;
      }
    });
    return payload;
  };

  Form.prototype.clearFieldError = function (name) {
    var el = this.form.elements[name];
    if (!el || !el.classList) return;
    el.classList.remove('tx-field-error');
    el.removeAttribute('aria-invalid');
    var parent = el.closest('.tx-field') || el.parentElement;
    if (parent) {
      var msgs = parent.querySelectorAll('.tx-field-error-msg');
      Array.prototype.forEach.call(msgs, function (msgEl) {
        if (msgEl.getAttribute('data-tx-for') === name && msgEl.parentNode) {
          msgEl.parentNode.removeChild(msgEl);
        }
      });
    }
  };

  Form.prototype.setFieldError = function (name, message) {
    var el = this.form.elements[name];
    if (!el || !el.classList) return;
    this.clearFieldError(name);
    el.classList.add('tx-field-error');
    el.setAttribute('aria-invalid', 'true');
    var parent = el.closest('.tx-field') || el.parentElement;
    if (parent) {
      var msgEl = document.createElement('p');
      msgEl.className = 'tx-field-error-msg';
      msgEl.setAttribute('data-tx-for', name);
      msgEl.textContent = message;
      parent.appendChild(msgEl);
    }
  };

  Form.prototype.clearAllErrors = function () {
    var self = this;
    Object.keys(this.rules).forEach(function (name) {
      self.clearFieldError(name);
    });
  };

  Form.prototype.validate = function () {
    var self = this;
    var payload = this.serialize();
    var valid = true;
    var firstInvalid = null;

    Object.keys(this.rules).forEach(function (name) {
      var el = self.form.elements[name];
      if (!el) return;
      var err = validateValue(payload[name], self.rules[name], payload);
      if (err) {
        self.setFieldError(name, err);
        if (!firstInvalid) firstInvalid = el;
        valid = false;
      } else {
        self.clearFieldError(name);
      }
    });

    if (!valid && firstInvalid && typeof firstInvalid.focus === 'function') {
      firstInvalid.focus();
    }
    return valid;
  };

  Form.prototype.setLoading = function (loading) {
    var submitBtn = this.form.querySelector('button[type="submit"], input[type="submit"]');
    if (!submitBtn) return;
    if (loading) {
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.disabled = true;
    } else {
      submitBtn.removeAttribute('aria-busy');
      submitBtn.disabled = false;
    }
  };

  Form.prototype.reset = function () {
    this.form.reset();
    this.clearAllErrors();
  };

  Form.prototype.submit = function (e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    var isValid = this.validate();
    if (!isValid) {
      bus.emit('form:invalid', { form: this.form });
      return false;
    }
    var payload = this.serialize();
    if (this.onSubmit) {
      try {
        this.onSubmit(payload, this);
      } catch (err) {
        toast(err && err.message ? err.message : 'Submit failed.', 'danger');
        return false;
      }
    } else {
      var okMsg = this.form.getAttribute('data-tx-success-toast');
      if (okMsg) toast(okMsg, 'success');
    }
    bus.emit('form:submit', { payload: payload });
    return true;
  };

  Form.prototype.handleSubmit = function (e) {
    return this.submit(e);
  };

  Form.prototype._bindEvents = function () {
    var self = this;
    if (this.form.__txBound) return;
    this.form.__txBound = true;
    this.form.setAttribute('novalidate', '');
    this.form.addEventListener('submit', function (e) {
      if (self.onSubmit || self.form.hasAttribute('data-tx-ajax') || self.form.hasAttribute('data-tx-success-toast') || !self.validate()) {
        self.submit(e);
      }
    });
    this.form.addEventListener('input', function (e) {
      if (e.target && e.target.name && self.rules[e.target.name] && e.target.classList.contains('tx-field-error')) {
        var val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var err = validateValue(val, self.rules[e.target.name], self.serialize());
        if (!err) self.clearFieldError(e.target.name);
      }
    });
  };

  /* ------------------------------------------------------------------------
     8. TableController (Declarative [data-tx-table] & Programmatic)
     ------------------------------------------------------------------------ */
  function buildPageWindow(current, total) {
    if (total <= 7) {
      var all = [];
      for (var i = 1; i <= total; i++) all.push(i);
      return all;
    }
    var pages = [1];
    var left = Math.max(2, current - 1);
    var right = Math.min(total - 1, current + 1);
    if (current <= 3) {
      left = 2;
      right = 4;
    } else if (current >= total - 2) {
      left = total - 3;
      right = total - 1;
    }
    if (left > 2) pages.push('...');
    for (var p = left; p <= right; p++) pages.push(p);
    if (right < total - 1) pages.push('...');
    pages.push(total);
    return pages;
  }

  function initDeclarativeTable(wrapper) {
    if (!wrapper || wrapper.__txTableInit) return;
    var tbody = wrapper.querySelector('tbody');
    if (!tbody) return;
    wrapper.__txTableInit = true;

    var originalRows = Array.prototype.slice.call(tbody.querySelectorAll('tr')).map(function (tr) {
      var row = Array.prototype.slice.call(tr.querySelectorAll('td')).map(function (td) {
        return td.textContent.trim();
      });
      row.el = tr;
      return row;
    });

    var state = { query: '', filterCol: -1, filterVal: '', sortCol: -1, sortDir: 'asc', page: 1, pageSize: 10 };
    var searchInput = wrapper.querySelector('[data-tx-table-search]');
    var filterSelect = wrapper.querySelector('[data-tx-table-filter]');
    var pageSizeSelect = wrapper.querySelector('[data-tx-page-size]');
    var countEl = wrapper.querySelector('[data-tx-table-count]');
    var paginationEl = wrapper.querySelector('[data-tx-pagination]');
    var selectAll = wrapper.querySelector('[data-tx-select-all]');

    if (pageSizeSelect && Number(pageSizeSelect.value) > 0) {
      state.pageSize = Number(pageSizeSelect.value);
    }

    function render() {
      var filtered = filterAndSortRows(originalRows, {
        query: state.query,
        filterCol: state.filterCol,
        filterVal: state.filterVal,
        sortCol: state.sortCol,
        sortDir: state.sortDir
      });

      var total = filtered.length;
      var totalPages = Math.max(1, Math.ceil(total / state.pageSize));
      if (state.page > totalPages) state.page = totalPages;
      var start = (state.page - 1) * state.pageSize;
      var visible = filtered.slice(start, start + state.pageSize);

      tbody.innerHTML = '';
      if (!visible.length) {
        var emptyTr = document.createElement('tr');
        var emptyTd = document.createElement('td');
        var colCount = (wrapper.querySelectorAll('thead th').length) || 1;
        emptyTd.colSpan = colCount;
        emptyTd.className = 'tx-meta tx-table-empty';
        emptyTd.textContent = wrapper.getAttribute('data-tx-empty-text') || 'No matching records found.';
        emptyTr.appendChild(emptyTd);
        tbody.appendChild(emptyTr);
      } else {
        visible.forEach(function (r) { tbody.appendChild(r.el); });
      }

      if (countEl) {
        countEl.textContent = total === 0 ? '0 entries' : ('Showing ' + (start + 1) + '–' + Math.min(start + visible.length, total) + ' of ' + total);
      }

      if (paginationEl) {
        paginationEl.innerHTML = '';
        var prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'tx-page-btn';
        prevBtn.textContent = 'Prev';
        prevBtn.disabled = state.page <= 1;
        prevBtn.addEventListener('click', function () { state.page -= 1; render(); });
        paginationEl.appendChild(prevBtn);

        buildPageWindow(state.page, totalPages).forEach(function (entry) {
          if (entry === '...') {
            var dots = document.createElement('span');
            dots.className = 'tx-page-ellipsis';
            dots.setAttribute('aria-hidden', 'true');
            dots.textContent = '...';
            paginationEl.appendChild(dots);
            return;
          }
          var pBtn = document.createElement('button');
          pBtn.type = 'button';
          pBtn.className = 'tx-page-btn' + (entry === state.page ? ' is-active' : '');
          pBtn.textContent = String(entry);
          pBtn.addEventListener('click', function () { state.page = entry; render(); });
          paginationEl.appendChild(pBtn);
        });

        var nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'tx-page-btn';
        nextBtn.textContent = 'Next';
        nextBtn.disabled = state.page >= totalPages;
        nextBtn.addEventListener('click', function () { state.page += 1; render(); });
        paginationEl.appendChild(nextBtn);
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.query = searchInput.value.trim().toLowerCase();
        state.page = 1;
        render();
      });
    }

    if (filterSelect) {
      filterSelect.addEventListener('change', function () {
        state.filterCol = Number(filterSelect.getAttribute('data-tx-table-filter') || 0);
        state.filterVal = filterSelect.value.trim().toLowerCase();
        state.page = 1;
        render();
      });
    }

    wrapper.querySelectorAll('[data-tx-sort-col]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var col = Number(btn.getAttribute('data-tx-sort-col'));
        if (state.sortCol === col) {
          state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
        } else {
          state.sortCol = col;
          state.sortDir = 'asc';
        }
        render();
      });
    });

    if (pageSizeSelect) {
      pageSizeSelect.addEventListener('change', function () {
        state.pageSize = Math.max(1, Number(pageSizeSelect.value) || 10);
        state.page = 1;
        render();
      });
    }

    if (selectAll) {
      selectAll.addEventListener('change', function () {
        tbody.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
          cb.checked = selectAll.checked;
          var tr = cb.closest('tr');
          if (tr) tr.setAttribute('aria-selected', selectAll.checked ? 'true' : 'false');
        });
      });
    }

    render();
  }

  function Table(opts) {
    if (!opts || !opts.container) throw new Error('Tailix.Table requires { container }.');
    this.container = opts.container;
    this.columns = opts.columns || [];
    this.data = Array.isArray(opts.data) ? opts.data : [];
    this.pageSize = opts.pageSize || 10;
    this.emptyText = opts.emptyText || 'No records found.';
    this.render();
  }

  Table.prototype.setData = function (rows) {
    this.data = Array.isArray(rows) ? rows : [];
    this.render();
  };

  Table.prototype.render = function () {
    var self = this;
    var thead = '<thead><tr>' + this.columns.map(function (c, idx) {
      return '<th><button type="button" class="tx-th-sort" data-tx-sort-col="' + idx + '">' + escapeHtml(c.label || c.key) + '</button></th>';
    }).join('') + '</tr></thead>';

    var tbody = '<tbody>' + this.data.map(function (row) {
      return '<tr>' + self.columns.map(function (c) {
        var val = typeof c.render === 'function' ? c.render(row) : escapeHtml(row[c.key]);
        return '<td>' + val + '</td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody>';

    this.container.innerHTML =
      '<div class="tx-table-panel" data-tx-table data-tx-empty-text="' + escapeHtml(this.emptyText) + '">' +
        '<div class="tx-table-wrap"><table class="tx-table">' + thead + tbody + '</table></div>' +
        '<div class="tx-table-footer"><span class="tx-meta" data-tx-table-count></span><div class="tx-pagination" data-tx-pagination></div></div>' +
      '</div>';

    var panel = this.container.querySelector('[data-tx-table]');
    if (panel) initDeclarativeTable(panel);
  };

  /* ------------------------------------------------------------------------
     9. Global Event Delegation & Bootstrap
     ------------------------------------------------------------------------ */
  var initialized = false;

  function copyToClipboard(text, done) {
    var payload = String(text == null ? '' : text);
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(payload).then(function () {
        if (done) done(true);
      }, function () {
        fallbackCopy(payload, done);
      });
      return;
    }
    fallbackCopy(payload, done);
  }

  function fallbackCopy(text, done) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      if (done) done(Boolean(ok));
    } catch (_) {
      if (done) done(false);
    }
  }

  function initDeclarativeControls() {
    if (!hasDom()) return;
    theme.init();
    sidebar.init();
    hydrateIcons(document);

    document.querySelectorAll('[data-tx-table]').forEach(initDeclarativeTable);
    document.querySelectorAll('form[data-tx-validate]').forEach(function (formEl) {
      if (!formEl.__txForm) {
        formEl.__txForm = new Form({ form: formEl });
      }
    });

    if (initialized) return;
    initialized = true;

    document.addEventListener('click', function (e) {
      if (!e.target || typeof e.target.closest !== 'function') return;

      var insideDropdown = e.target.closest('[data-tx-dropdown]');
      var ddTrigger = e.target.closest('[data-tx-dropdown-trigger]');
      if (!insideDropdown) {
        closeAllDropdowns();
      } else if (!ddTrigger && e.target.closest('.tx-dropdown-item, [data-tx-dropdown-close]')) {
        closeAllDropdowns();
      }

      if (e.target.closest('.tx-sidebar-backdrop')) {
        sidebar.closeMobile();
        return;
      }

      var sideLink = e.target.closest('.tx-sidebar-link');
      if (sideLink) {
        var openSide = sideLink.closest('.tx-sidebar[data-mobile-open="true"]');
        if (openSide) sidebar.closeMobile();
      }

      var themeBtn = e.target.closest('[data-tx-theme-toggle]');
      if (themeBtn) {
        theme.toggle();
        return;
      }

      var sideBtn = e.target.closest('[data-tx-sidebar-toggle]');
      if (sideBtn) {
        sidebar.toggle(sideBtn.getAttribute('data-tx-sidebar-toggle') || '.tx-sidebar');
        return;
      }

      var toastBtn = e.target.closest('[data-tx-toast]');
      if (toastBtn) {
        toast(
          toastBtn.getAttribute('data-tx-toast'),
          toastBtn.getAttribute('data-tx-toast-type') || 'info',
          toastBtn.hasAttribute('data-tx-toast-duration') ? Number(toastBtn.getAttribute('data-tx-toast-duration')) : 3200
        );
        return;
      }

      var modalTrigger = e.target.closest('[data-tx-modal-target]');
      if (modalTrigger) {
        var sel = modalTrigger.getAttribute('data-tx-modal-target');
        var modalEl = null;
        if (sel) {
          try {
            modalEl = document.querySelector(sel);
          } catch (_) {
            if (typeof console !== 'undefined' && console.warn) {
              console.warn('[Tailix] Invalid modal target selector:', sel);
            }
          }
        }
        if (modalEl) openModalElement(modalEl);
        return;
      }

      if (e.target.closest('[data-tx-modal-close]') || (activeBackdrop && e.target === activeBackdrop)) {
        closeModal();
        return;
      }

      var tabBtn = e.target.closest('[data-tx-tab]');
      if (tabBtn) {
        activateTab(tabBtn);
        return;
      }

      var accTrigger = e.target.closest('[data-tx-accordion-trigger], .tx-accordion-trigger');
      if (accTrigger) {
        var accItem = accTrigger.closest('.tx-accordion-item');
        var accRoot = accTrigger.closest('[data-tx-accordion]');
        if (accItem) {
          var isExpanded = accTrigger.getAttribute('aria-expanded') === 'true';
          if (!isExpanded && accRoot && accRoot.getAttribute('data-tx-accordion') === 'single') {
            accRoot.querySelectorAll('.tx-accordion-item').forEach(function (item) {
              if (item === accItem) return;
              var t = item.querySelector('[data-tx-accordion-trigger], .tx-accordion-trigger');
              var p = item.querySelector('[data-tx-accordion-panel], .tx-accordion-panel');
              if (t) t.setAttribute('aria-expanded', 'false');
              if (p) p.setAttribute('hidden', '');
            });
          }
          accTrigger.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
          var accPanel = accItem.querySelector('[data-tx-accordion-panel], .tx-accordion-panel');
          if (accPanel) {
            if (isExpanded) accPanel.setAttribute('hidden', '');
            else accPanel.removeAttribute('hidden');
          }
          bus.emit('accordion:toggle', { open: !isExpanded });
        }
        return;
      }

      var pwdToggle = e.target.closest('.tx-password-toggle, [data-tx-password-toggle]');
      if (pwdToggle) {
        var targetSel = pwdToggle.getAttribute('data-tx-password-toggle');
        var pwdInput = null;
        if (targetSel) {
          try {
            pwdInput = document.querySelector(targetSel);
          } catch (_) {
            pwdInput = null;
          }
        }
        if (!pwdInput) {
          var grp = pwdToggle.closest('.tx-input-group');
          pwdInput = grp ? grp.querySelector('input') : null;
        }
        if (pwdInput) {
          var show = pwdInput.type === 'password';
          pwdInput.type = show ? 'text' : 'password';
          pwdToggle.setAttribute('aria-pressed', show ? 'true' : 'false');
          pwdToggle.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
          var iconNode = pwdToggle.querySelector('[data-tx-icon]');
          if (iconNode) {
            iconNode.setAttribute('data-tx-icon', show ? 'eye-off' : 'eye');
            hydrateIcons(pwdToggle);
          } else if (pwdToggle.hasAttribute('data-tx-icon')) {
            pwdToggle.setAttribute('data-tx-icon', show ? 'eye-off' : 'eye');
            pwdToggle.innerHTML = icon(show ? 'eye-off' : 'eye', pwdToggle.getAttribute('data-tx-icon-size') || 'sm');
          }
        }
        return;
      }

      var copyBtn = e.target.closest('[data-tx-copy]');
      if (copyBtn) {
        var copySel = copyBtn.getAttribute('data-tx-copy');
        var sourceEl = null;
        if (copySel) {
          try {
            sourceEl = document.querySelector(copySel);
          } catch (_) {
            sourceEl = null;
          }
        }
        if (!sourceEl) {
          var codeBlock = copyBtn.closest('.tx-code-block');
          if (codeBlock) {
            sourceEl = codeBlock.querySelector('[data-tx-tab-panel]:not([hidden]) .tx-code-pre, [data-tx-tab-panel]:not([hidden]) pre, [data-tx-tab-panel]:not([hidden]) code')
              || codeBlock.querySelector('.tx-code-pre, pre, code');
          }
        }
        if (sourceEl) {
          var rawText = 'value' in sourceEl && typeof sourceEl.value === 'string' && !sourceEl.matches('pre, code')
            ? sourceEl.value
            : sourceEl.textContent;
          copyToClipboard(rawText, function () {
            if (!copyBtn.getAttribute('data-tx-copying')) {
              var origHtml = copyBtn.innerHTML;
              copyBtn.setAttribute('data-tx-copying', '1');
              copyBtn.textContent = 'Copied';
              setTimeout(function () {
                copyBtn.innerHTML = origHtml;
                copyBtn.removeAttribute('data-tx-copying');
              }, 1000);
            }
            bus.emit('code:copied', { text: rawText });
            if (copyBtn.hasAttribute('data-tx-copy-toast')) {
              toast(copyBtn.getAttribute('data-tx-copy-toast') || 'Copied to clipboard.', 'success', 2000);
            }
          });
        }
        return;
      }

      var chipClose = e.target.closest('[data-tx-chip-close], .tx-chip-close');
      if (chipClose) {
        var chip = chipClose.closest('.tx-chip');
        if (chip && chip.parentNode) {
          chip.parentNode.removeChild(chip);
          bus.emit('chip:dismissed', {});
        }
        return;
      }

      if (ddTrigger) {
        var dd = ddTrigger.closest('[data-tx-dropdown]');
        var menu = dd ? dd.querySelector('[data-tx-dropdown-menu], .tx-dropdown-menu') : null;
        if (menu) {
          var willOpen = menu.hasAttribute('hidden');
          closeAllDropdowns(dd);
          if (willOpen) {
            menu.removeAttribute('hidden');
            ddTrigger.setAttribute('aria-expanded', 'true');
          } else {
            menu.setAttribute('hidden', '');
            ddTrigger.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });

    document.addEventListener('change', function (e) {
      if (!e.target || e.target.type !== 'radio') return;
      var card = e.target.closest('.tx-radio-card');
      if (!card) return;
      var name = e.target.name;
      if (name) {
        document.querySelectorAll('.tx-radio-card input[type="radio"]').forEach(function (inp) {
          if (inp.name === name) {
            var parentCard = inp.closest('.tx-radio-card');
            if (parentCard) parentCard.classList.toggle('is-selected', inp.checked);
          }
        });
      } else {
        card.classList.toggle('is-selected', e.target.checked);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && activeBackdrop) {
        trapModalFocus(e);
        return;
      }
      if (e.key === 'Escape') {
        if (activeBackdrop) closeModal();
        closeAllDropdowns();
        if (document.querySelector('.tx-sidebar[data-mobile-open="true"]')) {
          sidebar.closeMobile();
        }
      }
      if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && e.target && e.target.hasAttribute('data-tx-tab')) {
        var tabsContainer = e.target.closest('[data-tx-tabs]');
        if (tabsContainer) {
          var tabs = Array.prototype.slice.call(tabsContainer.querySelectorAll('[data-tx-tab]'));
          var idx = tabs.indexOf(e.target);
          if (idx !== -1 && tabs.length) {
            var nextIdx = (idx + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
            tabs[nextIdx].focus();
            activateTab(tabs[nextIdx]);
          }
        }
      }
    });
  }

  if (hasDom()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initDeclarativeControls);
    } else {
      initDeclarativeControls();
    }
  }

  return {
    version: VERSION,
    bus: bus,
    icon: icon,
    icons: Object.keys(ICONS),
    toast: toast,
    modal: modal,
    closeModal: closeModal,
    theme: theme,
    sidebar: sidebar,
    Form: Form,
    Table: Table,
    init: initDeclarativeControls,
    _internals: {
      escapeHtml: escapeHtml,
      createEventBus: createEventBus,
      validateValue: validateValue,
      filterAndSortRows: filterAndSortRows,
      buildPageWindow: buildPageWindow,
      icon: icon
    }
  };
});
