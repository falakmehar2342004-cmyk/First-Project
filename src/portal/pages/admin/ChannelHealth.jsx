import { useState } from "react";
import { Badge, Button, Card, Field, Icon, Input, Modal, PageHero, Segmented, Toggle, useToast } from "../../ui/index.js";
import { AreaChart, IconBox, Kpi, Meter, Page, Section } from "./parts.jsx";
import { CARRIERS, FAILOVER, GW_EVENTS, SECURITY_ITEMS } from "./adminData.js";

const GROUPS = [{ value: "all", label: "All (6)" }, { value: "wa", label: "WhatsApp Meta (1)" }, { value: "telco", label: "Telco SMPP (4)" }, { value: "email", label: "Email & Voice (1)" }];
const SERIES = {
  latency: { unit: "Latency (ms)", a: [112, 108, 120, 135, 170, 210, 142], b: [190, 180, 205, 230, 280, 250, 160] },
  tps: { unit: "TPS Rate", a: [320, 340, 360, 410, 470, 440, 420], b: [300, 310, 330, 380, 420, 400, 390] },
  error: { unit: "Error %", a: [0.4, 0.3, 0.5, 0.4, 0.6, 0.3, 0.2], b: [1.1, 0.9, 1.4, 1.8, 2.6, 1.7, 1.2] },
};

