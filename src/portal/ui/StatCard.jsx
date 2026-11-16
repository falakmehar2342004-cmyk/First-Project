import Card from "./Card.jsx";
import Icon from "./Icon.jsx";
import { cx } from "../lib/cx.js";

/** KPI card: icon + label + value (+ delta). tone = theme ka rang. */
export default function StatCard({ icon, label, value, delta, deltaTone = "up", tone = "brand", className, children }) {
  const iconTone = { brand: "bg-portal-brand", accent: "bg-portal-accent", deep: "bg-portal-brand-deep", violet: "bg-violet-600" }[tone] || "bg-portal-brand";
  return (
    <Card hover className={cx("p-5 flex items-center gap-4", className)}>
      {icon && <div className={cx("w-12 h-12 rounded-2xl text-white flex items-center justify-center shrink-0", iconTone)}><Icon name={icon} className="text-[24px]" /></div>}
      <div className="min-w-0">
        <p className="text-xs font-semibold text-portal-ink-muted uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-extrabold tracking-tight text-portal-ink leading-tight">{value}</p>
        {delta && <p className={cx("text-xs font-bold", deltaTone === "up" ? "text-emerald-600 dark:text-emerald-400" : "text-portal-danger")}>{delta}</p>}
        {children}
      </div>
    </Card>
  );
}
