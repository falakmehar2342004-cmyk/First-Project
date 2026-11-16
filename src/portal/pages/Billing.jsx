import { Can } from "../auth/AccessContext.jsx";
import { PageHero } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";

const ACTIONS = [[["top-up credits", "recharge now", "select starter", "select enterprise", "add funds"], "/portal/billing/top-up"]];

export default function Billing() {
  const onAction = useActionLinks(ACTIONS);
  return (
    <div className="contents" onClick={onAction}>
      <div className="flex flex-col w-full">
        <PageHero className="mb-6">
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-on-primary/10 backdrop-blur-md mb-3 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-primary-fixed beacon-pulse" />
                {' '}
                <span className="text-[11px] font-bold tracking-wide uppercase text-teal-100">
                  Billing Architecture • Tier-1 Direct Routing
                </span>
              </div>
              <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
                Billing &amp; Wallet Management{' '}
                <span className="text-xl">
                  💳
                </span>
              </h1>
              <p className="mt-2 text-sm lg:text-base font-normal text-teal-50/90 leading-relaxed">
                Manage your prepaid messaging credits, automated top-ups, invoicing history, and subscription tiers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch xl:items-center gap-5 bg-black/15 backdrop-blur-xl p-5 rounded-2xl border border-white/15 shadow-md">
              <div className="flex flex-col justify-center pr-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-teal-200 font-bold">
                    Available Funds
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/25 text-teal-100 border border-teal-300/30">
                    Prepaid Active
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-sm font-semibold text-teal-200">
                    PKR
                  </span>
                  {' '}
                  <span className="text-3xl font-black text-white tracking-tight" id="hero-wallet-display">
                    84,200
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 shrink-0">
                <Can perm="billing.manage"><button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-portal-accent to-[#f97316] text-white font-bold text-sm shadow-md hover:brightness-105 active:scale-95 transition-all" type="button">
                  <span className="material-symbols-outlined text-base">
                    add_circle
                  </span>
                  {' '}+ Top Up Credits / Re-charge
                </button></Can>
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-md transition-colors border border-white/20" type="button">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {' '}Auto-Recharge: ON (Min PKR 10,000)
                </button>
              </div>
            </div>
          </div>
        </PageHero>
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-primary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-xl">
                  account_balance_wallet
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-teal-100/60 text-primary font-bold">
                Real-time
              </span>
            </div>
            <div className="mt-4">
              <span className="text-body-sm font-body-sm text-slate-500">
                Current Prepaid Balance
              </span>
              <div className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                PKR 84,200
              </div>
              <p className="mt-2 text-label-sm font-label-sm text-slate-600 flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[15px] text-primary">
                  chat_bubble
                </span>
                {' '}~140,330 SMS or ~70,160 WhatsApp
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-orange-50 text-secondary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-xl">
                  trending_down
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-emerald-100/70 text-tertiary font-bold">
                -12% vs Oct
              </span>
            </div>
            <div className="mt-4">
              <span className="text-body-sm font-body-sm text-slate-500">
                This Month Spending
              </span>
              <div className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                PKR 115,800
              </div>
              <p className="mt-2 text-label-sm font-label-sm text-slate-600 flex items-center gap-1.5 font-medium">
                <span className="material-symbols-outlined text-[15px] text-tertiary">
                  analytics
                </span>
                {' '}Cost per msg avg: PKR 0.60
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-xl">
                  workspace_premium
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-surface-container-highest text-slate-700 font-bold">
                Renews in 12d
              </span>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="text-body-sm font-body-sm text-slate-500">
                  Current Plan
                </span>
                {' '}
                <span className="text-label-sm font-label-sm text-primary font-bold">
                  68% Quota
                </span>
              </div>
              <div className="text-2xl font-black text-slate-900 tracking-tight mt-0.5">
                Business Pro
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full mt-2.5 overflow-hidden border border-slate-200/60">
                <div className="bg-primary h-2 rounded-full" style={{ "width": "68%" }} />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80 flex flex-col justify-between hover:-translate-y-0.5 transition-transform">
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-tertiary flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-xl">
                  credit_card
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full text-label-sm font-label-sm bg-teal-100/60 text-tertiary font-bold">
                Auto-Debit ON
              </span>
            </div>
            <div className="mt-4">
              <span className="text-body-sm font-body-sm text-slate-500">
                Active Payment Method
              </span>
              <div className="text-xl font-black text-slate-900 tracking-tight mt-0.5">
                Meezan Corporate
              </div>
              <p className="mt-2 text-label-sm font-label-sm text-slate-600 flex items-center gap-1.5 font-medium">
                <span className="font-mono font-bold text-slate-800">
                  Visa •••• 4821
                </span>
                {' '}• Active Primary
              </p>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <section className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-2 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="text-headline-md font-headline-md text-slate-900 font-bold">
                    Quick Top-Up Packages
                  </h2>
                  <p className="text-body-sm font-body-sm text-slate-500 mt-0.5">
                    Instant wallet allocation with automated carrier tax clearance
                  </p>
                </div>
                <span className="text-label-sm font-label-sm text-primary font-bold flex items-center gap-1 self-start sm:self-auto bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200">
                  <span className="material-symbols-outlined text-[16px]">
                    bolt
                  </span>
                  {' '}0% gateway processing fee
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 pt-2">
                <div className="relative p-5 rounded-2xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all cursor-pointer flex flex-col justify-between border border-slate-200/80 group shadow-xs hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">
                        Starter
                      </span>
                      {' '}
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        +2% Bonus
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        PKR
                      </span>
                      {' '}
                      <span className="text-2xl font-black text-slate-900 ml-1">
                        25,000
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 font-medium">
                      Total Credit:{' '}
                      <strong className="text-slate-900 font-bold">
                        PKR 25,500
                      </strong>
                    </p>
                  </div>
                  <button className="mt-5 w-full py-2.5 rounded-xl bg-white text-slate-800 font-bold text-sm border border-slate-200 shadow-xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" type="button">
                    Select Starter
                  </button>
                </div>
                <div className="relative p-5 rounded-2xl bg-white shadow-md flex flex-col justify-between cursor-pointer border-2 border-primary ring-2 ring-primary/20 hover:shadow-lg transition-all">
                  <div className="absolute -top-3.5 right-4 px-3 py-0.5 bg-primary text-white text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-sm">
                    Popular • Best Value
                  </div>
                  <div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-base font-extrabold text-slate-900">
                        Growth
                      </span>
                      {' '}
                      <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                        +5% Bonus
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        PKR
                      </span>
                      {' '}
                      <span className="text-2xl font-black text-slate-900 ml-1">
                        50,000
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 font-medium">
                      Total Credit:{' '}
                      <strong className="text-primary font-extrabold text-sm">
                        PKR 52,500
                      </strong>
                    </p>
                  </div>
                  <button className="mt-5 w-full py-2.5 rounded-xl bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-sm transition-all" type="button">
                    Recharge Now
                  </button>
                </div>
                <div className="relative p-5 rounded-2xl bg-surface-container-low/60 hover:bg-surface-container-low transition-all cursor-pointer flex flex-col justify-between border border-slate-200/80 group shadow-xs hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">
                        Enterprise
                      </span>
                      {' '}
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        +8% Bonus
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        PKR
                      </span>
                      {' '}
                      <span className="text-2xl font-black text-slate-900 ml-1">
                        100,000
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-600 font-medium">
                      Total Credit:{' '}
                      <strong className="text-slate-900 font-bold">
                        PKR 108,000
                      </strong>
                    </p>
                  </div>
                  <button className="mt-5 w-full py-2.5 rounded-xl bg-white text-slate-800 font-bold text-sm border border-slate-200 shadow-xs group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" type="button">
                    Select Enterprise
                  </button>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-200/70">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="material-symbols-outlined text-primary text-xl">
                    tune
                  </span>
                  {' '}
                  <span className="text-sm font-bold text-slate-900 shrink-0">
                    Custom Amount:
                  </span>
                  <div className="relative flex items-center w-full sm:w-60">
                    <span className="absolute left-3.5 font-bold text-xs text-slate-500">
                      PKR
                    </span>
                    <input className="w-full pl-12 pr-4 py-2 bg-surface-container-lowest rounded-lg font-bold text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary border border-slate-200 shadow-xs" type="text" defaultValue="75,000" />
                  </div>
                </div>
                <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-primary hover:bg-primary-container text-white font-bold text-sm shadow-sm transition-colors whitespace-nowrap" type="button">
                  Recharge Custom Amount
                </button>
              </div>
            </section>
            <section className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 gap-4 border-b border-slate-100 mb-4">
                <div>
                  <h2 className="text-headline-md font-headline-md text-slate-900 font-bold">
                    Transaction &amp; Invoicing History
                  </h2>
                  <p className="text-body-sm font-body-sm text-slate-500 mt-0.5">
                    Complete audit trail of carrier top-ups and campaign debits
                  </p>
                </div>
                <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-slate-700 text-label-md font-bold border border-slate-200/80 transition-colors self-start md:self-auto" type="button">
                  <span className="material-symbols-outlined text-body-md">
                    download
                  </span>
                  {' '}Export CSV
                </button>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
                <button className="px-3.5 py-1.5 rounded-xl bg-primary text-white font-bold text-xs whitespace-nowrap shadow-xs" type="button">
                  All Transactions (Active)
                </button>
                <button className="px-3.5 py-1.5 rounded-xl bg-surface-container-low text-slate-600 hover:text-slate-900 hover:bg-surface-container font-semibold text-xs transition-colors whitespace-nowrap" type="button">
                  Credit Top-ups
                </button>
                <button className="px-3.5 py-1.5 rounded-xl bg-surface-container-low text-slate-600 hover:text-slate-900 hover:bg-surface-container font-semibold text-xs transition-colors whitespace-nowrap" type="button">
                  Campaign Debits
                </button>
                <button className="px-3.5 py-1.5 rounded-xl bg-surface-container-low text-slate-600 hover:text-slate-900 hover:bg-surface-container font-semibold text-xs transition-colors whitespace-nowrap" type="button">
                  Tax Invoices
                </button>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left text-body-sm font-body-sm">
                  <thead>
                    <tr className="bg-surface-container-low/80 text-slate-500 text-xs font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 rounded-l-lg">
                        Date &amp; Time
                      </th>
                      <th className="py-3 px-4">
                        Transaction ID &amp; Description
                      </th>
                      <th className="py-3 px-4">
                        Channel / Method
                      </th>
                      <th className="py-3 px-4">
                        Amount
                      </th>
                      <th className="py-3 px-4">
                        Status
                      </th>
                      <th className="py-3 px-4 text-right rounded-r-lg">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-slate-700 font-medium">
                        Nov 12, 2024
                        <br />
                        <span className="text-xs text-slate-400 font-mono">
                          14:20 PKT
                        </span>
                      </td>
                      <td className="py-4 px-4 min-w-[200px]">
                        <div className="font-bold text-slate-900 text-sm">
                          #TXN-98421
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">
                          1-Click Wallet Top Up via Meezan Visa
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {' '}Meezan Visa •••• 4821
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-black text-tertiary text-sm">
                        +PKR 50,000
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-tertiary font-bold border border-emerald-200/60">
                          Completed
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 text-primary transition-colors" title="Download PDF Invoice" type="button">
                          <span className="material-symbols-outlined text-lg">
                            picture_as_pdf
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-slate-700 font-medium">
                        Nov 10, 2024
                        <br />
                        <span className="text-xs text-slate-400 font-mono">
                          09:15 PKT
                        </span>
                      </td>
                      <td className="py-4 px-4 min-w-[200px]">
                        <div className="font-bold text-slate-900 text-sm">
                          #TXN-98210
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">
                          Eid Mega Sale SMS Broadcast Debit (32,000 msgs)
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          {' '}Wallet Balance Debit
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-black text-slate-900 text-sm">
                        -PKR 18,450
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-tertiary font-bold border border-emerald-200/60">
                          Completed
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 text-primary transition-colors" title="Download PDF Receipt" type="button">
                          <span className="material-symbols-outlined text-lg">
                            receipt_long
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-slate-700 font-medium">
                        Nov 08, 2024
                        <br />
                        <span className="text-xs text-slate-400 font-mono">
                          18:40 PKT
                        </span>
                      </td>
                      <td className="py-4 px-4 min-w-[200px]">
                        <div className="font-bold text-slate-900 text-sm">
                          #TXN-98014
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">
                          WhatsApp Utility Template Tier-1 Billing
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          {' '}Wallet Balance Debit
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-black text-slate-900 text-sm">
                        -PKR 6,120
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-tertiary font-bold border border-emerald-200/60">
                          Completed
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 text-primary transition-colors" title="Download PDF Receipt" type="button">
                          <span className="material-symbols-outlined text-lg">
                            receipt_long
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-slate-700 font-medium">
                        Nov 01, 2024
                        <br />
                        <span className="text-xs text-slate-400 font-mono">
                          11:02 PKT
                        </span>
                      </td>
                      <td className="py-4 px-4 min-w-[200px]">
                        <div className="font-bold text-slate-900 text-sm">
                          #TXN-97940
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">
                          Flash Promo Credit Recharge via JazzCash
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                          {' '}JazzCash Business
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-black text-tertiary text-sm">
                        +PKR 25,000
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-tertiary font-bold border border-emerald-200/60">
                          Completed
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 text-primary transition-colors" title="Download PDF Invoice" type="button">
                          <span className="material-symbols-outlined text-lg">
                            picture_as_pdf
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-4 whitespace-nowrap text-slate-700 font-medium">
                        Oct 28, 2024
                        <br />
                        <span className="text-xs text-slate-400 font-mono">
                          16:30 PKT
                        </span>
                      </td>
                      <td className="py-4 px-4 min-w-[200px]">
                        <div className="font-bold text-slate-900 text-sm">
                          #TXN-97512
                        </div>
                        <div className="text-xs text-slate-500 truncate max-w-xs">
                          Monthly Business Pro Renewal Cycle (Nov)
                        </div>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium text-xs">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {' '}Meezan Visa •••• 4821
                        </span>
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap font-black text-slate-900 text-sm">
                        -PKR 24,999
                      </td>
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-tertiary font-bold border border-emerald-200/60">
                          Paid
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <button className="p-1.5 rounded-lg hover:bg-slate-100 text-primary transition-colors" title="Download Tax Invoice" type="button">
                          <span className="material-symbols-outlined text-lg">
                            picture_as_pdf
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between pt-5 mt-2 border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">
                  Showing 1 to 5 of 48 transactions
                </span>
                <div className="flex items-center gap-1.5">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-slate-400 text-xs font-semibold cursor-not-allowed" disabled type="button">
                    Previous
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-primary text-white font-bold text-xs flex items-center justify-center shadow-xs" type="button">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-surface-container-low text-slate-700 font-semibold text-xs hover:bg-surface-container flex items-center justify-center transition-colors" type="button">
                    2
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-surface-container-low text-slate-700 font-semibold text-xs hover:bg-surface-container flex items-center justify-center transition-colors" type="button">
                    3
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-slate-700 text-xs font-semibold hover:bg-surface-container transition-colors" type="button">
                    Next
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <section className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary beacon-pulse" />
                  {' '}
                  <span className="font-bold text-slate-900 text-sm">
                    Subscription Tier
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs bg-emerald-50 text-tertiary font-extrabold border border-emerald-200/60">
                  Active
                </span>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-surface-container-low/70 border border-slate-200/60">
                <div className="text-lg font-black text-slate-900">
                  Business Pro Plan
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  PKR 24,999 / month • Renews Dec 01
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-slate-600 font-semibold">
                      Monthly Quota Consumption
                    </span>
                    {' '}
                    <span className="text-primary font-black">
                      68%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-emerald-500 h-2 rounded-full transition-all duration-500" style={{ "width": "68%" }} />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1.5 block font-medium">
                    340,000 / 500,000 included messages dispatched
                  </span>
                </div>
              </div>
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  {' '}
                  <span>
                    Multi-network telco routing (Jazz, Telenor, Zong)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  {' '}
                  <span>
                    WhatsApp Meta Cloud API Official integration
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  {' '}
                  <span>
                    Dedicated account manager (Lahore NOC)
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  {' '}
                  <span>
                    99.99% enterprise uptime SLA
                  </span>
                </div>
              </div>
              <button className="mt-5 w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-slate-200/80" type="button">
                <span className="material-symbols-outlined text-sm">
                  upgrade
                </span>
                {' '}Upgrade Subscription Tier
              </button>
            </section>
            <section className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm">
                  Saved Payment Methods
                </h3>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-emerald-600">
                    lock
                  </span>
                  {' '}Encrypted
                </span>
              </div>
              <div className="space-y-3 mt-4">
                <div className="p-3.5 rounded-xl bg-surface-container-low/70 border border-teal-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-xs text-primary font-black text-xs tracking-wider border border-slate-200">
                      VISA
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                        Meezan Corporate{' '}
                        <span className="px-1.5 py-0.2 rounded text-[10px] bg-primary/10 text-primary font-bold">
                          Default
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-mono font-medium">
                        •••• 4821 • Exp 09/27
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-xl">
                    check_circle
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low/50 border border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center shadow-xs text-secondary font-black text-xs tracking-wider border border-slate-200">
                      MC
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900">
                        Bank Alfalah Corporate
                      </div>
                      <span className="text-xs text-slate-500 font-mono font-medium">
                        •••• 8092 • Exp 04/26
                      </span>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-primary hover:underline" type="button">
                    Make Default
                  </button>
                </div>
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500 font-medium">
                  Supported Local Rails:
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] bg-orange-100/70 text-orange-950 font-bold border border-orange-200/50">
                    JazzCash
                  </span>
                  {' '}
                  <span className="px-2 py-0.5 rounded text-[11px] bg-emerald-100/70 text-emerald-950 font-bold border border-emerald-200/50">
                    Raast Instant
                  </span>
                </div>
              </div>
              <button className="mt-4 w-full py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container-low text-primary font-bold text-xs border border-primary/30 shadow-xs transition-colors flex items-center justify-center gap-1.5" type="button">
                <span className="material-symbols-outlined text-sm">
                  add
                </span>
                {' '}+ Add Payment Method
              </button>
            </section>
            <section className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-slate-200/80">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">
                    policy
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Tax &amp; FBR Compliance
                  </h3>
                  <span className="text-xs text-tertiary font-extrabold flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">
                      verified
                    </span>
                    {' '}Active Taxpayer Verified
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-low/70 border border-slate-200/60 text-xs text-slate-700 space-y-2 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">
                    Corporate NTN:
                  </span>
                  {' '}
                  <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                    7392810-4
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">
                    Sales Tax Reg:
                  </span>
                  {' '}
                  <span className="font-bold text-slate-900 bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200">
                    PRA / SRB Registered
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 pt-1.5 leading-relaxed">
                  Automated WHT &amp; GST compliance invoices are dispatched instantly to{' '}
                  <strong className="text-slate-900 font-semibold">
                    billing@nexmeg.com
                  </strong>
                </p>
              </div>
              <a className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary-container font-bold text-xs transition-colors" href="#">
                <span className="material-symbols-outlined text-base">
                  description
                </span>
                {' '}Download Tax Exemption / Certificate (Form 26Q) 📄
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
