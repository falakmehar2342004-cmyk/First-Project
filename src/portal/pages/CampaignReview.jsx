import { WizardBar } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";

const ACTIONS = [
  [["back to step"], "/portal/campaigns/new"],
  [["confirm & launch", "save as draft"], "/portal/campaigns"],
];

export default function CampaignReview() {
  const onAction = useActionLinks(ACTIONS);
  return (
    <div className="contents" onClick={onAction}>
      <div className="flex flex-col w-full pb-28">
        <WizardBar step={4} title="Schedule & Review" description="WhatsApp Business API · 54,200 validated contacts · Ready to launch" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                    <span className="material-symbols-outlined text-[20px]">
                      schedule
                    </span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Dispatch Timing
                    </h2>
                    <p className="text-xs text-slate-500">
                      Choose when subscriber queue begins
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px] text-teal-600">
                    public
                  </span>
                  {' '}PKT (UTC+5)
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <label className="relative flex items-center justify-between p-3.5 rounded-xl border border-teal-600 bg-teal-50/40 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <input defaultChecked className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-slate-300" name="dispatch_schedule" type="radio" value="immediate" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">
                          Send Now
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          Instant Start
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Batches immediately upon confirmation (~45s warm-up)
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-teal-600 text-[20px]">
                    bolt
                  </span>
                </label>
                <label className="relative flex flex-col p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50 cursor-pointer transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-slate-300" name="dispatch_schedule" type="radio" value="scheduled" />
                      <div>
                        <span className="text-sm font-bold text-slate-800">
                          Schedule for Later
                        </span>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Set a specific launch window
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600">
                      Custom
                    </span>
                  </div>
                  <div className="mt-3 pl-7 grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-teal-600">
                        calendar_today
                      </span>
                      {' '}
                      <span className="text-xs font-semibold text-slate-800">
                        Nov 14, 2024
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-teal-600">
                        alarm
                      </span>
                      {' '}
                      <span className="text-xs font-semibold text-slate-800">
                        07:40 PM (Maghrib)
                      </span>
                    </div>
                  </div>
                </label>
                <label className="relative flex items-center justify-between p-3.5 rounded-xl border border-amber-200/90 bg-amber-50/40 hover:bg-amber-50/70 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <input className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-slate-300" name="dispatch_schedule" type="radio" value="ai_optimal" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">
                          Smart AI Send Time
                        </span>
                        {' '}
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-white flex items-center gap-1 shadow-sm">
                          <span className="material-symbols-outlined text-[10px]">
                            auto_awesome
                          </span>
                          {' '}AI Powered
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Dispatches in personalized cohorts when each customer is most active
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">
                    +28.4% Opens
                  </span>
                </label>
              </div>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                    <span className="material-symbols-outlined text-[20px]">
                      speed
                    </span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Delivery Pacing &amp; Throttling
                    </h2>
                    <p className="text-xs text-slate-500">
                      Safeguard Meta Cloud API rate limits
                    </p>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {' '}Tier 3 Sender
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white cursor-pointer transition-all">
                  <div className="text-xs text-slate-500 font-medium">
                    High Speed
                  </div>
                  <div className="text-base font-bold text-slate-800 mt-0.5">
                    500{' '}
                    <span className="text-xs font-normal text-slate-500">
                      msg/m
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1.5">
                    Est. ~1 hr 48m
                  </div>
                </div>
                <div className="p-3 rounded-xl border-2 border-teal-600 bg-teal-50/40 relative cursor-pointer shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-800">
                      Safe Steady
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-teal-700 text-[16px]">
                      verified
                    </span>
                  </div>
                  <div className="text-base font-bold text-teal-900 mt-0.5">
                    250{' '}
                    <span className="text-xs font-normal text-teal-700">
                      msg/m
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-teal-700 mt-1.5">
                    Recommended for Meta
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white cursor-pointer transition-all">
                  <div className="text-xs text-slate-500 font-medium">
                    Custom Throttle
                  </div>
                  <div className="text-base font-bold text-slate-800 mt-0.5">
                    Adaptive
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1.5">
                    Dynamic bps
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-teal-600">
                      timelapse
                    </span>
                    {' '}Est. Completion Window
                  </span>
                  {' '}
                  <span className="font-bold text-slate-800">
                    3 hrs 36 mins (11:16 PM)
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-teal-600 h-2 rounded-full w-2/5" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>
                    4 worker nodes allocated
                  </span>
                  {' '}
                  <span>
                    12% safety headroom
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50/70 border border-slate-200/80">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-teal-600 text-[20px]">
                    published_with_changes
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Auto-retry temporary failures
                    </span>
                    {' '}
                    <span className="text-[11px] text-slate-500">
                      Re-attempts transient network drops within 2 hrs
                    </span>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-9 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600" />
                </label>
              </div>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <span className="material-symbols-outlined text-[20px]">
                    tune
                  </span>
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Alerts &amp; Channel Fallback
                  </h2>
                  <p className="text-xs text-slate-500">
                    Telemetry notifications &amp; multi-channel redundancy
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-[18px]">
                      mail
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Email Alerts
                      </span>
                      {' '}
                      <span className="text-[11px] text-slate-500 truncate">
                        ahmed@nexmeg.com
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    ON
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-teal-600 text-[18px]">
                      chat
                    </span>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        WhatsApp Ping
                      </span>
                      {' '}
                      <span className="text-[11px] text-slate-500">
                        +92 300 8472910
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    ON
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      sms
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800">
                        SMS Fallback Channel
                      </span>
                      {' '}
                      <span className="px-1.5 py-0.2 rounded bg-slate-100 text-[10px] font-medium text-slate-600">
                        +PKR 1.20/msg
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Route undelivered WhatsApp recipients via Telco direct interconnect
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input className="sr-only peer" type="checkbox" />
                  <div className="w-9 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600" />
                </label>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-xl">
                    verified_user
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    Pre-Flight Inspection
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    done_all
                  </span>
                  {' '}5 / 5 Passed
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Meta Template Status
                    </span>
                  </div>
                  <span className="font-mono font-bold text-slate-800 text-[11px]">
                    Approved (eid_v2)
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Clean Audience Pool
                    </span>
                  </div>
                  <span className="font-semibold text-emerald-700">
                    54,200 Clean
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Merge Parameters
                    </span>
                  </div>
                  <span className="font-semibold text-slate-700">
                    3 / 3 Tags (100%)
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Media Asset CDN
                    </span>
                  </div>
                  <span className="font-semibold text-slate-700">
                    Cached (1.2 MB)
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="material-symbols-outlined text-emerald-600 text-[16px]">
                      check_circle
                    </span>
                    {' '}
                    <span>
                      Opt-Out Unsubscribe
                    </span>
                  </div>
                  <span className="font-semibold text-emerald-700">
                    Active &amp; Tested
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-teal-600 text-xl">
                    account_balance_wallet
                  </span>
                  <h2 className="text-base font-bold text-slate-900">
                    Wallet &amp; Commercials
                  </h2>
                </div>
                <button className="text-xs font-bold text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-1" type="button">
                  <span className="material-symbols-outlined text-[14px]">
                    add_circle
                  </span>
                  {' '}Top-up
                </button>
              </div>
              <div className="flex flex-col gap-2.5 mb-4 text-xs">
                <div className="flex justify-between items-center text-slate-500">
                  <span>
                    Target Broadcast Volume
                  </span>
                  {' '}
                  <span className="font-semibold text-slate-800">
                    54,200 Recipients
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-500">
                  <span>
                    Marketing API Delivery Rate
                  </span>
                  {' '}
                  <span className="font-semibold text-slate-800">
                    PKR 1.25 / msg
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-500">
                  <span>
                    Estimated Maximum Cost
                  </span>
                  {' '}
                  <span className="font-bold text-slate-900">
                    PKR 67,750.00
                  </span>
                </div>
                <div className="h-px bg-slate-200 my-1" />
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">
                    Available Balance
                  </span>
                  {' '}
                  <span className="text-base font-bold text-teal-700">
                    PKR 84,200.00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">
                    Projected Remaining
                  </span>
                  {' '}
                  <span className="font-semibold text-slate-700">
                    PKR 16,450.00
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-600 text-xl flex-shrink-0">
                  check_circle
                </span>
                <div>
                  <span className="text-xs font-bold text-emerald-800 block">
                    Sufficient Balance Available
                  </span>
                  {' '}
                  <span className="text-[11px] text-emerald-700">
                    No delay or escrow required. Dispatches seamlessly.
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-teal-600 text-[16px]">
                    smartphone
                  </span>
                  {' '}Handset Preview
                </span>
                {' '}
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                  WhatsApp Cloud
                </span>
              </div>
              <div className="rounded-xl p-3 bg-slate-100/80 border border-slate-200/60">
                <div className="max-w-[300px] mx-auto bg-white rounded-xl p-3 shadow-sm flex flex-col gap-2">
                  <div className="w-full h-24 rounded-lg overflow-hidden relative">
                    <img alt="Eid Mega Sale Banner" className="w-full h-full object-cover" src="/demo-banner.svg" />
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1.5 py-0.5 rounded text-[9px] font-mono">
                      1.2 MB
                    </div>
                  </div>
                  <div className="text-xs text-slate-800 leading-snug">
                    <p className="font-bold text-teal-700 mb-1">
                      🎉 Assalam-o-Alaikum, Ahmed!
                    </p>
                    <p className="text-slate-600">
                      Your exclusive VIP Early Access to the{' '}
                      <strong>
                        Eid Mega Sale 2024
                      </strong>
                      {' '}is live! Flat{' '}
                      <strong>
                        35% OFF
                      </strong>
                      {' '}luxury apparel.
                    </p>
                    <p className="mt-1 text-[11px] text-slate-500 italic">
                      Code:{' '}
                      <span className="font-mono font-bold text-slate-800 bg-slate-100 px-1 py-0.5 rounded">
                        EIDVIP35
                      </span>
                    </p>
                  </div>
                  <div className="text-right text-[10px] text-slate-400 flex items-center justify-end gap-1">
                    <span>
                      07:40 PM
                    </span>
                    {' '}
                    <span className="material-symbols-outlined text-[13px] text-teal-600">
                      done_all
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <div className="w-full py-1.5 rounded-lg bg-teal-50 text-teal-700 text-center text-xs font-bold border border-teal-100 flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px]">
                        shopping_bag
                      </span>
                      {' '}Shop VIP Collection
                    </div>
                    <div className="w-full py-1.5 rounded-lg bg-slate-50 text-slate-600 text-center text-xs font-medium border border-slate-200/80 flex items-center justify-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px]">
                        cancel
                      </span>
                      {' '}Opt-out / Unsubscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 lg:left-[80px] bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-6 py-4 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <a className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors" href="#">
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              {' '}
              <span>
                Back to Step 3: Message &amp; Template
              </span>
            </a>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button className="px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 transition-all shadow-sm" type="button">
                Save as Draft
              </button>
              <button className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-md shadow-teal-600/30 hover:shadow-lg transition-all flex items-center justify-center gap-2" type="button">
                <span>
                  Confirm &amp; Launch Campaign
                </span>
                {' '}
                <span className="material-symbols-outlined text-base">
                  rocket_launch
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