export default function ChannelHealth() {
  const toast = useToast();
  const [grp, setGrp] = useState("all");
  const [metric, setMetric] = useState("latency");
  const [rules, setRules] = useState(Object.fromEntries(FAILOVER.map((f) => [f.id, f.on])));
  const [modal, setModal] = useState(null);
  const [probing, setProbing] = useState(false);
  const list = CARRIERS.filter((c) => grp === "all" || c.grp === grp);
  const s = SERIES[metric];
  const probe = () => { setProbing(true); setTimeout(() => { setProbing(false); toast("Health ping complete — 18/18 binds responsive"); }, 1200); };
  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Infrastructure & Connectivity" }, { label: "Channel & API Gateway Health" }]}>
      <PageHero badge="Global Gateway SLA: 99.98%" title="Channel & Gateway Telemetry"
        description="Real-time gateway telemetry, throughput caps (TPS), latency metrics, circuit breakers, and automatic failover controls across regional telco clusters."
        actions={<><Button variant="glass" icon="vital_signs" disabled={probing} onClick={probe}>{probing ? "Pinging…" : "Run Diagnostics & Health Ping"}</Button><Button variant="glass" icon="tune" onClick={() => setModal("breaker")}>Circuit Breaker Rules</Button><Button variant="accent" icon="bolt" onClick={() => setModal("failover")}>Manage Failover</Button></>} />

      <div className="flex flex-wrap gap-2 text-[11px] font-bold text-portal-ink-soft">{["PK-KHI & KSA-RUH Multi-Region Sync", "18 SMPP Transceivers", "4 Meta Cloud Nodes", "6 Webhook Edge Workers", "Telemetry polling: every 2s"].map((t) => <span key={t} className="px-3 py-1 rounded-full bg-portal-surface border border-portal-border">{t}</span>)}</div>

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="speed" label="Peak throughput" value="1,420 TPS" badge="+14.2%" sub="Capacity 3,000 TPS • 47.3% load" />
        <Kpi icon="timer" label="Average latency" value="142 ms" badge="Optimal < 250ms" sub="WhatsApp 118ms • SMPP 180ms" />
        <Kpi icon="task_alt" label="24h delivery success" value="99.82%" badge="Target 99.5%" sub="Failed 0.18% • 4.82M total" />
        <Kpi icon="electrical_services" label="Circuit breakers" value="0 Tripped" badge="1 in throttle" badgeTone="warning" tone="warning" sub="Routes healthy 7/8" />
      </div>

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <div className="@5xl:col-span-2 space-y-6 min-w-0">
          <Section title="Carrier Connections & Regional Binds" sub="Live status of Meta Cloud APIs, SMPP transceivers & SMTP clusters" right={<Segmented variant="chips" value={grp} onChange={setGrp} options={GROUPS} />} bodyClass="p-5 space-y-3">
            {list.map((c) => (
              <div key={c.id} className={`rounded-2xl p-4 border ${c.warn ? "border-red-300 dark:border-red-900 bg-red-50/60 dark:bg-red-950/20" : "border-portal-border bg-portal-tint/50"}`}>
                <div className="flex flex-wrap items-start gap-3">
                  <IconBox icon={c.icon} tone={c.warn ? "danger" : "brand"} />
                  <div className="min-w-0 flex-1"><p className="font-bold text-portal-ink leading-tight">{c.name} <Badge tone={c.warn ? "danger" : "success"} dot className="ml-1 align-middle">{c.state}</Badge></p><p className={`text-xs mt-0.5 ${c.warn ? "text-red-700 dark:text-red-300 font-semibold" : "text-portal-ink-muted"}`}>{c.sub}</p></div>
                  <Button size="sm" variant="outline" onClick={() => toast(`${c.name.split("(")[0].trim()} — ${c.warn ? "manual reroute shuru (demo)" : "logs khul rahe hain (demo)"}`, "info")}>{c.warn ? "Manual Reroute" : "View Logs"}</Button>
                </div>
                <div className="grid grid-cols-2 @3xl:grid-cols-4 gap-2 mt-3">{c.stats.map(([l, v]) => <div key={l} className="p-2.5 rounded-xl bg-portal-surface border border-portal-border/70"><p className="text-[10px] font-bold uppercase text-portal-ink-muted">{l}</p><p className={`text-sm font-black ${c.warn && /97|340|85%|Shifted/.test(v) ? "text-portal-danger" : "text-portal-brand-deep"}`}>{v}</p></div>)}</div>
              </div>
            ))}
          </Section>
          <Section title="Real-Time Latency & Dispatched Trend" sub="Live comparative telemetry: WhatsApp API vs Direct Carrier SMPP"
            right={<Segmented variant="tabs" value={metric} onChange={setMetric} options={[{ value: "latency", label: "Latency (ms)" }, { value: "tps", label: "TPS Rate" }, { value: "error", label: "Error %" }]} />}>
            <div className="flex gap-4 text-[11px] font-bold mb-2"><span className="text-portal-brand">● WhatsApp Meta Cloud</span><span className="text-portal-accent">● Telco SMPP Aggregated</span><span className="ml-auto text-portal-ink-muted">Unit: {s.unit}</span></div>
            <AreaChart height={200} labels={["12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM (Surge)", "Now (Live)"]} series={[{ data: s.a, color: "#0f9f8f" }, { data: s.b, color: "#ff6b4a" }]} />
            <div className="grid grid-cols-1 @xl:grid-cols-3 gap-3 mt-4 text-xs">{[["Lowest Latency", "94 ms at 04:15 AM"], ["Peak Surge Latency", "280 ms at 18:30 PM (Eid Surge Test)"], ["Rolling Mean (6h)", "142 ms ± 12ms jitter"]].map(([l, v]) => <div key={l} className="p-3 rounded-xl bg-portal-tint"><p className="font-bold text-portal-ink">{l}</p><p className="text-portal-ink-muted">{v}</p></div>)}</div>
          </Section>
        </div>

        <div className="space-y-6 min-w-0">
          <Section title="Dynamic Failover Matrix" right={<Badge tone="success">{Object.values(rules).filter(Boolean).length} Active Rules</Badge>} sub="Fallback reroute jab carrier ack drop ya queue latency SLA cross kare" bodyClass="p-5 space-y-3">
            {FAILOVER.map((f) => <div key={f.id} className="p-3 rounded-xl bg-portal-tint text-xs space-y-1.5"><div className="flex items-center justify-between gap-2"><b className="text-portal-ink">Rule #{f.id}: {f.title}</b><Toggle checked={rules[f.id]} onChange={(v) => { setRules((r) => ({ ...r, [f.id]: v })); toast(`Rule ${f.id} ${v ? "enabled" : "disabled"}`); }} label={f.title} /></div><code className="block px-2 py-1 rounded bg-portal-surface font-mono text-[11px]">{f.when}</code><p className="font-semibold text-portal-brand-deep">→ {f.then}</p>{f.triggered && <Badge tone="warning">Triggered</Badge>}</div>)}
            <Button size="sm" variant="outline" className="w-full" onClick={() => setModal("failover")}>Edit Failover Routing Logic</Button>
          </Section>
          <Section title="Circuit Breaker Watch" right={<Badge tone="success">Armed & Ready</Badge>} bodyClass="p-5 space-y-3 text-xs">
            {[["Error Rate Trip Limit", "> 3.5% in 60s"], ["Latency Spike Trip Limit", "> 1,200 ms"], ["Half-Open Probing Window", "30s cooldown"]].map(([l, v]) => <div key={l} className="flex justify-between"><span className="text-portal-ink-muted">{l}</span><b className="text-portal-ink">{v}</b></div>)}
            <p className="text-[10px] font-bold uppercase tracking-wider text-portal-ink-muted pt-2">Recent gateway events</p>
            {GW_EVENTS.map((e) => <div key={e.id} className={`pl-3 border-l-2 ${e.warn ? "border-amber-500" : "border-portal-brand"}`}><p className="font-bold text-portal-ink">{e.time} <span className={e.warn ? "text-amber-600" : "text-portal-brand"}>{e.tag}</span></p><p className="text-portal-ink-muted">{e.text}</p></div>)}
          </Section>
          <Section title="Encryption & Webhooks" bodyClass="p-5 space-y-2">{SECURITY_ITEMS.map((i) => <div key={i.id} className="flex items-center gap-3 p-3 rounded-xl bg-portal-tint"><Icon name={i.icon} className="text-[20px] text-portal-brand" /><div className="min-w-0"><p className="text-xs font-bold text-portal-ink">{i.title}</p><p className="text-[11px] text-portal-ink-muted">{i.sub}</p></div>{i.right ? <span className="ml-auto text-[11px] font-bold text-emerald-600">{i.right}</span> : <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />}</div>)}</Section>
        </div>
      </div>

      <Modal open={!!modal} onClose={() => setModal(null)} className="w-full max-w-md bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-4">{modal === "breaker" ? "Circuit Breaker Rules" : "Manage Failover"}</h3>
        {modal === "breaker"
          ? <div className="space-y-3"><Field label="Error rate trip limit (%)"><Input defaultValue="3.5" /></Field><Field label="Latency spike trip limit (ms)"><Input defaultValue="1200" /></Field><Field label="Half-open probing window (s)"><Input defaultValue="30" /></Field></div>
          : <div className="space-y-2">{FAILOVER.map((f) => <div key={f.id} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-portal-tint text-xs"><span><b className="text-portal-ink">{f.title}</b><br /><span className="text-portal-ink-muted">{f.when} → {f.then}</span></span><Toggle checked={rules[f.id]} onChange={(v) => setRules((r) => ({ ...r, [f.id]: v }))} label={f.title} /></div>)}</div>}
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setModal(null)}>Close</Button><Button onClick={() => { setModal(null); toast("Settings save hui (demo)"); }}>Save</Button></div>
      </Modal>
    </Page>
  );
}
