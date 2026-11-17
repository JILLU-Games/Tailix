# Tailix Python Integration Quickstart (`Flask`, `Django`, `FastAPI + Jinja2`)

Copy `framework/css/tailix.min.css` and `framework/js/tailix.min.js` into your Python app's `static/tailix/` directory — zero Node.js or Webpack required.

- **Runnable Live Python App**: `framework/examples/app.py` (`python3 framework/examples/app.py` — zero external pip dependencies required)

---

## 1. Flask / FastAPI Jinja2 Base Layout (`templates/base.html`)

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% block title %}Tailix Python App{% endblock %}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='tailix/css/tailix.min.css') }}">
  <script src="{{ url_for('static', filename='tailix/js/tailix.min.js') }}" defer></script>
</head>
<body>
  <div class="tx-shell">
    <header class="tx-topbar">
      <div class="tx-topbar-inner">
        <div class="tx-brand">
          <button type="button" class="tx-icon-btn" data-tx-sidebar-toggle aria-label="Menu">☰</button>
          <span>Control Plane</span>
          <span class="tx-badge">v2.2.0</span>
        </div>
        <button type="button" class="tx-btn tx-btn-sm tx-btn-secondary" data-tx-theme-toggle>Theme</button>
      </div>
    </header>

    <div class="tx-layout">
      <aside class="tx-sidebar">
        <div class="tx-sidebar-inner">
          <div class="tx-sidebar-group">
            <div class="tx-sidebar-group-title">Navigation</div>
            <a href="/" class="tx-sidebar-link is-active"><span class="tx-sidebar-label">Dashboard</span></a>
          </div>
        </div>
      </aside>
      <main class="tx-main">{% block content %}{% endblock %}</main>
    </div>
  </div>

  {% with messages = get_flashed_messages(with_categories=true) %}
    {% if messages %}
    <script>
      window.addEventListener('DOMContentLoaded', function () {
        {% for category, msg in messages %}
          window.Tailix.toast({{ msg | tojson }}, {{ ('danger' if category == 'error' else category) | tojson }});
        {% endfor %}
      });
    </script>
    {% endif %}
  {% endwith %}
</body>
</html>
```

### Validated Form + Table in Child Template (`templates/users.html`)

```html
{% extends "base.html" %}
{% block content %}
<div class="tx-stack tx-gap-4">
  <section class="tx-card">
    <div class="tx-card-header"><h2 class="tx-card-title">Add Operator</h2></div>
    <div class="tx-card-body">
      <form method="POST" action="{{ url_for('create_user') }}" class="tx-stack tx-gap-3 tx-max-w-md" data-tx-validate>
        <div class="tx-field">
          <label class="tx-label tx-label-required" for="email">Email</label>
          <input id="email" name="email" type="email" class="tx-input" required>
        </div>
        <button type="submit" class="tx-btn tx-btn-sm tx-btn-primary">Create</button>
      </form>
    </div>
  </section>

  <section class="tx-table-panel" data-tx-table>
    <div class="tx-table-toolbar">
      <input type="search" class="tx-input" style="max-width:220px" placeholder="Search users..." data-tx-table-search>
    </div>
    <div class="tx-table-wrap">
      <table class="tx-table">
        <thead>
          <tr>
            <th><button type="button" class="tx-th-sort" data-tx-sort-col="0">Email</button></th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {% for u in users %}
          <tr><td>{{ u.email }}</td><td>{{ u.role }}</td></tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
    <div class="tx-table-footer">
      <span class="tx-meta" data-tx-table-count></span>
      <div class="tx-pagination" data-tx-pagination></div>
    </div>
  </section>
</div>
{% endblock %}
```

---

## 2. Django Template (`templates/base.html`)

Replace Flask asset URLs with Django `{% static %}` and include `{% csrf_token %}` inside `<form data-tx-validate>`:

```django
{% load static %}
<link rel="stylesheet" href="{% static 'tailix/css/tailix.min.css' %}">
<script src="{% static 'tailix/js/tailix.min.js' %}" defer></script>

<form method="post" data-tx-validate>
  {% csrf_token %}
  <div class="tx-field">
    <label class="tx-label tx-label-required" for="id_email">Email</label>
    <input id="id_email" name="email" type="email" class="tx-input" required>
  </div>
  <button type="submit" class="tx-btn tx-btn-sm tx-btn-primary">Submit</button>
</form>
```
