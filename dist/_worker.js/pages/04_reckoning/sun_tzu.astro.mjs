globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/user/aether_scrolls/src/pages/04_reckoning/sun_tzu/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/04_reckoning/sun_tzu/index.astro";
const $$url = "/04_reckoning/sun_tzu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
