import Reveal from './Reveal.jsx';
import { experience } from '../data/resume.js';

export default function Experience() {
  return (
    <section className="section alt" id="experience">
      <div className="container">
        <Reveal as="h2" className="section-title" direction="fade"><span className="tag">02</span>Experience</Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal as="div" key={job.role + job.org} delay={0.08 * i} direction={i % 2 === 0 ? 'left' : 'right'} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <h3>{job.role}</h3>
                  <span className="timeline-date">{job.date}</span>
                </div>
                <p className="timeline-org">{job.org}{job.context ? ` · ${job.context}` : ''}</p>
                <ul className="timeline-list">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                {job.tech && <p className="timeline-tech"><strong>Tech stack:</strong> {job.tech}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
