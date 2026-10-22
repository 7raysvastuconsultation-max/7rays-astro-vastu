interface MiddlewareContext {
  request: Request;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
}

/**
 * Cloudflare Pages Edge Middleware
 * 1. Normalizes hostname: www.7raysastrovastu.in -> https://7raysastrovastu.in
 * 2. Normalizes trailing slashes: /path -> /path/ in a single 301 hop with absolute canonical URL
 * 3. Preserves query parameters and fragments
 */
export const onRequest = async (context: MiddlewareContext): Promise<Response> => {
  const url = new URL(context.request.url);
  let shouldRedirect = false;

  // 1. Enforce canonical apex domain
  if (url.hostname === 'www.7raysastrovastu.in') {
    url.hostname = '7raysastrovastu.in';
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // 2. Enforce trailing slash on all directory routes (excluding API and static assets with extensions)
  if (
    !url.pathname.endsWith('/') &&
    !url.pathname.startsWith('/api/') &&
    !/\.[a-zA-Z0-9]{2,5}$/.test(url.pathname)
  ) {
    url.pathname = `${url.pathname}/`;
    url.protocol = 'https:';
    url.hostname = '7raysastrovastu.in';
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
