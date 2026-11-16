import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHero, useToast } from "../ui/index.js";
import { useEscape } from "../hooks/useEscape.js";
import { useCountry } from "../context/PortalContext.jsx";

const TAX_RATE = 0.16;
const TIERS = { starter: [25000, 0], growth: [50000, 2500], enterprise: [100000, 8000] };
const optionCls = (active, extra = "") => "relative flex p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-200 " + extra + (active ? " border-portal-brand-deep bg-teal-50/40 dark:bg-teal-950/30 shadow-md" : " border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600");
const railIcon = (active) => "material-symbols-outlined text-xl " + (active ? "text-portal-brand-deep dark:text-portal-brand-soft" : "text-slate-400");
const bonusFor = (n) => (n >= 100000 ? Math.round(n * 0.08) : n >= 50000 ? Math.round(n * 0.05) : 0);


export default function TopUp() {
  const navigate = useNavigate();
  const toast = useToast();
  const { currency } = useCountry();
  const [tier, setTier] = useState("growth");
  const [base, setBase] = useState(50000);
  const [bonus, setBonus] = useState(2500);
  const [custom, setCustom] = useState("");
  const [rail, setRail] = useState("meezan");
  const [paying, setPaying] = useState(false);
  const tax = Math.round(base * TAX_RATE);
  const payable = base + tax;
  const fmt = (n) => `PKR ${n.toLocaleString()}`;
  const close = () => navigate("/portal/billing");
  useEscape(close);
  const selectTier = (name) => { const [amount, b] = TIERS[name]; setTier(name); setBase(amount); setBonus(b); setCustom(""); };
  const onCustom = (val) => {
    setCustom(val);
    const n = parseInt(val, 10);
    if (!Number.isNaN(n) && n >= 5000) { setTier(null); setBase(n); setBonus(bonusFor(n)); }
  };
  useEffect(() => () => clearTimeout(window.__nexTopupTimer), []);
  const pay = () => {
    setPaying(true);
    window.__nexTopupTimer = setTimeout(() => {
      toast(`Payment of ${fmt(payable)} initiated (demo). Credits 30 seconds mein reflect honge.`);
      setPaying(false);
      close();
    }, 700);
  };
  return (
    <>
      <div className="flex flex-col w-full relative">
        <div className="w-full space-y-6 select-none opacity-40 blur-[2px] pointer-events-none transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                <span>
                  Finance &amp; Operations
                </span>
                {' '}
                <span>
                  /
                </span>
                {' '}
                <span className="text-portal-brand-deep font-bold">
                  Billing &amp; Wallet
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Account Treasury &amp; Top-Up
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-200/70 dark:bg-slate-800 px-3.5 py-2 rounded-xl text-slate-700 dark:text-slate-300 text-sm shadow-sm font-medium">
                <span className="material-symbols-outlined text-portal-brand-deep text-base">
                  receipt_long
                </span>
                {' '}
                <span>
                  NTN: 8291044-3 (FBR Verified)
                </span>
              </div>
              <button className="bg-portal-brand-deep text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  add_circle
                </span>
                {' '}
                <span>
                  Add Messaging Credits
                </span>
              </button>
            </div>
          </div>
          <PageHero>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-portal-mint animate-ping" />
                  {' '}
                  <span>
                    Real-time Omnichannel Balance
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-white/80 uppercase tracking-wider">
                    Current Working Wallet Balance
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold tracking-tight text-white">
                      PKR 84,200
                      <span className="text-2xl text-white/70">
                        .00
                      </span>
                    </span>
                    {' '}
                    <span className="px-2.5 py-1 rounded-lg bg-white/20 text-white text-xs font-bold">
                      +18.4% this month
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/90">
                  Estimated remaining capacity:{' '}
                  <span className="font-bold text-white">
                    140,330 standard SMS
                  </span>
                  {' '}or{' '}
                  <span className="font-bold text-white">
                    70,165 WhatsApp Utility templates
                  </span>
                  {' '}across Pakistan telecommunication carriers.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-3 justify-end">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white space-y-1.5 shadow-sm">
                  <div className="flex justify-between items-center text-xs font-medium">
                    <span className="text-white/80">
                      Active Burn Rate:
                    </span>
                    {' '}
                    <span className="font-bold">
                      PKR 4,820 / day
                    </span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-portal-accent h-full rounded-full" style={{ "width": "58%" }} />
                  </div>
                  <p className="text-xs text-white/70">
                    Estimated 17 days runway remaining at average traffic
                  </p>
                </div>
              </div>
            </div>
          </PageHero>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm space-y-2 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Reserved Dispatches
                </span>
                {' '}
                <span className="material-symbols-outlined text-portal-brand-deep text-xl">
                  schedule_send
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                PKR 12,400
              </p>
              <p className="text-xs text-slate-400">
                Queue locked for 2 upcoming broadcasts
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm space-y-2 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Tax Credited (WHT/PRA)
                </span>
                {' '}
                <span className="material-symbols-outlined text-portal-success text-xl">
                  verified
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                PKR 34,800
              </p>
              <p className="text-xs text-emerald-600 font-medium">
                Verified for Q3 Annex-C return
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm space-y-2 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  Last Payment Date
                </span>
                {' '}
                <span className="material-symbols-outlined text-portal-accent text-xl">
                  account_balance_wallet
                </span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                14 Oct 2024
              </p>
              <p className="text-xs text-slate-400">
                Via Meezan Bank Corp • PKR 50,000
              </p>
            </div>
          </div>
        </div>
        <div aria-labelledby="modal-headline" aria-modal="true" className="fixed inset-0 min-h-screen bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto" id="topup-modal" role="dialog">
          <div className="bg-white dark:bg-[#15202e] rounded-3xl shadow-2xl border border-slate-200/90 dark:border-slate-700/80 max-w-2xl w-full my-auto flex flex-col max-h-[92vh] overflow-hidden transition-all transform animate-in fade-in zoom-in-95 duration-200">
            <div className="p-5 sm:p-6 pb-3 bg-white dark:bg-[#15202e] border-b border-slate-100 dark:border-slate-800 shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-teal-950/50 text-portal-brand-deep dark:text-portal-brand-soft text-xs font-bold border border-teal-200 dark:border-teal-800/60">
                    <span className="material-symbols-outlined text-sm">
                      credit_card
                    </span>
                    {' '}
                    <span>
                      Instant Wallet Top-Up
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight" id="modal-headline">
                    Top Up Messaging Credits
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Select a pre-packaged recharge volume or enter custom amount. Credits reflect instantly upon telecommunications gateway confirmation.
                  </p>
                </div>
                <button aria-label="Close modal" className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shrink-0" onClick={close} type="button">
                  <span className="material-symbols-outlined text-xl">
                    close
                  </span>
                </button>
              </div>
              <div className="mt-3.5 flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/40 text-portal-brand-deep dark:text-portal-brand-soft flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-xl">
                      account_balance_wallet
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                      Current Wallet Balance
                    </p>
                    <p className="text-base font-extrabold text-slate-900 dark:text-white">
                      PKR 84,200{' '}
                      <span className="text-xs font-normal text-slate-500">
                        (~140,330 SMS capacity)
                      </span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold">
                  Active &amp; Healthy
                </span>
              </div>
            </div>
            <div className="p-5 sm:p-6 pt-3 space-y-5 overflow-y-auto flex-1 custom-scrollbar">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-portal-brand-deep text-white font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    {' '}
                    <span>
                      Select Recharge Package
                    </span>
                  </span>
                  {' '}
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Instant bonus credited at checkout
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className={optionCls(tier === "starter", "flex-col justify-between")}>
                    <input className="sr-only" name="topup_tier" checked={tier === "starter"} onChange={() => selectTier("starter")} type="radio" value="25000" />
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Starter Tier
                      </span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">
                        PKR 25,000
                      </p>
                    </div>
                    <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      <p className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-portal-brand-deep">
                          chat
                        </span>
                        {' '}~41,600 SMS
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-portal-brand-deep">
                          forum
                        </span>
                        {' '}~20,800 WA
                      </p>
                    </div>
                  </label>
                  <label className={optionCls(tier === "growth", "flex-col justify-between")}>
                    <input className="sr-only" name="topup_tier" checked={tier === "growth"} onChange={() => selectTier("growth")} type="radio" value="50000" />
                    <span className="absolute -top-2.5 right-3 bg-portal-accent text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm flex items-center gap-1 uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[12px]">
                        hotel_class
                      </span>
                      {' '}Most Popular
                    </span>
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-portal-brand-deep dark:text-portal-brand-soft uppercase tracking-wider">
                        Growth Tier
                      </span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">
                        PKR 50,000
                      </p>
                    </div>
                    <div className="mt-1.5 inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 text-[11px] font-bold">
                      +5% Bonus (PKR 2,500 Extra)
                    </div>
                    <div className="mt-2 pt-2 border-t border-teal-100 dark:border-teal-900/40 space-y-1 text-xs text-slate-700 dark:text-slate-200">
                      <p className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-portal-brand-deep">
                          chat
                        </span>
                        {' '}~85,000 SMS
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-portal-brand-deep">
                          forum
                        </span>
                        {' '}~42,500 WA
                      </p>
                    </div>
                  </label>
                  <label className={optionCls(tier === "enterprise", "flex-col justify-between")}>
                    <input className="sr-only" name="topup_tier" checked={tier === "enterprise"} onChange={() => selectTier("enterprise")} type="radio" value="100000" />
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Enterprise
                      </span>
                      <p className="text-base font-extrabold text-slate-900 dark:text-white">
                        PKR 100,000
                      </p>
                    </div>
                    <div className="mt-1.5 inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 text-[11px] font-bold">
                      +8% Bonus (PKR 8,000 Extra)
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      <p className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-portal-brand-deep">
                          chat
                        </span>
                        {' '}~175,000 SMS
                      </p>
                      <p className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-portal-brand-deep">
                          forum
                        </span>
                        {' '}~87,500 WA
                      </p>
                    </div>
                  </label>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <label className="text-xs font-bold text-slate-800 dark:text-slate-200" htmlFor="custom-credit-input">
                      Or enter custom amount:
                    </label>
                    <p className="text-xs text-slate-400">
                      Min PKR 5,000 • Max PKR 1,000,000
                    </p>
                  </div>
                  <div className="relative w-full sm:w-56">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-xs font-bold text-slate-400">
                      PKR
                    </span>
                    <input className="w-full pl-12 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-portal-brand-deep shadow-sm" id="custom-credit-input" value={custom} onChange={(e) => onCustom(e.target.value)} placeholder="e.g. 75,000" step="5000" type="number" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-portal-brand-deep text-white font-bold text-xs flex items-center justify-center">
                      2
                    </span>
                    {' '}
                    <span>
                      Select Payment Gateway / Method
                    </span>
                  </span>
                  {' '}
                  <span className="text-xs font-semibold text-portal-success dark:text-emerald-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      lock
                    </span>
                    {' '}SBP Authorized • 0% Surcharge
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className={optionCls(rail === "meezan", "items-center justify-between !p-3")}>
                    <div className="flex items-center gap-3">
                      <input className="sr-only" name="payment_rail" checked={rail === "meezan"} onChange={() => setRail("meezan")} type="radio" value="meezan" />
                      <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-portal-brand-deep dark:text-portal-brand-soft shrink-0">
                        <span className="material-symbols-outlined text-lg">
                          credit_card
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            Meezan Corporate Visa
                          </p>
                          <span className="px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-[10px] text-slate-600 dark:text-slate-300 font-semibold">
                            • 4821
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Saved • 0% transaction fee
                        </p>
                      </div>
                    </div>
                    <span className={railIcon(rail === "meezan")}>
{rail === "meezan" ? "radio_button_checked" : "radio_button_unchecked"}
                    </span>
                  </label>
                  <label className={optionCls(rail === "alfalah", "items-center justify-between !p-3")}>
                    <div className="flex items-center gap-3">
                      <input className="sr-only" name="payment_rail" checked={rail === "alfalah"} onChange={() => setRail("alfalah")} type="radio" value="alfalah" />
                      <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-slate-600 dark:text-slate-300 shrink-0">
                        <span className="material-symbols-outlined text-lg">
                          credit_card
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            Alfalah Mastercard
                          </p>
                          <span className="px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-[10px] text-slate-600 dark:text-slate-300 font-semibold">
                            • 9932
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          0% merchant fee
                        </p>
                      </div>
                    </div>
                    <span className={railIcon(rail === "alfalah")}>
{rail === "alfalah" ? "radio_button_checked" : "radio_button_unchecked"}
                    </span>
                  </label>
                  <label className={optionCls(rail === "raast", "items-center justify-between !p-3")}>
                    <div className="flex items-center gap-3">
                      <input className="sr-only" name="payment_rail" checked={rail === "raast"} onChange={() => setRail("raast")} type="radio" value="raast" />
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                        <span className="material-symbols-outlined text-lg">
                          bolt
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            Raast Instant Payment
                          </p>
                          <span className="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300 text-[10px] font-bold">
                            0s settle
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">
                          State Bank SBP QR / IBAN
                        </p>
                      </div>
                    </div>
                    <span className={railIcon(rail === "raast")}>
{rail === "raast" ? "radio_button_checked" : "radio_button_unchecked"}
                    </span>
                  </label>
                  <label className={optionCls(rail === "mobile", "items-center justify-between !p-3")}>
                    <div className="flex items-center gap-3">
                      <input className="sr-only" name="payment_rail" checked={rail === "mobile"} onChange={() => setRail("mobile")} type="radio" value="mobile" />
                      <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-portal-accent shrink-0">
                        <span className="material-symbols-outlined text-lg">
                          phone_android
                        </span>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-slate-900 dark:text-white">
                          JazzCash / EasyPaisa
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Direct mobile wallet prompt
                        </p>
                      </div>
                    </div>
                    <span className={railIcon(rail === "mobile")}>
{rail === "mobile" ? "radio_button_checked" : "radio_button_unchecked"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-portal-brand-deep text-white font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  {' '}
                  <span>
                    Tax Invoice Breakdown &amp; Payable Summary
                  </span>
                </span>
                <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 rounded-2xl p-4 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <span>
                      Base Credit Purchase:
                    </span>
                    {' '}
                    <span className="font-bold text-slate-900 dark:text-white" id="summary-base-amount">
{fmt(base)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-700 dark:text-emerald-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">
                        redeem
                      </span>
                      {' '}
                      <span>
                        Tier Promotional Bonus:
                      </span>
                    </span>
                    {' '}
                    <span id="summary-bonus-amount">
{bonus > 0 ? `+${fmt(bonus)} (Free)` : "None"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-portal-brand-deep dark:text-portal-brand-soft font-bold">
                    <span>
                      Total Working Credits Received:
                    </span>
                    {' '}
                    <span id="summary-total-credits">
{fmt(base + bonus)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex justify-between items-center text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <span>
                        Provincial Sales Tax (PRA / SRB 16%):
                      </span>
                      {' '}
                      <span className="material-symbols-outlined text-xs text-slate-400 cursor-help" title="Input tax is adjustable in monthly sales tax returns">
                        info
                      </span>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white" id="summary-tax-amount">
{fmt(tax)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                    <div>
                      <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                        Total Amount Payable
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Inclusive of all telecom carrier levies &amp; GST
                      </p>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-portal-brand-deep dark:text-portal-brand-soft" id="summary-total-payable">
{fmt(payable)}
                    </span>
                  </div>
                </div>
              </div>
              <label className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <input defaultChecked className="mt-0.5 rounded text-portal-brand-deep focus:ring-portal-brand-deep focus:ring-offset-0" type="checkbox" />
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>
                      Enable Smart Auto-Recharge
                    </span>
                    {' '}
                    <span className="px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold">
                      Safeguard
                    </span>
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Automatically recharge PKR 25,000 whenever wallet dips below PKR 10,000 to prevent message queue drops or OTP dispatch latency.
                  </p>
                </div>
              </label>
            </div>
            <div className="p-4 sm:p-5 bg-white dark:bg-[#15202e] border-t border-slate-100 dark:border-slate-800 shrink-0 space-y-2.5">
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={close} type="button">
                  Cancel
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-portal-accent hover:bg-portal-danger text-white font-bold text-sm sm:text-base px-8 py-3 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-600/35 active:scale-98 transition-all cursor-pointer" onClick={pay} disabled={paying} type="button">
                  <span className="material-symbols-outlined text-xl">
                    bolt
                  </span>
                  {' '}
                  <span id="submit-btn-text">
{paying ? "Connecting to 3D Secure Gateway..." : `Pay ${fmt(payable)} & Add Credits`}
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
                <span className="material-symbols-outlined text-sm text-portal-success">
                  lock
                </span>
                {' '}
                <span>
                  256-bit SSL Telco-Grade Encryption • State Bank 3D-Secure OTP Protected • FBR Compliant E-Invoice
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
