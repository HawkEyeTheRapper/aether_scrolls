globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../../chunks/LyricPageLayout_BH9-t5Lw.mjs';
import { $ as $$TrackList } from '../../chunks/TrackList_BF9fHmK9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tracks = [
    { title: "Warning Shots", path: "/mixtape_sessions/02_behold_a_pale_horse/01_warning_shots" },
    { title: "Behold A Pale Horse", path: "/mixtape_sessions/02_behold_a_pale_horse/02_behold_a_pale_horse" },
    { title: "Kamikaze", path: "/mixtape_sessions/02_behold_a_pale_horse/03_kamikaze" },
    { title: "Whistleblower", path: "/mixtape_sessions/02_behold_a_pale_horse/04_whistleblower" },
    { title: "Superstitions", path: "/mixtape_sessions/02_behold_a_pale_horse/05_superstitions" },
    { title: "Scripture", path: "/mixtape_sessions/02_behold_a_pale_horse/06_scripture" },
    { title: "Menace To Society", path: "/mixtape_sessions/02_behold_a_pale_horse/07_menace_to_society" },
    { title: "Semi-Automatic", path: "/mixtape_sessions/02_behold_a_pale_horse/08_semi_automatic" },
    { title: "Reverse This Curse", path: "/mixtape_sessions/02_behold_a_pale_horse/09_reverse_this_curse" },
    { title: "K.T.", path: "/mixtape_sessions/02_behold_a_pale_horse/10_kt" },
    { title: "The Story Celebrated Throughout Time", path: "/mixtape_sessions/02_behold_a_pale_horse/11_the_story_celebrated_throughout_time" }
  ];
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": "Behold A Pale Horse", "album": "Milabs", "artist": "Hawk Eye The Rapper" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TrackList", $$TrackList, { "tracks": tracks })} ` })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/02_behold_a_pale_horse/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/02_behold_a_pale_horse/index.astro";
const $$url = "/02_mixtape_sessions/02_behold_a_pale_horse";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
