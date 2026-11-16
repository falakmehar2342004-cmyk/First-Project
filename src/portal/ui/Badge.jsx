import { cx } from "../lib/cx.js";
const TONES = {
  brand: "bg-portal-brand/10 text-portal-brand-deep border-portal-brand/25",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800",
  warning: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800",
  danger: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800",
  neutral: "bg-portal-tint text-portal-ink-soft border-portal-border",
  accent: "bg-portal-accent text-white border-transparent",
};
export default function Badge({ tone = "neutral", dot = false, className, children }) {
  return (
    <span className={cx("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border", TONES[tone], className)}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}
