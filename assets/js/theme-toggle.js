/* ==========================================================================
   Dark mode toggle

   Pairs with the inline script in _includes/head.html, which sets the
   initial data-theme attribute before first paint to avoid a flash of the
   wrong theme. This script wires up the click handler and keeps things in
   sync if the user changes their OS-level preference while on the page.
   ========================================================================== */

(function () {
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function updateIcon(theme) {
    var icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateIcon(theme);
  }

  updateIcon(currentTheme());

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    var handleToggle = function (event) {
      if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      event.preventDefault();
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    };
    toggle.addEventListener('click', handleToggle);
    toggle.addEventListener('keydown', handleToggle);
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
