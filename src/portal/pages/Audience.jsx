import { PageHero } from "../ui/index.js";

export default function Audience() {
  return (
    <>
      <PageHero>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-white text-[11px] font-semibold backdrop-blur-sm mb-2.5 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>
                Audience Intelligence &amp; Reach
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>
                Audience &amp; Contacts
              </span>
              
            </h1>
            <p className="text-teal-50 text-xs sm:text-sm mt-1 max-w-xl font-normal leading-relaxed">
              Manage verified customer profiles, behavioral segments, and multi-channel opt-ins across Pakistan.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-4 py-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[20px]">
                  verified
                </span>
              </div>
              <div>
                <div className="text-[10px] text-teal-100 font-semibold uppercase tracking-wider">
                  Verified Consent
                </div>
                <div className="text-base font-extrabold text-white leading-tight">
                  83.1%{' '}
                  <span className="text-[11px] font-medium text-emerald-200">
                    (1.18M)
                  </span>
                </div>
              </div>
            </div>
            <button className="border border-white/30 hover:bg-white/10 text-white text-xs font-semibold px-4 py-2.5 rounded-xl backdrop-blur-sm transition flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                cloud_upload
              </span>
              <span>
                Import CSV
              </span>
            </button>
            <button className="text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition flex items-center gap-1.5" style={{ "background": "linear-gradient(135deg, #fd6a49 0%, #ae3115 100%)" }}>
              <span className="material-symbols-outlined text-[18px] font-bold">
                person_add
              </span>
              <span>
                + Add Contact
              </span>
            </button>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-1/2 -top-12 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl pointer-events-none" />
      </PageHero>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 mt-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200/60 text-portal-brand-deep flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px]">
              group
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
              Total Contacts
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
              1,420,850
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 mt-0.5">
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>
              <span>
                +8.1% vs last mo
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 text-portal-success flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
              chat
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
              WhatsApp Opt-in
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
              1,180,400
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 mt-0.5">
              <span className="material-symbols-outlined text-xs">
                verified
              </span>
              <span>
                83.1% consent rate
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-blue-200/60 text-sky-700 flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px]">
              sms
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
              SMS Reachable
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
              940,210
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 mt-0.5">
              <span className="material-symbols-outlined text-xs">
                done_all
              </span>
              <span>
                66.2% verified
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3.5 hover:shadow-md transition">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[24px]" style={{ "fontVariationSettings": "'FILL' 1" }}>
              stars
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">
              VIP &amp; High Value
            </div>
            <div className="text-xl font-extrabold text-slate-900 mt-0.5 tracking-tight">
              54,200
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-portal-danger mt-0.5">
              <span className="material-symbols-outlined text-xs" style={{ "fontVariationSettings": "'FILL' 1" }}>
                star
              </span>
              <span>
                &gt; PKR 15k AOV
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm space-y-3 p-3.5 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          <div className="lg:col-span-5 relative">
            <span className="material-symbols-outlined text-slate-400 absolute left-3 top-2.5 text-lg">
              search
            </span>
            <input className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-slate-800 rounded-lg text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-portal-brand-deep/20 focus:border-portal-brand-deep transition" id="audience-search-input" placeholder="Search by name, phone (+92...), or tag..." type="text" />
          </div>
          <div className="lg:col-span-2 relative">
            <select className="w-full py-2 px-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs appearance-none cursor-pointer focus:outline-none focus:border-portal-brand-deep">
              <option>
                All Channels
              </option>
              <option>
                WhatsApp (Meta)
              </option>
              <option>
                SMS (PTA)
              </option>
              <option>
                Email Double Opt-in
              </option>
            </select>
            <span className="material-symbols-outlined text-slate-400 absolute right-2.5 top-2.5 pointer-events-none text-base">
              expand_more
            </span>
          </div>
          <div className="lg:col-span-2 relative">
            <select className="w-full py-2 px-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs appearance-none cursor-pointer focus:outline-none focus:border-portal-brand-deep">
              <option>
                All Cities (Pakistan)
              </option>
              <option>
                Karachi, Sindh
              </option>
              <option>
                Lahore, Punjab
              </option>
              <option>
                Islamabad, ICT
              </option>
              <option>
                Faisalabad, Punjab
              </option>
              <option>
                Rawalpindi, Punjab
              </option>
              <option>
                Peshawar, KP
              </option>
            </select>
            <span className="material-symbols-outlined text-slate-400 absolute right-2.5 top-2.5 pointer-events-none text-base">
              expand_more
            </span>
          </div>
          <div className="lg:col-span-2 relative">
            <select className="w-full py-2 px-3 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs appearance-none cursor-pointer focus:outline-none focus:border-portal-brand-deep">
              <option>
                All Tags
              </option>
              <option>
                VIP Gold
              </option>
              <option>
                Repeat Buyer
              </option>
              <option>
                Eid Shopper
              </option>
              <option>
                Cart Abandoner
              </option>
              <option>
                Wholesale
              </option>
            </select>
            <span className="material-symbols-outlined text-slate-400 absolute right-2.5 top-2.5 pointer-events-none text-base">
              expand_more
            </span>
          </div>
          <div className="lg:col-span-1 flex items-center justify-end gap-1.5">
            <button className="p-2 text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition" title="Export CSV">
              <span className="material-symbols-outlined text-[18px]">
                file_download
              </span>
            </button>
            <button className="p-2 text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition" title="Manage Segments">
              <span className="material-symbols-outlined text-[18px]">
                tune
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
            <button className="bg-portal-brand-deep text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-sm">
              <span>
                All
              </span>
              {' '}
              <span className="bg-white/20 text-white text-[10px] px-1.5 rounded-full font-bold">
                1.42M
              </span>
            </button>
            <button className="bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-medium px-3 py-1 rounded-lg flex items-center gap-1.5 transition">
              <span>
                VIP Customers
              </span>
              {' '}
              <span className="text-amber-600 font-bold text-[10px]">
                ⭐ 54.2k
              </span>
            </button>
            <button className="bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-medium px-3 py-1 rounded-lg transition">
              Active Shoppers
            </button>
            <button className="bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-medium px-3 py-1 rounded-lg transition">
              Cart Abandoners
            </button>
            <button className="bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-medium px-3 py-1 rounded-lg transition">
              Inactive (90d+)
            </button>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {' '}
            <span>
              Live Sync Active
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200/80 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                <th className="py-3 px-4 w-10">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </th>
                <th className="py-3 px-4">
                  Contact
                </th>
                <th className="py-3 px-4">
                  Phone Number
                </th>
                <th className="py-3 px-4">
                  City / Region
                </th>
                <th className="py-3 px-4">
                  Segment Tags
                </th>
                <th className="py-3 px-4">
                  Consent Status
                </th>
                <th className="py-3 px-4 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-portal-brand-deep/10 text-portal-brand-deep font-bold flex items-center justify-center text-xs flex-shrink-0">
                      AR
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 flex items-center gap-1">
                        <span>
                          Ahmed Raza
                        </span>
                        {' '}
                        <span className="material-symbols-outlined text-xs text-amber-500" style={{ "fontVariationSettings": "'FILL' 1" }}>
                          star
                        </span>
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        ahmed.raza@nexmeg.pk
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 300 8472910
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-emerald-600" title="Verified">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Jazz PK
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Karachi
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Sindh
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-amber-50 text-amber-800 border border-amber-200/60 font-semibold px-2 py-0.5 rounded-full text-[10px]">
                      VIP Gold
                    </span>
                    {' '}
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/60 px-2 py-0.5 rounded-full text-[10px]">
                      Eid Shopper
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp Active
                    </span>
                    {' '}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                      SMS
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      FZ
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Fatima Zahra
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        fatima.zahra@khi.edu.pk
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 321 4458920
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-emerald-600" title="Verified">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Zong 4G
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Lahore
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Punjab
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-teal-50 text-teal-800 border border-teal-200/60 font-medium px-2 py-0.5 rounded-full text-[10px]">
                      Repeat Buyer
                    </span>
                    {' '}
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-[10px]">
                      App User
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp Active
                    </span>
                    {' '}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                      SMS
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      TM
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Tariq Mehmood
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        tariq.m@consultant.pk
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 333 5129841
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-emerald-600" title="Verified">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Ufone PK
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Islamabad
                  </div>
                  <span className="text-[10px] text-slate-400">
                    ICT
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-rose-50 text-rose-800 border border-rose-200/60 font-medium px-2 py-0.5 rounded-full text-[10px]">
                      Cart Abandoner
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp Active
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-portal-brand-deep/10 text-portal-brand-deep font-bold flex items-center justify-center text-xs flex-shrink-0">
                      BK
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 flex items-center gap-1">
                        <span>
                          Bilal Khan
                        </span>
                        {' '}
                        <span className="material-symbols-outlined text-xs text-amber-500" style={{ "fontVariationSettings": "'FILL' 1" }}>
                          star
                        </span>
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        bilal.k@pesh.biz
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 345 9012384
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-emerald-600" title="Verified">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Telenor PK
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Peshawar
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Khyber Pakhtunkhwa
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-amber-50 text-amber-800 border border-amber-200/60 font-semibold px-2 py-0.5 rounded-full text-[10px]">
                      VIP Gold
                    </span>
                    {' '}
                    <span className="bg-teal-50 text-teal-800 border border-teal-200/60 font-medium px-2 py-0.5 rounded-full text-[10px]">
                      Wholesale
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp Active
                    </span>
                    {' '}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                      SMS
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      AM
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Ayesha Malik
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        ayesha.m@crafts.com
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 301 7762190
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-emerald-600" title="Verified">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Jazz GSM
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Faisalabad
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Punjab
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-blue-50 text-blue-800 border border-blue-200/60 font-medium px-2 py-0.5 rounded-full text-[10px]">
                      New Signup
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp Active
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      UG
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Usman Ghani
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        usman.g@textiles.pk
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 312 6543210
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-emerald-600" title="Verified">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Zong 4G
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Rawalpindi
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Punjab
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-medium px-2 py-0.5 rounded-full text-[10px]">
                      Eid Shopper
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {' '}WhatsApp Active
                    </span>
                    {' '}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                      SMS
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition">
                <td className="py-3.5 px-4">
                  <input className="rounded text-portal-brand-deep focus:ring-portal-brand-deep w-4 h-4 cursor-pointer border-slate-300" type="checkbox" />
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                      SJ
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Sana Javed
                      </div>
                      <span className="text-slate-400 text-[11px]">
                        sana.j@design.pk
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-medium text-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span>
                      +92 334 8871234
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[15px] text-slate-400">
                      verified
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-sans">
                    Ufone PK
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-slate-800">
                    Karachi
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Sindh
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-[10px]">
                      Organic
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {' '}Pending Opt-in
                    </span>
                    {' '}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                      SMS
                    </span>
                  </div>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 text-portal-brand-deep hover:bg-teal-50 rounded-lg transition" title="Direct WhatsApp">
                      <span className="material-symbols-outlined text-[18px]">
                        chat
                      </span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition" title="More Options">
                      <span className="material-symbols-outlined text-[18px]">
                        more_vert
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span>
              Rows per page:
            </span>
            <select className="bg-white border border-slate-200 text-slate-700 rounded-lg px-2 py-1 text-xs focus:outline-none">
              <option>
                10
              </option>
              <option>
                25
              </option>
              <option>
                50
              </option>
            </select>
            <span className="text-slate-400 ml-1">
              Showing 1 – 10 of 1,420,850
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-700 disabled:opacity-40" disabled>
              <span className="material-symbols-outlined text-[16px]">
                chevron_left
              </span>
            </button>
            <button className="w-7 h-7 rounded-lg bg-portal-brand-deep text-white font-bold flex items-center justify-center text-xs shadow-sm">
              1
            </button>
            <button className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center text-xs">
              2
            </button>
            <button className="w-7 h-7 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center text-xs">
              3
            </button>
            <span className="px-1 text-slate-400">
              ...
            </span>
            <button className="px-2 h-7 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center text-xs">
              142k
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
