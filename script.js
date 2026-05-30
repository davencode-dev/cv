/* ============================================================
   David Vendrell — Interactive CV · interactions
   Vanilla JS, no dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ---- 1. Reveal on scroll ---- */
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );
  reveals.forEach((el) => revealObs.observe(el));

  /* ---- 2. Active rail dot ---- */
  const sections = document.querySelectorAll('.chapter');
  const dots = document.querySelectorAll('.rail__dot');
  const dotMap = {};
  dots.forEach((d) => { dotMap[d.getAttribute('href').slice(1)] = d; });

  const railObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          dots.forEach((d) => d.classList.remove('is-active'));
          const id = e.target.id;
          if (dotMap[id]) dotMap[id].classList.add('is-active');
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => railObs.observe(s));

  /* ---- 3. Count-up numbers ---- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (isNaN(target)) return;
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(target * eased).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('en-US');
    }
    requestAnimationFrame(tick);
  }

  const countEls = document.querySelectorAll('[data-count]');
  const countObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          countObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  countEls.forEach((el) => countObs.observe(el));

  /* ---- 4. Subtle parallax on intro counter (desktop only) ---- */
  const counter = document.querySelector('.intro__counter');
  if (counter && window.matchMedia('(min-width:881px)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        counter.style.transform = `translateY(${y * 0.15}px)`;
      }
    }, { passive: true });
  }
})();
