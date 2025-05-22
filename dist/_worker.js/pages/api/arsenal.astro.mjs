globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

async function GET(context) {
  const db = context.locals.d1.arsenal_db;
  if (!db) {
    return new Response(JSON.stringify({ error: "Database connection failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  const requestUrl = new URL(context.request.url);
  const title = requestUrl.searchParams.get("title");
  try {
    if (title) {
      const { results } = await db.prepare("SELECT * FROM arsenal WHERE track_title = ?").bind(title).all();
      return new Response(JSON.stringify(results ?? []), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    } else {
      const { results } = await db.prepare("SELECT * FROM arsenal ORDER BY id ASC").all();
      return new Response(JSON.stringify(results ?? []), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
