/* VibTools Sandbox Tailwind CDN config — v2.2.0 single token foundation engine baseline. */
(function () {
  var vibTailwindConfig = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          vib: {
            background: 'var(--vib-background)', deep: 'var(--vib-deep)', footer: 'var(--vib-footer)', topbarBg: 'var(--vib-topbar-bg)', surface: 'var(--vib-surface)', subtle: 'var(--vib-surface-soft)', surfaceSoft: 'var(--vib-surface-soft)', surfaceHover: 'var(--vib-surface-hover)', field: 'var(--vib-field)', hover: 'var(--vib-hover)', fieldHover: 'var(--vib-field-hover)', fieldFocus: 'var(--vib-field-focus)', surfaceCard: 'var(--vib-surface-card)', borderSubtle: 'var(--vib-border-subtle)', authPanel: 'var(--vib-auth-panel)', authPanelSoft: 'var(--vib-auth-panel-soft)', navActiveBg: 'var(--vib-nav-active-bg)', navActiveBorder: 'var(--vib-nav-active-border)', navHoverBg: 'var(--vib-nav-hover-bg)',
            border: 'var(--vib-border)', btnSecondaryBg: 'var(--vib-btn-secondary-bg)', btnSecondaryBorder: 'var(--vib-btn-secondary-border)', softBorder: 'var(--vib-border-soft)', strong: 'var(--vib-border-strong)', cardBorder: 'var(--vib-card-border)', innerBorder: 'var(--vib-inner-border)', cardHoverBorder: 'var(--vib-card-hover-border)', inputFocusBorder: 'var(--vib-input-focus-border)', text: 'var(--vib-text)', content: 'var(--vib-content)', docsContent: 'var(--vib-doc-content)', docTextPrimary: 'var(--vib-doc-text-primary)', docTextMuted: 'var(--vib-doc-text-muted)', docTextHeading: 'var(--vib-doc-text-heading)', muted: 'var(--vib-muted)', textMuted: 'var(--vib-muted)', tertiary: 'var(--vib-tertiary)',
            activeBg: 'var(--vib-active-bg)', activeBorder: 'var(--vib-active-border)', hoverBg: 'var(--vib-hover-bg)', badgeBg: 'var(--vib-badge-bg)', disabledBg: 'var(--vib-disabled-bg)', feedbackBg: 'var(--vib-feedback-bg)', tableHeaderBg: 'var(--vib-table-header-bg)', tableRowHover: 'var(--vib-table-row-hover)', tableToolbarBg: 'var(--vib-table-toolbar-bg)', tableEmptyBg: 'var(--vib-table-empty-bg)', tableSkeletonBg: 'var(--vib-table-skeleton-bg)', stateSuccessBg: 'var(--vib-state-success-bg)', stateSuccessBorder: 'var(--vib-state-success-border)', stateSuccessText: 'var(--vib-state-success-text)', stateWarningBg: 'var(--vib-state-warning-bg)', stateWarningBorder: 'var(--vib-state-warning-border)', stateWarningText: 'var(--vib-state-warning-text)', stateDangerBg: 'var(--vib-state-danger-bg)', stateDangerBorder: 'var(--vib-state-danger-border)', stateDangerText: 'var(--vib-state-danger-text)', stateInfoBg: 'var(--vib-state-info-bg)', stateInfoBorder: 'var(--vib-state-info-border)', stateInfoText: 'var(--vib-state-info-text)', skeletonBg: 'var(--vib-skeleton-bg)', skeletonPulse: 'var(--vib-skeleton-pulse)', logBg: 'var(--vib-log-bg)', logBorder: 'var(--vib-log-border)', logModalSurface: 'var(--vib-log-modal-surface)', logInfoBg: 'var(--vib-log-info-bg)', logInfoText: 'var(--vib-log-info-text)', logDebugBg: 'var(--vib-log-debug-bg)', logDebugText: 'var(--vib-log-debug-text)', logDebugRowBg: 'var(--vib-log-debug-row-bg)', logWarningBg: 'var(--vib-log-warning-bg)', logWarningText: 'var(--vib-log-warning-text)', logWarningRowBg: 'var(--vib-log-warning-row-bg)', logSuccessBg: 'var(--vib-log-success-bg)', logSuccessText: 'var(--vib-log-success-text)', chartCpu: 'var(--vib-chart-cpu)', chartCpuBg: 'var(--vib-chart-cpu-bg)', chartMemory: 'var(--vib-chart-memory)', chartMemoryBg: 'var(--vib-chart-memory-bg)', chartDisk: 'var(--vib-chart-disk)', chartDiskBg: 'var(--vib-chart-disk-bg)', chartNetwork: 'var(--vib-chart-network)', meterTrack: 'var(--vib-meter-track)', meterFill: 'var(--vib-meter-fill)', docSidebarBg: 'var(--vib-doc-sidebar-bg)', docCodeBg: 'var(--vib-doc-code-bg)', docBorder: 'var(--vib-doc-border)', methodGetBg: 'var(--vib-method-get-bg)', methodGetText: 'var(--vib-method-get-text)', methodPostBg: 'var(--vib-method-post-bg)', methodPostText: 'var(--vib-method-post-text)', methodPutBg: 'var(--vib-method-put-bg)', methodPutText: 'var(--vib-method-put-text)', methodDeleteBg: 'var(--vib-method-delete-bg)', methodDeleteText: 'var(--vib-method-delete-text)', settingsNavBg: 'var(--vib-settings-nav-bg)', settingsDangerBg: 'var(--vib-settings-danger-bg)', settingsDangerBorder: 'var(--vib-settings-danger-border)', settingsActiveBg: 'var(--vib-settings-active-bg)', dangerButtonBg: 'var(--vib-danger-button-bg)', dangerButtonText: 'var(--vib-danger-button-text)', dangerButtonBorder: 'var(--vib-danger-button-border)', dangerButtonHoverBg: 'var(--vib-danger-button-hover-bg)', uploadDropzoneBg: 'var(--vib-upload-dropzone-bg)', uploadDropzoneHoverBg: 'var(--vib-upload-dropzone-hover-bg)', uploadDropzoneBorder: 'var(--vib-upload-dropzone-border)', uploadItemBg: 'var(--vib-upload-item-bg)', uploadProgressTrack: 'var(--vib-upload-progress-track)', uploadProgressFill: 'var(--vib-upload-progress-fill)', filePdfBg: 'var(--vib-file-pdf-bg)', filePdfText: 'var(--vib-file-pdf-text)', filePngBg: 'var(--vib-file-png-bg)', filePngText: 'var(--vib-file-png-text)', fileDocxBg: 'var(--vib-file-docx-bg)', fileDocxText: 'var(--vib-file-docx-text)', fileMp4Bg: 'var(--vib-file-mp4-bg)', fileMp4Text: 'var(--vib-file-mp4-text)',
            primary: 'var(--vib-primary)', primaryHover: 'var(--vib-primary-hover)', secondary: 'var(--vib-secondary)', success: 'var(--vib-success)', warning: 'var(--vib-warning)', danger: 'var(--vib-danger)',
            logoBlue: 'var(--vib-logo-blue)', logoCyan: 'var(--vib-logo-cyan)', logoDark: 'var(--vib-logo-dark)'
          },
          ui: {
            bgApp: 'var(--vib-background)',
            surfaceCard: 'var(--vib-surface)',
            surfaceSoft: 'var(--vib-surface-soft)',
            borderSubtle: 'var(--vib-border-subtle)',
            borderMuted: 'var(--vib-border-muted)',
            borderFocus: 'var(--vib-input-focus-border)',
            textPrimary: 'var(--vib-text)',
            textContent: 'var(--vib-content)',
            textMuted: 'var(--vib-muted)',
            textAccent: 'var(--vib-secondary)',
            statusSuccess: 'var(--vib-success)',
            statusDanger: 'var(--vib-danger)',
            statusWarning: 'var(--vib-warning)'
          }
        },
        fontFamily: {
          sans: ['Segoe UI', 'Segoe UI Web', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
          mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'monospace']
        },
        fontSize: {
          'vib-2xs': 'var(--text-2xs)',
          'vib-xs': 'var(--text-xs)',
          'vib-sm': 'var(--text-sm)',
          'vib-base': 'var(--text-base)',
          'vib-body': 'var(--vib-body)',
          'vib-md': 'var(--text-md)',
          'vib-lg': 'var(--text-lg)',
          'vib-xl': 'var(--text-xl)'
        },
        maxWidth: { vib: 'var(--vib-content-max)', 'vib-docs': 'var(--vib-doc-shell-max)', 'vib-dashboard': 'var(--vib-content-max)', 'vib-auth': 'var(--vib-auth-max)', 'vib-auth-shell': 'var(--vib-auth-shell-max)', 'vib-form': 'var(--vib-form-max)' },
        borderRadius: { 'vib-sm': 'var(--vib-radius-sm)', 'vib-control': 'var(--vib-radius-control)', 'vib-card': 'var(--vib-radius-card)', 'vib-full': 'var(--vib-radius-full)' },
        boxShadow: { 'vib-focus': 'var(--vib-focus)' },
        transitionDuration: { vib: 'var(--vib-transition)' }
      }
    }
  };

  window.tailwind = window.tailwind || {};
  window.tailwind.config = vibTailwindConfig;

  function syncTailwindConfig() {
    if (window.tailwind && window.tailwind.config !== vibTailwindConfig) {
      window.tailwind.config = vibTailwindConfig;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncTailwindConfig, { once: true });
  } else {
    syncTailwindConfig();
  }
  window.addEventListener('load', syncTailwindConfig, { once: true });
})();
