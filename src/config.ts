/**
 * Site-wide configuration.
 *
 * SITE_URL resolves automatically from the browser's current origin, so
 * canonical and Open Graph URLs are always correct on ANY domain —
 * preview domain, xxx.pages.dev, or your future custom domain.
 * No code change is ever needed when the domain changes.
 *
 * Static files (index.html, sitemap.xml, robots.txt) cannot run JS;
 * their URLs are rewritten at the edge by functions/_middleware.js,
 * which swaps the placeholder domain for the actual request hostname.
 */
export const FALLBACK_SITE_URL = 'https://a7ifouohujb5q.ok.kimi.link';

export const SITE_URL =
  typeof window !== 'undefined' ? window.location.origin : FALLBACK_SITE_URL;

export const SITE_NAME = 'Enshrouded Guide';
