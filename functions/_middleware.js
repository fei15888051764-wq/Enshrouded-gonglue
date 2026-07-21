/**
 * Cloudflare Pages middleware — makes the site domain-agnostic.
 *
 * 1. Redirects www.* to the bare apex domain (301) so Google sees a
 *    single canonical host.
 * 2. Rewrites the placeholder preview domain in HTML, sitemap.xml and
 *    robots.txt to whatever hostname the site is actually served from.
 *    Binding a custom domain in Cloudflare Pages therefore requires
 *    ZERO code changes — every canonical, OG, schema.org and sitemap
 *    URL automatically uses the live domain.
 */

const PLACEHOLDER_ORIGIN = 'https://a7ifouohujb5q.ok.kimi.link';

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // 1. Unify host: www.example.com -> example.com (permanent)
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.slice(4);
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
