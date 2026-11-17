/**
 * VibTools Global Dynamic Modal System (v2.2.0)
 * Consumes the 8-Module Foundation Engine for colors, shadows, radius, and motion.
 */
(function(window) {
  'use strict';

  class ModalManager {
    constructor() {
      this.activeModal = null;
    }

    /**
     * Opens a generic modal dialog.
     * @param {Object} options - { title: string, body: string, confirmText: string, cancelText: string, onConfirm: function }
     */
    open(options) {
      if (this.activeModal) {
        this.close();
      }

      const opts = Object.assign({
        title: 'Dialog',
        body: '',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        onConfirm: null,
      }, options);

      // Create backdrop overlay
      const backdrop = document.createElement('div');
      // Using --vib-background with opacity via inline style to avoid arbitrary Tailwind classes if not present,
      // but standard approach is bg-[var(--vib-background)] bg-opacity-80
      backdrop.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--vib-background)] bg-opacity-80 opacity-0 transition-opacity duration-[var(--transition-normal)]';
      backdrop.id = 'vib-dynamic-modal';

      // Create modal container
      const modal = document.createElement('div');
      modal.className = 'w-full max-w-md bg-[var(--vib-surface)] rounded-[var(--vib-radius-lg)] shadow-[var(--shadow-overlay)] border border-[var(--vib-card-border)] transform scale-95 opacity-0 transition-all duration-[var(--transition-normal)] flex flex-col overflow-hidden';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'vib-modal-title');
      
      modal.innerHTML = `
        <div class="px-5 py-4 border-b border-[var(--vib-card-border)] flex items-center justify-between">
          <h3 id="vib-modal-title" class="text-[var(--text-base)] font-medium text-[var(--vib-text)] leading-none">${opts.title}</h3>
          <button type="button" class="text-[var(--vib-muted)] hover:text-[var(--vib-text)] transition-colors close-btn" aria-label="Close">
            <svg class="w-[var(--icon-md)] h-[var(--icon-md)] stroke-[var(--icon-stroke)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div class="px-5 py-4 text-[var(--text-sm)] text-[var(--vib-muted)]">
          ${opts.body}
        </div>
        <div class="px-5 py-3 border-t border-[var(--vib-card-border)] bg-[var(--vib-surface-soft)] flex items-center justify-end gap-3">
          <button type="button" class="px-3 py-1.5 h-[var(--height-button-md)] rounded-[var(--vib-radius-md)] border border-[var(--vib-border)] bg-transparent text-[var(--vib-text)] text-[var(--text-sm)] font-medium hover:bg-[var(--vib-surface-hover)] transition-colors close-btn">
            ${opts.cancelText}
          </button>
          <button type="button" class="px-3 py-1.5 h-[var(--height-button-md)] rounded-[var(--vib-radius-md)] bg-[var(--vib-primary)] text-white text-[var(--text-sm)] font-medium hover:opacity-90 transition-opacity confirm-btn">
            ${opts.confirmText}
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
        if (opts.onConfirm) {
          opts.onConfirm();
        }
        this.close();
      });

      // Close on backdrop click
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) this.close();
      });

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

      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      modal.classList.remove('scale-100', 'opacity-100');
      modal.classList.add('scale-95', 'opacity-0');

      setTimeout(() => {
        if (backdrop.parentElement) {
          backdrop.remove();
        }
        document.body.style.overflow = '';
      }, 300); // match transition duration

      this.activeModal = null;
    }
  }

  // Expose to global scope
  window.VibModal = new ModalManager();

})(window);
