import { useState } from "react";
import { PageHero, Segmented } from "../ui/index.js";

const TABS = ["Overview", "Delivery & Latency", "Conversion & Sales", "Telco Breakdown (Jazz, Zong, Telenor, Ufone)"];


export default function Analytics() {
  const [tab, setTab] = useState(TABS[0]);
  return (
    <>
      <div className="flex flex-col w-full space-y-6">
        <PageHero>
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div className="flex flex-col max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md w-fit">
                <span className="material-symbols-outlined text-portal-mint text-[16px]">
                  monitoring
                </span>
                {' '}
                <span className="text-jk-label-sm tracking-wide text-white uppercase">
                  Real-Time Telemetry &amp; ROI Intelligence
                </span>
              </div>
              <h1 className="text-jk-headline-lg lg:text-jk-display-hero text-white tracking-tight flex items-center gap-3">
                Analytics &amp; Reporting{' '}
                <span className="inline-flex items-center justify-center p-1.5 rounded-lg bg-white/10 text-portal-mint">
                  <span className="material-symbols-outlined text-[24px]">
                    trending_up
                  </span>
                </span>
              </h1>
              <p className="text-jk-body-md text-white/90 leading-relaxed">
                Track multi-channel message delivery, conversion attribution, telco latency, and ROI across WhatsApp Cloud API &amp; Pakistan SMS networks.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md text-white shadow-sm">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-portal-mint opacity-75" />
                  {' '}
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-portal-mint" />
                </div>
                <span className="text-jk-label-md tracking-tight">
                  Avg Latency:{' '}
                  <strong className="text-portal-mint">
                    1.2s
                  </strong>
                </span>
                {' '}
                <span className="text-white/40">
                  •
                </span>
                {' '}
                <span className="text-jk-label-md tracking-tight">
                  Delivery:{' '}
                  <strong className="text-portal-mint">
                    98.7%
                  </strong>
                </span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-jk-label-md transition-all shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_today
                </span>
                {' '}
                <span>
                  Last 30 Days (Oct 15 - Nov 14, 2024)
                </span>
                {' '}
                <span className="material-symbols-outlined text-[16px] text-white/70">
                  keyboard_arrow_down
                </span>
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-portal-accent to-portal-danger text-white text-jk-label-md shadow-lg shadow-portal-danger/30 hover:brightness-110 active:scale-[0.98] transition-all" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  cloud_download
                </span>
                {' '}
                <span>
                  Export Full Report
                </span>
              </button>
            </div>
          </div>
        </PageHero>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-portal-tint flex items-center justify-center text-portal-brand-deep">
                <span className="material-symbols-outlined text-[24px]">
                  send
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-portal-tint text-portal-success text-jk-label-sm">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>
                {' '}+14.8%
              </span>
            </div>
            <div className="mt-4">
              <p className="text-jk-label-sm uppercase tracking-wider text-portal-ink-muted">
                Total Dispatched
              </p>
              <p className="text-jk-metric-stat text-portal-ink mt-1">
                1,842,500
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-portal-ink-soft text-jk-body-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-portal-brand-deep" />
                {' '}
                <span>
                  WA (1.24M)
                </span>
                {' '}
                <span className="text-portal-ink-muted">
                  •
                </span>
                {' '}
                <span className="inline-block w-2 h-2 rounded-full bg-portal-accent" />
                {' '}
                <span>
                  SMS (602.5k)
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-portal-tint flex items-center justify-center text-portal-success">
                <span className="material-symbols-outlined text-[24px]">
                  verified_user
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-portal-tint text-portal-success text-jk-label-sm">
                <span className="material-symbols-outlined text-[14px]">
                  check
                </span>
                {' '}98.7% SLA
              </span>
            </div>
            <div className="mt-4">
              <p className="text-jk-label-sm uppercase tracking-wider text-portal-ink-muted">
                Delivery Success Rate
              </p>
              <p className="text-jk-metric-stat text-portal-ink mt-1">
                98.7%
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-portal-ink-soft text-jk-body-sm">
                <span className="text-portal-danger">
                  Failed: 23,950 (1.3%)
                </span>
                {' '}
                <span className="text-portal-ink-muted">
                  •
                </span>
                {' '}
                <span className="text-portal-success">
                  PTA Whitelisted
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-portal-tint flex items-center justify-center text-portal-brand">
                <span className="material-symbols-outlined text-[24px]">
                  ads_click
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-portal-tint text-portal-brand-deep text-jk-label-sm">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>
                {' '}+3.2% vs BM
              </span>
            </div>
            <div className="mt-4">
              <p className="text-jk-label-sm uppercase tracking-wider text-portal-ink-muted">
                Click-Through Rate (CTR)
              </p>
              <p className="text-jk-metric-stat text-portal-ink mt-1">
                28.4%
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-portal-ink-soft text-jk-body-sm">
                <span className="text-portal-ink">
                  422,910
                </span>
                {' '}
                <span>
                  unique links opened
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-portal-tint flex items-center justify-center text-portal-danger">
                <span className="material-symbols-outlined text-[24px]">
                  payments
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-portal-accent-soft text-[#3d0600] text-jk-label-sm">
                <span className="material-symbols-outlined text-[14px]">
                  star
                </span>
                {' '}7.8x ROAS
              </span>
            </div>
            <div className="mt-4">
              <p className="text-jk-label-sm uppercase tracking-wider text-portal-ink-muted">
                Attributed Revenue
              </p>
              <p className="text-jk-metric-stat text-portal-ink mt-1">
                PKR 18.4M
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-portal-ink-soft text-jk-body-sm">
                <span>
                  Spend:{' '}
                  <strong className="text-portal-ink">
                    PKR 2.36M
                  </strong>
                </span>
                {' '}
                <span className="text-portal-ink-muted">
                  •
                </span>
                {' '}
                <span className="text-portal-success">
                  Profit: PKR 16.04M
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2.5 rounded-2xl bg-white shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <Segmented variant="solid" options={TABS} value={tab} onChange={setTab} />
          <div className="flex items-center gap-3 self-end lg:self-auto">
            <div className="relative">
              <select className="appearance-none bg-portal-tint text-portal-ink text-jk-label-md pl-3 pr-8 py-2 rounded-xl focus:outline-none cursor-pointer">
                <option>
                  All Channels (WhatsApp, SMS)
                </option>
                <option>
                  WhatsApp Cloud API Only
                </option>
                <option>
                  Pakistan SMS Direct Only
                </option>
                <option>
                  Rich RCS Only
                </option>
              </select>
              <span className="material-symbols-outlined text-[16px] text-portal-ink-muted absolute right-2.5 top-2.5 pointer-events-none">
                unfold_more
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-portal-tint text-portal-ink-soft text-jk-label-sm">
              <span className="w-2 h-2 rounded-full bg-portal-success animate-pulse" />
              {' '}
              <span>
                Live (60s)
              </span>
            </div>
            <label className="hidden sm:flex items-center gap-2 cursor-pointer text-jk-label-sm text-portal-ink-soft pl-1">
              <input defaultChecked className="w-4 h-4 rounded text-portal-brand-deep focus:ring-0 cursor-pointer accent-portal-brand-deep" type="checkbox" />
              <span>
                Compare vs Prev Period
              </span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-jk-headline-sm text-portal-ink">
                  Delivery Performance &amp; Volume Timeline
                </h2>
                <p className="text-jk-body-sm text-portal-ink-soft mt-0.5">
                  Daily sent vs delivered message volume across WhatsApp &amp; SMS
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-portal-brand-deep" />
                    {' '}
                    <span className="text-jk-label-sm text-portal-ink-soft">
                      WhatsApp
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-portal-accent" />
                    {' '}
                    <span className="text-jk-label-sm text-portal-ink-soft">
                      SMS
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-portal-line" />
                    {' '}
                    <span className="text-jk-label-sm text-portal-ink-soft">
                      Failed
                    </span>
                  </div>
                </div>
                <div className="flex items-center p-1 rounded-xl bg-portal-tint">
                  <button className="px-2.5 py-1 text-[11px] rounded-lg text-portal-ink-soft hover:text-portal-ink" type="button">
                    Hourly
                  </button>
                  <button className="px-2.5 py-1 text-[11px] rounded-lg bg-white text-portal-brand-deep shadow-sm" type="button">
                    Daily
                  </button>
                  <button className="px-2.5 py-1 text-[11px] rounded-lg text-portal-ink-soft hover:text-portal-ink" type="button">
                    Weekly
                  </button>
                </div>
              </div>
            </div>
            <div className="relative w-full h-72 sm:h-80">
              <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none z-10 hidden sm:flex flex-col gap-1 px-3 py-2 rounded-xl bg-[#213145] text-[#eaf1ff] shadow-md">
                <div className="text-[11px] text-[#eaf1ff]/70">
                  Nov 04, 2024 (Flash Sale Launch)
                </div>
                <div className="flex items-center gap-3 text-jk-label-sm">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-portal-mint-2" />
                    {' '}WA: 64,200
                  </span>
                  {' '}
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-portal-accent-soft" />
                    {' '}SMS: 38,100
                  </span>
                  {' '}
                  <span className="text-portal-mint">
                    99.4% Deliv.
                  </span>
                </div>
              </div>
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 280">
                <defs>
                  <linearGradient id="waGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00685f" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#00685f" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="smsGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#fd6a49" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#fd6a49" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line stroke="#bcc9c6" strokeDasharray="4 4" strokeOpacity="0.25" x1="0" x2="800" y1="40" y2="40" />
                <line stroke="#bcc9c6" strokeDasharray="4 4" strokeOpacity="0.25" x1="0" x2="800" y1="100" y2="100" />
                <line stroke="#bcc9c6" strokeDasharray="4 4" strokeOpacity="0.25" x1="0" x2="800" y1="160" y2="160" />
                <line stroke="#bcc9c6" strokeDasharray="4 4" strokeOpacity="0.25" x1="0" x2="800" y1="220" y2="220" />
                <path d="M0,190 C100,160 160,210 240,140 C320,70 380,180 440,90 C500,40 580,130 660,110 C720,95 760,60 800,80 L800,260 L0,260 Z" fill="url(#waGradient)" />
                <path d="M0,230 C90,210 170,225 250,195 C330,165 390,210 460,170 C530,130 590,190 670,180 C730,175 770,140 800,150 L800,260 L0,260 Z" fill="url(#smsGradient)" />
                <path d="M0,190 C100,160 160,210 240,140 C320,70 380,180 440,90 C500,40 580,130 660,110 C720,95 760,60 800,80" fill="none" stroke="#00685f" strokeLinecap="round" strokeWidth="3" />
                <path d="M0,230 C90,210 170,225 250,195 C330,165 390,210 460,170 C530,130 590,190 670,180 C730,175 770,140 800,150" fill="none" stroke="#fd6a49" strokeDasharray="2 0" strokeLinecap="round" strokeWidth="2.5" />
                <circle className="animate-pulse" cx="440" cy="90" fill="#00685f" r="5" />
                <circle cx="440" cy="90" fill="none" opacity="0.4" r="9" stroke="#00685f" strokeWidth="2" />
                <line stroke="#00685f" strokeDasharray="3 3" strokeOpacity="0.3" strokeWidth="1.5" x1="440" x2="440" y1="0" y2="260" />
              </svg>
              <div className="flex justify-between items-center text-portal-ink-muted text-[10px] pt-3">
                <span>
                  Oct 15
                </span>
                {' '}
                <span>
                  Oct 20
                </span>
                {' '}
                <span>
                  Oct 25
                </span>
                {' '}
                <span>
                  Oct 30
                </span>
                {' '}
                <span className="text-portal-brand-deep font-bold">
                  Nov 04 (Peak)
                </span>
                {' '}
                <span>
                  Nov 09
                </span>
                {' '}
                <span>
                  Nov 14
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-portal-tint text-portal-ink">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-portal-brand-deep shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    bolt
                  </span>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-portal-ink-muted">
                    WhatsApp Peak Rate
                  </div>
                  <div className="text-jk-label-md text-portal-ink font-bold">
                    142,400 msg / hr
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-portal-danger shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    speed
                  </span>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-portal-ink-muted">
                    Pakistan SMS Peak
                  </div>
                  <div className="text-jk-label-md text-portal-ink font-bold">
                    86,200 msg / hr
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-portal-success shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">
                    timer
                  </span>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-portal-ink-muted">
                    Avg Delivery Latency
                  </div>
                  <div className="text-jk-label-md text-portal-ink font-bold">
                    1.8s WA • 2.4s Telco
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-jk-headline-sm text-portal-ink">
                  Channel Split
                </h2>
                <p className="text-jk-body-sm text-portal-ink-soft">
                  Traffic &amp; Revenue Share
                </p>
              </div>
              <button className="p-1 rounded-lg text-portal-ink-soft hover:bg-portal-tint transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]">
                  more_vert
                </span>
              </button>
            </div>
            <div className="relative flex items-center justify-center py-2">
              <svg className="w-48 h-48 -rotate-90 transform" viewBox="0 0 160 160">
                <circle cx="80" cy="80" fill="transparent" r="64" stroke="#eff4ff" strokeWidth="18" />
                <circle cx="80" cy="80" fill="transparent" r="64" stroke="#00685f" strokeDasharray="257.35 402.12" strokeDashoffset="0" strokeLinecap="round" strokeWidth="18" />
                <circle cx="80" cy="80" fill="transparent" r="64" stroke="#fd6a49" strokeDasharray="124.65 402.12" strokeDashoffset="-262" strokeLinecap="round" strokeWidth="18" />
                <circle cx="80" cy="80" fill="transparent" r="64" stroke="#00855b" strokeDasharray="20.1 402.12" strokeDashoffset="-390" strokeLinecap="round" strokeWidth="18" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-jk-headline-md text-portal-ink font-bold">
                  1.84M
                </span>
                {' '}
                <span className="text-jk-label-sm text-portal-ink-soft">
                  Total Volume
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-jk-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-portal-brand-deep" />
                    {' '}
                    <span className="text-jk-label-md text-portal-ink">
                      WhatsApp Cloud API
                    </span>
                  </div>
                  <span className="font-bold text-portal-ink">
                    64%
                  </span>
                </div>
                <div className="w-full bg-portal-tint-3 h-2 rounded-full overflow-hidden">
                  <div className="bg-portal-brand-deep h-full rounded-full" style={{ "width": "64%" }} />
                </div>
                <div className="flex justify-between items-center text-[11px] text-portal-ink-soft">
                  <span>
                    Rev:{' '}
                    <strong className="text-portal-ink">
                      PKR 12.8M
                    </strong>
                  </span>
                  {' '}
                  <span className="text-portal-success">
                    34.2% CTR
                  </span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-jk-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-portal-accent" />
                    {' '}
                    <span className="text-jk-label-md text-portal-ink">
                      Pakistan Telco SMS
                    </span>
                  </div>
                  <span className="font-bold text-portal-ink">
                    31%
                  </span>
                </div>
                <div className="w-full bg-portal-tint-3 h-2 rounded-full overflow-hidden">
                  <div className="bg-portal-accent h-full rounded-full" style={{ "width": "31%" }} />
                </div>
                <div className="flex justify-between items-center text-[11px] text-portal-ink-soft">
                  <span>
                    Rev:{' '}
                    <strong className="text-portal-ink">
                      PKR 4.9M
                    </strong>
                  </span>
                  {' '}
                  <span className="text-portal-brand-deep">
                    18.5% CTR
                  </span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-jk-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-portal-success-soft" />
                    {' '}
                    <span className="text-jk-label-md text-portal-ink">
                      Rich RCS Messaging
                    </span>
                  </div>
                  <span className="font-bold text-portal-ink">
                    5%
                  </span>
                </div>
                <div className="w-full bg-portal-tint-3 h-2 rounded-full overflow-hidden">
                  <div className="bg-portal-success-soft h-full rounded-full" style={{ "width": "5%" }} />
                </div>
                <div className="flex justify-between items-center text-[11px] text-portal-ink-soft">
                  <span>
                    Rev:{' '}
                    <strong className="text-portal-ink">
                      PKR 710k
                    </strong>
                  </span>
                  {' '}
                  <span className="text-portal-success">
                    22.1% CTR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-sm p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-jk-headline-sm text-portal-ink">
                Top Performing Campaigns &amp; Conversion Breakdown
              </h2>
              <p className="text-jk-body-sm text-portal-ink-soft">
                Direct attribution, click through rates, and carrier delivery verification
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-portal-ink-muted text-[18px]">
                  search
                </span>
                <input className="w-full h-9 pl-9 pr-3 rounded-xl bg-portal-tint text-portal-ink placeholder:text-portal-ink-muted text-jk-body-sm focus:outline-none" placeholder="Filter campaigns..." type="text" />
              </div>
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-portal-tint hover:bg-portal-tint-2 text-portal-ink text-jk-label-sm transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px]">
                  filter_list
                </span>
                {' '}
                <span>
                  Filter
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-portal-tint/60 text-portal-ink-muted uppercase text-[11px] tracking-wider rounded-xl">
                  <th className="py-3 px-4 rounded-l-xl">
                    Campaign Name &amp; Channel
                  </th>
                  <th className="py-3 px-4">
                    Sent / Delivered
                  </th>
                  <th className="py-3 px-4">
                    Read Rate
                  </th>
                  <th className="py-3 px-4">
                    Clicks &amp; CTR
                  </th>
                  <th className="py-3 px-4">
                    Conversions
                  </th>
                  <th className="py-3 px-4">
                    Revenue
                  </th>
                  <th className="py-3 px-4">
                    Network Health
                  </th>
                  <th className="py-3 px-4 text-right rounded-r-xl">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-jk-body-sm divide-y-0 space-y-1">
                <tr className="hover:bg-portal-tint/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-portal-brand-deep/10 flex items-center justify-center text-portal-brand-deep shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          chat
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-jk-label-md text-portal-ink truncate">
                          Eid Festive Mega Sale 2024
                        </div>
                        <div className="text-[11px] text-portal-brand-deep">
                          WhatsApp Cloud API • Interactive Buttons
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      248,600 / 246,362
                    </div>
                    <div className="w-24 bg-portal-tint-3 h-1.5 rounded-full mt-1 overflow-hidden">
                      <div className="bg-portal-success h-full rounded-full" style={{ "width": "99.1%" }} />
                    </div>
                    <span className="text-[10px] text-portal-success">
                      99.1% delivered
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      84.2%
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      207,430 read
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      85,020
                    </div>
                    <span className="text-[10px] text-portal-success font-bold">
                      34.2% CTR
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      6,840 orders
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      8.0% purchase conv.
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-success font-bold">
                      PKR 6,420,000
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      ROAS 9.2x
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-portal-tint text-portal-success text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-portal-success" />
                      {' '}Completed • 99.1%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <a className="inline-flex items-center gap-1 text-jk-label-sm text-portal-brand-deep hover:text-portal-brand" href="#">
                      Deep-Dive{' '}
                      <span className="material-symbols-outlined text-[14px]">
                        north_east
                      </span>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-portal-tint/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-portal-accent/15 flex items-center justify-center text-portal-danger shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          sms
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-jk-label-md text-portal-ink truncate">
                          Midnight Flash 50% Off
                        </div>
                        <div className="text-[11px] text-portal-danger">
                          Telco Direct SMS • Jazz &amp; Zong Priority
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      412,000 / 403,760
                    </div>
                    <div className="w-24 bg-portal-tint-3 h-1.5 rounded-full mt-1 overflow-hidden">
                      <div className="bg-portal-success h-full rounded-full" style={{ "width": "98.0%" }} />
                    </div>
                    <span className="text-[10px] text-portal-success">
                      98.0% delivered
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      71.5%
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      Est. carrier handoff
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      74,695
                    </div>
                    <span className="text-[10px] text-portal-brand-deep font-bold">
                      18.5% CTR
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      4,120 orders
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      5.5% purchase conv.
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-success font-bold">
                      PKR 3,890,000
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      ROAS 6.8x
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-portal-tint text-portal-success text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-portal-success" />
                      {' '}Completed • 98.0%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <a className="inline-flex items-center gap-1 text-jk-label-sm text-portal-brand-deep hover:text-portal-brand" href="#">
                      Deep-Dive{' '}
                      <span className="material-symbols-outlined text-[14px]">
                        north_east
                      </span>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-portal-tint/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-portal-success-soft/15 flex items-center justify-center text-portal-success shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          shopping_cart_checkout
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-jk-label-md text-portal-ink truncate">
                          Automated Cart Recovery
                        </div>
                        <div className="text-[11px] text-portal-success">
                          Omnichannel Fallback • WA ➔ SMS
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      62,800 / 62,486
                    </div>
                    <div className="w-24 bg-portal-tint-3 h-1.5 rounded-full mt-1 overflow-hidden">
                      <div className="bg-portal-success h-full rounded-full" style={{ "width": "99.5%" }} />
                    </div>
                    <span className="text-[10px] text-portal-success">
                      99.5% delivered
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      91.4%
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      57,112 opened
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      26,500
                    </div>
                    <span className="text-[10px] text-portal-success font-bold">
                      42.4% CTR
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      3,980 recovered
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      15.0% checkout rate
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-success font-bold">
                      PKR 5,120,000
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      ROAS 14.5x
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-portal-tint text-portal-brand-deep text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-portal-brand-deep animate-pulse" />
                      {' '}Active • 99.5%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <a className="inline-flex items-center gap-1 text-jk-label-sm text-portal-brand-deep hover:text-portal-brand" href="#">
                      Deep-Dive{' '}
                      <span className="material-symbols-outlined text-[14px]">
                        north_east
                      </span>
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-portal-tint/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-portal-brand-deep/10 flex items-center justify-center text-portal-brand-deep shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          diamond
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-jk-label-md text-portal-ink truncate">
                          VIP Loyalty Early Access
                        </div>
                        <div className="text-[11px] text-portal-brand-deep">
                          WhatsApp Cloud API • Catalog Product Cards
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      35,400 / 35,223
                    </div>
                    <div className="w-24 bg-portal-tint-3 h-1.5 rounded-full mt-1 overflow-hidden">
                      <div className="bg-portal-success h-full rounded-full" style={{ "width": "99.5%" }} />
                    </div>
                    <span className="text-[10px] text-portal-success">
                      99.5% delivered
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      88.9%
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      31,313 read
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      17,210
                    </div>
                    <span className="text-[10px] text-portal-success font-bold">
                      48.6% CTR
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-ink">
                      2,310 orders
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      13.4% high-ticket
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <div className="text-jk-label-md text-portal-success font-bold">
                      PKR 2,970,000
                    </div>
                    <span className="text-[10px] text-portal-ink-soft">
                      ROAS 11.2x
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-portal-tint text-portal-success text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-portal-success" />
                      {' '}Completed • 99.5%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <a className="inline-flex items-center gap-1 text-jk-label-sm text-portal-brand-deep hover:text-portal-brand" href="#">
                      Deep-Dive{' '}
                      <span className="material-symbols-outlined text-[14px]">
                        north_east
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-portal-tint">
            <span className="text-jk-body-sm text-portal-ink-soft">
              Showing{' '}
              <strong>
                1-4
              </strong>
              {' '}of 28 Active &amp; Completed Campaigns
            </span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-portal-tint text-portal-ink-muted cursor-not-allowed text-jk-label-sm" disabled type="button">
                Previous
              </button>
              <button className="w-8 h-8 rounded-lg bg-portal-brand-deep text-white text-jk-label-sm flex items-center justify-center shadow-sm" type="button">
                1
              </button>
              <button className="w-8 h-8 rounded-lg bg-portal-tint text-portal-ink text-jk-label-sm flex items-center justify-center hover:bg-portal-tint-2 transition-colors" type="button">
                2
              </button>
              <button className="w-8 h-8 rounded-lg bg-portal-tint text-portal-ink text-jk-label-sm flex items-center justify-center hover:bg-portal-tint-2 transition-colors" type="button">
                3
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-portal-tint text-portal-ink hover:bg-portal-tint-2 text-jk-label-sm transition-colors" type="button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
