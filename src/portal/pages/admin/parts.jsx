import { Link } from "react-router-dom";
import { Badge, Card, Icon } from "../../ui/index.js";
import { cx } from "../../lib/cx.js";

/** Admin pages ke chhote shared tukde. Sab portal theme tokens use karte hain (dark mode khud chalta hai). */

export function Crumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted">
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-1.5">
          {i > 0 && <Icon name="chevron_right" className="text-[14px]" />}
          {it.to ? <Link to={it.to} className="hover:text-portal-brand transition-colors">{it.label}</Link> : <span className="text-portal-brand-deep">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

/** Page ka wrapper: @container taake layout sidebar ke khulne/band hone par content ki chauraai ke hisab se adjust ho. */
export function Page({ crumbs, children }) {
  return (
    <div className="@container space-y-6 w-full min-w-0">
      {crumbs && <Crumbs items={crumbs} />}
      {children}
    </div>
  );
}

export function Section({ title, sub, right, children, className, bodyClass = "p-5" }) {
  return (
    <Card className={cx("min-w-0", className)}>
      {(title || right) && (
        <div className="flex flex-wrap items-start justify-between gap-3 px-5 pt-5">
          <div className="min-w-0">
            <h3 className="text-base font-extrabold text-portal-ink">{title}</h3>
            {sub && <p className="text-xs text-portal-ink-muted mt-0.5">{sub}</p>}
          </div>
          {right}
        </div>
      )}
      <div className={bodyClass}>{children}</div>
    </Card>
  );
}

const TONE_BG = { brand: "bg-portal-brand/10 text-portal-brand-deep", danger: "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300", warning: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300", info: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-300" };
export function IconBox({ icon, tone = "brand", className }) {
  return <span className={cx("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", TONE_BG[tone], className)}><Icon name={icon} className="text-[20px]" /></span>;
}

/** KPI card (admin screens ke 4-card rows). */
export function Kpi({ icon, label, value, sub, badge, badgeTone = "brand", tone = "brand", danger }) {
  return (
    <Card hover className={cx("p-5", danger && "border-red-300/70 dark:border-red-900/60")}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted">{label}</p>
          <p className="text-2xl font-black tracking-tight text-portal-ink mt-1 leading-tight">{value}</p>
        </div>
        <IconBox icon={icon} tone={tone} />
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-portal-ink-soft">
        {badge && <Badge tone={badgeTone}>{badge}</Badge>}
        {sub && <span className="font-medium">{sub}</span>}
      </div>
    </Card>
  );
}

export function Meter({ pct, tone = "brand", className }) {
  const bar = { brand: "bg-portal-brand", warning: "bg-amber-500", danger: "bg-red-500", accent: "bg-portal-accent" }[tone];
  return <div className={cx("h-1.5 rounded-full bg-portal-tint overflow-hidden", className)}><div className={cx("h-full rounded-full", bar)} style={{ width: `${Math.min(100, pct)}%` }} /></div>;
}

export function Avatar({ text, className }) {
  return <span className={cx("w-10 h-10 rounded-xl bg-portal-brand/10 text-portal-brand-deep font-extrabold text-xs flex items-center justify-center shrink-0", className)}>{text}</span>;
}

export function SearchBox({ value, onChange, placeholder, className }) {
  return (
    <div className={cx("relative", className)}>
      <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-portal-ink-muted" />
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full pl-9 pr-3 py-2.5 text-sm bg-portal-surface text-portal-ink border border-portal-border rounded-xl placeholder:text-portal-ink-muted focus:outline-none focus:ring-2 focus:ring-portal-brand/25 focus:border-portal-brand" />
    </div>
  );
}

export function Pager({ page, pages, onPage, label }) {
  const btn = "min-w-8 h-8 px-2 rounded-lg text-xs font-bold transition-colors disabled:opacity-40";
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-portal-border/70 text-xs text-portal-ink-muted">
      <span className="font-medium">{label}</span>
      <div className="flex items-center gap-1">
        <button type="button" disabled={page <= 1} onClick={() => onPage(page - 1)} className={cx(btn, "bg-portal-tint text-portal-ink-soft")}>Previous</button>
        {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
          <button key={n} type="button" onClick={() => onPage(n)} className={cx(btn, n === page ? "bg-portal-brand text-white" : "bg-portal-tint text-portal-ink-soft hover:bg-portal-tint-2")}>{n}</button>
        ))}
        <button type="button" disabled={page >= pages} onClick={() => onPage(page + 1)} className={cx(btn, "bg-portal-tint text-portal-ink-soft")}>Next</button>
      </div>
    </div>
  );
}

/** Dependency-free SVG area/line chart. series: [{ data:[numbers], color }] */
export function AreaChart({ series, labels, height = 180 }) {
  const W = 600; const H = height; const pad = 8;
  const all = series.flatMap((s) => s.data); const max = Math.max(...all) * 1.1; const min = Math.min(...all) * 0.8;
  const x = (i, n) => pad + (i * (W - pad * 2)) / (n - 1);
  const y = (v) => H - pad - ((v - min) / (max - min)) * (H - pad * 2);
  const path = (d) => d.map((v, i) => `${i ? "L" : "M"}${x(i, d.length).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full" style={{ height }} role="img" aria-label="Trend chart">
        {[0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="currentColor" className="text-portal-border" strokeDasharray="4 4" />)}
        {series.map((s, si) => (
          <g key={si}>
            {si === 0 && <path d={`${path(s.data)} L${W - pad},${H} L${pad},${H} Z`} fill={s.color} opacity="0.12" />}
            <path d={path(s.data)} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          </g>
        ))}
      </svg>
      {labels && <div className="flex justify-between text-[10px] font-semibold text-portal-ink-muted mt-1.5">{labels.map((l) => <span key={l}>{l}</span>)}</div>}
    </div>
  );
}

export function Donut({ parts, center, sub, size = 150 }) {
  const total = parts.reduce((a, p) => a + p.value, 0); const r = 54; const c = 2 * Math.PI * r; let off = 0;
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 140 140" className="-rotate-90 w-full h-full">
        <circle cx="70" cy="70" r={r} fill="none" stroke="currentColor" className="text-portal-tint" strokeWidth="14" />
        {parts.map((p) => { const len = (p.value / total) * c; const el = <circle key={p.label} cx="70" cy="70" r={r} fill="none" stroke={p.color} strokeWidth="14" strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-off} strokeLinecap="butt" />; off += len; return el; })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xl font-black text-portal-ink leading-none">{center}</span>
        <span className="text-[9px] font-bold uppercase tracking-wider text-portal-ink-muted mt-1">{sub}</span>
      </div>
    </div>
  );
}

export const statusTone = (s) => ({ Active: "success", Completed: "success", Settled: "success", Paid: "success", Approved: "success", Operational: "success", Optimal: "success", Continuous: "brand", Trial: "warning", Pending: "warning", Scheduled: "neutral", Degraded: "warning", Investigating: "neutral", Throttled: "danger", Suspended: "danger" }[s] || (s.startsWith("Sending") || s.startsWith("Retry") ? "warning" : "neutral"));
