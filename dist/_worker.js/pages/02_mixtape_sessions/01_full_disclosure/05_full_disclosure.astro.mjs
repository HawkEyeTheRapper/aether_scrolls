globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPage } from '../../../chunks/LyricPage_CWMt4Djm.mjs';
export { renderers } from '../../../renderers.mjs';

const $$05FullDisclosure = createComponent(($$result, $$props, $$slots) => {
  const fullDisclosureCommentary = `
Full Disclosure was the reckoning call.  
The realization that conspiracy is not myth \u2014 it is operating machinery.  
This track cracked the first seal of the Mixtape Sessions.

It served as a lighthouse for lost warriors...  
and a warning shot to silent enemies.
`;
  const fullDisclosureLyrics = `
They called it crazy, called it a phase
Said the truth is a lie wrapped in a glazed haze
But I peeled back layers, I saw the disease
Full disclosure, bring \u2018em to their knees

No tongue holds back when the soul is lit
No chain holds fast when the sword is grit
Flashing truths in a flood of rage
Full disclosure on the world stage
`;
  return renderTemplate`${renderComponent($$result, "LyricPage", $$LyricPage, { "title": "Full Disclosure", "album": "The Mixtape Sessions", "artist": "Hawk Eye", "upc": "(Insert UPC if available)", "releaseDate": "2020-03-01", "commentary": fullDisclosureCommentary, "lyrics": fullDisclosureLyrics })}`;
}, "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/01_full_disclosure/05_full_disclosure.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/02_mixtape_sessions/01_full_disclosure/05_full_disclosure.astro";
const $$url = "/02_mixtape_sessions/01_full_disclosure/05_full_disclosure";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$05FullDisclosure,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
