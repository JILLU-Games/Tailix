window.VibForms = window.VibForms || { modules: [], register: function (module) { this.modules.push(module); } };
window.VibForms.register({
  "id": "password",
  "title": "Password",
  "description": "Masked password field with an integrated eye-icon visibility toggle control.",
  "states": [
    "Masked value",
    "Eye icon",
    "Show/hide toggle",
    "Focus-ready layout",
    "Error-ready layout"
  ],
  "html": "<div class=\"vib-component-grid\">\n  <div class=\"vib-demo-field vib-demo-field-wide\"><label class=\"vib-label\" for=\"password-demo\">Password</label><div class=\"vib-input-wrap\"><input id=\"password-demo\" class=\"vib-input vib-input-with-right\" type=\"password\" value=\"vibtools-secret\"><button class=\"vib-input-action vib-password-eye\" type=\"button\" data-password-toggle=\"password-demo\" aria-label=\"Show password\" aria-pressed=\"false\"><span aria-hidden=\"true\">◉</span></button></div><p class=\"vib-helper-text\">Eye icon toggles password visibility without shifting field height.</p></div>\n  <div class=\"vib-demo-field\"><label class=\"vib-label\" for=\"password-disabled\">Disabled</label><input id=\"password-disabled\" class=\"vib-input\" type=\"password\" value=\"disabled-password\" disabled></div>\n</div>"
});
