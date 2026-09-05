/**
 * Portfolio Runtime — Md. Dalour Hossan Saeed
 * Handles: scroll-spy, sidebar mouse spotlight, mobile nav, perf telemetry
 */

(function () {
  'use strict';

  // ── Performance telemetry ──────────────────────────────
  const t0 = performance.now();

  window.addEventListener('load', () => {
    const loadMs = Math.round(performance.now() - t0);
    const el = document.getElementById('load-time');
    if (el) el.textContent = 'Loaded in ' + loadMs + ' ms';
  });

  // ── Scroll-spy (4 sections) ────────────────────────────
  const sections = ['about', 'experience', 'projects', 'skills'];

  const sidebarLinks = {};
  const mobileLinks = {};

  sections.forEach(id => {
    sidebarLinks[id] = document.getElementById('nav-' + id);
    mobileLinks[id]  = document.querySelector('.mobile-nav a[href="#' + id + '"]');
  });

  function setActive(id) {
    sections.forEach(s => {
      const sl = sidebarLinks[s];
      const ml = mobileLinks[s];
      const isActive = s === id;
      if (sl) sl.classList.toggle('active', isActive);
      if (ml) ml.classList.toggle('active', isActive);
    });
  }

  // IntersectionObserver — fires when a section enters the top 25% of viewport
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    }
  );

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // ── Sidebar mouse spotlight ────────────────────────────
  const sidebar = document.getElementById('sidebar');

  if (sidebar && window.matchMedia('(min-width: 1025px)').matches) {
    document.addEventListener('mousemove', e => {
      const rect = sidebar.getBoundingClientRect();
      // Only update if cursor is within horizontal range of sidebar
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sidebar.style.setProperty('--mouse-x', x + 'px');
      sidebar.style.setProperty('--mouse-y', y + 'px');
    });
  }

  // ── Mobile nav toggle ─────────────────────────────────
  const toggle  = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen.toString());
      document.body.classList.toggle('menu-open', isOpen);
    });

    // Close nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // ── Smooth scroll for sidebar anchor links ────────────
  document.querySelectorAll('.sidebar-nav a, .mobile-nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

}());
