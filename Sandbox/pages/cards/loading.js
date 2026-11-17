window.VibCards = window.VibCards || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibCards.register({
  "id": "loading",
  "title": "Loading",
  "description": "Animated skeleton loader cards for image, title and body text placeholder states.",
  "states": [
    "Skeleton image",
    "Skeleton title",
    "Skeleton body",
    "aria-busy"
  ],
  "html": "<div class=\"vib-card-demo-grid\">\n  <article class=\"vib-card vib-card-pad vib-card-loading-preview\" aria-busy=\"true\">\n    <span class=\"vib-card-image-skeleton\" aria-hidden=\"true\"></span>\n    <span class=\"vib-skeleton\" data-width=\"medium\" aria-hidden=\"true\"></span>\n    <span class=\"vib-skeleton\" data-size=\"sm\" aria-hidden=\"true\"></span>\n    <span class=\"vib-skeleton\" data-size=\"sm\" data-width=\"short\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Loading card content</span>\n  </article>\n  <article class=\"vib-card vib-card-pad vib-card-loading-preview\" aria-busy=\"true\">\n    <span class=\"vib-skeleton\" data-width=\"short\" aria-hidden=\"true\"></span>\n    <span class=\"vib-skeleton\" aria-hidden=\"true\"></span>\n    <span class=\"vib-skeleton\" data-size=\"sm\" data-width=\"medium\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Loading metric card</span>\n  </article>\n</div>"
});
