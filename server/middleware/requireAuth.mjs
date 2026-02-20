/**
 * Middleware: require GitHub OAuth session.
 * Returns 401 with loginUrl if not authenticated.
 */
export default function requireAuth(req, res, next) {
  if (!req.session.githubToken) {
    return res.status(401).json({
      error: 'Not authenticated',
      loginUrl: '/auth/github',
    });
  }
  next();
}
