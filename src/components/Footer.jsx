import { profile } from '../data/resume.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} {profile.name}. Built with React &amp; Three.js.</p>
        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noopener">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
