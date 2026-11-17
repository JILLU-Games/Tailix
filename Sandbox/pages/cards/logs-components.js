window.VibLogs = window.VibLogs || { modules: [], register: function (module) { this.modules.push(module); } };

window.VibLogs.register({
  "id": "logs-hero",
  "title": "Logs Page Hero",
  "description": "Header for the logs sandbox",
  "states": ["Default"],
  "html": `<section class="vib-section border-b vib-divider sandbox-grid-bg">
          <div class="vib-container">
            <p class="vib-kicker">Deployment Logs Demo</p>
            <h1 class="vib-h1 mt-2 max-w-[680px]">Real-time deployment and build logs modal.</h1>
            <p class="vib-body mt-2 max-w-[720px]">A compact modal terminal viewer for deployment, migration and server update progress with severity badges, copy support and filter controls.</p>
            <div class="vib-row mt-3">
              <button class="vib-button vib-button-primary" type="button" data-log-open="deployment-log-modal">Open deployment modal</button>
              <span class="vib-badge">391 lines</span>
            </div>
          </div>
        </section>`
});

window.VibLogs.register({
  "id": "logs-demo-canvas",
  "title": "Logs Demo Canvas",
  "description": "Background cards for the modal",
  "states": ["Default"],
  "html": `<div class="vib-log-demo-canvas" aria-hidden="true">
  <div class="vib-log-demo-panel"><p class="vib-kicker">Project</p><h2 class="vib-h2 mt-2">shop-web</h2><p class="vib-card-text mt-2">Production build running with Nixpacks.</p></div>
  <div class="vib-log-demo-panel"><p class="vib-kicker">Status</p><h2 class="vib-h2 mt-2">Deploying</h2><p class="vib-card-text mt-2">Build log stream attached to deployment.</p></div>
  <div class="vib-log-demo-panel"><p class="vib-kicker">Runtime</p><h2 class="vib-h2 mt-2">Docker image</h2><p class="vib-card-text mt-2">Image export and container run command.</p></div>
  <div class="vib-log-demo-panel"><p class="vib-kicker">Diagnostics</p><h2 class="vib-h2 mt-2">1 warning</h2><p class="vib-card-text mt-2">Undefined variable warning captured.</p></div>
</div>`
});

