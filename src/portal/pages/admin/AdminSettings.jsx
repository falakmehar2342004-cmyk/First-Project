import { useMemo, useState } from "react";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, Toggle, useToast } from "../../ui/index.js";
import { Avatar, Kpi, Meter, Page, SearchBox, Section } from "./parts.jsx";
import { MATRIX, MATRIX_ROLES, STAFF } from "./adminData.js";

const TABS = [{ value: "team", label: "Team & RBAC Matrix" }, { value: "config", label: "Global Platform Config" }, { value: "fx", label: "Currencies & Tax Rules" }, { value: "logs", label: "Security & Session Logs" }, { value: "hooks", label: "Notification Webhooks" }];
const ROLE_FILTERS = ["All Roles", "Super Admin", "NOC Lead", "Compliance Lead", "Billing & Finance"];
const CELL = [{ icon: "remove", cls: "text-portal-ink-muted" }, { icon: "visibility", cls: "text-portal-ink-soft" }, { icon: "check_circle", cls: "text-portal-brand" }];

export default function AdminSettings() {
  const toast = useToast();
  const [tab, setTab] = useState("team");
  const [q, setQ] = useState(""); const [role, setRole] = useState("All Roles");
  const [matrix, setMatrix] = useState(MATRIX);
  const [dirty, setDirty] = useState(false);
  const [invite, setInvite] = useState(false);
  const [lock, setLock] = useState(false);
  const [cfg, setCfg] = useState({ autoSuspend: true, mfa: true, timeout: "15 Minutes", batch: "30 Seconds" });
  const staff = useMemo(() => STAFF.filter((s) => (role === "All Roles" || s.role.startsWith(role.split(" ")[0])) && (!q || `${s.name} ${s.email}`.toLowerCase().includes(q.toLowerCase()))), [q, role]);
  const cycle = (rid, i) => { setMatrix((m) => m.map((r) => (r.id === rid ? { ...r, v: r.v.map((x, j) => (j === i ? (x + 1) % 3 : x)) } : r))); setDirty(true); };
  const cols = [
    { key: "name", label: "Admin Member", render: (s) => <div className="flex items-center gap-3 min-w-[13rem]"><Avatar text={s.ini} className="rounded-full" /><div><p className="font-bold">{s.name}</p><p className="text-xs text-portal-ink-muted">{s.email}</p></div></div> },
    { key: "role", label: "Role Tier", render: (s) => <Badge tone="brand">{s.role}</Badge> },
    { key: "dept", label: "Department" },
    { key: "mfa", label: "2FA Security", render: (s) => <Badge tone="success"><Icon name="key" className="text-[13px]" />{s.mfa}</Badge> },
    { key: "active", label: "Last Active & Trace IP", render: (s) => <div className="whitespace-nowrap"><p className="font-semibold">{s.active}</p><p className="font-mono text-[10px] text-portal-ink-muted">{s.ip}</p></div> },
  ];
  const save = () => { setDirty(false); toast("Changes save ho gayi (demo — sirf is session mein)"); };
  return (
    <Page crumbs={[{ label: "Admin Portal", to: "/admin" }, { label: "System Administration" }, { label: "Settings, Roles & RBAC" }]}>
      <PageHero badge="Security Hardened: Active • RBAC Policy Engine v2.4" title="Settings, Roles & Access Control (RBAC)" description="Global platform parameters, administrative team members, granular role permissions, exchange rates and security enforcement."
        actions={<><Button variant="glass" icon="download" onClick={() => toast("Audit log export (demo)", "info")}>Export Audit Log</Button><Button variant="accent" icon="save" disabled={!dirty} onClick={save}>{dirty ? "Save Changes" : "Saved"}</Button></>} />

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="group" label="Active admin users" value="18 Members" sub="Across 4 defined system tiers" />
        <Kpi icon="verified_user" label="Enforced 2FA coverage" value="100%" sub="Zero non-MFA bypasses" />
        <Kpi icon="key" label="Active API session tokens" value="42 Keys" sub="Automated 90-day rotation" />
        <Kpi icon="gpp_good" label="Security audit events (24h)" value="318 Logs" sub="0 unauthorized escalations" tone="warning" />
      </div>

      <Segmented variant="solid" value={tab} onChange={setTab} options={TABS} />

      <div className="grid gap-6 grid-cols-1 @5xl:grid-cols-3">
        <div className="@5xl:col-span-2 space-y-6 min-w-0">
          {tab === "team" ? (<>
            <Section title="Administrative Staff & Role Directory" sub="Operator identities, privilege levels and active authentication states" right={<Button size="sm" icon="person_add" onClick={() => setInvite(true)}>Invite Admin</Button>} bodyClass="p-0 pt-3">
              <div className="flex flex-col @2xl:flex-row gap-3 px-5 pb-3"><SearchBox className="flex-1" value={q} onChange={setQ} placeholder="Filter by name, email…" /><Segmented variant="chips" value={role} onChange={setRole} options={ROLE_FILTERS} /></div>
              <DataTable columns={cols} rows={staff} empty="Koi member nahi mila." />
            </Section>
            <Section title="Role Permission Matrix" sub="Cell par click karke permission badlein: Full → View-only → None" right={<Badge tone="success" dot>Live Sync Active</Badge>} bodyClass="p-0 pt-3 overflow-x-auto">
              <table className="w-full text-sm"><thead><tr className="text-[11px] uppercase tracking-wider font-bold"><th className="py-3 px-4 text-left">Permission Scope</th>{MATRIX_ROLES.map((r) => <th key={r} className="py-3 px-2 text-center">{r}</th>)}</tr></thead>
                <tbody className="divide-y divide-portal-border/70">{matrix.map((m) => <tr key={m.id}><td className="py-3 px-4"><p className="font-bold text-portal-ink">{m.scope}</p><p className="text-xs text-portal-ink-muted">{m.sub}</p></td>{m.v.map((x, i) => <td key={i} className="text-center"><button type="button" aria-label={`${m.scope} / ${MATRIX_ROLES[i]}`} onClick={() => cycle(m.id, i)} className={`p-1.5 rounded-lg hover:bg-portal-tint ${CELL[x].cls}`}><Icon name={CELL[x].icon} className="text-[20px]" /></button></td>)}</tr>)}</tbody></table>
            </Section>
          </>) : <Card className="p-8 text-center text-sm text-portal-ink-muted"><Icon name="construction" className="text-[32px] block mx-auto mb-2" />Is tab ka demo content jald add hoga. Abhi "Team & RBAC Matrix" tab dekhein.</Card>}
        </div>

        <div className="space-y-6 min-w-0">
          <Section title="Platform Rules & Throttles" sub="Cluster engine boundary defaults" bodyClass="p-5 space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-portal-tint"><div className="flex justify-between mb-1.5"><b className="text-portal-ink">Max Throughput Cap</b><span className="font-bold text-portal-brand">200 TPS (Default)</span></div><Meter pct={67} /></div>
            <div className="p-3 rounded-xl bg-portal-tint flex items-center justify-between gap-2"><b className="text-portal-ink">Batch Queue Timeout</b><Select className="!w-auto !py-1.5 text-xs" value={cfg.batch} onChange={(e) => { setCfg({ ...cfg, batch: e.target.value }); setDirty(true); }} options={["15 Seconds", "30 Seconds", "60 Seconds"]} /></div>
            <div className="p-3 rounded-xl bg-portal-tint flex items-center justify-between gap-2"><span><b className="text-portal-ink block">Opt-Out Auto-Suspend</b><span className="text-portal-ink-muted">Trigger when complaint &gt; 0.5%</span></span><Toggle checked={cfg.autoSuspend} onChange={(v) => { setCfg({ ...cfg, autoSuspend: v }); setDirty(true); }} label="Opt-out auto suspend" /></div>
          </Section>
          <Section title="Currencies & Regional Taxes" sub="Base exchange rates & telco levies" bodyClass="p-5 space-y-2 text-xs">
            {[["PKR", "Pakistani Rupee • Base", "FBR / PRA GST", "19.5% GST on Telco"], ["SAR", "Saudi Riyal • 1 SAR = 74.20 PKR", "CITC VAT Rule", "15.0% Standard VAT"], ["AED", "UAE Dirham • 1 AED = 75.80 PKR", "FTA VAT Rule", "5.0% Federal VAT"]].map(([c, n, t, v]) => <div key={c} className="p-3 rounded-xl bg-portal-tint"><p><b className="text-portal-ink">{c}</b> <span className="text-portal-ink-muted">{n}</span></p><p className="flex justify-between mt-1"><span className="text-portal-ink-muted">{t}</span><b className="text-portal-ink">{v}</b></p></div>)}
            <Button size="sm" variant="outline" className="w-full" icon="sync" onClick={() => toast("Forex rates sync (demo — hard-coded values)", "info")}>Sync Forex Rates</Button>
          </Section>
          <Section title="Authentication Guardrails" sub="Zero-trust administrative posture" bodyClass="p-5 space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-portal-tint flex items-center justify-between"><span><b className="text-portal-ink block">Mandatory 2FA Enforcement</b><span className="text-portal-ink-muted">Enforced for 100% staff</span></span><Toggle checked={cfg.mfa} onChange={(v) => { setCfg({ ...cfg, mfa: v }); setDirty(true); }} label="Mandatory 2FA" /></div>
            <div className="p-3 rounded-xl bg-portal-tint flex items-center justify-between gap-2"><b className="text-portal-ink">Session Inactivity Timeout</b><Select className="!w-auto !py-1.5 text-xs" value={cfg.timeout} onChange={(e) => { setCfg({ ...cfg, timeout: e.target.value }); setDirty(true); }} options={["5 Minutes", "15 Minutes", "30 Minutes"]} /></div>
            <div className="p-3 rounded-xl bg-portal-tint"><p className="flex justify-between"><b className="text-portal-ink">Corporate IP Whitelist</b><span className="text-portal-brand font-bold">VPN Enforced</span></p><p className="font-mono mt-1 text-portal-ink-soft">192.168.1.0/24 • 10.0.0.0/8</p></div>
          </Section>
          <Card className="p-5 border-red-300/70 dark:border-red-900/60 bg-red-50/60 dark:bg-red-950/20">
            <p className="font-extrabold text-red-700 dark:text-red-300 flex items-center gap-2"><Icon name="warning" className="text-[18px]" />Emergency Platform Lockdown</p>
            <p className="text-xs text-portal-ink-soft mt-1">Instantly terminates all non-Super Admin sessions and freezes outbound SMS/WhatsApp queues.</p>
            <Button className="w-full mt-3 !bg-red-700 hover:!bg-red-800" icon="lock_reset" onClick={() => setLock(true)}>Initiate Platform Lockdown</Button>
          </Card>
        </div>
      </div>

      <Modal open={invite} onClose={() => setInvite(false)} className="w-full max-w-md bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-4">Invite Admin</h3>
        <div className="space-y-3"><Field label="Full name"><Input placeholder="e.g. Hira Naveed" /></Field><Field label="Work email"><Input type="email" placeholder="name@nexmeg.internal" /></Field><Field label="Role tier"><Select options={["NOC Lead", "Compliance Lead", "Billing & Finance", "Support & Ops Lead"]} /></Field></div>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setInvite(false)}>Cancel</Button><Button onClick={() => { setInvite(false); toast("Invite bhej di (demo)"); }}>Send Invite</Button></div>
      </Modal>
      <Modal open={lock} onClose={() => setLock(false)} className="w-full max-w-sm bg-portal-surface rounded-2xl border border-portal-border p-6 shadow-2xl">
        <h3 className="text-lg font-extrabold text-portal-ink mb-2">Confirm platform lockdown?</h3><p className="text-sm text-portal-ink-soft">Yeh demo hai — asal mein koi session band nahi hoga.</p>
        <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={() => setLock(false)}>Cancel</Button><Button className="!bg-red-700" onClick={() => { setLock(false); toast("Lockdown simulated (demo)", "info"); }}>Confirm</Button></div>
      </Modal>
    </Page>
  );
}
