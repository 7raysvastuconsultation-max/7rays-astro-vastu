export const onRequestGet = async () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      service: '7Rays Astro Vastu Edge API',
      runtime: 'cloudflare-pages-edge',
      timestamp: new Date().toISOString(),
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    }
  )
}
