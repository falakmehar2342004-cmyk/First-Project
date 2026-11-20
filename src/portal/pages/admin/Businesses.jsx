import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, useToast } from "../../ui/index.js";
import { useAccess } from "../../auth/AccessContext.jsx";
import { Avatar, Kpi, Meter, Page, Pager, SearchBox, statusTone } from "./parts.jsx";
import { CH_META, TENANTS } from "./adminData.js";

const PAGE_SIZE = 8;
const PLAN_OPTS = [{ value: "", label: "All Plans" }, { value: "starter", label: "Starter & Growth" }, { value: "pro", label: "Business Pro" }, { value: "enterprise", label: "Enterprise" }];
const CTRY_OPTS = [{ value: "", label: "All Countries" }, { value: "PK", label: "Pakistan" }, { value: "SA", label: "Saudi Arabia" }];
const CH_OPTS = [{ value: "", label: "All Channels" }, ...Object.entries(CH_META).map(([value, m]) => ({ value, label: m.label }))];
const STATUS_TABS = [{ value: "", label: `All Tenants (${TENANTS.length})` }, { value: "Active", label: "Active" }, { value: "Trial", label: "Trial" }, { value: "Suspended", label: "Suspended" }];

function download(name, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a"); a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url);
}

export default function Businesses() {
  const [sp, setSp] = useSearchParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { can } = useAccess();
  const [view, setView] = useState("list");
  const [page, setPage] = useState(1);
  const [addOpen, setAddOpen] = useState(false);
  const [bulk, setBulk] = useState(false);
  const q = sp.get("q") || ""; const plan = sp.get("plan") || ""; const status = sp.get("status") || ""; const country = sp.get("country") || ""; const channel = sp.get("ch") || "";
  const set = (k, v) => { const n = new URLSearchParams(sp); if (v) n.set(k, v); else n.delete(k); setSp(n, { replace: true }); setPage(1); };

  const rows = useMemo(() => TENANTS.filter((t) =>
    (!q || `${t.name} ${t.reg} ${t.owner} ${t.id}`.toLowerCase().includes(q.toLowerCase())) &&
    (!plan || t.tier === plan) && (!status || t.status === status) &&
    (!country || t.city.endsWith(country)) && (!channel || t.channels.includes(channel))), [q, plan, status, country, channel]);
  const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const cur = Math.min(page, pages);
  const shown = rows.slice((cur - 1) * PAGE_SIZE, cur * PAGE_SIZE);
  const open = (t) => navigate(`/admin/businesses/${t.id}`);

  const exportCsv = () => {
    const head = "ID,Name,Owner,Email,City,Plan,Status,Wallet";
    download("tenants.csv", [head, ...rows.map((t) => [t.id, t.name, t.owner, t.email, t.city, t.plan, t.status, t.wallet].map((v) => `"${v}"`).join(","))].join("\n"), "text/csv");
    toast(`${rows.length} tenants CSV export hua`);
  };

  const columns = [
    { key: "name", label: "Business Tenant", render: (t) => <div className="flex items-center gap-3 min-w-[14rem]"><Avatar text={t.ini} /><div><p className="font-bold leading-tight">{t.name}</p><p className="text-xs text-portal-ink-muted">{t.reg} • {t.sub}</p></div></div> },
    { key: "owner", label: "Account Owner", render: (t) => <div className="min-w-[10rem]"><p className="font-semibold">{t.owner}</p><p className="text-xs text-portal-ink-muted">{t.email}</p><p className="text-xs text-portal-ink-muted">{t.phone}</p></div> },
    { key: "city", label: "Jurisdiction", render: (t) => <div className="whitespace-nowrap"><p className="font-semibold">{t.flag} {t.city}</p><p className="text-xs text-portal-ink-muted">{t.juris}</p></div> },
    { key: "plan", label: "Plan & Quota", render: (t) => <div className="w-40"><div className="flex items-center justify-between gap-2 mb-1"><Badge tone="brand">{t.plan}</Badge><span className="text-[11px] font-bold">{t.quota}%</span></div><Meter pct={t.quota} tone={t.quota >= 100 ? "danger" : t.quota > 80 ? "warning" : "brand"} /><p className="text-[11px] text-portal-ink-muted mt-1">{t.quotaText}</p></div> },
    { key: "channels", label: "Channels", render: (t) => <ul className="flex flex-col gap-1">{t.channels.map((c) => <li key={c} className="inline-flex items-center gap-1.5 text-xs font-semibold text-portal-ink-soft"><Icon name={CH_META[c].icon} className="text-[16px] text-portal-brand-deep" />{CH_META[c].label}</li>)}</ul> },
    { key: "wallet", label: "Wallet Balance", render: (t) => <div className="whitespace-nowrap"><p className={`font-extrabold ${t.status === "Suspended" ? "text-portal-danger" : ""}`}>{t.wallet}</p><p className="text-xs text-portal-ink-muted">{t.mrr}</p></div> },
    { key: "status", label: "KYC Status", render: (t) => <div className="whitespace-nowrap"><Badge tone={statusTone(t.status)} dot>{t.status}</Badge><p className="text-[11px] text-portal-ink-muted mt-1">{t.kyc}</p></div> },
  ];

  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Tenant Governance" }, { label: "Registered Businesses" }]}>
      <PageHero badge="Tenant Governance" title="Business Tenants Directory"
        description="1,248 active businesses • 98.9% health SLA. Kisi bhi tenant par click karke uska poora profile, wallet aur gateways dekhein."
        actions={<>
          <Button variant="glass" icon="download" onClick={exportCsv}>Export CSV</Button>
          <div className="relative">
            <Button variant="glass" icon="checklist" onClick={() => setBulk((v) => !v)}>Bulk Actions</Button>
            {bulk && (
              <div className="absolute right-0 mt-2 w-52 bg-portal-surface text-portal-ink border border-portal-border rounded-xl shadow-xl py-1.5 z-30 text-xs font-semibold">
                {["Export selected", "Change plan", "Send notice"].map((a) => <button key={a} type="button" className="w-full text-left px-3.5 py-2 hover:bg-portal-tint" onClick={() => { setBulk(false); toast(`${a} — demo action`, "info"); }}>{a}</button>)}
              </div>
            )}
          </div>
          {can("admin.access") && <Button variant="accent" icon="add" onClick={() => setAddOpen(true)}>Add Business</Button>}
        </>} />

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="domain" label="Total enrolled" value="1,248" badge="+18 wk" sub="Global tenants" />
        <Kpi icon="bolt" label="Transacting & active" value="1,180" badge="94.5%" sub="Healthy message flow" />
        <Kpi icon="hourglass_top" label="In trial period" value="46" badge="12 expire soon" badgeTone="warning" tone="warning" sub="7-day conversion window" />
        <Kpi icon="gpp_maybe" label="Suspended / flagged" value="22" badge="Action needed" badgeTone="danger" tone="danger" sub="Billing or KYC backlog" danger />
      </div>

      <Card className="p-4 space-y-4">
        <div className="flex flex-col @3xl:flex-row gap-3">
          <SearchBox value={q} onChange={(v) => set("q", v)} placeholder="Search by business name, NTN/CR, owner…" className="@3xl:w-80" />
          <div className="grid grid-cols-2 @3xl:grid-cols-4 gap-3 flex-1">
            <Select value={country} onChange={(e) => set("country", e.target.value)} options={CTRY_OPTS} aria-label="Country" />
            <Select value={plan} onChange={(e) => set("plan", e.target.value)} options={PLAN_OPTS} aria-label="Plan" />
            <Select value={channel} onChange={(e) => set("ch", e.target.value)} options={CH_OPTS} aria-label="Channel" />
            <Segmented variant="tabs" value={view} onChange={setView} options={[{ value: "list", label: "List" }, { value: "grid", label: "Grid" }]} className="justify-self-start" />
          </div>
        </div>
        <Segmented variant="chips" value={status} onChange={(v) => set("status", v)} options={STATUS_TABS} />
      </Card>

      {view === "list" ? (
        <Card className="overflow-hidden">
          <DataTable columns={columns} rows={shown} onRowClick={open} empty="Is filter par koi business nahi mila." />
          <Pager page={cur} pages={pages} onPage={setPage} label={`Showing ${rows.length ? (cur - 1) * PAGE_SIZE + 1 : 0} to ${Math.min(cur * PAGE_SIZE, rows.length)} of ${rows.length} registered businesses`} />
        </Card>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 @2xl:grid-cols-2 @5xl:grid-cols-3">
            {shown.map((t) => (
              <Card key={t.id} hover className="p-5 cursor-pointer space-y-3" onClick={() => open(t)}>
                <div className="flex items-center gap-3"><Avatar text={t.ini} /><div className="min-w-0"><p className="font-bold text-portal-ink truncate">{t.name}</p><p className="text-xs text-portal-ink-muted">{t.flag} {t.city}</p></div><Badge className="ml-auto" tone={statusTone(t.status)} dot>{t.status}</Badge></div>
                <div><div className="flex justify-between text-xs mb-1"><span className="font-semibold text-portal-ink-soft">{t.plan}</span><span className="font-bold">{t.quota}%</span></div><Meter pct={t.quota} tone={t.quota > 90 ? "danger" : "brand"} /></div>
                <div className="flex justify-between text-xs"><span className="text-portal-ink-muted">Wallet</span><span className="font-extrabold text-portal-ink">{t.wallet}</span></div>
              </Card>
            ))}
          </div>
          <Card><Pager page={cur} pages={pages} onPage={setPage} label={`${rows.length} businesses`} /></Card>
        </>
      )}

      <Modal open={addOpen} onClose={() => setAddOpen(false)} className="w-full max-w-md bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-4">Add Business</h3>
        <div className="space-y-3">
          <Field label="Business name"><Input placeholder="e.g. Metro Cash & Carry" /></Field>
          <Field label="Owner email"><Input type="email" placeholder="owner@company.com" /></Field>
          <div className="grid grid-cols-2 gap-3"><Field label="Plan"><Select options={PLAN_OPTS.slice(1)} /></Field><Field label="Country"><Select options={CTRY_OPTS.slice(1)} /></Field></div>
        </div>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setAddOpen(false)}>Cancel</Button><Button onClick={() => { setAddOpen(false); toast("Invite sent (demo — kahin save nahi hua)"); }}>Send Invite</Button></div>
      </Modal>
    </Page>
  );
}