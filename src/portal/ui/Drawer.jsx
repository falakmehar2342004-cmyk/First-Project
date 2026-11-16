import { useEffect } from "react";
import { cx } from "../lib/cx.js";

/** Right-side drawer. Modal jaisa behaviour (Esc, overlay click). */
export default function Drawer({ open, onClose, children, className }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs" onClick={onClose} />
      <div className={cx("relative h-full w-full max-w-2xl bg-portal-surface shadow-2xl overflow-y-auto", className)}>{children}</div>
    </div>
  );
}
