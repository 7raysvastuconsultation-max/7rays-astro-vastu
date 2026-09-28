interface PagesContext {
  request: Request
  env: Record<string, unknown>
}

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}

export const onRequestPost = async (context: PagesContext) => {
  try {
    const payload = (await context.request.json()) as Record<string, unknown>
    const eventType = String(payload?.eventType || '').trim()

    if (!eventType) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Event type is required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store',
          },
        }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        recorded: true,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    )
  } catch {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid analytics payload',
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}
