import { motion } from 'framer-motion';
import HeroOrb from './HeroOrb.jsx';
import { profile } from '../data/resume.js';
import photo from '../assets/bharanitharan.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <motion.div className="hero-copy" variants={container} initial="hidden" animate="show">
          <motion.p className="hero-eyebrow" variants={item}>Hey, I'm</motion.p>
          <motion.h1 className="hero-title" variants={item}>
            <span className="highlight">{profile.name}</span>
          </motion.h1>
          <motion.p className="hero-role" variants={item}>{profile.role}</motion.p>
          <motion.p className="hero-tagline" variants={item}>{profile.tagline}</motion.p>

          <motion.div className="hero-meta" variants={item}>
            <span>📍 {profile.location}</span>
            <span className="dot">·</span>
            <span>{profile.locationNote}</span>
          </motion.div>

          <motion.div className="hero-actions" variants={item}>
            <motion.a
              href={profile.resumeFile}
              download
              className="btn btn-primary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume <span aria-hidden="true">→</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-ghost"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div className="hero-socials" variants={item}>
            <a href={`mailto:${profile.email}`} className="social-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>
            </a>
            <a href={profile.github} target="_blank" rel="noopener" className="social-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>
            </a>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="social-btn" aria-label="Phone">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.65 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.42a2 2 0 0 1 2.11-.45c.86.31 1.75.53 2.65.65A2 2 0 0 1 22 16.92Z"/></svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stage"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <HeroOrb />
          <div className="hero-photo-wrap">
            <img src={photo} alt={profile.name} className="hero-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
