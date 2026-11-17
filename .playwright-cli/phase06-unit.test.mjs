import test from 'node:test';
import assert from 'node:assert/strict';
import '../framework/js/tailix.min.js';

const Tailix = globalThis.Tailix;
const { escapeHtml, createEventBus, validateValue, filterAndSortRows } = Tailix._internals;

test('Tailix exports expected API surface and version', () => {
  assert.equal(Tailix.version, 'v2.2.0');
  assert.equal(typeof Tailix.toast, 'function');
  assert.equal(typeof Tailix.modal, 'function');
  assert.equal(typeof Tailix.Form, 'function');
  assert.equal(typeof Tailix.Table, 'function');
  assert.equal(typeof Tailix.bus.on, 'function');
});

test('escapeHtml escapes HTML special characters safely', () => {
  assert.equal(
    escapeHtml('<script>alert("xss" & \'1\')</script>'),
    '&lt;script&gt;alert(&quot;xss&quot; &amp; &#39;1&#39;)&lt;/script&gt;'
  );
  assert.equal(escapeHtml(null), '');
});

test('createEventBus isolates listener errors and supports once/off', () => {
  const bus = createEventBus();
  const seen = [];
  const origErr = console.error;
  console.error = () => {};
  try {
    bus.on('evt', () => { throw new Error('boom'); });
    const unsub = bus.on('evt', (p) => seen.push('on:' + p));
    bus.once('evt', (p) => seen.push('once:' + p));

    const invoked1 = bus.emit('evt', 1);
    const invoked2 = bus.emit('evt', 2);
    unsub();
    const invoked3 = bus.emit('evt', 3);

    assert.equal(invoked1, 2);
    assert.equal(invoked2, 1);
    assert.equal(invoked3, 0);
    assert.deepEqual(seen, ['on:1', 'once:1', 'on:2']);
  } finally {
    console.error = origErr;
  }
});

test('validateValue validates required, email, url, number, length, pattern, custom', () => {
  assert.equal(validateValue('', { required: true }), 'This field is required.');
  assert.equal(validateValue('bad-email', { type: 'email' }), 'Enter a valid email address.');
  assert.equal(validateValue('ops@tailix.dev', { type: 'email' }), '');
  assert.equal(validateValue('ftp://bad', { type: 'url' }), 'Enter a valid http/https URL.');
  assert.equal(validateValue('https://tailix.dev', { type: 'url' }), '');
  assert.equal(validateValue('abc', { type: 'number' }), 'Enter a valid number.');
  assert.equal(validateValue('42.5', { type: 'number' }), '');
  assert.equal(validateValue('ab', { minLength: 3 }), 'Must be at least 3 characters.');
  assert.equal(validateValue('abcdef', { maxLength: 4 }), 'Must be at most 4 characters.');
  assert.equal(validateValue('TX-12', { pattern: '^TX-\\d+$' }), '');
  assert.equal(validateValue('ZZ-12', { pattern: '^TX-\\d+$' }), 'Invalid format.');
  assert.equal(
    validateValue('pass1', { custom: (v, p) => (v !== p.confirm ? 'Mismatch' : '') }, { confirm: 'pass2' }),
    'Mismatch'
  );
});

test('filterAndSortRows filters by query/column and sorts numerically and naturally', () => {
  const rows = [
    ['Alpha', 'active', '120ms'],
    ['Beta', 'paused', '25ms'],
    ['Gamma', 'active', '9ms']
  ];
  assert.deepEqual(
    filterAndSortRows(rows, { filterCol: 1, filterVal: 'active', sortCol: 2, sortDir: 'asc' }),
    [
      ['Gamma', 'active', '9ms'],
      ['Alpha', 'active', '120ms']
    ]
  );
  assert.deepEqual(
    filterAndSortRows(rows, { query: 'beta' }),
    [['Beta', 'paused', '25ms']]
  );
});
