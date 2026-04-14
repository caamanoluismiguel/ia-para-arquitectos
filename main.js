/* ============================================
   IA para Arquitectos — Isthmus Norte
   Interactions & scroll animations
   ============================================ */

(function () {
  "use strict";

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navLinks.classList.toggle("open");

      // Prevent body scroll when menu open
      document.body.style.overflow = !isOpen ? "hidden" : "";
    });

    // Close on link click
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
      });
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("open")) {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
        document.body.style.overflow = "";
        navToggle.focus();
      }
    });
  }

  // ---- Day card expand/collapse ----
  document.querySelectorAll(".day-card").forEach(function (card) {
    var toggle = card.querySelector(".day-toggle");
    if (!toggle) return;

    // Allow clicking anywhere on the card header area
    card.addEventListener("click", function (e) {
      // Don't toggle if clicking a link inside
      if (e.target.closest("a")) return;
      toggleCard(card, toggle);
    });

    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCard(card, toggle);
      }
    });
  });

  function toggleCard(card, toggle) {
    var isOpen = card.classList.contains("open");
    // Close other cards
    document.querySelectorAll(".day-card.open").forEach(function (other) {
      if (other !== card) {
        other.classList.remove("open");
        var otherToggle = other.querySelector(".day-toggle");
        if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
      }
    });
    card.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(!isOpen));
  }

  // ---- Resource card expand/collapse ----
  document.querySelectorAll(".resource-card").forEach(function (card) {
    var toggle = card.querySelector(".resource-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = card.classList.contains("open");
      card.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.textContent = isOpen ? "Ver contenido" : "Ocultar";
    });
  });

  // ---- Scroll reveal (IntersectionObserver) ----
  // Add reveal classes to elements
  var revealSelectors = [
    ".philosophy-card",
    ".philosophy-transformation",
    ".day-card",
    ".tool-card",
    ".deliverable-card",
    ".requirement-item",
    ".eval-criterion",
    ".progression",
    ".requirement-main",
    ".resource-card",
    ".glossary-card",
    ".tools-pipeline",
  ];

  revealSelectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add("reveal");
    });
  });

  // Stagger grids
  [
    ".philosophy-grid",
    ".days-grid",
    ".tools-grid",
    ".deliverables-grid",
    ".requirement-items",
    ".evaluation-grid",
    ".resources-grid",
    ".glossary-grid",
  ].forEach(function (sel) {
    var el = document.querySelector(sel);
    if (el) el.classList.add("reveal-stagger");
  });

  // Observe
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    document
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach(function (el) {
        observer.observe(el);
      });
  } else {
    // Fallback: show everything
    document
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach(function (el) {
        el.classList.add("visible");
      });
  }

  // ---- Active nav highlight ----
  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navAnchors.forEach(function (a) {
              if (a.getAttribute("href") === "#" + id) {
                a.style.color = "var(--terra-light)";
              } else {
                a.style.color = "";
              }
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  // ---- Nav background on scroll ----
  var nav = document.getElementById("nav");
  var lastScrollY = 0;

  function onScroll() {
    var y = window.scrollY;
    if (nav) {
      if (y > 100) {
        nav.style.borderBottomColor = "rgba(184, 168, 152, 0.18)";
      } else {
        nav.style.borderBottomColor = "";
      }
    }
    lastScrollY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Smooth scroll offset for fixed nav ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var offset = 80; // nav height + padding
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
})();
