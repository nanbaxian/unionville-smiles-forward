export async function onRequest(context) {
  try {
    // Import the Nitro server handler
    const { default: handler } = await import('../../.output/server/index.mjs');
    return handler.fetch(context.request, context.env, context);
  } catch (error) {
    console.error('SSR Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
