(function () {
  'use strict';
  
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function initUploadPage() {
    var main = document.querySelector('main.vib-main');
    if (!main || main.dataset.ready === 'true') return;
    
    // Fetch components from the core forms framework
    var modules = window.VibForms ? window.VibForms.modules : [];
    var tabsMod = modules.find(function(m) { return m.id === 'upload-advanced-tabs'; }) || {html: ''};
    var dropzoneMod = modules.find(function(m) { return m.id === 'upload-advanced-dropzone'; }) || {html: ''};
    var queueMod = modules.find(function(m) { return m.id === 'upload-advanced-queue'; }) || {html: ''};
    
    // Construct the app page directly using framework primitives
    main.innerHTML = `
<section class="vib-app-page">
  <div class="vib-page-header vib-playground-hero">
    <p class="vib-kicker">Upload Demo</p>
    <h1 class="vib-h1 mt-2">Upload files with compact queue states.</h1>
    <p class="vib-body mt-2">Drag-drop file upload component with source tabs, extension badges, progress bars, success state, failure state and compact action controls.</p>
  </div>
  
  <div class="vib-upload-shell">
    <aside class="vib-form-card">
      <p class="vib-kicker">Upload system</p>
      <h2 class="vib-h2 mt-2">Professional file intake rhythm.</h2>
      <p class="vib-card-text mt-2">The upload page stays in the standard top-aligned app layout and reuses global cards, fields, buttons, borders and state colors.</p>
      <ul class="vib-upload-rule-list">
        <li>Supports PDF, PNG, DOCX and MP4 examples.</li>
        <li>Maximum file size contract: 50 MB.</li>
        <li>Each queued file exposes progress, status, retry/remove and metadata.</li>
      </ul>
      <div class="vib-card-subtle vib-auth-proof mt-3">
        <p class="vib-meta">Layout guard</p>
        <p class="vib-body vib-auth-compact-note">This is an app/component page, so it uses <code>.vib-app-page</code>; no auth centering is applied.</p>
      </div>
    </aside>

    <section class="vib-form-card vib-upload-panel" aria-labelledby="upload-heading">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="vib-kicker">Your files</p>
          <h2 id="upload-heading" class="vib-h2 mt-2">Upload and attach files.</h2>
        </div>
        ${tabsMod.html}
      </div>

      <div class="mt-4">
        ${dropzoneMod.html}
      </div>

      <div class="mt-4">
        ${queueMod.html}
      </div>

      <div class="vib-upload-actions mt-4">
        <button type="button" class="vib-button vib-button-secondary">Cancel</button>
        <button type="button" class="vib-button vib-button-primary">Upload</button>
      </div>
    </section>
  </div>
</section>
    `;
    
    main.dataset.ready = 'true';
  }

  ready(initUploadPage);
})();
