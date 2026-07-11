/* ==========================================================================
   HASH ROUTER
   A tiny dependency-free router. Hash-based so the site works from a plain
   file:// double-click AND from any static host (Netlify/Vercel/Cloudflare
   Pages/GitHub Pages) with zero server configuration.
   ========================================================================== */
window.MAQ = window.MAQ || {};

(function () {
  var routes = []; // { pattern: ["chapter", ":id"], handler }

  function parsePattern(pattern) {
    return pattern.replace(/^#?\/?/, "").split("/").filter(Boolean);
  }

  function matchRoute(pathSegments) {
    for (var i = 0; i < routes.length; i++) {
      var r = routes[i];
      if (r.segments.length !== pathSegments.length) continue;
      var params = {};
      var ok = true;
      for (var j = 0; j < r.segments.length; j++) {
        var seg = r.segments[j];
        if (seg.charAt(0) === ":") {
          params[seg.slice(1)] = pathSegments[j];
        } else if (seg !== pathSegments[j]) {
          ok = false; break;
        }
      }
      if (ok) return { handler: r.handler, params: params };
    }
    return null;
  }

  function currentSegments() {
    var hash = window.location.hash || "#/";
    return hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  }

  function render() {
    var segments = currentSegments();
    var match = matchRoute(segments);
    var app = document.getElementById("app");
    if (!match) {
      app.innerHTML = "";
      window.MAQ.pages.landing.render(app, {});
      window.scrollTo(0, 0);
      return;
    }
    app.innerHTML = "";
    try {
      match.handler(app, match.params);
    } catch (e) {
      console.error("Route render error:", e);
      app.innerHTML = '<div class="container" style="padding:64px 0;text-align:center;">' +
        "<h2>Something needed a map</h2><p>We hit a snag rendering this screen. Let's head back to the Adventure Map.</p>" +
        '<a class="btn btn-primary" href="#/map">Return to the Map</a></div>';
    }
    window.scrollTo(0, 0);
  }

  window.MAQ.router = {
    register: function (pattern, handler) {
      routes.push({ segments: parsePattern(pattern), handler: handler });
    },
    navigate: function (path) {
      window.location.hash = path.charAt(0) === "#" ? path : "#" + path;
    },
    start: function () {
      window.addEventListener("hashchange", render);
      render();
    },
    rerender: render
  };
})();
