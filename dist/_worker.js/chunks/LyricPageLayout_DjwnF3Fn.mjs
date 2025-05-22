globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, a0 as maybeRenderHead, a1 as addAttribute } from './astro/server_BLfuIyYt.mjs';
import { $ as $$Layout } from './Layout_zoS-BjVo.mjs';

const $$Astro = createAstro();
const $$LyricPageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LyricPageLayout;
  const { title, album, artist, upc, releaseDate, commentary, lyrics, children } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="mb-8"> <h1 class="text-4xl font-bold mb-2">${title}</h1> ${album && renderTemplate`<p><strong>Album:</strong> ${album}</p>`} ${artist && renderTemplate`<p><strong>Artist:</strong> ${artist}</p>`} ${upc && renderTemplate`<p><strong>UPC:</strong> ${upc}</p>`} ${releaseDate && renderTemplate`<p><strong>Release Date:</strong> ${releaseDate}</p>`} </header> ${commentary && renderTemplate`<section class="mb-10"> <h2 class="text-2xl font-semibold mb-2">EverLight Commentary</h2> <p class="whitespace-pre-wrap">${commentary}</p> </section>`}${lyrics && renderTemplate`<section class="mb-10"> <h2 class="text-2xl font-semibold mb-2">Lyrics</h2> <pre class="whitespace-pre-wrap bg-gray-900 p-4 rounded-lg overflow-x-auto">

${lyrics}
      </pre> </section>`}${children && renderTemplate`<section class="mb-10"> ${children} </section>`}${album && renderTemplate`<footer class="mt-12"> <a${addAttribute(`/${album}`, "href")} class="text-blue-400 hover:underline">
← Return to ${album} </a> </footer>`}` })}`;
}, "/home/user/aether_scrolls/src/layouts/LyricPageLayout.astro", void 0);

export { $$LyricPageLayout as $ };
