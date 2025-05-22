globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../../../chunks/LyricPageLayout_BH9-t5Lw.mjs';
import { $ as $$LyricPage } from '../../../chunks/LyricPage_CWMt4Djm.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function GET({ request }) {
  const apiUrl = new URL("/api/arsenal?title=Menace To Society", request.url).toString();
  try {
    const apiRes = await fetch(apiUrl);
    const result = await apiRes.json();
    if (!result.length || !result[0].url) {
      return new Response("Track not found", { status: 404 });
    }
    const response = await fetch(result[0].url);
    const lyrics = await response.text();
    return new Response(JSON.stringify({
      title: "Menace To Society",
      album: "Behold A Pale Horse",
      artist: "Hawk Eye The Rapper",
      lyrics
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(`Error loading lyrics: ${err instanceof Error ? err.message : "Unknown error"}`, { status: 500 });
  }
}
const $$07MenaceToSociety = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$07MenaceToSociety;
  const { title, album, artist, lyrics } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": title, "album": album, "artist": artist, "lyrics": lyrics }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "LyricPage", $$LyricPage, { "lyrics": lyrics })} ` })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/02_behold_a_pale_horse/07_menace_to_society.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/02_behold_a_pale_horse/07_menace_to_society.astro";
const $$url = "/02_mixtape_sessions/02_behold_a_pale_horse/07_menace_to_society";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$07MenaceToSociety,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
