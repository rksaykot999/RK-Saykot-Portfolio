import { useEffect } from 'react';

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Title
    document.title = title
      ? `${title} | RK Saykot`
      : 'RK Saykot | Web Developer & Portfolio';

    // Description
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const desc = description || 'RK Saykot is a passionate Web Developer & Computer Engineering student from Bangladesh.';
    const kw = keywords || 'RK Saykot, Web Developer, Portfolio, React, JavaScript, Bangladesh';

    setMeta('description', desc);
    setMeta('keywords', kw);
    setMeta('og:title', document.title, true);
    setMeta('og:description', desc, true);
    setMeta('twitter:title', document.title);
    setMeta('twitter:description', desc);
  }, [title, description, keywords]);

  return null;
}
