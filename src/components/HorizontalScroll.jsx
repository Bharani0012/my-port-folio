import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import { HORIZONTAL_PANELS } from '../data/panels.js';

const PANEL_COMPONENTS = {
  about: About,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  contact: Contact,
};

export default function HorizontalScroll() {
  const wrapperRef = useRef(null);
  const count = HORIZONTAL_PANELS.length;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(count - 1) * 100}vw`]);

  return (
    <section
      className="h-scroll-wrapper"
      id="h-scroll"
      ref={wrapperRef}
      style={{ height: `${count * 100}vh` }}
    >
      <div className="h-scroll-sticky">
        <motion.div className="h-scroll-track" style={{ x }}>
          {HORIZONTAL_PANELS.map((key) => {
            const PanelComponent = PANEL_COMPONENTS[key];
            return (
              <div className={`h-panel h-panel--${key}`} key={key}>
                <PanelComponent />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
