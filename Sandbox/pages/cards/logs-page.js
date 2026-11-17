(function () {
  'use strict';
  
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function initLogsPage() {
    var main = document.querySelector('main.vib-main');
    if (!main || main.dataset.ready === 'true') return;
    
    var modules = window.VibLogs ? window.VibLogs.modules : [];
    function getMod(id) {
      return (modules.find(function(m) { return m.id === id; }) || {html: ''}).html;
    }
    
    var hero = getMod('logs-hero');
    var canvas = getMod('logs-demo-canvas');
    var modal = getMod('logs-modal');
    
    main.innerHTML = `
      ${hero}
      <section class="vib-section">
        <div class="vib-container vib-stack">
          <div class="vib-log-demo-stage" aria-label="Deployment modal preview stage">
            ${canvas}
            ${modal}
          </div>
        </div>
      </section>
    `;
    
    main.dataset.ready = 'true';
  }

  ready(initLogsPage);
})();
