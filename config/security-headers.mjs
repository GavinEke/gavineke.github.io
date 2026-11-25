// GitHub Pages can deliver these directives in HTML. Framing requires an HTTP header.
export const metaCsp = [
  "default-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
  "object-src 'none'",
  "script-src 'self' https://static.cloudflareinsights.com",
  "style-src 'self'",
  "img-src 'self'",
  "font-src 'self'",
  "manifest-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com",
  "worker-src 'none'",
  "upgrade-insecure-requests",
].join('; ');

export const securityHeaders = {
  'Content-Security-Policy': `${metaCsp}; frame-ancestors 'none'`,
  'Strict-Transport-Security': 'max-age=31536000',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), display-capture=(), geolocation=(), microphone=(), payment=(), usb=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'credentialless',
  'Cross-Origin-Resource-Policy': 'same-origin',
  'X-Permitted-Cross-Domain-Policies': 'none',
};
