import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="footer-logo">RK <span>Saykot</span></Link>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="social-icons">
            <a href={personalInfo.linkedin} className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href={personalInfo.github} className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href={personalInfo.twitter} className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href={personalInfo.instagram} className="social-icon" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 RK Saykot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
