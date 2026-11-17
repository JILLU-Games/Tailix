# Framework PWA Directory Manifest

## Overview
- **Location**: `/framework/pwa`
- **Purpose**: Progressive Web App (PWA) manifest, offline-first service worker, and compliant SVG/PNG icons for standalone Tailix v2.2.0 deployments.

## Inventory
| Item | Type | Purpose / Description | Status |
|---|---|---|---|
| `README.md` | File | Integration guide for Web App Manifest, Service Worker, and iOS/Android icons. | Active (Phase 06) |
| `MANIFEST.md` | File | Inventory of PWA assets in `/framework/pwa`. | Active (Phase 06) |
| `manifest.json` | File | Web App Manifest (`id`, `name`, `short_name: "Tailix"`, `display: "standalone"`, `any` & `maskable` icons). | Active (Phase 06) |
| `sw.js` | File | Offline-first Service Worker precaching `tailix.min.css`, `tailix.min.js`, `vib-compat.css`, and `static.html`. | Active (Phase 06) |
| `icon.svg` | File | High-contrast geometric vector icon (`#0B0F17` canvas + `#2563EB` grid). | Active (Phase 06) |
| `pwa-192x192.png` | File | 192×192 PNG icon (`purpose: "any"`). | Active (Phase 06) |
| `pwa-512x512.png` | File | 512×512 PNG icon (`purpose: "any"`). | Active (Phase 06) |
| `pwa-maskable-512x512.png` | File | 512×512 padded safe-zone PNG icon (`purpose: "maskable"`). | Active (Phase 06) |
| `apple-touch-icon.png` | File | 180×180 PNG icon for iOS Safari Home Screen installation. | Active (Phase 06) |
