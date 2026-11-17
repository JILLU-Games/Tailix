/**
 * VibTools Global Toast Notification System (v2.2.0)
 * Consumes the 8-Module Foundation Engine for colors, shadows, and motion.
 */
(function(window) {
  'use strict';

  class ToastManager {
    constructor() {
      this.container = (typeof document !== 'undefined' && document.body) ? this._initContainer() : null;
    }

    _initContainer() {
      if (typeof document === 'undefined' || !document.body) return null;
      let container = document.getElementById('vib-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'vib-toast-container';
        // Fixed bottom right, z-index 50, flex column
        container.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none';
        document.body.appendChild(container);
      }
      this.container = container;
      return container;
    }

    _createToast(message, type = 'info', duration = 3000) {
      const container = this._initContainer();
      if (!container) return;

      const rawType = String(type || 'info').toLowerCase().trim();
      const safeType = (rawType === 'success' || rawType === 'danger' || rawType === 'error' || rawType === 'warning' || rawType === 'info')
        ? rawType
        : 'info';
      const parsedDuration = Number(duration);
      const safeDuration = Number.isFinite(parsedDuration) ? parsedDuration : 3000;

      while (container.children.length >= 5) {
        container.firstElementChild.remove();
      }

      const toast = document.createElement('div');
      
      // Base styles: flex, padding, radius, shadow, border
      toast.className = 'flex items-center gap-3 px-4 py-3 rounded-vib-control border shadow-none pointer-events-auto transform translate-x-full opacity-0 transition-all duration-vib max-w-sm';
      
      // Type-specific colors using foundation tokens
      let iconSvg = '';
      
      switch(safeType) {
        case 'success':
          toast.style.backgroundColor = 'var(--state-success-bg)';
          toast.style.borderColor = 'var(--state-success-border)';
          toast.style.color = 'var(--state-success-text)';
          iconSvg = `<svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>`;
          break;
        case 'danger':
        case 'error':
          toast.style.backgroundColor = 'var(--state-danger-bg)';
          toast.style.borderColor = 'var(--state-danger-border)';
          toast.style.color = 'var(--state-danger-text)';
          iconSvg = `<svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`;
          break;
        case 'warning':
          toast.style.backgroundColor = 'var(--state-warning-bg)';
          toast.style.borderColor = 'var(--state-warning-border)';
          toast.style.color = 'var(--state-warning-text)';
          iconSvg = `<svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`;
          break;
        case 'info':
        default:
          toast.style.backgroundColor = 'var(--state-info-bg)';
          toast.style.borderColor = 'var(--state-info-border)';
          toast.style.color = 'var(--state-info-text)';
          iconSvg = `<svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
          break;
      }

      const iconWrap = document.createElement('div');
      iconWrap.className = 'shrink-0 flex items-center justify-center';
      iconWrap.innerHTML = iconSvg;

      const msgWrap = document.createElement('div');
      msgWrap.className = 'text-vib-sm font-medium leading-tight';
      msgWrap.textContent = message instanceof Error ? message.message : String(message == null ? '' : message);

      const closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'ml-auto shrink-0 opacity-70 hover:opacity-100 transition-opacity';
      closeBtn.setAttribute('aria-label', 'Close');
      closeBtn.innerHTML = '<svg class="w-[var(--icon-sm)] h-[var(--icon-sm)]" stroke-width="var(--icon-stroke)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>';
      closeBtn.addEventListener('click', () => this._removeToast(toast));

      toast.appendChild(iconWrap);
      toast.appendChild(msgWrap);
      toast.appendChild(closeBtn);

      container.appendChild(toast);

      // Trigger entrance animation
      requestAnimationFrame(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
        toast.classList.add('translate-x-0', 'opacity-100');
      });

      // Auto dismiss
      if (safeDuration > 0) {
        setTimeout(() => {
          this._removeToast(toast);
        }, safeDuration);
      }
    }

    _removeToast(toast) {
      if (!toast || !toast.parentElement) return;
      toast.classList.remove('translate-x-0', 'opacity-100');
      toast.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (toast.parentElement) {
          toast.remove();
        }
      }, 300); // Wait for transition
    }

    success(message, duration) { this._createToast(message, 'success', duration); }
    danger(message, duration) { this._createToast(message, 'danger', duration); }
    error(message, duration) { this._createToast(message, 'danger', duration); }
    warning(message, duration) { this._createToast(message, 'warning', duration); }
    info(message, duration) { this._createToast(message, 'info', duration); }
  }

  // Expose to global scope
  window.VibToast = new ToastManager();

})(window);
