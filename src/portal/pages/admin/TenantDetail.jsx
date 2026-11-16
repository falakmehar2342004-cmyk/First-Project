import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, useToast } from "../../ui/index.js";
import { AreaChart, Avatar, IconBox, Meter, Page, Section, statusTone } from "./parts.jsx";
import { BROADCASTS, CH_META, INVOICES, PLANS, TENANTS, TENANT_COMPLIANCE, TENANT_SECURITY, TENANT_TABS, TENANT_TEAM, WALLET_ACTIVITY } from "./adminData.js";

const money = (s) => ({ cur: s.match(/[A-Z]{3}/)?.[0] || "PKR", n: Number(s.replace(/[^0-9.]/g, "")) || 0 });
const fmt = (cur, n) => `${cur} ${n.toLocaleString("en-US")}`;
const GATEWAYS = [
  { ch: "wa", title: "WhatsApp Business", sub: "Meta Cloud API v19.0", rows: [["WABA ID", "10928374921"], ["Quality Rating", "High (Green Tier)"], ["Messaging Limit", "Tier Unlimited"]] },
  { ch: "sms", title: "Pak Telco SS7/SMPP", sub: "Jazz • Telenor • Zong • Ufone", rows: [["Alpha Sender Mask", "AL-FATAH"], ["PTA DLT Status", "Approved / Compliant"], ["TPS Peak Capacity", "450 TPS (Pooled)"]] },
  { ch: "email", title: "Email Engine", sub: "Dedicated IP Cluster", rows: [["Primary Domain", "alfatah.pk"], ["DKIM / SPF / DMARC", "100% Verified"], ["Sender Reputation", "99/100 Score"]] },
  { ch: "voice", title: "Voice OTP & IVR", sub: "SIP Trunking / PRI", rows: [["SIP Routing Latency", "1.2s avg dialout"], ["Fallback Engine", "Auto-SMS Failover"], ["Concurrent Trunks", "64 E1 Channels"]] },
];

