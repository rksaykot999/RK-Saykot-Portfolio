import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SiteLoader from './components/SiteLoader';
import RouteProgress from './components/RouteProgress';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Certification from './pages/Certification';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-base-100 text-base-content">
      <SiteLoader />
      <RouteProgress />
      <ScrollToTop />
      <Navbar />
      {/* key={pathname} forces the fade-in animation to replay on every route change */}
      <main key={pathname} className="page-enter flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
