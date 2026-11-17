# VibTools Web UI - Design System Guidelines (v2.2.0)

This guide documents the enterprise-grade, frozen v2.2.0 8-Module Token Architecture. All AI Agents and Developers MUST adhere to these rules when building or updating components.

## 1. Architecture Overview

The design system is powered by an 8-Module Token Foundation Engine located in `Sandbox/assets/css/foundation/`.

### The 8 Foundation Modules
- `_colors.css`: Semantic color tokens (backgrounds, surfaces, borders, text, status).
- `_typography.css`: Font families, sizing, tracking, and leading values.
- `_spacing.css`: Padding, margins, and component sizing (heights, widths).
- `_radius.css`: Border radius values for layout and components.
- `_shadows.css`: Drop shadow and elevation values.
- `_icons.css`: SVG dimensions and stroke widths.
- `_breakpoints.css`: Responsive design boundaries.
- `_motion.css`: Transition timings and easing curves.

### Aggregator & Tailwind Mapping
- **`vibtools-theme.css`**: The central aggregator that imports the 8 foundation modules in strict cascade order.
- **`tailwind-config.js`**: Exposes the CSS Custom Properties (`var(--vib-*)`) as Tailwind utility classes (e.g. `bg-vib-surface`, `text-vib-primary`).

## 2. Golden Rules for Developers & AI Agents

> [!CAUTION]
> Failure to follow these rules breaks the v2.2.0 baseline contract.

- **Rule 1: ZERO hardcoded hex codes allowed.** 
  Never use raw hex colors (e.g., `#0f172a`, `#94A3B8`) in HTML or JS. Always use semantic Tailwind utilities powered by CSS variables (e.g., `bg-vib-surface`, `text-vib-primary`).
  
- **Rule 2: ZERO hardcoded SVG pixel dimensions.**
  Do not use static width/height on inline SVGs (e.g., `width="28"`). Always use semantic classes: `w-[var(--icon-*)] h-[var(--icon-*)] stroke-[var(--icon-stroke)]`.

- **Rule 3: Maintain low-glare typography.**
  Maintain a maximum `500` font weight on H1/H2 headers and cards. High-glare or overly bold typography is strictly prohibited by the compact design rule.

## 3. Quick Token Reference Sheet

### Colors
- **Backgrounds:** `--vib-background`, `--vib-deep`
- **Surfaces:** `--vib-surface`, `--vib-surface-soft`, `--vib-field`
- **Text:** `--vib-text` (Primary), `--vib-content` (Content), `--vib-muted` (Secondary)
- **Status:** `--status-success`, `--status-warning`, `--status-danger`, `--status-info`

### Typography Scales
- `20px`: Large page titles
- `16px`: Standard page titles / Major sections
- `14px`: Card/Section titles
- `13px`: Primary UI text
- `12px`: Button/Control/Helper text
- `11px`: Badges/Micro-labels

### Component Heights & Radius
- **Control Heights:** `--height-button-sm` (`28px`), `--height-button-md` (`32px`), `--height-input-sm` (`30px`), `--height-input-md` (`34px`)
- **Radius:** `--vib-radius-sm`, `--vib-radius-md`, `--vib-radius-lg`

## 4. How to Create a New Page

When creating a new page, use the standard page shell inheritance structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Page - VibTools</title>
  
  <!-- Foundation Engine -->
  <link rel="stylesheet" href="../assets/css/vibtools-theme.css">
  
  <!-- Tailwind via CDN & Config -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="../js/tailwind-config.js"></script>
  
  <!-- Sandbox Utilities -->
  <link rel="stylesheet" href="../css/vibtools-sandbox.css">
</head>
<body class="bg-vib-background text-vib-content font-sans antialiased">
  
  <!-- Standard App Page Wrapper -->
  <div class="vib-app-page min-h-screen flex flex-col">
    <!-- Topbar -->
    <!-- Sidebar -->
    
    <!-- Main Content Area -->
    <main class="flex-1 w-full max-w-[var(--content-max-width)] mx-auto p-[var(--space-6)]">
      <div class="bg-vib-surface border border-vib-card-border rounded-[var(--vib-radius-lg)] p-4">
        <!-- Component Content Here -->
      </div>
    </main>
  </div>
  
</body>
</html>
```
