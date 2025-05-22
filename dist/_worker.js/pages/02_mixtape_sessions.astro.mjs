globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../chunks/LyricPageLayout_BH9-t5Lw.mjs';
import { $ as $$TrackList } from '../chunks/TrackList_BF9fHmK9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tracks = [
    { title: "Full Disclosure (Album)", path: "/02_mixtape_sessions/01_full_disclosure" },
    { title: "Behold A Pale Horse (Album)", path: "/02_mixtape_sessions/02_behold_a_pale_horse" },
    { title: "Milabs (Album)", path: "/02_mixtape_sessions/03_milabs" }
  ];
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": "Singles", "album": "01_singles", "artist": "Hawk Eye The Rapper", "lyrics": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TrackList", $$TrackList, { "tracks": tracks })} ` })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/index.astro";
const $$url = "/02_mixtape_sessions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
