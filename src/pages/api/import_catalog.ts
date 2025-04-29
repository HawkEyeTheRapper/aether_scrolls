import type { APIContext } from 'astro';
import type { D1Database } from '@cloudflare/workers-types';

interface Locals {
  d1: {
    arsenal_db: D1Database;
  };
}

export async function POST(context: APIContext<Locals>) {
  const db = context.locals.d1.arsenal_db;

  if (!db) {
    return new Response(JSON.stringify({ error: 'Database connection failed.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await context.request.json();

    const {
      project = 'HAWK-ARS-00',
      album,
      track_number,
      track_title,
      file_name,
      url,
    } = body;

    if (!track_title || !file_name || !url) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await db.prepare(`
      INSERT INTO arsenal (project, album, track_number, track_title, file_name, url)
      VALUES (?, ?, ?, ?, ?, ?)
    `)
    .bind(project, album, track_number, track_title, file_name, url)
    .run();

    return new Response(JSON.stringify({ success: true, message: 'Track inserted.' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}