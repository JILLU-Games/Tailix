# VibTools Tailwind CDN Class Contracts — v1.7.3

Use these recipes only as examples. The authoritative reusable classes are in `Sandbox/css/vibtools-sandbox.css`.

## Shell

```html
<body class="bg-vib-background text-vib-text font-sans text-[13px] leading-[1.46]">
  <header class="vib-topbar">...</header>
  <div class="vib-layout">
    <aside class="vib-sidebar">...</aside>
    <main class="vib-main">...</main>
  </div>
</body>
```

## App page wrapper

```html
<main class="vib-app-page">
  <header class="vib-page-header">
    <p class="vib-kicker">Forms demo</p>
    <h1 class="vib-hero-title">Compact form controls.</h1>
    <p class="vib-body">Inputs, labels and actions use global compact classes.</p>
  </header>
  <section class="vib-grid-2col">...</section>
</main>
```

## Auth page wrapper

```html
<main class="vib-auth-viewport">
  <section class="vib-auth-split-container">
    <aside class="vib-auth-hero">...</aside>
    <form class="vib-auth-card vib-auth-form">...</form>
  </section>
</main>
```

## Card

```html
<article class="vib-card vib-card-pad">
  <h3 class="vib-card-title">Project card</h3>
  <p class="vib-card-text">Compact bordered surface with no default shadow.</p>
</article>
```

## Form controls

```html
<label class="vib-label" for="name">Project name</label>
<input id="name" class="vib-input" placeholder="ContextVault">
<textarea class="vib-textarea" placeholder="Short description"></textarea>
<div class="vib-row vib-form-actions">
  <button class="vib-button vib-button-primary">Save</button>
  <button class="vib-button vib-button-secondary">Cancel</button>
</div>
```

## Table toolbar

```html
<div class="vib-table-toolbar">
  <div class="vib-table-controls-left">
    <div class="vib-table-search"><input class="vib-input" placeholder="Search records..."></div>
    <select class="vib-select vib-table-filter"><option>Status: All</option></select>
    <select class="vib-select vib-table-filter"><option>Category: All</option></select>
  </div>
  <div class="vib-table-controls-right">
    <button class="vib-button vib-button-secondary">Export CSV</button>
    <button class="vib-button vib-button-primary">+ Add Item</button>
  </div>
</div>
```

## Docs quicksearch

```html
<div class="vib-doc-search">
  <input class="vib-input" placeholder="Search docs...">
  <span class="vib-doc-kbd">Ctrl K</span>
</div>
```

## Disallowed utility-only replacements

Do not replace global classes with local `p-6`, `h-10`, `min-h-[56px]`, `max-w-[560px]`, centered component pages or custom one-off colors. Update the global class contract first.


## v1.7.3 Upload Files Component Classes

- `.vib-upload-dropzone`
- `.vib-upload-tabs`, `.vib-upload-tab`
- `.vib-upload-item`, `.vib-upload-file-main`, `.vib-upload-file-title`, `.vib-upload-file-meta`
- `.vib-file-badge` with `.pdf`, `.png`, `.docx`, `.mp4`
- `.vib-progress-track`, `.vib-progress-fill`
- `.vib-upload-status`, `.vib-upload-spinner`, `.vib-upload-remove`, `.vib-upload-actions`


## v1.7.3 Settings Page Classes

`vib-settings-layout`, `vib-settings-nav`, `vib-settings-nav-item`, `vib-settings-row`, `vib-settings-info`, `vib-settings-title`, `vib-settings-desc`, `vib-settings-control`, `vib-settings-form-row`, `vib-settings-inline-control`, `vib-switch`, `vib-slider`, `vib-settings-danger-card`.

/* v1.9.0 Production-Grade Card Components Playground: cards.html uses .vib-cards-playground, .vib-card-section and 11 module pairs in Sandbox/pages/cards/. */
