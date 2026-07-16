import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CIRCUMFERENCE = 144.5;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(CIRCUMFERENCE);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setOffset(CIRCUMFERENCE * (1 - progress));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      className={`to-top ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <svg className="to-top-ring" width="52" height="52" viewBox="0 0 52 52">
        <circle className="to-top-track" cx="26" cy="26" r="23" />
        <circle className="to-top-progress" cx="26" cy="26" r="23" style={{ strokeDashoffset: offset }} />
      </svg>
      <span className="to-top-arrow" aria-hidden="true">↑</span>
    </motion.button>
  );
}
