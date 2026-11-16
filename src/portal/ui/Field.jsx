import { cx } from "../lib/cx.js";

const base = "w-full px-3.5 py-2.5 text-sm bg-portal-surface text-portal-ink border border-portal-border rounded-xl placeholder:text-portal-ink-muted focus:outline-none focus:ring-2 focus:ring-portal-brand/25 focus:border-portal-brand";

/** <Field label="Caption" hint="..."><Input .../></Field> */
export function Field({ label, hint, className, children }) {
  return (
    <label className={cx("block", className)}>
      {label && <span className="block text-xs font-bold text-portal-ink-soft mb-1.5">{label}</span>}
      {children}
      {hint && <span className="block text-[11px] text-portal-ink-muted mt-1">{hint}</span>}
    </label>
  );
}
export const Input = ({ className, ...p }) => <input className={cx(base, className)} {...p} />;
export const Textarea = ({ className, rows = 4, ...p }) => <textarea rows={rows} className={cx(base, "resize-none", className)} {...p} />;
export const Select = ({ className, options, ...p }) => (
  <select className={cx(base, "pr-8", className)} {...p}>
    {options.map((o) => { const v = typeof o === "string" ? { value: o, label: o } : o; return <option key={v.value} value={v.value}>{v.label}</option>; })}
  </select>
);
