import { useRef } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { projects } from '../data/resume.js';

function TiltCard({ project }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${(-py * 8).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(px * 10).toFixed(2)}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.article
      ref={ref}
      className="project-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -8 }}
    >
      <div className="project-glow" />
      <h3>{project.title}</h3>
      <span className="project-date">{project.date}</span>
      <ul className="project-bullets">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="project-tags">
        {project.tags.map((t) => <span key={t}>{t}</span>)}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <Reveal as="h2" className="section-title" direction="fade"><span className="tag">03</span>Projects</Reveal>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i} direction={i % 2 === 0 ? 'left' : 'right'}>
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
