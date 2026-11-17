/* VibTools Official Tailwind CDN config mirror — v2.1.2 single token foundation engine baseline. */
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vib: {
          background: 'var(--bg-app)', deep: 'var(--bg-deep)', footer: 'var(--bg-footer)', surface: 'var(--bg-surface-card)', subtle: 'var(--bg-surface-soft)', field: 'var(--component-input-bg)', hover: 'var(--border-subtle)', fieldHover: 'var(--component-input-hover-bg)', fieldFocus: 'var(--component-input-focus-bg)', surfaceCard: 'var(--bg-surface-primary)', borderSubtle: 'var(--border-subtle)', authPanel: 'var(--bg-surface-soft)', authPanelSoft: 'var(--bg-surface-active)', navActiveBg: 'var(--bg-surface-active)', navActiveBorder: 'var(--border-focus)', navHoverBg: 'var(--bg-surface-hover)',
          border: 'var(--component-input-border)', btnSecondaryBg: 'var(--component-button-secondary-bg)', btnSecondaryBorder: 'var(--component-button-secondary-border)', softBorder: 'var(--border-subtle)', strong: 'var(--border-strong)', cardBorder: 'var(--component-card-border)', innerBorder: 'var(--border-inner)', cardHoverBorder: 'var(--border-strong)', inputFocusBorder: 'var(--border-focus)', text: 'var(--text-primary)', content: 'var(--text-content)', docsContent: 'var(--text-soft)', docTextPrimary: 'var(--text-soft)', docTextMuted: 'var(--text-secondary)', docTextHeading: 'var(--text-soft)', muted: 'var(--text-secondary)', tertiary: 'var(--text-muted)',
          activeBg: 'var(--component-active-bg)', activeBorder: 'var(--component-active-border)', hoverBg: 'var(--component-hover-bg)', badgeBg: 'var(--component-badge-bg)', disabledBg: 'var(--component-disabled-bg)', feedbackBg: 'var(--component-feedback-bg)', tableHeaderBg: 'var(--component-table-header-bg)', tableRowHover: 'var(--component-table-row-hover-bg)', tableToolbarBg: 'var(--component-card-bg)', tableEmptyBg: 'var(--bg-surface-soft)', tableSkeletonBg: 'var(--component-table-skeleton-bg)', stateSuccessBg: 'var(--state-success-bg)', stateSuccessBorder: 'var(--state-success-border)', stateSuccessText: 'var(--state-success-text)', stateWarningBg: 'var(--state-warning-bg)', stateWarningBorder: 'var(--state-warning-border)', stateWarningText: 'var(--state-warning-text)', stateDangerBg: 'var(--state-danger-bg)', stateDangerBorder: 'var(--state-danger-border)', stateDangerText: 'var(--state-danger-text)', skeletonBg: 'var(--component-skeleton-bg)', skeletonPulse: 'var(--component-skeleton-pulse)', logBg: 'var(--log-bg)', logBorder: 'var(--log-border)', logModalSurface: 'var(--log-modal-surface)', logInfoBg: 'var(--log-info-bg)', logInfoText: 'var(--log-info-text)', logDebugBg: 'var(--log-debug-bg)', logDebugText: 'var(--log-debug-text)', logDebugRowBg: 'var(--log-debug-row-bg)', logWarningBg: 'var(--log-warning-bg)', logWarningText: 'var(--log-warning-text)', logWarningRowBg: 'var(--log-warning-row-bg)', logSuccessBg: 'var(--log-success-bg)', logSuccessText: 'var(--log-success-text)', chartCpu: 'var(--chart-cpu)', chartCpuBg: 'var(--chart-cpu-bg)', chartMemory: 'var(--chart-memory)', chartMemoryBg: 'var(--chart-memory-bg)', chartDisk: 'var(--chart-disk)', chartDiskBg: 'var(--chart-disk-bg)', chartNetwork: 'var(--chart-network)', meterTrack: 'var(--component-meter-track)', meterFill: 'var(--component-meter-fill)', docSidebarBg: 'var(--doc-sidebar-bg)', docCodeBg: 'var(--doc-code-bg)', docBorder: 'var(--doc-border)', methodGetBg: 'var(--method-get-bg)', methodGetText: 'var(--method-get-text)', methodPostBg: 'var(--method-post-bg)', methodPostText: 'var(--method-post-text)', methodPutBg: 'var(--method-put-bg)', methodPutText: 'var(--method-put-text)', methodDeleteBg: 'var(--method-delete-bg)', methodDeleteText: 'var(--method-delete-text)', settingsNavBg: 'var(--settings-nav-bg)', settingsDangerBg: 'var(--settings-danger-bg)', settingsDangerBorder: 'var(--settings-danger-border)', settingsActiveBg: 'var(--settings-active-bg)', dangerButtonBg: 'var(--danger-button-bg)', dangerButtonText: 'var(--danger-button-text)', dangerButtonBorder: 'var(--danger-button-border)', dangerButtonHoverBg: 'var(--danger-button-hover-bg)', uploadDropzoneBg: 'var(--upload-dropzone-bg)', uploadDropzoneHoverBg: 'var(--upload-dropzone-hover-bg)', uploadDropzoneBorder: 'var(--upload-dropzone-border)', uploadItemBg: 'var(--upload-item-bg)', uploadProgressTrack: 'var(--upload-progress-track)', uploadProgressFill: 'var(--upload-progress-fill)', filePdfBg: 'var(--file-pdf-bg)', filePdfText: 'var(--file-pdf-text)', filePngBg: 'var(--file-png-bg)', filePngText: 'var(--file-png-text)', fileDocxBg: 'var(--file-docx-bg)', fileDocxText: 'var(--file-docx-text)', fileMp4Bg: 'var(--file-mp4-bg)', fileMp4Text: 'var(--file-mp4-text)',
          primary: 'var(--component-button-primary-bg)', primaryHover: 'var(--component-button-primary-hover-bg)', secondary: 'var(--text-accent)', success: 'var(--status-success)', warning: 'var(--status-warning)', danger: 'var(--status-danger)',
          logoBlue: 'var(--brand-logo-blue)', logoCyan: 'var(--brand-logo-cyan)', logoDark: 'var(--brand-logo-dark)'
        },
        ui: {
          bgApp: 'var(--bg-app)',
          surfaceCard: 'var(--bg-surface-card)',
          surfaceSoft: 'var(--bg-surface-soft)',
          borderSubtle: 'var(--border-subtle)',
          borderMuted: 'var(--border-muted)',
          borderFocus: 'var(--border-focus)',
          textPrimary: 'var(--text-primary)',
          textContent: 'var(--text-content)',
          textMuted: 'var(--text-secondary)',
          textAccent: 'var(--text-accent)',
          statusSuccess: 'var(--status-success)',
          statusDanger: 'var(--status-danger)',
          statusWarning: 'var(--status-warning)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'monospace']
      },
      maxWidth: { vib: '1280px', 'vib-docs': '1280px', 'vib-dashboard': '1280px', 'vib-auth': '740px', 'vib-auth-shell': '880px', 'vib-form': '960px' },
      borderRadius: { 'vib-sm': 'var(--radius-sm)', 'vib-control': 'var(--radius-md)', 'vib-card': 'var(--radius-lg)' },
      boxShadow: { 'vib-focus': 'var(--shadow-focus)' },
      transitionDuration: { vib: 'var(--transition-normal)' }
    }
  }
};
