globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, b as renderTemplate } from '../../chunks/astro/server_BLfuIyYt.mjs';
export { renderers } from '../../renderers.mjs';

const $$DynamicDescriptions = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/user/aether_scrolls/src/pages/ai/dynamic-descriptions.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/ai/dynamic-descriptions.astro";
const $$url = "/ai/dynamic-descriptions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$DynamicDescriptions,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
