(function () {
  var KEY = 'valore-cookie-consent';
  var banner = document.getElementById('cookie-consent');
  if (!banner) return;

  try {
    if (localStorage.getItem(KEY)) return; // já decidiu antes, não mostra de novo
  } catch (e) {}

  // mostra com uma pequena espera, pra não competir com o carregamento da página
  window.setTimeout(function () {
    banner.classList.add('is-visible');
  }, 700);

  function dismiss(value) {
    banner.classList.remove('is-visible');
    try { localStorage.setItem(KEY, value); } catch (e) {}
  }

  var acceptBtn = document.getElementById('cookie-accept');
  var moreBtn = document.getElementById('cookie-more');
  if (acceptBtn) acceptBtn.addEventListener('click', function () { dismiss('accepted'); });
  if (moreBtn) moreBtn.addEventListener('click', function () {
    window.location.href = 'contato.html';
  });
})();