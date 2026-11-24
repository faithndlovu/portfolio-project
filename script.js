// ===== THEME (DARK-FIRST) =====
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");

  // Dark-first: default to dark unless the visitor previously chose light
  const initial = saved || "dark";
  root.setAttribute("data-theme", initial);

  function syncIcon(theme) {
    const icon = document.querySelector("#theme-toggle i");
    if (!icon) return;
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  document.addEventListener("DOMContentLoaded", function () {
    // ===== RENDER PROJECT CARDS from projects-data.js =====
    // Runs first so the stagger/spotlight/filter code below sees the cards.
    (function renderProjects() {
      const projects = window.PROJECTS || [];
      const workGrid = document.getElementById("project-grid");
      const featuredGrid = document.getElementById("featured-grid");
      if (!projects.length || (!workGrid && !featuredGrid)) return;

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
        if (p.phone) {
          return (
            '<div class="work-image phone-stage">' + badge +
            '<div class="phone-device"><span class="phone-notch"></span>' +
            '<img src="' + esc(p.phone) + '" alt="' + esc(p.imageAlt || p.title) + '" loading="lazy" /></div></div>'
          );
        }
        if (p.image) {
          return (
            '<div class="work-image">' + badge +
            '<img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt || p.title) + '" loading="lazy" /></div>'
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
        if (p.live) btn(p.live, '<i class="fas fa-play"></i> Live Demo', true);
        if (p.code) btn(p.code, '<i class="fab fa-github"></i> Code', true);
        if (p.caseStudy) btn(p.caseStudy, "Case Study", false);
        if (p.note) out.push('<span class="card-note"><i class="fas fa-lock"></i> ' + esc(p.note) + "</span>");
        return '<div class="card-actions">' + out.join("") + "</div>";
      }

      function card(p, colClass) {
        return (
          '<div class="' + colClass + ' project-col" data-category="' + esc((p.categories || []).join(" ")) + '">' +
          '<div class="work-card spotlight' + (p.live ? " featured-card" : "") + '">' +
          media(p) +
          '<div class="work-card-body">' +
          (p.kicker ? '<p class="card-kicker">' + esc(p.kicker) + "</p>" : "") +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.description) + "</p>" +
          '<div class="work-tags">' +
          (p.tags || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") +
          "</div>" +
          actions(p) +
          "</div></div></div>"
        );
      }

      if (workGrid) {
        workGrid.innerHTML =
          projects.map(function (p) { return card(p, "col-lg-4 col-md-6"); }).join("") +
          '<div class="col-lg-4 col-md-6 coming-col">' +
          '<a class="coming-card" href="https://github.com/faithndlovu" target="_blank" rel="noopener">' +
          '<span class="coming-icon"><i class="fas fa-plus"></i></span>' +
          "<h3>Explore more on GitHub</h3>" +
          "<p>Coursework, experiments and works in progress.</p>" +
          '<span class="project-link"><i class="fab fa-github"></i> github.com/faithndlovu</span>' +
          "</a></div>";
      }

      if (featuredGrid) {
        featuredGrid.innerHTML = projects
          .filter(function (p) { return p.featured; })
          .slice(0, 3)
          .map(function (p) { return card(p, "col-lg-4 col-md-6"); })
          .join("");
      }
    })();

    syncIcon(root.getAttribute("data-theme"));

    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        const next =
          root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        syncIcon(next);
      });
    }

    // ===== SCROLL PROGRESS BAR =====
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    function updateProgress() {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = pct + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    // ===== MOBILE NAV TOGGLE =====
    const menuBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
      const menuIcon = menuBtn.querySelector("i");
      function setMenu(open) {
        navLinks.classList.toggle("open", open);
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        if (menuIcon) menuIcon.className = open ? "fas fa-xmark" : "fas fa-bars";
      }
      menuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        setMenu(!navLinks.classList.contains("open"));
      });
      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setMenu(false);
        });
      });
      document.addEventListener("click", function (e) {
        if (!navLinks.contains(e.target)) setMenu(false);
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") setMenu(false);
      });
    }

    // ===== HERO PARALLAX GLOW (follows cursor subtly) =====
    const hero = document.querySelector(".hero");
    if (hero && window.matchMedia("(pointer: fine)").matches) {
      hero.addEventListener("mousemove", function (e) {
        const rect = hero.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        hero.style.setProperty("--mx", x + "px");
        hero.style.setProperty("--my", y + "px");
      });
    }

    // ===== SCROLL REVEAL =====
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("active");
      });
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ===== STARFIELD (twinkling dots behind the hero + projects band) =====
    document.querySelectorAll(".starfield").forEach(function (field) {
      const count = window.innerWidth < 600 ? 40 : 90;
      const frag = document.createDocumentFragment();
      for (let i = 0; i < count; i++) {
        const s = document.createElement("span");
        s.className = "star";
        const size = Math.random() < 0.15 ? 3 : Math.random() < 0.5 ? 2 : 1;
        s.style.width = s.style.height = size + "px";
        s.style.left = Math.random() * 100 + "%";
        s.style.top = Math.random() * 100 + "%";
        s.style.setProperty("--d", 3 + Math.random() * 4 + "s");
        s.style.setProperty("--delay", -Math.random() * 6 + "s");
        frag.appendChild(s);
      }
      field.appendChild(frag);
    });

    // ===== STAGGERED REVEAL (children of [data-stagger] fade in one by one) =====
    const staggerGroups = document.querySelectorAll("[data-stagger]");
    staggerGroups.forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.setProperty("--i", i);
      });
    });
    function settle(group) {
      group.classList.add("active");
      // Once every child has entered, drop the delays so hovers feel instant
      const total = group.children.length * 90 + 800;
      setTimeout(function () {
        group.classList.add("settled");
      }, total);
    }
    if ("IntersectionObserver" in window && !reduceMotion) {
      const staggerObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              settle(entry.target);
              staggerObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      staggerGroups.forEach(function (g) {
        staggerObserver.observe(g);
      });
    } else {
      staggerGroups.forEach(settle);
    }

    // ===== COUNT-UP STATS =====
    const counters = document.querySelectorAll("[data-count]");
    function countUp(el) {
      const target = parseInt(el.getAttribute("data-count"), 10) || 0;
      if (reduceMotion || target <= 1) {
        el.textContent = target;
        return;
      }
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      el.textContent = "0";
      requestAnimationFrame(tick);
    }
    if ("IntersectionObserver" in window && counters.length) {
      const counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              countUp(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach(function (c) {
        counterObserver.observe(c);
      });
    }

    // ===== TYPING EFFECT (hero role rotator) =====
    const typed = document.getElementById("typed");
    if (typed && !reduceMotion) {
      const words = (typed.getAttribute("data-words") || "")
        .split("|")
        .filter(Boolean);
      let wordIndex = 0;
      let charIndex = words[0] ? words[0].length : 0;
      let deleting = true;
      function typeStep() {
        if (deleting) {
          charIndex--;
          if (charIndex <= 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
          }
        } else {
          charIndex++;
        }
        const current = words[wordIndex];
        typed.textContent = current.slice(0, Math.max(charIndex, 0));
        let delay = deleting ? 45 : 85;
        if (!deleting && charIndex === current.length) {
          deleting = true;
          delay = 1800;
        }
        if (!deleting && charIndex === 0) delay = 300;
        setTimeout(typeStep, delay);
      }
      if (words.length > 1) setTimeout(typeStep, 2200);
    }

    // ===== SPOTLIGHT CARDS (glow follows the cursor) =====
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".spotlight").forEach(function (card) {
        card.addEventListener("pointermove", function (e) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--sx", e.clientX - r.left + "px");
          card.style.setProperty("--sy", e.clientY - r.top + "px");
        });
      });
    }

    // ===== BACK TO TOP =====
    const topBtn = document.createElement("button");
    topBtn.className = "back-to-top";
    topBtn.setAttribute("aria-label", "Back to top");
    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(topBtn);
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    window.addEventListener(
      "scroll",
      function () {
        topBtn.classList.toggle("show", window.scrollY > 600);
      },
      { passive: true }
    );

    // ===== PROJECT FILTERING (Work page) =====
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCols = document.querySelectorAll(".project-col");
    if (filterBtns.length && projectCols.length) {
      const emptyMsg = document.getElementById("filter-empty");

      // Show how many projects sit in each category
      filterBtns.forEach(function (btn) {
        const f = btn.getAttribute("data-filter");
        const n = Array.prototype.filter.call(projectCols, function (col) {
          return f === "all" || col.getAttribute("data-category").split(" ").indexOf(f) !== -1;
        }).length;
        const c = btn.querySelector(".count");
        if (c) c.textContent = n;
      });

      function applyFilter(f) {
        let shown = 0;
        projectCols.forEach(function (col) {
          const match =
            f === "all" || col.getAttribute("data-category").split(" ").indexOf(f) !== -1;
          if (match) {
            shown++;
            col.classList.remove("is-hidden");
            requestAnimationFrame(function () {
              col.classList.remove("is-hiding");
            });
          } else {
            col.classList.add("is-hiding");
            setTimeout(function () {
              if (col.classList.contains("is-hiding")) col.classList.add("is-hidden");
            }, reduceMotion ? 0 : 300);
          }
        });
        if (emptyMsg) emptyMsg.hidden = shown > 0;
      }

      filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          filterBtns.forEach(function (b) {
            b.classList.remove("active");
            b.setAttribute("aria-pressed", "false");
          });
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
          applyFilter(btn.getAttribute("data-filter"));
        });
      });
    }

    // ===== LIVE GITHUB FEED (Work page) =====
    const repoBox = document.getElementById("github-repos");
    if (repoBox) {
      const user = repoBox.getAttribute("data-user");
      const langColors = {
        JavaScript: "#f1e05a",
        TypeScript: "#3178c6",
        PHP: "#4F5D95",
        Dart: "#00B4AB",
        HTML: "#e34c26",
        CSS: "#563d7c",
        Blade: "#f7523f",
        Python: "#3572A5",
      };
      function esc(s) {
        const d = document.createElement("div");
        d.textContent = s == null ? "" : String(s);
        return d.innerHTML;
      }
      function timeAgo(iso) {
        const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
        if (days < 1) return "today";
        if (days < 30) return days + (days === 1 ? " day ago" : " days ago");
        const months = Math.floor(days / 30);
        if (months < 12) return months + (months === 1 ? " month ago" : " months ago");
        const years = Math.floor(months / 12);
        return years + (years === 1 ? " year ago" : " years ago");
      }
      fetch("https://api.github.com/users/" + encodeURIComponent(user) + "/repos?per_page=100&sort=pushed")
        .then(function (r) {
          if (!r.ok) throw new Error("GitHub " + r.status);
          return r.json();
        })
        .then(function (repos) {
          const list = repos
            .filter(function (r) {
              return !r.fork && (window.HIDDEN_REPO_IDS || []).indexOf(r.id) === -1;
            })
            .slice(0, 6);
          if (!list.length) throw new Error("empty");
          repoBox.innerHTML = list
            .map(function (r) {
              const lang = r.language
                ? '<span><span class="lang-dot" style="background:' +
                  (langColors[r.language] || "#94a3b8") +
                  '"></span>' + esc(r.language) + "</span>"
                : "";
              const live = r.homepage
                ? '<span><i class="fas fa-globe"></i> Live site</span>'
                : "";
              return (
                '<div class="col-lg-4 col-md-6"><a class="repo-card" href="' +
                esc(r.html_url) +
                '" target="_blank" rel="noopener"><h3><i class="fas fa-book-bookmark"></i>' +
                esc(r.name) +
                "</h3><p>" +
                esc(r.description || "No description yet — click to view the code.") +
                '</p><div class="repo-meta">' +
                lang +
                '<span><i class="fas fa-star"></i> ' +
                esc(r.stargazers_count) +
                '</span><span><i class="fas fa-clock-rotate-left"></i> ' +
                esc(timeAgo(r.pushed_at)) +
                "</span>" +
                live +
                "</div></a></div>"
              );
            })
            .join("");
        })
        .catch(function () {
          repoBox.innerHTML =
            '<div class="col-12 text-center github-error">Couldn\'t load repositories right now — ' +
            '<a href="https://github.com/' + esc(user) + '" target="_blank" rel="noopener">see them on GitHub</a>.</div>';
        });
    }

    // ===== CONTACT FORM (submits to Formspree) =====
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const status = document.getElementById("form-status");
        const btn = form.querySelector('button[type="submit"]');
        const original = btn ? btn.textContent : "";

        function showStatus(message, isError) {
          if (!status) return;
          status.textContent = message;
          status.classList.toggle("error", !!isError);
          status.classList.add("show");
        }

        if (btn) {
          btn.disabled = true;
          btn.textContent = "Sending…";
        }

        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { Accept: "application/json" },
          });

          if (response.ok) {
            showStatus(
              "Thank you! Your message has been sent — I'll get back to you soon.",
              false
            );
            form.reset();
          } else {
            const data = await response.json().catch(function () {
              return {};
            });
            const msg =
              data.errors && data.errors.length
                ? data.errors.map(function (er) {
                    return er.message;
                  }).join(", ")
                : "Sorry, something went wrong. Please try again or email me directly.";
            showStatus(msg, true);
          }
        } catch (err) {
          showStatus(
            "Network error — please try again or email me directly at nfaithlubelihle@gmail.com.",
            true
          );
        } finally {
          if (btn) {
            btn.disabled = false;
            btn.textContent = original;
          }
        }
      });
    }
  });
})();
