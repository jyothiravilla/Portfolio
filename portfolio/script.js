// Only enable scroll-reveal animations if the browser supports IntersectionObserver,
// so content is never left invisible on older/no-JS environments.
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-ready');
}

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Nav shadow on scroll =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// ===== Scroll-reveal for .reveal elements =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
  revealObserver.observe(el);
});

// ===== Timeline copper trace draws in when section is visible =====
const timelineTrace = document.getElementById('timelineTrace');
if (timelineTrace) {
  const traceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timelineTrace.classList.add('in-view');
        traceObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  traceObserver.observe(timelineTrace);
}

// ===== Timeline nodes light up individually as each item scrolls in =====
document.querySelectorAll('.tl-item').forEach(item => {
  const nodeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        nodeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  nodeObserver.observe(item);
});
