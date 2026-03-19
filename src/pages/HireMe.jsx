import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolio';
import './HireMe.css';

const services = [
  { icon: 'fas fa-laptop-code', title: 'Web Development', desc: 'Custom websites and web applications built with modern technologies.' },
  { icon: 'fas fa-mobile-alt', title: 'Responsive Design', desc: 'Mobile-first designs that look great on all devices and screen sizes.' },
  { icon: 'fas fa-server', title: 'Backend Development', desc: 'Robust server-side solutions with Node.js, PHP, and databases.' },
  { icon: 'fas fa-database', title: 'Database Design', desc: 'Efficient database architecture and optimization for your applications.' },
  { icon: 'fas fa-paint-brush', title: 'UI/UX Design', desc: 'Intuitive and visually appealing interfaces with great user experience.' },
  { icon: 'fas fa-cogs', title: 'Technical Consulting', desc: 'Expert advice and guidance for your technology projects.' },
];

const packages = [
  {
    name: 'Basic',
    price: '$99',
    color: '',
    features: ['Single Page Website', 'Responsive Design', '3 Revisions', '1 Week Delivery', 'Basic SEO'],
  },
  {
    name: 'Standard',
    price: '$249',
    color: 'featured',
    features: ['Multi-page Website', 'Responsive Design', 'Unlimited Revisions', '2 Weeks Delivery', 'Advanced SEO', 'Contact Form', 'Social Media Integration'],
  },
  {
    name: 'Premium',
    price: '$499',
    color: '',
    features: ['Full-stack Web App', 'Custom Design', 'Unlimited Revisions', '4 Weeks Delivery', 'Full SEO', 'Database Integration', 'Admin Dashboard', '3 Months Support'],
  },
];

export default function HireMe() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>Hire Me</h1>
            <p>Let's work together to bring your vision to life</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon"><i className={s.icon}></i></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Pricing Packages</h2>
          <p className="packages-subtitle">Transparent pricing for every budget</p>
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <div key={i} className={`package-card ${pkg.color}`}>
                {pkg.color === 'featured' && <div className="popular-badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <div className="price">{pkg.price}<span>/project</span></div>
                <ul className="package-features">
                  {pkg.features.map((f, j) => (
                    <li key={j}><i className="fas fa-check"></i> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${pkg.color === 'featured' ? 'btn-primary' : 'btn-secondary'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hire-cta">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your ideas and create something amazing together.</p>
          <div className="hire-cta-btns">
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary">
              <i className="fas fa-envelope"></i> Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
