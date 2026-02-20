import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';
import { dirname, join as pathJoin } from 'node:path';

// Load .env from server/ directory (works regardless of cwd)
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: pathJoin(__dirname, '.env') });

import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { join } from 'node:path';
import authRoutes from './routes/auth.mjs';
import apiRoutes from './routes/api.mjs';

const app = express();
const PORT = process.env.PORT || 3001;
const BUILD_DIR = join(import.meta.dirname, '..', 'build');
const IS_PROD = process.env.NODE_ENV === 'production';

// Session configuration
const SESSION_SECRET = process.env.SESSION_SECRET || 'dev-secret-change-in-production';
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
}));

// Trust proxy (nginx forwards requests)
if (IS_PROD) {
  app.set('trust proxy', 1);
}

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));

// API & auth routes (before static files — they take priority)
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Static Docusaurus build
app.use(express.static(BUILD_DIR));

// SPA fallback — serve index.html for client-side routes
app.use((req, res) => {
  res.sendFile(join(BUILD_DIR, 'index.html'));
});

// Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${IS_PROD ? 'production' : 'development'}`);
  if (!process.env.GITHUB_CLIENT_ID) {
    console.warn('WARNING: GITHUB_CLIENT_ID not set — OAuth login will fail');
  }
  if (SESSION_SECRET === 'dev-secret-change-in-production' && IS_PROD) {
    console.warn('WARNING: Using default session secret in production — set SESSION_SECRET');
  }
});
