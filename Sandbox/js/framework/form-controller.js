/**
 * VibTools Form Controller — v2.2.0 Framework Layer
 *
 * A reusable form validation, error display, and payload serialization helper
 * that integrates with the v2.2.0 design system tokens.
 *
 * TOKEN RULES: ZERO hardcoded hex / pixel / SVG attributes.
 * Focus rings:    var(--vib-input-focus-border)
 * Error colours:  var(--state-danger-*) tokens applied via CSS class injection
 * Success:        var(--state-success-*) tokens
 *
 * ── Usage ─────────────────────────────────────────────────────────────────
 *
 *   var fc = new FormController({
 *     form     : document.getElementById('my-form'),
 *     rules    : {
 *       email   : { required: true, type: 'email' },
 *       name    : { required: true, minLength: 2 },
 *       website : { type: 'url' },
 *       age     : { type: 'number', min: 1, max: 120 }
 *     },
 *     onSubmit : function(payload, fc) { sendToApi(payload); },
 *     eventBus : window.EventBus   // optional
 *   });
 *
 * ── Validation rule properties ────────────────────────────────────────────
 *   required  : boolean
 *   type      : 'email' | 'url' | 'number' | 'text' (default)
 *   minLength : number
 *   maxLength : number
 *   min       : number (for type:'number')
 *   max       : number (for type:'number')
 *   pattern   : RegExp
 *   custom    : function(value, allValues) → string|null  (return error or null)
 *
 * ── EventBus events emitted ───────────────────────────────────────────────
 *   form:valid      — { payload, instance }
 *   form:invalid    — { errors, instance }
 *   form:reset      — { instance }
 *   form:loading    — { loading: bool, instance }
 *
 * ── Button loading state ──────────────────────────────────────────────────
 *   fc.setLoading(true)   — disables the submit button, shows spinner text
 *   fc.setLoading(false)  — restores the submit button
 *
 * ── Error display ─────────────────────────────────────────────────────────
 *   fc.setFieldError('email', 'Invalid email address')
 *   fc.clearFieldError('email')
 *   fc.clearAllErrors()
 *
 * ── Payload ───────────────────────────────────────────────────────────────
 *   fc.serialize()  — returns plain object from all named form fields
 */
