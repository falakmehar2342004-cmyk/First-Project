import { PageHero } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";

const ACTIONS = [[["add sender id", "whitelist"], "/portal/compliance/senders"]];

export default function Compliance() {
  const onAction = useActionLinks(ACTIONS);
  return (
    <div className="contents" onClick={onAction}>
      <div className="flex flex-col w-full">
        <div className="px-6 py-6 md:px-8 md:py-8 max-w-[1600px] w-full mx-auto space-y-6">
          <PageHero>
            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-jk-label-sm uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  {' '}Pakistan Regulatory Gateway Active
                </div>
                <h1 className="text-jk-headline-lg text-white tracking-tight flex items-center gap-2.5">
                  Compliance &amp; Telecom Regulations{' '}
                  <span aria-label="shield" className="text-2xl" role="img">
                    🛡️
                  </span>
                </h1>
                <p className="text-jk-body-md text-white/85 leading-relaxed">
                  Monitor Pakistan PTA regulations, Meta Cloud API quality tiers, carrier DND registry scrubbing, and consumer opt-out compliance.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-sm">
                  <span className="material-symbols-outlined text-emerald-300 text-[20px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
                    verified
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] uppercase tracking-wide text-white/75">
                      PTA Regulatory Status
                    </span>
                    {' '}
                    <span className="text-jk-label-md font-bold text-white flex items-center gap-1.5">
                      100% Compliant{' '}
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {' '}Green Tier
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-jk-label-md transition-all duration-200 shadow-sm active:scale-[0.98]" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    receipt_long
                  </span>
                  {' '}
                  <span>
                    Download Audit Log
                  </span>
                  {' '}
                  <span className="text-xs">
                    📋
                  </span>
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-portal-accent to-[#f97316] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-jk-label-md shadow-lg shadow-[#f97316]/30 transition-all duration-200 active:scale-[0.98]" type="button">
                  <span className="material-symbols-outlined text-[20px]">
                    add_circle
                  </span>
                  {' '}
                  <span>
                    Add Sender ID / Whitelist
                  </span>
                </button>
              </div>
            </div>
          </PageHero>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-portal-brand-deep/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-portal-brand-deep text-[24px]">
                    verified_user
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#d1fae5] text-[#065f46] text-jk-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                  {' '}Whitelisted
                </span>
              </div>
              <div className="mt-4">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider block">
                  PTA Approved Sender IDs
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-jk-metric-stat text-portal-ink">
                    6 Registered
                  </span>
                </div>
                <p className="text-jk-body-sm text-portal-ink-soft mt-1">
                  Jazz, Zong, Telenor, Ufone verified
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-emerald-600 text-[24px]">
                    workspace_premium
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#d1fae5] text-[#065f46] text-jk-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    bolt
                  </span>
                  {' '}100% Healthy
                </span>
              </div>
              <div className="mt-4">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider block">
                  WhatsApp Quality Rating
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-jk-metric-stat text-portal-ink">
                    High (Green Tier)
                  </span>
                </div>
                <p className="text-jk-body-sm text-portal-ink-soft mt-1">
                  0.02% spam flag rate • Meta Cloud API
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-portal-accent text-[24px]">
                    person_off
                  </span>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-portal-tint text-portal-brand-deep text-jk-label-sm font-semibold">
                  Instant Scrub
                </span>
              </div>
              <div className="mt-4">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider block">
                  Opt-Out &amp; Unsubscribes
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-jk-metric-stat text-portal-ink">
                    1,420
                  </span>
                  {' '}
                  <span className="text-jk-body-sm text-portal-ink-soft">
                    (0.08%)
                  </span>
                </div>
                <p className="text-jk-body-sm text-portal-ink-soft mt-1">
                  Auto-scrubbed from next broadcasts
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between gap-3">
                <div className="w-11 h-11 rounded-xl bg-portal-mint-2/30 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-portal-brand-deep text-[24px]">
                    filter_alt_off
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-portal-success text-jk-label-sm font-semibold">
                  Saved PKR 46,125
                </span>
              </div>
              <div className="mt-4">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider block">
                  Carrier DND Registry Scrubbing
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-jk-metric-stat text-portal-ink">
                    18,450
                  </span>
                  {' '}
                  <span className="text-jk-body-sm text-portal-success font-semibold">
                    Filtered
                  </span>
                </div>
                <p className="text-jk-body-sm text-portal-ink-soft mt-1">
                  Telco DND blocks saved budget • 99.9%
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-sm space-y-3">
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
              <button className="px-4 py-2 rounded-xl bg-portal-brand-deep text-white text-jk-label-md whitespace-nowrap shadow-sm transition-all" type="button">
                Overview &amp; Health
              </button>
              <button className="px-4 py-2 rounded-xl text-portal-ink-soft hover:bg-portal-tint hover:text-portal-ink text-jk-label-md whitespace-nowrap transition-colors" type="button">
                PTA Sender IDs &amp; Letter of Auth
              </button>
              <button className="px-4 py-2 rounded-xl text-portal-ink-soft hover:bg-portal-tint hover:text-portal-ink text-jk-label-md whitespace-nowrap transition-colors" type="button">
                Meta Template Quality &amp; Flags
              </button>
              <button className="px-4 py-2 rounded-xl text-portal-ink-soft hover:bg-portal-tint hover:text-portal-ink text-jk-label-md whitespace-nowrap transition-colors" type="button">
                Consumer Opt-Out (STOP) List
              </button>
              <button className="px-4 py-2 rounded-xl text-portal-ink-soft hover:bg-portal-tint hover:text-portal-ink text-jk-label-md whitespace-nowrap transition-colors" type="button">
                Carrier DND Registry
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <div className="relative w-full sm:w-96">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-portal-ink-muted text-[18px]">
                  search
                </span>
                <input className="w-full h-10 pl-9 pr-4 rounded-xl bg-portal-tint text-portal-ink placeholder:text-portal-ink-muted text-jk-body-sm outline-none transition-colors focus:bg-portal-tint-2" placeholder="Search by Sender ID, phone number, or regulatory ticket..." type="text" />
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                <div className="relative">
                  <select className="h-10 pl-3 pr-8 rounded-xl bg-portal-tint text-portal-ink text-jk-label-md appearance-none cursor-pointer outline-none hover:bg-portal-tint-2 transition-colors" defaultValue="Approved & Active">
                    <option>
                      All Statuses
                    </option>
                    <option>
                      Approved &amp; Active
                    </option>
                    <option>
                      Pending Telecom Review
                    </option>
                    <option>
                      Flagged
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-portal-ink-muted text-[16px] pointer-events-none">
                    expand_more
                  </span>
                </div>
                <button className="h-10 px-3.5 rounded-xl bg-portal-tint hover:bg-portal-tint-2 text-portal-ink-soft hover:text-portal-ink text-jk-label-sm flex items-center gap-1.5 transition-colors whitespace-nowrap" type="button">
                  <span className="material-symbols-outlined text-[16px] text-portal-brand-deep">
                    sync
                  </span>
                  {' '}
                  <span>
                    Regulatory Refresh ⏱️ (Auto-sync 15m)
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
                  <div>
                    <h2 className="text-jk-headline-md text-portal-ink tracking-tight">
                      Active Sender IDs &amp; Telco Whitelisting Status
                    </h2>
                    <p className="text-jk-body-sm text-portal-ink-soft">
                      4 telco networks mapped under PTA Non-Objection Certification
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-portal-tint-2 text-portal-ink text-jk-label-sm">
                      4 IDs Configured
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full text-left text-jk-body-sm">
                    <thead>
                      <tr className="bg-portal-tint/60 text-portal-ink-muted uppercase text-[11px] tracking-wider rounded-xl">
                        <th className="py-3 px-4 rounded-l-xl">
                          Sender ID / Brand
                        </th>
                        <th className="py-3 px-4">
                          Traffic Type
                        </th>
                        <th className="py-3 px-4">
                          Telco Routing (Jazz/Zong/Tel/Ufone)
                        </th>
                        <th className="py-3 px-4">
                          PTA NOC Number
                        </th>
                        <th className="py-3 px-4">
                          Status
                        </th>
                        <th className="py-3 px-4 text-right rounded-r-xl">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-0">
                      <tr className="hover:bg-portal-tint/40 transition-colors">
                        <td className="py-4 px-4 text-jk-label-md text-portal-ink flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          {' '}
                          <span className="font-bold tracking-tight">
                            nExMeg-PK
                          </span>
                        </td>
                        <td className="py-4 px-4 text-portal-ink-soft">
                          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-portal-brand-deep">
                            <span className="material-symbols-outlined text-[14px]">
                              password
                            </span>
                            {' '}Transactional / OTP
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1.5" title="Jazz, Zong, Telenor, Ufone Whitelisted">
                            <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                              JZ
                            </span>
                            {' '}
                            <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                              ZG
                            </span>
                            {' '}
                            <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                              TR
                            </span>
                            {' '}
                            <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center">
                              UF
                            </span>
                            {' '}
                            <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                              check_circle
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-mono text-[12px] text-portal-ink">
                          #PTA-NOC-8842-PK
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-jk-label-sm">
                            Active Whitelisted
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg text-portal-ink-soft hover:bg-portal-tint-2 hover:text-portal-brand-deep transition-colors" title="View PTA NOC Certificate" type="button">
                              <span className="material-symbols-outlined text-[18px]">
                                verified
                              </span>
                            </button>
                            <button className="p-1.5 rounded-lg text-portal-ink-soft hover:bg-portal-tint-2 hover:text-portal-brand-deep transition-colors" title="Manage Routing" type="button">
                              <span className="material-symbols-outlined text-[18px]">
                                tune
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-portal-tint/40 transition-colors">
                        <td className="py-4 px-4 text-jk-label-md text-portal-ink flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          {' '}
                          <span className="font-bold tracking-tight">
                            NEXMEG-SALE
                          </span>
                        </td>
                        <td className="py-4 px-4 text-portal-ink-soft">
                          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-portal-danger">
                            <span className="material-symbols-outlined text-[14px]">
                              campaign
                            </span>
                            {' '}Promotional / Mktg
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[12px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              4/4 Networks Active
                            </span>
                            {' '}
                            <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                              check_circle
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-mono text-[12px] text-portal-ink">
                          #PTA-NOC-9921-PK
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-jk-label-sm">
                            Active Whitelisted
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg text-portal-ink-soft hover:bg-portal-tint-2 hover:text-portal-brand-deep transition-colors" title="View PTA NOC Certificate" type="button">
                              <span className="material-symbols-outlined text-[18px]">
                                verified
                              </span>
                            </button>
                            <button className="p-1.5 rounded-lg text-portal-ink-soft hover:bg-portal-tint-2 hover:text-portal-brand-deep transition-colors" title="Manage Routing" type="button">
                              <span className="material-symbols-outlined text-[18px]">
                                tune
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-portal-tint/40 transition-colors">
                        <td className="py-4 px-4 text-jk-label-md text-portal-ink flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          {' '}
                          <span className="font-bold tracking-tight">
                            NEXMEG-CARE
                          </span>
                        </td>
                        <td className="py-4 px-4 text-portal-ink-soft">
                          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-portal-success">
                            <span className="material-symbols-outlined text-[14px]">
                              support_agent
                            </span>
                            {' '}Customer Support
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[12px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              4/4 Networks Active
                            </span>
                            {' '}
                            <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                              check_circle
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 font-mono text-[12px] text-portal-ink">
                          #PTA-NOC-7714-PK
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-jk-label-sm">
                            Active Whitelisted
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg text-portal-ink-soft hover:bg-portal-tint-2 hover:text-portal-brand-deep transition-colors" title="View PTA NOC Certificate" type="button">
                              <span className="material-symbols-outlined text-[18px]">
                                verified
                              </span>
                            </button>
                            <button className="p-1.5 rounded-lg text-portal-ink-soft hover:bg-portal-tint-2 hover:text-portal-brand-deep transition-colors" title="Manage Routing" type="button">
                              <span className="material-symbols-outlined text-[18px]">
                                tune
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-portal-tint/40 transition-colors">
                        <td className="py-4 px-4 text-jk-label-md text-portal-ink flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                          {' '}
                          <span className="font-bold tracking-tight">
                            NEXMEG-VIP
                          </span>
                        </td>
                        <td className="py-4 px-4 text-portal-ink-soft">
                          <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-portal-ink">
                            <span className="material-symbols-outlined text-[14px]">
                              stars
                            </span>
                            {' '}Loyalty / High Priority
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[12px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                            Pending Telenor NOC
                          </span>
                        </td>
                        <td className="py-4 px-4 font-mono text-[12px] text-portal-ink-soft">
                          #PTA-REV-1033-PK
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-jk-label-sm font-semibold">
                            In Review (Est. 48h)
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="px-2.5 py-1 rounded-lg bg-portal-tint hover:bg-portal-tint-2 text-portal-brand-deep text-jk-label-sm transition-colors" type="button">
                              Track NOC
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-jk-body-sm text-portal-ink-soft">
                  <span className="flex items-center gap-1.5 text-xs text-portal-ink-muted">
                    <span className="material-symbols-outlined text-[16px]">
                      info
                    </span>
                    {' '}Annual telecom letters of authorization are on file with Jazz, Zong, Telenor, and Ufone gateways.
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="text-portal-brand-deep text-jk-label-md hover:underline flex items-center gap-1" type="button">
                      Download All NOC Bundles{' '}
                      <span className="material-symbols-outlined text-[16px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-jk-headline-md text-portal-ink tracking-tight">
                        Real-Time Opt-Out &amp; Blacklist Automation
                      </h2>
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portal-accent opacity-75" />
                        {' '}
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-portal-accent" />
                      </span>
                    </div>
                    <p className="text-jk-body-sm text-portal-ink-soft">
                      Automated consumer DND capture across Pakistani cellular gateways &amp; WhatsApp
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-xl bg-portal-tint hover:bg-portal-tint-2 text-portal-ink text-jk-label-sm flex items-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[16px] text-portal-brand-deep">
                        download
                      </span>
                      {' '}
                      <span>
                        Export Opt-Out List (CSV)
                      </span>
                    </button>
                    <button className="px-3 py-1.5 rounded-xl bg-portal-tint-3 hover:bg-portal-tint-4 text-portal-ink text-jk-label-sm flex items-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[16px] text-portal-danger">
                        block
                      </span>
                      {' '}
                      <span>
                        Manual Blacklist Number
                      </span>
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-portal-tint/70 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-portal-tint transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-portal-brand-deep flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">
                          sms
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-jk-label-md text-portal-ink font-bold">
                            0300-1234567
                          </span>
                          {' '}
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-800">
                            Sent 'STOP'
                          </span>
                        </div>
                        <p className="text-jk-body-sm text-portal-ink-soft">
                          Auto-added to Global DND • scrubbed from all future marketing lists
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-jk-label-sm shrink-0 pl-12 md:pl-0">
                      <span className="px-2.5 py-1 rounded-md bg-portal-tint-2 text-portal-ink">
                        Channel: SMS
                      </span>
                      {' '}
                      <span className="text-portal-ink-muted">
                        12 mins ago
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-portal-tint/70 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-portal-tint transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">
                          chat
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-jk-label-md text-portal-ink font-bold">
                            0321-9876543
                          </span>
                          {' '}
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-800">
                            Unsubscribe CTA
                          </span>
                        </div>
                        <p className="text-jk-body-sm text-portal-ink-soft">
                          Unsubscribed via WhatsApp button • Synced to HubSpot &amp; Shopify CRM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-jk-label-sm shrink-0 pl-12 md:pl-0">
                      <span className="px-2.5 py-1 rounded-md bg-portal-tint-2 text-portal-ink">
                        Channel: WhatsApp
                      </span>
                      {' '}
                      <span className="text-portal-ink-muted">
                        45 mins ago
                      </span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-portal-tint/70 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-portal-tint transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-portal-danger flex items-center justify-center shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">
                          report
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-jk-label-md text-portal-ink font-bold">
                            0345-5551234
                          </span>
                          {' '}
                          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-100 text-rose-800">
                            Spam Complaint
                          </span>
                        </div>
                        <p className="text-jk-body-sm text-portal-ink-soft">
                          Blocked spam complaint • Contact quarantined from automated triggers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-jk-label-sm shrink-0 pl-12 md:pl-0">
                      <span className="px-2.5 py-1 rounded-md bg-portal-tint-2 text-portal-ink">
                        Channel: WhatsApp
                      </span>
                      {' '}
                      <span className="text-portal-ink-muted">
                        2 hrs ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between pb-3">
                  <h2 className="text-jk-headline-md text-portal-ink tracking-tight">
                    Meta Quality Tier
                  </h2>
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-jk-label-sm font-bold">
                    Cloud API 2025
                  </span>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle className="text-portal-tint-3" cx="50" cy="50" fill="none" r="42" stroke="currentColor" strokeWidth="8" />
                      <circle className="text-portal-brand-deep transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="42" stroke="currentColor" strokeDasharray="263.89" strokeDashoffset="3.16" strokeLinecap="round" strokeWidth="8" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-jk-display-hero text-portal-ink leading-none">
                        98.8
                      </span>
                      {' '}
                      <span className="text-[11px] uppercase tracking-wider text-portal-ink-muted mt-1">
                        Health Score
                      </span>
                      {' '}
                      <span className="text-jk-label-sm font-bold text-emerald-600">
                        Green Tier
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-2 text-jk-body-sm">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-portal-tint/70">
                    <span className="text-portal-ink-soft text-jk-label-sm">
                      Phone Number
                    </span>
                    {' '}
                    <span className="font-mono font-bold text-portal-ink">
                      +92 300 0000000
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-portal-tint/70">
                    <span className="text-portal-ink-soft text-jk-label-sm">
                      Meta Tier
                    </span>
                    {' '}
                    <span className="text-jk-label-md font-semibold text-portal-brand-deep">
                      Tier 3 (100k msgs/24h)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-portal-tint/70">
                    <span className="text-portal-ink-soft text-jk-label-sm">
                      Quality History
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        trending_up
                      </span>
                      {' '}Consistently High (90d)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-portal-tint/70">
                    <span className="text-portal-ink-soft text-jk-label-sm">
                      Rules Violated
                    </span>
                    {' '}
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>
                      {' '}0 violations
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t-0">
                  <button className="w-full py-2.5 rounded-xl bg-portal-tint hover:bg-portal-tint-2 text-portal-ink text-jk-label-md text-center transition-colors flex items-center justify-center gap-2" type="button">
                    <span>
                      View Meta Developer Health Log
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </button>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-jk-headline-md text-portal-ink tracking-tight">
                    Compliance Checklist
                  </h2>
                  <span className="material-symbols-outlined text-portal-brand-deep text-[20px]">
                    fact_check
                  </span>
                </div>
                <div className="space-y-3.5">
                  <div className="p-3 rounded-xl bg-portal-tint/60 flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-portal-brand-deep text-[18px]">
                          bedtime
                        </span>
                        {' '}
                        <span className="text-jk-label-md text-portal-ink">
                          Night Promo Curfew
                        </span>
                      </div>
                      <p className="text-jk-body-sm text-portal-ink-soft text-[12px] leading-tight">
                        Enforces 9:00 PM – 9:00 AM PKT promo quiet hours as mandated by PTA.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-9 h-5 bg-portal-tint-4 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-portal-tint-4 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-portal-brand-deep" />
                    </label>
                  </div>
                  <div className="p-3 rounded-xl bg-portal-tint/60 flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-portal-brand-deep text-[18px]">
                          subtitles
                        </span>
                        {' '}
                        <span className="text-jk-label-md text-portal-ink">
                          Mandatory Opt-Out Text
                        </span>
                      </div>
                      <p className="text-jk-body-sm text-portal-ink-soft text-[12px] leading-tight">
                        "Reply STOP to opt out" auto-appended to promotional SMS.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-9 h-5 bg-portal-tint-4 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-portal-tint-4 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-portal-brand-deep" />
                    </label>
                  </div>
                  <div className="p-3 rounded-xl bg-portal-tint/60 flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-portal-success text-[18px]">
                          event_repeat
                        </span>
                        {' '}
                        <span className="text-jk-label-md text-portal-ink">
                          Sender ID Telco NOC
                        </span>
                      </div>
                      <p className="text-jk-body-sm text-portal-ink-soft text-[12px] leading-tight">
                        All 4 operators valid until Dec 31, 2025.
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-jk-label-sm font-bold shrink-0 mt-1">
                      Healthy
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-portal-tint/60 flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-portal-brand-deep text-[18px]">
                          lock
                        </span>
                        {' '}
                        <span className="text-jk-label-md text-portal-ink">
                          Pakistan Data Protection
                        </span>
                      </div>
                      <p className="text-jk-body-sm text-portal-ink-soft text-[12px] leading-tight">
                        End-to-end encrypted messaging with 30-day anonymized logs.
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-jk-label-sm font-bold shrink-0 mt-1">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
