import { useEffect } from "react";
import { cx } from "../lib/cx.js";

/** Centered modal: Esc / overlay click se band. open + onClose controlled. */
export default function Modal({ open, onClose, children, className, overlayClassName, labelledBy }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}
      className={cx("fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4", overlayClassName)}>
      <div className={className}>{children}</div>
    </div>
  );
}
