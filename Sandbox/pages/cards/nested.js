window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "nested",
  "title": "Nested",
  "description": "Card-inside-card pattern for code snippets, subtasks and inner content blocks.",
  "states": [
    "Nested surface",
    "Inner border",
    "Code snippet",
    "No shadow"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad vib-card-nested-shell\">\n    <div>\n      <h3 class=\"vib-card-title\">Nested task card</h3>\n      <p class=\"vib-card-text mt-2\">Card-inside-card pattern for subtasks, code snippets and policy notes.</p>\n    </div>\n    <div class=\"vib-card-subtle vib-card-pad\">\n      <p class=\"vib-card-title\">Inner policy block</p>\n      <p class=\"vib-card-text mt-1\">Uses #11161D nested surface and #2A303C inner border.</p>\n    </div>\n    <pre class=\"vib-code-inner\"><code>card.surface = flat\ncard.shadow = none\ncard.border = 1px</code></pre>\n  </article>\n</div>"
});
