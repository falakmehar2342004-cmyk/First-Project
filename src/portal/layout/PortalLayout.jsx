import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PortalProvider, usePortal } from "../context/PortalContext.jsx";
import { ToastProvider } from "../ui/index.js";
import { AccessProvider } from "../auth/AccessContext.jsx";
import RequireAccess from "../auth/RequireAccess.jsx";
import { cx } from "../lib/cx.js";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import "../theme/portal-theme.css";

function Shell({ area }) {
  const { dark, mobileOpen, toggleMobile, closeMobile } = usePortal();
  const { pathname } = useLocation();

  useEffect(() => { closeMobile(); window.scrollTo(0, 0); }, [pathname, closeMobile]);

  useEffect(() => {
    // marketing site ka theme/padding portal mein na ghuse; wapas jaane par restore ho
    const prev = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = "portal";
    document.body.classList.add("portal-active");
    return () => { document.body.classList.remove("portal-active"); if (prev) document.documentElement.dataset.theme = prev; };
  }, []);

  return (
    <div id="portal-root" className={cx("portal-root min-h-screen bg-portal-page text-portal-ink antialiased selection:bg-portal-brand selection:text-white flex transition-colors duration-300", dark && "dark")}>
      <Sidebar area={area} />
      <div role="main" data-purpose="main-dashboard-body" className="flex-1 flex flex-col min-w-0 overflow-y-auto px-6 lg:px-8 py-5">
        <button type="button" aria-label="Open menu" aria-expanded={mobileOpen} onClick={toggleMobile}
          className="md:hidden self-start mb-3 p-2 rounded-xl bg-portal-surface border border-portal-border/80 text-portal-ink-soft">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" /></svg>
        </button>
        <Topbar area={area} />
        {area === "admin" ? <RequireAccess perm="admin.access"><Outlet /></RequireAccess> : <Outlet />}
      </div>
    </div>
  );
}

/** Saare /portal/* pages ka ek hi shell: Sidebar + Topbar + theme + toasts. */
export default function PortalLayout({ area = "portal" }) {
  return <AccessProvider><PortalProvider><ToastProvider><Shell area={area} /></ToastProvider></PortalProvider></AccessProvider>;
}
