(function () {
  'use strict';
  
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function initSettingsPage() {
    var main = document.querySelector('main.vib-main');
    if (!main || main.dataset.ready === 'true') return;
    
    var modules = window.VibForms ? window.VibForms.modules : [];
    function getMod(id) {
      return (modules.find(function(m) { return m.id === id; }) || {html: ''}).html;
    }
    
    var header = getMod('settings-header');
    var plan = getMod('settings-plan');
    var sidebar = getMod('settings-sidebar');
    var general = getMod('settings-general');
    var appearance = getMod('settings-appearance');
    var security = getMod('settings-security');
    var integrations = getMod('settings-integrations');
    var apiKeys = getMod('settings-api-keys');
    var webhooks = getMod('settings-webhooks');
    var dangerZone = getMod('settings-danger-zone');
    
    main.innerHTML = `
<section class="vib-app-page">
  ${header}
  ${plan}
  <div class="vib-settings-layout mt-5">
    ${sidebar}
    <div class="vib-settings-content">
      ${general}
      ${appearance}
      ${security}
      ${integrations}
      ${apiKeys}
      ${webhooks}
      ${dangerZone}
    </div>
  </div>
</section>
    `;
    
    main.dataset.ready = 'true';
  }

  ready(initSettingsPage);
})();
