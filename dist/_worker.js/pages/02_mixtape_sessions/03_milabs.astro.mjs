globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../../chunks/LyricPageLayout_DjwnF3Fn.mjs';
import { $ as $$TrackList } from '../../chunks/TrackList_BF9fHmK9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const tracks = [
    { title: "Soft Disclosure", path: "/mixtape_sessions/03_milabs/01_soft_disclosure" },
    { title: "Abreactions", path: "/mixtape_sessions/03_milabs/02_abreactions" },
    { title: "Eyes Wide Open", path: "/mixtape_sessions/03_milabs/03_eyes_wide_open" },
    { title: "Delta Squad", path: "/mixtape_sessions/03_milabs/04_delta_squad" },
    { title: "Implants", path: "/mixtape_sessions/03_milabs/05_implants" },
    { title: "Illuminati", path: "/mixtape_sessions/03_milabs/06_illuminati" },
    { title: "FEMA", path: "/mixtape_sessions/03_milabs/07_fema" },
    { title: "The Antidote", path: "/mixtape_sessions/03_milabs/08_the_antidote" },
    { title: "Avalanche", path: "/mixtape_sessions/03_milabs/09_avalanche" },
    { title: "Artificial Intelligence", path: "/mixtape_sessions/03_milabs/10_artificial_intelligence" },
    { title: "Legion", path: "/mixtape_sessions/03_milabs/11_legion" },
    { title: "When My Elites Surround", path: "/mixtape_sessions/03_milabs/12_when_my_elites_surround" },
    { title: "Reincarnated2Resist", path: "/mixtape_sessions/03_milabs/13_reincarnated2resist" }
  ];
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, { "title": "Milabs", "album": "Milabs", "artist": "Hawk Eye The Rapper" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TrackList", $$TrackList, { "tracks": tracks })} ` })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/03_milabs/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/03_milabs/index.astro";
const $$url = "/02_mixtape_sessions/03_milabs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
