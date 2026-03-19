import SEO from '../components/SEO';
import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

const techStack = [
  { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
  { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
  { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
  { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
  { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
  { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
  { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
  { name: 'GitHub', icon: 'fab fa-github', color: '#ffffff' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' },
  { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
  { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
];

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
    <div ref={ref} className="skill-row">
      <div className="skill-row-header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: animate ? `${level}%` : '0%', transition: 'width 1.2s ease' }}
        ></div>
      </div>
    </div>
  );
}

const categories = [
  { label: 'Frontend', icon: 'fab fa-html5', key: 'frontend' },
  { label: 'Backend', icon: 'fas fa-server', key: 'backend' },
  { label: 'Database', icon: 'fas fa-database', key: 'database' },
  { label: 'Tools', icon: 'fas fa-tools', key: 'tools' },
];

export default function Skills() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>My Skills</h1>
            <p>Technologies and tools I work with to bring ideas to life</p>
          </div>
        </div>
      </section>

      {/* Skills with bars */}
      <section className="skills-overview">
        <div className="container">
          <div className="skills-intro">
            <h2 className="section-title">Technical Expertise</h2>
            <p>A comprehensive overview of my technical skills and proficiency levels</p>
          </div>
          <div className="skills-grid">
            {categories.map((cat) => (
              <div key={cat.key} className="skill-category-card">
                <div className="category-header">
                  <div className="category-icon"><i className={cat.icon}></i></div>
                  <h3>{cat.label}</h3>
                </div>
                {skills[cat.key].map((s, i) => (
                  <SkillBar key={i} name={s.name} level={s.level} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Icons */}
      <section className="tech-stack">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <p className="tech-subtitle">Technologies I use regularly in my projects</p>
          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="tech-item">
                <i className={tech.icon} style={{ color: tech.color }}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
