import { cx } from "../lib/cx.js";
/** Wizard header: <Stepper steps={["Channel","Audience"]} current={0} /> (current 0-based). */
export default function Stepper({ steps, current, className }) {
  return (
    <ol className={cx("flex items-center gap-2 overflow-x-auto", className)}>
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2 shrink-0">
          <span className={cx("w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center border", i < current ? "bg-portal-brand text-white border-portal-brand" : i === current ? "bg-portal-brand/10 text-portal-brand-deep border-portal-brand" : "bg-portal-tint text-portal-ink-muted border-portal-border")}>{i < current ? "✓" : i + 1}</span>
          <span className={cx("text-xs font-bold", i === current ? "text-portal-ink" : "text-portal-ink-muted")}>{s}</span>
          {i < steps.length - 1 && <span className="w-6 h-px bg-portal-border" />}
        </li>
      ))}
    </ol>
  );
}
