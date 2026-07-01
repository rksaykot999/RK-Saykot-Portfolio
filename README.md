# Muhammad Saykot — Portfolio

A full-stack portfolio site: React (Vite + React Router) frontend, Node.js
(Express) backend, with a lightweight JSON-file database for skills,
projects, experience, and certifications.

```
saykot-portfolio/
├── client/   React frontend (Vite + React Router)
└── server/   Express API + JSON database
```

## Quick Start

You need two terminals — one for the server, one for the client.

### 1. Backend (server/)

```bash
cd server
npm install
npm run seed     # populates the database with your real content
npm run dev      # starts the API at http://localhost:5000
```

To enable the contact form's email notifications, copy `.env.example` to
`.env` and fill in your SMTP details. Until then, messages submitted through
the contact form are still saved to `server/data/db.json` — only the email
step is skipped.

### 2. Frontend (client/)

```bash
cd client
npm install
cp .env.example .env    # points the frontend at the local API
npm run dev              # starts the site at http://localhost:5173
```

Open **http://localhost:5173** in your browser. The navbar routes to real
URLs — `/about`, `/skills`, `/projects`, `/experience`, `/certification`,
`/contact` — so each page works as a direct link or browser refresh.

## Editing Content

All real content (skills, projects, experience, certifications) lives in
`server/seed.js`. To update it:

1. Edit the arrays in `server/seed.js`
2. Run `npm run seed` again from `/server` — this overwrites the database with the new content

The frontend never needs to change for content updates — it always reads
live from the API.

## Building for Production

```bash
# Frontend
cd client
npm run build       # outputs static files to client/dist

# Backend
cd server
npm start            # runs the API with node (no --watch)
```

Deploy `client/dist` to any static host (Vercel, Netlify, etc.) and point
its `VITE_API_URL` environment variable at your deployed backend's URL.
Deploy `server/` to any Node host (Render, Railway, a VPS, etc.).

## Tech Stack

- **Frontend:** React 19, React Router 7, Vite, Tailwind CSS v4, DaisyUI v5 (custom "ledger" light/dark themes), lucide-react
- **Backend:** Express, lowdb (JSON-file database), Nodemailer
- **Fonts:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (data/labels)
