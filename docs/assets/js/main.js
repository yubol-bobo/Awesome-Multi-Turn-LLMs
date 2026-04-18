/* main.js — shared behavior across pages */

(function () {
  // -------- Nav toggle (mobile) --------
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('.nav-toggle');
    if (toggle) {
      var links = document.querySelector('.nav-links');
      if (links) links.classList.toggle('open');
    }
  });

  // -------- Active nav link highlight --------
  var path = location.pathname.split('/').pop() || 'index.html';
  if (path === '') path = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var hrefFile = href.split('/').pop();
    if (hrefFile === path) a.classList.add('active');
  });

  // -------- BibTeX copy button --------
  document.querySelectorAll('.bib-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = btn.parentElement.querySelector('pre, code, .bib-body');
      if (!box) return;
      var text = box.innerText;
      navigator.clipboard.writeText(text).then(function () {
        btn.classList.add('copied');
        var orig = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.textContent = orig;
        }, 1600);
      }).catch(function () {
        btn.textContent = 'Copy failed';
      });
    });
  });

  // -------- Smooth in-page anchor behavior --------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length <= 1) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var offset = 72;
      var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
      history.replaceState(null, '', id);
    });
  });

  // -------- Year in footer --------
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
