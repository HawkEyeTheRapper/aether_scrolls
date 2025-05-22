globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, a2 as renderHead, b as renderTemplate } from './astro/server_BLfuIyYt.mjs';

const $$Astro = createAstro();
const $$LyricPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LyricPage;
  const { title, album, artist, upc, releaseDate, commentary, lyrics } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><title>${title} | ${album} - ${artist}</title><meta charset="UTF-8">${renderHead()}</head> <body style="background-color: #0c0c0c; color: #ffffff; font-family: sans-serif; padding: 2rem;"> <header style="margin-bottom: 2rem;"> <h1 style="font-size: 2rem;">${title}</h1> <p><strong>Album:</strong> ${album}</p> <p><strong>Artist:</strong> ${artist}</p> ${upc && renderTemplate`<p><strong>UPC:</strong> ${upc}</p>`} ${releaseDate && renderTemplate`<p><strong>Release Date:</strong> ${releaseDate}</p>`} </header> ${commentary && renderTemplate`<section style="margin-bottom: 3rem;"> <h2 style="font-size: 1.5rem;">EverLight Commentary</h2> <p style="white-space: pre-wrap;">${commentary}</p> </section>`} <section> <h2 style="font-size: 1.5rem;">Lyrics</h2> <pre style="white-space: pre-wrap; background: #111; padding: 1rem; border-radius: 8px; overflow-x: auto;">${lyrics}
      </pre> </section> <footer style="margin-top: 4rem;"> <a href="/02_mixtape_sessions/01_full_disclosure/" style="color: #0af;">← Return to Full Disclosure Album</a> </footer> </body></html>`;
}, "/home/user/aether_scrolls/src/components/lyrics/LyricPage.astro", void 0);

export { $$LyricPage as $ };
