import { useRef, useState } from "react";
import code from "../page-behaviors.js?raw";
import usePageScript from "../hooks/usePageScript.js";

/* AI Command Center: 2 cards ka chhota slider (arrows, dots, swipe)
 * NOTE: dono slides hamesha DOM mein rehti hain (sirf translate hota hai),
 * taake page-behaviors.js wale dialect tabs / regenerate button kaam karte rahein. */
function CommandSlider() {
  const [i, setI] = useState(0);
  const startX = useRef(null);
  const total = 2;
  const go = (n) => setI(Math.max(0, Math.min(total - 1, n)));

  const onDown = (e) => { startX.current = e.clientX; };
  const onUp = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1));
  };

  return (
    <div>
      <div className="overflow-hidden rounded-2xl touch-pan-y" onPointerDown={onDown} onPointerUp={onUp} onPointerCancel={() => { startX.current = null; }}>
        <div className="flex items-stretch transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>

          {/* Slide 1: AI Co-Pilot */}
          <div className="w-full shrink-0 min-w-0" aria-hidden={i !== 0}>
            <div className="h-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-teal-100/80 border border-teal-200 flex items-center justify-center text-teal-800">
                  <span className="material-symbols-outlined text-[22px]">auto_fix_high</span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-teal-800 font-bold">Generative Co-Pilot</div>
                  <h3 className="text-[18px] leading-snug text-[var(--text-primary)] font-bold">Multi-Dialect Dispatch</h3>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg text-xs font-semibold" id="dialect-tabs">
                  <button className="dialect-tab-btn px-3 py-1 rounded-md bg-white text-teal-800 shadow-xs border border-slate-200/60 transition-all font-semibold" data-target="urdu" type="button">Urdu</button>
                  <button className="dialect-tab-btn px-3 py-1 rounded-md text-slate-600 hover:text-slate-900 transition-all" data-target="arabic" type="button">Arabic</button>
                  <button className="dialect-tab-btn px-3 py-1 rounded-md text-slate-600 hover:text-slate-900 transition-all" data-target="english" type="button">English</button>
                </div>
                <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 border border-teal-200/60 px-2.5 py-1 rounded-full" id="confidence-pill">99.4% Match</span>
              </div>

              <div className="mt-3 p-4 rounded-2xl rounded-tl-sm bg-teal-50 border border-teal-100 text-[13px] leading-relaxed text-slate-800 min-h-[96px] flex items-center" id="dialect-output-box">
                “Assalam-o-Alaikum! Your favorite items are reserved in your cart. Tap below to confirm instant delivery before Maghrib prayers today.”
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-slate-600">
                  <span className="material-symbols-outlined text-[16px] text-teal-600">fingerprint</span>
                  <span>Human approved</span>
                </span>
                <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors flex items-center gap-1" id="refresh-copy-btn" type="button">
                  <span className="material-symbols-outlined text-[14px]">autorenew</span>
                  <span>Regenerate</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2: Audience Hub */}
          <div className="w-full shrink-0 min-w-0" aria-hidden={i !== 1}>
            <div className="h-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-100/80 border border-cyan-200 flex items-center justify-center text-cyan-800">
                  <span className="material-symbols-outlined text-[22px]">hub</span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-teal-800 font-bold">Privacy &amp; Segments</div>
                  <h3 className="text-[18px] leading-snug text-[var(--text-primary)] font-bold">Consent-First Audience Hub</h3>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[var(--surface-muted)] border border-slate-200/80 p-3.5">
                  <div className="text-[22px] font-extrabold text-[var(--text-primary)] leading-none">1.42M</div>
                  <div className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Contacts</div>
                </div>
                <div className="rounded-xl bg-[var(--surface-muted)] border border-slate-200/80 p-3.5">
                  <div className="text-[22px] font-extrabold text-teal-700 leading-none">100%</div>
                  <div className="mt-1 text-[11px] text-slate-500 uppercase tracking-wider font-semibold">PDPL audited</div>
                </div>
              </div>

              <ul className="mt-3 divide-y divide-slate-100 text-[13px] text-slate-700 rounded-xl border border-slate-200/80 overflow-hidden">
                <li className="flex items-center gap-2 px-3.5 py-2.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />VIP Spenders</li>
                <li className="flex items-center gap-2 px-3.5 py-2.5"><span className="w-1.5 h-1.5 rounded-full bg-teal-500" />Cart Abandoners</li>
                <li className="flex items-center gap-2 px-3.5 py-2.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />Riyadh &amp; Jeddah Residents</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
          {[0, 1].map((n) => (
            <button key={n} type="button" onClick={() => go(n)} aria-label={`Slide ${n + 1}`} aria-selected={i === n}
              className={`h-2 rounded-full transition-all duration-300 ${i === n ? "w-6 bg-teal-600" : "w-2 bg-slate-300 hover:bg-slate-400"}`} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label="Previous"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none transition">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          </button>
          <button type="button" onClick={() => go(i + 1)} disabled={i === total - 1} aria-label="Next"
            className="w-9 h-9 rounded-full bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 disabled:opacity-40 disabled:pointer-events-none transition">
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  usePageScript(code, "services");
  return (
    <div className="theme-services bg-[var(--surface-muted)] font-body-md text-body-md text-[var(--text-primary)] antialiased">
      <main className="w-full bg-[var(--surface-muted)] min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0fdfa]/80 via-[var(--surface-muted)] to-white py-12 sm:py-16 lg:py-20 border-b border-slate-100">
            <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-teal-200/40 via-cyan-100/20 to-transparent blur-3xl opacity-80" />
            <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
            <div className="relative max-w-7xl mx-auto px-gutter-desktop flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-white/90 border border-teal-200/70 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                {" "}
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-teal-800 font-semibold">
                  • NEXMEG SUITE • PK & KSA OMNICHANNEL INFRASTRUCTURE
                </span>
              </div>
              <h1 className="mt-space-lg font-display-hero text-display-hero text-[var(--text-primary)] max-w-4xl tracking-tight">
                Everything You Need to{" "}
                <span className="text-teal-700">
                  Reach, Convert
                </span>
                {" "}and Keep Customers
              </h1>
              <p className="mt-space-md font-body-lg text-body-lg text-slate-600 max-w-2xl">
                Everything you need to reach, convert and keep customers, in one place. One unified telecom and digital engine built specifically for Pakistan and Saudi Arabia.
              </p>
              <div className="mt-space-xl flex flex-wrap items-center justify-center gap-space-md">
                <a className="font-label-md text-label-md bg-[var(--brand-primary)] text-white px-space-lg py-3 rounded-lg hover:bg-teal-800 shadow-md shadow-teal-900/10 transition-all flex items-center gap-space-xs font-semibold" href="#channels">
                  <span>
                    Explore Channels
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px]">
                    south
                  </span>
                </a>
                {" "}
                <a className="font-label-md text-label-md bg-white text-slate-800 border border-slate-200/90 px-space-lg py-3 rounded-lg hover:bg-slate-50 hover:border-teal-300 shadow-sm transition-all flex items-center gap-space-xs font-medium" data-path="contact-us" href="#">
                  <span className="material-symbols-outlined text-teal-600 text-[18px]">
                    cell_tower
                  </span>
                  {" "}
                  <span>
                    Book Architecture Demo
                  </span>
                </a>
              </div>
              <div className="mt-space-xl pt-space-lg flex flex-wrap items-center justify-center gap-space-md text-slate-600">
                <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-white border border-teal-100 shadow-sm">
                  <span className="material-symbols-outlined text-teal-600 text-[16px]">
                    verified_user
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-slate-700 font-semibold">
                    100% PTA & PDPL Compliant
                  </span>
                </div>
                <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-white border border-teal-100 shadow-sm">
                  <span className="material-symbols-outlined text-teal-600 text-[16px]">
                    hub
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-slate-700 font-semibold">
                    Direct Carrier Transit
                  </span>
                </div>
                <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-white border border-teal-100 shadow-sm">
                  <span className="material-symbols-outlined text-teal-600 text-[16px]">
                    bolt
                  </span>
                  {" "}
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-slate-700 font-semibold">
                    &lt;0.04s Latency
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-white py-space-xl lg:py-28 overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-gutter-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600 shadow-[0_0_8px_rgba(13,148,136,0.6)]" />
                    {" "}
                    <span className="font-label-md text-label-md uppercase tracking-wider text-teal-800 font-semibold">
                      Our Services
                    </span>
                  </div>
                  <h2 className="font-display-hero text-[40px] leading-[48px] lg:text-display-hero text-[var(--text-primary)] tracking-tight">
                    Engineered for High-Conversion Scale
                  </h2>
                  <p className="font-body-md text-body-md text-slate-600 max-w-md">
                    Features built to eliminate messaging fragmentation across South Asia and the GCC.
                  </p>
                  <div className="relative mt-space-lg w-full h-80 rounded-2xl bg-slate-900 overflow-hidden shadow-xl border border-slate-200/80 flex items-center justify-center group">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" data-alt="A dark surrealist 3D render of a smooth iridescent liquid blob floating gracefully in obsidian space, reflecting electric cyan, deep oceanic teal, and luminous violet hues. High gloss finish with soft chromatic refraction, minimal studio lighting with deep charcoal backdrop, representing high-speed omni-channel telecom telemetry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiTInH8f5FnurS9gKaGijxJePak9Rn9887z4vNlysqm1QAF-sAFj_vJ0w9EmHQWlZe10zrxBR-p5-lrdjJT0dF3VsgpqPgCG71Vb72TLNWMfXwn4mPh0C4BrnMlKOgkloizFNyPth5_BuV7j3FeuNvwDXT_00rlfo_Qmpo_Pmosl8rInitmoO438iBwYWQ8GfdYm20iggHM_Oi2i6ZRLo9J0L9FiKdnTV4gThi9ftw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-space-sm rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/70 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-teal-600 text-[20px]">
                          ssid_chart
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm text-slate-800 font-semibold">
                          Dual KSA & PK Pipeline Active
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-teal-800 bg-teal-50 border border-teal-200/60 px-2 py-0.5 rounded-full font-semibold">
                        99.98% Live
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col divide-y-0 gap-space-sm" id="accordion-root">
                  <div className="accordion-item group bg-[var(--surface-muted)] border border-slate-200/80 rounded-xl p-space-md transition-all duration-300 hover:border-teal-300 hover:shadow-md cursor-pointer" data-expanded="true">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-baseline gap-space-md min-w-0">
                        <span className="font-headline-sm text-headline-sm text-teal-600 font-mono tracking-tight font-bold">
                          {'{'}01{'}'}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                          Campaign Builder
                        </h3>
                      </div>
                      <button aria-label="Toggle details" className="accordion-btn w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-transparent transition-all shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[22px] transition-transform duration-300">
                          remove
                        </span>
                      </button>
                    </div>
                    <div className="accordion-body mt-space-md text-slate-600 font-body-md text-body-md pl-12 pr-4 transition-all">
                      <p>
                        Drag-and-drop omnichannel visual flow builder for automated journeys and trigger dispatches. Seamlessly stitch multi-step branches across WhatsApp, SMS failover, and email.
                      </p>
                      <div className="mt-space-md flex flex-wrap gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Visual Node Engine
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Automatic Fallback
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-teal-50 border border-teal-200 px-space-sm py-1 rounded text-teal-800 font-semibold">
                          A/B Path Testing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item group bg-[var(--surface-muted)] border border-slate-200/80 rounded-xl p-space-md transition-all duration-300 hover:border-teal-300 hover:shadow-md cursor-pointer" data-expanded="false">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-baseline gap-space-md min-w-0">
                        <span className="font-headline-sm text-headline-sm text-teal-600 font-mono tracking-tight font-bold">
                          {'{'}02{'}'}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                          Audience Segments
                        </h3>
                      </div>
                      <button aria-label="Toggle details" className="accordion-btn w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-transparent transition-all shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[22px] transition-transform duration-300">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="accordion-body hidden mt-space-md text-slate-600 font-body-md text-body-md pl-12 pr-4 transition-all">
                      <p>
                        Granular segmentation by city (Karachi, Lahore, Islamabad, Riyadh, Jeddah, Dammam), purchase recency, and demographic behaviors. Filter audiences instantaneously across tens of millions of records.
                      </p>
                      <div className="mt-space-md flex flex-wrap gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Dynamic Cohorts
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          RFM Analytics
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-teal-50 border border-teal-200 px-space-sm py-1 rounded text-teal-800 font-semibold">
                          Geo-Coordinates
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item group bg-[var(--surface-muted)] border border-slate-200/80 rounded-xl p-space-md transition-all duration-300 hover:border-teal-300 hover:shadow-md cursor-pointer" data-expanded="false">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-baseline gap-space-md min-w-0">
                        <span className="font-headline-sm text-headline-sm text-teal-600 font-mono tracking-tight font-bold">
                          {'{'}03{'}'}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                          Intelligent Scheduling
                        </h3>
                      </div>
                      <button aria-label="Toggle details" className="accordion-btn w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-transparent transition-all shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[22px] transition-transform duration-300">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="accordion-body hidden mt-space-md text-slate-600 font-body-md text-body-md pl-12 pr-4 transition-all">
                      <p>
                        Auto-timed message dispatch tuned for local prayer times, business hours, and peak retail moments across PKT (UTC+5) and AST (UTC+3) to maximize open rates while respecting cultural pauses.
                      </p>
                      <div className="mt-space-md flex flex-wrap gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Prayer-Time Guard
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Timezone Sync
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-teal-50 border border-teal-200 px-space-sm py-1 rounded text-teal-800 font-semibold">
                          Throttled Delivery
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item group bg-[var(--surface-muted)] border border-slate-200/80 rounded-xl p-space-md transition-all duration-300 hover:border-teal-300 hover:shadow-md cursor-pointer" data-expanded="false">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-baseline gap-space-md min-w-0">
                        <span className="font-headline-sm text-headline-sm text-teal-600 font-mono tracking-tight font-bold">
                          {'{'}04{'}'}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                          Pre-approved Templates
                        </h3>
                      </div>
                      <button aria-label="Toggle details" className="accordion-btn w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-transparent transition-all shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[22px] transition-transform duration-300">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="accordion-body hidden mt-space-md text-slate-600 font-body-md text-body-md pl-12 pr-4 transition-all">
                      <p>
                        Library of verified WhatsApp and telecom sender templates ready for instant dispatch. Complete with DLT compliance for regional networks and Meta business verifications.
                      </p>
                      <div className="mt-space-md flex flex-wrap gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Meta Tier 1
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Urdu & Arabic Scripts
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-teal-50 border border-teal-200 px-space-sm py-1 rounded text-teal-800 font-semibold">
                          Zero-Rejection Guarantee
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item group bg-[var(--surface-muted)] border border-slate-200/80 rounded-xl p-space-md transition-all duration-300 hover:border-teal-300 hover:shadow-md cursor-pointer" data-expanded="false">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-baseline gap-space-md min-w-0">
                        <span className="font-headline-sm text-headline-sm text-teal-600 font-mono tracking-tight font-bold">
                          {'{'}05{'}'}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                          Live Real-Time Analytics
                        </h3>
                      </div>
                      <button aria-label="Toggle details" className="accordion-btn w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-transparent transition-all shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[22px] transition-transform duration-300">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="accordion-body hidden mt-space-md text-slate-600 font-body-md text-body-md pl-12 pr-4 transition-all">
                      <p>
                        Millisecond tracking of opens, clicks, delivery confirmations, and conversion revenue. Correlate delivery with real transaction spikes in real time.
                      </p>
                      <div className="mt-space-md flex flex-wrap gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          DLR Telemetry
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Revenue Attribution
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-teal-50 border border-teal-200 px-space-sm py-1 rounded text-teal-800 font-semibold">
                          Carrier Logs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item group bg-[var(--surface-muted)] border border-slate-200/80 rounded-xl p-space-md transition-all duration-300 hover:border-teal-300 hover:shadow-md cursor-pointer" data-expanded="false">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-baseline gap-space-md min-w-0">
                        <span className="font-headline-sm text-headline-sm text-teal-600 font-mono tracking-tight font-bold">
                          {'{'}06{'}'}
                        </span>
                        <h3 className="font-headline-md text-headline-md text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                          Unified Shared Inbox
                        </h3>
                      </div>
                      <button aria-label="Toggle details" className="accordion-btn w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-transparent transition-all shadow-sm" type="button">
                        <span className="material-symbols-outlined text-[22px] transition-transform duration-300">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="accordion-body hidden mt-space-md text-slate-600 font-body-md text-body-md pl-12 pr-4 transition-all">
                      <p>
                        One team inbox for two-way WhatsApp replies, customer queries, and multi-agent assignment. Empower support teams with unified customer context and canned responses.
                      </p>
                      <div className="mt-space-md flex flex-wrap gap-space-xs">
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Multi-Agent Queues
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-white border border-slate-200 px-space-sm py-1 rounded text-slate-700 font-medium">
                          Internal Notes
                        </span>
                        {" "}
                        <span className="font-label-sm text-label-sm bg-teal-50 border border-teal-200 px-space-sm py-1 rounded text-teal-800 font-semibold">
                          CSAT Triggers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full py-space-xl lg:py-28 overflow-hidden bg-slate-900 border-b border-slate-800" id="channels" style={{"backgroundImage": "linear-gradient(rgba(15, 23, 42, 0.88), rgba(4, 47, 46, 0.92)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiTInH8f5FnurS9gKaGijxJePak9Rn9887z4vNlysqm1QAF-sAFj_vJ0w9EmHQWlZe10zrxBR-p5-lrdjJT0dF3VsgpqPgCG71Vb72TLNWMfXwn4mPh0C4BrnMlKOgkloizFNyPth5_BuV7j3FeuNvwDXT_00rlfo_Qmpo_Pmosl8rInitmoO438iBwYWQ8GfdYm20iggHM_Oi2i6ZRLo9J0L9FiKdnTV4gThi9ftw')", "backgroundAttachment": "fixed", "backgroundSize": "cover", "backgroundPosition": "center"}}>
            <div className="max-w-7xl mx-auto px-gutter-desktop relative z-10">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-teal-300 font-semibold">
                  Infrastructure Channels
                </span>
                <h2 className="mt-space-xs font-display-hero text-[36px] lg:text-display-hero text-white tracking-tight font-bold">
                  Direct Multi-Channel Distribution
                </h2>
                <div className="w-12 h-1 bg-white/70 rounded-full my-space-sm" />
                <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl">
                  Zero intermediate hops. We connect your enterprise stack directly into telecom towers and Tier-1 messaging gateways across Pakistan and Saudi Arabia.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                <div className="lg:col-span-1 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-space-lg flex flex-col justify-between text-center hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 group shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 mb-space-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        chat
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-wider font-semibold mb-space-xs">
                      Official Cloud API
                    </span>
                    <h3 className="font-headline-md text-headline-md text-white font-semibold">
                      WhatsApp Business
                    </h3>
                    <p className="mt-space-sm font-body-md text-body-md text-slate-300">
                      Official Cloud API, catalog showcase, interactive buttons, 24/7 automated bot flows, and verified green tick support.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-white/10 flex flex-wrap justify-center gap-space-xs text-teal-200 font-label-sm text-label-sm">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      Meta Green Badge
                    </span>
                    {" "}
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      Direct Checkout
                    </span>
                    {" "}
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      Flow Bot
                    </span>
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-space-lg flex flex-col justify-between text-center hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 group shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 mb-space-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        sms
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-teal-600/20 text-teal-200 border border-teal-600/30 uppercase tracking-wider font-semibold mb-space-xs">
                      Direct Transit
                    </span>
                    <h3 className="font-headline-md text-headline-md text-white font-semibold">
                      SMS Carrier Routes
                    </h3>
                    <p className="mt-space-sm font-body-md text-body-md text-slate-300">
                      Ultra-fast direct carrier pipelines across Pakistan (Jazz, Telenor, Zong, Ufone) and Saudi Arabia (STC, Mobily, Zain).
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-white/10 flex flex-wrap justify-center gap-1.5 text-teal-200 font-label-sm text-label-sm">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Jazz
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Telenor
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Zong
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      STC
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Mobily
                    </span>
                    {" "}
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Zain
                    </span>
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-space-lg flex flex-col justify-between text-center hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 group shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 mb-space-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        mark_email_read
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 uppercase tracking-wider font-semibold mb-space-xs">
                      Dedicated IP
                    </span>
                    <h3 className="font-headline-md text-headline-md text-white font-semibold">
                      Automated Email
                    </h3>
                    <p className="mt-space-sm font-body-md text-body-md text-slate-300">
                      High-deliverability transactional emails, newsletters, automated onboarding sequences, and SMTP relays.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-white/10 flex items-center justify-center gap-space-xs text-teal-300 font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      speed
                    </span>
                    {" "}
                    <span className="font-medium">
                      99.4% Inbox Placement Guarantee
                    </span>
                  </div>
                </div>
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-space-lg flex flex-col justify-between text-center hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 group shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 mb-space-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        forum
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider font-semibold mb-space-xs">
                      Omni Sync
                    </span>
                    <h3 className="font-headline-md text-headline-md text-white font-semibold">
                      Social Messaging
                    </h3>
                    <p className="mt-space-sm font-body-md text-body-md text-slate-300">
                      Unified planning, comment-to-DM triggers, and direct replies across Instagram, Facebook, TikTok, and Snapchat.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-white/10 flex justify-center gap-space-xs text-slate-300 font-body-sm text-body-sm">
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      IG Direct
                    </span>
                    {" "}
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      Snapchat
                    </span>
                    {" "}
                    <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                      TikTok Shop
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-space-lg flex flex-col justify-between text-center hover:border-teal-400/50 hover:bg-slate-900/80 transition-all duration-300 group shadow-2xl">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-teal-300 mb-space-md group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[32px]">
                        ads_click
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm px-space-sm py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 uppercase tracking-wider font-semibold mb-space-xs">
                      Instant Ingestion
                    </span>
                    <h3 className="font-headline-md text-headline-md text-white font-semibold">
                      Conversion Ads
                    </h3>
                    <p className="mt-space-sm font-body-md text-body-md text-slate-300 max-w-xl">
                      Direct lead-generation click-to-WhatsApp and social ads feeding directly into automated CRM contact pipelines.
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-md border-t border-white/10 flex items-center justify-center gap-space-xs text-teal-300 font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      trending_up
                    </span>
                    {" "}
                    <span className="font-medium">
                      Zero drop-off from Ad to Chat flow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-white py-space-xl lg:py-24 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-gutter-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-teal-700 font-semibold">
                    Vertical Specialization
                  </span>
                  <h2 className="mt-space-xs font-headline-lg text-headline-lg text-[var(--text-primary)] tracking-tight font-bold">
                    Tuned for Regional Commerce
                  </h2>
                  <p className="mt-space-xs font-body-md text-body-md text-slate-600">
                    Pre-built messaging architectures designed specifically for consumer behavioral patterns in Riyadh, Jeddah, Karachi, and Lahore.
                  </p>
                </div>
                <a className="font-label-md text-label-md text-teal-700 hover:text-teal-800 flex items-center gap-1 font-semibold group self-start md:self-end" href="#">
                  <span>
                    View All Verticals
                  </span>
                  {" "}
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col group">
                  <div className="relative h-52 w-full overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern high-end Middle Eastern contemporary restaurant interior in Riyadh, sleek ambient mood lighting with brass accents and pristine dining tables, subtle dark spruce and teal color tones, fine dining culinary presentation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxSDmxVRzlvEtTxDGpHSqA3_YS9-pU9rqVUhwkTGgrqtgv7nPQ5UZRba4uddk-BBy9Ha9lHRevXKZOcyzE2o-WKHb0UDrp9_NKc9GYLilaka-ikDK2f05CbppqOcf16i9DKDVcH0R-3_b9Jn9xiGjEYipyELcjmRSvixzebun8kxWczTOV03vwSAIBXfXMRaJdhtXwyle4DuZugLFfjRThLB09JVoZMHhUrUod7Tu9" />
                    <div className="absolute top-3 left-3">
                      <span className="font-label-sm text-[11px] bg-teal-600 text-white font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                        High Impact
                      </span>
                    </div>
                  </div>
                  <div className="p-space-lg flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-space-sm">
                        <h3 className="font-headline-sm text-headline-sm text-[var(--text-primary)] font-bold">
                          Restaurants & Food
                        </h3>
                        <button aria-label="Bookmark vertical" className="text-slate-400 hover:text-teal-600 transition-colors shrink-0" type="button">
                          <span className="material-symbols-outlined text-[22px]">
                            favorite_border
                          </span>
                        </button>
                      </div>
                      <div className="mt-space-sm flex items-baseline gap-space-xs">
                        <span className="font-display-hero text-[28px] font-extrabold text-[var(--text-primary)] tracking-tight">
                          3.4x ROI
                        </span>
                        {" "}
                        <span className="font-body-sm text-body-sm text-slate-400 line-through">
                          1.2x Benchmark
                        </span>
                      </div>
                      <div className="mt-space-md grid grid-cols-2 gap-y-2 gap-x-2 text-slate-600 font-body-sm text-body-sm pt-space-xs">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            speed
                          </span>
                          {" "}
                          <span className="truncate">
                            &lt;0.04s Latency
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            verified
                          </span>
                          {" "}
                          <span className="truncate">
                            PTA & PDPL Verified
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            all_inclusive
                          </span>
                          {" "}
                          <span className="truncate">
                            Unlimited Iftar Alerts
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            support_agent
                          </span>
                          {" "}
                          <span className="truncate">
                            24/7 Concierge
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-slate-100 flex items-center justify-between gap-space-sm">
                      <a className="font-label-sm text-label-sm border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-space-md py-2 rounded-lg font-bold transition-all" data-path="contact-us" href="#">
                        Explore Solution
                      </a>
                      <div className="flex items-center gap-0.5 text-teal-600">
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col group">
                  <div className="relative h-52 w-full overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Editorial upscale retail fashion boutique showroom with minimalist designer clothing rails, soft cinematic studio spotlights, deep obsidian floor reflections, and sleek oceanic teal styling accessories." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbUveA0GRdg-urGVoKxM9D6BzIPFJnAVx0kK094vTSzByxpAYOpYLaSAsX44ILGfGJjXOt7O-c_VEmj7Pld51xJuaej_fqzutZ27wHxFxY8LZlGRyPfHOPGOnxvucKqfenT4Q8hZeRKjXIYmVDWmSKjV68WflSQEwvwxgZuUMU3SJUBjUIa8lYsX1BksZz3uccw5myfEB7-gR_mLQQRQ6dl3nbpxqkBSkXxgGw8IQQ" />
                    <div className="absolute top-3 left-3">
                      <span className="font-label-sm text-[11px] bg-teal-600 text-white font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                        Regional Pick
                      </span>
                    </div>
                  </div>
                  <div className="p-space-lg flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-space-sm">
                        <h3 className="font-headline-sm text-headline-sm text-[var(--text-primary)] font-bold">
                          Retail & Fashion
                        </h3>
                        <button aria-label="Bookmark vertical" className="text-slate-400 hover:text-teal-600 transition-colors shrink-0" type="button">
                          <span className="material-symbols-outlined text-[22px]">
                            favorite_border
                          </span>
                        </button>
                      </div>
                      <div className="mt-space-sm flex items-baseline gap-space-xs">
                        <span className="font-display-hero text-[28px] font-extrabold text-[var(--text-primary)] tracking-tight">
                          94.8% Open
                        </span>
                        {" "}
                        <span className="font-body-sm text-body-sm text-slate-400 line-through">
                          38% Email Base
                        </span>
                      </div>
                      <div className="mt-space-md grid grid-cols-2 gap-y-2 gap-x-2 text-slate-600 font-body-sm text-body-sm pt-space-xs">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            flash_on
                          </span>
                          {" "}
                          <span className="truncate">
                            Flash Eid Alerts
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            verified
                          </span>
                          {" "}
                          <span className="truncate">
                            Green Tick Sender
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            loyalty
                          </span>
                          {" "}
                          <span className="truncate">
                            VIP Broadcasts
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            groups
                          </span>
                          {" "}
                          <span className="truncate">
                            Tiered Segments
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-slate-100 flex items-center justify-between gap-space-sm">
                      <a className="font-label-sm text-label-sm border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-space-md py-2 rounded-lg font-bold transition-all" data-path="contact-us" href="#">
                        Explore Solution
                      </a>
                      <div className="flex items-center gap-0.5 text-teal-600">
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col group">
                  <div className="relative h-52 w-full overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern high-tech logistics fulfillment and automated e-commerce package sorting warehouse bathed in deep charcoal and neon cyan telemetry lights, conveying precision, speed, and real-time delivery tracking." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2CDIIP7Cu1GUypDSNwvqLHMj3wq80tGnLcH7ZzDOWw32TjVpJvUUCEInKQzVQ5LL4ZAb64UOHfaBfXXqaffI-bfpZSVlybRtZ0V0Kd8GG2lmEs8e5eh5lNvj2alY4VX4xzv0NdfQ2_lX2F300H7cplGtzUJAfClXsmoW0u9pnTDCzO7vjT2Pdtpw2PMRlmP9dJ353qUKUjtCFhey4a7rBBq_5vREFDWgKTntkXHgW" />
                    <div className="absolute top-3 left-3">
                      <span className="font-label-sm text-[11px] bg-teal-600 text-white font-bold px-3 py-1 rounded shadow-md uppercase tracking-wider">
                        High ROI
                      </span>
                    </div>
                  </div>
                  <div className="p-space-lg flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-space-sm">
                        <h3 className="font-headline-sm text-headline-sm text-[var(--text-primary)] font-bold">
                          E-Commerce & D2C
                        </h3>
                        <button aria-label="Bookmark vertical" className="text-slate-400 hover:text-teal-600 transition-colors shrink-0" type="button">
                          <span className="material-symbols-outlined text-[22px]">
                            favorite_border
                          </span>
                        </button>
                      </div>
                      <div className="mt-space-sm flex items-baseline gap-space-xs">
                        <span className="font-display-hero text-[28px] font-extrabold text-[var(--text-primary)] tracking-tight">
                          42% Cart Recovered
                        </span>
                        {" "}
                        <span className="font-body-sm text-body-sm text-slate-400 line-through">
                          11% Industry Std
                        </span>
                      </div>
                      <div className="mt-space-md grid grid-cols-2 gap-y-2 gap-x-2 text-slate-600 font-body-sm text-body-sm pt-space-xs">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            shopping_cart
                          </span>
                          {" "}
                          <span className="truncate">
                            WhatsApp Abandoned
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            local_shipping
                          </span>
                          {" "}
                          <span className="truncate">
                            Live Dispatch Alerts
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            sync
                          </span>
                          {" "}
                          <span className="truncate">
                            Shopify & Salla Sync
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[16px] text-teal-600 shrink-0">
                            analytics
                          </span>
                          {" "}
                          <span className="truncate">
                            Automated Attribution
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-lg pt-space-md border-t border-slate-100 flex items-center justify-between gap-space-sm">
                      <a className="font-label-sm text-label-sm border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-space-md py-2 rounded-lg font-bold transition-all" data-path="contact-us" href="#">
                        Explore Solution
                      </a>
                      <div className="flex items-center gap-0.5 text-teal-600">
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                        {" "}
                        <span className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-gradient-to-b from-[var(--surface-muted)] via-white to-[#f0fdfa]/40 py-space-xl lg:py-28 overflow-hidden border-b border-slate-100" id="ecosystem-showcase">
            <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-gradient-to-b from-teal-200/35 via-teal-100/25 to-transparent rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 right-10 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />
            <div className="max-w-7xl mx-auto px-gutter-desktop relative z-10">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-space-xs px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-teal-800 text-label-sm font-semibold tracking-wide uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  {" "}
                  <span>
                    Ecosystem Connectivity & Unified Sync
                  </span>
                </div>
                <h2 className="font-display-hero text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-[var(--text-primary)] font-extrabold tracking-tight">
                  An original network of connectors, APIs &{" "}
                  <span className="relative inline-block px-3 py-0.5 rounded-md bg-teal-200/70 text-[#4338ca] text-teal-800">
                    gateways.
                  </span>
                </h2>
                <p className="mt-4 font-body-lg text-body-lg text-slate-600 max-w-2xl">
                  Instantly integrate your e-commerce storefronts, payment gateways, and enterprise CRMs across Pakistan and Saudi Arabia without writing infrastructure glue code.
                </p>
              </div>
              <div className="relative w-full">
                <button aria-label="Previous integration cards" className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:text-teal-700 hover:border-teal-300 hover:scale-105 active:scale-95 transition-all flex items-center justify-center" id="carousel-prev-btn" type="button">
                  <span className="material-symbols-outlined text-[24px]">
                    arrow_back
                  </span>
                </button>
                {" "}
                <button aria-label="Next integration cards" className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:text-teal-700 hover:border-teal-300 hover:scale-105 active:scale-95 transition-all flex items-center justify-center" id="carousel-next-btn" type="button">
                  <span className="material-symbols-outlined text-[24px]">
                    arrow_forward
                  </span>
                </button>
                <div className="overflow-x-auto no-scrollbar scroll-smooth py-6 px-2" id="circular-slider" style={{"scrollbarWidth": "none", "MsOverflowStyle": "none"}}>
                  <div className="flex items-center justify-start lg:justify-center gap-6 sm:gap-8 min-w-max mx-auto px-4">
                    <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-full bg-white border border-slate-200/90 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_55px_-10px_rgba(13,148,136,0.18)] hover:border-teal-300 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 relative shrink-0 group">
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-teal-600 to-teal-600 text-white shadow-lg shadow-teal-600/30 flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[30px]">
                          storefront
                        </span>
                      </div>
                      <div className="mt-4 font-display-hero text-[40px] sm:text-[44px] font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                        50+
                      </div>
                      <div className="mt-1 font-headline-sm text-[16px] font-bold text-slate-800">
                        E-Commerce Sync
                      </div>
                      <p className="mt-2 font-body-sm text-[13px] text-slate-500 leading-snug max-w-[210px]">
                        Pre-built native connectors for Shopify, Salla, Zid, WooCommerce & Magento with zero delay.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                        {" "}
                        <span>
                          Sub-40ms Bi-directional
                        </span>
                      </div>
                    </div>
                    <div className="w-[315px] h-[315px] sm:w-[335px] sm:h-[335px] rounded-full bg-white border-2 border-teal-400 shadow-[0_25px_60px_-12px_rgba(13,148,136,0.22)] hover:border-teal-500 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 relative shrink-0 group">
                      <div className="absolute inset-0 rounded-full border border-teal-300/40 pointer-events-none scale-105 animate-pulse" />
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 text-white shadow-lg shadow-teal-500/35 flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[30px]">
                          verified
                        </span>
                      </div>
                      <div className="mt-4 font-display-hero text-[40px] sm:text-[44px] font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-teal-600 transition-colors">
                        99.98%
                      </div>
                      <div className="mt-1 font-headline-sm text-[16px] font-bold text-slate-800">
                        Sync & Route Uptime
                      </div>
                      <p className="mt-2 font-body-sm text-[13px] text-slate-500 leading-snug max-w-[215px]">
                        Carrier-grade redundancy across STC, Mobily, Zain, Jazz, Telenor, and Zong telecom nodes.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        {" "}
                        <span>
                          PTA & PDPL Certified
                        </span>
                      </div>
                    </div>
                    <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-full bg-white border border-slate-200/90 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_55px_-10px_rgba(13,148,136,0.18)] hover:border-teal-300 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 relative shrink-0 group">
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-teal-800 to-teal-600 text-white shadow-lg shadow-teal-600/30 flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[30px]">
                          trophy
                        </span>
                      </div>
                      <div className="mt-4 font-display-hero text-[40px] sm:text-[44px] font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                        290M+
                      </div>
                      <div className="mt-1 font-headline-sm text-[16px] font-bold text-slate-800">
                        Monthly Event Dispatch
                      </div>
                      <p className="mt-2 font-body-sm text-[13px] text-slate-500 leading-snug max-w-[210px]">
                        Real-time transactional webhooks, Google Sheets bridges & Salesforce CRM automation pipelines.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full border border-teal-200/70">
                        <span className="material-symbols-outlined text-[13px]">
                          bolt
                        </span>
                        {" "}
                        <span>
                          REST & gRPC Streams
                        </span>
                      </div>
                    </div>
                    <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-full bg-white border border-slate-200/90 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_55px_-10px_rgba(13,148,136,0.18)] hover:border-teal-300 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 relative shrink-0 group">
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[30px]">
                          credit_card
                        </span>
                      </div>
                      <div className="mt-4 font-display-hero text-[40px] sm:text-[44px] font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                        100%
                      </div>
                      <div className="mt-1 font-headline-sm text-[16px] font-bold text-slate-800">
                        Localized Pay Rails
                      </div>
                      <p className="mt-2 font-body-sm text-[13px] text-slate-500 leading-snug max-w-[210px]">
                        Native purchase triggers for Mada, Apple Pay, JazzCash, EasyPaisa, Tabby & Tamara installments.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70">
                        <span className="material-symbols-outlined text-[13px]">
                          lock
                        </span>
                        {" "}
                        <span>
                          PCI-DSS Level 1 Safe
                        </span>
                      </div>
                    </div>
                    <div className="w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] rounded-full bg-white border border-slate-200/90 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_55px_-10px_rgba(13,148,136,0.18)] hover:border-teal-300 transition-all duration-300 flex flex-col items-center justify-center text-center p-8 relative shrink-0 group">
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-600/30 flex items-center justify-center ring-4 ring-white group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[30px]">
                          hub
                        </span>
                      </div>
                      <div className="mt-4 font-display-hero text-[40px] sm:text-[44px] font-extrabold text-[var(--text-primary)] tracking-tight group-hover:text-teal-700 transition-colors">
                        &lt;15 min
                      </div>
                      <div className="mt-1 font-headline-sm text-[16px] font-bold text-slate-800">
                        Fast Enterprise Setup
                      </div>
                      <p className="mt-2 font-body-sm text-[13px] text-slate-500 leading-snug max-w-[210px]">
                        Zero engineering setup for HubSpot, Salesforce, Zoho, Freshdesk, and regional custom ERP systems.
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-cyan-800 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200/70">
                        <span className="material-symbols-outlined text-[13px]">
                          sync_alt
                        </span>
                        {" "}
                        <span>
                          Bi-directional Field Map
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-center gap-2" id="carousel-dots">
                  <button aria-label="Go to slide 1" className="w-3 h-3 rounded-full bg-teal-600 transition-all cursor-pointer" data-slide="0" />
                  {" "}
                  <button aria-label="Go to slide 2" className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all cursor-pointer" data-slide="1" />
                  {" "}
                  <button aria-label="Go to slide 3" className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all cursor-pointer" data-slide="2" />
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-slate-500 font-label-md text-label-md">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                  Native Connectors Available:
                </span>
                {" "}
                <span className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-teal-700 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Shopify App Store
                </span>
                {" "}
                <span className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-teal-700 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  WooCommerce
                </span>
                {" "}
                <span className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-teal-700 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Salla (KSA)
                </span>
                {" "}
                <span className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-teal-700 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  Zid (KSA)
                </span>
                {" "}
                <span className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-teal-700 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  Salesforce CRM
                </span>
                {" "}
                <span className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-teal-700 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Mada & JazzCash
                </span>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-[var(--surface-muted)] py-space-xl lg:py-28" id="ai-command-center">
            <div className="max-w-6xl mx-auto px-gutter-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left: 3-image business collage */}
                <div className="relative">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200/70 aspect-[16/10]">
                    <img className="absolute inset-0 w-full h-full object-cover" alt="Retail business showroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbUveA0GRdg-urGVoKxM9D6BzIPFJnAVx0kK094vTSzByxpAYOpYLaSAsX44ILGfGJjXOt7O-c_VEmj7Pld51xJuaej_fqzutZ27wHxFxY8LZlGRyPfHOPGOnxvucKqfenT4Q8hZeRKjXIYmVDWmSKjV68WflSQEwvwxgZuUMU3SJUBjUIa8lYsX1BksZz3uccw5myfEB7-gR_mLQQRQ6dl3nbpxqkBSkXxgGw8IQQ" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent" />
                    <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] sm:text-[12px] font-semibold text-slate-800">
                        <span className="material-symbols-outlined text-[15px] text-teal-600">verified</span>PTA &amp; PDPL compliant
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-[11px] sm:text-[12px] font-semibold text-slate-800">
                        <span className="material-symbols-outlined text-[15px] text-teal-600">bolt</span>&lt;0.04s routing
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4 ml-[12%] sm:ml-[15%] grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200/70 aspect-[4/3]">
                      <img className="absolute inset-0 w-full h-full object-cover" alt="Restaurant business" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxSDmxVRzlvEtTxDGpHSqA3_YS9-pU9rqVUhwkTGgrqtgv7nPQ5UZRba4uddk-BBy9Ha9lHRevXKZOcyzE2o-WKHb0UDrp9_NKc9GYLilaka-ikDK2f05CbppqOcf16i9DKDVcH0R-3_b9Jn9xiGjEYipyELcjmRSvixzebun8kxWczTOV03vwSAIBXfXMRaJdhtXwyle4DuZugLFfjRThLB09JVoZMHhUrUod7Tu9" loading="lazy" />
                    </div>
                    <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200/70 aspect-[4/3]">
                      <img className="absolute inset-0 w-full h-full object-cover" alt="Logistics and delivery business" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2CDIIP7Cu1GUypDSNwvqLHMj3wq80tGnLcH7ZzDOWw32TjVpJvUUCEInKQzVQ5LL4ZAb64UOHfaBfXXqaffI-bfpZSVlybRtZ0V0Kd8GG2lmEs8e5eh5lNvj2alY4VX4xzv0NdfQ2_lX2F300H7cplGtzUJAfClXsmoW0u9pnTDCzO7vjT2Pdtpw2PMRlmP9dJ353qUKUjtCFhey4a7rBBq_5vREFDWgKTntkXHgW" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* Right: heading + slider */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-[11px] font-semibold tracking-wide uppercase mb-3">
                    <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                    <span>Autonomous Intelligence Engine</span>
                  </div>
                  <h2 className="font-display-hero text-[30px] sm:text-[36px] text-[var(--text-primary)] tracking-tight font-extrabold">
                    AI Command Center &amp; Audience Engine
                  </h2>
                  <p className="mt-3 mb-6 text-[15px] leading-relaxed text-slate-600">
                    Dialect-accurate broadcasts and a consent-first audience, working together for your business.
                  </p>
                  <CommandSlider />
                </div>

              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
