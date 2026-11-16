import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, Toggle, useToast } from "../../ui/index.js";
import { Avatar, IconBox, Kpi, Page, Pager, SearchBox, Section, statusTone } from "./parts.jsx";
import { PLANS, SETTLEMENTS } from "./adminData.js";

const TABS = [{ value: "plans", label: "Subscription Plans & Tiers" }, { value: "contracts", label: "Tenant Contracts" }, { value: "gateways", label: "Payment Gateways & Mandates" }, { value: "discounts", label: "Discounts & Overrides" }];
const RAILS = [["HBL Corporate Mandate (PK)", "99.8% Success", "Auto-debit clearing SLA: 4 hours • T+0 settlement"], ["Saudi SADAD / Mada Engine", "99.4% SLA", "Real-time B2B direct debit • SAR cleared"], ["Stripe & Global Cards", "Operational", "3D Secure v2 & card vault • USD / AED cross-border"]];

export default function PlansBilling() {
  const toast = useToast();
  const navigate = useNavigate();
  const [tab, setTab] = useState("plans");
  const [q, setQ] = useState(""); const [st, setSt] = useState("All"); const [cur, setCur] = useState("Both");
  const [page, setPage] = useState(1);
  const [edit, setEdit] = useState(null);
  const [autoRec, setAutoRec] = useState(true);
  const [dun, setDun] = useState({ cadence: true, late: false });
  const rows = useMemo(() => SETTLEMENTS.filter((s) => (!q || `${s.tenant} ${s.id} ${s.reg}`.toLowerCase().includes(q.toLowerCase())) && (st === "All" || s.status.startsWith(st)) && (cur === "Both" || s.gross.startsWith(cur))), [q, st, cur]);
  const cols = [
    { key: "tenant", label: "Tenant & Legal Entity", render: (s) => <Link to={`/admin/businesses/${s.tid}`} className="flex items-center gap-3 min-w-[13rem] group"><Avatar text={s.ini} className="w-9 h-9" /><div><p className="font-bold group-hover:text-portal-brand">{s.tenant}</p><p className="text-xs text-portal-ink-muted">{s.reg}</p></div></Link> },
    { key: "plan", label: "Plan Tier", render: (s) => <Badge tone="brand">{s.plan}</Badge> },
    { key: "period", label: "Billed Period", render: (s) => <div><p className="font-semibold">{s.period}</p><p className="text-xs text-portal-ink-muted font-mono">{s.id}</p></div> },
    { key: "gross", label: "Gross & Tax Split", render: (s) => <div className="whitespace-nowrap"><p className="font-extrabold">{s.gross}</p><p className="text-xs text-portal-ink-muted">{s.tax}</p></div> },
    { key: "gw", label: "Gateway & Mandate", render: (s) => <div><p className="font-semibold">{s.gw}</p><p className="text-xs text-portal-ink-muted">{s.gwSub}</p></div> },
    { key: "status", label: "Settlement Status", render: (s) => <Badge tone={statusTone(s.status)} dot>{s.status}</Badge> },
    { key: "act", label: "Actions", render: (s) => <div className="flex gap-1">{(s.status.startsWith("Retry") ? [["refresh", "Retry now"]] : []).concat([["visibility", "View"], ["receipt_long", "Invoice"]]).map(([ic, tip]) => <button key={ic} type="button" title={tip} onClick={() => (ic === "visibility" ? navigate(`/admin/businesses/${s.tid}`) : toast(`${tip}: ${s.id} (demo)`, "info"))} className="p-1.5 rounded-lg hover:bg-portal-tint text-portal-ink-soft"><Icon name={ic} className="text-[18px]" /></button>)}</div> },
  ];
  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Revenue & Finance" }, { label: "Plans & Billing Management" }]}>
      <PageHero badge="Revenue Ops Engine • Cluster PK-SA Dual Vault" title="Plans & Subscription Billing"
        description="Global multi-currency pricing tiers, tenant subscription contracts, payment gateway settlement & revenue operations across Pakistan (PKR) and Saudi Arabia (SAR)."
        actions={<><Button variant="glass" icon="download" onClick={() => toast("Revenue ledger export (demo)", "info")}>Export Revenue Ledger</Button><Button variant="accent" icon="add" onClick={() => setEdit({ name: "", price: "", isNew: true })}>Create New Plan</Button></>} />

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="payments" label="Total platform MRR" value="PKR 48.6M" badge="+18.2% MoM" sub="1,248 paying tenants" />
        <Kpi icon="task_alt" label="Active subscriptions" value="1,180" badge="94.5% active" sub="46 in 14-d trial • 22 overdue" />
        <Kpi icon="bar_chart" label="Avg revenue / account" value="PKR 41,200" badge="+6.4%" sub="WA surge & overage" />
        <Kpi icon="verified" label="Gateway collection health" value="99.1%" badge="Success rate" sub="HBL / SADAD / Mada" />
      </div>

      <Segmented variant="solid" value={tab} onChange={setTab} options={TABS} />

      {tab === "plans" && (
        <div className="grid gap-4 grid-cols-1 @2xl:grid-cols-2 @6xl:grid-cols-4">
          {PLANS.map((p) => (
            <Card key={p.id} hover className={`p-5 flex flex-col ${p.dark ? "bg-portal-tint" : ""} ${p.popular ? "ring-2 ring-portal-brand" : ""}`}>
              <div className="flex items-center justify-between gap-2"><Badge tone={p.popular ? "accent" : "neutral"}>{p.tag}</Badge><Icon name={p.icon} className="text-[20px] text-portal-brand" /></div>
              <h3 className="text-lg font-extrabold text-portal-ink mt-3">{p.name}</h3><p className="text-xs text-portal-ink-muted">{p.desc}</p>
              <p className="text-2xl font-black text-portal-ink mt-3">{p.price}{!p.dark && <span className="text-xs font-semibold text-portal-ink-muted"> / mo</span>}</p><p className="text-[11px] text-portal-ink-muted">{p.sar}</p>
              <ul className="space-y-2 my-4 text-xs text-portal-ink-soft flex-1">{p.feats.map((f) => <li key={f} className="flex gap-2"><Icon name="check_circle" className="text-[16px] text-portal-brand shrink-0" />{f}</li>)}</ul>
              <div className="flex gap-2"><Button size="sm" variant={p.dark ? "primary" : "outline"} className="flex-1" onClick={() => setEdit(p)}>{p.dark ? "Configure Master Plan" : "Edit Specs"}</Button>{!p.dark && <Button size="sm" variant="ghost" onClick={() => navigate(`/admin/businesses?plan=${p.id}`)}>View {p.count}</Button>}</div>
            </Card>
          ))}
        </div>
      )}
      {tab === "contracts" && <Card className="overflow-hidden"><DataTable columns={cols.slice(0, 4).concat(cols[5])} rows={SETTLEMENTS} rowKey="id" /></Card>}
      {tab === "gateways" && <div className="grid gap-4 grid-cols-1 @3xl:grid-cols-3">{RAILS.map(([n, b, d]) => <Card key={n} className="p-5"><div className="flex justify-between gap-2"><p className="font-bold text-portal-ink">{n}</p><Badge tone="success">{b}</Badge></div><p className="text-xs text-portal-ink-muted mt-2">{d}</p><Button size="sm" variant="outline" className="mt-4" onClick={() => toast("Mandate routing config (demo)", "info")}>Configure routing</Button></Card>)}</div>}
      {tab === "discounts" && <Card className="p-6 text-sm text-portal-ink-soft">Custom rate-cards aur discount overrides yahan manage honge. <Button size="sm" className="ml-2" onClick={() => toast("Override add karna — demo", "info")}>+ Add override</Button></Card>}

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <Section className="@5xl:col-span-2" title="Recent Tenant Subscription Invoices & Auto-Debit Settlements" sub="Live gateway mandate reconciliation across Pakistani & Saudi clearing corridors"
          right={<div className="flex items-center gap-2 text-xs font-bold text-portal-ink-soft">Auto-Reconcile: {autoRec ? "ON" : "OFF"}<Toggle checked={autoRec} onChange={setAutoRec} label="Auto reconcile" /></div>} bodyClass="p-0 pt-3">
          <div className="flex flex-col @2xl:flex-row gap-3 px-5 pb-3"><SearchBox className="flex-1" value={q} onChange={setQ} placeholder="Search tenant, NTN, invoice ID…" />
            <Select value={st} onChange={(e) => setSt(e.target.value)} options={[{ value: "All", label: "Status: All" }, "Settled", "Retry"]} /><Select value={cur} onChange={(e) => setCur(e.target.value)} options={[{ value: "Both", label: "Currency: Both" }, "PKR", "SAR"]} /></div>
          <DataTable columns={cols} rows={rows} rowKey="id" empty="Koi settlement nahi mila." />
          <Pager page={page} pages={3} onPage={setPage} label={`Showing ${rows.length} of 1,248 active subscription invoices`} />
        </Section>
        <div className="space-y-6 min-w-0">
          <Section title="Payment Gateway Rails" sub="Pakistan 1Link/HBL aur Saudi SADAD networks" bodyClass="p-5 space-y-2.5">
            {RAILS.map(([n, b, d]) => <div key={n} className="p-3 rounded-xl bg-portal-tint text-xs"><div className="flex justify-between gap-2"><b className="text-portal-ink">{n}</b><span className="text-emerald-600 dark:text-emerald-400 font-bold">{b}</span></div><p className="text-portal-ink-muted mt-0.5">{d}</p></div>)}
            <Button size="sm" variant="outline" className="w-full" onClick={() => setTab("gateways")}>Configure Mandate Routing</Button>
          </Section>
          <Section title="Dunning & Recovery Rules" sub="Automated retry schedule before suspension" bodyClass="p-5 space-y-2.5">
            {[["Automated Retry Cadence", "3 retries spaced over 72 hours", "cadence"], ["Late Fee Assessment", "Auto-applied after 7 days overdue", "late"]].map(([t, d, k]) => <div key={k} className="p-3 rounded-xl bg-portal-tint flex items-center justify-between gap-3"><div><p className="text-xs font-bold text-portal-ink">{t}</p><p className="text-[11px] text-portal-ink-muted">{d}</p></div><Toggle checked={dun[k]} onChange={(v) => setDun((o) => ({ ...o, [k]: v }))} label={t} /></div>)}
            <div className="p-3 rounded-xl bg-portal-tint flex justify-between text-xs"><b className="text-portal-ink">Grace Period Threshold</b><span className="font-bold">5 Days</span></div>
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 text-xs text-red-700 dark:text-red-300 flex gap-2"><Icon name="warning" className="text-[18px]" /><span><b>22 Overdue Tenants</b> require manual intervention.</span></div>
            <Button size="sm" variant="outline" className="w-full" onClick={() => navigate("/admin/businesses?status=Suspended")}>Manage 22 Overdue</Button>
          </Section>
        </div>
      </div>

      <Modal open={!!edit} onClose={() => setEdit(null)} className="w-full max-w-md bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-4">{edit?.isNew ? "Create New Plan" : `Edit Specs — ${edit?.name}`}</h3>
        <div className="space-y-3"><Field label="Plan name"><Input defaultValue={edit?.name} /></Field><Field label="Monthly price (PKR)"><Input defaultValue={edit?.price} /></Field><Field label="Included messages"><Input placeholder="e.g. 500,000" /></Field></div>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setEdit(null)}>Cancel</Button><Button onClick={() => { setEdit(null); toast("Plan save hua (demo)"); }}>Save</Button></div>
      </Modal>
    </Page>
  );
}