(function (window) {
  'use strict';

  /* ── CSS class constants (token-mapped, zero hardcodes) ─────────── */
  var CLS_FIELD_ERROR   = 'vib-field-error';    // adds danger border + bg via CSS
  var CLS_HELPER_ERROR  = 'vib-field-error-msg'; // error message text class
  var CLS_LOADING       = 'vib-btn-loading';     // loading state class on button

  /* ── Validators ─────────────────────────────────────────────────── */
  var EMAIL_RE   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var URL_RE     = /^https?:\/\/.+/i;
  var NUMBER_RE  = /^-?\d+(\.\d+)?$/;

  function validateField(value, rule) {
    var v = String(value == null ? '' : value).trim();

    if (rule.required && v === '') {
      return 'This field is required.';
    }
    if (!rule.required && v === '') return null; // optional, empty = ok

    if (rule.type === 'email' && !EMAIL_RE.test(v)) {
      return 'Please enter a valid email address.';
    }
    if (rule.type === 'url' && !URL_RE.test(v)) {
      return 'Please enter a valid URL (starting with http:// or https://).';
    }
    if (rule.type === 'number') {
      if (!NUMBER_RE.test(v)) return 'Please enter a valid number.';
      var num = parseFloat(v);
      if (rule.min != null && num < rule.min) return 'Minimum value is ' + rule.min + '.';
      if (rule.max != null && num > rule.max) return 'Maximum value is ' + rule.max + '.';
    }
    if (rule.minLength != null && v.length < rule.minLength) {
      return 'Must be at least ' + rule.minLength + ' characters.';
    }
    if (rule.maxLength != null && v.length > rule.maxLength) {
      return 'Must be no more than ' + rule.maxLength + ' characters.';
    }
    if (rule.pattern instanceof RegExp && !rule.pattern.test(v)) {
      return rule.patternMessage || 'Invalid format.';
    }
    return null;
  }

  /* ── FormController ─────────────────────────────────────────────── */

  /**
   * @param {Object} opts
   * @param {HTMLFormElement} opts.form     - The form element to manage.
   * @param {Object}          opts.rules    - Map of field name → validation rule object.
   * @param {function}        [opts.onSubmit] - Called with (payload, instance) when valid.
   * @param {Object}          [opts.eventBus] - EventBus instance.
   * @param {boolean}         [opts.validateOnBlur] - Validate fields on blur (default true).
   * @param {boolean}         [opts.validateOnInput] - Clear error on input (default true).
   */
  function FormController(opts) {
    if (!opts.form) throw new Error('[FormController] opts.form is required.');
    this.form            = opts.form;
    this.rules           = opts.rules || {};
    this.onSubmit        = opts.onSubmit || null;
    this.bus             = opts.eventBus || null;
    this.validateOnBlur  = opts.validateOnBlur  !== false;
    this.validateOnInput = opts.validateOnInput !== false;

    this._submitBtn  = this.form.querySelector('[type="submit"]');
    this._submitText = this._submitBtn ? this._submitBtn.textContent : '';

    this._bindEvents();
  }

  /* ── Public API ─────────────────────────────────────────────────── */

  /** Validate all fields. Returns errors object (empty = valid). */
  FormController.prototype.validate = function () {
    var self    = this;
    var errors  = {};
    var payload = this.serialize();

    Object.keys(this.rules).forEach(function (name) {
      var rule  = self.rules[name];
      var value = payload[name];

      // Custom validator
      if (typeof rule.custom === 'function') {
        var customErr = rule.custom(value, payload);
        if (customErr) { errors[name] = customErr; return; }
      }

      var err = validateField(value, rule);
      if (err) errors[name] = err;
    });

    return errors;
  };

  /** Serialize all named form fields to a plain object. */
  FormController.prototype.serialize = function () {
    var payload = {};
    var data    = new FormData(this.form);
    data.forEach(function (value, key) { payload[key] = value; });
    // Also capture unchecked checkboxes as false
    Array.prototype.forEach.call(
      this.form.querySelectorAll('input[type="checkbox"][name]'),
      function (chk) {
        if (!chk.checked) payload[chk.name] = false;
        else payload[chk.name] = chk.value || true;
      }
    );
    return payload;
  };

  /** Show/hide the submit button loading state. */
  FormController.prototype.setLoading = function (loading) {
    var btn = this._submitBtn;
    if (!btn) return;
    if (loading) {
      btn.disabled     = true;
      btn.textContent  = 'Saving…';
      btn.classList.add(CLS_LOADING);
    } else {
      btn.disabled     = false;
      btn.textContent  = this._submitText;
      btn.classList.remove(CLS_LOADING);
    }
    this._emit('form:loading', { loading: loading, instance: this });
  };

  /** Set a field-level error message and apply danger styling. */
  FormController.prototype.setFieldError = function (name, message) {
    var field = this._fieldEl(name);
    if (!field) return;

    // Mark the input
    field.classList.add(CLS_FIELD_ERROR);
    field.setAttribute('aria-invalid', 'true');

    // Insert or update error message sibling
    var errId  = 'vib-fc-err-' + name;
    var errEl  = document.getElementById(errId);
    if (!errEl) {
      errEl      = document.createElement('p');
      errEl.id   = errId;
      errEl.className = CLS_HELPER_ERROR + ' text-[var(--text-xs)] mt-1';
      errEl.style.color = 'var(--state-danger-text)';
      var parent = field.closest('.vib-field-wrap') || field.parentElement;
      if (parent) parent.appendChild(errEl);
    }
    errEl.textContent = message;
    field.setAttribute('aria-describedby', errId);
  };

  /** Clear a single field's error state. */
  FormController.prototype.clearFieldError = function (name) {
    var field = this._fieldEl(name);
    if (!field) return;
    field.classList.remove(CLS_FIELD_ERROR);
    field.removeAttribute('aria-invalid');
    var errEl = document.getElementById('vib-fc-err-' + name);
    if (errEl) errEl.remove();
    field.removeAttribute('aria-describedby');
  };

  /** Clear all field errors. */
  FormController.prototype.clearAllErrors = function () {
    var self = this;
    Object.keys(this.rules).forEach(function (name) {
      self.clearFieldError(name);
    });
  };

  /** Reset the form to default values and clear all errors. */
  FormController.prototype.reset = function () {
    this.clearAllErrors();
    this.form.reset();
    this.setLoading(false);
    this._emit('form:reset', { instance: this });
  };

  /* ── Event binding ──────────────────────────────────────────────── */

  FormController.prototype._bindEvents = function () {
    var self = this;

    // Submit
    this.form.addEventListener('submit', function (e) {
      e.preventDefault();
      self.clearAllErrors();
      var errors = self.validate();
      var hasErrors = Object.keys(errors).length > 0;

      if (hasErrors) {
        Object.keys(errors).forEach(function (name) {
          self.setFieldError(name, errors[name]);
        });
        // Focus the first errored field
        var firstErr = Object.keys(errors)[0];
        var firstField = self._fieldEl(firstErr);
        if (firstField && firstField.focus) firstField.focus();
        self._emit('form:invalid', { errors: errors, instance: self });
      } else {
        var payload = self.serialize();
        self._emit('form:valid', { payload: payload, instance: self });
        if (self.onSubmit) self.onSubmit(payload, self);
      }
    });

    // Blur validation
    if (this.validateOnBlur) {
      this.form.addEventListener('blur', function (e) {
        var el   = e.target;
        var name = el.name;
        if (!name || !self.rules[name]) return;
        var err = validateField(el.value, self.rules[name]);
        if (err) self.setFieldError(name, err);
        else     self.clearFieldError(name);
      }, true /* capture for blur */);
    }

    // Clear error on input
    if (this.validateOnInput) {
      this.form.addEventListener('input', function (e) {
        var name = e.target.name;
        if (name && self.rules[name]) self.clearFieldError(name);
      });
    }
  };

  /* ── DOM helper ─────────────────────────────────────────────────── */

  FormController.prototype._fieldEl = function (name) {
    return this.form.querySelector('[name="' + name + '"]');
  };

  /* ── EventBus emitter ───────────────────────────────────────────── */

  FormController.prototype._emit = function (channel, payload) {
    if (this.bus && typeof this.bus.emit === 'function') {
      this.bus.emit(channel, payload);
    }
  };

  /* ── Expose ─────────────────────────────────────────────────────── */
  window.FormController = FormController;

})(window);
