/* benchmarks.js — searchable/filterable benchmark explorer */

(function () {
  var tbody = document.getElementById('bench-tbody');
  var search = document.getElementById('bench-search');
  var selFamily = document.getElementById('bench-family');
  var selDomain = document.getElementById('bench-domain');
  var selEval = document.getElementById('bench-eval');
  var countEl = document.getElementById('bench-count');
  var sortableHeads = document.querySelectorAll('table.data thead th[data-sort]');
  if (!tbody) return;

  var sortKey = null;
  var sortDir = 1;
  var rows = [];

  fetch('assets/data/benchmarks.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      rows = data;
      populateDomains();
      renderRows();
    })
    .catch(function (err) {
      tbody.innerHTML = '<tr><td colspan="10">Unable to load benchmark data. Serve over http(s), not file://. (' + err.message + ')</td></tr>';
    });

  function populateDomains() {
    if (!selDomain) return;
    var set = {};
    rows.forEach(function (r) { set[r.domain] = true; });
    Object.keys(set).sort().forEach(function (d) {
      var o = document.createElement('option');
      o.value = d; o.textContent = d;
      selDomain.appendChild(o);
    });
  }

  function cm(v) {
    if (v === true) return '<span class="cm">✓</span>';
    if (v === false) return '<span class="xm">✗</span>';
    return '<span class="faint">—</span>';
  }

  function filter() {
    var q = (search && search.value || '').trim().toLowerCase();
    var fam = selFamily ? selFamily.value : 'all';
    var dom = selDomain ? selDomain.value : 'all';
    var ev = selEval ? selEval.value : 'all';

    return rows.filter(function (r) {
      if (fam !== 'all' && r.family !== fam) return false;
      if (dom !== 'all' && r.domain !== dom) return false;
      if (ev === 'rule' && !r.rule_eval) return false;
      if (ev === 'human' && !r.human_judge) return false;
      if (ev === 'llm' && !r.llm_judge) return false;
      if (q) {
        var blob = (r.name + ' ' + r.domain + ' ' + (r.criteria || '') + ' ' + (r.cite || '')).toLowerCase();
        if (blob.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  function sortRows(arr) {
    if (!sortKey) return arr;
    return arr.slice().sort(function (a, b) {
      var va = a[sortKey], vb = b[sortKey];
      if (va == null) va = '';
      if (vb == null) vb = '';
      if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * sortDir;
      return String(va).localeCompare(String(vb)) * sortDir;
    });
  }

  function renderRows() {
    var filtered = sortRows(filter());
    if (countEl) countEl.textContent = filtered.length + ' of ' + rows.length + ' benchmarks';
    tbody.innerHTML = filtered.map(function (r) {
      var famChip = r.family === 'IF'
        ? '<span class="chip chip-if">IF · ' + r.domain + '</span>'
        : '<span class="chip chip-ce">CE · ' + r.domain + '</span>';
      return '<tr>' +
        '<td><strong>' + r.name + '</strong>' +
          (r.cite ? '<div class="faint mono" style="font-size:0.72rem;">' + r.cite + '</div>' : '') +
        '</td>' +
        '<td>' + famChip + '</td>' +
        '<td class="num">' + (r.year || '—') + '</td>' +
        '<td class="num">' + (r.dialogs != null ? Number(r.dialogs).toLocaleString() : '—') + '</td>' +
        '<td class="num">' + (r.turns != null ? r.turns : '—') + '</td>' +
        '<td>' + cm(r.rule_eval) + '</td>' +
        '<td>' + cm(r.human_judge) + '</td>' +
        '<td>' + cm(r.llm_judge) + '</td>' +
        '<td style="max-width:26em;">' + (r.criteria || '') + '</td>' +
      '</tr>';
    }).join('');
  }

  if (search)    search.addEventListener('input', renderRows);
  if (selFamily) selFamily.addEventListener('change', renderRows);
  if (selDomain) selDomain.addEventListener('change', renderRows);
  if (selEval)   selEval.addEventListener('change', renderRows);

  sortableHeads.forEach(function (th) {
    th.addEventListener('click', function () {
      var key = th.getAttribute('data-sort');
      if (sortKey === key) sortDir = -sortDir;
      else { sortKey = key; sortDir = 1; }
      sortableHeads.forEach(function (x) { x.classList.remove('sort-asc', 'sort-desc'); });
      th.classList.add(sortDir === 1 ? 'sort-asc' : 'sort-desc');
      renderRows();
    });
  });

  // Family facet chips (outside selects)
  document.querySelectorAll('[data-family-chip]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-family-chip]').forEach(function (x) { x.classList.remove('active'); });
      btn.classList.add('active');
      if (selFamily) selFamily.value = btn.getAttribute('data-family-chip');
      renderRows();
    });
  });
})();
