globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Podcast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/user/aether_scrolls/src/pages/promo/podcast.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/promo/podcast.astro";
const $$url = "/promo/podcast";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Podcast,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
