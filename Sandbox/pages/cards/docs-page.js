(function () {
  'use strict';
  
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function initDocsPage() {
    var main = document.querySelector('main.vib-main');
    if (!main || main.dataset.ready === 'true') return;
    
    var modules = window.VibDocs ? window.VibDocs.modules : [];
    function getMod(id) {
      return (modules.find(function(m) { return m.id === id; }) || {html: ''}).html;
    }
    
    var sidebar = getMod('docs-sidebar');
    var overview = getMod('docs-overview');
    var quickstart = getMod('docs-quickstart');
    var apiPlayground = getMod('docs-api-playground');
    var tokens = getMod('docs-tokens');
    var code = getMod('docs-code');
    var responses = getMod('docs-responses');
    var toc = getMod('docs-toc');
    
    main.innerHTML = `
<section class="vib-doc-layout">
  ${sidebar}
  <article class="vib-doc-body">
    ${overview}
    ${quickstart}
    ${apiPlayground}
    ${tokens}
    ${code}
    ${responses}
  </article>
  ${toc}
</section>
    `;
    
    main.dataset.ready = 'true';
  }

  ready(initDocsPage);
})();
