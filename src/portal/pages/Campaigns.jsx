import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Can } from "../auth/AccessContext.jsx";
import { PageHero, Card, Modal, Segmented, useToast } from "../ui/index.js";
import { useDisclosure } from "../hooks/useDisclosure.js";

const CAMPAIGN_TITLES = {
  "eid-mega": "Eid Mega Sale 2024",
  "cart-reminder": "Cart Reminder · Urdu",
  "riyadh-vip": "Riyadh VIP Offer",
  "ramadan-ivr": "Ramadan Early Birds (IVR)",
  "weekend-loyalty": "Weekend Loyalty Perk",
  "black-friday": "Black Friday Pre-Access",
};
const Count = ({ tone, children }) => <span className={`ml-1 text-[11px] font-semibold ${tone}`}>{children}</span>;
const Dot = ({ color, children }) => <span className="flex items-center gap-1.5"><span className={`w-2 h-2 rounded-full ${color}`} />{children}</span>;
const STATUS_OPTIONS = [
  { value: "all", label: <>All<Count tone="text-slate-400">24</Count></> },
  { value: "active", label: <>Active<Count tone="text-emerald-600">3</Count></> },
  { value: "scheduled", label: <>Scheduled<Count tone="text-amber-600">2</Count></> },
  { value: "completed", label: "Completed" },
  { value: "draft", label: "Draft" },
];
const CHANNEL_OPTIONS = [
  { value: "all", label: "All Channels" },
  { value: "whatsapp", label: <Dot color="bg-emerald-500">WhatsApp</Dot> },
  { value: "sms", label: <Dot color="bg-portal-accent">SMS</Dot> },
  { value: "voice", label: <Dot color="bg-teal-400">Voice</Dot> },
  { value: "email", label: <Dot color="bg-purple-500">Email</Dot> },
];
const rowCls = (active) => "cursor-pointer transition-colors border-l-4 hover:bg-teal-50/30 dark:hover:bg-teal-950/20 " + (active ? "bg-teal-50/40 dark:bg-teal-950/30 border-l-teal-500" : "border-l-transparent");


