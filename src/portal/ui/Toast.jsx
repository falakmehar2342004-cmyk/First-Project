import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import Icon from "./Icon.jsx";

/** Save/Send jaise placeholder buttons ke liye: const toast = useToast(); toast("Saved") */
const ToastCtx = createContext(() => {});
export function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const id = useRef(0);
  const push = useCallback((message, tone = "success") => {
    const key = ++id.current;
    setItems((l) => [...l, { key, message, tone }]);
    setTimeout(() => setItems((l) => l.filter((t) => t.key !== key)), 3500);
  }, []);
  const value = useMemo(() => push, [push]);
  return (
    <ToastCtx.Provider value={value}>
      {children}
      <div className="fixed bottom-5 right-5 z-[80] flex flex-col gap-2" aria-live="polite">
        {items.map((t) => (
          <div key={t.key} className="p-toast flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow-xl">
            <Icon name={t.tone === "success" ? "check_circle" : "info"} className="text-[18px] text-portal-mint" />{t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}
export const useToast = () => useContext(ToastCtx);
