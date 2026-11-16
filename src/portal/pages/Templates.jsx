import { useMemo } from "react";
import { PageHero, useToast } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";
import { useDisclosure } from "../hooks/useDisclosure.js";
import { useEscape } from "../hooks/useEscape.js";


export default function Templates() {
  const toast = useToast();
  const drawer = useDisclosure();
  useEscape(drawer.close, drawer.isOpen);
  const rules = useMemo(() => {
    const open = [["new template", "create template", "edit template"], drawer.open];
    const inDrawer = [["cancel", "save changes", "submit meta"], (el) => { drawer.close(); if (!/cancel/i.test(el.textContent)) toast("Template save (demo) — backend abhi connect nahi."); }];
    return drawer.isOpen ? [inDrawer, open] : [open];
  }, [drawer.isOpen, drawer.open, drawer.close, toast]);
  const onAction = useActionLinks(rules);
  return (
    <div className="contents" onClick={onAction}>
      <div className="flex flex-col w-full">
        <PageHero>
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white font-label-sm shadow-xs">
                <span className="w-2 h-2 rounded-full bg-portal-mint animate-pulse" />
                {' '}
                <span className="tracking-wide">
                  Meta Approved &amp; PTA Pakistan Telco Registered
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
                Message Templates{' '}
                <span aria-hidden="true" className="text-xl">
                  📑
                </span>
              </h1>
              <p className="text-sm text-teal-50 max-w-xl leading-relaxed">
                Create, review, and dispatch Meta WhatsApp Cloud API pre-approved templates alongside PTA whitelisted SMS Sender ID broadcasts across Pakistan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-md shadow-xs text-white text-xs font-medium">
                <span className="material-symbols-outlined text-[16px] text-portal-mint">
                  bolt
                </span>
                {' '}
                <span>
                  Meta Approval Rate{' '}
                  <strong className="font-bold text-white">
                    98.4%
                  </strong>
                  {' '}(Avg 7m)
                </span>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md text-white text-xs font-semibold transition-all shadow-xs" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    sync
                  </span>
                  {' '}
                  <span>
                    Sync from Meta
                  </span>
                </button>
                <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-portal-accent to-[#f97316] hover:brightness-105 active:scale-95 text-white text-xs font-bold shadow-md shadow-[#f97316]/30 transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                  {' '}
                  <span>
                    New Template
                  </span>
                </button>
              </div>
            </div>
          </div>
        </PageHero>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-3 relative z-20">
          <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Total Templates
              </span>
              <div className="w-9 h-9 rounded-lg bg-portal-tint flex items-center justify-center text-portal-brand-deep">
                <span className="material-symbols-outlined text-[20px]">
                  layers
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 mb-1 flex items-baseline gap-1.5">
                48{' '}
                <span className="text-xs font-medium text-slate-500">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>
                {' '}
                <span>
                  +6 added this month
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                WhatsApp Approved
              </span>
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 mb-1 flex items-baseline gap-1.5">
                34{' '}
                <span className="text-xs font-medium text-slate-500">
                  Meta Cloud
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {' '}
                <span>
                  100% compliant • Green Tier
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                SMS Registered
              </span>
              <div className="w-9 h-9 rounded-lg bg-portal-tint flex items-center justify-center text-portal-brand-deep">
                <span className="material-symbols-outlined text-[20px]">
                  sms
                </span>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900 mb-1 flex items-baseline gap-1.5">
                14{' '}
                <span className="text-xs font-medium text-slate-500">
                  Telco SMS
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-600 font-medium">
                <span className="material-symbols-outlined text-[14px] text-portal-brand-deep">
                  verified_user
                </span>
                {' '}
                <span>
                  PTA &amp; 4 Telcos Whitelisted
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Top Converting
              </span>
              <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined text-[20px]">
                  military_tech
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 truncate mb-1">
                Eid Festive Promo
              </div>
              <div className="flex items-center gap-1 text-xs text-portal-danger font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  local_fire_department
                </span>
                {' '}
                <span>
                  48.2% conversion rate
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-4 flex flex-col gap-3.5 bg-white border border-slate-200/80 p-4 rounded-xl shadow-xs">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
              <button className="px-3.5 py-1.5 rounded-lg bg-portal-brand-deep text-white text-xs font-semibold flex-shrink-0 shadow-xs" type="button">
                All Templates (48)
              </button>
              <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium flex-shrink-0 transition-colors" type="button">
                Marketing &amp; Sales (26)
              </button>
              <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium flex-shrink-0 transition-colors" type="button">
                Order &amp; Utility (14)
              </button>
              <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium flex-shrink-0 transition-colors" type="button">
                OTP &amp; Authentication (8)
              </button>
              <button className="px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-medium flex-shrink-0 transition-colors" type="button">
                Drafts &amp; Pending (3)
              </button>
            </div>
            <div className="flex items-center justify-between lg:justify-end gap-2.5 flex-shrink-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {' '}
                <span>
                  Health: High (99.1%)
                </span>
              </div>
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200/80">
                <button className="p-1.5 rounded-md bg-white shadow-xs text-portal-brand-deep flex items-center justify-center" title="Grid View" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    grid_view
                  </span>
                </button>
                <button className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 flex items-center justify-center" title="Table View" type="button">
                  <span className="material-symbols-outlined text-[16px]">
                    view_list
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
            <div className="md:col-span-5 relative">
              <input className="w-full bg-slate-50 border border-slate-200 rounded-lg h-10 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-portal-brand-deep/20 focus:border-portal-brand-deep transition-all" id="audience-search-input" placeholder="Search by template name, language, or variable..." type="text" />
              <span className="material-symbols-outlined text-[16px] text-slate-400 absolute left-2.5 top-3">
                search
              </span>
            </div>
            <div className="md:col-span-3 relative">
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg h-10 pl-3 pr-8 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-portal-brand-deep/20 focus:border-portal-brand-deep appearance-none cursor-pointer">
                <option>
                  Channel: All (WhatsApp, SMS, RCS)
                </option>
                <option>
                  WhatsApp Cloud API only
                </option>
                <option>
                  Telco Branded SMS only
                </option>
                <option>
                  Google RCS Business
                </option>
              </select>
              <span className="material-symbols-outlined text-[16px] text-slate-400 absolute right-2.5 top-3 pointer-events-none">
                expand_more
              </span>
            </div>
            <div className="md:col-span-2 relative">
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg h-10 pl-3 pr-8 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-portal-brand-deep/20 focus:border-portal-brand-deep appearance-none cursor-pointer">
                <option>
                  Category: All
                </option>
                <option>
                  Marketing
                </option>
                <option>
                  Utility
                </option>
                <option>
                  Authentication
                </option>
              </select>
              <span className="material-symbols-outlined text-[16px] text-slate-400 absolute right-2.5 top-3 pointer-events-none">
                expand_more
              </span>
            </div>
            <div className="md:col-span-2 relative">
              <select className="w-full bg-slate-50 border border-slate-200 rounded-lg h-10 pl-3 pr-8 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-portal-brand-deep/20 focus:border-portal-brand-deep appearance-none cursor-pointer">
                <option>
                  Language: All
                </option>
                <option>
                  Urdu (Roman)
                </option>
                <option>
                  Urdu (Nastaliq)
                </option>
                <option>
                  English
                </option>
              </select>
              <span className="material-symbols-outlined text-[16px] text-slate-400 absolute right-2.5 top-3 pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </section>
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200/70 inline-flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      check_circle
                    </span>
                    {' '}Approved
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full bg-portal-tint text-portal-brand-deep text-[10px] font-semibold">
                    Marketing
                  </span>
                </div>
                <span className="text-emerald-700 text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    chat
                  </span>
                  {' '}WhatsApp
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-portal-brand-deep transition-colors">
                Eid Festive Mega Sale
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                eid_festive_sale_v4 • Urdu (Roman) &amp; English
              </p>
              <div className="bg-portal-chat border border-slate-200/80 rounded-xl p-2.5 mb-3.5 shadow-inner">
                <div className="bg-white rounded-xl shadow-xs border border-slate-200/60 overflow-hidden relative">
                  <div className="relative h-28 w-full">
                    <img alt="Eid luxury festive lawn and pret fashion collection banner with gold accents" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/demo-banner.svg" />
                    <div className="absolute top-1.5 left-1.5 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded-full backdrop-blur-sm flex items-center gap-1 font-medium">
                      <span className="material-symbols-outlined text-[11px] text-emerald-400">
                        verified
                      </span>
                      {' '}nExMeg Brand
                    </div>
                    <span className="absolute bottom-1 right-1.5 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] font-medium">
                      Image Header
                    </span>
                  </div>
                  <div className="p-2.5">
                    <p className="text-slate-800 text-xs leading-relaxed font-sans">
                      Assalam-o-Alaikum{' '}
                      <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1 rounded font-semibold">
                        {'{'}{'{'}1{'}'}{'}'}
                      </span>
                      ! 🌙 Eid Collection is now{' '}
                      <strong className="font-bold text-slate-900">
                        LIVE with Flat 40% OFF
                      </strong>
                      . Shop unstitched &amp; pret styles before stock runs out.
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-1">
                      <span>
                        10:30 AM
                      </span>
                      <span className="material-symbols-outlined text-[13px] text-sky-500">
                        done_all
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 flex flex-col divide-y divide-slate-100 bg-slate-50/70">
                    <button className="w-full py-2 text-portal-brand-deep hover:bg-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        shopping_bag
                      </span>
                      {' '}🛍️ Shop Now
                    </button>
                    <button className="w-full py-2 text-slate-700 hover:bg-slate-100 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        support_agent
                      </span>
                      {' '}💬 Talk to Stylist
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
              <div className="flex items-center gap-2">
                <span>
                  Sent:{' '}
                  <strong className="text-slate-800 font-semibold">
                    120k
                  </strong>
                </span>
                {' '}
                <span>
                  •
                </span>
                {' '}
                <span>
                  CTR:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    34.2%
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                {' '}
                <span>
                  High Quality
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200/70 inline-flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      check_circle
                    </span>
                    {' '}Approved
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold">
                    Utility
                  </span>
                </div>
                <span className="text-emerald-700 text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    chat
                  </span>
                  {' '}WhatsApp
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-portal-brand-deep transition-colors">
                Order Confirmation &amp; Tracking
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                order_confirmed_track_v2 • English
              </p>
              <div className="bg-portal-chat border border-slate-200/80 rounded-xl p-2.5 mb-3.5 shadow-inner">
                <div className="bg-white rounded-xl shadow-xs border border-slate-200/60 overflow-hidden">
                  <div className="p-2.5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[10px] font-bold">
                        n
                      </div>
                      <span className="text-[11px] font-bold text-slate-800">
                        nExMeg Logistics
                      </span>
                      <span className="material-symbols-outlined text-[12px] text-emerald-600">
                        verified
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono">
                      Utility #W2
                    </span>
                  </div>
                  <div className="p-2.5 space-y-1.5">
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Thank you for ordering with us,{' '}
                      <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1.5 py-0.5 rounded font-semibold">
                        {'{'}{'{'}1{'}'}{'}'}
                      </span>
                      ! 🎉
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Order{' '}
                      <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1.5 py-0.5 rounded font-mono font-bold">
                        #{'{'}{'{'}2{'}'}{'}'}
                      </span>
                      {' '}of PKR{' '}
                      <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1.5 py-0.5 rounded font-mono font-bold">
                        {'{'}{'{'}3{'}'}{'}'}
                      </span>
                      {' '}is confirmed and dispatched. Track live below:
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-1">
                      <span>
                        11:15 AM
                      </span>
                      <span className="material-symbols-outlined text-[13px] text-sky-500">
                        done_all
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 flex flex-col divide-y divide-slate-100 bg-slate-50/70">
                    <button className="w-full py-2 text-portal-brand-deep hover:bg-slate-100 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        local_shipping
                      </span>
                      {' '}📦 Track Live Delivery
                    </button>
                    <button className="w-full py-2 text-slate-700 hover:bg-slate-100 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        headset_mic
                      </span>
                      {' '}📞 Customer Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
              <div className="flex items-center gap-2">
                <span>
                  Sent:{' '}
                  <strong className="text-slate-800 font-semibold">
                    85k
                  </strong>
                </span>
                {' '}
                <span>
                  •
                </span>
                {' '}
                <span>
                  Open:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    98.6%
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                {' '}
                <span>
                  Green Tier
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200/70 inline-flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      check_circle
                    </span>
                    {' '}Approved
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full bg-portal-accent-soft text-[#8c1900] text-[10px] font-semibold">
                    Marketing
                  </span>
                </div>
                <span className="text-portal-brand-deep text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    hub
                  </span>
                  {' '}Omnichannel
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-portal-brand-deep transition-colors">
                Cart Abandonment Recovery
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                cart_recovery_urgent_pk • Roman Urdu
              </p>
              <div className="bg-portal-chat border border-slate-200/80 rounded-xl p-2.5 mb-3.5 shadow-inner">
                <div className="bg-white rounded-xl shadow-xs border border-slate-200/60 overflow-hidden">
                  <div className="p-2.5 border-b border-slate-100 bg-amber-50/60 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wide flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">
                        timer
                      </span>
                      {' '}Cart Expiring Soon
                    </span>
                    <span className="text-[10px] bg-portal-accent-soft text-[#8c1900] px-1.5 py-0.5 rounded font-bold">
                      Urgent
                    </span>
                  </div>
                  <div className="p-2.5 space-y-2">
                    <p className="text-xs text-slate-800 leading-relaxed">
                      Aapke cart items reserved hain! Complete your order within{' '}
                      <strong className="text-portal-danger font-bold">
                        2 hours
                      </strong>
                      {' '}and get{' '}
                      <strong className="text-emerald-700 font-bold">
                        Free Shipping
                      </strong>
                      {' '}with voucher code:
                    </p>
                    <div className="flex items-center justify-between p-2 bg-portal-tint-3 rounded-lg border border-portal-brand-deep/20">
                      <span className="font-mono font-extrabold text-xs text-slate-900 tracking-wider">
                        FREESHIP
                      </span>
                      <span className="text-[10px] text-portal-brand-deep font-semibold">
                        Auto-Applied ⚡
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-1">
                      <span>
                        02:40 PM
                      </span>
                      <span className="material-symbols-outlined text-[13px] text-sky-500">
                        done_all
                      </span>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-50/80 border-t border-slate-100">
                    <button className="w-full py-2 bg-gradient-to-r from-portal-accent to-[#f97316] hover:brightness-105 active:scale-95 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition-all" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        shopping_cart_checkout
                      </span>
                      {' '}🛒 Checkout Abhi Karein
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
              <div className="flex items-center gap-2">
                <span>
                  Sent:{' '}
                  <strong className="text-slate-800 font-semibold">
                    41.2k
                  </strong>
                </span>
                {' '}
                <span>
                  •
                </span>
                {' '}
                <span>
                  Recovery:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    24.8%
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-portal-brand-deep font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  bolt
                </span>
                {' '}
                <span>
                  Auto-Trigger
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 text-[10px] font-semibold border border-blue-200/70 inline-flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      verified_user
                    </span>
                    {' '}PTA Approved
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full bg-portal-tint text-portal-brand-deep text-[10px] font-semibold">
                    Telco SMS
                  </span>
                </div>
                <span className="text-sky-700 text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    textsms
                  </span>
                  {' '}nExMeg-PK
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-portal-brand-deep transition-colors">
                Midnight Flash 50% Off
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                sms_flash_50_promotional • English
              </p>
              <div className="bg-slate-100 border border-slate-200/80 rounded-xl p-2.5 mb-3.5 shadow-inner">
                <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
                  <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-portal-brand-deep">
                        cell_tower
                      </span>
                      <span className="font-mono font-bold text-slate-800 text-[11px]">
                        SMS From: nExMeg-PK
                      </span>
                    </div>
                    <span className="text-[9px] bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded font-semibold">
                      PTA Masked
                    </span>
                  </div>
                  <div className="p-3 space-y-2">
                    <p className="text-xs font-mono text-slate-800 leading-relaxed">
                      Midnight Flash Deal! Use voucher{' '}
                      <span className="font-bold text-portal-brand-deep">
                        FLASH50
                      </span>
                      {' '}to get 50% off on all accessories. Order now:{' '}
                      <span className="text-portal-brand-deep underline font-medium">
                        nexmeg.pk/flash
                      </span>
                      {' '}. Reply STOP to opt out.
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                      <span>
                        Sent via Jazz / Telenor / Zong / Ufone
                      </span>
                      <span>
                        Today 12:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500 font-medium">
                      Encoding: GSM 7-bit
                    </span>
                    <span className="font-semibold text-portal-brand-deep">
                      142 / 160 chars (1 SMS Credit)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
              <div className="flex items-center gap-2">
                <span>
                  Sent:{' '}
                  <strong className="text-slate-800 font-semibold">
                    210k
                  </strong>
                </span>
                {' '}
                <span>
                  •
                </span>
                {' '}
                <span>
                  Delivered:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    99.4%
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-slate-600 font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  cell_tower
                </span>
                {' '}
                <span>
                  4 Telcos
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200/70 inline-flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      lock
                    </span>
                    {' '}Auth Approved
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full bg-portal-tint text-portal-brand-deep text-[10px] font-semibold">
                    Authentication
                  </span>
                </div>
                <span className="text-emerald-800 text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    security
                  </span>
                  {' '}WA &amp; SMS
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-portal-brand-deep transition-colors">
                Portal OTP Verification
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                nexmeg_otp_v1 • English
              </p>
              <div className="bg-portal-chat border border-slate-200/80 rounded-xl p-2.5 mb-3.5 shadow-inner">
                <div className="bg-white rounded-xl shadow-xs border border-slate-200/60 overflow-hidden">
                  <div className="p-2 border-b border-slate-100 bg-emerald-50/60 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px] text-emerald-700">
                        lock
                      </span>
                      <span className="text-[11px] font-bold text-emerald-900">
                        Security Authentication
                      </span>
                    </div>
                    <span className="text-[9px] bg-emerald-200/70 text-emerald-900 px-1.5 py-0.5 rounded font-bold">
                      Verified Hash
                    </span>
                  </div>
                  <div className="p-3 space-y-2.5">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-2 py-0.5 rounded font-mono font-extrabold text-sm text-portal-brand-deep">
                        {'{'}{'{'}1{'}'}{'}'}
                      </span>
                      {' '}is your nExMeg verification code. Do not share this code with anyone. Valid for 5 minutes.
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>
                        Expires in: 04:59
                      </span>
                      <div className="flex items-center gap-1 text-sky-500 font-medium">
                        <span>
                          Sent
                        </span>
                        <span className="material-symbols-outlined text-[13px]">
                          done_all
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-slate-50 border-t border-slate-100">
                    <button className="w-full py-2 bg-white border border-slate-200/80 hover:bg-slate-100 text-portal-brand-deep text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        content_copy
                      </span>
                      {' '}Copy OTP Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
              <div className="flex items-center gap-2">
                <span>
                  Latency:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    &lt; 1.4s
                  </strong>
                </span>
                {' '}
                <span>
                  •
                </span>
                {' '}
                <span>
                  Delivery:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    99.9%
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <span className="material-symbols-outlined text-[14px]">
                  speed
                </span>
                {' '}
                <span>
                  Priority P0
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200/70 inline-flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      check_circle
                    </span>
                    {' '}Approved
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold">
                    Utility
                  </span>
                </div>
                <span className="text-emerald-700 text-[11px] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    chat
                  </span>
                  {' '}WhatsApp
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-portal-brand-deep transition-colors">
                Post-Purchase Feedback
              </h3>
              <p className="text-[11px] text-slate-500 mb-3">
                order_feedback_loyalty_v2 • Urdu (Roman)
              </p>
              <div className="bg-portal-chat border border-slate-200/80 rounded-xl p-2.5 mb-3.5 shadow-inner">
                <div className="bg-white rounded-xl shadow-xs border border-slate-200/60 overflow-hidden">
                  <div className="p-2.5 space-y-2">
                    <p className="text-xs text-slate-800 leading-relaxed font-sans">
                      Kaisa raha aapka shopping experience? Rate your recent order and get{' '}
                      <strong className="text-portal-brand-deep font-bold">
                        500 Reward Points
                      </strong>
                      {' '}on your next purchase!
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400">
                      <span>
                        Yesterday 06:12 PM
                      </span>
                      <span className="material-symbols-outlined text-[13px] text-sky-500">
                        done_all
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 flex flex-col divide-y divide-slate-100 bg-slate-50/70">
                    <button className="w-full py-2 text-amber-600 hover:bg-slate-100 text-xs font-bold flex items-center justify-center gap-1 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px] text-amber-500">
                        star
                      </span>
                      {' '}⭐⭐⭐⭐⭐ Great!
                    </button>
                    <button className="w-full py-2 text-slate-600 hover:bg-slate-100 text-xs font-medium flex items-center justify-center gap-1 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px] text-slate-400">
                        help_center
                      </span>
                      {' '}Needs Help / Issue
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px]">
              <div className="flex items-center gap-2">
                <span>
                  Sent:{' '}
                  <strong className="text-slate-800 font-semibold">
                    52k
                  </strong>
                </span>
                {' '}
                <span>
                  •
                </span>
                {' '}
                <span>
                  Response:{' '}
                  <strong className="text-emerald-700 font-semibold">
                    41.8%
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-amber-500 font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  star
                </span>
                {' '}
                <span>
                  4.9 / 5.0
                </span>
              </div>
            </div>
          </div>
        </section>
        <footer className="mt-6 mb-4 bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Showing{' '}
            <strong className="text-slate-900 font-semibold">
              1 – 6
            </strong>
            {' '}of{' '}
            <strong className="text-slate-900 font-semibold">
              48
            </strong>
            {' '}active templates across Pakistan
          </div>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1.5 rounded-lg text-slate-500 hover:bg-slate-100 text-xs font-medium disabled:opacity-40" disabled type="button">
              Previous
            </button>
            <button className="w-7 h-7 rounded-lg bg-portal-brand-deep text-white text-xs font-bold flex items-center justify-center shadow-xs" type="button">
              1
            </button>
            <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium flex items-center justify-center" type="button">
              2
            </button>
            <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium flex items-center justify-center" type="button">
              3
            </button>
            <span className="px-1 text-slate-400 text-xs">
              …
            </span>
            <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium flex items-center justify-center" type="button">
              8
            </button>
            <button className="px-2.5 py-1.5 rounded-lg text-portal-brand-deep hover:bg-slate-100 text-xs font-semibold" type="button">
              Next
            </button>
          </div>
        </footer>
      </div>
      {drawer.isOpen && (
      <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={drawer.close} />
        <aside className="relative w-full max-w-[560px] bg-white h-screen shadow-2xl flex flex-col z-10 border-l border-slate-200">
          <div className="p-5 border-b border-slate-200 bg-white flex flex-col gap-3 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/80 inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">
                    check_circle
                  </span>
                  {' '}Meta Approved
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-portal-tint text-portal-brand-deep text-[11px] font-semibold border border-portal-brand-deep/20 inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">
                    chat
                  </span>
                  {' '}WhatsApp Cloud API
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  v2.4
                </span>
              </div>
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors" onClick={drawer.close} title="Close Drawer">
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-slate-900 tracking-tight truncate">
                  Eid Festive Mega Sale
                </h2>
                <p className="text-xs text-slate-500 font-mono mt-0.5 truncate">
                  eid_festive_mega_sale_v2 • en_US / Roman Urdu
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-colors" type="button">
                  <span className="material-symbols-outlined text-[15px] text-slate-500">
                    smartphone
                  </span>
                  <span>
                    Test Send
                  </span>
                </button>
                <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-portal-accent to-[#f97316] hover:brightness-105 active:scale-95 text-white text-xs font-bold shadow-md shadow-[#f97316]/25 transition-all" type="button">
                  <span className="material-symbols-outlined text-[15px]">
                    send
                  </span>
                  <span>
                    Submit Meta
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 border-t border-slate-100 pt-3 text-xs font-semibold">
              <button className="text-portal-brand-deep border-b-2 border-portal-brand-deep pb-1 -mb-3 flex items-center gap-1.5 font-bold" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  edit_note
                </span>
                {' '}Specs &amp; Variables
              </button>
              <button className="text-slate-500 hover:text-slate-800 pb-1 -mb-3 flex items-center gap-1.5 font-medium transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  preview
                </span>
                {' '}Live Preview (WA)
              </button>
              <button className="text-slate-500 hover:text-slate-800 pb-1 -mb-3 flex items-center gap-1.5 font-medium transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  history
                </span>
                {' '}Audit History
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 bg-[#f8f9ff]">
            <section className="bg-white rounded-xl border border-slate-200/80 p-4.5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-portal-brand-deep" />
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Meta WhatsApp Cloud Specs
                  </h3>
                </div>
                <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                  Registered Category: MARKETING
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500">
                    Template Code Name
                  </label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-700 cursor-not-allowed" readOnly defaultValue="eid_festive_mega_sale_v2" />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-500">
                    Language / Region
                  </label>
                  <div className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 font-medium">
                    <span>
                      Urdu (Roman) + English
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      ur_PK
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-semibold text-slate-500">
                    Header Media (Image Attachment)
                  </label>
                  <span className="text-[10px] text-portal-brand-deep font-semibold">
                    Recommended: 1200 x 628 px (&lt; 5MB)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="w-16 h-12 rounded-md overflow-hidden bg-slate-200 flex-shrink-0 border border-slate-300">
                    <img alt="Eid Banner Thumbnail" className="w-full h-full object-cover" src="/demo-banner.svg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-800 truncate">
                      eid_hero_banner_luxury_pret.jpg
                    </p>
                    <p className="text-[10px] text-slate-500">
                      1080 x 600 • 342 KB • JPG
                    </p>
                  </div>
                  <button className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors shadow-xs" type="button">
                    Replace
                  </button>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl border border-slate-200/80 p-4.5 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-portal-brand-deep">
                    subject
                  </span>
                  {' '}Body Copy &amp; Variable Mapping
                </h3>
                <span className="text-[11px] text-slate-500 font-mono">
                  186 / 1024 chars
                </span>
              </div>
              <div className="relative">
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs leading-relaxed text-slate-800 focus:outline-none focus:ring-2 focus:ring-portal-brand-deep/20 focus:border-portal-brand-deep transition-all resize-none font-sans" rows="4" defaultValue={"Assalam-o-Alaikum {{1}}! \ud83c\udf19 Hamari exclusive Eid Ul Fitr Collection ab live hai. Get flat {{2}}% OFF on all stitched & unstitched fabrics. Use code {{3}} at checkout."} />
                <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-slate-400">
                  <span>
                    Format formatting: *bold*, _italic_, ~strikethrough~
                  </span>
                  <button className="text-portal-brand-deep hover:underline font-semibold flex items-center gap-0.5" type="button">
                    <span className="material-symbols-outlined text-[14px]">
                      add
                    </span>
                    {' '}Insert Variable
                  </button>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <h4 className="text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-2">
                  Sample Values for Testing &amp; Preview:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2 rounded-lg">
                    <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1.5 py-0.5 rounded text-[11px] font-mono font-bold w-12 text-center">
                      {'{'}{'{'}1{'}'}{'}'}
                    </span>
                    <div className="flex-1 text-xs text-slate-500">
                      Customer Name
                    </div>
                    <input className="w-44 bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-800 font-medium" type="text" defaultValue="Ahmed Raza" />
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2 rounded-lg">
                    <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1.5 py-0.5 rounded text-[11px] font-mono font-bold w-12 text-center">
                      {'{'}{'{'}2{'}'}{'}'}
                    </span>
                    <div className="flex-1 text-xs text-slate-500">
                      Discount Percentage
                    </div>
                    <input className="w-44 bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-800 font-medium" type="text" defaultValue="35" />
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/80 p-2 rounded-lg">
                    <span className="bg-portal-mint-2/50 text-portal-brand-deeper px-1.5 py-0.5 rounded text-[11px] font-mono font-bold w-12 text-center">
                      {'{'}{'{'}3{'}'}{'}'}
                    </span>
                    <div className="flex-1 text-xs text-slate-500">
                      Promo Voucher Code
                    </div>
                    <input className="w-44 bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-800 font-mono font-bold text-portal-brand-deep" type="text" defaultValue="EID35" />
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl border border-slate-200/80 p-4.5 shadow-xs space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-portal-brand-deep">
                    smart_button
                  </span>
                  {' '}Interactive CTA Buttons (Quick Reply &amp; URL)
                </h3>
                <span className="text-[11px] text-slate-400">
                  Max 3 buttons
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-portal-brand-deep">
                      link
                    </span>
                    <div>
                      <span className="font-bold text-slate-800">
                        🛍️ Shop Now
                      </span>
                      <span className="ml-2 text-[10px] text-slate-400 font-mono">
                        https://brand.pk/eid-collection
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-portal-tint-3 text-portal-brand-deep rounded text-[10px] font-semibold">
                    URL Button
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-emerald-700">
                      support_agent
                    </span>
                    <div>
                      <span className="font-bold text-slate-800">
                        💬 Talk to Stylist
                      </span>
                      <span className="ml-2 text-[10px] text-slate-400 font-mono">
                        wa.me/923001234567
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded text-[10px] font-semibold">
                    Chat Trigger
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">
                      block
                    </span>
                    <div>
                      <span className="font-medium text-slate-600">
                        Stop promotions
                      </span>
                      <span className="ml-2 text-[10px] text-slate-400 font-mono">
                        Opt-out Keyword
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-600 rounded text-[10px] font-semibold">
                    Quick Reply
                  </span>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl border border-slate-200/80 p-4.5 shadow-xs space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">
                    smartphone
                  </span>
                  {' '}Live WhatsApp Preview (Device View)
                </h3>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                  iPhone 15 Pro • Retina
                </span>
              </div>
              <div className="rounded-2xl border border-slate-300 bg-portal-chat p-4 shadow-inner max-w-sm mx-auto">
                <div className="bg-white/70 backdrop-blur-md rounded-lg p-2 mb-3 text-center text-[10px] text-slate-600 shadow-xs flex items-center justify-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[12px] text-slate-400">
                    lock
                  </span>
                  {' '}Messages and calls are end-to-end encrypted.
                </div>
                <div className="bg-white rounded-xl shadow-md border border-slate-200/70 overflow-hidden">
                  <div className="relative h-36 w-full">
                    <img alt="WhatsApp Header Preview" className="w-full h-full object-cover" src="/demo-banner.svg" />
                    <div className="absolute top-2 left-2 bg-black/50 text-white text-[9px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                      nExMeg Official Brand
                    </div>
                  </div>
                  <div className="p-3.5 space-y-2">
                    <p className="text-xs text-slate-800 leading-relaxed font-sans">
                      Assalam-o-Alaikum{' '}
                      <strong className="text-slate-900 font-bold">
                        Ahmed Raza
                      </strong>
                      ! 🌙 Hamari exclusive Eid Ul Fitr Collection ab live hai. Get flat{' '}
                      <strong className="text-emerald-800 font-bold">
                        35% OFF
                      </strong>
                      {' '}on all stitched &amp; unstitched fabrics. Use code{' '}
                      <span className="bg-portal-tint-3 px-1 py-0.5 rounded font-mono font-bold text-slate-900 text-[11px]">
                        EID35
                      </span>
                      {' '}at checkout.
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-1">
                      <span>
                        10:45 AM
                      </span>
                      <span className="material-symbols-outlined text-[14px] text-sky-500">
                        done_all
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 flex flex-col divide-y divide-slate-100 bg-slate-50/60">
                    <button className="py-2.5 text-xs font-semibold text-portal-brand-deep flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        open_in_new
                      </span>
                      {' '}🛍️ Shop Now
                    </button>
                    <button className="py-2.5 text-xs font-semibold text-portal-brand-deep flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[14px]">
                        chat
                      </span>
                      {' '}💬 Talk to Stylist
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between flex-shrink-0">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">
                verified
              </span>
              <span>
                Meta Cloud API Synced
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-semibold transition-colors" onClick={drawer.close} type="button">
                Cancel
              </button>
              <button className="px-4 py-1.5 rounded-lg bg-portal-brand-deep hover:bg-portal-brand-deeper active:scale-95 text-white text-xs font-bold shadow-sm shadow-portal-brand-deep/20 transition-all flex items-center gap-1.5" type="button">
                <span className="material-symbols-outlined text-[15px]">
                  save
                </span>
                <span>
                  Save Changes
                </span>
              </button>
            </div>
          </div>
        </aside>
      </div>
      )}
    </div>
  );
}
