globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Instrumentals = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/user/aether_scrolls/src/pages/ai/instrumentals.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/ai/instrumentals.astro";
const $$url = "/ai/instrumentals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Instrumentals,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
