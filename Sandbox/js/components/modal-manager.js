/**
 * VibTools Global Dynamic Modal System (v2.2.0)
 * Consumes the 8-Module Foundation Engine for colors, shadows, radius, and motion.
 */
(function(window) {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  class ModalManager {
    constructor() {
      this.activeModal = null;
      this._lastFocused = null;
      this._onKeyDown = (e) => {
        if (e.key === 'Escape' && this.activeModal) {
          this.close();
        }
      };
    }

    /**
     * Opens a generic modal dialog.
     * @param {Object} options - { title: string, body: string, confirmText: string, cancelText: string, onConfirm: function }
     */
    open(options) {
      if (typeof document === 'undefined' || !document.body) return;
      if (this.activeModal) {
        this.close();
      }

      this._lastFocused = document.activeElement;

      const safeOptions = (options && typeof options === 'object') ? options : {};
      const opts = Object.assign({
        title: 'Dialog',
        body: '',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        onConfirm: null,
      }, safeOptions);

      // Create backdrop overlay
      const backdrop = document.createElement('div');
      backdrop.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-vib-background bg-opacity-80 opacity-0 transition-opacity duration-vib';
      backdrop.id = 'vib-dynamic-modal';

      // Create modal container
      const modal = document.createElement('div');
      modal.className = 'w-full max-w-md bg-vib-surface rounded-vib-card shadow-none border border-vib-cardBorder transform scale-95 opacity-0 transition-all duration-vib flex flex-col overflow-hidden';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'vib-modal-title');
      
      modal.innerHTML = `
        <div class="px-5 py-4 border-b border-vib-cardBorder flex items-center justify-between">
          <h3 id="vib-modal-title" class="text-vib-base font-medium text-vib-text leading-none">${escapeHtml(opts.title)}</h3>
          <button type="button" class="text-vib-muted hover:text-vib-text transition-colors close-btn" aria-label="Close">
            <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div class="px-5 py-4 text-vib-sm text-vib-muted">
          ${opts.body}
        </div>
        <div class="px-5 py-3 border-t border-vib-cardBorder bg-vib-surfaceSoft flex items-center justify-end gap-3">
          <button type="button" class="px-3 py-1.5 h-[var(--height-button-md)] rounded-vib-control border border-vib-border bg-transparent text-vib-text text-vib-sm font-medium hover:bg-vib-surfaceHover transition-colors close-btn">
            ${escapeHtml(opts.cancelText)}
          </button>
          <button type="button" class="px-3 py-1.5 h-[var(--height-button-md)] rounded-vib-control bg-vib-primary text-white text-vib-sm font-medium hover:opacity-90 transition-opacity confirm-btn">
            ${escapeHtml(opts.confirmText)}
          </button>
        </div>
      `;

      backdrop.appendChild(modal);
      document.body.appendChild(backdrop);
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Event listeners
      const closeBtns = backdrop.querySelectorAll('.close-btn');
      closeBtns.forEach(btn => btn.addEventListener('click', () => this.close()));
      
      const confirmBtn = backdrop.querySelector('.confirm-btn');
      confirmBtn.addEventListener('click', () => {
        let shouldClose = true;
        if (typeof opts.onConfirm === 'function') {
          try {
            const res = opts.onConfirm();
            if (res === false) shouldClose = false;
          } catch (err) {
            console.error('[VibModal] onConfirm error:', err);
            if (window.VibToast && typeof window.VibToast.error === 'function') {
              window.VibToast.error(err && err.message ? err.message : 'Action failed.');
            }
            return;
          }
        }
        if (shouldClose) {
          this.close();
        }
      });

      // Close on backdrop click
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });

      document.addEventListener('keydown', this._onKeyDown);
      this.activeModal = backdrop;

      // Trigger entrance animation
      requestAnimationFrame(() => {
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
        modal.classList.remove('scale-95', 'opacity-0');
        modal.classList.add('scale-100', 'opacity-100');
      });
    }

    close() {
      if (!this.activeModal) return;
      const backdrop = this.activeModal;
      const modal = backdrop.firstElementChild;
      const restoreEl = this._lastFocused;

      document.removeEventListener('keydown', this._onKeyDown);

      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      if (modal) {
        modal.classList.remove('scale-100', 'opacity-100');
        modal.classList.add('scale-95', 'opacity-0');
      }

      setTimeout(() => {
        if (backdrop.parentElement) {
          backdrop.remove();
        }
        if (!this.activeModal && document.body) {
          document.body.style.overflow = '';
        }
        if (restoreEl && document.contains(restoreEl) && typeof restoreEl.focus === 'function') {
          restoreEl.focus();
        }
      }, 300); // match transition duration

      this.activeModal = null;
      this._lastFocused = null;
    }
  }

  // Expose to global scope
  window.VibModal = new ModalManager();

})(window);
