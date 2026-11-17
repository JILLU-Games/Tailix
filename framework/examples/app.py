#!/usr/bin/env python3
"""
Tailix v2.2.0 — Standalone Zero-Node Python Starter Application (app.py)
Works out-of-the-box with Python 3 standard library `http.server` OR Flask if installed.
Run locally with: python3 framework/examples/app.py
"""
from __future__ import annotations

import html
import json
import mimetypes
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

FRAMEWORK_DIR = Path(__file__).resolve().parent.parent

SERVICES = [
    {"name": "Auth Gateway", "method": "POST", "status": "active", "latency": "12ms", "region": "us-east-1"},
    {"name": "Billing Worker", "method": "PUT", "status": "paused", "latency": "84ms", "region": "eu-west-1"},
    {"name": "Edge Cache", "method": "GET", "status": "active", "latency": "4ms", "region": "ap-south-1"},
    {"name": "Audit Purge", "method": "DELETE", "status": "degraded", "latency": "146ms", "region": "us-west-2"},
]


def render_dashboard(flash_message: str = "", flash_type: str = "success") -> str:
    rows_html = []
    for svc in SERVICES:
        name = html.escape(svc["name"])
        method = html.escape(svc["method"])
        method_cls = f"tx-method tx-method-{method.lower()}"
        status = html.escape(svc["status"])
        latency = html.escape(svc["latency"])
        region = html.escape(svc["region"])
        rows_html.append(
            f"<tr>"
            f'<td class="tx-td-mono">{name}</td>'
            f'<td><span class="{method_cls}">{method}</span></td>'
            f"<td>{status}</td>"
            f'<td class="tx-td-numeric">{latency}</td>'
            f"<td>{region}</td>"
            f"</tr>"
        )

    toast_script = ""
    if flash_message:
        toast_script = (
            "<script>"
            "window.addEventListener('DOMContentLoaded', function () {"
            f"  if (window.Tailix) window.Tailix.toast({json.dumps(flash_message)}, {json.dumps(flash_type)});"
            "});"
            "</script>"
        )

    return f"""<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailix v2.2.0 — Python Zero-Node Starter</title>
  <link rel="manifest" href="/framework/pwa/manifest.json">
  <link rel="icon" type="image/svg+xml" href="/framework/pwa/icon.svg">
  <link rel="apple-touch-icon" href="/framework/pwa/apple-touch-icon.png">
  <link rel="stylesheet" href="/framework/css/tailix.min.css">
  <script src="/framework/js/tailix.min.js" defer></script>
</head>
<body>
  <div class="tx-shell">
    <header class="tx-topbar">
      <div class="tx-topbar-inner">
        <div class="tx-brand">
          <button type="button" class="tx-icon-btn" data-tx-sidebar-toggle aria-label="Toggle sidebar">
            <span data-tx-icon="menu" data-tx-icon-size="sm"></span>
          </button>
          <span>Tailix Python</span>
          <span class="tx-badge">v2.2.0</span>
        </div>
        <div class="tx-row tx-gap-2">
          <button type="button" class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-theme-toggle>Theme</button>
        </div>
      </div>
    </header>
    <div class="tx-layout">
      <aside class="tx-sidebar" aria-label="Python navigation">
        <div class="tx-sidebar-inner">
          <div class="tx-sidebar-group">
            <div class="tx-sidebar-group-title">Python Runtime</div>
            <a href="#services" class="tx-sidebar-link is-active" aria-current="page">
              <span data-tx-icon="terminal" data-tx-icon-size="sm"></span>
              <span class="tx-sidebar-label">Services</span>
            </a>
            <a href="#register" class="tx-sidebar-link">
              <span data-tx-icon="plus" data-tx-icon-size="sm"></span>
              <span class="tx-sidebar-label">Register Worker</span>
            </a>
          </div>
        </div>
      </aside>
      <main class="tx-main tx-stack tx-gap-6">
        <section class="tx-page-header">
          <div>
            <p class="tx-kicker">Python 3 Zero-Dependency Server</p>
            <h1 class="tx-h1">Tailix Python Control Plane</h1>
          </div>
        </section>
        <section id="services" class="tx-table-panel" data-tx-table>
          <div class="tx-table-toolbar">
            <input type="search" class="tx-input" style="max-width: 220px" placeholder="Filter services..." data-tx-table-search>
          </div>
          <div class="tx-table-wrap">
            <table class="tx-table">
              <thead>
                <tr>
                  <th><button type="button" class="tx-th-sort" data-tx-sort-col="0">Service</button></th>
                  <th>Method</th>
                  <th>Status</th>
                  <th><button type="button" class="tx-th-sort" data-tx-sort-col="3">Latency</button></th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                {''.join(rows_html)}
              </tbody>
            </table>
          </div>
          <div class="tx-table-footer">
            <span class="tx-meta" data-tx-table-count></span>
            <div class="tx-pagination" data-tx-pagination></div>
          </div>
        </section>
        <section id="register" class="tx-card">
          <div class="tx-card-header">
            <h2 class="tx-card-title">Register Python Worker</h2>
          </div>
          <div class="tx-card-body">
            <form method="post" action="/" class="tx-stack tx-gap-4 tx-max-w-md" data-tx-validate>
              <div class="tx-field">
                <label class="tx-label tx-label-required" for="py-svc-name">Worker Name</label>
                <input id="py-svc-name" name="service_name" type="text" class="tx-input" minlength="3" required placeholder="celery-ingest">
              </div>
              <div class="tx-field">
                <label class="tx-label tx-label-required" for="py-svc-url">Healthcheck URL</label>
                <input id="py-svc-url" name="endpoint_url" type="url" class="tx-input" required placeholder="https://ingest.internal/health">
              </div>
              <div class="tx-form-actions">
                <button type="submit" class="tx-btn tx-btn-sm tx-btn-primary">Register Worker</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  </div>
  {toast_script}
</body>
</html>"""


class TailixHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path.startswith("/framework/"):
            rel = parsed.path[len("/framework/"):]
            target = (FRAMEWORK_DIR / rel).resolve()
            if str(target).startswith(str(FRAMEWORK_DIR)) and target.is_file():
                ctype, _ = mimetypes.guess_type(str(target))
                self.send_response(200)
                self.send_header("Content-Type", ctype or "application/octet-stream")
                self.end_headers()
                self.wfile.write(target.read_bytes())
                return
        body = render_dashboard().encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self) -> None:
        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length).decode("utf-8", errors="replace")
        form = parse_qs(raw)
        name = (form.get("service_name", [""])[0]).strip()
        url = (form.get("endpoint_url", [""])[0]).strip()
        if len(name) < 3 or not (url.startswith("http://") or url.startswith("https://")):
            body = render_dashboard("Validation error: enter valid worker name and URL.", "danger").encode("utf-8")
        else:
            body = render_dashboard(f'Registered worker "{name}" cleanly.', "success").encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", 8081), TailixHandler)
    print("Tailix Python starter listening on http://127.0.0.1:8081")
    server.serve_forever()