export default function TenantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const base = TENANTS.find((t) => t.id === id);
  const [tab, setTab] = useState("broadcasts");
  const [adj, setAdj] = useState(0);
  const [suspended, setSuspended] = useState(false);
  const [modal, setModal] = useState(null); // credits | plan | suspend
  const [amount, setAmount] = useState("");
  const [planSel, setPlanSel] = useState(base?.plan || "");
  const [adjType, setAdjType] = useState("+");
  const [adjAmt, setAdjAmt] = useState("");

  if (!base) {
    return (
      <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Registered Businesses", to: "/admin/businesses" }, { label: "Not found" }]}>
        <Card className="p-10 text-center"><p className="text-sm text-portal-ink-soft mb-4">Tenant <b>{id}</b> nahi mila.</p><Link to="/admin/businesses" className="inline-flex px-4 py-2 rounded-xl bg-portal-brand text-white text-sm font-bold">Directory par wapas</Link></Card>
      </Page>
    );
  }
  const t = { ...base, plan: planSel, status: suspended ? "Suspended" : base.status };
  const w = money(base.wallet);
  const wallet = fmt(w.cur, Math.max(0, w.n + adj));
  const applyCredit = (sign, raw, label) => {
    const v = Number(String(raw).replace(/[^0-9]/g, ""));
    if (!v) { toast("Amount likhein", "info"); return false; }
    setAdj((a) => a + (sign === "-" ? -v : v)); toast(`${label}: ${sign}${w.cur} ${v.toLocaleString("en-US")} (demo)`); return true;
  };

  const bCols = [
    { key: "name", label: "Campaign Name & Channel", render: (b) => <div className="flex items-center gap-3 min-w-[13rem]"><IconBox icon={CH_META[b.ch].icon} className="w-9 h-9" /><div><p className="font-bold">{b.name}</p><p className="text-xs text-portal-ink-muted">{b.sub}</p></div></div> },
    { key: "sent", label: "Dispatched", render: (b) => <div><p className="font-bold">{b.sent}</p><p className="text-xs text-portal-ink-muted">{b.target}</p></div> },
    { key: "dlr", label: "DLR %", render: (b) => <div><p className="font-bold text-portal-brand-deep">{b.dlr}</p><p className="text-xs text-portal-ink-muted">{b.dlrSub}</p></div> },
    { key: "cost", label: "Billed Cost", render: (b) => <span className="font-mono text-xs font-bold whitespace-nowrap">{b.cost}</span> },
    { key: "status", label: "Status", render: (b) => <Badge tone={statusTone(b.status)} dot>{b.status}</Badge> },
  ];
  const iCols = [
    { key: "id", label: "Invoice & Date", render: (i) => <div><p className="font-mono font-bold text-portal-brand-deep text-xs">{i.id}</p><p className="text-xs text-portal-ink-muted">{i.date}</p></div> },
    { key: "desc", label: "Description & Cycle", render: (i) => <div className="min-w-[12rem]"><p className="font-bold">{i.desc}</p><p className="text-xs text-portal-ink-muted">{i.note}</p></div> },
    { key: "base", label: "Base / PRA 16% / Total", render: (i) => <div className="whitespace-nowrap"><p className="font-bold">{i.base}</p><p className="text-xs text-portal-ink-muted">{i.split}</p></div> },
    { key: "ref", label: "Payment Ref", render: (i) => <div><p className="font-mono text-xs font-bold">{i.ref}</p><p className="text-xs text-portal-ink-muted">{i.refSub}</p></div> },
    { key: "status", label: "Status", render: (i) => <Badge tone="success" dot>{i.status}</Badge> },
    { key: "act", label: "Actions", render: (i) => <div className="flex gap-1">{[["download", "Download PDF"], ["qr_code_2", "FBR QR"], ["mail", "Email copy"]].map(([ic, tip]) => <button key={ic} type="button" title={tip} onClick={() => toast(`${tip}: ${i.id} (demo)`, "info")} className="p-1.5 rounded-lg hover:bg-portal-tint text-portal-ink-soft"><Icon name={ic} className="text-[18px]" /></button>)}</div> },
  ];

  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "Registered Businesses", to: "/admin/businesses" }, { label: t.name }]}>
      <PageHero badge={`${t.id} • ${t.status}`} title={t.legal} description={`${t.sub} • ${t.city} • ${t.reg} • ${t.kyc}`}
        actions={<>
          <Button variant="accent" icon="key" onClick={() => { toast(`Business portal mein "${t.name}" ke taur par login (demo)`, "info"); navigate("/portal"); }}>Login as Business</Button>
          <Button variant="glass" icon="add_circle" onClick={() => setModal("credits")}>Add Credits</Button>
          <Button variant="glass" icon="tune" onClick={() => setModal("plan")}>Change Plan</Button>
          <Button variant="glass" icon="download" onClick={() => toast("Audit export shuru (demo)", "info")}>Export Audit</Button>
          <Button variant="glass" icon={suspended ? "play_circle" : "block"} onClick={() => (suspended ? (setSuspended(false), toast("Tenant dobara active")) : setModal("suspend"))}>{suspended ? "Reactivate" : "Suspend"}</Button>
        </>} />

      <Card className="p-5 flex flex-col @3xl:flex-row @3xl:items-center gap-5">
        <div className="flex items-center gap-4 min-w-0"><Avatar text={t.ini} className="w-16 h-16 text-lg" /><div className="min-w-0"><p className="text-lg font-extrabold text-portal-ink">{t.legal}</p><p className="text-xs text-portal-ink-muted">{t.flag} {t.city} • {t.juris}</p></div></div>
        <div className="grid grid-cols-1 @xl:grid-cols-3 gap-4 @3xl:ml-auto text-xs">
          {[["person", "Primary Owner", t.owner], ["mail", "Direct Email", t.email], ["call", "Direct MSISDN", t.phone]].map(([ic, l, v]) => (
            <div key={l} className="flex items-center gap-2.5"><IconBox icon={ic} className="w-9 h-9" /><div className="min-w-0"><p className="text-[10px] font-bold uppercase text-portal-ink-muted">{l}</p><p className="font-bold text-portal-ink truncate">{v}</p></div></div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Card className="p-5"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted">Prepaid wallet balance</p><p className="text-2xl font-black text-portal-ink mt-1">{wallet}</p><div className="flex items-center justify-between mt-3"><span className="text-xs text-portal-ink-muted">Run-rate: ~18 days left</span><Button size="sm" variant="outline" onClick={() => setModal("credits")}>+ Top-up</Button></div></Card>
        <Card className="p-5"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted">Active contract plan</p><p className="text-xl font-black text-portal-ink mt-1">{t.plan}</p><p className="text-xs text-portal-ink-muted mt-3">{t.mrr} • auto-renewal in 12 days</p></Card>
        <Card className="p-5"><div className="flex justify-between"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted">Monthly quota</p><span className="text-xs font-bold text-portal-accent">{t.quota}%</span></div><p className="text-xl font-black text-portal-ink mt-1">{t.quotaText}</p><Meter className="mt-3" pct={t.quota} tone={t.quota > 90 ? "danger" : "brand"} /></Card>
        <Card className="p-5"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted">SLA delivery guarantee</p><p className="text-2xl font-black text-portal-ink mt-1">99.95%</p><p className="text-xs text-portal-ink-muted mt-3">P1 VIP node • throughput cap 1,200 msg/sec</p></Card>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3"><h3 className="text-base font-extrabold text-portal-ink">Integrated Gateways &amp; Channel Infrastructure</h3><button type="button" className="text-xs font-bold text-portal-brand" onClick={() => toast("Gateway health probe: sab theek (demo)")}>Run Gateway Health Probe</button></div>
        <div className="grid gap-4 grid-cols-1 @2xl:grid-cols-2 @6xl:grid-cols-4">
          {GATEWAYS.map((g) => { const on = t.channels.includes(g.ch); return (
            <Card key={g.ch} className={`p-4 space-y-3 ${on ? "" : "opacity-55"}`}>
              <div className="flex items-center gap-3"><IconBox icon={CH_META[g.ch].icon} /><div className="min-w-0"><p className="font-bold text-portal-ink leading-tight">{g.title}</p><p className="text-[11px] text-portal-ink-muted">{g.sub}</p></div><span className={`ml-auto w-2.5 h-2.5 rounded-full ${on ? "bg-emerald-500" : "bg-slate-400"}`} title={on ? "Connected" : "Not enabled"} /></div>
              {g.rows.map(([k, v]) => <div key={k} className="flex justify-between gap-2 text-xs"><span className="text-portal-ink-muted">{k}</span><span className="font-bold text-portal-ink text-right">{v}</span></div>)}
            </Card>
          ); })}
        </div>
      </div>

      <Segmented variant="solid" value={tab} onChange={setTab} options={TENANT_TABS} />

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <div className="@5xl:col-span-2 space-y-6 min-w-0">
          {tab === "broadcasts" && <Section title="Active Campaign Traffic" sub="Showing last 30 days outbound" bodyClass="p-0 pt-3"><DataTable columns={bCols} rows={BROADCASTS} /></Section>}
          {tab === "invoices" && <>
            <div className="grid grid-cols-2 @3xl:grid-cols-4 gap-4">
              {[["Total Billed (YTD)", "PKR 3.84M"], ["Last Invoice Paid", "PKR 240,000"], ["Pending Dues", "PKR 0.00"], ["Auto-Debit State", "Active"]].map(([l, v]) => <Card key={l} className="p-4"><p className="text-[10px] font-bold uppercase text-portal-ink-muted">{l}</p><p className="text-lg font-black text-portal-ink">{v}</p></Card>)}
            </div>
            <Section title="Invoices & Tax Documents" right={<Badge>18 Total</Badge>} bodyClass="p-0 pt-3"><DataTable columns={iCols} rows={INVOICES} rowKey="id" /></Section>
          </>}
          {tab === "compliance" && <Section title="Sender IDs & Regulatory Registrations" bodyClass="p-0 pt-3"><DataTable rows={TENANT_COMPLIANCE} columns={[{ key: "name", label: "Sender ID", render: (r) => <span className="font-mono font-bold">{r.name}</span> }, { key: "type", label: "Type" }, { key: "date", label: "Submitted" }, { key: "status", label: "Status", render: (r) => <Badge tone={statusTone(r.status)} dot>{r.status}</Badge> }]} /></Section>}
          {tab === "team" && <Section title="Team & API Keys" bodyClass="p-0 pt-3"><DataTable rows={TENANT_TEAM} columns={[{ key: "name", label: "Member", render: (r) => <div><p className="font-bold">{r.name}</p><p className="text-xs text-portal-ink-muted">{r.email}</p></div> }, { key: "role", label: "Role", render: (r) => <Badge tone="brand">{r.role}</Badge> }, { key: "last", label: "Last active" }]} />
            <div className="m-5 p-3 rounded-xl bg-portal-tint flex items-center justify-between text-xs"><span className="font-mono font-bold text-portal-ink">nx_live_••••••••••••9f2a</span><button type="button" className="font-bold text-portal-brand" onClick={() => toast("API key revoke/rotate — demo", "info")}>Rotate key</button></div></Section>}
          {tab === "security" && <Section title="Security & Audit Logs" bodyClass="p-0 pt-3"><DataTable rows={TENANT_SECURITY} columns={[{ key: "ev", label: "Event", className: "font-semibold" }, { key: "who", label: "Actor" }, { key: "ip", label: "IP", className: "font-mono text-xs" }, { key: "time", label: "When" }]} /></Section>}
        </div>

        <div className="space-y-6 min-w-0">
          {tab === "invoices" ? (<>
            <Section title="Super Admin Credit Override" sub="Goodwill credits ya manual bank-wire reconcile karein.">
              <div className="grid grid-cols-3 gap-2 mb-3"><Select options={["+", "-"].map((v) => ({ value: v, label: v === "+" ? "+ Credit" : "− Debit" }))} value={adjType} onChange={(e) => setAdjType(e.target.value)} /><Input className="col-span-2" placeholder="50,000" value={adjAmt} onChange={(e) => setAdjAmt(e.target.value)} /></div>
              <Select options={["Goodwill SLA Compensatory Waiver", "Manual Bank Wire Reconcile", "Refund / Credit Note"]} className="mb-3" />
              <Button className="w-full" icon="check_circle" onClick={() => applyCredit(adjType, adjAmt, "Adjustment lagi") && setAdjAmt("")}>Apply Adjustment</Button>
            </Section>
            <Section title="Recent Wallet Activity" bodyClass="p-5 space-y-2.5">{WALLET_ACTIVITY.map((a) => <div key={a.id} className="flex items-start gap-3 p-3 rounded-xl bg-portal-tint"><IconBox icon={a.up ? "south_west" : "north_east"} tone={a.up ? "brand" : "danger"} className="w-9 h-9" /><div className="min-w-0"><p className="text-sm font-extrabold text-portal-ink">{a.amt}</p><p className="text-xs font-semibold text-portal-ink">{a.title}</p><p className="text-[11px] text-portal-ink-muted">{a.sub}</p></div><Badge className="ml-auto" tone={a.up ? "success" : "neutral"}>{a.tag}</Badge></div>)}</Section>
          </>) : (<>
            <Section title="Delivery Telemetry" right={<Badge tone="brand" dot>Real-time</Badge>}>
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">{[["DLR Rate", "99.2%"], ["Read/Open", "78.4%"], ["Spam Score", "0.04%"]].map(([l, v]) => <div key={l} className="p-2.5 rounded-xl bg-portal-tint"><p className="text-[10px] font-bold uppercase text-portal-ink-muted">{l}</p><p className="text-base font-black text-portal-ink">{v}</p></div>)}</div>
              <AreaChart height={110} labels={["Mon", "Wed", "Fri", "Sun"]} series={[{ data: [58, 64, 61, 70, 76, 69, 82], color: "#0f9f8f" }]} />
            </Section>
            <Section title="Regulatory & DLT Checks" bodyClass="p-5 space-y-3 text-xs">
              {[["PTA Commercial Registration", "DLT Entity Reg #PTA-ENT-90214-LHR. All promotional templates pre-cleared."], ["FBR POS e-Invoicing Bridge", "Real-time fiscal invoice QR code transmission enabled via WhatsApp Cloud Webhooks."], ["API Credentials Health", "Production token generated 42 days ago. 2 active REST webhooks listening."]].map(([h, d]) => <div key={h}><p className="font-bold text-portal-ink">{h}</p><p className="text-portal-ink-muted">{d}</p></div>)}
              <p className="flex justify-between pt-2 border-t border-portal-border/70"><span className="text-portal-ink-muted">Next Compliance Audit</span><b className="text-portal-ink">Nov 2024 (Annual)</b></p>
            </Section>
          </>)}
        </div>
      </div>

      <Modal open={modal === "credits"} onClose={() => setModal(null)} className="w-full max-w-sm bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-1">Add Credits</h3><p className="text-xs text-portal-ink-muted mb-4">{t.name} • current {wallet}</p>
        <Field label={`Amount (${w.cur})`}><Input autoFocus value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="100,000" /></Field>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setModal(null)}>Cancel</Button><Button onClick={() => { if (applyCredit("+", amount, "Credits add hue")) { setAmount(""); setModal(null); } }}>Add Credits</Button></div>
      </Modal>
      <Modal open={modal === "plan"} onClose={() => setModal(null)} className="w-full max-w-sm bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-4">Change Plan</h3>
        <Field label="New plan"><Select value={planSel} onChange={(e) => setPlanSel(e.target.value)} options={[...new Set([...PLANS.map((p) => p.name), base.plan])]} /></Field>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setModal(null)}>Cancel</Button><Button onClick={() => { setModal(null); toast(`Plan: ${planSel} (demo)`); }}>Save Plan</Button></div>
      </Modal>
      <Modal open={modal === "suspend"} onClose={() => setModal(null)} className="w-full max-w-sm bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-2">Suspend {t.name}?</h3><p className="text-sm text-portal-ink-soft">Is tenant ki saari outbound messaging ruk jayegi jab tak dobara activate na kiya jaye.</p>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setModal(null)}>Cancel</Button><Button variant="accent" onClick={() => { setSuspended(true); setModal(null); toast("Tenant suspend ho gaya (demo)", "info"); }}>Suspend</Button></div>
      </Modal>
    </Page>
  );
}
