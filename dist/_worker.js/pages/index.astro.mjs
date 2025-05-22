globalThis.process ??= {}; globalThis.process.env ??= {};
import { c as createComponent, r as renderComponent, b as renderTemplate, a0 as maybeRenderHead } from '../chunks/astro/server_BLfuIyYt.mjs';
import { $ as $$LyricPageLayout } from '../chunks/LyricPageLayout_DjwnF3Fn.mjs';
import { c as createClient } from '../chunks/index_BHZdZHjm.mjs';
export { renderers } from '../renderers.mjs';

const supabaseUrl = "https://bptoazwrceuxregitayz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdG9hendyY2V1eHJlZ2l0YXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MzM4NjgsImV4cCI6MjA2MTAwOTg2OH0.NdXtp6eTPFTyY9T2ejy8Jt5wueyV20h5ieilSxYI6yI";
const supabase = createClient(supabaseUrl, supabaseKey);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data, error } = await supabase.from("todos").select("*");
  return renderTemplate`${renderComponent($$result, "LyricPageLayout", $$LyricPageLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome to the Lyric Vault</h1> <p style="margin-bottom: 2rem;">Explore the branches of the Hawk Eye Archive:</p> ${data && data.length > 0 ? renderTemplate`<ul> ${data.map((entry) => renderTemplate`<li>${entry.name}</li>`)} </ul>` : error ? renderTemplate`<p>Error fetching data: ${error.message}</p>` : renderTemplate`<p>No data available.</p>`}
---
${renderComponent($$result2, "Layout", Layout, {}, { "default": async ($$result3) => renderTemplate` <h1>Welcome to the Lyric Vault</h1> <p style="margin-bottom: 2rem;">Explore the branches of the Hawk Eye Archive:</p> <ul style="list-style: none; padding: 0;"> <li style="margin-bottom: 1rem;"> <a href="/01_singles/" style="color: #0af; font-size: 1.25rem;">Singles</a> </li> <li style="margin-bottom: 1rem;"> <a href="/02_mixtape_sessions/" style="color: #0af; font-size: 1.25rem;">The Mixtape Sessions</a> </li> <li style="margin-bottom: 1rem;"> <a href="/03_phase2/" style="color: #0af; font-size: 1.25rem;">Phase II</a> </li> <li style="margin-bottom: 1rem;"> <a href="/04_reckoning/" style="color: #0af; font-size: 1.25rem;">The Reckoning</a> </li> </ul> <footer style="margin-top: 4rem;"> <p>© Hawk Eye. All rights reserved.</p> </footer> ` })}` })}`;
}, "/home/user/aether_scrolls/src/pages/index.astro", void 0);

const $$file = "/home/user/aether_scrolls/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
