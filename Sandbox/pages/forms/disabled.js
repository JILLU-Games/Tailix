window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "disabled",
  "title": "Disabled",
  "description": "Disabled fields, buttons and choices with low opacity, greyed backgrounds and no pointer interactions.",
  "states": [
    "Disabled input",
    "Disabled select",
    "Disabled checkbox",
    "Disabled button",
    "Low opacity",
    "Pointer-events none",
    "Greyed-out backgrounds"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"disabled-input\">Disabled input</label><input id=\"disabled-input\" class=\"vib-input\" value=\"Cannot edit\" disabled></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"disabled-select\">Disabled select</label><select id=\"disabled-select\" class=\"vib-select\" disabled><option>Locked environment</option></select></div>\n  <label class=\"vib-check\"><input type=\"checkbox\" disabled> Disabled checkbox</label>\n  <button type=\"button\" class=\"vib-button vib-button-primary\" disabled>Disabled action</button>\n  <div class=\"vib-disabled-surface\" aria-disabled=\"true\"><strong>Disabled group surface</strong><span>No pointer interaction and greyed-out background.</span></div>\n</div>"
});
