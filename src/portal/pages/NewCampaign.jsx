import { WizardBar } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";

const ACTIONS = [
  [["back to step 2"], "/portal/campaigns/audience"],
  [["schedule & dispatch"], "/portal/campaigns/review"],
  [["back to"], "/portal/campaigns"],
  [["change step", "continue", "next step", "review"], "/portal/campaigns/review"],
];

export default function NewCampaign() {
  const onAction = useActionLinks(ACTIONS);
  return (
    <div className="contents" onClick={onAction}>
      <WizardBar step={3} title="Message & Template" description="WhatsApp Business API · Target: 54,200 VIP Customers" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  1. Select Meta-Approved Template
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Choose an approved HSM template from your registered Meta Business Account
                </p>
              </div>
              <div className="flex p-1 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600">
                <button className="px-3 py-1 bg-white text-teal-700 shadow-sm rounded-lg">
                  All Templates (18)
                </button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-800">
                  Promotional (12)
                </button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-800">
                  Transactional (6)
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div className="relative rounded-xl border-2 border-teal-500 bg-teal-50/20 p-4 flex flex-col justify-between cursor-pointer shadow-sm ring-1 ring-teal-500">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fillRule="evenodd" />
                    </svg>
                    {' '}Meta Approved
                  </span>
                  <input defaultChecked className="text-teal-600 focus:ring-teal-500 h-4 w-4" name="template_select" type="radio" />
                </div>
                <div className="my-3">
                  <h3 className="text-xs font-bold text-slate-900">
                    eid_mega_sale_v2
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Urdu + English festive promotion with header media and 2 CTA quick replies.
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 mt-auto">
                  <span>
                    Category: MARKETING
                  </span>
                  {' '}
                  <span className="font-semibold text-slate-600">
                    Urdu / Eng
                  </span>
                </div>
              </div>
              <div className="relative rounded-xl border border-slate-200 bg-white hover:border-slate-300 p-4 flex flex-col justify-between cursor-pointer transition">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Approved
                  </span>
                  <input className="text-teal-600 focus:ring-teal-500 h-4 w-4" name="template_select" type="radio" />
                </div>
                <div className="my-3">
                  <h3 className="text-xs font-bold text-slate-900">
                    cart_recovery_urdu
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Gentle abandoned cart recovery notification with discount trigger.
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 mt-auto">
                  <span>
                    Category: UTILITY
                  </span>
                  {' '}
                  <span className="font-semibold text-slate-600">
                    Urdu
                  </span>
                </div>
              </div>
              <div className="relative rounded-xl border border-slate-200 bg-white hover:border-slate-300 p-4 flex flex-col justify-between cursor-pointer transition">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Approved
                  </span>
                  <input className="text-teal-600 focus:ring-teal-500 h-4 w-4" name="template_select" type="radio" />
                </div>
                <div className="my-3">
                  <h3 className="text-xs font-bold text-slate-900">
                    flash_weekend_deal
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                    Urgent 48-hour countdown flash sale campaign with tracking parameters.
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-100 pt-2 mt-auto">
                  <span>
                    Category: MARKETING
                  </span>
                  {' '}
                  <span className="font-semibold text-slate-600">
                    English
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  2. Header Media
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Template requires rich media header attachment (1.91:1 ratio recommended)
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                <button className="px-3 py-1 bg-teal-600 text-white rounded-lg shadow-sm">
                  Image (Selected)
                </button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-800">
                  Video
                </button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-800">
                  Document
                </button>
                <button className="px-3 py-1 text-slate-500 hover:text-slate-800">
                  None
                </button>
              </div>
            </div>
            <div className="border border-teal-200 rounded-xl bg-teal-50/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="w-20 h-14 bg-gradient-to-r from-teal-700 via-emerald-800 to-slate-900 rounded-lg flex items-center justify-center text-amber-300 font-bold text-xs flex-shrink-0 shadow-inner border border-teal-600/40">
                  🌙 EID VIP
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">
                    eid_sale_hero_banner.jpg
                  </span>
                  {' '}
                  <span className="text-[11px] text-slate-500">
                    1200 x 628 px • 248 KB • JPEG image format
                  </span>
                  {' '}
                  <span className="text-[10px] text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {' '}Validated for WhatsApp API
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button className="px-3 py-1.5 border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold rounded-lg transition">
                  View
                </button>
                <button className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg shadow-sm transition">
                  Replace Image
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              3. Dynamic Variable Mapping
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Map personalization placeholders from your VIP Audience dataset
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed font-mono mb-5">
              Assalam-o-Alaikum{' '}
              <span className="bg-teal-100 text-teal-800 font-semibold px-2 py-0.5 rounded font-sans">
                {'{'}{'{'}1{'}'}{'}'}
              </span>
              ! 🌙 Eid Mubarak! Aap ke liye special{' '}
              <span className="bg-teal-100 text-teal-800 font-semibold px-2 py-0.5 rounded font-sans">
                {'{'}{'{'}2{'}'}{'}'}
              </span>
              {' '}VIP discount unlock ho chuka hai. Use code:{' '}
              <span className="bg-teal-100 text-teal-800 font-semibold px-2 py-0.5 rounded font-sans">
                {'{'}{'{'}3{'}'}{'}'}
              </span>
              {' '}at checkout.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-5 h-5 bg-teal-600 text-white rounded text-[10px] flex items-center justify-center font-mono">
                      1
                    </span>
                    {' '}Customer Name
                  </label>
                  {' '}
                  <span className="text-[10px] text-teal-600 font-medium">
                    Text Field
                  </span>
                </div>
                <input className="text-xs border-slate-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="Fallback: VIP Customer" type="text" defaultValue="Customer Name" />
                <span className="text-[10px] text-slate-400">
                  Sample: Ahmed Raza
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-5 h-5 bg-teal-600 text-white rounded text-[10px] flex items-center justify-center font-mono">
                      2
                    </span>
                    {' '}Discount Offer
                  </label>
                  {' '}
                  <span className="text-[10px] text-teal-600 font-medium">
                    Static / Dynamic
                  </span>
                </div>
                <input className="text-xs border-slate-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="Discount value" type="text" defaultValue="40% OFF" />
                <span className="text-[10px] text-slate-400">
                  Sample: 40% OFF
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-5 h-5 bg-teal-600 text-white rounded text-[10px] flex items-center justify-center font-mono">
                      3
                    </span>
                    {' '}Promo Code
                  </label>
                  {' '}
                  <span className="text-[10px] text-teal-600 font-medium">
                    Coupon Code
                  </span>
                </div>
                <input className="text-xs border-slate-200 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white" placeholder="Coupon Code" type="text" defaultValue="EIDVIP40" />
                <span className="text-[10px] text-slate-400">
                  Sample: EIDVIP40
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 mb-1">
              4. WhatsApp Interactive Buttons &amp; CTA
            </h2>
            <p className="text-xs text-slate-500 mb-4">
              Configured action buttons registered in template meta structure
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/60 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    {' '}Quick Reply 1 (Call To Action URL)
                  </span>
                  {' '}
                  <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-semibold">
                    Web URL
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Button Label
                  </span>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">
                    Shop VIP Collection
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Destination URL
                  </span>
                  <div className="text-xs text-teal-700 font-mono mt-0.5 bg-white border border-slate-200 px-2 py-1 rounded">
                    https://store.nexmeg.com/eid
                  </div>
                </div>
              </div>
              <div className="border border-slate-200 rounded-xl p-3.5 bg-slate-50/60 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    {' '}Quick Reply 2 (Quick Response)
                  </span>
                  {' '}
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-semibold">
                    Chat Trigger
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Button Label
                  </span>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">
                    Talk to Stylist
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">
                    Agent Routing
                  </span>
                  <div className="text-xs text-slate-700 font-sans mt-0.5 bg-white border border-slate-200 px-2 py-1 rounded">
                    Routes directly to VIP Support Desk
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-500">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                {' '}Mandatory Opt-Out Footer:{' '}
                <strong className="text-slate-700 font-medium">
                  "Reply STOP to unsubscribe"
                </strong>
              </span>
              {' '}
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Compliant
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex flex-wrap items-center justify-between gap-4 mt-2 mb-8">
            <button className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span>
                Back to Step 2: Audience
              </span>
            </button>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-xs rounded-xl transition">
                Save as Draft
              </button>
              <button className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md shadow-teal-600/30 transition flex items-center gap-2">
                <span>
                  Next: Schedule &amp; Dispatch (Step 4)
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 xl:col-span-4 sticky top-20 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {' '}
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Real-Time Phone Preview
              </span>
            </div>
            <span className="text-[10px] bg-slate-200/80 text-slate-700 font-semibold px-2 py-0.5 rounded-full">
              WhatsApp Business
            </span>
          </div>
          <div className="relative mx-auto w-full max-w-[340px] bg-slate-900 p-3 rounded-[40px] shadow-2xl ring-1 ring-slate-800">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-slate-800 rounded-full mr-2" />
              <div className="w-2 h-2 bg-slate-700 rounded-full" />
            </div>
            <div className="bg-portal-chat rounded-[32px] overflow-hidden flex flex-col h-[580px] relative border border-slate-800">
              <div className="bg-[#075e54] text-white pt-5 pb-2 px-4 flex items-center justify-between text-[11px] font-medium z-10">
                <span>
                  07:40
                </span>
                <div className="flex items-center gap-1.5 text-xs">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 21l3.47-.62C9.28 20.73 10.6 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
                  </svg>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                  <span className="text-[10px]">
                    98%
                  </span>
                </div>
              </div>
              <div className="bg-[#075e54] text-white px-3 py-2.5 flex items-center justify-between shadow-md z-10">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white/80 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                  </svg>
                  <div className="w-8 h-8 rounded-full bg-teal-800 border border-teal-400 flex items-center justify-center font-bold text-xs text-white">
                    n
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold leading-none">
                        nExMeg Store
                      </span>
                      <svg className="w-3.5 h-3.5 text-teal-300" fill="currentColor" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[9px] text-teal-100 font-normal">
                      Official Business Account
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" />
                  </svg>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 p-3 overflow-y-auto custom-scrollbar flex flex-col gap-3">
                <div className="flex justify-center">
                  <span className="bg-white/80 backdrop-blur-sm text-[10px] font-semibold text-slate-600 px-3 py-0.5 rounded-full shadow-sm">
                    Today
                  </span>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none p-2.5 shadow-sm max-w-[92%] self-start border border-slate-200/60">
                  <div className="rounded-xl overflow-hidden bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 aspect-[16/9] relative flex flex-col justify-end p-3 text-white mb-2 shadow-inner">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded">
                        Eid Mubarak 🌙
                      </span>
                      <h4 className="text-sm font-extrabold text-white mt-0.5">
                        VIP EID COLLECTION
                      </h4>
                      <p className="text-[10px] text-teal-200 font-semibold">
                        Flat 40% OFF Reserved For You
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-800 leading-relaxed font-normal">
                    Assalam-o-Alaikum{' '}
                    <strong className="text-teal-900 font-bold">
                      Ahmed
                    </strong>
                    ! 🌙 Eid Mubarak! Aap ke liye special{' '}
                    <strong className="text-teal-900 font-bold">
                      40% OFF
                    </strong>
                    {' '}VIP discount unlock ho chuka hai. Use code:{' '}
                    <strong className="bg-amber-100 text-amber-900 px-1 py-0.5 rounded font-mono font-bold text-[11px]">
                      EIDVIP40
                    </strong>
                    {' '}at checkout.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 italic">
                    Reply STOP to unsubscribe
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-slate-400">
                    <span>
                      07:40 PM
                    </span>
                    <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7m-14 4l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 max-w-[92%] self-start w-full">
                  <button className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 text-teal-700 font-semibold text-xs py-2 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition">
                    <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span>
                      🛍️ Shop VIP Collection
                    </span>
                  </button>
                  <button className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 text-teal-700 font-semibold text-xs py-2 px-3 rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition">
                    <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span>
                      💬 Talk to Stylist
                    </span>
                  </button>
                </div>
              </div>
              <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 border-t border-slate-200">
                <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs">
                  😊
                </div>
                <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-slate-400">
                  Type a message...
                </div>
                <div className="w-7 h-7 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                Campaign Estimate
              </span>
              {' '}
              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                Sufficient Funds
              </span>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>
                  Target Recipients
                </span>
                {' '}
                <span className="font-bold text-slate-800">
                  54,200 VIPs
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>
                  Estimated Cost
                </span>
                {' '}
                <span className="font-bold text-teal-700 text-sm">
                  PKR 67,750
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-500 text-[11px] border-t border-slate-100 pt-2">
                <span>
                  Current Wallet Balance
                </span>
                {' '}
                <span className="font-semibold text-slate-700">
                  PKR 84,200
                </span>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-2 flex items-center gap-2 text-[10px] text-emerald-800">
              <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
              </svg>
              <span>
                Balance covers full batch dispatch with zero latency.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
