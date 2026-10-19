interface MiddlewareContext {
  request: Request;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
}

/**
 * Cloudflare Pages Edge Middleware
 * Normalizes host: 301 Redirects www.7raysastrovastu.in -> https://7raysastrovastu.in
 * Preserves all paths, query parameters, and fragments.
 */
export const onRequest = async (context: MiddlewareContext): Promise<Response> => {
  const url = new URL(context.request.url);

  if (url.hostname === 'www.7raysastrovastu.in') {
    url.hostname = '7raysastrovastu.in';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
