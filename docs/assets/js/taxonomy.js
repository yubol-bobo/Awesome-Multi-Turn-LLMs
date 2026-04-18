/* taxonomy.js — interactive horizontal taxonomy tree, vanilla SVG */

(function () {
  var canvas = document.getElementById('tax-canvas');
  var panel = document.getElementById('tax-panel');
  if (!canvas || !panel) return;

  fetch('assets/data/taxonomy.json')
    .then(function (r) { return r.json(); })
    .then(render)
    .catch(function (err) {
      canvas.innerHTML = '<p class="muted">Unable to load taxonomy. Make sure the site is served over http(s), not file://. Error: ' + err.message + '</p>';
    });

  function render(root) {
    // Expand only first two levels by default
    function initCollapse(node, depth) {
      if (!node.children) return;
      node._children = node.children;
      if (depth >= 1) {
        node.children = null;
      }
      node._children.forEach(function (c) { initCollapse(c, depth + 1); });
    }
    initCollapse(root, 0);

    function layout(node) {
      // compute layout using tidy-tree style pass (simple bottom-up)
      var nodeHeight = 24;
      var xSpacing = 220;
      var idx = 0;
      function walk(n, depth) {
        n.depth = depth;
        if (n.children && n.children.length) {
          n.children.forEach(function (c) { walk(c, depth + 1); });
          var first = n.children[0], last = n.children[n.children.length - 1];
          n.y = (first.y + last.y) / 2;
        } else {
          n.y = idx * nodeHeight;
          idx++;
        }
        n.x = depth * xSpacing;
      }
      walk(node, 0);
      // total height
      var maxY = 0, maxX = 0;
      function scan(n) {
        if (n.y > maxY) maxY = n.y;
        if (n.x > maxX) maxX = n.x;
        if (n.children) n.children.forEach(scan);
      }
      scan(node);
      return { width: maxX + 220, height: maxY + 48 };
    }

    var dims = layout(root);
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + dims.width + ' ' + Math.max(dims.height, 560));
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Task taxonomy tree');
    svg.style.minHeight = '620px';

    var g = document.createElementNS(svgNS, 'g');
    g.setAttribute('transform', 'translate(40, 30)');
    svg.appendChild(g);
    canvas.innerHTML = '';
    canvas.appendChild(svg);

    function draw() {
      while (g.firstChild) g.removeChild(g.firstChild);
      // links
      function drawLinks(n) {
        if (!n.children) return;
        n.children.forEach(function (c) {
          var path = document.createElementNS(svgNS, 'path');
          var d = 'M' + (n.x + 6) + ',' + n.y +
                  ' C' + (n.x + 100) + ',' + n.y +
                  ' ' + (c.x - 60) + ',' + c.y +
                  ' ' + (c.x - 6) + ',' + c.y;
          path.setAttribute('d', d);
          path.setAttribute('class', 'tax-tree-link');
          g.appendChild(path);
          drawLinks(c);
        });
      }
      drawLinks(root);

      // nodes
      function drawNode(n) {
        var grp = document.createElementNS(svgNS, 'g');
        var familyClass = n.id === 'root' ? 'is-root' : (n.family === 'leaf' ? 'fam-leaf' : 'fam-' + n.family);
        grp.setAttribute('class', 'tax-tree-node ' + familyClass);
        grp.setAttribute('transform', 'translate(' + n.x + ',' + n.y + ')');

        var c = document.createElementNS(svgNS, 'circle');
        c.setAttribute('r', n.depth === 0 ? 8 : (n.family === 'leaf' ? 4.5 : 6));
        grp.appendChild(c);

        var t = document.createElementNS(svgNS, 'text');
        t.setAttribute('dy', '0.32em');
        t.setAttribute('x', n.family === 'leaf' ? 10 : 11);
        t.setAttribute('text-anchor', 'start');
        if (n.depth === 0) {
          t.setAttribute('font-weight', '700');
          t.setAttribute('font-size', '13');
        } else if (n.family === 'if' || n.family === 'ce') {
          t.setAttribute('font-weight', '600');
        }
        t.textContent = n.name;
        grp.appendChild(t);

        // expand/collapse marker
        if (n._children || n.children) {
          var plus = document.createElementNS(svgNS, 'text');
          plus.setAttribute('dy', '0.32em');
          plus.setAttribute('x', -3);
          plus.setAttribute('text-anchor', 'middle');
          plus.setAttribute('font-size', '11');
          plus.setAttribute('fill', '#fff');
          plus.setAttribute('font-weight', '700');
          plus.setAttribute('pointer-events', 'none');
          plus.textContent = n.children ? '−' : '+';
          if (n.depth !== 0 && n.family !== 'leaf') grp.appendChild(plus);
        }

        grp.addEventListener('click', function (e) {
          selectNode(n);
          if (n._children) {
            if (n.children) {
              n.children = null;
            } else {
              n.children = n._children;
            }
            dims = layout(root);
            svg.setAttribute('viewBox', '0 0 ' + dims.width + ' ' + Math.max(dims.height, 560));
            draw();
          }
        });

        g.appendChild(grp);
        if (n.id === currentId) grp.classList.add('active');
        if (n.children) n.children.forEach(drawNode);
      }
      drawNode(root);
    }

    var currentId = 'root';
    function selectNode(n) {
      currentId = n.id;
      var pathParts = [];
      function findPath(node, target, acc) {
        if (node.id === target) {
          pathParts = acc.concat([node]);
          return true;
        }
        var kids = node.children || node._children;
        if (!kids) return false;
        for (var i = 0; i < kids.length; i++) {
          if (findPath(kids[i], target, acc.concat([node]))) return true;
        }
        return false;
      }
      findPath(root, n.id, []);
      var breadcrumb = pathParts.map(function (p) { return p.name; }).join(' › ');
      var cite = n.cite ? '<div class="mt-3 mono faint" style="font-size:0.75rem;">Refs: ' + n.cite + '</div>' : '';
      var childrenList = '';
      var kids = n.children || n._children || [];
      if (kids.length) {
        childrenList = '<h4 class="mt-5 mb-4" style="font-size:0.8rem;letter-spacing:0.09em;text-transform:uppercase;color:var(--ink-mute);">Sub-categories</h4><ul class="tax-refs">' +
          kids.map(function (c) { return '<li><strong>' + c.name + '</strong></li>'; }).join('') + '</ul>';
      }
      panel.innerHTML =
        '<div class="eyebrow">Selected</div>' +
        '<h3>' + n.name + '</h3>' +
        '<div class="panel-path">' + breadcrumb + '</div>' +
        '<div class="panel-desc">' + (n.description || '') + '</div>' +
        childrenList + cite;
    }

    selectNode(root);
    draw();
  }
})();
