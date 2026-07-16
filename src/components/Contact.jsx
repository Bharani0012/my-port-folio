import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { profile } from '../data/resume.js';

const CARDS = [
  { icon: '✉', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: '☎', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: 'in', label: 'LinkedIn', value: 'bharani-tharan', href: profile.linkedin },
  { icon: '⌥', label: 'GitHub', value: profile.githubLabel, href: profile.github },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="rain-lines" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div className="container contact-inner">
        <Reveal as="h2" className="section-title centered" direction="fade"><span className="tag">05</span>Get In Touch</Reveal>
        <Reveal as="p" className="contact-sub" delay={0.05} direction="fade">
          Have an opportunity, project, or just want to say hi? My inbox is open.
        </Reveal>

        <div className="contact-grid">
          {CARDS.map((c, i) => (
            <Reveal key={c.label} delay={0.06 * i} direction={i % 2 === 0 ? 'left' : 'right'}>
              <motion.a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener"
                className="contact-card"
                whileHover={{ y: -8 }}
              >
                <span className="contact-icon">{c.icon}</span>
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
