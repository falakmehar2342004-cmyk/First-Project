import { cx } from "../lib/cx.js";

const VARIANTS = {
  primary: "bg-portal-brand hover:bg-portal-brand/90 text-white shadow-sm",
  accent: "bg-portal-accent hover:bg-portal-accent-hover text-white shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98]",
  glass: "bg-white/15 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md",
  outline: "bg-portal-surface hover:bg-portal-tint text-portal-ink border border-portal-border",
  ghost: "text-portal-ink-soft hover:bg-portal-tint",
};
const SIZES = { sm: "px-3 py-1.5 text-xs rounded-lg", md: "px-4 py-2.5 text-sm rounded-xl", lg: "px-5 py-3 text-sm rounded-xl" };

/** <Button variant="accent" icon="add">New Campaign</Button> */
export default function Button({ variant = "primary", size = "md", icon, className, children, type = "button", ...rest }) {
  return (
    <button type={type} className={cx("inline-flex items-center justify-center gap-1.5 font-semibold transition-all disabled:opacity-50", VARIANTS[variant], SIZES[size], className)} {...rest}>
      {icon && <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{icon}</span>}
      {children}
    </button>
  );
}
