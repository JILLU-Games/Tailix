window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };

window.VibForms.register({
  "id": "settings-header",
  "title": "Settings Header",
  "description": "Header with search",
  "states": ["Settings State"],
  "html": `<div class="vib-settings-header vib-page-header">
    <div>
      <p class="vib-kicker">Settings Demo</p>
      <h1 class="vib-h1 mt-2">Account settings.</h1>
      <p class="vib-body mt-2">Manage workspace preferences, interface rules, security controls and destructive settings inside a compact top-aligned dashboard layout.</p>
    </div>
    <label class="vib-settings-search" aria-label="Search settings">
      <svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4"/><path d="m10.2 10.2 2.8 2.8"/></svg>
      <input id="settings-search-input" class="vib-input" type="search" placeholder="Search settings...">
    </label>
  </div>`
});

window.VibForms.register({
  "id": "settings-plan",
  "title": "Settings Plan Overview",
  "description": "Plan status card",
  "states": ["Settings State"],
  "html": `<div class="vib-settings-plan vib-card-subtle" role="status" aria-label="Workspace plan overview">
    <div>
      <h2 class="vib-settings-title">Your workspace is currently on the compact sandbox plan</h2>
      <p class="vib-settings-desc">Plan cards use the same restrained surface, border, and action-control system as the rest of the Sandbox UI.</p>
    </div>
    <div class="vib-settings-plan-actions">
      <button type="button" class="vib-button vib-button-secondary" data-settings-action="plan-chat">Chat to us</button>
      <button type="button" class="vib-button vib-button-primary" data-settings-action="plan-upgrade">Upgrade</button>
    </div>
  </div>`
});

window.VibForms.register({
  "id": "settings-sidebar",
  "title": "Settings Sidebar Navigation",
  "description": "Sidebar menu",
  "states": ["Settings State"],
  "html": `<aside class="vib-settings-sidebar" aria-label="Settings sections">
      <nav class="vib-settings-nav">
        <a class="vib-settings-nav-item active" href="#general" aria-current="page">General</a>
        <a class="vib-settings-nav-item" href="#appearance">Appearance &amp; Theme</a>
        <a class="vib-settings-nav-item" href="#security">Security &amp; Sessions</a>
        <a class="vib-settings-nav-item" href="#integrations">Integrations</a>
        <a class="vib-settings-nav-item" href="#api-keys">API Keys</a>
        <a class="vib-settings-nav-item" href="#webhooks">Webhooks</a>
        <a class="vib-settings-nav-item vib-settings-nav-danger" href="#danger-zone">Danger Zone</a>
      </nav>
    </aside>`
});

window.VibForms.register({
  "id": "settings-general",
  "title": "Settings General Section",
  "description": "General preferences",
  "states": ["Settings State"],
  "html": `<section id="general" class="vib-settings-section" aria-labelledby="general-heading">
        <div class="vib-settings-section-heading">
          <h2 id="general-heading" class="vib-h2">General preferences</h2>
          <p class="vib-settings-desc">Linear-style row controls for default workspace behavior.</p>
        </div>
        <div class="vib-settings-card vib-card-subtle">
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Default home view</h3>
              <p class="vib-settings-desc">Choose the page opened when the workspace starts.</p>
            </div>
            <select id="setting-default-home" class="vib-select vib-settings-control" aria-label="Default home view">
              <option>Dashboard</option>
              <option>Projects</option>
              <option>Monitoring</option>
            </select>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Use pointer cursors</h3>
              <p class="vib-settings-desc">Change the cursor to a pointer when hovering interactive elements.</p>
            </div>
            <label class="vib-switch"><input id="setting-pointer-cursors" type="checkbox" checked><span class="vib-slider"></span><span class="sr-only">Use pointer cursors</span></label>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Display compact names</h3>
              <p class="vib-settings-desc">Use short labels in tables, sidebars and dashboard cards.</p>
            </div>
            <label class="vib-switch"><input id="setting-compact-names" type="checkbox" checked><span class="vib-slider"></span><span class="sr-only">Display compact names</span></label>
          </div>
        </div>
      </section>`
});

window.VibForms.register({
  "id": "settings-appearance",
  "title": "Settings Appearance Section",
  "description": "Theme and size",
  "states": ["Settings State"],
  "html": `<section id="appearance" class="vib-settings-section" aria-labelledby="appearance-heading">
        <div class="vib-settings-section-heading">
          <h2 id="appearance-heading" class="vib-h2">Appearance &amp; theme</h2>
          <p class="vib-settings-desc">Theme and display settings use compact Vercel/Linear inspired rows.</p>
        </div>
        <div class="vib-settings-card vib-card-subtle">
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Interface theme</h3>
              <p class="vib-settings-desc">Select or customize the interface color scheme.</p>
            </div>
            <select id="setting-interface-theme" class="vib-select vib-settings-control" aria-label="Interface theme">
              <option value="dark">Dark (Default)</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Font size</h3>
              <p class="vib-settings-desc">Adjust the size of text across the app while preserving compact density.</p>
            </div>
            <select id="setting-font-size" class="vib-select vib-settings-control" aria-label="Font size">
              <option>Default</option>
              <option>Compact</option>
              <option>Readable</option>
            </select>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Sidebar badge style</h3>
              <p class="vib-settings-desc">Keep workspace badges subtle in the app sidebar.</p>
            </div>
            <button type="button" class="vib-button vib-button-secondary" data-settings-action="customize-badge">Customize</button>
          </div>
        </div>
      </section>`
});

