import { cx } from "../lib/cx.js";

/**
 * Filter tabs / chips (Campaigns ke status + channel filters wali tarah).
 * variant="tabs" -> pill-in-track,  variant="chips" -> solid brand chip,
 * variant="solid" -> full-size nav tabs (Analytics wali).
 */
export default function Segmented({ options, value, onChange, variant = "tabs", className }) {
  const items = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <div role="tablist" className={cx(variant === "tabs" ? "inline-flex p-1 rounded-xl bg-portal-tint gap-0.5 overflow-x-auto" : variant === "solid" ? "flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0" : "flex flex-wrap gap-2", className)}>
      {items.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" role="tab" aria-selected={active} onClick={() => onChange(o.value)}
            className={cx("whitespace-nowrap transition-colors", variant === "solid" ? "text-[13px]" : "text-xs",
              variant === "solid"
                ? cx("px-4 py-2 rounded-xl font-semibold", active ? "bg-portal-brand-deep text-white shadow-sm" : "text-portal-ink-soft hover:bg-portal-tint hover:text-portal-ink")
                : variant === "tabs"
                ? cx("px-3.5 py-1.5 rounded-lg", active ? "bg-portal-surface text-portal-ink shadow-xs font-bold" : "text-portal-ink-soft font-semibold hover:text-portal-ink")
                : cx("px-3 py-1.5 rounded-full", active ? "bg-portal-brand text-white font-bold" : "bg-portal-tint text-portal-ink-soft font-medium hover:bg-portal-tint-2"))}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
