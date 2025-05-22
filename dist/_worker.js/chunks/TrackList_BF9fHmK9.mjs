globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, a0 as maybeRenderHead, a1 as addAttribute, b as renderTemplate } from './astro/server_BLfuIyYt.mjs';

const $$Astro = createAstro();
const $$TrackList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrackList;
  const { tracks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col space-y-4 mt-8"> ${tracks.map((track, index) => renderTemplate`<li class="text-center"> <a${addAttribute(track.path, "href")} class="inline-block text-2xl text-blue-300 hover:text-white hover:scale-105 transform transition-all duration-200 ease-in-out tracking-wide"> ${String(index + 1).padStart(2, "0")}. ${track.title} </a> </li>`)} </ul>`;
}, "/home/user/aether_scrolls/src/components/TrackList.astro", void 0);

export { $$TrackList as $ };
