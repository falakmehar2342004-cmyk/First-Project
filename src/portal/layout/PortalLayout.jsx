import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PortalProvider, usePortal } from "../context/PortalContext.jsx";
import { ToastProvider } from "../ui/index.js";
import { AccessProvider } from "../auth/AccessContext.jsx";
import RequireAccess from "../auth/RequireAccess.jsx";
import { cx } from "../lib/cx.js";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import "../theme/portal-theme.css";

/**
 * Portal + Admin ka overall size yahan se control hota hai.
 * Default browser size 16px hai. Chhota karna ho to 15px / 14px / 13px, bara karna ho to 17px.
 * Marketing site par asar nahi hota (portal se bahar jaate hi purana size wapas aa jata hai).
 */
const PORTAL_ROOT_FONT_SIZE = "15px";

function Shell({ area }) {
  const { dark, mobileOpen, toggleMobile, closeMobile } = usePortal();
  const { pathname } = useLocation();
  const mainRef = useRef(null);

  useEffect(() => { closeMobile(); mainRef.current?.scrollTo(0, 0); }, [pathname, closeMobile]);

  useEffect(() => {
    // marketing site ka theme/padding portal mein na ghuse; wapas jaane par restore ho
    const prev = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme = "portal";
    document.body.classList.add("portal-active");
    const prevSize = document.documentElement.style.fontSize;
    document.documentElement.style.fontSize = PORTAL_ROOT_FONT_SIZE;
    return () => { document.documentElement.style.fontSize = prevSize; document.body.classList.remove("portal-active"); if (prev) document.documentElement.dataset.theme = prev; };
  }, []);

  return (
    <div id="portal-root" className={cx("portal-root h-screen overflow-hidden bg-portal-page text-portal-ink antialiased selection:bg-portal-brand selection:text-white flex transition-colors duration-300", dark && "dark")}>
      <Sidebar area={area} />
      <div ref={mainRef} role="main" data-purpose="main-dashboard-body" className="flex-1 flex flex-col min-w-0 overflow-y-auto px-6 lg:px-8 py-5">
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