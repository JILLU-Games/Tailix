/**
 * VibTools Global Event Bus — v2.2.0 Framework Layer
 *
 * Lightweight pub/sub singleton for application-wide UI state coordination.
 *
 * Supported channels (reserved):
 *   toast:show       — { type: 'success'|'error'|'warning'|'info', message: string, duration?: number }
 *   modal:open       — { title, body, confirmText?, cancelText?, onConfirm? }
 *   modal:close      — (no payload)
 *   sidebar:toggle   — (no payload)
 *   theme:toggle     — (no payload)
 *
 * Usage:
 *   EventBus.on('toast:show', handler);
 *   EventBus.emit('toast:show', { type: 'success', message: 'Saved!' });
 *   EventBus.off('toast:show', handler);
 *
 * Pages may also define their own custom channels freely.
 */
(function (window) {
  'use strict';

  function EventBus() {
    this._listeners = Object.create(null);
  }

  /**
   * Subscribe to a channel.
   * @param {string} channel
   * @param {function} handler
   */
  EventBus.prototype.on = function (channel, handler) {
    if (typeof channel !== 'string' || typeof handler !== 'function') return;
    if (!this._listeners[channel]) this._listeners[channel] = [];
    this._listeners[channel].push(handler);
  };

  /**
   * Unsubscribe a handler from a channel.
   * @param {string} channel
   * @param {function} handler
   */
  EventBus.prototype.off = function (channel, handler) {
    var list = this._listeners[channel];
    if (!list) return;
    this._listeners[channel] = list.filter(function (fn) { return fn !== handler; });
  };

  /**
   * Emit an event on a channel, calling all subscribed handlers.
   * @param {string} channel
   * @param {*} [payload]
   */
  EventBus.prototype.emit = function (channel, payload) {
    var list = this._listeners[channel];
    if (!list || !list.length) return;
    var snapshot = list.slice(); // copy so mid-emission off() is safe
    for (var i = 0; i < snapshot.length; i++) {
      try {
        snapshot[i](payload);
      } catch (err) {
        window.console && console.error('[EventBus] Error in handler for "' + channel + '":', err);
      }
    }
  };

  /**
   * Subscribe once — handler is removed after first invocation.
   * @param {string} channel
   * @param {function} handler
   */
  EventBus.prototype.once = function (channel, handler) {
    var self = this;
    function wrapper(payload) {
      self.off(channel, wrapper);
      handler(payload);
    }
    this.on(channel, wrapper);
  };

  // Expose singleton
  window.EventBus = new EventBus();

})(window);
