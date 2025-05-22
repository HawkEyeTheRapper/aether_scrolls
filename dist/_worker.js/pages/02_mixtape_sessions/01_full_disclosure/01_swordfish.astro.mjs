globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../../../chunks/LyricPageLayout_DjwnF3Fn.mjs';
export { renderers } from '../../../renderers.mjs';

const $$01Swordfish = createComponent(async ($$result, $$props, $$slots) => {
  const lyricsUrl = "https://s3.omniversalmedia.app/HAWK-ARS-00/02_mixtape_sessions/01_full_disclosure/01_swordfish.md";
  const response = await fetch(lyricsUrl);
  const lyrics = await response.text();
  const commentary = `...`;
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": "Swordfish", "album": "Full Disclosure", "artist": "Hawk Eye", "upc": "885007879183", "releaseDate": "2020-03-01", "commentary": commentary, "lyrics": lyrics })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/01_full_disclosure/01_swordfish.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/01_full_disclosure/01_swordfish.astro";
const $$url = "/02_mixtape_sessions/01_full_disclosure/01_swordfish";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$01Swordfish,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
