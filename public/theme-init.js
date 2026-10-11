(function () {
  var stored;
  try {
    stored = localStorage.getItem('theme');
  } catch (e) {}
  var light = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  document.documentElement.dataset.theme =
    stored === 'light' || stored === 'dark' ? stored : light ? 'light' : 'dark';
})();
