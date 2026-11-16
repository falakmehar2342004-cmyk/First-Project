import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

/** Portal ka shared state: dark mode, sidebar (pin / mobile), country+currency. */
const COUNTRIES = [
  { flag: "🇵🇰", name: "Pakistan", code: "PAK", currency: "PKR", balance: "PKR 84,200" },
  { flag: "🇸🇦", name: "Saudi Arabia", code: "SA", currency: "SAR", balance: "SAR 1,140" },
];
const THEME_KEY = "nexmeg-portal-theme";
const Ctx = createContext(null);

export function PortalProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(THEME_KEY) === "dark"; } catch { return false; }
  });
  const [pinned, setPinned] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRIES[0]);

  useEffect(() => {
    try { localStorage.setItem(THEME_KEY, dark ? "dark" : "light"); } catch { /* storage unavailable */ }
  }, [dark]);

  const toggleTheme = useCallback(() => setDark((v) => !v), []);
  const togglePin = useCallback(() => setPinned((v) => !v), []);
  const openMobile = useCallback(() => setMobileOpen(true), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  const value = useMemo(() => ({
    dark, toggleTheme, pinned, togglePin, mobileOpen, openMobile, closeMobile, toggleMobile,
    country, countries: COUNTRIES, selectCountry: setCountry,
  }), [dark, pinned, mobileOpen, country, toggleTheme, togglePin, openMobile, closeMobile, toggleMobile]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePortal() {
  const v = useContext(Ctx);
  if (!v) throw new Error("usePortal must be used inside <PortalProvider>");
  return v;
}
export const useCountry = () => { const { country } = usePortal(); return country; };
