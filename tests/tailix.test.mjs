import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

function loadTailixBundle(relPath, customGlobals = {}) {
  const fullPath = path.join(ROOT_DIR, relPath);
  const code = fs.readFileSync(fullPath, 'utf8');
  const mod = { exports: {} };
  const context = {
    module: mod,
    exports: mod.exports,
    console: {
      log() {},
      warn() {},
      error() {},
    },
    setTimeout,
    clearTimeout,
    URL,
    Object,
    Array,
    String,
    Number,
    Boolean,
    RegExp,
    Math,
    ...customGlobals,
  };
  vm.runInNewContext(code, context, { filename: relPath });
  return mod.exports;
}

for (const bundlePath of ['framework/js/tailix.js', 'framework/js/tailix.min.js']) {
  const Tailix = loadTailixBundle(bundlePath);
  const internals = Tailix._internals;

  test(`[${bundlePath}] exports version v2.2.0, public API, and _internals`, () => {
    assert.equal(Tailix.version, 'v2.2.0');
    assert.equal(typeof Tailix.bus, 'object');
    assert.equal(typeof Tailix.icon, 'function');
    assert.ok(Array.isArray(Tailix.icons) || typeof Tailix.icons.length === 'number');
    assert.equal(typeof Tailix.toast, 'function');
    assert.equal(typeof Tailix.modal, 'function');
    assert.equal(typeof Tailix.closeModal, 'function');
    assert.equal(typeof Tailix.theme, 'object');
    assert.equal(typeof Tailix.sidebar, 'object');
    assert.equal(typeof Tailix.Form, 'function');
    assert.equal(typeof Tailix.Table, 'function');
    assert.equal(typeof Tailix.init, 'function');
    assert.equal(typeof internals.escapeHtml, 'function');
    assert.equal(typeof internals.createEventBus, 'function');
    assert.equal(typeof internals.validateValue, 'function');
    assert.equal(typeof internals.filterAndSortRows, 'function');
    assert.equal(typeof internals.buildPageWindow, 'function');
  });

  test(`[${bundlePath}] escapeHtml escapes HTML entities and handles non-strings`, () => {
    assert.equal(
      internals.escapeHtml('<script>alert("xss" & \'single\')</script>'),
      '&lt;script&gt;alert(&quot;xss&quot; &amp; &#39;single&#39;)&lt;/script&gt;'
    );
    assert.equal(internals.escapeHtml(null), '');
    assert.equal(internals.escapeHtml(undefined), '');
    assert.equal(internals.escapeHtml(42), '42');
    assert.equal(internals.escapeHtml(false), 'false');
  });

  test(`[${bundlePath}] createEventBus supports on, off, once, emit, and error isolation`, () => {
    const bus = internals.createEventBus();
    const log = [];

    const offFirst = bus.on('ping', (payload) => log.push(`first:${payload.val}`));
    bus.once('ping', (payload) => log.push(`once:${payload.val}`));
    bus.on('ping', () => {
      throw new Error('Intentional handler failure');
    });
    bus.on('ping', (payload) => log.push(`afterError:${payload.val}`));

    const count1 = bus.emit('ping', { val: 1 });
    assert.equal(count1, 3);
    assert.deepEqual(log, ['first:1', 'once:1', 'afterError:1']);

    offFirst();
    const count2 = bus.emit('ping', { val: 2 });
    assert.equal(count2, 1);
    assert.deepEqual(log, ['first:1', 'once:1', 'afterError:1', 'afterError:2']);

    bus.off('ping');
    assert.equal(bus.emit('ping', { val: 2 }), 1);
  });

  test(`[${bundlePath}] validateValue enforces required, email, url, number, length, pattern, and custom rules`, () => {
    // Required
    assert.equal(internals.validateValue('   ', { required: true }), 'This field is required.');
    assert.equal(internals.validateValue('ok', { required: true }), '');
    assert.equal(internals.validateValue('', { required: false, type: 'email' }), '');

    // Email
    assert.equal(internals.validateValue('ops@tailix.dev', { type: 'email' }), '');
    assert.equal(internals.validateValue('invalid-email@', { type: 'email' }), 'Enter a valid email address.');

    // URL (http/https only)
    assert.equal(internals.validateValue('https://tailix.dev/docs', { type: 'url' }), '');
    assert.equal(internals.validateValue('http://localhost:3000/vcon', { type: 'url' }), '');
    assert.equal(internals.validateValue('javascript:alert(1)', { type: 'url' }), 'Enter a valid http/https URL.');
    assert.equal(internals.validateValue('ftp://files.tailix.dev', { type: 'url' }), 'Enter a valid http/https URL.');
    assert.equal(internals.validateValue('not a url', { type: 'url' }), 'Enter a valid URL (https://...).');

    // Number
    assert.equal(internals.validateValue('3.14', { type: 'number' }), '');
    assert.equal(internals.validateValue('abc', { type: 'number' }), 'Enter a valid number.');

    // minLength / maxLength
    assert.equal(internals.validateValue('ab', { minLength: 3 }), 'Must be at least 3 characters.');
    assert.equal(internals.validateValue('abc', { minLength: 3, maxLength: 5 }), '');
    assert.equal(internals.validateValue('abcdef', { maxLength: 5 }), 'Must be at most 5 characters.');

    // Pattern (valid + malformed regex guard BUG-12)
    assert.equal(internals.validateValue('TX-104', { pattern: '^TX-\\d+$' }), '');
    assert.equal(internals.validateValue('TX-ABC', { pattern: '^TX-\\d+$' }), 'Invalid format.');
    assert.equal(
      internals.validateValue('TX-104', { pattern: '[unclosed' }),
      'Invalid validation pattern configuration.'
    );

    // Custom validator + exception safety
    assert.equal(
      internals.validateValue('prod', {
        custom: (v) => (v === 'prod' ? '' : 'Must be prod'),
      }),
      ''
    );
    assert.equal(
      internals.validateValue('dev', {
        custom: (v) => (v === 'prod' ? '' : 'Must be prod'),
      }),
      'Must be prod'
    );
    assert.equal(
      internals.validateValue('dev', {
        custom: () => {
          throw new Error('Validator crashed');
        },
      }),
      'Validator crashed'
    );
  });

  test(`[${bundlePath}] filterAndSortRows filters by query/column and sorts numeric units cleanly (BUG-10)`, () => {
    const rows = [
      ['Node B', '84ms', '$1,200', 'Active'],
      ['Node A', '4ms', '$200', 'Degraded'],
      ['Node C', '146ms', '$45', 'Active'],
      ['Node D', '12ms', '$9,800', 'Active'],
    ];

    // Numeric unit ascending sort on latency column (col 1)
    const sortedLatencyAsc = [...internals.filterAndSortRows(rows, { sortCol: 1, sortDir: 'asc' })];
    assert.deepEqual(
      sortedLatencyAsc.map((r) => r[1]),
      ['4ms', '12ms', '84ms', '146ms']
    );

    // Numeric currency descending sort on col 2
    const sortedPriceDesc = [...internals.filterAndSortRows(rows, { sortCol: 2, sortDir: 'desc' })];
    assert.deepEqual(
      sortedPriceDesc.map((r) => r[2]),
      ['$9,800', '$1,200', '$200', '$45']
    );

    // Global query + column filter + string sort
    const activeFiltered = [
      ...internals.filterAndSortRows(rows, {
        query: 'node',
        filterCol: 3,
        filterVal: 'active',
        sortCol: 0,
        sortDir: 'asc',
      }),
    ];
    assert.deepEqual(
      activeFiltered.map((r) => r[0]),
      ['Node B', 'Node C', 'Node D']
    );
  });

  test(`[${bundlePath}] buildPageWindow generates compact pagination windows with ellipses`, () => {
    assert.deepEqual([...internals.buildPageWindow(1, 5)], [1, 2, 3, 4, 5]);
    assert.deepEqual([...internals.buildPageWindow(1, 10)], [1, 2, 3, 4, '...', 10]);
    assert.deepEqual([...internals.buildPageWindow(5, 10)], [1, '...', 4, 5, 6, '...', 10]);
    assert.deepEqual([...internals.buildPageWindow(9, 10)], [1, '...', 7, 8, 9, 10]);
  });

  test(`[${bundlePath}] icon registry renders 28 deterministic SVGs and guards against XSS/prototype keys`, () => {
    const names = [...Tailix.icons];
    assert.equal(names.length, 28);
    assert.ok(names.includes('search'));
    assert.ok(names.includes('sun'));
    assert.ok(names.includes('moon'));
    assert.ok(names.includes('terminal'));

    const svgLg = Tailix.icon('check', 'lg');
    assert.ok(svgLg.includes('tx-icon tx-icon-lg'));
    assert.ok(svgLg.includes('<path d="M20 6L9 17l-5-5"/>'));

    // Unknown icon or prototype key falls back to circle and never injects unescaped markup
    const fallback = Tailix.icon('__proto__', '<script>');
    assert.ok(fallback.includes('<circle cx="12" cy="12" r="4"/>'));
    assert.ok(fallback.includes('tx-icon tx-icon-md'));
    assert.ok(!fallback.includes('<script>'));
  });

  test(`[${bundlePath}] SSR/headless guards do not throw when document is absent and validate constructor options`, () => {
    assert.equal(Tailix.theme.get(), 'dark');
    assert.equal(Tailix.theme.set('light'), 'dark');
    assert.equal(Tailix.sidebar.setCollapsed(true, '#missing'), false);
    assert.equal(Tailix.sidebar.setMobileOpen(true, '[invalid'), false);
    assert.equal(Tailix.sidebar.toggle('[invalid'), false);

    assert.throws(() => new Tailix.Form(), /Tailix\.Form requires \{ form \} element/);
    assert.throws(() => new Tailix.Table(), /Tailix\.Table requires \{ container \}/);
  });
}
