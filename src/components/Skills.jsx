import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { skills, learning, education } from '../data/resume.js';

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="container">
        <Reveal as="h2" className="section-title" direction="fade"><span className="tag">04</span>Skills</Reveal>

        <div className="skills-groups">
          {skills.map((group, gi) => (
            <Reveal key={group.group} delay={0.05 * gi} direction={gi % 2 === 0 ? 'left' : 'right'} className="skill-group">
              <h3 className="skill-group-title">{group.group}</h3>
              <div className="skills-wrap">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.03 * i, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="edu-lang-grid">
          <Reveal className="edu-block" delay={0.1} direction="left">
            <h3 className="sub-title">Education</h3>
            <div className="edu-item">
              <h4>{education.degree}</h4>
              <p>{education.school} · {education.place}</p>
              <p className="edu-meta">{education.meta}</p>
            </div>
          </Reveal>

          <Reveal className="lang-block" delay={0.15} direction="right">
            <h3 className="sub-title">Currently Learning</h3>
            <div className="lang-pills">
              {learning.map((l) => <span key={l}>{l}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
