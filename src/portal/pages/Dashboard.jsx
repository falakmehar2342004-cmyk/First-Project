import { useState } from "react";
import { Can } from "../auth/AccessContext.jsx";
import { PageHero, Card } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";
import { useCountry } from "../context/PortalContext.jsx";

const ACTIONS = [[["new campaign"], "/portal/campaigns/new"]];

const fmtDay = (r) => { const d = Math.floor(r * 13) + 28; return d > 31 ? `Nov ${d - 31}` : `Oct ${d}`; };


export default function Dashboard() {
  const country = useCountry();
  const onAction = useActionLinks(ACTIONS);
  const [tip, setTip] = useState(null);
  const [channel, setChannel] = useState(null);
  const onChartMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const r = Math.min(Math.max(x / rect.width, 0), 1);
    setTip({ left: Math.min(Math.max(x - 60, 10), rect.width - 140), top: Math.max(y - 50, 10), date: `${fmtDay(r)} · Active Trend`, wa: (28 + r * 24).toFixed(1) + "k", sms: (14 + r * 10).toFixed(1) + "k" });
  };
  return (
    <div className="contents" onClick={onAction}>
      <PageHero padding="p-7 pb-16" className="mb-0">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-2 mb-2">
              Good morning, Ahmed{' '}
              <span className="inline-block origin-bottom-right">
                👋
              </span>
            </h2>
            <p className="text-teal-50 text-sm font-normal leading-relaxed opacity-95">
              Your messages are flowing smoothly. 98.7% delivered this week, and your next campaign goes out at 7:40 PM.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Can perm="campaigns.manage"><button className="bg-portal-accent hover:bg-portal-accent-hover text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-coral-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              New Campaign
            </button></Can>
            <div className="px-4 py-2 rounded-2xl flex flex-col items-end backdrop-blur-md" style={{ "background": "rgba(255, 255, 255, 0.18)", "border": "1px solid rgba(255, 255, 255, 0.25)" }}>
              <span className="text-[10px] font-medium text-teal-100 tracking-wide">
                Wallet balance
              </span>
              <span className="text-lg font-bold text-white tracking-tight" id="hero-wallet-display">
{country.balance}
              </span>
            </div>
          </div>
        </div>
      </PageHero>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 relative z-10 px-4 -mt-10" data-purpose="metrics-row">
        <Card hover className="p-5 flex items-center gap-4 cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20">
            <svg className="w-6 h-6 transform rotate-45 -translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Messages sent
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                248.6K
              </span>
              {' '}
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center">
                <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {' '}12.4%{' '}
                <span className="text-slate-400 dark:text-slate-500 font-normal ml-1">
                  vs last week
                </span>
              </span>
            </div>
          </div>
        </Card>
        <Card hover className="p-5 flex items-center gap-4 cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Delivery rate
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                98.7%
              </span>
              {' '}
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center">
                <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {' '}0.6%{' '}
                <span className="text-slate-400 dark:text-slate-500 font-normal ml-1">
                  vs last week
                </span>
              </span>
            </div>
          </div>
        </Card>
        <Card hover className="p-5 flex items-center gap-4 cursor-default">
          <div className="w-12 h-12 rounded-2xl bg-portal-accent text-white flex items-center justify-center shrink-0 shadow-md shadow-coral-500/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Active contacts
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                1.42M
              </span>
              {' '}
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center">
                <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {' '}8.1%{' '}
                <span className="text-slate-400 dark:text-slate-500 font-normal ml-1">
                  new opt-ins
                </span>
              </span>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" data-purpose="charts-and-operations-grid">
        <div className="lg:col-span-8 space-y-6">
          <Card hover className="p-6" id="delivery-chart-card">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Delivery performance
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span className="relative flex h-2 w-2">
                      <span className="beacon-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      {' '}
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    {' '}Live stream
                  </span>
                </div>
                <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                  Messages delivered · last 14 days
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500 ring-2 ring-teal-200 dark:ring-teal-900" />
                  {' '}WhatsApp
                </span>
                {' '}
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-portal-accent ring-2 ring-orange-200 dark:ring-orange-950" />
                  {' '}SMS
                </span>
              </div>
            </div>
            <div className="relative w-full pt-4 group/chart" onMouseLeave={() => setTip(null)} onMouseMove={onChartMove}>
              <div className={"absolute pointer-events-none bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs shadow-xl z-20 transition-all duration-75 border border-slate-700 " + (tip ? "" : "hidden")} style={{ left: tip?.left, top: tip?.top }}>
                <div className="text-[10px] text-slate-400 font-semibold mb-0.5" id="tooltip-date">
{tip?.date}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-300 font-bold" id="tooltip-wa">
{`WA: ${tip?.wa}`}
                  </span>
                  {' '}
                  <span className="text-orange-300 font-bold" id="tooltip-sms">
{`SMS: ${tip?.sms}`}
                  </span>
                </div>
              </div>
              <svg className="w-full h-48 overflow-visible" preserveAspectRatio="none" viewBox="0 0 650 160">
                <defs>
                  <linearGradient id="tealGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="coralGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ff6b4a" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#ff6b4a" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line className="dark:stroke-slate-800" stroke="#f1f5f9" strokeDasharray="4" strokeWidth="1" x1="0" x2="650" y1="30" y2="30" />
                <line className="dark:stroke-slate-800" stroke="#f1f5f9" strokeDasharray="4" strokeWidth="1" x1="0" x2="650" y1="75" y2="75" />
                <line className="dark:stroke-slate-800" stroke="#f1f5f9" strokeDasharray="4" strokeWidth="1" x1="0" x2="650" y1="120" y2="120" />
                <path className="animate-fill" d="M 0 115 Q 60 112, 110 110 T 220 100 T 330 96 T 440 92 T 550 90 T 650 82 L 650 150 L 0 150 Z" fill="url(#coralGrad)" />
                <path className="animate-path" d="M 0 115 Q 60 112, 110 110 T 220 100 T 330 96 T 440 92 T 550 90 T 650 82" fill="none" stroke="#ff7c5c" strokeLinecap="round" strokeWidth="2.5" />
                <path className="animate-fill" d="M 0 102 Q 50 98, 100 95 T 200 86 T 300 82 T 420 68 T 520 65 T 650 48 L 650 150 L 0 150 Z" fill="url(#tealGrad)" />
                <path className="animate-path" d="M 0 102 Q 50 98, 100 95 T 200 86 T 300 82 T 420 68 T 520 65 T 650 48" fill="none" stroke="#0d9488" strokeLinecap="round" strokeWidth="3" />
                <g className="cursor-pointer">
                  <circle className="transition-transform hover:scale-150" cx="650" cy="48" fill="#0d9488" r="5" stroke="#ffffff" strokeWidth="2.5" />
                  <circle className="beacon-pulse opacity-70" cx="650" cy="48" fill="none" r="9" stroke="#0d9488" strokeWidth="1.5" />
                </g>
                <circle className="cursor-pointer transition-transform hover:scale-150" cx="650" cy="82" fill="#ff7c5c" r="4.5" stroke="#ffffff" strokeWidth="2" />
              </svg>
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span>
                  Oct 28
                </span>
                {' '}
                <span>
                  Nov 1
                </span>
                {' '}
                <span>
                  Nov 5
                </span>
                {' '}
                <span className="text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1">
                  Nov 10 (Today)
                </span>
              </div>
            </div>
          </Card>
          <Card hover className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Recent campaigns
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                  Latest broadcasts
                </p>
              </div>
              <a className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 flex items-center gap-1 group" href="#">
                View all{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-400 dark:text-slate-500 tracking-wider">
                    <th className="pb-3 font-semibold">
                      Campaign
                    </th>
                    <th className="pb-3 font-semibold">
                      Channel
                    </th>
                    <th className="pb-3 font-semibold">
                      Sent
                    </th>
                    <th className="pb-3 font-semibold">
                      Delivered
                    </th>
                    <th className="pb-3 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-slate-700 dark:text-slate-300 font-medium">
                  <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 text-slate-900 dark:text-white font-bold">
                      Eid Mega Sale
                    </td>
                    <td className="py-3.5 text-slate-500 dark:text-slate-400">
                      WhatsApp
                    </td>
                    <td className="py-3.5 text-slate-600 dark:text-slate-300 font-semibold">
                      84,200
                    </td>
                    <td className="py-3.5 text-slate-600 dark:text-slate-300 font-semibold">
                      99.1%
                    </td>
                    <td className="py-3.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        Delivered
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 text-slate-900 dark:text-white font-bold">
                      Cart Reminder · Urdu
                    </td>
                    <td className="py-3.5 text-slate-500 dark:text-slate-400">
                      WhatsApp
                    </td>
                    <td className="py-3.5 text-slate-600 dark:text-slate-300 font-semibold">
                      12,480
                    </td>
                    <td className="py-3.5 text-slate-600 dark:text-slate-300 font-semibold">
                      98.4%
                    </td>
                    <td className="py-3.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/60 text-portal-accent border border-orange-200 dark:border-orange-800">
                        Sending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 text-slate-900 dark:text-white font-bold">
                      Riyadh VIP Offer
                    </td>
                    <td className="py-3.5 text-slate-500 dark:text-slate-400">
                      SMS
                    </td>
                    <td className="py-3.5 text-slate-600 dark:text-slate-300 font-semibold">
                      31,050
                    </td>
                    <td className="py-3.5 text-slate-400 dark:text-slate-500">
                      —
                    </td>
                    <td className="py-3.5">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        Scheduled
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-4 space-y-6">
          <Card hover className="p-6" id="channel-split-card">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Channel split
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                  This week
                </p>
              </div>
              <span className="text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                Realtime
              </span>
            </div>
            <div className="flex items-center justify-center my-6 relative">
              <svg className="w-44 h-44 transform -rotate-90 overflow-visible" viewBox="0 0 100 100">
                <circle className="dark:stroke-slate-800" cx="50" cy="50" fill="transparent" r="38" stroke="#f1f5f9" strokeWidth="10" />
                <circle className="donut-seg" cx="50" cy="50" fill="transparent" id="donut-wa" onMouseEnter={() => setChannel(["WhatsApp", "56%"])} onMouseLeave={() => setChannel(null)} r="38" stroke="#0D9488" strokeDasharray="133.5 238.7" strokeDashoffset="0" strokeLinecap="round" strokeWidth="10" />
                <circle className="donut-seg" cx="50" cy="50" fill="transparent" id="donut-sms" onMouseEnter={() => setChannel(["SMS", "28%"])} onMouseLeave={() => setChannel(null)} r="38" stroke="#5eead4" strokeDasharray="66.8 238.7" strokeDashoffset="-135" strokeLinecap="round" strokeWidth="10" />
                <circle className="donut-seg" cx="50" cy="50" fill="transparent" id="donut-voice" onMouseEnter={() => setChannel(["Voice", "16%"])} onMouseLeave={() => setChannel(null)} r="38" stroke="#ff8264" strokeDasharray="38.2 238.7" strokeDashoffset="-203" strokeLinecap="round" strokeWidth="10" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-200">
                <span className="text-2xl font-black text-slate-900 dark:text-white leading-tight" id="donut-center-val">
{channel ? channel[1] : "248K"}
                </span>
                {' '}
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-400" id="donut-center-sub">
{channel ? channel[0] : "total"}
                </span>
              </div>
            </div>
            <div className="space-y-2.5 pt-1 text-xs font-semibold">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800" onMouseEnter={() => setChannel(["WhatsApp", "56%"])} onMouseLeave={() => setChannel(null)}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600 ring-2 ring-teal-200 dark:ring-teal-900" />
                  {' '}
                  <span>
                    WhatsApp
                  </span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">
                  56%
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800" onMouseEnter={() => setChannel(["SMS", "28%"])} onMouseLeave={() => setChannel(null)}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-300 ring-2 ring-teal-100 dark:ring-teal-950" />
                  {' '}
                  <span>
                    SMS
                  </span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">
                  28%
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800" onMouseEnter={() => setChannel(["Voice", "16%"])} onMouseLeave={() => setChannel(null)}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff8264] ring-2 ring-orange-200 dark:ring-orange-950" />
                  {' '}
                  <span>
                    Voice
                  </span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">
                  16%
                </span>
              </div>
            </div>
          </Card>
          <Card hover className="p-6 border-teal-100 dark:border-teal-900/60 relative" data-purpose="ai-copilot-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  AI Co-Pilot
                </h4>
                <span className="text-xs text-slate-400 dark:text-slate-400">
                  Suggestion for you
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Send{' '}
              <span className="font-bold text-slate-900 dark:text-white">
                Cart Abandoners
              </span>
              {' '}at{' '}
              <span className="font-bold text-slate-900 dark:text-white">
                7:40 PM
              </span>
              {' '}after Maghrib for{' '}
              <span className="font-bold text-teal-600 dark:text-teal-400">
                +18% opens
              </span>
              .
            </p>
            <div className="bg-teal-50/60 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-900/70 rounded-xl p-3 mb-4 text-xs font-normal text-slate-700 dark:text-slate-300 italic leading-relaxed">
              “Assalam-o-Alaikum! Aapki cart mein items reserved hain, abhi confirm karein.”
            </div>
            <div className="flex items-center gap-2">
              <button className="flex-1 bg-portal-accent hover:bg-portal-accent-hover text-white py-2 px-3 rounded-xl text-xs font-bold transition-all shadow-md shadow-coral-500/20 text-center hover:scale-[1.02] active:scale-[0.98]">
                Approve &amp; schedule
              </button>
              <button className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 py-2 px-4 rounded-xl text-xs font-bold transition-all">
                Edit
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
