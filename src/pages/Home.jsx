import SEO from '../components/SEO';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, skillCards, projects } from '../data/portfolio';
import './Home.css';

// Typewriter hook
function useTypewriter(texts) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length) {
      speed = 1500;
      setTimeout(() => setIsDeleting(true), speed);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
      setCharIndex(0); // ✅ Fix: explicitly reset charIndex
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(current.substring(0, isDeleting ? charIndex - 1 : charIndex + 1));
      setCharIndex((c) => (isDeleting ? c - 1 : c + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return displayed;
}

// Particle canvas
function ParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = canvas.width = canvas.offsetWidth || window.innerWidth;
    let H = canvas.height = canvas.offsetHeight || window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let animId; // ✅ Fix: declare animId before use

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > W) p.dx *= -1;
        if (p.y < 0 || p.y > H) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123,92,244,${p.opacity})`;
        ctx.fill();
      });

      // Lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(123,92,244,${0.3 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

// Animated card on scroll
function AnimatedCard({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const typeText = useTypewriter(personalInfo.typewriterTexts);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="RK Saykot — Passionate Web Developer & Computer Engineering student from Bangladesh. Building modern, responsive websites."
        keywords="RK Saykot, Web Developer, Portfolio, Bangladesh, Frontend Developer"
      />
      {/* Hero */}
      <section id="home" className="hero-section">
        <ParticlesBg />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Hi, I'm <span style={{ color: 'var(--primary)' }}>RK Saykot</span></h1>
              <div className="typewriter">
                <span className="typewriter-text">{typeText}</span>
                <span className="cursor">|</span>
              </div>
              <p>I create modern, responsive, and user-friendly websites that deliver exceptional user experiences and drive business results.</p>
              <div className="hero-btns">
                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                <a
                  href="/RK-Saykot-Portfolio/documents/Resume.pdf"
                  download="RK_Saykot_Resume"
                  className="btn btn-secondary"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-bg"></div>
              <img src={personalInfo.profileImage} alt="RK Saykot" className="profile-img" />
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* About Preview */}
      <section id="about-preview" className="about-preview-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I'm a Computer Engineering student and aspiring Web Developer passionate about building elegant and functional applications. I love learning new technologies and turning ideas into reality.</p>
              <p>With a strong foundation in both frontend and backend development, I create digital solutions that are not only visually appealing but also highly functional and user-friendly.</p>
              <Link to="/about" className="btn btn-primary">Read More</Link>
            </div>
            <div className="about-image">
              <img src={personalInfo.aboutImage} alt="About" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section id="skills" className="skills-preview-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            {skillCards.map((card, i) => (
              <AnimatedCard key={i} className="skill-card" delay={i * 150}>
                <div className="skill-icon"><i className={card.icon}></i></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </AnimatedCard>
            ))}
          </div>
          <div className="view-all">
            <Link to="/skills" className="btn btn-secondary">View All Skills</Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects-preview-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-container">
            {featuredProjects.map((project, i) => (
              <AnimatedCard key={project.id} className="project-card" delay={i * 200}>
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noreferrer">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i> View Code
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Let's build something amazing together</h2>
            <p>I'm always open to discussing new opportunities and interesting projects. Let's turn your ideas into reality!</p>
            <div className="cta-btns">
              <Link to="/contact" className="btn btn-primary">Contact Me</Link>
              <a
                href="/Documents/My Resume.pdf"
                download="RK_Saykot_Resume"
                className="btn btn-secondary"
              >
                Download Resume
              </a> {/* ✅ Fix: path updated from "/My CV/My Resume.pdf" */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}