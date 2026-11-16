import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, useToast } from "../../ui/index.js";
import { Avatar, IconBox, Kpi, Meter, Page, Pager, SearchBox, Section } from "./parts.jsx";
import { BRIDGES, PODS, SLA_URGENT, TICKETS } from "./adminData.js";

const priTone = { "P0 Blocker": "danger", "P1 High": "warning", "P2 Normal": "success" };
const TABS = [{ value: "all", label: "All Tickets (42)" }, { value: "crit", label: "Critical & Urgent (12)" }, { value: "carrier", label: "Pending Carrier / Meta (14)" }, { value: "tenant", label: "Awaiting Tenant Reply (9)" }];

export default function SupportDesk() {
  const toast = useToast();
  const navigate = useNavigate();
  const [tab, setTab] = useState("all"); const [q, setQ] = useState(""); const [pri, setPri] = useState(""); const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [assign, setAssign] = useState({});
  const rows = useMemo(() => TICKETS.filter((t) => (tab === "all" || (tab === "crit" ? t.crit : t.cat === tab)) && (!pri || t.pri === pri) && (!q || `${t.id} ${t.biz} ${t.issue}`.toLowerCase().includes(q.toLowerCase()))), [tab, q, pri]);
  const cols = [
    { key: "id", label: "Ticket & Tenant", render: (t) => <div className="min-w-[9rem]"><p className="font-mono font-bold text-xs text-portal-brand-deep">#{t.id}</p><Link to={`/admin/businesses/${t.tid}`} className="font-bold hover:text-portal-brand">{t.biz}</Link><p className="text-[11px] text-portal-ink-muted">{t.tier} • {t.age}</p></div> },
    { key: "issue", label: "Category & Issue", render: (t) => <div className="min-w-[10rem]"><p className="font-bold">{t.issue}</p><p className="text-xs text-portal-ink-muted">{t.detail}</p></div> },
    { key: "chLabel", label: "Channel", render: (t) => <Badge tone="brand">{t.chLabel}</Badge> },
    { key: "pri", label: "Priority", render: (t) => <Badge tone={priTone[t.pri]}>{t.pri}</Badge> },
    { key: "who", label: "Assigned", render: (t) => <div className="flex items-center gap-2 whitespace-nowrap"><Avatar text={(assign[t.id] || t.who).split(" ").map((w) => w[0]).join("")} className="w-7 h-7 text-[10px] rounded-full" /><span className="font-semibold">{assign[t.id] || t.who}</span></div> },
    { key: "sla", label: "SLA Window", render: (t) => <span className={`font-bold whitespace-nowrap ${t.crit ? "text-portal-danger" : "text-emerald-600 dark:text-emerald-400"}`}>{t.sla}</span> },
    { key: "act", label: "", render: (t) => <button type="button" className="text-xs font-bold text-portal-brand whitespace-nowrap hover:underline" onClick={(e) => { e.stopPropagation(); setAssign((a) => ({ ...a, [t.id]: "Ahmed Raza" })); toast(`${t.id} aap ko assign ho gaya`); }}>Assign to me</button> },
  ];
  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Operations & SLA" }, { label: "Support & Incident Desk" }]}>
      <PageHero badge="Queue Sync: Real-time • Updated 12s ago" title="Support & Operations Desk" description="Global SLA compliance 99.4% • Avg first response 4.2 mins • 12 engineers on duty."
        actions={<><Button variant="glass" icon="download" onClick={() => toast("Ops report export (demo)", "info")}>Export Ops Report</Button><Button variant="glass" icon="rule" onClick={() => toast("SLA escalation policy (demo)", "info")}>SLA Escalation Policy</Button><Button variant="accent" icon="add_circle" onClick={() => setModal(true)}>New Incident Ticket</Button></>} />

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="inbox" label="Open tickets" value="42" badge="4 Unassigned" badgeTone="danger" tone="danger" sub="12 P0/P1 • 18 Normal" />
        <Kpi icon="speed" label="Avg first response" value="4.2m" badge="1.8m faster" sub="Target < 15m" />
        <Kpi icon="notifications_active" label="SLA breach rate" value="0.6%" badge="2 Warning" badgeTone="warning" tone="warning" sub="Threshold < 2.0%" />
        <Kpi icon="task_alt" label="Resolved today" value="138" badge="94% FCR" sub="CSAT 4.85 / 5.0" />
      </div>

      <Section title="Urgent SLA Breach Warning Window" sub="2 high-tier tickets will breach customer commitment without immediate action" right={<Badge tone="danger" dot>Escalation Protocol Active</Badge>}>
        <div className="grid gap-4 grid-cols-1 @4xl:grid-cols-2">
          {SLA_URGENT.map((u) => (
            <div key={u.id} className="p-4 rounded-2xl bg-portal-tint space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap"><p className="text-sm"><span className="font-mono font-bold">#{u.id}</span> <Badge tone={u.tone}>{u.pri}</Badge> <span className="text-xs text-portal-ink-muted">{u.tier}</span></p><Badge tone={u.tone} dot>{u.left}</Badge></div>
              <p className="font-bold text-portal-ink">{u.biz}</p><p className="text-xs text-portal-ink-muted">{u.issue} • {u.owner}</p>
              <div className="flex flex-wrap gap-2 pt-1">{u.act.map((a, i) => <Button key={a} size="sm" variant={i === u.act.length - 1 ? "accent" : "outline"} onClick={() => (/Reroute/.test(a) ? navigate(u.to) : /Logs|Carrier/.test(a) ? navigate(u.to) : toast(`${a}: ${u.id} (demo)`, "info"))}>{a}</Button>)}</div>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <div className="@5xl:col-span-2 space-y-4 min-w-0">
          <Segmented variant="solid" value={tab} onChange={(v) => { setTab(v); setPage(1); }} options={TABS} />
          <Card className="overflow-hidden">
            <div className="p-4 flex flex-col @2xl:flex-row gap-3 border-b border-portal-border/70"><SearchBox className="flex-1" value={q} onChange={setQ} placeholder="Search Ticket ID, MSISDN, Tenant…" /><Select value={pri} onChange={(e) => setPri(e.target.value)} options={[{ value: "", label: "Priority: All" }, "P0 Blocker", "P1 High", "P2 Normal"]} /></div>
            <DataTable columns={cols} rows={rows} rowKey="id" empty="Is filter par koi ticket nahi." />
            <Pager page={page} pages={3} onPage={setPage} label={`Showing ${rows.length} of 42 active tickets`} />
          </Card>
        </div>
        <div className="space-y-6 min-w-0">
          <Section title="SLA Guardrail Targets" right={<Badge tone="success">99.4% Total</Badge>} bodyClass="p-5 space-y-3 text-xs">
            {[["P0 Blocker (15m FRT / 2h Res)", 98.8, "danger"], ["P1 High (30m FRT / 6h Res)", 99.2, "warning"], ["P2 Normal (2h FRT / 24h Res)", 99.9, "brand"]].map(([l, v, t]) => <div key={l}><div className="flex justify-between mb-1"><b className="text-portal-ink">{l}</b><b className="text-portal-brand-deep">{v}%</b></div><Meter pct={v} tone={t} /></div>)}
          </Section>
          <Section title="Carrier Escalation Bridges" right={<span className="text-[11px] text-portal-ink-muted">Real-time</span>} bodyClass="p-5 space-y-2">{BRIDGES.map((b) => <div key={b.id} className="flex items-center gap-3 p-3 rounded-xl bg-portal-tint"><span className="w-9 h-9 rounded-lg bg-portal-surface border border-portal-border text-[9px] font-black text-portal-brand-deep flex items-center justify-center">{b.ini}</span><div className="min-w-0"><p className="text-xs font-bold text-portal-ink">{b.name}</p><p className="text-[11px] text-portal-ink-muted">{b.sub}</p></div><Badge className="ml-auto" tone={b.state === "Active" ? "success" : "neutral"} dot>{b.state}</Badge></div>)}</Section>
          <Section title="On-Duty Pod Capacity" right={<Badge tone="brand">12 Engineers</Badge>} bodyClass="p-5 space-y-3">
            {PODS.map((p) => <div key={p.id} className="p-3 rounded-xl bg-portal-tint"><div className="flex justify-between text-xs"><b className="text-portal-ink">{p.name}</b><b className={p.load > 80 ? "text-portal-danger" : "text-portal-brand-deep"}>{p.load}% Load</b></div><Meter className="my-1.5" pct={p.load} tone={p.load > 80 ? "danger" : "brand"} /><p className="text-[11px] text-portal-ink-muted">{p.sub}</p></div>)}
            <Button size="sm" variant="outline" className="w-full" icon="balance" onClick={() => toast("Ticket queue rebalance ho gaya (demo)")}>Rebalance Ticket Queue</Button>
          </Section>
        </div>
      </div>

      <Modal open={modal} onClose={() => setModal(false)} className="w-full max-w-md bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-4">New Incident Ticket</h3>
        <div className="space-y-3"><Field label="Tenant"><Select options={["Al-Fatah Department Store", "Khaadi Official Flagship", "Careem Logistics Hub PK"]} /></Field><Field label="Issue title"><Input placeholder="e.g. DLR delay on Jazz route" /></Field><Field label="Priority"><Select options={["P0 Blocker", "P1 High", "P2 Normal"]} /></Field></div>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setModal(false)}>Cancel</Button><Button onClick={() => { setModal(false); toast("Ticket ban gaya (demo)"); }}>Create Ticket</Button></div>
      </Modal>
    </Page>
  );
}
