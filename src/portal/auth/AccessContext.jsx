import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DEFAULT_ROLE, ROLES, ROLE_KEYS, hasPerm } from "./roles.js";

const ROLE_KEY = "nexmeg-portal-role";
const Ctx = createContext(null);

/**
 * Current user ka role + can(). Abhi role localStorage se aata hai (demo role-switcher).
 * Login/API judne par sirf `initialRole` ki jagah server se aaya hua role pass karein.
 */
export function AccessProvider({ children, initialRole }) {
  const [role, setRoleState] = useState(() => {
    if (initialRole && ROLES[initialRole]) return initialRole;
    try { const r = localStorage.getItem(ROLE_KEY); return ROLES[r] ? r : DEFAULT_ROLE; } catch { return DEFAULT_ROLE; }
  });
  const setRole = useCallback((r) => {
    if (!ROLES[r]) return;
    setRoleState(r);
    try { localStorage.setItem(ROLE_KEY, r); } catch { /* storage unavailable */ }
  }, []);
  /** Demo sign-out: saved demo role hata deta hai. Login judne par yahan session/token clear karein. */
  const signOut = useCallback(() => { try { localStorage.removeItem(ROLE_KEY); } catch { /* storage unavailable */ } }, []);
  const can = useCallback((perm) => hasPerm(role, perm), [role]);
  const value = useMemo(() => ({ role, roleInfo: ROLES[role], roles: ROLE_KEYS, setRole, can, signOut }), [role, setRole, can, signOut]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAccess() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAccess must be used inside <AccessProvider>");
  return v;
}

/** <Can perm="billing.manage">...</Can> — permission na ho to kuch render nahi hota. */
export function Can({ perm, children, fallback = null }) {
  const { can } = useAccess();
  return can(perm) ? children : fallback;
}
