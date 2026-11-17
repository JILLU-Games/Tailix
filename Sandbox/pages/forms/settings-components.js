window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };

window.VibForms.register({
  "id": "settings-header",
  "title": "Settings Header",
  "description": "Header with search",
  "states": ["Settings State"],
  "html": ``
});

window.VibForms.register({
  "id": "settings-plan",
  "title": "Settings Plan Overview",
  "description": "Plan status card",
  "states": ["Settings State"],
  "html": ``
});

window.VibForms.register({
  "id": "settings-sidebar",
  "title": "Settings Sidebar Navigation",
  "description": "Sidebar menu",
  "states": ["Settings State"],
  "html": ``
});

window.VibForms.register({
  "id": "settings-general",
  "title": "Settings General Section",
  "description": "General preferences",
  "states": ["Settings State"],
  "html": ``
});

window.VibForms.register({
  "id": "settings-appearance",
  "title": "Settings Appearance Section",
  "description": "Theme and size",
  "states": ["Settings State"],
  "html": ``
});

window.VibForms.register({
  "id": "settings-security",
  "title": "Settings Security Section",
  "description": "Security toggles",
  "states": ["Settings State"],
  "html": `<section id="security" class="vib-settings-section" aria-labelledby="security-heading">
        <div class="vib-settings-section-heading">
          <h2 id="security-heading" class="vib-h2">Security &amp; Sessions</h2>
          <p 
class="vib-settings-desc">Two-column field rows for credentials, copy controls and setup state.</p>
          <div 
class="vib-settings-form-row">
            <div class="vib-settings-info">
              <h3 
class="vib-settings-title">Sandbox API key</h3>
              <p class="vib-settings-desc">Use 
copy/regenerate actions without changing production behavior.</p>
            </div>
            <div 
class="vib-settings-inline-control">
              <input class="vib-input" 
value="vib_sk_test_â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢" readonly aria-label="Sandbox API key">
              <button 
type="button" class="vib-button vib-button-secondary">Copy</button>
              <button type="button" 
class="vib-button vib-button-ghost">Regenerate</button>
            </div>
          </div>
       
   <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 
class="vib-settings-title">Two-factor authentication</h3>
              <p class="vib-settings-desc">Require 
a second factor for workspace administrators.</p>
            </div>
            <div 
class="vib-row"><span class="vib-badge">Enabled</span><button type="button" class="vib-button 
vib-button-secondary">Setup</button></div>
          </div>
          <div 
class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 
class="vib-settings-title">Admin approval for deploy requests</h3>
              <p 
class="vib-settings-desc">Require approval before deployment workflows can run.</p>
            </div>
  
          <label class="vib-switch"><input type="checkbox" checked><span class="vib-slider"></span><span 
class="sr-only">Require approval for deploy requests</span></label>
          </div>
        
</div>
      </section>`
});

window.VibForms.register({
  "id": "settings-integrations",
  "title": "Settings Integrations Section",
  "description": "Connected apps",
  "states": ["Settings State"],
  "html": ``
});

window.VibForms.register({
  "id": "settings-api-keys",
  "title": "Settings API Keys Section",
  "description": "Token table",
  "states": ["Settings State"],
  "html": `<section id="api-keys" class="vib-settings-section" aria-labelledby="api-keys-heading">
        <div class="vib-settings-section-heading">
          <div class="flex items-center justify-between">
            <div>
              <h2 id="api-keys-heading" class="vib-h2">API Keys &amp; Tokens</h2>
              <p class="vib-settings-desc">Manage API keys and access tokens for your workspace.</p>
            </div>
            <button type="button" class="vib-button vib-button-primary">Generate New API Key</button>
          </div>
        </div>
        
        <div class="vib-card-subtle overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr class="border-b border-[var(--vib-border)] text-[var(--vib-muted)]">
                  <th class="px-4 py-3 font-medium">Key Name</th>
                  <th class="px-4 py-3 font-medium">Token</th>
                  <th class="px-4 py-3 font-medium">Status</th>
                  <th class="px-4 py-3 font-medium">Created / Last Used</th>
                  <th class="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[var(--vib-border)]">
                <tr>
                  <td class="px-4 py-4 text-[var(--vib-primary)] font-medium">Production Key</td>
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs bg-[var(--vib-surface)] border border-[var(--vib-border)] px-2 py-1 rounded">vib_live_â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢1234</span>
                      <button type="button" class="text-[var(--vib-muted)] hover:text-[var(--vib-primary)] transition-colors" aria-label="Toggle visibility">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)] stroke-[var(--icon-stroke)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="px-4 py-4">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[var(--status-success-bg,rgba(16,185,129,0.1))] text-[var(--status-success,rgb(16,185,129))] border border-[var(--status-success-border,rgba(16,185,129,0.2))]">Active</span>
                  </td>
                  <td class="px-4 py-4">
                    <div class="text-[var(--vib-primary)]">Oct 12, 2023</div>
                    <div class="text-[var(--vib-muted)] text-xs mt-1">Last used: 2 hours ago</div>
                  </td>
                  <td class="px-4 py-4 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <button type="button" class="vib-button vib-button-secondary text-xs px-2 py-1 h-auto" onclick="showToast('Key copied to clipboard')">Copy</button>
                      <button type="button" class="vib-button vib-button-ghost text-xs px-2 py-1 h-auto">Rotate</button>
                      <button type="button" class="text-[var(--status-danger,rgb(239,68,68))] hover:text-red-400 transition-colors ml-2" aria-label="Revoke">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)] stroke-[var(--icon-stroke)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="px-4 py-4 text-[var(--vib-primary)] font-medium">Staging Key</td>
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs bg-[var(--vib-surface)] border border-[var(--vib-border)] px-2 py-1 rounded">vib_test_â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢9876</span>
                      <button type="button" class="text-[var(--vib-muted)] hover:text-[var(--vib-primary)] transition-colors" aria-label="Toggle visibility">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)] stroke-[var(--icon-stroke)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="px-4 py-4">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[var(--vib-surface)] text-[var(--vib-muted)] border border-[var(--vib-border)]">Inactive</span>
                  </td>
                  <td class="px-4 py-4">
                    <div class="text-[var(--vib-primary)]">Oct 10, 2023</div>
                    <div class="text-[var(--vib-muted)] text-xs mt-1">Last used: 12 days ago</div>
                  </td>
                  <td class="px-4 py-4 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <button type="button" class="vib-button vib-button-secondary text-xs px-2 py-1 h-auto" onclick="showToast('Key copied to clipboard')">Copy</button>
                      <button type="button" class="vib-button vib-button-ghost text-xs px-2 py-1 h-auto">Rotate</button>
                      <button type="button" class="text-[var(--status-danger,rgb(239,68,68))] hover:text-red-400 transition-colors ml-2" aria-label="Revoke">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)] stroke-[var(--icon-stroke)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>`
});

