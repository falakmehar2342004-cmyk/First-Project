import { PageHero } from "../ui/index.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-col w-full max-w-7xl mx-auto space-y-6">
        <PageHero>
          <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-white flex items-center gap-1.5 border border-white/10">
                  <span className="material-symbols-outlined text-sm">
                    domain
                  </span>
                  {' '}Workspace: nExMeg Solutions Pvt Ltd (Production)
                </span>
                {' '}
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-medium text-emerald-200 flex items-center gap-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {' '}API Health: 99.98% Operational
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                Account &amp; Workspace Settings ⚙️
              </h1>
              <p className="text-sm md:text-base text-teal-50/90 leading-relaxed font-normal">
                Configure corporate entity details, team roles, API webhooks, telecom gateway routing, and PTA compliance safeguards.
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <button className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                {' '}Export Audit Log
              </button>
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-portal-accent to-[#f97316] hover:from-[#f05a38] hover:to-[#ea580c] text-white font-semibold text-sm shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  save
                </span>
                {' '}Save All Configurations
              </button>
            </div>
          </div>
        </PageHero>
        <nav aria-label="Settings Sections" className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm shadow-sm shrink-0 transition-all">
            <span className="material-symbols-outlined text-lg">
              business
            </span>
            {' '}General &amp; Organization
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-600 hover:text-teal-700 border border-slate-200/80 font-medium text-sm shadow-xs shrink-0 transition-all">
            <span className="material-symbols-outlined text-lg text-slate-400">
              group
            </span>
            {' '}Team &amp; Permissions{' '}
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
              4
            </span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-600 hover:text-teal-700 border border-slate-200/80 font-medium text-sm shadow-xs shrink-0 transition-all">
            <span className="material-symbols-outlined text-lg text-slate-400">
              terminal
            </span>
            {' '}API &amp; Webhooks{' '}
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-600 hover:text-teal-700 border border-slate-200/80 font-medium text-sm shadow-xs shrink-0 transition-all">
            <span className="material-symbols-outlined text-lg text-slate-400">
              router
            </span>
            {' '}Telecom &amp; Sender Routing
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-teal-50/50 text-slate-600 hover:text-teal-700 border border-slate-200/80 font-medium text-sm shadow-xs shrink-0 transition-all">
            <span className="material-symbols-outlined text-lg text-slate-400">
              shield
            </span>
            {' '}Security &amp; Audit Logs
          </button>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      apartment
                    </span>
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      Organization Profile &amp; Legal Entity
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Verified corporate metadata for telco operator whitelisting and PTA registration.
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1 shrink-0">
                  <span className="material-symbols-outlined text-sm">
                    verified
                  </span>
                  {' '}Verified
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 rounded-xl bg-slate-50/80 border border-slate-100 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0">
                  n
                </div>
                <div className="space-y-1 flex-1">
                  <h4 className="text-sm font-semibold text-slate-800">
                    Brand Identity Logo
                  </h4>
                  <p className="text-xs text-slate-500">
                    Used across business portal headers, client invoices, and WhatsApp Business Profile sync.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors shadow-xs">
                    Change Brand Logo
                  </button>
                  <button className="p-2 rounded-xl text-slate-400 hover:text-red-600 transition-colors" title="Remove logo">
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                    Company Name (Legal Registered Entity){' '}
                    <span className="text-orange-500">
                      *
                    </span>
                  </label>
                  <input className="w-full bg-slate-50/50 hover:bg-white text-slate-800 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-xs" type="text" defaultValue="nExMeg Solutions Pvt Ltd" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>
                      National Tax Number (NTN)
                    </span>
                    {' '}
                    <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 text-[11px] font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">
                        check_circle
                      </span>
                      {' '}FBR Active
                    </span>
                  </label>
                  <div className="relative">
                    <input className="w-full bg-slate-50/50 hover:bg-white text-slate-800 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-xs pr-10" type="text" defaultValue="7392810-4" />
                    <span className="material-symbols-outlined text-teal-600 text-lg absolute right-3 top-1/2 -translate-y-1/2">
                      verified
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Industry Sector
                  </label>
                  <select className="w-full bg-slate-50/50 hover:bg-white text-slate-800 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-xs" defaultValue="Fintech & E-Commerce Omnichannel Services">
                    <option>
                      Fintech &amp; E-Commerce Omnichannel Services
                    </option>
                    <option>
                      Telecommunications &amp; Digital Infrastructure
                    </option>
                    <option>
                      Banking &amp; Financial Institutions
                    </option>
                    <option>
                      Healthcare &amp; Diagnostics Logistics
                    </option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Official Billing &amp; Invoicing Email
                  </label>
                  <input className="w-full bg-slate-50/50 hover:bg-white text-slate-800 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-xs" type="email" defaultValue="billing-support@nexmeg.com" />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Registered Corporate Address
                  </label>
                  <input className="w-full bg-slate-50/50 hover:bg-white text-slate-800 text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-xs" type="text" defaultValue="Office 402, Executive Heights, Gulberg III, Lahore, Punjab 54000, Pakistan" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Operational Timezone
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm shadow-xs">
                    <span className="material-symbols-outlined text-slate-400 text-lg">
                      schedule
                    </span>
                    {' '}
                    <span>
                      Asia/Karachi (PKT +05:00)
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Default Billing Currency
                  </label>
                  <div className="flex items-center justify-between bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 text-lg">
                        payments
                      </span>
                      {' '}
                      <span>
                        PKR (Pakistani Rupee)
                      </span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 font-semibold">
                      Primary
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      alt_route
                    </span>
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      Multi-Channel Messaging Defaults &amp; Routing
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Control failover cascades, sender masks, and automated compliance throttles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-800">
                        Default Sender Mask
                      </span>
                      {' '}
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                        PTA Approved
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Used for transactional notifications and OTP authentication broadcasts.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <select className="bg-white text-slate-800 font-medium text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-xs w-full sm:w-auto" defaultValue="NEXMEG-PAY (Priority Gateway)">
                      <option>
                        NEXMEG-PAY (Priority Gateway)
                      </option>
                      <option>
                        NEXMEG-ALERT (Transactional OTP)
                      </option>
                      <option>
                        8120 (Telco Direct Code)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-teal-600 text-lg">
                        swap_calls
                      </span>
                      <h3 className="text-sm font-bold text-slate-800">
                        Smart Failover Automation
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                      If WhatsApp delivery remains unconfirmed after{' '}
                      <strong className="text-slate-900 font-semibold">
                        180 seconds
                      </strong>
                      , automatically re-route via OTP SMS gateway with priority interconnect on Jazz/Telenor direct pipelines.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600 shadow-inner" />
                  </label>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-orange-500 text-lg">
                        bedtime
                      </span>
                      <h3 className="text-sm font-bold text-slate-800">
                        PTA Promotional Window Curfew Safeguard
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                      Automatically pause marketing broadcasts between{' '}
                      <strong className="text-slate-900 font-semibold">
                        9:00 PM and 9:00 AM PKT
                      </strong>
                      {' '}in compliance with PTA anti-spam regulations. Critical OTPs remain exempted.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                    <input defaultChecked className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600 shadow-inner" />
                  </label>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-slate-800">
                      Message Anti-Flood Deduplication
                    </span>
                    <p className="text-xs text-slate-500">
                      Suppresses unintentional duplicate sends to the same MSISDN within a rolling window.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 text-xs font-semibold shadow-xs">
                      15-Minute Suppression Window
                    </span>
                    <button className="p-2 text-slate-400 hover:text-teal-600 transition-colors">
                      <span className="material-symbols-outlined text-lg">
                        edit
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      webhook
                    </span>
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900">
                      Webhook Endpoints &amp; Live Integrations
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Real-time telemetry event sinks for delivery receipts, DLRs, and incoming WhatsApp replies.
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs">
                  <span className="material-symbols-outlined text-base">
                    add
                  </span>
                  {' '}Add Endpoint
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-xs font-bold font-mono">
                        POST
                      </span>
                      {' '}
                      <span className="text-sm font-semibold text-slate-800">
                        Production Telco Delivery Status Callback (DLR)
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      {' '}200 OK (34ms)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 overflow-hidden shadow-xs">
                    <span className="truncate flex-1">
                      https://your-domain.com/webhooks/delivery-status
                    </span>
                    <button className="p-1 text-slate-400 hover:text-teal-600 transition-colors shrink-0" title="Copy endpoint">
                      <span className="material-symbols-outlined text-base">
                        content_copy
                      </span>
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shrink-0">
                      Test Ping
                    </button>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                        POST
                      </span>
                      {' '}
                      <span className="text-sm font-semibold text-slate-800">
                        Inbound WhatsApp MO-Service Hook (User Replies)
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      {' '}Active
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs text-slate-700 overflow-hidden shadow-xs">
                    <span className="truncate flex-1">
                      https://your-domain.com/webhooks/incoming-messages
                    </span>
                    <button className="p-1 text-slate-400 hover:text-teal-600 transition-colors shrink-0" title="Copy endpoint">
                      <span className="material-symbols-outlined text-base">
                        content_copy
                      </span>
                    </button>
                    <button className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shrink-0">
                      Test Ping
                    </button>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-slate-800">
                      Webhook Signing Secret
                    </span>
                    <p className="text-xs text-slate-500">
                      Used to verify HMAC-SHA256 signature headers on outbound payloads.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="font-mono text-xs text-slate-800 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
                      whsec_993a4f••••••••••••••48f1
                    </span>
                    <button className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors shadow-xs">
                      Rotate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-600 text-xl">
                    speed
                  </span>
                  {' '}
                  <span className="text-base font-bold text-slate-900">
                    Plan &amp; Quotas
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold">
                  Business Pro
                </span>
              </div>
              <div className="space-y-2 mb-5">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-slate-500 font-medium">
                    Monthly Messages
                  </span>
                  {' '}
                  <span className="text-slate-900 font-bold">
                    340,000{' '}
                    <span className="text-slate-400 font-normal">
                      / 500k
                    </span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/50">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2.5 rounded-full transition-all duration-700 shadow-sm" style={{ "width": "68%" }} />
                </div>
                <p className="text-xs text-slate-500 flex items-center justify-between">
                  <span>
                    68% allocated for Nov 2024
                  </span>
                  {' '}
                  <span className="text-teal-700 font-bold">
                    160k remaining
                  </span>
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 mb-5 space-y-2">
                <div className="flex items-center justify-between text-slate-800">
                  <span className="text-xs font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-teal-600">
                      badge
                    </span>
                    {' '}Registered PTA Masks
                  </span>
                  {' '}
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                    2 Active
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs shadow-xs flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {' '}NEXMEG-PAY
                  </span>
                  {' '}
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-xs shadow-xs flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {' '}NEXMEG-ALERT
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0">
                  ZM
                </div>
                <div className="space-y-0.5 flex-1 min-w-0">
                  <span className="text-xs font-bold text-slate-900 block truncate">
                    Zainab Malik
                  </span>
                  {' '}
                  <span className="text-[11px] text-slate-500 block truncate">
                    Senior Telco Solutions Lead
                  </span>
                </div>
                <button className="p-2 rounded-xl text-teal-600 hover:bg-teal-50 transition-colors" title="Contact account manager">
                  <span className="material-symbols-outlined text-xl">
                    chat
                  </span>
                </button>
              </div>
            </section>
            <section className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">
                    shield_lock
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Security &amp; Auth
                  </h3>
                  <p className="text-xs text-slate-500">
                    Team access and credential controls
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-600 text-lg">
                      check_circle
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-slate-800">
                      Two-Factor Auth (2FA)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                    Enforced
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-lg">
                      vpn_key
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-slate-800">
                      Google Workspace SAML
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Connected
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400 text-lg">
                      timer
                    </span>
                    {' '}
                    <span className="text-xs font-semibold text-slate-800">
                      Session Idle Timeout
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    30 Days
                  </span>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-teal-50 hover:text-teal-700 text-slate-700 border border-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs">
                <span>
                  Manage Security Settings
                </span>
                {' '}
                <span className="material-symbols-outlined text-base">
                  arrow_forward
                </span>
              </button>
            </section>
            <section className="bg-white rounded-2xl p-6 border border-red-200/80 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-2.5 mb-4 text-red-600">
                <span className="material-symbols-outlined text-xl">
                  warning
                </span>
                <h3 className="text-base font-bold">
                  Danger Zone
                </h3>
              </div>
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-900">
                      Emergency Outbound Stop
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-red-600 text-lg">
                      power_settings_new
                    </span>
                  </div>
                  <p className="text-xs text-red-700/90 leading-relaxed">
                    Instantly terminates all active broadcast queues, WhatsApp blasts, and SMS campaigns in flight.
                  </p>
                  <button className="w-full py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-sm">
                    Activate Kill Switch
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100 text-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold block">
                      Transfer Ownership
                    </span>
                    {' '}
                    <span className="text-[11px] text-slate-500 block">
                      Assign workspace root rights
                    </span>
                  </div>
                  <button className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold transition-colors shadow-xs">
                    Transfer
                  </button>
                </div>
                <div className="flex items-center justify-between py-2 text-slate-800">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-red-600 block">
                      Archive Workspace
                    </span>
                    {' '}
                    <span className="text-[11px] text-slate-500 block">
                      Deactivates all telco pipelines
                    </span>
                  </div>
                  <button className="px-3 py-1.5 rounded-xl text-red-600 hover:bg-red-50 border border-red-200 text-xs font-semibold transition-colors">
                    Deactivate
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
