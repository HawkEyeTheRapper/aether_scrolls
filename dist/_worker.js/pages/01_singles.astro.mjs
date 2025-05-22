globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../chunks/LyricPageLayout_BH9-t5Lw.mjs';
import { $ as $$TrackList } from '../chunks/TrackList_BF9fHmK9.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tracks = [
    { title: "Will You Listen", path: "/01_singles/01_will_you_listen" },
    { title: "Psyops", path: "/01_singles/02_psyops" },
    { title: "Incantations", path: "/01_singles/03_incantations" },
    { title: "Mind Kontrol", path: "/01_singles/04_mind_kontrol" },
    { title: "Return of Kings", path: "/01_singles/05_return_of_kings" },
    { title: "Politicians", path: "/01_singles/06_politicians" },
    { title: "The Vow", path: "/01_singles/07_the_vow" }
  ];
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": "Singles", "album": "01_singles", "artist": "Hawk Eye The Rapper", "lyrics": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TrackList", $$TrackList, { "tracks": tracks })} ` })}`;
}, "/home/user/aether_scrolls/src/pages/01_singles/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/01_singles/index.astro";
const $$url = "/01_singles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
