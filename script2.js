/* ============================================================
   XCYLLY CAMPO — MINIMALIST PORTFOLIO JS
   Features: Nav, Scroll Reveal, Skill Bars, Form
   ============================================================ */

'use strict';

/* ===== 1. NAV ===== */
(function () {
  const nav    = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const links  = document.getElementById('nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 30);
  }, { passive: true });

  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();


/* ===== 2. SCROLL REVEAL ===== */
(function () {
  // Trigger hero fade-ups on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('in');
    });
  });

  // Reveal elements on scroll
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

  els.forEach(el => obs.observe(el));
})();


/* ===== 3. SKILL BARS ===== */
(function () {
  const bars = document.querySelectorAll('.skill-bar');
  if (!bars.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.getAttribute('data-w') || 0;
        setTimeout(() => { e.target.style.width = w + '%'; }, 150);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.6 });

  bars.forEach(b => obs.observe(b));
})();


/* ===== 4. CONTACT FORM ===== */
(function () {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending…';
    btn.style.opacity = '0.6';
    btn.style.pointerEvents = 'none';

    // Simulate send — replace with EmailJS / Formspree
    setTimeout(() => {
      status.textContent = '✓ Message received. Talk soon.';
      btn.textContent = 'Send message';
      btn.style.opacity = '';
      btn.style.pointerEvents = '';
      form.reset();
      setTimeout(() => { status.textContent = ''; }, 5000);
    }, 1600);
  });
})();


/* ===== 5. SMOOTH ACTIVE NAV LINKS ===== */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navAs    = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    const y = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const id  = sec.getAttribute('id');
      const a   = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!a) return;
      const active = y >= top && y < top + sec.offsetHeight;
      a.style.color = active ? 'var(--ink)' : '';
    });
  }, { passive: true });
})();


/* ===== 6. PROJECT ITEMS — subtle underline hover ===== */
(function () {
  // Add a hover line effect to project items
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.paddingLeft = '12px';
      item.style.transition  = 'padding 0.3s cubic-bezier(0.25,0.46,0.45,0.94)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.paddingLeft = '';
    });
  });
})();
