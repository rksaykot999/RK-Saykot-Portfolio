import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db, initDb } from './db.js';
import { sendContactEmail } from './mailer.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ── Skills ──
app.get('/api/skills', async (req, res) => {
  await db.read();
  res.json(db.data.skills);
});

// ── Projects ──
app.get('/api/projects', async (req, res) => {
  await db.read();
  res.json(db.data.projects);
});

app.get('/api/projects/:id', async (req, res) => {
  await db.read();
  const project = db.data.projects.find(p => p.id === Number(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found.' });
  res.json(project);
});

// ── Experience ──
app.get('/api/experience', async (req, res) => {
  await db.read();
  res.json(db.data.experience);
});

// ── Certifications ──
app.get('/api/certifications', async (req, res) => {
  await db.read();
  const { category } = req.query;
  let certs = db.data.certifications;
  if (category) {
    certs = certs.filter(c => c.category.toLowerCase() === String(category).toLowerCase());
  }
  res.json(certs);
});

// ── Contact form ──
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'First name, email, and message are required.' });
  }

  await db.read();
  const entry = {
    id: Date.now(),
    firstName,
    lastName: lastName || '',
    email,
    subject: subject || '(no subject)',
    message,
    receivedAt: new Date().toISOString()
  };
  db.data.messages.push(entry);
  await db.write();

  try {
    await sendContactEmail(entry);
  } catch (err) {
    // Message is saved even if email sending isn't configured yet.
    console.warn('Email not sent (this is expected until SMTP is configured):', err.message);
  }

  res.status(201).json({ message: 'Message received. Thank you for reaching out.' });
});

async function start() {
  await initDb();
  app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
  });
}

start();