export default function Campaigns() {
  const navigate = useNavigate();
  const toast = useToast();
  const wizard = useDisclosure();
  const [status, setStatus] = useState("all");
  const [channel, setChannel] = useState("all");
  const [selected, setSelected] = useState("eid-mega");
  return (
    <>
      <PageHero className="mb-6">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
              {' '}Broadcast Hub
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white mb-1.5">
              Campaigns &amp; Automations
            </h2>
            <p className="text-teal-50 text-sm font-normal leading-relaxed opacity-95">
              Manage, schedule, and track multi-channel broadcast performance across WhatsApp, SMS, Voice, and Email.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={() => toast("Export queued (demo) — backend abhi connect nahi.")} className="bg-white/15 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-1.5 border border-white/20 backdrop-blur-md transition-all">
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              {' '}Export
            </button>
            <Can perm="campaigns.manage"><button className="bg-portal-accent hover:bg-portal-accent-hover text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all" onClick={wizard.open}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {' '}New Campaign
            </button></Can>
          </div>
        </div>
      </PageHero>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6" data-purpose="metrics-row">
        <Card hover className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-6 h-6 transform rotate-45 -translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Total Campaigns
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                24
              </span>
              {' '}
              <span className="text-xs text-slate-400 font-medium">
                active / 142 total
              </span>
            </div>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center mt-0.5">
              <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {' '}12.4%{' '}
              <span className="text-slate-400 font-normal ml-1">
                vs last month
              </span>
            </span>
          </div>
        </Card>
        <Card hover className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Total Dispatched
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                1.84M
              </span>
              {' '}
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                98.9%
              </span>
            </div>
            <span className="text-xs font-medium text-slate-400 mt-0.5 block">
              Delivered successfully
            </span>
          </div>
        </Card>
        <Card hover className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-portal-accent text-white flex items-center justify-center shrink-0 shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Avg. Response
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                14.8%
              </span>
              {' '}
              <span className="text-xs text-slate-400 font-medium">
                CTR
              </span>
            </div>
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center mt-0.5">
              <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {' '}2.3%{' '}
              <span className="text-slate-400 font-normal ml-1">
                higher conversions
              </span>
            </span>
          </div>
        </Card>
        <Card hover className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 border border-amber-200 dark:border-amber-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Monthly Spend
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                PKR 142.5K
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mt-0.5">
              Remaining:{' '}
              <span className="text-teal-600 dark:text-teal-400 font-bold">
                PKR 84,200
              </span>
            </span>
          </div>
        </Card>
      </div>
      <Card hover className="p-3.5 mb-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Segmented options={STATUS_OPTIONS} value={status} onChange={setStatus} />
          <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />
          <Segmented variant="chips" options={CHANNEL_OPTIONS} value={channel} onChange={setChannel} className="!gap-1.5" />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors">
            <span className="material-symbols-outlined text-[16px] text-slate-400">
              calendar_today
            </span>
            <span>
              Last 30 Days
            </span>
            <span className="material-symbols-outlined text-[16px] text-slate-400">
              expand_more
            </span>
          </button>
        </div>
      </Card>
      <div className="flex flex-col xl:flex-row gap-6 items-start w-full">
        <Card hover className="flex-1 min-w-0 overflow-hidden w-full">
          <div className="p-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center">
                <svg className="w-4 h-4 transform rotate-45 -translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                  Broadcast Campaigns
                </h3>
                <p className="text-xs text-slate-400">
                  Select any campaign to inspect live performance
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Filter columns">
                <span className="material-symbols-outlined text-[18px]">
                  tune
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm table-auto">
              <thead>
                <tr className="bg-slate-50/70 dark:bg-slate-800/40 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 select-none">
                  <th className="py-3 px-3.5">
                    Campaign
                  </th>
                  <th className="py-3 px-2">
                    Channel
                  </th>
                  <th className="py-3 px-2">
                    Audience
                  </th>
                  <th className="py-3 px-2">
                    Status
                  </th>
                  <th className="py-3 px-2.5 text-right">
                    Sent
                  </th>
                  <th className="py-3 px-2.5 text-right">
                    Delivered
                  </th>
                  <th className="py-3 px-2.5 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-300">
                <tr className={rowCls(selected === "eid-mega")} onClick={() => setSelected("eid-mega")}>
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                        <span className="material-symbols-outlined text-[16px]">
                          chat
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight truncate">
                          Eid Mega Sale 2024
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Nov 08, 11:30 AM
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      VIP Customers
                    </span>
                    <span className="text-[10px] text-slate-400">
                      54k opted-in
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}Delivered
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-right font-bold text-xs text-slate-900 dark:text-white whitespace-nowrap">
                    84,200
                  </td>
                  <td className="py-3 px-2.5 text-right whitespace-nowrap">
                    <span className="font-bold text-xs text-slate-900 dark:text-white block leading-tight">
                      83,442
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">
                      99.1%
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    <button className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className={rowCls(selected === "cart-reminder")} onClick={() => setSelected("cart-reminder")}>
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 text-portal-accent flex items-center justify-center shrink-0 border border-orange-100">
                        <span className="material-symbols-outlined text-[16px]">
                          shopping_cart
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight truncate">
                          Cart Reminder · Urdu
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Nov 10, 07:40 PM
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      Cart Abandoners
                    </span>
                    <span className="text-[10px] text-slate-400">
                      12,480 users
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-portal-accent border border-orange-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-portal-accent animate-pulse" />
                      {' '}Sending
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-right font-bold text-xs text-slate-900 dark:text-white whitespace-nowrap">
                    12,480
                  </td>
                  <td className="py-3 px-2.5 text-right whitespace-nowrap">
                    <span className="font-bold text-xs text-slate-900 dark:text-white block leading-tight">
                      12,280
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">
                      98.4%
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    <button className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className={rowCls(selected === "riyadh-vip")} onClick={() => setSelected("riyadh-vip")}>
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                        <span className="material-symbols-outlined text-[16px]">
                          sms
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight truncate">
                          Riyadh VIP Offer
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Tomorrow, 04:00 PM
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {' '}SMS
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      KSA High Spenders
                    </span>
                    <span className="text-[10px] text-slate-400">
                      31,050 contacts
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {' '}Scheduled
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-right font-bold text-xs text-slate-900 dark:text-white whitespace-nowrap">
                    31,050
                  </td>
                  <td className="py-3 px-2.5 text-right text-xs text-slate-400 whitespace-nowrap">
                    —
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    <button className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className={rowCls(selected === "ramadan-ivr")} onClick={() => setSelected("ramadan-ivr")}>
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                        <span className="material-symbols-outlined text-[16px]">
                          phone_in_talk
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight truncate">
                          Ramadan Early Birds
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Nov 04, 02:15 PM
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {' '}Voice
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      Wholesale Traders
                    </span>
                    <span className="text-[10px] text-slate-400">
                      18,200 verified
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}Delivered
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-right font-bold text-xs text-slate-900 dark:text-white whitespace-nowrap">
                    18,200
                  </td>
                  <td className="py-3 px-2.5 text-right whitespace-nowrap">
                    <span className="font-bold text-xs text-slate-900 dark:text-white block leading-tight">
                      17,450
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">
                      95.8%
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    <button className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className={rowCls(selected === "weekend-loyalty")} onClick={() => setSelected("weekend-loyalty")}>
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                        <span className="material-symbols-outlined text-[16px]">
                          mail
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight truncate">
                          Weekend Loyalty Perk
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          Oct 29, 09:00 AM
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {' '}Email
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      All Opted-in
                    </span>
                    <span className="text-[10px] text-slate-400">
                      140k users
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}Delivered
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-right font-bold text-xs text-slate-900 dark:text-white whitespace-nowrap">
                    140,000
                  </td>
                  <td className="py-3 px-2.5 text-right whitespace-nowrap">
                    <span className="font-bold text-xs text-slate-900 dark:text-white block leading-tight">
                      138,180
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">
                      98.7%
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    <button className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className={rowCls(selected === "black-friday")} onClick={() => setSelected("black-friday")}>
                  <td className="py-3 px-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[16px]">
                          draft
                        </span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight truncate">
                          Black Friday Pre-Access
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal">
                          2 hrs ago
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                      Spenders &gt; 10K
                    </span>
                    <span className="text-[10px] text-slate-400">
                      42.8k contacts
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                      Draft
                    </span>
                  </td>
                  <td className="py-3 px-2.5 text-right font-bold text-xs text-slate-400 whitespace-nowrap">
                    0
                  </td>
                  <td className="py-3 px-2.5 text-right text-xs text-slate-400 whitespace-nowrap">
                    —
                  </td>
                  <td className="py-3 px-2.5 text-center">
                    <button className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              Showing{' '}
              <strong className="text-slate-700 dark:text-slate-300">
                1-6
              </strong>
              {' '}of{' '}
              <strong className="text-slate-700 dark:text-slate-300">
                24
              </strong>
              {' '}campaigns
            </span>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40" disabled>
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              <span className="w-7 h-7 rounded-lg bg-portal-brand text-white font-bold flex items-center justify-center text-xs">
                1
              </span>
              <button className="w-7 h-7 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs flex items-center justify-center transition-colors">
                2
              </button>
              <button className="w-7 h-7 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs flex items-center justify-center transition-colors">
                3
              </button>
              <button className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </Card>
        <Card hover className="w-full xl:w-80 shrink-0 p-5" id="campaign-inspector">
          <div className="flex items-start justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Live Inspector
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight" id="inspector-title">
{CAMPAIGN_TITLES[selected]}
              </h3>
              <p className="text-[11px] text-slate-400">
                WhatsApp Business API · Nov 8, 2024
              </p>
            </div>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Delivered
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Broadcast
              </span>
              <span className="text-sm font-extrabold text-slate-900 dark:text-white block leading-tight mt-0.5">
                84,200
              </span>
              <span className="text-[9px] text-teal-600 font-semibold">
                100% queued
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Delivery
              </span>
              <span className="text-sm font-extrabold text-emerald-600 block leading-tight mt-0.5">
                99.1%
              </span>
              <span className="text-[9px] text-slate-500 font-medium">
                83,442 reached
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Read Rate
              </span>
              <span className="text-sm font-extrabold text-slate-900 dark:text-white block leading-tight mt-0.5">
                86.4%
              </span>
              <span className="text-[9px] text-slate-500 font-medium">
                72,093 opened
              </span>
            </div>
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Replied / CTR
              </span>
              <span className="text-sm font-extrabold text-portal-accent block leading-tight mt-0.5">
                16.8%
              </span>
              <span className="text-[9px] text-slate-500 font-medium">
                14,210 replies
              </span>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-slate-700 dark:text-slate-300 text-[11px]">
                Delivery Funnel
              </span>
              <span className="text-slate-400 font-medium text-[11px]">
                83.4k of 84.2k
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
              <div className="h-full bg-teal-600 rounded-l-full" style={{ "width": "86.4%" }} />
              <div className="h-full bg-teal-300" style={{ "width": "12.7%" }} />
              <div className="h-full bg-rose-400" style={{ "width": "0.9%" }} />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
              <span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-600 mr-1" />
                Read 86.4%
              </span>
              <span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-300 mr-1" />
                Unread 12.7%
              </span>
              <span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 mr-1" />
                Failed 0.9%
              </span>
            </div>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Dispatched Preview
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[13px]">
                  verified
                </span>
                {' '}Meta Verified
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-portal-chat dark:bg-[#1a2332] text-[#111b21] dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-inner">
              <div className="bg-white dark:bg-[#1f2d42] p-2 rounded-xl rounded-tl-sm shadow-sm space-y-1.5 border border-slate-100 dark:border-slate-700">
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-snug font-normal">
                  Salam{' '}
                  <strong>
                    Ahmed
                  </strong>
                  ! 🌙✨ Our Eid Mega Collection is live with flat{' '}
                  <strong>
                    40% OFF
                  </strong>
                  . Code:{' '}
                  <span className="font-bold text-teal-700 dark:text-teal-400">
                    EIDVIP40
                  </span>
                </p>
                <div className="pt-1.5 border-t border-slate-100 dark:border-slate-700/80 flex items-center gap-2">
                  <a className="flex-1 py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-teal-700 dark:text-teal-400 hover:bg-slate-100 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors" href="#">
                    <span className="material-symbols-outlined text-[14px]">
                      shopping_bag
                    </span>
                    {' '}Shop VIP
                  </a>
                  <a className="flex-1 py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 font-semibold text-[11px] flex items-center justify-center gap-1 transition-colors" href="#">
                    <span className="material-symbols-outlined text-[14px]">
                      support_agent
                    </span>
                    {' '}Stylist
                  </a>
                </div>
                <div className="text-right text-[9px] text-slate-400 flex items-center justify-end gap-1 pt-0.5">
                  <span>
                    11:32 AM
                  </span>
                  <span className="material-symbols-outlined text-[13px] text-teal-600">
                    done_all
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <button className="flex-1 py-1.5 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-[15px]">
                content_copy
              </span>
              {' '}Duplicate
            </button>
            <button className="flex-1 py-1.5 px-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 hover:bg-teal-100 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-teal-200 dark:border-teal-800">
              <span className="material-symbols-outlined text-[15px]">
                groups
              </span>
              {' '}Audience
            </button>
          </div>
        </Card>
      </div>
      <Modal open={wizard.isOpen} onClose={wizard.close} className="w-full max-w-2xl">
        <div className="bg-white dark:bg-portal-surface w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Campaign Builder
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                Create New Broadcast Campaign
              </h3>
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={wizard.close}>
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
          </div>
          <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-teal-600 font-bold">
              <span className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center text-xs">
                1
              </span>
              {' '}
              <span>
                Channel
              </span>
            </div>
            <div className="w-8 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs">
                2
              </span>
              {' '}
              <span>
                Audience
              </span>
            </div>
            <div className="w-8 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs">
                3
              </span>
              {' '}
              <span>
                Message
              </span>
            </div>
            <div className="w-8 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs">
                4
              </span>
              {' '}
              <span>
                Schedule
              </span>
            </div>
            <div className="w-8 h-px bg-slate-200 dark:bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-400 font-medium">
              <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs">
                5
              </span>
              {' '}
              <span>
                Review
              </span>
            </div>
          </div>
          <div className="p-6 space-y-5 overflow-y-auto max-h-[60vh]">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                Campaign Title
              </label>
              <input className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#121c2d] text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 focus:outline-none" type="text" defaultValue="Ramadan Flash Sale #1" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                Select Primary Channel
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl border-2 border-teal-500 bg-teal-50/40 dark:bg-teal-950/30 flex items-start gap-3 cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      chat
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        WhatsApp
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-teal-600 text-[18px]">
                        check_circle
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Rich media, buttons &amp; verified OTPs.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 flex items-start gap-3 cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-portal-accent text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      sms
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Tier-1 Telco SMS
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Direct routes, 100% offline reach.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 flex items-start gap-3 cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-teal-400 text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      phone_in_talk
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Voice IVR
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Automated broadcast voice calls.
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 flex items-start gap-3 cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-purple-500 text-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">
                      alt_route
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      Smart Fallback
                    </span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      WhatsApp → SMS failover if unread.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-3">
              <span className="material-symbols-outlined text-teal-600 text-[20px]">
                info
              </span>
              <div>
                <strong>
                  Quota Estimate:
                </strong>
                {' '}42,000 active contacts will consume approx.{' '}
                <strong className="text-teal-700 dark:text-teal-400">
                  PKR 21,000
                </strong>
                .
              </div>
            </div>
          </div>
          <div className="p-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={wizard.close}>
              Cancel
            </button>
            <button className="bg-portal-accent hover:bg-portal-accent-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all" onClick={() => { wizard.close(); navigate("/portal/campaigns/audience"); }}>
              Continue to Audience{' '}
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
