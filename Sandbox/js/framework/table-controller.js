/**
 * VibTools Table Controller — v2.2.0 Framework Layer
 *
 * A reusable, self-contained engine for rendering dynamic data tables that
 * exactly match the visual standards of tables.html (zebra striping, header
 * typography, action columns, status pills, pagination).
 *
 * TOKEN RULES: ZERO hardcoded hex / pixel / SVG attribute values.
 * All visual tokens come from var(--vib-*) / var(--text-*) / var(--icon-*).
 *
 * ── Usage ────────────────────────────────────────────────────────────────
 *
 *   var tc = new TableController({
 *     container : document.getElementById('my-table-panel'),
 *     columns   : [
 *       { key: 'name',   label: 'Name',   sortable: true, truncate: true },
 *       { key: 'status', label: 'Status', sortable: true, type: 'status' },
 *       { key: 'email',  label: 'Email' },
 *       { key: '_actions', label: 'Actions', type: 'actions' }
 *     ],
 *     data      : [ { name: 'Alice', status: 'active', email: 'a@b.com' }, ... ],
 *     pageSize  : 10,
 *     filters   : [ { key: 'status', label: 'Status', options: ['active','inactive'] } ],
 *     onAction  : function(action, row) { ... }   // called when action menu clicked
 *     eventBus  : window.EventBus                 // optional
 *   });
 *   tc.render();
 *
 * ── Column types ─────────────────────────────────────────────────────────
 *   'text'    (default) — plain text cell
 *   'status'            — renders a styled pill badge
 *   'actions'           — renders a ••• action-menu button; calls onAction(action, row)
 *   'link'              — renders an <a> element; row must have `_href` property
 *
 * ── Status colour map ─────────────────────────────────────────────────────
 *   active / enabled / live / success / open → success tokens
 *   pending / warning / beta               → warning tokens
 *   inactive / disabled / revoked / error  → danger tokens
 *   anything else                          → neutral badge tokens
 *
 * ── EventBus events emitted ──────────────────────────────────────────────
 *   table:action  — { action, row, instance }
 *   table:filter  — { query, filters, instance }
 *   table:page    — { page, instance }
 *   table:sort    — { key, direction, instance }
 *   table:select  — { selected: [row, ...], instance }
 */
