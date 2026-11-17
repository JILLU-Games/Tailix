window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "textarea",
  "title": "Textarea",
  "description": "Textarea states for fixed height, auto-expansion, counters and resize affordance.",
  "states": [
    "Auto-expand",
    "Fixed height",
    "Character counter",
    "Resizable"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\" for=\"textarea-auto\">Auto-expand</label><textarea id=\"textarea-auto\" class=\"vib-textarea\" data-auto-expand placeholder=\"Type to expand the control\">Open-source organization profile.</textarea><p class=\"vib-helper-text\">Auto expand preserves the compact vertical rhythm.</p></div>\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\" for=\"textarea-counter\">Counter</label><textarea id=\"textarea-counter\" class=\"vib-textarea\" maxlength=\"200\" data-counter-source=\"textarea-counter\">Short compact message</textarea><div class=\"vib-helper-row\"><span class=\"vib-helper-text\">Maximum 200 characters.</span><span class=\"vib-helper-text\" data-character-counter=\"textarea-counter\" data-max=\"200\">0/200</span></div></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"textarea-fixed\">Fixed height</label><textarea id=\"textarea-fixed\" class=\"vib-textarea vib-textarea-fixed\" placeholder=\"64px minimum height\"></textarea></div>\n</div>"
});
