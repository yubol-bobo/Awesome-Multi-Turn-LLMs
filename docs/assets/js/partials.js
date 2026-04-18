/* partials.js — injects shared header and footer so each page is tiny */

(function () {
  var basePath = (function () {
    // detect nested pages (e.g. tasks/if.html) to adjust relative paths
    var segments = location.pathname.split('/');
    var file = segments.pop();
    // we only use flat docs/ structure, so no nesting — keep empty prefix
    return '';
  })();

  var headerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a href="index.html" class="brand">
          <span class="brand-mark">M×T</span>
          <span>
            Beyond&nbsp;Single-Turn
            <small>A survey on multi-turn LLMs</small>
          </span>
        </a>
        <button class="nav-toggle" aria-label="Toggle navigation">☰</button>
        <nav>
          <ul class="nav-links">
            <li><a href="tasks-if.html">Instruction&nbsp;Following</a></li>
            <li><a href="tasks-ce.html">Conversational&nbsp;Engagement</a></li>
            <li><a href="benchmarks.html">Benchmarks</a></li>
            <li><a href="methods.html">Methods</a></li>
            <li><a href="challenges.html">Challenges</a></li>
            <li><a href="about.html">Cite</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  var footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h4>Beyond Single-Turn</h4>
            <p class="mb-0" style="color:#b9b5a8;">
              A survey of multi-turn interactions with LLMs, organized by task family, with
              integrated benchmarks, methods, challenges, and future directions.
            </p>
            <p class="mt-4 mb-0" style="color:#8f8b7e; font-size:0.82rem;">
              Carnegie Mellon University · April 2026
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="index.html">Overview</a></li>
              <li><a href="benchmarks.html">Benchmark explorer</a></li>
              <li><a href="methods.html">Improvement methods</a></li>
              <li><a href="challenges.html">Open challenges</a></li>
            </ul>
          </div>
          <div>
            <h4>Task families</h4>
            <ul>
              <li><a href="tasks-if.html#math">IF — Math</a></li>
              <li><a href="tasks-if.html#coding">IF — Coding</a></li>
              <li><a href="tasks-ce.html#healthcare">CE — Healthcare</a></li>
              <li><a href="tasks-ce.html#education">CE — Education</a></li>
              <li><a href="tasks-ce.html#roleplay">CE — Role-Play</a></li>
              <li><a href="tasks-ce.html#jailbreak">CE — Jailbreak</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/yubol-cmu/Awesome-Multi-Turn-LLMs" target="_blank" rel="noopener">GitHub repository</a></li>
              <li><a href="about.html">Authors &amp; BibTeX</a></li>
              <li><a href="about.html#scope">Scope &amp; methodology</a></li>
              <li><a href="mailto:yubol@andrew.cmu.edu">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span id="year">2026</span> Li, Shen, Miao, Ding, Yao, Ramayya, Padman · Carnegie Mellon University</span>
          <span>Built as a companion site for the survey &nbsp;·&nbsp; <a href="https://github.com/yubol-cmu/Awesome-Multi-Turn-LLMs" target="_blank" rel="noopener">Source on GitHub</a></span>
        </div>
      </div>
    </footer>
  `;

  var headerSlot = document.getElementById('site-header');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  var footerSlot = document.getElementById('site-footer');
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // After injection, set active nav link
  setTimeout(function () {
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      var hrefFile = href.split('/').pop();
      if (hrefFile === path) a.classList.add('active');
    });
    var yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
  }, 0);
})();