window.VibForms.register({
  "id": "settings-security",
  "title": "Settings Security Section",
  "description": "Security toggles",
  "states": ["Settings State"],
  "html": `<section id="security" class="vib-settings-section" aria-labelledby="security-heading">
        <div class="vib-settings-section-heading">
          <h2 id="security-heading" class="vib-h2">Security &amp; Sessions</h2>
          <p class="vib-settings-desc">Two-column field rows for credentials, copy controls and setup state.</p>
        </div>
        <div class="vib-settings-card vib-card-subtle">
          <div class="vib-settings-form-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Sandbox API key</h3>
              <p class="vib-settings-desc">Use copy/regenerate actions without changing production behavior.</p>
            </div>
            <div class="vib-settings-inline-control">
              <input id="sandbox-api-key-input" class="vib-input" value="vib_sk_test_••••••••••••" data-key-value="vib_sk_test_94a8c1f2e0b7" readonly aria-label="Sandbox API key">
              <button type="button" class="vib-button vib-button-secondary" data-settings-action="copy-sandbox-key">Copy</button>
              <button type="button" class="vib-button vib-button-ghost" data-settings-action="regenerate-sandbox-key">Regenerate</button>
            </div>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Two-factor authentication</h3>
              <p class="vib-settings-desc">Require a second factor for workspace administrators.</p>
            </div>
            <div class="vib-row"><span class="vib-badge">Enabled</span><button type="button" class="vib-button vib-button-secondary" data-settings-action="setup-2fa">Setup</button></div>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Admin approval for deploy requests</h3>
              <p class="vib-settings-desc">Require approval before deployment workflows can run.</p>
            </div>
            <label class="vib-switch"><input id="setting-deploy-approval" type="checkbox" checked><span class="vib-slider"></span><span class="sr-only">Require approval for deploy requests</span></label>
          </div>
        </div>
      </section>`
});

window.VibForms.register({
  "id": "settings-integrations",
  "title": "Settings Integrations Section",
  "description": "Connected apps",
  "states": ["Settings State"],
  "html": `<section id="integrations" class="vib-settings-section" aria-labelledby="integrations-heading">
        <div class="vib-settings-section-heading">
          <h2 id="integrations-heading" class="vib-h2">Integrations</h2>
          <p class="vib-settings-desc">Compact integration rows with clear status and action controls.</p>
        </div>
        <div class="vib-settings-card vib-card-subtle">
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">GitHub sync</h3>
              <p class="vib-settings-desc">Connect repositories and synchronize project metadata.</p>
            </div>
            <button type="button" class="vib-button vib-button-secondary" data-settings-action="configure-github">Configure</button>
          </div>
          <div class="vib-settings-row">
            <div class="vib-settings-info">
              <h3 class="vib-settings-title">Email notifications</h3>
              <p class="vib-settings-desc">Send operational summaries and build alerts to maintainers.</p>
            </div>
            <label class="vib-switch"><input id="setting-email-notifications" type="checkbox"><span class="vib-slider"></span><span class="sr-only">Email notifications</span></label>
          </div>
        </div>
      </section>`
});

