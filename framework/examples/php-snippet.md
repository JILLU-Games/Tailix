# Tailix PHP Integration Quickstart (`Core PHP` & `Laravel Blade`)

Drop `framework/css/tailix.min.css` and `framework/js/tailix.min.js` into your `public/assets/tailix/` directory — zero Node.js, Vite, or Mix build steps required.

- **Runnable Live PHP App**: `framework/examples/app.php` (`php -S localhost:8080 framework/examples/app.php`)

---

## 1. Core PHP (`index.php`) Drop-In

```php
<?php
session_start();
$flash = $_SESSION['flash'] ?? null;
unset($_SESSION['flash']);

$services = [
  ['name' => 'Auth Gateway', 'status' => 'active', 'latency' => '12ms'],
  ['name' => 'Mail Queue', 'status' => 'paused', 'latency' => '84ms'],
];
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Admin — Tailix</title>
  <link rel="stylesheet" href="/assets/tailix/css/tailix.min.css">
  <script src="/assets/tailix/js/tailix.min.js" defer></script>
</head>
<body>
  <div class="tx-shell">
    <header class="tx-topbar">
      <div class="tx-topbar-inner">
        <div class="tx-brand">
          <button class="tx-icon-btn" data-tx-sidebar-toggle aria-label="Menu">☰</button>
          <span>PHP Admin</span>
          <span class="tx-badge">v2.2.0</span>
        </div>
        <button class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-theme-toggle>Theme</button>
      </div>
    </header>

    <div class="tx-layout">
      <aside class="tx-sidebar">
        <div class="tx-sidebar-inner">
          <div class="tx-sidebar-group">
            <div class="tx-sidebar-group-title">System</div>
            <a href="/index.php" class="tx-sidebar-link is-active"><span class="tx-sidebar-label">Overview</span></a>
          </div>
        </div>
      </aside>

      <main class="tx-main tx-stack tx-gap-4">
        <section class="tx-card">
          <div class="tx-card-header"><h2 class="tx-card-title">Create Operator</h2></div>
          <div class="tx-card-body">
            <!-- Native PHP POST when valid; blocks invalid client-side before POST -->
            <form method="POST" action="/save.php" class="tx-stack tx-gap-3 tx-max-w-md" data-tx-validate>
              <div class="tx-field">
                <label class="tx-label tx-label-required" for="email">Email</label>
                <input id="email" name="email" type="email" class="tx-input" required>
              </div>
              <button type="submit" class="tx-btn tx-btn-sm tx-btn-primary">Save</button>
            </form>
          </div>
        </section>

        <section class="tx-table-panel" data-tx-table>
          <div class="tx-table-toolbar">
            <input type="search" class="tx-input" style="max-width:220px" placeholder="Filter..." data-tx-table-search>
          </div>
          <div class="tx-table-wrap">
            <table class="tx-table">
              <thead>
                <tr>
                  <th><button type="button" class="tx-th-sort" data-tx-sort-col="0">Service</button></th>
                  <th>Status</th>
                  <th>Latency</th>
                </tr>
              </thead>
              <tbody>
                <?php foreach ($services as $row): ?>
                  <tr>
                    <td><?= htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8') ?></td>
                    <td><?= htmlspecialchars($row['status'], ENT_QUOTES, 'UTF-8') ?></td>
                    <td class="tx-td-numeric"><?= htmlspecialchars($row['latency'], ENT_QUOTES, 'UTF-8') ?></td>
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
      </main>
    </div>
  </div>

  <?php if ($flash): ?>
  <script>
    window.addEventListener('DOMContentLoaded', function () {
      window.Tailix.toast(<?= json_encode($flash['message']) ?>, <?= json_encode($flash['type'] ?? 'info') ?>);
    });
  </script>
  <?php endif; ?>
</body>
</html>
```

---

## 2. Laravel Blade Layout (`resources/views/layouts/app.blade.php`)

```blade
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'Admin')</title>
  <link rel="stylesheet" href="{{ asset('assets/tailix/css/tailix.min.css') }}">
  <script src="{{ asset('assets/tailix/js/tailix.min.js') }}" defer></script>
</head>
<body>
  <div class="tx-shell">
    <header class="tx-topbar">
      <div class="tx-topbar-inner">
        <div class="tx-brand">
          <button class="tx-icon-btn" data-tx-sidebar-toggle aria-label="Menu">☰</button>
          <span>{{ config('app.name') }}</span>
        </div>
        <button class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-theme-toggle>Theme</button>
      </div>
    </header>

    <div class="tx-layout">
      @include('partials.sidebar')
      <main class="tx-main">
        @yield('content')
      </main>
    </div>
  </div>

  @if(session('status'))
  <script>
    window.addEventListener('DOMContentLoaded', function () {
      window.Tailix.toast(@json(session('status')), 'success');
    });
  </script>
  @endif
</body>
</html>
```
