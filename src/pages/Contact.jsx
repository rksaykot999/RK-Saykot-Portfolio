import SEO from '../components/SEO';
import { useState } from 'react';
import { personalInfo, faqs } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/meoyzojp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="page-header-content">
            <h1>Get In Touch</h1>
            <p>Let's discuss your next project or just say hello.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="section-title">Let's Connect</h2>
              <p>I'm currently available for freelance work and full-time opportunities. If you have a project or just want to say hello, get in touch.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>{personalInfo.email}</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon"><i className="fas fa-phone"></i></div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>{personalInfo.phone}</p>
                  </div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href={personalInfo.linkedin} className="social-link" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href={personalInfo.github} className="social-link" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href={personalInfo.twitter} className="social-link" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a href={personalInfo.instagram} className="social-link" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h3>Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control" placeholder="Enter subject" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="form-success">✅ Message sent successfully!</p>}
                {status === 'error' && <p className="form-error">❌ Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                </div>
                {openFaq === i && (
                  <div className="faq-answer"><p>{faq.a}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
