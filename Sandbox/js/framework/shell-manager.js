/**
 * VibTools Shell Manager — v2.2.0 Framework Layer
 *
 * Responsibility: Dynamically inject the common Layout Shell (Topbar, Sidebar,
 * Toast container root, Dynamic Modal root) into pages that opt in, eliminating
 * static HTML duplication across every page.
 *
 * Opt-in: add  data-vib-shell  to the <body> element of a page to activate
 * automatic shell injection. Static-shell pages are unaffected.
 *
 * Token rules: ZERO hardcoded hex / pixel / SVG dimension attributes.
 * All visual values use var(--vib-*) / var(--icon-*) / var(--text-*) etc.
 *
 * Coordinates with:
 *   window.EventBus    — event-bus.js (must be loaded first)
 *   window.VibToast    — components/toast-manager.js
 *   window.VibModal    — components/modal-manager.js
 *
 * Sidebar navigation list is declared in ShellManager.NAV_ITEMS.
 * Active page highlighting is resolved automatically from location.pathname.
 *
 * sidebar:toggle  — collapses / expands sidebar; state stored in localStorage
 * theme:toggle    — currently reserved; toggles data-theme on <html>
 */
(function (window) {
  'use strict';

  /* ─── Navigation manifest ───────────────────────────────────────────── */

  var NAV_GROUPS = [
    {
      title: 'MAIN',
      items: [
        { label: 'Overview',   href: '/index.html',                   icon: 'overview'   },
        { label: 'Home',       href: '/pages/home.html',              icon: 'home'       },
        { label: 'Projects',   href: '/pages/projects.html',          icon: 'projects'   },
        { label: 'Dashboard',  href: '/pages/dashboard-shell.html',   icon: 'dashboard'  },
        { label: 'Monitoring', href: '/pages/monitoring.html',        icon: 'monitoring' }
      ]
    },
    {
      title: 'SAAS',
      items: [
        { label: 'Users',    href: '/pages/users.html',    icon: 'users'    },
        { label: 'Billing',  href: '/pages/billing.html',  icon: 'billing'  },
        { label: 'Settings', href: '/pages/settings.html', icon: 'settings' },
        { label: 'Plugins',  href: '/pages/plugins.html',  icon: 'settings' }
      ]
    },
    {
      title: 'PAGES & AUTH',
      items: [
        { label: 'Docs',     href: '/pages/docs-layout.html', icon: 'docs'     },
        { label: 'About',    href: '/pages/about.html',        icon: 'about'    },
        { label: 'Contact',  href: '/pages/contact.html',      icon: 'contact'  },
        { label: 'Login',    href: '/pages/login.html',         icon: 'login'    },
        { label: 'Register', href: '/pages/register.html',     icon: 'register' },
        { label: 'Profile',  href: '/pages/profile.html',      icon: 'profile'  }
      ]
    },
    {
      title: 'COMPONENTS',
      items: [
        { label: 'Forms',        href: '/pages/forms.html',       icon: 'forms'        },
        { label: 'Upload Files', href: '/pages/upload.html',      icon: 'uploadfiles'  },
        { label: 'Tables',       href: '/pages/tables.html',      icon: 'tables'       },
        { label: 'Cards',        href: '/pages/cards.html',       icon: 'cards'        },
        { label: 'Navigation',   href: '/pages/navigation.html',  icon: 'navigation'   },
        { label: 'Dropdowns',    href: '/pages/dropdowns.html',   icon: 'dropdowns'    }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { label: 'States',      href: '/pages/alerts-states.html',       icon: 'states'    },
        { label: 'Empty/Error', href: '/pages/empty-loading-error.html', icon: 'emptyerror'},
        { label: 'Logs',        href: '/pages/logs-modal.html',          icon: 'logs'      },
        { label: 'Tokens',      href: '/pages/typography-colors.html',   icon: 'tokens'    },
        { label: '404 Error',   href: '/pages/404.html',                 icon: 'fallback'  },
        { label: '500 Error',   href: '/pages/500.html',                 icon: 'fallback'  }
      ]
    }
  ];

  /* ─── Icon registry (inline SVG, no external dependency) ────────────── */

  var ICONS = {
    overview:    '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.2 8 3.7l5 4.5"/><path d="M4.5 7.5v5h7v-5"/></svg>',
    home:        '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.2 8 3.7l5 4.5"/><path d="M5 7.8v4.7h6V7.8"/></svg>',
    projects:    '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.2" y="4.2" width="9.6" height="7.6" rx="1.4"/><path d="M5.2 6.2h5.6M5.2 8h4"/></svg>',
    dashboard:   '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3" width="4" height="4" rx="1"/><rect x="9" y="3" width="4" height="4" rx="1"/><rect x="3" y="9" width="4" height="4" rx="1"/><rect x="9" y="9" width="4" height="4" rx="1"/></svg>',
    monitoring:  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.8 10.6h10.4"/><path d="M3.4 10.4 5.6 7.8l2 1.7 2.2-4.2 2.6 5.1"/><rect x="2.8" y="3.3" width="10.4" height="9.4" rx="1.4"/></svg>',
    users:       '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="5.8" r="2.2"/><path d="M2.9 12.2c.7-2 5.5-2 6.2 0"/><path d="M11.5 5.2v4.2M9.4 7.3h4.2"/></svg>',
    billing:     '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.8" y="4" width="10.4" height="9" rx="1.4"/><path d="M2.8 7.4h10.4M5.2 10.2h2M5.2 11.8h1.2"/></svg>',
    settings:    '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="2"/><path d="M8 2.8v1.4M8 11.8v1.4M3.4 5.1l1.2.7M11.4 10.2l1.2.7M3.4 10.9l1.2-.7M11.4 5.8l1.2-.7"/><path d="M2.8 8h1.4M11.8 8h1.4"/></svg>',
    docs:        '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2.8h4.6L12 5.2v8H5z"/><path d="M9.5 2.8v2.6H12"/><path d="M6.6 7.5h3.8M6.6 9.4h3.8M6.6 11.3h2.2"/></svg>',
    about:       '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.2"/><path d="M8 7.4v3.7M8 4.9h.01"/></svg>',
    contact:     '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.8" y="4" width="10.4" height="8" rx="1.4"/><path d="m3.5 5.2 4.5 3.2 4.5-3.2"/></svg>',
    login:       '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.5 4.2h-2a1.4 1.4 0 0 0-1.4 1.4v4.8a1.4 1.4 0 0 0 1.4 1.4h2"/><path d="M8.2 5.5 10.7 8l-2.5 2.5M10.5 8H5.8"/></svg>',
    register:    '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="5.8" r="2.2"/><path d="M2.9 12.2c.7-2 5.5-2 6.2 0"/><path d="M11.5 5.2v4.2M9.4 7.3h4.2"/></svg>',
    profile:     '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5.6" r="2.4"/><path d="M3.8 12.8c.8-2.5 7.6-2.5 8.4 0"/></svg>',
    forms:       '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3.5" width="10" height="9" rx="1.4"/><path d="M5.1 6h5.8M5.1 8h5.8M5.1 10h3.8"/></svg>',
    uploadfiles: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 10.8V4.7"/><path d="m5.6 7.1 2.4-2.4 2.4 2.4"/><rect x="3" y="10.2" width="10" height="2.8" rx="1.1"/></svg>',
    tables:      '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="4" width="10" height="8" rx="1"/><path d="M3 6.7h10M3 9.3h10M6.3 4v8M9.7 4v8"/></svg>',
    cards:       '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3.6" width="10" height="8.8" rx="1.4"/><path d="M5 6h4M5 8.1h6"/></svg>',
    navigation:  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 5.2h10M3 8h10M3 10.8h10"/><path d="m10.8 3.8 2 1.4-2 1.4"/></svg>',
    dropdowns:   '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="4" width="10" height="4" rx="1"/><path d="m6.2 10 1.8 1.8L9.8 10"/></svg>',
    states:      '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="M8 4.8v3.4M8 11.2h.01"/></svg>',
    emptyerror:  '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="m5.2 10.8 5.6-5.6"/></svg>',
    logs:        '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.8" y="3.6" width="10.4" height="8.8" rx="1.2"/><path d="M4.8 6.1h1.8M4.8 8h3M4.8 9.9h5.5"/><path d="m10.6 6.2 1.2 1.2-1.2 1.2"/></svg>',
    tokens:      '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.6 3.5 4.7 12.5M11.3 3.5l-.9 9M3.5 6h9M3.1 10h9"/></svg>',
    fallback:    '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3.2"/></svg>'
  };

  /* ─── Helpers ────────────────────────────────────────────────────────── */

  var VERSION = 'v2.2.0';
  var LS_KEY_SIDEBAR = 'vib-sidebar-collapsed';

  function icon(name) {
    return ICONS[String(name || '').toLowerCase()] || ICONS.fallback;
  }

  /** Normalise a full path or href to bare filename (e.g. "billing.html"). */
  function basenameOf(path) {
    return String(path || '')
      .split('#')[0].split('?')[0]
      .replace(/\\/g, '/')
      .split('/')
      .pop() || 'index.html';
  }

  /** Return true when navItem href matches the current page. */
  function isActive(item) {
    var current = basenameOf(window.location.pathname);
    var target  = basenameOf(item.href);
    if (current === 'index.html' && item.label === 'Overview') return true;
    return target === current;
  }

  /* ─── Shell HTML builders ────────────────────────────────────────────── */

  function buildTopbarHTML() {
    return [
      '<header class="vib-topbar sticky top-0 z-20">',
      '  <div class="vib-container vib-topbar-inner">',
      '    <a href="/index.html" class="vib-brand">',
      '      <svg class="w-[var(--icon-lg)] h-[var(--icon-lg)]" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)" viewBox="0 0 24 24">',
      '        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
      '      </svg>',
      '      <span>VibTools UI Sandbox</span>',
      '    </a>',
      '    <div class="vib-row gap-2">',
      '      <span class="vib-badge">' + VERSION + '</span>',
      '      <button id="vib-sidebar-toggle" type="button" class="vib-icon-button" aria-label="Toggle sidebar">',
      '        <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)" viewBox="0 0 24 24">',
      '          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>',
      '        </svg>',
      '      </button>',
      '    </div>',
      '  </div>',
      '</header>'
    ].join('\n');
  }

  function buildNavItem(item) {
    var active = isActive(item);
    var cls = 'sandbox-page-link vib-sidebar-link' + (active ? ' active' : '');
    var aria = active ? ' aria-current="page"' : '';
    return [
      '<a class="' + cls + '" href="' + item.href + '"' + aria + '>',
      '  <span class="vib-sidebar-icon" aria-hidden="true">' + icon(item.icon) + '</span>',
      '  ' + item.label,
      '</a>'
    ].join('');
  }

  function buildSidebarHTML() {
    var groups = NAV_GROUPS.map(function (group) {
      var links = group.items.map(buildNavItem).join('\n');
      return [
        '<div class="vib-sidebar-group">',
        '  <p class="vib-sidebar-group-title">' + group.title + '</p>',
        links,
        '</div>'
      ].join('\n');
    }).join('\n');

    return [
      '<aside class="vib-sidebar shrink-0" id="vib-sidebar">',
      '  <div class="vib-sidebar-inner">',
      '    <nav class="vib-sidebar-nav" aria-label="Sandbox pages">',
      groups,
      '    </nav>',
      '    <div class="vib-sidebar-footer">',
      '      <div class="vib-sidebar-workspace">',
      '        <span class="vib-sidebar-workspace-avatar">VT</span>',
      '        <span>',
      '          <span class="vib-sidebar-workspace-title">VibTools Sandbox</span>',
      '          <span class="vib-sidebar-workspace-meta">' + VERSION + ' · UI system</span>',
      '        </span>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</aside>'
    ].join('\n');
  }

  /* ─── Shell injection ────────────────────────────────────────────────── */

  /**
   * Wrap existing <body> content with the shell structure.
   * Any existing content inside <body> is preserved inside <main class="vib-main flex-1">.
   */
  function injectShell() {
    var body = document.body;

    // Capture existing page content (the page-author's markup)
    var pageContent = document.createElement('div');
    while (body.firstChild) {
      pageContent.appendChild(body.firstChild);
    }

    // Shell: topbar
    var topbarEl = document.createElement('div');
    topbarEl.innerHTML = buildTopbarHTML();
    var topbar = topbarEl.firstElementChild;

    // Shell: sidebar
    var sidebarEl = document.createElement('div');
    sidebarEl.innerHTML = buildSidebarHTML();
    var sidebar = sidebarEl.firstElementChild;

    // Shell: main wrapper
    var main = document.createElement('main');
    main.className = 'vib-main flex-1';
    main.id = 'vib-page-content';
    while (pageContent.firstChild) {
      main.appendChild(pageContent.firstChild);
    }

    // Shell: layout row
    var layout = document.createElement('div');
    layout.className = 'vib-layout';
    layout.appendChild(sidebar);
    layout.appendChild(main);

    // Shell: outer shell wrapper
    var shell = document.createElement('div');
    shell.className = 'vib-shell';
    shell.id = 'vib-shell';
    shell.appendChild(topbar);
    shell.appendChild(layout);

    body.appendChild(shell);
  }

  /* ─── Sidebar collapse ───────────────────────────────────────────────── */

  function isSidebarCollapsed() {
    try { return localStorage.getItem(LS_KEY_SIDEBAR) === '1'; } catch (e) { return false; }
  }

  function saveSidebarState(collapsed) {
    try { localStorage.setItem(LS_KEY_SIDEBAR, collapsed ? '1' : '0'); } catch (e) {}
  }

  function applySidebarState() {
    var sidebar = document.getElementById('vib-sidebar');
    if (!sidebar) return;
    if (isSidebarCollapsed()) {
      sidebar.setAttribute('data-collapsed', 'true');
    } else {
      sidebar.removeAttribute('data-collapsed');
    }
  }

  function toggleSidebar() {
    var collapsed = !isSidebarCollapsed();
    saveSidebarState(collapsed);
    applySidebarState();
  }

  /* ─── Event bus wiring ───────────────────────────────────────────────── */

  function wireEventBus() {
    var bus = window.EventBus;
    if (!bus) return;

    // toast:show → VibToast
    bus.on('toast:show', function (payload) {
      var toast = window.VibToast;
      if (!toast || !payload) return;
      var type = payload.type || 'info';
      var msg  = payload.message || '';
      var dur  = payload.duration;
      if (toast[type]) toast[type](msg, dur);
      else toast.info(msg, dur);
    });

    // modal:open → VibModal
    bus.on('modal:open', function (payload) {
      if (window.VibModal) window.VibModal.open(payload || {});
    });

    // modal:close → VibModal
    bus.on('modal:close', function () {
      if (window.VibModal) window.VibModal.close();
    });

    // sidebar:toggle
    bus.on('sidebar:toggle', function () {
      toggleSidebar();
    });

    // theme:toggle — flips data-theme on <html> (reserved for future theming)
    bus.on('theme:toggle', function () {
      var html = document.documentElement;
      html.setAttribute('data-theme',
        html.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
      );
    });
  }

  function wireSidebarToggleButton() {
    var btn = document.getElementById('vib-sidebar-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      if (window.EventBus) {
        window.EventBus.emit('sidebar:toggle');
      } else {
        toggleSidebar();
      }
    });
  }

  /* ─── Version badges ─────────────────────────────────────────────────── */

  function setVersionBadges() {
    document.querySelectorAll('.vib-badge').forEach(function (badge) {
      if (/^v\d+\.\d+\.\d+$/.test(badge.textContent.trim())) {
        badge.textContent = VERSION;
      }
    });
    document.documentElement.setAttribute('data-vib-version', VERSION);
  }

  /* ─── Init ───────────────────────────────────────────────────────────── */

  function init() {
    var body = document.body;
    var isShellPage = body.hasAttribute('data-vib-shell');

    if (isShellPage) {
      injectShell();
    }

    // Always wire event bus regardless of static/dynamic shell
    wireEventBus();

    if (isShellPage) {
      applySidebarState();
      wireSidebarToggleButton();
    }

    setVersionBadges();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})(window);