window.VibForms.register({
  "id": "settings-api-keys",
  "title": "Settings API Keys Section",
  "description": "Token table",
  "states": ["Settings State"],
  "html": `<section id="api-keys" class="vib-settings-section" aria-labelledby="api-keys-heading">
        <div class="vib-settings-section-heading">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <h2 id="api-keys-heading" class="vib-h2">API Keys &amp; Tokens</h2>
              <p class="vib-settings-desc">Manage API keys and access tokens for your workspace.</p>
            </div>
            <button type="button" class="vib-button vib-button-primary" data-settings-action="generate-key">Generate New API Key</button>
          </div>
        </div>

        <div class="vib-card-subtle overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm whitespace-nowrap">
              <thead>
                <tr class="border-b border-vib-border text-vib-muted">
                  <th class="px-4 py-3 font-medium">Key Name</th>
                  <th class="px-4 py-3 font-medium">Token</th>
                  <th class="px-4 py-3 font-medium">Status</th>
                  <th class="px-4 py-3 font-medium">Created / Last Used</th>
                  <th class="px-4 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody id="api-keys-tbody" class="divide-y divide-vib-border">
                <tr data-key-row>
                  <td class="px-4 py-4 text-vib-text font-medium">Production Key</td>
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs bg-vib-surface border border-vib-border px-2 py-1 rounded" data-token-display data-masked="vib_live_••••••••1234" data-full="vib_live_9f4a2b8c1234" data-visible="false">vib_live_••••••••1234</span>
                      <button type="button" class="text-vib-muted hover:text-vib-primary transition-colors" aria-label="Toggle visibility" data-settings-action="toggle-key">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="px-4 py-4">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-vib-stateSuccessBg text-vib-stateSuccessText border border-vib-stateSuccessBorder">Active</span>
                  </td>
                  <td class="px-4 py-4">
                    <div class="text-vib-primary">Oct 12, 2023</div>
                    <div class="text-vib-muted text-xs mt-1" data-last-used>Last used: 2 hours ago</div>
                  </td>
                  <td class="px-4 py-4 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <button type="button" class="vib-button vib-button-secondary text-xs px-2 py-1 h-auto" data-settings-action="copy-key">Copy</button>
                      <button type="button" class="vib-button vib-button-ghost text-xs px-2 py-1 h-auto" data-settings-action="rotate-key">Rotate</button>
                      <button type="button" class="text-vib-danger hover:text-vib-stateDangerText transition-colors ml-2" aria-label="Revoke" data-settings-action="revoke-key">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr data-key-row>
                  <td class="px-4 py-4 text-vib-text font-medium">Staging Key</td>
                  <td class="px-4 py-4">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs bg-vib-surface border border-vib-border px-2 py-1 rounded" data-token-display data-masked="vib_test_••••••••9876" data-full="vib_test_3c7e1a0b9876" data-visible="false">vib_test_••••••••9876</span>
                      <button type="button" class="text-vib-muted hover:text-vib-primary transition-colors" aria-label="Toggle visibility" data-settings-action="toggle-key">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="px-4 py-4">
                    <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-vib-surface text-vib-muted border border-vib-border">Inactive</span>
                  </td>
                  <td class="px-4 py-4">
                    <div class="text-vib-primary">Oct 10, 2023</div>
                    <div class="text-vib-muted text-xs mt-1" data-last-used>Last used: 12 days ago</div>
                  </td>
                  <td class="px-4 py-4 text-right">
                    <div class="flex items-center justify-end gap-2">
                      <button type="button" class="vib-button vib-button-secondary text-xs px-2 py-1 h-auto" data-settings-action="copy-key">Copy</button>
                      <button type="button" class="vib-button vib-button-ghost text-xs px-2 py-1 h-auto" data-settings-action="rotate-key">Rotate</button>
                      <button type="button" class="text-vib-danger hover:text-vib-stateDangerText transition-colors ml-2" aria-label="Revoke" data-settings-action="revoke-key">
                        <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <form id="webhooks-form" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-vib-text mb-1" for="webhook-url-input">Endpoint URL</label>
                <input id="webhook-url-input" type="url" class="vib-input w-full" placeholder="https://api.yourdomain.com/webhooks" required>
              </div>
              <div>
                <label class="block text-sm font-medium text-vib-text mb-1" for="webhook-env-select">Environment</label>
                <select id="webhook-env-select" class="vib-select w-full">
                  <option>Live (Production)</option>
                  <option>Test (Sandbox)</option>
                </select>
              </div>
            </div>
            <div class="flex justify-end pt-2">
              <button type="submit" class="vib-button vib-button-secondary">Add Webhook</button>
            </div>
          </form>

          <div class="mt-6 border-t border-vib-border pt-4">
            <h3 class="text-sm font-medium text-vib-text mb-3">Configured Endpoints</h3>
            <div id="webhooks-list">
              <div class="flex items-center justify-between py-3 border-b border-vib-border last:border-0" data-webhook-row>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-vib-success"></div>
                  <div>
                    <div class="text-sm font-medium text-vib-text">https://app.vibtools.com/api/webhooks/stripe</div>
                    <div class="text-xs text-vib-muted mt-1">Live Environment &bull; Added Oct 1, 2023</div>
                  </div>
                </div>
                <button type="button" class="text-vib-muted hover:text-vib-danger transition-colors" aria-label="Remove webhook" data-settings-action="remove-webhook">
                  <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" stroke-width="var(--icon-stroke)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
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
        <div class="vib-settings-section-heading">
          <h2 id="danger-heading" class="vib-h2">Danger zone</h2>
          <p class="vib-settings-desc">Destructive actions are isolated in a red-tinted confirmation surface.</p>
        </div>
        <div class="vib-settings-danger-card">
          <div class="vib-settings-info">
            <h3 class="vib-settings-title">Reset workspace settings</h3>
            <p class="vib-settings-desc">Restore sandbox settings to the default compact UI contract.</p>
          </div>
          <button type="button" class="vib-button vib-btn-danger" data-settings-action="reset-settings">Reset settings</button>
        </div>
      </section>`
});
