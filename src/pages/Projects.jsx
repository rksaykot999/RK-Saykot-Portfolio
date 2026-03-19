import SEO from '../components/SEO';
import { useState } from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

const filters = ['all', 'web', 'system'];

export default function Projects() {
  const [active, setActive] = useState('all');

  const featured = projects.find((p) => p.featured);
  const filtered = projects.filter((p) => active === 'all' || p.category === active);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>My Projects</h1>
            <p>Explore my portfolio of creative and technical projects</p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featured && (
        <section className="featured-project">
          <div className="container">
            <div className="featured-container">
              <div className="featured-image">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="featured-content">
                <span className="featured-badge">Featured Project</span>
                <h2>{featured.title}</h2>
                <p>{featured.desc}</p>
                {featured.stats && (
                  <div className="featured-stats">
                    <div className="stat-item">
                      <span className="stat-number">{featured.stats.efficiency}</span>
                      <span className="stat-label">Efficiency</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">{featured.stats.users}</span>
                      <span className="stat-label">Users</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">{featured.stats.rating}</span>
                      <span className="stat-label">Rating</span>
                    </div>
                  </div>
                )}
                <div className="project-tech">
                  {featured.tags.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                </div>
                <div className="featured-links">
                  <a href={featured.liveUrl} className="btn btn-primary" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={featured.githubUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="filter-container">
            <h2 className="section-title">Project Portfolio</h2>
            <p>Filter projects by category</p>
            <div className="filter-buttons">
              {filters.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${active === f ? 'active' : ''}`}
                  onClick={() => setActive(f)}
                >
                  {f === 'all' ? 'All Projects' : f === 'web' ? 'Web Development' : 'Management Systems'}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filtered.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="overlay-links">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category">
                    {project.category === 'system' ? 'Management System' : 'Web Development'}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tags.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
