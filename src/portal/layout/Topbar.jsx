import { useCallback, useEffect, useRef } from "react";
import { usePortal } from "../context/PortalContext.jsx";
import { useAccess } from "../auth/AccessContext.jsx";
import { ROLES } from "../auth/roles.js";
import { useDisclosure } from "../hooks/useDisclosure.js";
import { useHotkey } from "../hooks/useHotkey.js";

const pill = "bg-portal-surface border border-portal-border/80 rounded-full hover:bg-portal-tint transition-colors";

function CurrencySwitcher() {
  const { country, countries, selectCountry } = usePortal();
  const menu = useDisclosure();
  const ref = useRef(null);
  useEffect(() => {
    if (!menu.isOpen) return undefined;
    const off = (e) => ref.current && !ref.current.contains(e.target) && menu.close();
    window.addEventListener("click", off);
    return () => window.removeEventListener("click", off);
  }, [menu.isOpen, menu.close]);
  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={menu.toggle} aria-haspopup="menu" aria-expanded={menu.isOpen} className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-portal-ink ${pill}`}>
        <span>{country.flag}</span><span className="tracking-wide">{country.code}</span>
        <span className="text-slate-400 text-[10px] font-semibold">|</span>
        <span className="text-portal-brand font-extrabold text-[11px]">{country.currency}</span>
        <svg className="w-3.5 h-3.5 text-slate-400 ml-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      {menu.isOpen && (
        <div role="menu" className="absolute right-0 mt-2 w-44 bg-portal-surface border border-portal-border rounded-xl shadow-xl py-1.5 z-50 text-xs font-semibold">
          {countries.map((c) => (
            <button key={c.code} type="button" role="menuitem" onClick={() => { selectCountry(c); menu.close(); }} className="w-full flex items-center justify-between px-3.5 py-2 hover:bg-portal-tint text-portal-ink transition-colors">
              <span className="flex items-center gap-2"><span className="text-base">{c.flag}</span><span>{c.name}</span></span>
              <span className="font-bold text-portal-brand">{c.currency}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


function UserMenu() {
  const { role, roleInfo, roles, setRole } = useAccess();
  const menu = useDisclosure();
  const ref = useRef(null);
  useEffect(() => {
    if (!menu.isOpen) return undefined;
    const off = (e) => ref.current && !ref.current.contains(e.target) && menu.close();
    window.addEventListener("click", off);
    return () => window.removeEventListener("click", off);
  }, [menu.isOpen, menu.close]);
  return (
    <div className="relative" ref={ref}>
      <button type="button" onClick={menu.toggle} aria-haspopup="menu" aria-expanded={menu.isOpen} title={`Ahmed Raza (${roleInfo.label})`}
        className="w-9 h-9 rounded-full bg-teal-400 text-teal-950 font-bold text-xs flex items-center justify-center border border-teal-300 hover:opacity-90 transition-opacity shadow-sm">AR</button>
      {menu.isOpen && (
        <div role="menu" className="absolute right-0 mt-2 w-64 bg-portal-surface border border-portal-border rounded-xl shadow-xl py-1.5 z-50">
          <div className="px-3.5 py-2 border-b border-portal-border/80">
            <p className="text-xs font-bold text-portal-ink">Ahmed Raza</p>
            <p className="text-[11px] text-portal-ink-muted">Role: <span className="font-bold text-portal-brand">{roleInfo.label}</span></p>
          </div>
          <p className="px-3.5 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-portal-ink-muted">Demo: role badal kar dekhein</p>
          {roles.map((r) => (
            <button key={r} type="button" role="menuitemradio" aria-checked={r === role} onClick={() => { setRole(r); menu.close(); }}
              className="w-full text-left px-3.5 py-2 hover:bg-portal-tint transition-colors">
              <span className={`text-xs font-bold ${r === role ? "text-portal-brand" : "text-portal-ink"}`}>{ROLES[r].label}{r === role ? " ✓" : ""}</span>
              <span className="block text-[11px] text-portal-ink-muted leading-tight">{ROLES[r].desc}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Campaigns wala topbar: search (/ se focus), currency, dark mode, notifications, avatar. */
export default function Topbar({ area = "portal" }) {
  const isAdmin = area === "admin";
  const { dark, toggleTheme } = usePortal();
  const searchRef = useRef(null);
  useHotkey("/", useCallback(() => searchRef.current?.focus(), []));
  return (
    <header className="portal-topbar flex items-center justify-between gap-4 mb-6">
      <div className={`${isAdmin ? "w-80" : "w-64"} max-w-xs relative shrink-0`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <input ref={searchRef} type="text" placeholder={isAdmin ? "Search tenants, logs, MSISDN, gateway traces…" : "Search campaigns, contacts…"} className="w-full pl-9 pr-8 py-2 text-xs bg-portal-surface text-portal-ink border border-portal-border/80 rounded-full shadow-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-portal-brand/20" />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <kbd className="text-[10px] font-semibold text-slate-400 bg-portal-tint px-1.5 py-0.5 rounded border border-portal-border">/</kbd>
        </div>
      </div>
      <div className="flex items-center gap-2.5 sm:gap-3">
        {isAdmin && <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full"><span className="w-2 h-2 rounded-full bg-emerald-500" />All Gateways 99.98%</span>}
        <CurrencySwitcher />
        <button type="button" aria-label="Toggle Theme" onClick={toggleTheme} className={`relative p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 ${pill}`}>
          {dark
            ? <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            : <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        </button>
        <button type="button" aria-label="Notifications" className={`relative p-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 ${pill}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-portal-accent rounded-full ring-2 ring-portal-surface" />
        </button>
        <UserMenu />
      </div>
    </header>
  );
}
