import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/resume.js';
import { HORIZONTAL_PANELS } from '../data/panels.js';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

// The sections after Hero live inside a pinned, horizontally-scrolling
// track (see HorizontalScroll.jsx) — they all sit at the same vertical
// document position, so "which one is active" and "scroll to this one"
// have to be derived from progress through that track's scroll range
// rather than each section's own offsetTop.
function getTrackProgress() {
  const wrapper = document.getElementById('h-scroll');
  if (!wrapper) return null;
  const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
  const scrollable = wrapper.offsetHeight - window.innerHeight;
  return { wrapperTop, scrollable };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const track = getTrackProgress();
      if (!track || window.scrollY < track.wrapperTop) {
        setActive('home');
        return;
      }
      const progress = track.scrollable > 0
        ? Math.min(1, Math.max(0, (window.scrollY - track.wrapperTop) / track.scrollable))
        : 0;
      const idx = Math.round(progress * (HORIZONTAL_PANELS.length - 1));
      setActive(HORIZONTAL_PANELS[idx]);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goToSection = (id) => {
    setOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const idx = HORIZONTAL_PANELS.indexOf(id);
    const track = getTrackProgress();
    if (idx === -1 || !track) return;
    const progress = idx / (HORIZONTAL_PANELS.length - 1);
    window.scrollTo({ top: track.wrapperTop + progress * track.scrollable, behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => { e.preventDefault(); goToSection('home'); }}
        >
          <span className="logo-mark">{profile.initials}</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); goToSection(link.href.slice(1)); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href={profile.resumeFile}
          download
          className="btn btn-nav-resume"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          Resume
        </motion.a>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
