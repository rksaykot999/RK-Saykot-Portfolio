import { personalInfo } from '../data/portfolio';
import './FloatingSocial.css';

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
      <a href={personalInfo.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a href={personalInfo.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
      <a href={personalInfo.instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
    </div>
  );
}
