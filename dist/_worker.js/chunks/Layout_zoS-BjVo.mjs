globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, a as createAstro, a2 as renderHead, a1 as addAttribute, a3 as renderSlot, b as renderTemplate } from './astro/server_BLfuIyYt.mjs';
/* empty css                                      */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, bgColor = "bg-black", textColor = "text-teal-300" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderHead()}</head> <body${addAttribute(`font-sans p-8 min-h-screen ${bgColor} ${textColor}`, "class")}> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/user/aether_scrolls/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
