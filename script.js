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
      menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          navLinks.classList.remove("open");
        });
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
