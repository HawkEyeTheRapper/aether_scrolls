globalThis.process ??= {}; globalThis.process.env ??= {};
import { a5 as getDefaultExportFromCjs } from './astro/server_BLfuIyYt.mjs';

var browser$2;
var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser$2;
	hasRequiredBrowser = 1;

	browser$2 = function () {
	  throw new Error(
	    'ws does not work in the browser. Browser clients must use the native ' +
	      'WebSocket object'
	  );
	};
	return browser$2;
}

var browserExports = requireBrowser();
const browser = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

const browser$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: browser
}, Symbol.toStringTag, { value: 'Module' }));

export { browser$1 as b };
