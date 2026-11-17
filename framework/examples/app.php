<?php
/**
 * Tailix v2.2.0 — Standalone Zero-Node PHP Starter Application (app.php)
 * Run locally with: php -S localhost:8080 framework/examples/app.php
 */
declare(strict_types=1);

$requestUri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$frameworkRoot = dirname(__DIR__);

if (preg_match('#^/framework/(css|js|pwa)/([a-zA-Z0-9._-]+)$#', $requestUri, $matches)) {
    $candidate = $frameworkRoot . '/' . $matches[1] . '/' . $matches[2];
    if (is_file($candidate)) {
        $ext = pathinfo($candidate, PATHINFO_EXTENSION);
        $mimes = [
            'css'  => 'text/css; charset=utf-8',
            'js'   => 'application/javascript; charset=utf-8',
            'json' => 'application/manifest+json; charset=utf-8',
            'svg'  => 'image/svg+xml',
            'png'  => 'image/png',
        ];
        header('Content-Type: ' . ($mimes[$ext] ?? 'application/octet-stream'));
        readfile($candidate);
        exit;
    }
}

$flashMessage = '';
$flashType = 'success';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    $serviceName = trim((string)($_POST['service_name'] ?? ''));
    $endpointUrl = trim((string)($_POST['endpoint_url'] ?? ''));
    if ($serviceName === '' || !filter_var($endpointUrl, FILTER_VALIDATE_URL)) {
        $flashMessage = 'Validation failed: provide a valid service name and https:// endpoint.';
        $flashType = 'danger';
    } else {
        $flashMessage = 'Registered service "' . htmlspecialchars($serviceName, ENT_QUOTES, 'UTF-8') . '" cleanly.';
        $flashType = 'success';
    }
}

$services = [
    ['name' => 'Auth Gateway',   'method' => 'POST', 'status' => 'active',   'latency' => '12ms',  'region' => 'us-east-1'],
    ['name' => 'Billing Worker', 'method' => 'PUT',  'status' => 'paused',   'latency' => '84ms',  'region' => 'eu-west-1'],
    ['name' => 'Edge Cache',     'method' => 'GET',  'status' => 'active',   'latency' => '4ms',   'region' => 'ap-south-1'],
    ['name' => 'Audit Purge',    'method' => 'DELETE','status' => 'degraded','latency' => '146ms', 'region' => 'us-west-2'],
];
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailix v2.2.0 — PHP Zero-Node Starter</title>
  <link rel="manifest" href="../pwa/manifest.json">
  <link rel="icon" type="image/svg+xml" href="../pwa/icon.svg">
  <link rel="apple-touch-icon" href="../pwa/apple-touch-icon.png">
  <link rel="stylesheet" href="../css/tailix.min.css">
  <script src="../js/tailix.min.js" defer></script>
</head>
<body>
  <div class="tx-shell">
    <header class="tx-topbar">
      <div class="tx-topbar-inner">
        <div class="tx-brand">
          <button type="button" class="tx-icon-btn" data-tx-sidebar-toggle aria-label="Toggle sidebar">
            <span data-tx-icon="menu" data-tx-icon-size="sm"></span>
          </button>
          <span>Tailix PHP</span>
          <span class="tx-badge">v2.2.0</span>
        </div>
        <div class="tx-row tx-gap-2">
          <button type="button" class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-theme-toggle>Theme</button>
        </div>
      </div>
    </header>

    <div class="tx-layout">
      <aside class="tx-sidebar" aria-label="PHP navigation">
        <div class="tx-sidebar-inner">
          <div class="tx-sidebar-group">
            <div class="tx-sidebar-group-title">PHP Runtime</div>
            <a href="#services" class="tx-sidebar-link is-active" aria-current="page">
              <span data-tx-icon="dashboard" data-tx-icon-size="sm"></span>
              <span class="tx-sidebar-label">Services</span>
            </a>
            <a href="#register" class="tx-sidebar-link">
              <span data-tx-icon="shield" data-tx-icon-size="sm"></span>
              <span class="tx-sidebar-label">Register Endpoint</span>
            </a>
          </div>
        </div>
      </aside>

      <main class="tx-main tx-stack tx-gap-6">
        <section class="tx-page-header">
          <div>
            <p class="tx-kicker">Server-Rendered PHP</p>
            <h1 class="tx-h1">Zero-Node PHP Control Plane</h1>
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
                <?php foreach ($services as $svc): ?>
                <tr>
                  <td class="tx-td-mono"><?= htmlspecialchars($svc['name'], ENT_QUOTES, 'UTF-8') ?></td>
                  <td><span class="tx-method tx-method-<?= strtolower($svc['method']) ?>"><?= htmlspecialchars($svc['method'], ENT_QUOTES, 'UTF-8') ?></span></td>
                  <td><?= htmlspecialchars($svc['status'], ENT_QUOTES, 'UTF-8') ?></td>
                  <td class="tx-td-numeric"><?= htmlspecialchars($svc['latency'], ENT_QUOTES, 'UTF-8') ?></td>
                  <td><?= htmlspecialchars($svc['region'], ENT_QUOTES, 'UTF-8') ?></td>
                </tr>
                <?php endforeach; ?>
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
            <h2 class="tx-card-title">Register Service Endpoint</h2>
          </div>
          <div class="tx-card-body">
            <form method="post" action="" class="tx-stack tx-gap-4 tx-max-w-md" data-tx-validate>
              <div class="tx-field">
                <label class="tx-label tx-label-required" for="php-svc-name">Service Name</label>
                <input id="php-svc-name" name="service_name" type="text" class="tx-input" minlength="3" required placeholder="edge-proxy">
              </div>
              <div class="tx-field">
                <label class="tx-label tx-label-required" for="php-svc-url">Healthcheck URL</label>
                <input id="php-svc-url" name="endpoint_url" type="url" class="tx-input" required placeholder="https://edge.internal/health">
              </div>
              <div class="tx-form-actions">
                <button type="submit" class="tx-btn tx-btn-sm tx-btn-primary">Register Service</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  </div>
  <?php if ($flashMessage !== ''): ?>
  <script>
    window.addEventListener('DOMContentLoaded', function () {
      if (window.Tailix) {
        window.Tailix.toast(<?= json_encode($flashMessage) ?>, <?= json_encode($flashType) ?>);
      }
    });
  </script>
  <?php endif; ?>
</body>
</html>