window.VibLogs.register({
  "id": "logs-modal",
  "title": "Logs Terminal Modal",
  "description": "The actual modal UI with terminal logs",
  "states": ["Default"],
  "html": `<div class="vib-modal-backdrop" id="deployment-log-modal" data-vib-log-modal role="dialog" aria-modal="true" aria-labelledby="deployment-log-title" aria-hidden="false">
                <div class="vib-modal-dialog">
                  <header class="vib-log-modal-header">
                    <div class="vib-log-modal-title-row">
                      <h2 class="vib-log-modal-title" id="deployment-log-title">Deployment</h2>
                      <button class="vib-log-close" type="button" data-log-close aria-label="Close deployment logs">×</button>
                    </div>
                    <div class="vib-log-modal-subbar">
                      <div class="vib-log-modal-meta">
                        <span>See all the details of this deployment</span>
                        <span class="vib-badge" data-log-count>28 / 28 lines</span>
                      </div>
                      <div class="vib-log-modal-controls">
                        <button class="vib-button vib-button-secondary" type="button" data-log-copy>Copy Logs</button>
                        <button class="vib-button vib-button-secondary" type="button">AI Diagnostics</button>
                      </div>
                    </div>
                  </header>
                  <div class="vib-log-tools" aria-label="Log stream controls">
                    <label class="vib-log-search">
                      <span class="sr-only">Search logs</span>
                      <svg class="w-[var(--icon-md)] h-[var(--icon-md)]" viewBox="0 0 16 16" aria-hidden="true"><circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)"></circle><path d="m10.2 10.2 3 3" fill="none" stroke="currentColor" stroke-width="var(--icon-stroke)" stroke-linecap="round"></path></svg>
                      <input class="vib-input" type="search" data-log-search placeholder="Search logs...">
                    </label>
                    <select class="vib-select vib-log-filter" data-log-filter aria-label="Filter log severity">
                      <option value="">All levels</option>
                      <option value="info">Info</option>
                      <option value="debug">Debug</option>
                      <option value="warning">Warning</option>
                      <option value="success">Success</option>
                    </select>
                    <label class="vib-log-pin"><input type="checkbox" data-log-pin checked> Pin to bottom</label>
                  </div>
                  <div class="vib-log-viewport bg-vib-surface font-mono" tabindex="0" aria-label="Deployment terminal log stream">
<div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.48 23:13:10</span><span class="vib-log-message">↳ <span class="vib-log-path">/about<span class="vib-log-path">/index.html</span></span> (+15ms)</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.52 23:13:10</span><span class="vib-log-message"><span class="vib-log-path">src/pages/blog/index.astro</span></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.52 23:13:10</span><span class="vib-log-message">↳ <span class="vib-log-path">/blog<span class="vib-log-path">/index.html</span></span> (+10ms)</span></div>
                    <div class="vib-log-row" data-level="debug"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">debug</span><span class="vib-log-time">#12 19.52 23:13:10</span><span class="vib-log-message">⚑ <span class="vib-log-path">/blog/first-post<span class="vib-log-path">/index.html</span></span> (+7ms)</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.53 23:13:10</span><span class="vib-log-message">├ <span class="vib-log-path">/blog/second-post<span class="vib-log-path">/index.html</span></span> (+6ms)</span></div>
                    <div class="vib-log-row" data-level="debug"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">debug</span><span class="vib-log-time">#12 19.54 23:13:10</span><span class="vib-log-message">├ <span class="vib-log-path">/blog/third-post<span class="vib-log-path">/index.html</span></span> (+5ms)</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.54 23:13:10</span><span class="vib-log-message"><span class="vib-log-path">src/pages<span class="vib-log-path">/rss.xml</span>.js</span></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.57 23:13:10</span><span class="vib-log-message">└ <span class="vib-log-path">/rss.xml</span> (+7ms)</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.58 23:13:10</span><span class="vib-log-message"><span class="vib-log-path">src/pages/index.astro</span></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.58 23:13:10</span><span class="vib-log-message">└ <span class="vib-log-path">/index.html</span> (+3ms)</span></div>
                    <div class="vib-log-row" data-level="success"><span class="vib-log-badge border border-vib-stateSuccessBorder text-vib-stateSuccessText">success</span><span class="vib-log-time">#12 19.58 23:13:10</span><span class="vib-log-message">Completed in 117ms.</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.58 23:13:10</span><span class="vib-log-message">[astro/sitemap] sitemap-index.xml created at <span class="vib-log-path">dist</span></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.60 23:13:10</span><span class="vib-log-message">[build] 8 page(s) built in 3.96s</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#12 19.60 23:13:10</span><span class="vib-log-message">[build] Complete!</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#13 DONE 21.0s</span><span class="vib-log-message"></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#14 CACHED</span><span class="vib-log-message">RUN printf &quot;PATH=/app/node_modules/.bin:\$PATH&quot; &gt;&gt; /root/.profile</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#14 DONE 0.3s</span><span class="vib-log-message"></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#15</span><span class="vib-log-message">exporting to image</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#15</span><span class="vib-log-message">exporting layers</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#15</span><span class="vib-log-message">exporting layers 3.2s done</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#15</span><span class="vib-log-message">writing image sha256:1ea571e9be19d265b7c6e5e93a39898fa6542e8d6c432ace7abadd725aedbf35d done</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time">#15</span><span class="vib-log-message">naming to docker.io/library/shop-web-vd7fk6 0.0s done</span></div>
                    <div class="vib-log-row" data-level="warning"><span class="vib-log-badge border border-vib-stateWarningBorder text-vib-stateWarningText">warning</span><span class="vib-log-time">#15 WARNING 0.3s</span><span class="vib-log-message">1 warning found: use docker --debug to expand</span></div>
                    <div class="vib-log-row" data-level="warning"><span class="vib-log-badge border border-vib-stateWarningBorder text-vib-stateWarningText">warning</span><span class="vib-log-time"></span><span class="vib-log-message"><span class="vib-log-warning-text">UndefinedVar</span>: Usage of undefined variable \$NIXPACKS_PATH (line 18)</span></div>
                    <div class="vib-log-row" data-level="success"><span class="vib-log-badge border border-vib-stateSuccessBorder text-vib-stateSuccessText">success</span><span class="vib-log-time"></span><span class="vib-log-message"><span class="vib-log-success-text">Successfully Built!</span></span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time"></span><span class="vib-log-message">Run</span></div>
                    <div class="vib-log-row" data-level="info"><span class="vib-log-badge border border-vib-borderSubtle text-vib-muted">info</span><span class="vib-log-time"></span><span class="vib-log-message"><span class="vib-log-command">docker run --it shop-web-vd7fk6</span></span></div>
                    <div class="vib-log-row" data-level="success"><span class="vib-log-badge border border-vib-stateSuccessBorder text-vib-stateSuccessText">success</span><span class="vib-log-time"></span><span class="vib-log-message"><span class="vib-log-success-text">Nixpacks build completed.</span></span></div>
                  </div>
                  <footer class="vib-log-footer">
                    <span>Real-time log viewer pattern</span>
                    <span>Close with Esc</span>
                  </footer>
                </div>
              </div>`
});
