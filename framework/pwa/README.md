# Tailix PWA Module (`/framework/pwa`)

## Purpose
Provides zero-dependency Progressive Web App (PWA) compliance for the standalone Tailix v2.2.0 UI framework, including a standard Web App Manifest (`manifest.json`), offline-first Service Worker (`sw.js`), vector brand icon (`icon.svg`), and standard PNG home-screen icons (`192×192`, `512×512`, `maskable 512×512`, and `180×180` iOS `apple-touch-icon.png`).

## Usage in Static HTML, PHP, or Python Templates
Include the manifest and icon links inside `<head>`:
```html
<link rel="manifest" href="/framework/pwa/manifest.json">
<meta name="theme-color" content="#0B0F17">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Tailix">
<link rel="apple-touch-icon" href="/framework/pwa/apple-touch-icon.png">
<link rel="icon" type="image/svg+xml" href="/framework/pwa/icon.svg">
```

Register the service worker before `</body>`:
```html
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/framework/pwa/sw.js', { scope: '/framework/' });
    });
  }
</script>
```
