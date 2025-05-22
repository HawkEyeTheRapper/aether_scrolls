globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a2 as renderHead, a1 as addAttribute, b as renderTemplate } from '../chunks/astro/server_BLfuIyYt.mjs';
import { c as createClient } from '../chunks/index_BHZdZHjm.mjs';
export { renderers } from '../renderers.mjs';

const supabaseUrl = undefined                                   ;
const supabaseKey = undefined                                        ;
const supabase = createClient(supabaseUrl, supabaseKey);

const $$Arsenal = createComponent(async ($$result, $$props, $$slots) => {
  const { data: tracks, error } = await supabase.from("arsenal").select("*").order("track_number", { ascending: true });
  if (error) {
    console.error("Failed to fetch arsenal:", error);
  }
  return renderTemplate`<html> <head><title>Arsenal</title>${renderHead()}</head> <body> <h1>Track Archive</h1> <ul> ${tracks?.map((track) => renderTemplate`<li> <strong>${track.track_number}. ${track.track_title}</strong><br> <a${addAttribute(track.url, "href")} target="_blank">${track.file_name}</a> </li>`)} </ul> </body></html>`;
}, "/home/user/aether_scrolls/src/pages/arsenal.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/arsenal.astro";
const $$url = "/arsenal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Arsenal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
