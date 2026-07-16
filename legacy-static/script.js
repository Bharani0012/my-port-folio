// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-link');
const setActive = () => {
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) current = sec.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive);
setActive();

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Back to top button with scroll-progress ring
const toTop = document.getElementById('toTop');
const toTopProgress = document.querySelector('.to-top-progress');
const RING_CIRCUMFERENCE = 144.5;
window.addEventListener('scroll', () => {
  toTop.classList.toggle('visible', window.scrollY > 500);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  toTopProgress.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - progress);
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
