import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { summary, stats } from '../data/resume.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="h2" className="section-title" direction="fade"><span className="tag">01</span>Summary</Reveal>
        <Reveal as="p" className="about-text" delay={0.05} direction="left">{summary}</Reveal>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i} direction={i % 2 === 0 ? 'left' : 'right'} className="stat-card-wrap">
              <motion.div className="stat-card" whileHover={{ y: -6 }}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
