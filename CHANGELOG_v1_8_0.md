# Changelog — VibTools Web UI v1.8.0

## Scope

Production-Grade Form Components Playground over the frozen v1.7.5 baseline.

## Before → After

| Area | Before | After |
| --- | --- | --- |
| `forms.html` | Compact two-card form demo | Full-width, top-aligned, scrollable playground for all form primitives |
| Component modularity | Form examples embedded only in the page | `Sandbox/pages/forms/` module directory with HTML snippets and JS module registrations |
| Component coverage | Input/select/textarea only | 15 form modules: Input, Password, Search, Select, Textarea, Checkbox, Radio, Switch, File Input, Form Label, Helper Text, Validation, Disabled, Readonly and Loading |
| State coverage | Basic default/value state | Default, placeholder, hover/focus preview, success, warning, error, disabled, readonly and loading patterns |
| Typography/color | v1.7.5 precision baseline | Preserved: 16px page title, 13px section title, 12px labels, 11px helper text, zero-shadow flat UI |

## Preserved

No route removal, sidebar width change, topbar height change, auth-page centering change, app-page top-alignment regression, upload/docs/settings behavior change, global workflow rewrite, or unsolicited feature refactor was introduced.
