window.VibDocs = window.VibDocs || { modules: [], register: function (module) { this.modules.push(module); } };

window.VibDocs.register({
  "id": "docs-sidebar",
  "title": "Docs Sidebar",
  "description": "Left navigation",
  "states": ["Default"],
  "html": `<aside class="vib-doc-sidebar" aria-label="Documentation navigation">
    <div class="vib-doc-sidebar-head">
      <span class="vib-avatar">VT</span>
      <div><p class="vib-title-sm">Developer docs</p><p class="vib-meta">API and system guides</p></div>
    </div>
    <nav class="vib-doc-nav" data-doc-nav>
      <div class="vib-doc-nav-group">
        <p class="vib-doc-nav-title">Management</p>
        <a class="vib-doc-nav-link active" href="#overview"><span>Welcome</span></a>
        <a class="vib-doc-nav-link" href="#quickstart"><span>Quickstart</span></a>
        <a class="vib-doc-nav-link" href="#resources"><span>Resources</span></a>
      </div>
      <div class="vib-doc-nav-group">
        <p class="vib-doc-nav-title">API Reference</p>
        <a class="vib-doc-nav-link" href="#api-playground"><span class="vib-method vib-method-get">GET</span><span>/projects</span></a>
        <a class="vib-doc-nav-link" href="#api-playground"><span class="vib-method vib-method-post">POST</span><span>/deployments</span></a>
        <a class="vib-doc-nav-link" href="#responses"><span class="vib-method vib-method-put">PUT</span><span>/configs</span></a>
        <a class="vib-doc-nav-link" href="#responses"><span class="vib-method vib-method-delete">DELETE</span><span>/tokens</span></a>
      </div>
      <div class="vib-doc-nav-group">
        <p class="vib-doc-nav-title">Guides</p>
        <a class="vib-doc-nav-link" href="#tokens"><span>Design tokens</span></a>
        <a class="vib-doc-nav-link" href="#code"><span>Code blocks</span></a>
        <a class="vib-doc-nav-link" href="#responses"><span>Responses</span></a>
      </div>
    </nav>
  </aside>`
});

window.VibDocs.register({
  "id": "docs-overview",
  "title": "Docs Overview",
  "description": "Hero section",
  "states": ["Default"],
  "html": `<section id="overview" class="vib-doc-section">
      <div class="vib-doc-title-row">
        <div>
          <p class="vib-kicker">Developer Documentation</p>
          <h2>Build with the VibTools compact system</h2>
        </div>
        <div class="vib-row">
          <button class="vib-button vib-button-secondary" type="button" data-doc-copy-markdown>Copy Markdown</button>
          <a class="vib-button vib-button-ghost" href="#api-playground">Open API</a>
        </div>
      </div>
      <p>Documentation pages use compact body text, practical spacing, flat bordered cards, readable code blocks and a developer-first API playground. The page keeps the existing sandbox shell while upgrading only the documentation layout surface.</p>
    </section>`
});

window.VibDocs.register({
  "id": "docs-quickstart",
  "title": "Docs Quickstart",
  "description": "Quickstart cards",
  "states": ["Default"],
  "html": `<section id="quickstart" class="vib-doc-section">
      <h2>Quickstart</h2>
      <p>Use these entry points to validate documentation patterns, API route badges and copyable code examples without changing global app behavior.</p>
      <div class="vib-doc-card-grid mt-3">
        <a class="vib-doc-card" href="#api-playground"><span class="vib-method vib-method-post">POST</span><strong>Create deployment</strong><span>Send a compact deployment payload and inspect the generated response.</span></a>
        <a class="vib-doc-card" href="#tokens"><span class="vib-method vib-method-get">GET</span><strong>Read tokens</strong><span>Review the canonical dark-mode documentation color contracts.</span></a>
        <a class="vib-doc-card" href="#code"><span class="vib-method vib-method-put">PUT</span><strong>Copy snippets</strong><span>Switch between cURL, JavaScript, Python and Go examples.</span></a>
      </div>
    </section>`
});

