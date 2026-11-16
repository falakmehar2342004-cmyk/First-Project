import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, DataTable, Icon, PageHero, Segmented, Select, useToast } from "../../ui/index.js";
import { AreaChart, Avatar, Donut, Kpi, Meter, Page, Section, statusTone } from "./parts.jsx";
import { DLR_ROUTES, LEADERS } from "./adminData.js";

const RANGES = { Hourly: { labels: ["00h", "06h", "12h", "18h", "Now"], a: [0.8, 0.6, 1.5, 1.9, 1.4], b: [0.3, 0.2, 0.5, 0.6, 0.5] }, Daily: { labels: ["Oct 14", "Oct 19", "Oct 24", "Oct 29", "Nov 03", "Nov 08 (Peak)", "Nov 10"], a: [1.1, 1.4, 1.2, 1.6, 1.5, 1.84, 1.5], b: [0.5, 0.6, 0.55, 0.65, 0.6, 0.64, 0.6] }, Weekly: { labels: ["W1", "W2", "W3", "W4"], a: [8.2, 9.4, 10.8, 11.6], b: [3.1, 3.4, 3.8, 4.1] } };

export default function PlatformAnalytics() {
  const toast = useToast();
  const [range, setRange] = useState("Daily");
  const [period, setPeriod] = useState("Last 30 Days");
  const [corr, setCorr] = useState("All Corridors");
  const [filter, setFilter] = useState("All");
  const [approved, setApproved] = useState(false);
  const r = RANGES[range];
  const routes = useMemo(() => DLR_ROUTES.filter((d) => filter === "All" || (filter === "Degraded" ? d.status !== "Optimal" : d.status === "Optimal")), [filter]);
  const cols = [
    { key: "name", label: "Carrier / Route Node", render: (d) => <div className="flex items-center gap-3 min-w-[12rem]"><Avatar text={d.ini} className="w-9 h-9" /><div><p className="font-bold">{d.name}</p><p className="text-xs text-portal-ink-muted">{d.sub}</p></div></div> },
    { key: "vol", label: "Volume", className: "font-bold" },
    { key: "dlr", label: "Success (DLR)", render: (d) => <div className="w-32"><span className="text-xs font-bold">{d.dlr}%</span><Meter pct={d.dlr} tone={d.dlr < 96 ? "danger" : "brand"} className="mt-1" /></div> },
    { key: "err", label: "Dominant Error Pattern", render: (d) => <code className="px-1.5 py-0.5 rounded bg-portal-tint font-mono text-[10px]">{d.err}</code> },
    { key: "lat", label: "Latency" },
    { key: "status", label: "Status", render: (d) => <Badge tone={statusTone(d.status)} dot>{d.status}</Badge> },
  ];
  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Intelligence & BI" }, { label: "Platform Analytics & Intelligence" }]}>
      <PageHero badge="Global Operations & Yield Matrix" title="Platform Analytics & Intelligence" description="Global infrastructure traffic, corridor margins, AI anomaly detection, and cross-channel delivery intelligence."
        actions={<><Button variant="glass" icon="download" onClick={() => toast("BI dossier export (demo)", "info")}>Export BI Dossier</Button><Button variant="accent" icon="event_repeat" onClick={() => toast("Executive report schedule ho gayi (demo)")}>Schedule Executive Report</Button></>}>
        <div className="relative mt-5 pt-4 border-t border-white/20 grid grid-cols-1 @2xl:grid-cols-3 gap-3 text-slate-800">
          <Select value={period} onChange={(e) => setPeriod(e.target.value)} options={["Last 7 Days", "Last 30 Days", "Last 90 Days"]} aria-label="Period" />
          <Select value={corr} onChange={(e) => setCorr(e.target.value)} options={["All Corridors", "Pakistan (+92)", "Saudi (+966)", "UAE (+971)"]} aria-label="Corridor" />
          <Select options={["All Channels (WhatsApp, SMPP, Voice)", "WhatsApp", "SMPP", "Voice"]} aria-label="Channel" />
        </div>
      </PageHero>

      <div className="flex flex-wrap gap-2 text-[11px] font-bold text-portal-ink-soft">{["Engine Sync: Real-time", "Data Lag: < 1.2s", "Telemetry Pods: 16/16 Healthy", `${period} • ${corr}`].map((t) => <span key={t} className="px-3 py-1 rounded-full bg-portal-surface border border-portal-border">{t}</span>)}</div>

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="send" label="Total platform volume" value="48.2M" badge="+14.8% MoM" sub="99.4% platform uptime" />
        <Kpi icon="account_balance_wallet" label="Net gross margin" value="PKR 18.4M" badge="Avg 28.4% yield" sub="WA Cloud +4.2%" />
        <Kpi icon="mark_chat_read" label="Overall delivery rate" value="97.8%" badge="Target > 96.5%" sub="Latency 1.4s" />
        <Kpi icon="psychology_alt" label="AI anomaly alerts" value="2 Minor" badge="Mitigating" badgeTone="warning" tone="warning" sub="0 P0 outages" />
      </div>

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <Section className="@5xl:col-span-2" title="Multi-Channel Throughput & Peak Volume" sub="Aggregate dispatches across Meta Cloud API, Direct SS7/SMPP and IVR gateway nodes" right={<Segmented variant="tabs" value={range} onChange={setRange} options={Object.keys(RANGES)} />}>
          <div className="flex flex-wrap gap-3 text-[11px] font-bold mb-3"><span className="text-portal-brand">● WhatsApp (62%)</span><span className="text-portal-accent">● Telco SMPP (26%)</span><span className="text-portal-ink-muted">Max Peak: 1,840 TPS on Oct 31 (Payday Rush)</span></div>
          <AreaChart height={240} labels={r.labels} series={[{ data: r.a, color: "#0f9f8f" }, { data: r.b, color: "#ff6b4a" }]} />
        </Section>
        <div className="space-y-6 min-w-0">
          <Section title="Corridor Profitability" sub="Regional routing breakdown and gross take-rate" bodyClass="p-5 space-y-3 text-xs">
            {[["Pakistan Corridor (+92)", "31.2% Margin", "Volume: 36.4M", "Rev: PKR 42.8M"], ["Saudi Corridor (+966)", "34.5% Margin", "Volume: 8.6M", "Rev: SAR 640k"], ["UAE & Gulf (+971)", "27.8% Margin", "Volume: 3.2M", "Rev: AED 280k"]].map(([n, m, v, rv]) => <div key={n} className="p-3 rounded-xl bg-portal-tint"><div className="flex justify-between"><b className="text-portal-ink">{n}</b><Badge tone="success">{m}</Badge></div><p className="flex justify-between text-portal-ink-muted mt-1"><span>{v}</span><span>{rv}</span></p></div>)}
          </Section>
          <Card className="p-5 border-t-4 border-t-portal-brand space-y-3">
            <div className="flex items-center justify-between"><h3 className="font-extrabold text-portal-ink flex items-center gap-2"><Icon name="auto_awesome" className="text-[18px] text-portal-brand" />AI Capacity Guard</h3><Badge tone="brand" dot>Live Forecast</Badge></div>
            <p className="text-xs text-portal-ink-muted">Predictive model trained on historic holiday seasons and tenant batch schedules.</p>
            <div className="p-3 rounded-xl bg-portal-tint text-xs"><b className="text-portal-ink">+18.4% Peak Load Expected (Nov 15–18)</b><p className="text-portal-ink-muted mt-1">Flash sale campaigns by FlashCart &amp; Khaadi will push TPS past 2,100 msgs/sec threshold.</p></div>
            <ul className="text-xs text-portal-ink-soft space-y-1.5">{["Pre-scale Meta Cloud ingestion (+4 pods)", "Switch secondary SMPP bind for Jazz 18:00–22:00"].map((m) => <li key={m} className="flex gap-2"><Icon name="check_circle" className="text-[16px] text-portal-brand" />{m}</li>)}</ul>
            <Button className="w-full" disabled={approved} icon="shield" onClick={() => { setApproved(true); toast("Auto-scaling guardrails approve ho gaye (demo)"); }}>{approved ? "Guardrails Approved" : "Approve Auto-Scaling Guardrails"}</Button>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <Section className="@5xl:col-span-2" title="Gateway DLR Forensics & Error Diagnostics" sub="Route-level drop analysis, carrier rejections and upstream throttles"
          right={<Segmented variant="chips" value={filter} onChange={setFilter} options={[{ value: "All", label: "All Diagnostic Events" }, { value: "Optimal", label: "Optimal" }, { value: "Degraded", label: "Degraded / Investigating" }]} />} bodyClass="p-0 pt-3">
          <DataTable columns={cols} rows={routes} empty="Koi route nahi." />
        </Section>
        <Section title="Channel Distribution" right={<span className="text-[11px] text-portal-ink-muted">30 Days</span>} bodyClass="p-5 space-y-4">
          <Donut center="48.2M" sub="Dispatches" parts={[{ label: "wa", value: 64, color: "#00685f" }, { label: "sms", value: 24, color: "#0f9f8f" }, { label: "voice", value: 12, color: "#ff6b4a" }]} />
          {[["WhatsApp Cloud", "29.8M", "64%", "bg-[#00685f]"], ["Direct Telco SMS", "11.2M", "24%", "bg-[#0f9f8f]"], ["Voice OTP & IVR", "5.6M", "12%", "bg-portal-accent"]].map(([n, v, p, c]) => <p key={n} className="flex items-center gap-2 text-xs"><span className={`w-2.5 h-2.5 rounded-full ${c}`} /><span className="text-portal-ink-soft">{n}</span><b className="ml-auto text-portal-ink">{v}</b><span className="text-portal-ink-muted w-8 text-right">{p}</span></p>)}
        </Section>
      </div>

      <Section title="Tenant Volume & Yield Leaderboard" sub="Top 5 of 342 active tenants" bodyClass="p-5 space-y-2.5">
        {LEADERS.map((l) => (
          <Link key={l.id} to={`/admin/businesses/${l.tid}`} className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-portal-tint hover:bg-portal-tint-2 transition-colors">
            <span className="text-xs font-black text-portal-ink-muted w-5">0{l.id}</span><Avatar text={l.ini} /><div className="min-w-0 flex-1"><p className="font-bold text-portal-ink">{l.name} <Badge tone="brand">{l.tag}</Badge></p><p className="text-xs text-portal-ink-muted">{l.sub}</p></div>
            <div className="text-right"><p className="font-extrabold text-portal-ink">{l.msgs}</p><p className="text-[11px] text-portal-ink-muted">{l.flow}</p></div><div className="text-right w-28"><p className="font-extrabold text-portal-brand-deep">{l.rev}</p><p className="text-[11px] text-portal-ink-muted">Gross margin</p></div>
          </Link>
        ))}
      </Section>
      <p className="text-[11px] text-portal-ink-muted text-center">Kafka event bus: 0 lag • Retention: 90 days hot / 365 days cold • Demo data</p>
    </Page>
  );
}
