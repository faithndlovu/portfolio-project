/* =========================================================
   PROJECT CARD RENDERER
   Shared by the browser (script.js) and by tools/build-projects.js,
   which writes the finished cards straight into work.html and
   index.html so the projects are visible even without JavaScript
   (search engines, link previews, some recruiters' tools).
   ========================================================= */
(function (root) {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function media(p) {
    const badge = p.live
      ? '<span class="image-badge"><span class="status-dot"></span> Live</span>'
      : "";
    const alt = esc(p.imageAlt || p.title);
    if (p.phone) {
      return (
        '<div class="work-image phone-stage">' + badge +
        '<div class="phone-device"><span class="phone-notch"></span>' +
        '<img src="' + esc(p.phone) + '" alt="' + alt + '" loading="lazy" /></div></div>'
      );
    }
    if (p.image) {
      return (
        '<div class="work-image">' + badge +
        '<img src="' + esc(p.image) + '" alt="' + alt + '" loading="lazy" /></div>'
      );
    }
    const c = p.cover || {};
    return (
      '<div class="work-image cover cover-' + esc(c.theme || "blue") + '">' + badge +
      '<i class="' + esc(c.icon || "fas fa-code") + '"></i>' +
      (c.label ? '<span class="cover-stack">' + esc(c.label) + "</span>" : "") +
      "</div>"
    );
  }

  function actions(p) {
    const out = [];
    let first = true;
    function btn(href, label, external) {
      const cls = first ? "btn btn-branding btn-sm-pill" : "btn btn-branding-outline btn-sm-pill";
      first = false;
      out.push(
        '<a href="' + esc(href) + '" class="' + cls + '"' +
          (external ? ' target="_blank" rel="noopener"' : "") + ">" + label + "</a>"
      );
    }
    if (p.live) btn(p.live, '<i class="fas fa-arrow-up-right-from-square"></i> Live Demo', true);
    if (p.code) btn(p.code, '<i class="fab fa-github"></i> GitHub', true);
    if (p.caseStudy) btn(p.caseStudy, '<i class="fas fa-book-open"></i> Case Study', false);
    if (p.note) out.push('<span class="card-note"><i class="fas fa-lock"></i> ' + esc(p.note) + "</span>");
    return '<div class="card-actions">' + out.join("") + "</div>";
  }

  function card(p) {
    return (
      '<div class="col-lg-4 col-md-6 project-col" data-category="' + esc((p.categories || []).join(" ")) + '">' +
      '<div class="work-card spotlight' + (p.live ? " featured-card" : "") + '">' +
      media(p) +
      '<div class="work-card-body">' +
      '<div class="card-meta">' +
      (p.kicker ? '<span class="card-kicker">' + esc(p.kicker) + "</span>" : "") +
      (p.type ? '<span class="card-type">' + esc(p.type) + "</span>" : "") +
      "</div>" +
      "<h3>" + esc(p.title) + "</h3>" +
      "<p>" + esc(p.description) + "</p>" +
      '<div class="work-tags">' +
      (p.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") +
      "</div>" +
      actions(p) +
      "</div></div></div>"
    );
  }

  var moreCard =
    '<div class="col-lg-4 col-md-6 coming-col">' +
    '<a class="coming-card" href="https://github.com/faithndlovu" target="_blank" rel="noopener">' +
    '<span class="coming-icon"><i class="fas fa-plus"></i></span>' +
    "<h3>Explore more on GitHub</h3>" +
    "<p>Coursework, experiments and works in progress.</p>" +
    '<span class="project-link"><i class="fab fa-github"></i> github.com/faithndlovu</span>' +
    "</a></div>";

  root.ProjectCards = {
    workGrid: function (projects) {
      return projects.map(card).join("") + moreCard;
    },
    featured: function (projects) {
      return projects.filter(function (p) { return p.featured; }).slice(0, 3).map(card).join("");
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
