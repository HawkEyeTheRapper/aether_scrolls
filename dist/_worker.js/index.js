globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CGLE0OZz.mjs';
import { manifest } from './manifest_BQXnZMLK.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/01_singles/01_will_you_listen.astro.mjs');
const _page2 = () => import('./pages/01_singles/02_psyops.astro.mjs');
const _page3 = () => import('./pages/01_singles/03_incantations.astro.mjs');
const _page4 = () => import('./pages/01_singles/04_mind_kontrol.astro.mjs');
const _page5 = () => import('./pages/01_singles/05_return_of_kings.astro.mjs');
const _page6 = () => import('./pages/01_singles/06_politicians.astro.mjs');
const _page7 = () => import('./pages/01_singles/07_the_vow.astro.mjs');
const _page8 = () => import('./pages/01_singles.astro.mjs');
const _page9 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/01_swordfish.astro.mjs');
const _page10 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/02_mic_check.astro.mjs');
const _page11 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/03_shakur.astro.mjs');
const _page12 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/04_last_one_left.astro.mjs');
const _page13 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/05_full_disclosure.astro.mjs');
const _page14 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/06_lifted.astro.mjs');
const _page15 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/07_fuck_society.astro.mjs');
const _page16 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/08_ashes.astro.mjs');
const _page17 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/09_haunted.astro.mjs');
const _page18 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/10_monumental.astro.mjs');
const _page19 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/11_trafficked.astro.mjs');
const _page20 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/12_hocus_pocus.astro.mjs');
const _page21 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/13_syntax.astro.mjs');
const _page22 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/14_stay_real.astro.mjs');
const _page23 = () => import('./pages/02_mixtape_sessions/01_full_disclosure/15_the_story_of_our_former_glory.astro.mjs');
const _page24 = () => import('./pages/02_mixtape_sessions/01_full_disclosure.astro.mjs');
const _page25 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/01_warning_shots.astro.mjs');
const _page26 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/02_behold_a_pale_horse.astro.mjs');
const _page27 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/03_kamikaze.astro.mjs');
const _page28 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/04_whistleblower.astro.mjs');
const _page29 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/05_superstitions.astro.mjs');
const _page30 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/06_scripture.astro.mjs');
const _page31 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/07_menace_to_society.astro.mjs');
const _page32 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/08_semi_automatic.astro.mjs');
const _page33 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/09_reverse_this_curse.astro.mjs');
const _page34 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/10_kt.astro.mjs');
const _page35 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse/11_the_story_celebrated_throughout_time.astro.mjs');
const _page36 = () => import('./pages/02_mixtape_sessions/02_behold_a_pale_horse.astro.mjs');
const _page37 = () => import('./pages/02_mixtape_sessions/03_milabs/01_soft_disclosure.astro.mjs');
const _page38 = () => import('./pages/02_mixtape_sessions/03_milabs/02_abreactions.astro.mjs');
const _page39 = () => import('./pages/02_mixtape_sessions/03_milabs/03_eyes_wide_open.astro.mjs');
const _page40 = () => import('./pages/02_mixtape_sessions/03_milabs/04_delta_squad.astro.mjs');
const _page41 = () => import('./pages/02_mixtape_sessions/03_milabs/05_implants.astro.mjs');
const _page42 = () => import('./pages/02_mixtape_sessions/03_milabs/06_illuminati.astro.mjs');
const _page43 = () => import('./pages/02_mixtape_sessions/03_milabs/07_fema.astro.mjs');
const _page44 = () => import('./pages/02_mixtape_sessions/03_milabs/08_the_antidote.astro.mjs');
const _page45 = () => import('./pages/02_mixtape_sessions/03_milabs/09_avalanche.astro.mjs');
const _page46 = () => import('./pages/02_mixtape_sessions/03_milabs/10_artificial_intelligence.astro.mjs');
const _page47 = () => import('./pages/02_mixtape_sessions/03_milabs/11_legion.astro.mjs');
const _page48 = () => import('./pages/02_mixtape_sessions/03_milabs/12_when_my_elites_surround.astro.mjs');
const _page49 = () => import('./pages/02_mixtape_sessions/03_milabs/13_reincarnated2resist.astro.mjs');
const _page50 = () => import('./pages/02_mixtape_sessions/03_milabs.astro.mjs');
const _page51 = () => import('./pages/02_mixtape_sessions.astro.mjs');
const _page52 = () => import('./pages/03_phase2/04_malicious.astro.mjs');
const _page53 = () => import('./pages/03_phase2/05_shadow_banned.astro.mjs');
const _page54 = () => import('./pages/03_phase2.astro.mjs');
const _page55 = () => import('./pages/04_reckoning/sun_tzu.astro.mjs');
const _page56 = () => import('./pages/ai/chatbot.astro.mjs');
const _page57 = () => import('./pages/ai/dynamic-descriptions.astro.mjs');
const _page58 = () => import('./pages/ai/equalizer-art.astro.mjs');
const _page59 = () => import('./pages/ai/instrumentals.astro.mjs');
const _page60 = () => import('./pages/ai/lyric-analysis.astro.mjs');
const _page61 = () => import('./pages/ai/mood-suggester.astro.mjs');
const _page62 = () => import('./pages/ai/playlist-generator.astro.mjs');
const _page63 = () => import('./pages/ai/press-release.astro.mjs');
const _page64 = () => import('./pages/ai/social-posts.astro.mjs');
const _page65 = () => import('./pages/ai/vr-video.astro.mjs');
const _page66 = () => import('./pages/api/arsenal.astro.mjs');
const _page67 = () => import('./pages/api/auth/register.astro.mjs');
const _page68 = () => import('./pages/api/auth/signin.astro.mjs');
const _page69 = () => import('./pages/api/auth/signout.astro.mjs');
const _page70 = () => import('./pages/api/import_catalog.astro.mjs');
const _page71 = () => import('./pages/arsenal.astro.mjs');
const _page72 = () => import('./pages/dashboard.astro.mjs');
const _page73 = () => import('./pages/promo/artwork.astro.mjs');
const _page74 = () => import('./pages/promo/bts.astro.mjs');
const _page75 = () => import('./pages/promo/countdown.astro.mjs');
const _page76 = () => import('./pages/promo/fan-art.astro.mjs');
const _page77 = () => import('./pages/promo/limited-merch.astro.mjs');
const _page78 = () => import('./pages/promo/listening-party.astro.mjs');
const _page79 = () => import('./pages/promo/lyric-video.astro.mjs');
const _page80 = () => import('./pages/promo/playlist.astro.mjs');
const _page81 = () => import('./pages/promo/podcast.astro.mjs');
const _page82 = () => import('./pages/promo/teaser.astro.mjs');
const _page83 = () => import('./pages/register.astro.mjs');
const _page84 = () => import('./pages/signin.astro.mjs');
const _page85 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
    ["src/pages/01_singles/01_will_you_listen.astro", _page1],
    ["src/pages/01_singles/02_psyops.astro", _page2],
    ["src/pages/01_singles/03_incantations.astro", _page3],
    ["src/pages/01_singles/04_mind_kontrol.astro", _page4],
    ["src/pages/01_singles/05_return_of_kings.astro", _page5],
    ["src/pages/01_singles/06_politicians.astro", _page6],
    ["src/pages/01_singles/07_the_vow.astro", _page7],
    ["src/pages/01_singles/index.astro", _page8],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/01_swordfish.astro", _page9],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/02_mic_check.astro", _page10],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/03_shakur.astro", _page11],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/04_last_one_left.astro", _page12],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/05_full_disclosure.astro", _page13],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/06_lifted.astro", _page14],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/07_fuck_society.astro", _page15],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/08_ashes.astro", _page16],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/09_haunted.astro", _page17],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/10_monumental.astro", _page18],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/11_trafficked.astro", _page19],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/12_hocus_pocus.astro", _page20],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/13_syntax.astro", _page21],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/14_stay_real.astro", _page22],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/15_the_story_of_our_former_glory.astro", _page23],
    ["src/pages/02_mixtape_sessions/01_full_disclosure/index.astro", _page24],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/01_warning_shots.astro", _page25],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/02_behold_a_pale_horse.astro", _page26],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/03_kamikaze.astro", _page27],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/04_whistleblower.astro", _page28],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/05_superstitions.astro", _page29],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/06_scripture.astro", _page30],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/07_menace_to_society.astro", _page31],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/08_semi_automatic.astro", _page32],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/09_reverse_this_curse.astro", _page33],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/10_kt.astro", _page34],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/11_the_story_celebrated_throughout_time.astro", _page35],
    ["src/pages/02_mixtape_sessions/02_behold_a_pale_horse/index.astro", _page36],
    ["src/pages/02_mixtape_sessions/03_milabs/01_soft_disclosure.astro", _page37],
    ["src/pages/02_mixtape_sessions/03_milabs/02_abreactions.astro", _page38],
    ["src/pages/02_mixtape_sessions/03_milabs/03_eyes_wide_open.astro", _page39],
    ["src/pages/02_mixtape_sessions/03_milabs/04_delta_squad.astro", _page40],
    ["src/pages/02_mixtape_sessions/03_milabs/05_implants.astro", _page41],
    ["src/pages/02_mixtape_sessions/03_milabs/06_illuminati.astro", _page42],
    ["src/pages/02_mixtape_sessions/03_milabs/07_fema.astro", _page43],
    ["src/pages/02_mixtape_sessions/03_milabs/08_the_antidote.astro", _page44],
    ["src/pages/02_mixtape_sessions/03_milabs/09_avalanche.astro", _page45],
    ["src/pages/02_mixtape_sessions/03_milabs/10_artificial_intelligence.astro", _page46],
    ["src/pages/02_mixtape_sessions/03_milabs/11_legion.astro", _page47],
    ["src/pages/02_mixtape_sessions/03_milabs/12_when_my_elites_surround.astro", _page48],
    ["src/pages/02_mixtape_sessions/03_milabs/13_reincarnated2resist.astro", _page49],
    ["src/pages/02_mixtape_sessions/03_milabs/index.astro", _page50],
    ["src/pages/02_mixtape_sessions/index.astro", _page51],
    ["src/pages/03_phase2/04_malicious/index.astro", _page52],
    ["src/pages/03_phase2/05_shadow_banned/index.astro", _page53],
    ["src/pages/03_phase2/index.astro", _page54],
    ["src/pages/04_reckoning/sun_tzu/index.astro", _page55],
    ["src/pages/ai/chatbot.astro", _page56],
    ["src/pages/ai/dynamic-descriptions.astro", _page57],
    ["src/pages/ai/equalizer-art.astro", _page58],
    ["src/pages/ai/instrumentals.astro", _page59],
    ["src/pages/ai/lyric-analysis.astro", _page60],
    ["src/pages/ai/mood-suggester.astro", _page61],
    ["src/pages/ai/playlist-generator.astro", _page62],
    ["src/pages/ai/press-release.astro", _page63],
    ["src/pages/ai/social-posts.astro", _page64],
    ["src/pages/ai/vr-video.astro", _page65],
    ["src/pages/api/arsenal.ts", _page66],
    ["src/pages/api/auth/register.ts", _page67],
    ["src/pages/api/auth/signin.ts", _page68],
    ["src/pages/api/auth/signout.ts", _page69],
    ["src/pages/api/import_catalog.ts", _page70],
    ["src/pages/arsenal.astro", _page71],
    ["src/pages/dashboard.astro", _page72],
    ["src/pages/promo/artwork.astro", _page73],
    ["src/pages/promo/bts.astro", _page74],
    ["src/pages/promo/countdown.astro", _page75],
    ["src/pages/promo/fan-art.astro", _page76],
    ["src/pages/promo/limited-merch.astro", _page77],
    ["src/pages/promo/listening-party.astro", _page78],
    ["src/pages/promo/lyric-video.astro", _page79],
    ["src/pages/promo/playlist.astro", _page80],
    ["src/pages/promo/podcast.astro", _page81],
    ["src/pages/promo/teaser.astro", _page82],
    ["src/pages/register.astro", _page83],
    ["src/pages/signin.astro", _page84],
    ["src/pages/index.astro", _page85]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
