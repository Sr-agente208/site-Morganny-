(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('valore-theme', theme); } catch (e) {}
  }

  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    apply(current === 'dark' ? 'light' : 'dark');
  });
})();