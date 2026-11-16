import { NavLink, useNavigate } from "react-router-dom";
import { usePortal } from "../context/PortalContext.jsx";
import { useAccess } from "../auth/AccessContext.jsx";
import { cx } from "../lib/cx.js";
import { NAV_ACCOUNT, NAV_ADMIN, NAV_MAIN } from "./nav.js";

function NavIcon({ icon }) {
  const cls = "w-5 h-5 shrink-0";
  if (icon && icon.ms) return <span aria-hidden="true" className="material-symbols-outlined text-[22px] w-5 h-5 shrink-0 flex items-center justify-center">{icon.ms}</span>;
  if (icon === "grid") {
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect height="7" rx="1.5" width="7" x="3" y="3" /><rect height="7" rx="1.5" width="7" x="14" y="3" />
        <rect height="7" rx="1.5" width="7" x="14" y="14" /><rect height="7" rx="1.5" width="7" x="3" y="14" />
      </svg>
    );
  }
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      {icon.map((d) => <path key={d} d={d} strokeLinecap="round" strokeLinejoin="round" />)}
    </svg>
  );
}

function NavItem({ to, label, end, badge, icon }) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) => cx(
      "has-tooltip group/item relative flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all",
      isActive ? "bg-portal-brand text-white shadow-sm" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800")}>
      <div className="flex items-center gap-3">
        <NavIcon icon={icon} />
        <span className="sidebar-text">{label}</span>
      </div>
      {badge && <span className="sidebar-text px-2 py-0.5 text-xs font-bold rounded-full bg-portal-accent text-white">{badge}</span>}
      <span className="tooltip-bubble absolute left-14 ml-2 px-2.5 py-1 bg-slate-900 text-white text-xs font-semibold rounded-md shadow-lg pointer-events-none whitespace-nowrap z-50">
        {label}{badge ? ` (${badge})` : ""}
      </span>
    </NavLink>
  );
}

/** Campaigns wali sidebar: hover par khulti hai, pin ho sakti hai, mobile par slide-in. */
export default function Sidebar({ area = "portal" }) {
  const { pinned, togglePin, mobileOpen, closeMobile } = usePortal();
  const { can, signOut } = useAccess();
  const navigate = useNavigate();
  const visible = (list) => list.filter((n) => can(n.perm));
  const isAdmin = area === "admin";
  const expanded = pinned || mobileOpen;
  const onPin = () => (window.innerWidth < 768 ? closeMobile() : togglePin());
  return (
    <>
      {mobileOpen && <div className="md:hidden fixed inset-0 z-50 bg-slate-900/45" onClick={closeMobile} aria-hidden="true" />}
      <aside id="main-sidebar" data-purpose="sidebar-navigation"
        className={cx("sidebar-collapsed transition-all duration-300 ease-in-out bg-portal-sidebar border-r border-portal-border/80 flex flex-col justify-between shrink-0 min-h-screen p-3.5 z-[60] group select-none shadow-sm", expanded && "force-expanded", isAdmin && "md:sticky md:top-0 md:self-start md:h-screen")}>
        <div>
          <div className="flex items-center justify-between px-0 py-3 mb-6 relative">
            <div className="flex items-center gap-3 overflow-hidden cursor-pointer" onClick={onPin} title="Click to pin / toggle sidebar">
              <div className="w-8 h-8 rounded-xl bg-portal-brand text-white flex items-center justify-center shadow-md shadow-portal-brand/20 shrink-0 group-hover:scale-105 transition-transform">
                <span className="leading-none text-xl font-black">n</span>
              </div>
              <div className="sidebar-text">
                <h1 className="font-bold text-base tracking-tight text-portal-ink leading-none">nExMeg</h1>
                <span className="text-xs text-portal-ink-muted font-medium">{isAdmin ? "Admin Panel" : "Business Portal"}</span>
              </div>
            </div>
            <button id="sidebar-pin-btn" type="button" onClick={onPin} title="Lock sidebar open"
              className={cx("sidebar-text p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors", pinned ? "text-portal-brand" : "text-slate-400 hover:text-slate-700 dark:hover:text-slate-200")}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <nav aria-label="Main Navigation" className="space-y-1.5">{visible(isAdmin ? NAV_ADMIN : NAV_MAIN).map((n) => <NavItem key={n.to} {...n} />)}</nav>
          {!isAdmin && visible(NAV_ACCOUNT).length > 0 && (
            <>
              <div className="mt-8 mb-2 px-3 overflow-hidden">
                <span className="sidebar-text text-[11px] font-bold tracking-wider text-portal-ink-muted uppercase block">Account</span>
                <div className="w-full h-px bg-portal-border group-hover:hidden my-2" />
              </div>
              <div className="space-y-1">{visible(NAV_ACCOUNT).map((n) => <NavItem key={n.to} {...n} />)}</div>
            </>
          )}
          {can("admin.access") && (
            <div className="mt-6 pt-3 border-t border-portal-border/80 space-y-1">
              <NavItem {...(isAdmin ? { to: "/portal", label: "Business Portal", icon: "grid", end: true } : { to: "/admin", label: "Admin Panel", icon: "grid", end: true })} />
            </div>
          )}
        </div>
        {isAdmin && (
          <div className="pt-3 border-t border-portal-border/80">
            <button type="button" id="admin-signout" onClick={() => { signOut(); navigate("/"); }}
              className="has-tooltip relative w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm text-portal-danger hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
              <span aria-hidden="true" className="material-symbols-outlined text-[22px] w-5 h-5 shrink-0 flex items-center justify-center">logout</span>
              <span className="sidebar-text">Sign Out</span>
              <span className="tooltip-bubble absolute left-14 ml-2 px-2.5 py-1 bg-slate-900 text-white text-xs font-semibold rounded-md shadow-lg pointer-events-none whitespace-nowrap z-50">Sign Out</span>
            </button>
          </div>
        )}
        <div className={cx("sidebar-text", isAdmin && "hidden")}>
          <div className="bg-[#f7ede2]/80 dark:bg-amber-950/20 border border-[#edd7c4] dark:border-amber-900/40 p-3.5 rounded-2xl" data-purpose="account-quota-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-portal-ink">Business Pro</span>
              <span className="text-[10px] font-semibold text-portal-brand-deep bg-portal-brand/10 px-2 py-0.5 rounded-full border border-portal-brand/25">Active</span>
            </div>
            <div className="w-full bg-slate-200/80 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden mb-2"><div className="bg-amber-500 h-1.5 rounded-full" style={{ width: "68%" }} /></div>
            <p className="text-[11px] text-portal-ink-muted font-medium leading-tight">68% of monthly quota used</p>
          </div>
        </div>
      </aside>
    </>
  );
}
