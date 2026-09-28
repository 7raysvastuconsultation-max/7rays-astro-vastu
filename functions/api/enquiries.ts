interface PagesContext {
  request: Request
  env: Record<string, unknown>
}

export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Session-ID',
      'Access-Control-Max-Age': '86400',
    },
  })
}

export const onRequestPost = async (context: PagesContext) => {
  try {
    const body = (await context.request.json()) as Record<string, unknown>
    const name = String(body?.name || '').trim()
    const phone = String(body?.phone || '').trim()

    if (!name || !phone) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Name and phone number are required',
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
        message: 'Enquiry received successfully',
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
        error: 'Invalid JSON request payload',
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
