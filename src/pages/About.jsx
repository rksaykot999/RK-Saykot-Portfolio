import SEO from '../components/SEO';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, skills, education, experience } from '../data/portfolio';
import './About.css';

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref}>
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div
          className="skill-level"
          style={{ width: animate ? `${level}%` : '0%', transition: 'width 1s ease' }}
        ></div>
      </div>
    </li>
  );
}

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn more about RK Saykot — a Computer Engineering student, Full Stack Developer from Bangladesh with experience in React, Node.js, and PHP." keywords="About RK Saykot, Computer Engineering, Full Stack Developer, Bangladesh" />
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>About Me</h1>
            <p>Get to know more about my journey, skills, and passions</p>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="about-intro">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Hello, I'm RK Saykot</h2>
              <p>{personalInfo.bio}</p>
              <p>{personalInfo.bio2}</p>
              <p>{personalInfo.bio3}</p>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
            <div className="about-image">
              <img src={personalInfo.profileImage} alt="RK Saykot" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="education-experience">
        <div className="container">
          <h2 className="section-title">Education & Experience</h2>
          <div className="timeline-container">
            <div className="timeline-section">
              <h3>Education</h3>
              <div className="timeline">
                {education.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-date">{item.date}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <div className="timeline-subtitle">{item.subtitle}</div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="timeline-section">
              <h3>Experience</h3>
              <div className="timeline">
                {experience.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-date">{item.date}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <div className="timeline-subtitle">{item.subtitle}</div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills with Progress Bars */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-categories">
            {[
              { label: 'Frontend Development', icon: 'fas fa-code', items: skills.frontend },
              { label: 'Backend Development', icon: 'fas fa-server', items: skills.backend },
              { label: 'Database', icon: 'fas fa-database', items: skills.database },
              { label: 'Tools & Others', icon: 'fas fa-tools', items: skills.tools },
            ].map((cat, i) => (
              <div key={i} className="skill-category">
                <h3><i className={cat.icon}></i> {cat.label}</h3>
                <ul className="skill-list">
                  {cat.items.map((s, j) => (
                    <SkillBar key={j} name={s.name} level={s.level} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
