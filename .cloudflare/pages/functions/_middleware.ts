export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Import the server handler from the build output
  try {
    const { default: handler } = await import('../../../.output/server/index.mjs');
    return handler.fetch(request, context.env, context);
  } catch (error) {
    console.error('Error loading handler:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