(function (window) {
  'use strict';

  /* ── Status token map ───────────────────────────────────────────── */
  var STATUS_MAP = {
    success:  ['active','enabled','live','success','open','approved','running'],
    warning:  ['pending','warning','beta','paused','review'],
    danger:   ['inactive','disabled','revoked','error','failed','suspended','rejected'],
  };

  function statusVariant(value) {
    var v = String(value || '').toLowerCase().trim();
    var variant = 'neutral';
    Object.keys(STATUS_MAP).forEach(function (k) {
      if (STATUS_MAP[k].indexOf(v) !== -1) variant = k;
    });
    return variant;
  }

  var PILL_CLASSES = {
    success: 'inline-flex items-center px-2 py-0.5 rounded-full text-vib-2xs font-medium bg-vib-stateSuccessBg text-vib-stateSuccessText border border-vib-stateSuccessBorder',
    warning: 'inline-flex items-center px-2 py-0.5 rounded-full text-vib-2xs font-medium bg-vib-stateWarningBg text-vib-stateWarningText border border-vib-stateWarningBorder',
    danger:  'inline-flex items-center px-2 py-0.5 rounded-full text-vib-2xs font-medium bg-vib-stateDangerBg text-vib-stateDangerText border border-vib-stateDangerBorder',
    neutral: 'inline-flex items-center px-2 py-0.5 rounded-full text-vib-2xs font-medium bg-vib-badgeBg text-vib-textMuted border border-vib-borderSubtle',
  };

  function pillHtml(value) {
    var variant = statusVariant(value);
    return '<span class="' + PILL_CLASSES[variant] + '">' + esc(value) + '</span>';
  }

  /* ── Escape helper ──────────────────────────────────────────────── */
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Search icon SVG (token-compliant) ───────────────────────────── */
  var SEARCH_ICON = [
    '<svg class="vib-table-search-icon" viewBox="0 0 16 16" aria-hidden="true">',
    '<circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)"/>',
    '<path d="m10.2 10.2 3 3" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)" stroke-linecap="round"/>',
    '</svg>'
  ].join('');

  var SORT_ICON_HTML = '<span class="vib-sort-icon" aria-hidden="true">↕</span>';
  var MENU_ICON_HTML = '•••';

  /* ── TableController ────────────────────────────────────────────── */

  /**
   * @param {Object} opts
   * @param {HTMLElement}  opts.container  - Wrapper element. Will be populated.
   * @param {Array}        opts.columns    - Column descriptor array.
   * @param {Array}        opts.data       - Initial row data array.
   * @param {number}       [opts.pageSize] - Rows per page (default 10).
   * @param {Array}        [opts.filters]  - Filter descriptor array.
   * @param {string[]}     [opts.actions]  - Action labels for the action menu.
   * @param {function}     [opts.onAction] - Callback: function(actionLabel, rowData).
   * @param {Object}       [opts.eventBus] - EventBus instance.
   * @param {string}       [opts.tableAriaLabel] - aria-label for the <table>.
   * @param {boolean}      [opts.selectable] - Show row checkboxes.
   */
  function TableController(opts) {
    if (!opts || typeof opts !== 'object') {
      throw new Error('TableController requires an options object.');
    }
    if (!opts.container || typeof opts.container.appendChild !== 'function') {
      throw new Error('TableController requires a valid DOM element in { container }.');
    }
    this.container     = opts.container;
    this.columns       = Array.isArray(opts.columns) ? opts.columns : [];
    this._rawData      = Array.isArray(opts.data) ? opts.data.slice() : [];
    this._data         = this._rawData.slice();
    var parsedPageSize = Number(opts.pageSize);
    this.pageSize      = Number.isFinite(parsedPageSize) && parsedPageSize > 0 ? Math.floor(parsedPageSize) : 10;
    this.filterDefs    = Array.isArray(opts.filters) ? opts.filters : [];
    this.actions       = Array.isArray(opts.actions) ? opts.actions : ['View', 'Edit', 'Delete'];
    this.onAction      = typeof opts.onAction === 'function' ? opts.onAction : null;
    this.bus           = opts.eventBus || null;
    this.ariaLabel     = opts.tableAriaLabel || 'Data table';
    this.selectable    = opts.selectable !== false;

    this._page         = 1;
    this._sortKey      = null;
    this._sortDir      = 'ascending';
    this._query        = '';
    this._filterValues = {};
    this._selected     = [];

    // DOM refs (set during render)
    this._tableEl   = null;
    this._tbodyEl   = null;
    this._countEl   = null;
    this._paginEl   = null;

    this.filterDefs.forEach(function (f) {
      this._filterValues[f.key] = '';
    }, this);
  }

  /* ── Public API ─────────────────────────────────────────────────── */

  /** Replace the dataset and re-render. */
  TableController.prototype.setData = function (rows) {
    this._rawData = Array.isArray(rows) ? rows.slice() : [];
    this._page    = 1;
    this._applyFiltersAndSort();
    this._renderBody();
    this._renderPagination();
    this._updateCount();
  };

  /** Re-render the full table panel into this.container. */
  TableController.prototype.render = function () {
    if (!this.container) return;
    this.container.innerHTML = '';
    this.container.className = 'vib-table-panel';
    this.container.setAttribute('data-vib-table-panel', '');

    this.container.appendChild(this._buildToolbar());
    var wrap = document.createElement('div');
    wrap.className = 'vib-table-wrap';
    this._tableEl  = this._buildTable();
    wrap.appendChild(this._tableEl);
    this.container.appendChild(wrap);

    var footer = this._buildFooter();
    this.container.appendChild(footer);

    this._applyFiltersAndSort();
    this._renderBody();
    this._renderPagination();
    this._updateCount();
  };

  /* ── Internal builders ──────────────────────────────────────────── */

  TableController.prototype._buildToolbar = function () {
    var self     = this;
    var toolbar  = document.createElement('div');
    toolbar.className = 'vib-table-toolbar';
    toolbar.setAttribute('aria-label', this.ariaLabel + ' controls');

    var left = document.createElement('div');
    left.className = 'vib-table-controls-left';

    // Search input
    var searchLabel = document.createElement('label');
    searchLabel.className = 'vib-table-search';
    searchLabel.innerHTML  = '<span class="sr-only">Search records</span>' + SEARCH_ICON;
    var searchInput = document.createElement('input');
    searchInput.className   = 'vib-input';
    searchInput.type        = 'search';
    searchInput.placeholder = 'Search…';
    searchInput.setAttribute('aria-label', 'Search ' + this.ariaLabel);
    searchInput.addEventListener('input', function () {
      self._query = searchInput.value;
      self._page  = 1;
      self._applyFiltersAndSort();
      self._renderBody();
      self._renderPagination();
      self._updateCount();
      self._emit('table:filter', { query: self._query, filters: self._filterValues, instance: self });
    });
    searchLabel.appendChild(searchInput);
    left.appendChild(searchLabel);

    // Filter dropdowns
    this.filterDefs.forEach(function (fDef) {
      var sel = document.createElement('select');
      sel.className = 'vib-select vib-table-filter';
      sel.setAttribute('aria-label', 'Filter by ' + fDef.label);
      var defaultOpt = document.createElement('option');
      defaultOpt.value = '';
      defaultOpt.textContent = fDef.label + ': All';
      sel.appendChild(defaultOpt);
      (fDef.options || []).forEach(function (opt) {
        var o = document.createElement('option');
        o.value = String(opt).toLowerCase();
        o.textContent = opt;
        sel.appendChild(o);
      });
      sel.addEventListener('change', function () {
        self._filterValues[fDef.key] = sel.value;
        self._page = 1;
        self._applyFiltersAndSort();
        self._renderBody();
        self._renderPagination();
        self._updateCount();
        self._emit('table:filter', { query: self._query, filters: self._filterValues, instance: self });
      });
      left.appendChild(sel);
    });

    toolbar.appendChild(left);
    return toolbar;
  };

  TableController.prototype._buildTable = function () {
    var self  = this;
    var table = document.createElement('table');
    table.className = 'vib-table';
    table.setAttribute('aria-label', this.ariaLabel);

    // THEAD
    var thead = document.createElement('thead');
    var hRow  = document.createElement('tr');

    if (this.selectable) {
      var thSel = document.createElement('th');
      thSel.scope     = 'col';
      thSel.className = 'vib-table-select-col text-vib-2xs uppercase text-vib-muted font-medium';
      var chkAll = document.createElement('input');
      chkAll.type      = 'checkbox';
      chkAll.className = 'vib-table-checkbox';
      chkAll.setAttribute('aria-label', 'Select all rows');
      chkAll.addEventListener('change', function () {
        self._selectAll(chkAll.checked);
        self._emit('table:select', { selected: self._selected.slice(), instance: self });
      });
      this._chkAll = chkAll;
      thSel.appendChild(chkAll);
      hRow.appendChild(thSel);
    }

    this.columns.forEach(function (col) {
      var th = document.createElement('th');
      th.scope     = 'col';
      th.className = 'text-vib-2xs uppercase text-vib-muted font-medium';
      if (col.type === 'actions') th.className += ' vib-td-action';

      if (col.sortable) {
        var btn = document.createElement('button');
        btn.type      = 'button';
        btn.className = 'vib-th-sort';
        btn.setAttribute('data-sort-key', col.key);
        btn.innerHTML = esc(col.label) + ' ' + SORT_ICON_HTML;
        btn.addEventListener('click', function () {
          if (self._sortKey === col.key) {
            self._sortDir = self._sortDir === 'ascending' ? 'descending' : 'ascending';
          } else {
            self._sortKey = col.key;
            self._sortDir = 'ascending';
          }
          // Update aria-sort on all sort buttons
          table.querySelectorAll('[data-sort-key]').forEach(function (b) {
            b.removeAttribute('aria-sort');
          });
          btn.setAttribute('aria-sort', self._sortDir);
          self._applyFiltersAndSort();
          self._renderBody();
          self._emit('table:sort', { key: self._sortKey, direction: self._sortDir, instance: self });
        });
        th.appendChild(btn);
      } else {
        th.textContent = col.label;
      }
      hRow.appendChild(th);
    });

    thead.appendChild(hRow);
    table.appendChild(thead);

    // TBODY (populated by _renderBody)
    this._tbodyEl = document.createElement('tbody');
    table.appendChild(this._tbodyEl);

    return table;
  };

  TableController.prototype._buildFooter = function () {
    var self   = this;
    var footer = document.createElement('div');
    footer.className = 'vib-table-footer border-t border-vib-borderSubtle mt-2 pt-2';

    this._countEl = document.createElement('span');
    this._countEl.className = 'vib-meta';
    footer.appendChild(this._countEl);

    var controls = document.createElement('div');
    controls.className = 'vib-table-controls flex items-center gap-2';

    // Rows-per-page selector
    var rpSel = document.createElement('select');
    rpSel.className = 'vib-select vib-table-filter h-8 border border-vib-borderSubtle bg-transparent rounded-vib-sm px-2 text-vib-sm';
    rpSel.setAttribute('aria-label', 'Rows per page');
    [10, 25, 50].forEach(function (n) {
      var o = document.createElement('option');
      o.value = n;
      o.textContent = n + ' / page';
      if (n === self.pageSize) o.selected = true;
      rpSel.appendChild(o);
    });
    rpSel.addEventListener('change', function () {
      self.pageSize = parseInt(rpSel.value, 10);
      self._page    = 1;
      self._renderBody();
      self._renderPagination();
      self._updateCount();
    });
    controls.appendChild(rpSel);

    // Pagination nav (populated by _renderPagination)
    this._paginEl = document.createElement('nav');
    this._paginEl.className = 'vib-pagination flex gap-1';
    this._paginEl.setAttribute('aria-label', 'Table pagination');
    controls.appendChild(this._paginEl);

    footer.appendChild(controls);
    return footer;
  };

  /* ── Data management ────────────────────────────────────────────── */

  TableController.prototype._applyFiltersAndSort = function () {
    var self  = this;
    var query = this._query.trim().toLowerCase();

    var filtered = this._rawData.filter(function (row) {
      // Text search across all string values
      if (query) {
        var match = false;
        Object.keys(row).forEach(function (k) {
          if (String(row[k]).toLowerCase().indexOf(query) !== -1) match = true;
        });
        if (!match) return false;
      }
      // Column filters
      var pass = true;
      Object.keys(self._filterValues).forEach(function (k) {
        var v = self._filterValues[k];
        if (v && String(row[k] || '').toLowerCase() !== v) pass = false;
      });
      return pass;
    });

    // Sort
    if (this._sortKey) {
      var key = this._sortKey;
      var dir = this._sortDir;
      filtered.sort(function (a, b) {
        var av = String(a[key] || '').toLowerCase();
        var bv = String(b[key] || '').toLowerCase();
        return dir === 'ascending' ? av.localeCompare(bv) : bv.localeCompare(av);
      });
    }

    this._data = filtered;
  };

  /* ── Body renderer ──────────────────────────────────────────────── */

  TableController.prototype._renderBody = function () {
    var self   = this;
    var tbody  = this._tbodyEl;
    if (!tbody) return;
    tbody.innerHTML = '';

    var start = (this._page - 1) * this.pageSize;
    var page  = this._data.slice(start, start + this.pageSize);

    if (!page.length) {
      var empty = document.createElement('tr');
      var td    = document.createElement('td');
      td.colSpan = this.columns.length + (this.selectable ? 1 : 0);
      td.className = 'py-8 text-center text-vib-sm text-vib-muted';
      td.textContent = 'No results found.';
      empty.appendChild(td);
      tbody.appendChild(empty);
      return;
    }

    page.forEach(function (row, i) {
      var tr = document.createElement('tr');
      tr.className = 'hover:bg-vib-tableRowHover transition-colors' +
        (i % 2 !== 0 ? ' even:bg-vib-tableEmptyBg' : '');

      if (self.selectable) {
        var tdSel = document.createElement('td');
        tdSel.className = 'vib-table-select-col';
        var chk = document.createElement('input');
        chk.type      = 'checkbox';
        chk.className = 'vib-table-checkbox';
        chk.setAttribute('aria-label', 'Select row');
        chk.addEventListener('change', function () {
          if (chk.checked) {
            self._selected.push(row);
          } else {
            var idx = self._selected.indexOf(row);
            if (idx !== -1) self._selected.splice(idx, 1);
          }
          self._syncSelectAll();
          self._emit('table:select', { selected: self._selected.slice(), instance: self });
        });
        tdSel.appendChild(chk);
        tr.appendChild(tdSel);
      }

      self.columns.forEach(function (col) {
        var td = document.createElement('td');

        if (col.type === 'status') {
          td.innerHTML = pillHtml(row[col.key]);
        } else if (col.type === 'actions') {
          td.className = 'vib-td-action';
          var details = document.createElement('details');
          details.className = 'vib-action-menu';
          var summary = document.createElement('summary');
          summary.className = 'vib-icon-button';
          summary.setAttribute('aria-label', 'Open row menu');
          summary.textContent = MENU_ICON_HTML;
          details.appendChild(summary);
          var panel = document.createElement('div');
          panel.className = 'vib-action-menu-panel';
          (col.actions || self.actions).forEach(function (actionLabel) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = actionLabel;
            btn.addEventListener('click', function () {
              details.removeAttribute('open');
              if (self.onAction) {
                try {
                  self.onAction(actionLabel, row);
                } catch (err) {
                  console.error('[TableController] onAction error:', err);
                  if (window.VibToast && typeof window.VibToast.error === 'function') {
                    window.VibToast.error(err && err.message ? err.message : 'Row action failed.');
                  }
                }
              }
              self._emit('table:action', { action: actionLabel, row: row, instance: self });
            });
            panel.appendChild(btn);
          });
          details.appendChild(panel);
          td.appendChild(details);
        } else if (col.type === 'link') {
          td.className = col.truncate ? 'vib-td-truncate' : '';
          var a = document.createElement('a');
          a.href        = row._href || '#';
          a.textContent = row[col.key] == null ? '' : row[col.key];
          td.appendChild(a);
        } else {
          // Default: text
          if (col.truncate) {
            td.className = 'vib-td-truncate';
            td.title     = row[col.key] == null ? '' : String(row[col.key]);
          }
          td.textContent = row[col.key] == null ? '' : row[col.key];
        }

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  };

  /* ── Pagination renderer ────────────────────────────────────────── */

  TableController.prototype._renderPagination = function () {
    var self      = this;
    var paginEl   = this._paginEl;
    if (!paginEl) return;
    paginEl.innerHTML = '';

    var totalPages = Math.max(1, Math.ceil(this._data.length / this.pageSize));

    function pageBtn(label, page, isCurrent, disabled) {
      var btn = document.createElement('button');
      btn.type      = 'button';
      btn.className = disabled
        ? 'vib-page-button h-8 px-2 border border-vib-borderSubtle rounded-vib-sm bg-transparent text-vib-sm opacity-50 cursor-not-allowed'
        : isCurrent
          ? 'vib-page-button h-8 px-3 border border-vib-borderSubtle rounded-vib-sm bg-vib-navActiveBg text-vib-primary text-vib-sm font-medium'
          : 'vib-page-button h-8 px-2 border border-vib-borderSubtle rounded-vib-sm bg-transparent hover:bg-vib-surfaceSoft text-vib-sm transition-colors';
      btn.textContent = label;
      if (isCurrent) btn.setAttribute('aria-current', 'page');
      if (disabled)  btn.disabled = true;
      if (!disabled && !isCurrent) {
        btn.addEventListener('click', function () {
          self._page = page;
          self._renderBody();
          self._renderPagination();
          self._updateCount();
          self._emit('table:page', { page: self._page, instance: self });
        });
      }
      return btn;
    }

    paginEl.appendChild(pageBtn('Prev', this._page - 1, false, this._page <= 1));

    // Show up to 5 page numbers with ellipsis
    var pages = [];
    if (totalPages <= 5) {
      for (var i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages = [1];
      if (this._page > 3) pages.push('…');
      for (var p = Math.max(2, this._page - 1); p <= Math.min(totalPages - 1, this._page + 1); p++) {
        pages.push(p);
      }
      if (this._page < totalPages - 2) pages.push('…');
      pages.push(totalPages);
    }

    pages.forEach(function (p) {
      if (p === '…') {
        var span = document.createElement('span');
        span.className   = 'h-8 flex items-center px-1 text-vib-sm text-vib-muted';
        span.textContent = '…';
        paginEl.appendChild(span);
      } else {
        paginEl.appendChild(pageBtn(p, p, p === self._page, false));
      }
    });

    paginEl.appendChild(pageBtn('Next', this._page + 1, false, this._page >= totalPages));
  };

  /* ── Count ──────────────────────────────────────────────────────── */

  TableController.prototype._updateCount = function () {
    if (!this._countEl) return;
    var start = (this._page - 1) * this.pageSize + 1;
    var end   = Math.min(this._page * this.pageSize, this._data.length);
    var total = this._data.length;
    this._countEl.textContent = total === 0
      ? '0 entries'
      : start + '–' + end + ' of ' + total + ' entries';
  };

  /* ── Selection helpers ──────────────────────────────────────────── */

  TableController.prototype._selectAll = function (checked) {
    this._selected = checked ? this._data.slice() : [];
    if (this._tbodyEl) {
      this._tbodyEl.querySelectorAll('input[type="checkbox"]').forEach(function (chk) {
        chk.checked = checked;
      });
    }
    this._syncSelectAll();
  };

  TableController.prototype._syncSelectAll = function () {
    if (!this._chkAll) return;
    var total   = this._data.length;
    var checked = this._selected.length;
    this._chkAll.checked       = total > 0 && checked === total;
    this._chkAll.indeterminate = checked > 0 && checked < total;
  };

  /* ── EventBus emitter ───────────────────────────────────────────── */

  TableController.prototype._emit = function (channel, payload) {
    if (this.bus && typeof this.bus.emit === 'function') {
      this.bus.emit(channel, payload);
    }
  };

  /* ── Expose ─────────────────────────────────────────────────────── */
  window.TableController = TableController;

})(window);
