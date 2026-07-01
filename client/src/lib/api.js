const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const api = {
  getSkills: () => request('/skills'),
  getProjects: () => request('/projects'),
  getProject: (id) => request(`/projects/${id}`),
  getExperience: () => request('/experience'),
  getCertifications: (category) =>
    request(`/certifications${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  sendContact: (data) =>
    request('/contact', { method: 'POST', body: JSON.stringify(data) })
};
