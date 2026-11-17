/* VibTools Sandbox navigation controller — v2.1.2 single token foundation engine baseline. */
(function () {
  'use strict';

  var VERSION = 'v2.1.2';
  var groupPlan = [
    { title: 'MAIN', labels: ['Overview', 'Home', 'Projects', 'Dashboard', 'Monitoring'] },
    { title: 'PAGES & AUTH', labels: ['Docs', 'About', 'Contact', 'Login', 'Register', 'Profile'] },
    { title: 'COMPONENTS', labels: ['Forms', 'Upload Files', 'Tables', 'Cards', 'Navigation', 'Dropdowns'] },
    { title: 'SYSTEM', labels: ['States', 'Empty/Error', 'Logs', 'Settings', 'Tokens'] }
  ];

  function normalizePath(path) {
    return String(path || '').split('#')[0].split('?')[0].replace(/\\/g, '/').split('/').pop() || 'index.html';
  }

  function svg(name) {
    var icons = {
      overview: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.2 8 3.7l5 4.5"/><path d="M4.5 7.5v5h7v-5"/></svg>',
      home: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.2 8 3.7l5 4.5"/><path d="M5 7.8v4.7h6V7.8"/></svg>',
      projects: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.2" y="4.2" width="9.6" height="7.6" rx="1.4"/><path d="M5.2 6.2h5.6M5.2 8h4"/></svg>',
      dashboard: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3" width="4" height="4" rx="1"/><rect x="9" y="3" width="4" height="4" rx="1"/><rect x="3" y="9" width="4" height="4" rx="1"/><rect x="9" y="9" width="4" height="4" rx="1"/></svg>',
      monitoring: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.8 10.6h10.4"/><path d="M3.4 10.4 5.6 7.8l2 1.7 2.2-4.2 2.6 5.1"/><rect x="2.8" y="3.3" width="10.4" height="9.4" rx="1.4"/></svg>',
      docs: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2.8h4.6L12 5.2v8H5z"/><path d="M9.5 2.8v2.6H12"/><path d="M6.6 7.5h3.8M6.6 9.4h3.8M6.6 11.3h2.2"/></svg>',
      about: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5.2"/><path d="M8 7.4v3.7M8 4.9h.01"/></svg>',
      contact: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.8" y="4" width="10.4" height="8" rx="1.4"/><path d="m3.5 5.2 4.5 3.2 4.5-3.2"/></svg>',
      login: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.5 4.2h-2a1.4 1.4 0 0 0-1.4 1.4v4.8a1.4 1.4 0 0 0 1.4 1.4h2"/><path d="M8.2 5.5 10.7 8l-2.5 2.5M10.5 8H5.8"/></svg>',
      register: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="5.8" r="2.2"/><path d="M2.9 12.2c.7-2 5.5-2 6.2 0"/><path d="M11.5 5.2v4.2M9.4 7.3h4.2"/></svg>',
      profile: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="5.6" r="2.4"/><path d="M3.8 12.8c.8-2.5 7.6-2.5 8.4 0"/></svg>',
      forms: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3.5" width="10" height="9" rx="1.4"/><path d="M5.1 6h5.8M5.1 8h5.8M5.1 10h3.8"/></svg>',
      tables: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="4" width="10" height="8" rx="1"/><path d="M3 6.7h10M3 9.3h10M6.3 4v8M9.7 4v8"/></svg>',
      uploadfiles: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 10.8V4.7"/><path d="m5.6 7.1 2.4-2.4 2.4 2.4"/><rect x="3" y="10.2" width="10" height="2.8" rx="1.1"/></svg>',
      cards: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="3.6" width="10" height="8.8" rx="1.4"/><path d="M5 6h4M5 8.1h6"/></svg>',
      navigation: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 5.2h10M3 8h10M3 10.8h10"/><path d="m10.8 3.8 2 1.4-2 1.4"/></svg>',
      dropdowns: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="4" width="10" height="4" rx="1"/><path d="m6.2 10 1.8 1.8L9.8 10"/></svg>',
      states: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="M8 4.8v3.4M8 11.2h.01"/></svg>',
      emptyerror: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="5"/><path d="m5.2 10.8 5.6-5.6"/></svg>',
      logs: '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="2.8" y="3.6" width="10.4" height="8.8" rx="1.2"/><path d="M4.8 6.1h1.8M4.8 8h3M4.8 9.9h5.5"/><path d="m10.6 6.2 1.2 1.2-1.2 1.2"/></svg>',
      settings: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="2"/><path d="M8 2.8v1.4M8 11.8v1.4M3.4 5.1l1.2.7M11.4 10.2l1.2.7M3.4 10.9l1.2-.7M11.4 5.8l1.2-.7"/><path d="M2.8 8h1.4M11.8 8h1.4"/></svg>',
      tokens: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.6 3.5 4.7 12.5M11.3 3.5l-.9 9M3.5 6h9M3.1 10h9"/></svg>',
      fallback: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3.2"/></svg>'
    };
    var key = String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return icons[key] || icons.fallback;
  }

  function setVersionBadges() {
    document.querySelectorAll('.vib-badge').forEach(function (badge) {
      if (/^v\d+\.\d+\.\d+$/.test(badge.textContent.trim())) {
        badge.textContent = VERSION;
      }
    });
    document.documentElement.setAttribute('data-vib-version', VERSION);
  }

  function prepareLink(link, currentFile) {
    var label = link.textContent.trim();
    var hrefFile = normalizePath(link.getAttribute('href'));
    var isCurrent = hrefFile === currentFile || (label === 'Overview' && currentFile === 'index.html');
    if (isCurrent) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active');
    } else if (link.getAttribute('aria-current') === 'page') {
      link.removeAttribute('aria-current');
      link.classList.remove('active');
    }
    link.querySelectorAll('.vib-sidebar-icon').forEach(function (icon) { icon.remove(); });
    var span = document.createElement('span');
    span.className = 'vib-sidebar-icon';
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = svg(label);
    link.prepend(span);
  }

  function groupMainSidebar(nav) {
    if (!nav || nav.dataset.sidebarGrouped === 'true') return;
    var links = Array.prototype.slice.call(nav.querySelectorAll(':scope > a.vib-sidebar-link'));
    if (!links.length) return;
    var byLabel = new Map();
    links.forEach(function (link) { byLabel.set(link.textContent.trim(), link); });
    nav.innerHTML = '';
    nav.classList.remove('vib-stack-sm');
    nav.classList.add('vib-sidebar-nav');
    groupPlan.forEach(function (group) {
      var present = group.labels.map(function (label) { return byLabel.get(label); }).filter(Boolean);
      if (!present.length) return;
      var wrap = document.createElement('div');
      wrap.className = 'vib-sidebar-group';
      var title = document.createElement('p');
      title.className = 'vib-sidebar-group-title';
      title.textContent = group.title;
      wrap.appendChild(title);
      present.forEach(function (link) { wrap.appendChild(link); });
      nav.appendChild(wrap);
    });
    links.forEach(function (link) {
      if (!link.parentElement || link.parentElement === nav) nav.appendChild(link);
    });
    nav.dataset.sidebarGrouped = 'true';
  }

  function ensureFooter() {
    var inner = document.querySelector('.vib-sidebar > .vib-sidebar-inner');
    if (!inner || inner.querySelector('.vib-sidebar-footer')) return;
    var footer = document.createElement('div');
    footer.className = 'vib-sidebar-footer';
    footer.innerHTML = '<div class="vib-sidebar-workspace"><span class="vib-sidebar-workspace-avatar">VT</span><span><span class="vib-sidebar-workspace-title">VibTools Sandbox</span><span class="vib-sidebar-workspace-meta">' + VERSION + ' · UI system</span></span></div>';
    inner.appendChild(footer);
  }


  function normalizeCellText(text) {
    return String(text || '').trim().toLowerCase();
  }

  function initTablePanel(panel) {
    var table = panel.querySelector('table.vib-table');
    if (!table || panel.dataset.tableReady === 'true') return;
    var tbody = table.tBodies[0];
    if (!tbody) return;
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    var search = panel.querySelector('[data-table-search]');
    var filters = Array.prototype.slice.call(panel.querySelectorAll('[data-table-filter]'));
    var counter = panel.querySelector('[data-table-count]');
    var selectAll = panel.querySelector('[data-table-select-all]');
    var rowSelects = Array.prototype.slice.call(panel.querySelectorAll('[data-table-row-select]'));

    function rowMatches(row) {
      var query = search ? normalizeCellText(search.value) : '';
      var ok = !query || normalizeCellText(row.textContent).indexOf(query) !== -1;
      filters.forEach(function (filter) {
        var key = filter.getAttribute('data-table-filter');
        var value = normalizeCellText(filter.value);
        if (value && normalizeCellText(row.getAttribute('data-' + key)) !== value) ok = false;
      });
      return ok;
    }

    function refresh() {
      var visible = 0;
      rows.forEach(function (row) {
        var show = rowMatches(row);
        row.hidden = !show;
        if (show) visible += 1;
      });
      if (counter) counter.textContent = visible + ' of ' + rows.length + ' entries';
      if (selectAll) {
        var visibleChecks = rowSelects.filter(function (box) { return !box.closest('tr').hidden; });
        var checked = visibleChecks.filter(function (box) { return box.checked; });
        selectAll.checked = visibleChecks.length > 0 && checked.length === visibleChecks.length;
        selectAll.indeterminate = checked.length > 0 && checked.length < visibleChecks.length;
      }
    }

    if (search) search.addEventListener('input', refresh);
    filters.forEach(function (filter) { filter.addEventListener('change', refresh); });

    rowSelects.forEach(function (box) {
      box.addEventListener('change', function () {
        var row = box.closest('tr');
        if (row) row.setAttribute('aria-selected', box.checked ? 'true' : 'false');
        refresh();
      });
    });
    if (selectAll) {
      selectAll.addEventListener('change', function () {
        rowSelects.forEach(function (box) {
          if (!box.closest('tr').hidden) {
            box.checked = selectAll.checked;
            box.closest('tr').setAttribute('aria-selected', selectAll.checked ? 'true' : 'false');
          }
        });
        refresh();
      });
    }

    table.querySelectorAll('[data-sort-key]').forEach(function (button) {
      button.addEventListener('click', function () {
        var key = button.getAttribute('data-sort-key');
        var direction = button.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
        table.querySelectorAll('[data-sort-key]').forEach(function (other) { other.removeAttribute('aria-sort'); });
        button.setAttribute('aria-sort', direction);
        rows.sort(function (a, b) {
          var av = normalizeCellText(a.getAttribute('data-' + key) || a.textContent);
          var bv = normalizeCellText(b.getAttribute('data-' + key) || b.textContent);
          return direction === 'ascending' ? av.localeCompare(bv) : bv.localeCompare(av);
        });
        rows.forEach(function (row) { tbody.appendChild(row); });
        refresh();
      });
    });

    panel.dataset.tableReady = 'true';
    refresh();
  }

  function initTables() {
    document.querySelectorAll('[data-vib-table-panel]').forEach(initTablePanel);
  }


  function logText(row) {
    return String(row ? row.textContent : '').replace(/\s+/g, ' ').trim().toLowerCase();
  }

  function initLogModal(modal) {
    if (!modal || modal.dataset.logReady === 'true') return;
    var id = modal.id || modal.getAttribute('data-log-id') || 'deployment-log-modal';
    var rows = Array.prototype.slice.call(modal.querySelectorAll('.vib-log-row'));
    var viewport = modal.querySelector('.vib-log-viewport');
    var search = modal.querySelector('[data-log-search]');
    var filter = modal.querySelector('[data-log-filter]');
    var count = modal.querySelector('[data-log-count]');
    var pin = modal.querySelector('[data-log-pin]');
    var copy = modal.querySelector('[data-log-copy]');
    var closers = Array.prototype.slice.call(modal.querySelectorAll('[data-log-close]'));

    function updateVisibleRows() {
      var query = search ? logText(search) : '';
      var level = filter ? String(filter.value || '').toLowerCase() : '';
      var visible = 0;
      rows.forEach(function (row) {
        var matchText = !query || logText(row).indexOf(query) !== -1;
        var matchLevel = !level || String(row.getAttribute('data-level') || '').toLowerCase() === level;
        var show = matchText && matchLevel;
        row.hidden = !show;
        if (show) visible += 1;
      });
      if (count) count.textContent = visible + ' / ' + rows.length + ' lines';
      if (pin && pin.checked && viewport) viewport.scrollTop = viewport.scrollHeight;
    }

    function closeModal() {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
    }

    function copyLogs() {
      var text = rows.map(function (row) { return row.textContent.replace(/\s+/g, ' ').trim(); }).join('\n');
      var original = copy ? copy.textContent : '';
      function done() {
        if (!copy) return;
        copy.textContent = 'Copied';
        window.setTimeout(function () { copy.textContent = original || 'Copy Logs'; }, 1000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', 'readonly');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        try { document.execCommand('copy'); } catch (err) {}
        area.remove();
        done();
      }
    }

    if (search) search.addEventListener('input', updateVisibleRows);
    if (filter) filter.addEventListener('change', updateVisibleRows);
    if (pin) pin.addEventListener('change', updateVisibleRows);
    if (copy) copy.addEventListener('click', copyLogs);
    closers.forEach(function (button) { button.addEventListener('click', closeModal); });
    document.querySelectorAll('[data-log-open="' + id + '"]').forEach(function (button) {
      button.addEventListener('click', function () {
        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        updateVisibleRows();
      });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !modal.hidden) closeModal();
    });
    modal.dataset.logReady = 'true';
    updateVisibleRows();
  }

  function initLogModals() {
    document.querySelectorAll('[data-vib-log-modal]').forEach(initLogModal);
  }

  function initMonitoringClock() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-monitoring-clock]'));
    if (!nodes.length) return;
    function pad(value) { return String(value).padStart(2, '0'); }
    function tick() {
      var now = new Date();
      var value = pad(now.getUTCHours()) + ':' + pad(now.getUTCMinutes()) + ':' + pad(now.getUTCSeconds());
      nodes.forEach(function (node) { node.textContent = value; });
    }
    tick();
    window.setInterval(tick, 1000);
  }




  function initUploadInteractions() {
    document.querySelectorAll('[data-upload-zone]').forEach(function (zone) {
      if (zone.dataset.uploadReady === 'true') return;
      var input = zone.querySelector('input[type="file"]');
      function dragOn(event) {
        event.preventDefault();
        zone.classList.add('is-dragover');
      }
      function dragOff(event) {
        event.preventDefault();
        zone.classList.remove('is-dragover');
      }
      zone.addEventListener('dragenter', dragOn);
      zone.addEventListener('dragover', dragOn);
      zone.addEventListener('dragleave', dragOff);
      zone.addEventListener('drop', dragOff);
      zone.addEventListener('click', function (event) {
        if (event.target && event.target.closest('a,button')) return;
        if (input) input.click();
      });
      zone.addEventListener('keydown', function (event) {
        if ((event.key === 'Enter' || event.key === ' ') && input) {
          event.preventDefault();
          input.click();
        }
      });
      zone.dataset.uploadReady = 'true';
    });
  }

  function initDocsInteractions() {
    var search = document.querySelector('[data-doc-search]');
    var docNav = document.querySelector('[data-doc-nav]');
    var navLinks = docNav ? Array.prototype.slice.call(docNav.querySelectorAll('.vib-doc-nav-link')) : [];

    function normalize(value) { return String(value || '').trim().toLowerCase(); }
    function filterDocsNav() {
      if (!search || !navLinks.length) return;
      var query = normalize(search.value);
      navLinks.forEach(function (link) {
        link.hidden = !!query && normalize(link.textContent).indexOf(query) === -1;
      });
    }

    if (search) {
      search.addEventListener('input', filterDocsNav);
      document.addEventListener('keydown', function (event) {
        var key = String(event.key || '').toLowerCase();
        if ((event.ctrlKey || event.metaKey) && key === 'k') {
          event.preventDefault();
          search.focus();
          search.select();
        }
      });
      filterDocsNav();
    }

    document.querySelectorAll('[data-doc-code-tabs]').forEach(function (tabs) {
      if (tabs.dataset.docsTabsReady === 'true') return;
      var buttons = Array.prototype.slice.call(tabs.querySelectorAll('[data-code-tab]'));
      var panels = Array.prototype.slice.call(tabs.querySelectorAll('[data-code-panel]'));
      var copy = tabs.querySelector('[data-code-copy]');

      function setActive(name) {
        buttons.forEach(function (button) {
          var active = button.getAttribute('data-code-tab') === name;
          button.classList.toggle('active', active);
          button.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        panels.forEach(function (panel) {
          panel.hidden = panel.getAttribute('data-code-panel') !== name;
        });
      }

      function activeCodeText() {
        var active = panels.find(function (panel) { return !panel.hidden; }) || panels[0];
        return active ? active.textContent.trim() : '';
      }

      function copyCode() {
        if (!copy) return;
        var original = copy.textContent;
        var text = activeCodeText();
        function done() {
          copy.textContent = 'Copied';
          window.setTimeout(function () { copy.textContent = original || 'Copy Code'; }, 1000);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, done);
        } else {
          var area = document.createElement('textarea');
          area.value = text;
          area.setAttribute('readonly', 'readonly');
          area.style.position = 'fixed';
          area.style.opacity = '0';
          document.body.appendChild(area);
          area.select();
          try { document.execCommand('copy'); } catch (err) {}
          area.remove();
          done();
        }
      }

      buttons.forEach(function (button) {
        button.addEventListener('click', function () { setActive(button.getAttribute('data-code-tab')); });
      });
      if (copy) copy.addEventListener('click', copyCode);
      tabs.dataset.docsTabsReady = 'true';
    });

    document.querySelectorAll('[data-doc-copy-markdown]').forEach(function (button) {
      if (button.dataset.docsCopyReady === 'true') return;
      button.addEventListener('click', function () {
        var original = button.textContent;
        var text = '# VibTools Developer Documentation\n\nCompact docs layout with API playground, method badges, tabbed code samples and quicksearch.';
        function done() {
          button.textContent = 'Copied';
          window.setTimeout(function () { button.textContent = original || 'Copy Markdown'; }, 1000);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done);
        else done();
      });
      button.dataset.docsCopyReady = 'true';
    });
  }

  function init() {
    setVersionBadges();
    var currentFile = normalizePath(window.location.pathname);
    var mainNav = document.querySelector('.vib-sidebar nav[aria-label="Sandbox pages"]');
    groupMainSidebar(mainNav);
    document.querySelectorAll('.vib-sidebar-link').forEach(function (link) { prepareLink(link, currentFile); });
    ensureFooter();
    initTables();
    initLogModals();
    initMonitoringClock();
    initDocsInteractions();
    initUploadInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