window.VibForms.register({
  "id": "settings-webhooks",
  "title": "Settings Webhooks Section",
  "description": "Developer webhooks",
  "states": ["Settings State"],
  "html": `<section id="webhooks" class="vib-settings-section" aria-labelledby="webhooks-heading">
        <div class="vib-settings-section-heading">
          <h2 id="webhooks-heading" class="vib-h2">Developer Webhooks</h2>
          <p class="vib-settings-desc">Configure endpoint URLs to receive realtime event payloads.</p>
        </div>
        <div class="vib-settings-card vib-card-subtle p-5">
          <form class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-[var(--vib-primary)] mb-1">Endpoint URL</label>
                <input type="url" class="vib-input w-full" placeholder="https://api.yourdomain.com/webhooks" required>
              </div>
              <div>
                <label class="block text-sm font-medium text-[var(--vib-primary)] mb-1">Environment</label>
                <select class="vib-select w-full">
                  <option>Live (Production)</option>
                  <option>Test (Sandbox)</option>
                </select>
              </div>
            </div>
            <div class="flex justify-end pt-2">
              <button type="submit" class="vib-button vib-button-secondary">Add Webhook</button>
            </div>
          </form>
          
          <div class="mt-6 border-t border-[var(--vib-border)] pt-4">
            <h3 class="text-sm font-medium text-[var(--vib-primary)] mb-3">Configured Endpoints</h3>
            <div class="flex items-center justify-between py-3 border-b border-[var(--vib-border)] last:border-0">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-[var(--status-success,rgb(16,185,129))]"></div>
                <div>
                  <div class="text-sm font-medium text-[var(--vib-primary)]">https://app.vibtools.com/api/webhooks/stripe</div>
                  <div class="text-xs text-[var(--vib-muted)] mt-1">Live Environment &bull; Added Oct 1, 2023</div>
                </div>
              </div>
              <button type="button" class="text-[var(--vib-muted)] hover:text-[var(--status-danger,rgb(239,68,68))] transition-colors" aria-label="Remove webhook">
                <svg class="w-[var(--icon-md)] h-[var(--icon-md)] stroke-[var(--icon-stroke)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>`
});

window.VibForms.register({
  "id": "settings-danger-zone",
  "title": "Settings Danger Zone",
  "description": "Destructive actions",
  "states": ["Settings State"],
  "html": `<section id="danger-zone" class="vib-settings-section" aria-labelledby="danger-heading">
        <div 
class="vib-settings-section-heading">
          <h2 id="danger-heading" class="vib-h2">Danger 
zone</h2>
          <p class="vib-settings-desc">Destructive actions are isolated in a red-tinted confirmation 
surface.</p>
        </div>
        <div class="vib-settings-danger-card">
          <div 
class="vib-settings-info">
            <h3 class="vib-settings-title">Reset workspace settings</h3>
   
         <p class="vib-settings-desc">Restore sandbox settings to the default compact UI contract.</p>
        
  </div>
          <button type="button" class="vib-button vib-btn-danger">Reset settings</button>
    
    </div>
      </section>`
});
