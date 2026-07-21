/**
 * Cloudflare Pages middleware.
 *
 * 1. Host consolidation (301, permanent):
 *    - www.enshroudedhub.com        -> enshroudedhub.com
 *    - enshrouded-gonglue.pages.dev -> enshroudedhub.com
 *    Google sees a single canonical host; all SEO value consolidates
 *    on the custom domain.
 * 2. Placeholder-domain rewrite: swaps the build-time placeholder origin
 *    in HTML / sitemap.xml / robots.txt for the actual request origin,
 *    so canonical, OG, schema.org and sitemap URLs always match the
 *    live domain.
 */

const PLACEHOLDER_ORIGIN = 'https://a7ifouohujb5q.ok.kimi.link';
const CANONICAL_HOST = 'enshroudedhub.com';

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 1. One canonical host: redirect www.* and the legacy pages.dev subdomain
  if (url.hostname.startsWith('www.') || url.hostname.endsWith('.pages.dev')) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  const response = await context.next();

  // 2. Swap placeholder origin in text responses that carry site URLs
  const contentType = response.headers.get('content-type') || '';
  const isTextual =
    contentType.includes('text/html') ||
    contentType.includes('application/xml') ||
    contentType.includes('text/xml') ||
    contentType.includes('text/plain');

  if (!isTextual) return response;

  const text = await response.text();
  if (!text.includes(PLACEHOLDER_ORIGIN)) return response;

  const rewritten = text.split(PLACEHOLDER_ORIGIN).join(url.origin);
  const headers = new Headers(response.headers);
  headers.delete('content-length'); // body size changed

  return new Response(rewritten, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
