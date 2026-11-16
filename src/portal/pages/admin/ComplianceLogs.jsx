import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card, DataTable, Icon, PageHero, Segmented, Select, Toggle, useToast } from "../../ui/index.js";
import { Kpi, Page, Pager, SearchBox, Section } from "./parts.jsx";
import { CH_META, CONSENTS, STRIKES, WATCHLIST } from "./adminData.js";

const TABS = [{ value: "ledger", label: "Consent Records Ledger (8.42M)" }, { value: "optout", label: "Opt-Out Stream (1.5k)" }, { value: "complaints", label: "Regulatory Complaints (18)" }, { value: "erasure", label: "Data Erasure (6)" }];
const TENANT_IDS = { "FlashCart Deals Ltd": "TEN-4891", "Apex Trading Corp": "TEN-1029" };

export default function ComplianceLogs() {
  const toast = useToast();
  const [tab, setTab] = useState("ledger");
  const [q, setQ] = useState(""); const [ch, setCh] = useState(""); const [page, setPage] = useState(1);
  const [guard, setGuard] = useState("Production Guard");
  const [parser, setParser] = useState(true);
  const [done, setDone] = useState({});
  const rows = useMemo(() => CONSENTS.filter((c) => (!q || `${c.msisdn} ${c.biz} ${c.id}`.toLowerCase().includes(q.toLowerCase())) && (!ch || c.ch === ch)), [q, ch]);
  const act = (key, msg) => { setDone((d) => ({ ...d, [key]: true })); toast(msg, "info"); };
  const cols = [
    { key: "id", label: "Consent Hash & ID", render: (c) => <div className={c.flagged ? "text-portal-danger" : ""}><p className="font-mono font-bold text-xs">#{c.id}</p><p className="font-mono text-[10px] opacity-70">{c.hash}</p></div> },
    { key: "biz", label: "Business (Tenant)", render: (c) => <div className="min-w-[9rem]"><p className="font-bold">{c.biz}</p><p className="text-xs text-portal-ink-muted">{c.tier}</p></div> },
    { key: "msisdn", label: "Contact (MSISDN)", render: (c) => <span className="font-mono font-bold text-xs whitespace-nowrap">{c.msisdn}</span> },
    { key: "ch", label: "Channel", render: (c) => <Badge tone="brand"><Icon name={CH_META[c.ch].icon} className="text-[13px]" />{CH_META[c.ch].label}</Badge> },
    { key: "src", label: "Consent Source & Proof", render: (c) => <div className="min-w-[10rem]"><p className={`font-semibold ${c.flagged ? "text-portal-danger" : ""}`}>{c.src}</p><p className="font-mono text-[10px] text-portal-ink-muted">{c.proof}</p></div> },
    { key: "net", label: "Network / IP", render: (c) => <div className="whitespace-nowrap"><p className="font-semibold">{c.net}</p><p className="font-mono text-[10px] text-portal-ink-muted">{c.ip}</p></div> },
    { key: "time", label: "Timestamp", render: (c) => <div className="whitespace-nowrap"><p className="font-semibold">{c.time}</p><p className="text-[10px] text-portal-ink-muted">{c.ts}</p></div> },
  ];
  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Governance & Risk" }, { label: "Compliance & Consent Logs" }]}>
      <PageHero badge="PTA & CITC Live Sync Active" title="Compliance & Consent Ledger" description="Cryptographically anchored consent records, opt-out enforcement, spam-risk watchlist and regulatory audit exports for Pakistan (PTA) and KSA (CITC)."
        actions={<Segmented variant="tabs" value={guard} onChange={setGuard} options={["Production Guard", "Sandbox Audit"]} />} />

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="shield" label="Total verified consents" value="8.42M" badge="+4.2%" sub="99.1% proofed" />
        <Kpi icon="unsubscribe" label="24h global opt-out rate" value="0.18%" badge="Healthy" sub="1,514 contacts • target < 0.50%" />
        <Kpi icon="warning" label="Flagged tenants watchlist" value="4 High-Risk" badge="Intervention req." badgeTone="danger" tone="danger" sub="2 spam breaches • 2 unsub spikes" danger />
        <Kpi icon="delete_sweep" label="Pending data deletion" value="6 Requests" badge="SLA 4.2h/24h" sub="Right to forget • 100% in SLA" />
      </div>

      <Section title="Urgent Regulatory Watchlist: 2 Tenants Exceeding Thresholds" right={<span className="text-[11px] text-portal-ink-muted">Auto-flagged by AI Risk Sentinel • 6 mins ago</span>} className="border-red-300/70 dark:border-red-900/60">
        <div className="grid gap-4 grid-cols-1 @4xl:grid-cols-2">
          {WATCHLIST.map((w) => (
            <div key={w.id} className="p-4 rounded-2xl bg-portal-tint space-y-3">
              <div className="flex items-start justify-between gap-3"><div><p className="font-bold text-portal-ink">{w.name} <Badge tone={w.tone}>{w.tag}</Badge></p><p className="text-xs text-portal-ink-muted">ID: #{w.id} • Corridor: {w.corridor}</p></div><div className="text-right"><p className="text-sm font-black text-portal-danger">{w.metric}</p><p className="text-[11px] text-portal-ink-muted">{w.note}</p></div></div>
              <p className="text-[11px] text-portal-ink-muted">{w.tel}</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" onClick={() => act(`${w.id}-pause`, `${w.name}: outbound gateway pause (demo)`)} disabled={done[`${w.id}-pause`]}>{done[`${w.id}-pause`] ? "Gateway Paused" : "Pause Outbound Gateway"}</Button>
                <Button size="sm" variant="accent" onClick={() => act(`${w.id}-susp`, `${w.name} suspend (demo)`)} disabled={done[`${w.id}-susp`]}>{done[`${w.id}-susp`] ? "Suspended" : "Suspend Tenant"}</Button>
                <Link to={`/admin/businesses/${TENANT_IDS[w.name]}`} className="inline-flex items-center px-3 py-1.5 text-xs font-bold text-portal-brand hover:underline">View tenant →</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <div className="@5xl:col-span-2 space-y-4 min-w-0">
          <Segmented variant="solid" value={tab} onChange={setTab} options={TABS} />
          {tab === "ledger" ? (
            <Card className="overflow-hidden">
              <div className="p-4 flex flex-col @3xl:flex-row gap-3 border-b border-portal-border/70">
                <SearchBox className="flex-1" value={q} onChange={setQ} placeholder="Search MSISDN prefix, tenant or hash (e.g. +92 3)" />
                <Select value={ch} onChange={(e) => { setCh(e.target.value); setPage(1); }} options={[{ value: "", label: "All Channels" }, ...Object.entries(CH_META).map(([value, m]) => ({ value, label: m.label }))]} />
                <Button variant="outline" icon="verified" onClick={() => toast("Bulk hash validation: 100% valid (demo)")}>Bulk Validate</Button>
                <Button icon="download" onClick={() => toast("Audit CSV export (demo)", "info")}>Export CSV</Button>
              </div>
              <DataTable columns={cols} rows={rows} rowKey="id" empty="Koi consent record nahi mila." />
              <Pager page={page} pages={3} onPage={setPage} label={`Showing ${rows.length} of 8,421,902 cryptographically anchored records`} />
            </Card>
          ) : <Card className="p-8 text-center text-sm text-portal-ink-muted"><Icon name="inbox" className="text-[32px] block mx-auto mb-2" />Is tab ka demo data jald; abhi Consent Records Ledger tab dekhein.</Card>}
        </div>
        <div className="space-y-6 min-w-0">
          <Section title="PTA DND & CITC Sync" right={<span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />} bodyClass="p-5 space-y-2 text-xs">
            <p className="text-portal-ink-muted">Real-time synchronized National Do Not Disturb registries across all active Pakistani and Saudi telecom operators.</p>
            {[["Active Blacklisted Numbers", "1,420,900"], ["Last PTA Sync", "14 mins ago (Jazz/Zong)"], ["Last CITC Sync", "22 mins ago (STC/Mobily)"]].map(([l, v]) => <p key={l} className="flex justify-between"><span className="text-portal-ink-muted">{l}</span><b className="font-mono text-portal-ink">{v}</b></p>)}
            <Button size="sm" variant="outline" className="w-full mt-2" onClick={() => toast("Carrier pull shuru — 3 operators (demo)")}>Force Immediate Carrier Pull</Button>
          </Section>
          <Section title="Auto-Opt Out Parser" right={<Toggle checked={parser} onChange={setParser} label="Auto opt-out parser" />} bodyClass="p-5 text-xs space-y-2">
            <p className="text-portal-ink-muted">Inbound messages matching localized opt-out triggers instantly revoke channel dispatch within 200ms.</p>
            <div className="flex flex-wrap gap-1.5">{["STOP", "UNSUBSCRIBE", "ROK", "INKAAR"].map((k) => <span key={k} className="px-2 py-1 rounded-lg bg-portal-tint font-mono font-bold">"{k}"</span>)}</div>
          </Section>
          <Section title="Automatic Strike Ladder" sub="Spam complaint ratio 0.20% se oopar jaane par" bodyClass="p-5 space-y-2">
            {STRIKES.map((s) => <div key={s.n} className="flex items-center gap-3 p-3 rounded-xl bg-portal-tint"><span className="w-7 h-7 rounded-full bg-portal-accent/15 text-portal-accent font-black text-xs flex items-center justify-center">{s.n}</span><div><p className="text-xs font-bold text-portal-ink">{s.title}</p><p className="text-[11px] text-portal-ink-muted">{s.sub}</p></div></div>)}
            <Button size="sm" variant="outline" className="w-full" onClick={() => toast("Threshold limits (demo)", "info")}>Configure Threshold Limits</Button>
          </Section>
          <Card className="p-5 bg-portal-brand-deep text-white border-0"><p className="text-[10px] font-bold uppercase tracking-wider text-teal-100">Audit Export</p><p className="text-lg font-extrabold mt-1">Generate Official PTA / CITC Compliance Dossier</p><p className="text-xs text-teal-50/90 mt-1">Digitally signed proof packets with SHA-256 Merkle root verification.</p><Button variant="outline" className="w-full mt-4" icon="description" onClick={() => toast("Dossier compile ho raha hai (demo)")}>Compile Audit Dossier</Button></Card>
        </div>
      </div>
    </Page>
  );
}
