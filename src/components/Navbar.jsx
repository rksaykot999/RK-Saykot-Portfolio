import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <Link to="//" className="logo">RK <span>Saykot</span></Link>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="//" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>About</Link></li>
            <li><Link to="/skills" className={isActive('/skills') ? 'active' : ''} onClick={closeMenu}>Skills</Link></li>
            <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/hire-me" className="hire-btn" onClick={closeMenu}>Hire Me</Link></li>
          </ul>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
