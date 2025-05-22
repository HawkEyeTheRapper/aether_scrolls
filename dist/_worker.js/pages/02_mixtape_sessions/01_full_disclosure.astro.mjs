globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../../chunks/LyricPageLayout_DjwnF3Fn.mjs';
import { $ as $$TrackList } from '../../chunks/TrackList_BF9fHmK9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tracks = [
    { title: "Swordfish", path: "/mixtape_sessions/01_full_disclosure/01_swordfish" },
    { title: "Mic Check", path: "/mixtape_sessions/01_full_disclosure/02_mic_check" },
    { title: "Shakur", path: "/mixtape_sessions/01_full_disclosure/03_shakur" },
    { title: "Last One Left", path: "/mixtape_sessions/01_full_disclosure/04_last_one_left" },
    { title: "Full Disclosure", path: "/mixtape_sessions/01_full_disclosure/05_full_disclosure" },
    { title: "Lifted", path: "/mixtape_sessions/01_full_disclosure/06_lifted" },
    { title: "Domestic Terrorist", path: "/mixtape_sessions/01_full_disclosure/07_domestic_terrorist" },
    { title: "Down The Rabbit Hole", path: "/mixtape_sessions/01_full_disclosure/08_down_the_rabbit_hole" },
    { title: "When The Towers Fell", path: "/mixtape_sessions/01_full_disclosure/09_when_the_towers_fell" },
    { title: "Freedom Isn't Free", path: "/mixtape_sessions/01_full_disclosure/10_freedom_isnt_free" },
    { title: "Trafficked", path: "/mixtape_sessions/01_full_disclosure/11_trafficked" },
    { title: "Hocus Pocus", path: "/mixtape_sessions/01_full_disclosure/12_hocus_pocus" },
    { title: "Syntax", path: "/mixtape_sessions/01_full_disclosure/13_syntax" },
    { title: "Stay Real", path: "/mixtape_sessions/01_full_disclosure/14_stay_real" },
    { title: "The Story of Our Former Glory", path: "/mixtape_sessions/01_full_disclosure/15_the_story_of_our_former_glory" }
  ];
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": "Full Disclosure", "album": "Full Disclosure", "artist": "Hawk Eye The Rapper" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TrackList", $$TrackList, { "tracks": tracks })} ` })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/01_full_disclosure/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/01_full_disclosure/index.astro";
const $$url = "/02_mixtape_sessions/01_full_disclosure";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