window.VibDocs.register({
  "id": "docs-api-playground",
  "title": "Docs API Playground",
  "description": "API request/response",
  "states": ["Default"],
  "html": `<section id="api-playground" class="vib-doc-section">
      <h2>API playground</h2>
      <p>Compact request and response panels mirror Scalar/Fumadocs-style developer references while staying inside the VibTools 3-tier surface system.</p>
      <div class="vib-doc-api-grid mt-3">
        <div class="vib-api-request vib-card vib-card-pad">
          <div class="vib-api-endpoint-bar"><span class="vib-method vib-method-post">POST</span><code>/v1/deployments</code><button class="vib-button vib-button-primary" type="button">Send</button></div>
          <div class="vib-stack mt-3">
            <label class="vib-field-group"><span class="vib-label">Authorization</span><input class="vib-input" value="Bearer &lt;token&gt;" aria-label="Authorization token"></label>
            <label class="vib-field-group"><span class="vib-label">Environment</span><select class="vib-select" aria-label="Environment"><option>Production</option><option>Preview</option></select></label>
            <label class="vib-field-group"><span class="vib-label">Body</span><textarea class="vib-textarea" aria-label="Request body">{"project":"vibtools","target":"cloudflare"}</textarea></label>
          </div>
        </div>
        <div class="vib-code-tabs" data-doc-code-tabs>
          <div class="vib-code-tabbar" role="tablist" aria-label="Code language examples">
            <button class="active" type="button" role="tab" aria-selected="true" data-code-tab="curl">cURL</button>
            <button type="button" role="tab" aria-selected="false" data-code-tab="javascript">JavaScript</button>
            <button type="button" role="tab" aria-selected="false" data-code-tab="python">Python</button>
            <button type="button" role="tab" aria-selected="false" data-code-tab="go">Go</button>
            <button class="vib-code-copy" type="button" data-code-copy>Copy Code</button>
          </div>
          <pre class="vib-doc-code" data-code-panel="curl"><code>curl -X POST "https://api.vib.tools/v1/deployments" \
  -H "Authorization: Bearer \$VIBTOOLS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"project":"vibtools","target":"cloudflare"}'</code></pre>
          <pre class="vib-doc-code" data-code-panel="javascript" hidden><code>await fetch("https://api.vib.tools/v1/deployments", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${token}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ project: "vibtools", target: "cloudflare" })
});</code></pre>
          <pre class="vib-doc-code" data-code-panel="python" hidden><code>import requests

requests.post(
    "https://api.vib.tools/v1/deployments",
    headers={"Authorization": f"Bearer {token}"},
    json={"project": "vibtools", "target": "cloudflare"},
)</code></pre>
          <pre class="vib-doc-code" data-code-panel="go" hidden><code>req, _ := http.NewRequest("POST", "https://api.vib.tools/v1/deployments", body)
req.Header.Set("Authorization", "Bearer " + token)
req.Header.Set("Content-Type", "application/json")</code></pre>
        </div>
      </div>
    </section>`
});

window.VibDocs.register({
  "id": "docs-tokens",
  "title": "Docs Tokens Table",
  "description": "Design tokens",
  "states": ["Default"],
  "html": `<section id="tokens" class="vib-doc-section">
      <h2>Token table</h2>
      <div class="vib-table-wrap"><table class="vib-table" aria-label="Design token table"><thead><tr><th scope="col">Token</th><th scope="col">Value</th><th scope="col">Use</th></tr></thead><tbody><tr><td>Canvas</td><td class="vib-td-mono"><code>#0D1117</code></td><td>Main page background</td></tr><tr><td>Surface</td><td class="vib-td-mono"><code>#161B22</code></td><td>Cards and panels</td></tr><tr><td>Docs code</td><td class="vib-td-mono"><code>#0A0E14</code></td><td>High-contrast documentation code blocks</td></tr><tr><td>Accent</td><td class="vib-td-mono"><code>#38BDF8</code></td><td>Links and focus states</td></tr></tbody></table></div>
    </section>`
});

window.VibDocs.register({
  "id": "docs-code",
  "title": "Docs Code",
  "description": "Code block",
  "states": ["Default"],
  "html": `<section id="code" class="vib-doc-section">
      <h2>Code example</h2>
      <pre class="vib-doc-code"><code>.vib-doc-layout {
  grid-template-columns: 240px minmax(0, 1fr) 200px;
  gap: 12px;
}
.vib-badge-method {
  border-radius: 999px;
  font-size: 10px;
}</code></pre>
    </section>`
});

window.VibDocs.register({
  "id": "docs-responses",
  "title": "Docs Responses",
  "description": "Response cards",
  "states": ["Default"],
  "html": `<section id="responses" class="vib-doc-section">
      <h2>Responses</h2>
      <div class="vib-response-grid">
        <div class="vib-card vib-card-pad"><p class="vib-title-sm">201 Created</p><pre class="vib-doc-code mt-2"><code>{
  "id": "dep_391",
  "status": "queued",
  "target": "cloudflare"
}</code></pre></div>
        <div class="vib-card vib-card-pad"><p class="vib-title-sm">Error contract</p><pre class="vib-doc-code mt-2"><code>{
  "error": "invalid_token",
  "message": "Refresh the API token and retry."
}</code></pre></div>
      </div>
    </section>`
});

window.VibDocs.register({
  "id": "docs-toc",
  "title": "Docs TOC",
  "description": "Table of contents",
  "states": ["Default"],
  "html": `<aside class="vib-doc-toc" aria-label="On this page">
    <h3 class="vib-title-sm">On this page</h3>
    <ul class="vib-stack-sm mt-3 vib-meta">
      <li><a class="active" href="#overview">Overview</a></li>
      <li><a href="#quickstart">Quickstart</a></li>
      <li><a href="#api-playground">API playground</a></li>
      <li><a href="#tokens">Token table</a></li>
      <li><a href="#code">Code example</a></li>
      <li><a href="#responses">Responses</a></li>
    </ul>
  </aside>`
});
