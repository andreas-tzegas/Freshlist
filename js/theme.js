/* ================================================
   FRESHLIST — theme.js
   Dark / Light mode toggle
   ================================================ */

// Apply saved theme immediately (before paint)
(function () {
  const saved = localStorage.getItem('fl_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('fl_theme', next);
}
