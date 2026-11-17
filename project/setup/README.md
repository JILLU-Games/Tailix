# Project Setup & Runtime Architecture

## Purpose
This directory documents how the application is configured, initialized, and run in development and production environments.

## Runtime Details
- **Platform**: Node.js 22 (LTS)
- **Web Server**: Express (`server.js`)
- **Port**: `3000`
- **Host**: `0.0.0.0`
- **Static Asset Serving**: Serves the root directory statically, routing `/` to `/Sandbox/index.html`.
- **404 Routing**: Any unmapped route automatically serves `/Sandbox/pages/404.html`.

## Commands
- `npm run dev`: Starts the Express web server on `http://0.0.0.0:3000`.
- `npm run build`: Executes fast validation build check (`compile_applet`).
- `npm run lint`: Validates syntax of `server.js`, `sandbox-nav.js`, and `tailwind-config.js`.
- `npm start`: Starts production server process.
