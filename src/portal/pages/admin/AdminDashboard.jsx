import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Card, DataTable, Icon, PageHero } from "../../ui/index.js";
import { useAccess } from "../../auth/AccessContext.jsx";
import { NAV_ADMIN } from "../../layout/nav.js";
import { AreaChart, Avatar, IconBox, Kpi, Meter, Page, Section, statusTone } from "./parts.jsx";
import { DASH_ALERTS, TENANTS } from "./adminData.js";

const SHORTCUT_TEXT = {
  "/admin/businesses": "1,248 registered tenants, KYC & wallets",
  "/admin/billing": "Plans, subscriptions & settlements",
  "/admin/channels": "Carrier binds, TPS & failover",
  "/admin/compliance": "Consent ledger, DND & strikes",
  "/admin/support": "Tickets, SLA & escalations",
  "/admin/analytics": "Throughput, DLR & yield",
  "/admin/settings": "Staff, roles & platform config",
};

export default function AdminDashboard() {
  const { can, roleInfo } = useAccess();
  const navigate = useNavigate();
  const alerts = DASH_ALERTS.filter((a) => can(a.perm));
  const shortcuts = NAV_ADMIN.filter((n) => n.to !== "/admin" && can(n.perm));
  const cols = [
    { key: "name", label: "Business", render: (t) => <div className="flex items-center gap-3"><Avatar text={t.ini} /><div><p className="font-bold">{t.name}</p><p className="text-xs text-portal-ink-muted">{t.id} • {t.city}</p></div></div> },
    { key: "plan", label: "Plan", render: (t) => <span className="text-xs font-semibold">{t.plan}</span> },
    { key: "quota", label: "Quota", render: (t) => <div className="w-28"><Meter pct={t.quota} tone={t.quota > 90 ? "danger" : "brand"} /><span className="text-[11px] text-portal-ink-muted">{t.quotaText}</span></div> },
    { key: "status", label: "Status", render: (t) => <Badge tone={statusTone(t.status)} dot>{t.status}</Badge> },
  ];
  return (
    <Page crumbs={[{ label: "Admin Portal" }, { label: "Dashboard" }]}>
      <PageHero badge="Platform Control Centre" title="nExMeg Admin Dashboard"
        description={`Welcome back — logged in as ${roleInfo.label}. Poore platform ka live snapshot: tenants, gateways, SLA aur revenue.`}
        actions={can("admin.analytics") ? <Button variant="glass" icon="insights" onClick={() => navigate("/admin/analytics")}>Open Analytics</Button> : null} />

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-4">
        <Kpi icon="store" label="Total tenants" value="1,248" badge="+18 this week" sub="1,180 active" />
        <Kpi icon="payments" label="Platform MRR" value="PKR 48.6M" badge="+18.2% MoM" sub="ARPU PKR 41.2k" />
        <Kpi icon="monitoring" label="24h delivery success" value="99.82%" badge="Target 99.5%" sub="All gateways healthy" />
        <Kpi icon="support_agent" label="Open tickets" value="42" badge="12 P0/P1" badgeTone="danger" tone="warning" sub="Avg first response 4.2m" />
      </div>

      <div className="grid gap-6 grid-cols-1 @4xl:grid-cols-3">
        <Section className="@4xl:col-span-2" title="Platform throughput (last 7 days)" sub="Total dispatches across WhatsApp, SMS and Voice"
          right={<Badge tone="brand" dot>Live</Badge>}>
          <AreaChart height={200} labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            series={[{ data: [5.1, 5.6, 5.4, 6.2, 6.9, 6.1, 7.4], color: "#0f9f8f" }, { data: [1.2, 1.4, 1.3, 1.6, 1.5, 1.4, 1.8], color: "#ff6b4a" }]} />
        </Section>
        <Section title="Needs attention" sub="Items that need an operator" bodyClass="p-5 space-y-2.5">
          {alerts.length === 0 && <p className="text-sm text-portal-ink-muted">Koi alert nahi — sab theek hai.</p>}
          {alerts.map((a) => (
            <Link key={a.id} to={a.to} className="flex items-start gap-3 p-3 rounded-xl bg-portal-tint hover:bg-portal-tint-2 transition-colors">
              <IconBox icon={a.icon} tone={a.tone} className="w-9 h-9" />
              <span className="text-xs font-semibold text-portal-ink leading-snug">{a.text}</span>
            </Link>
          ))}
        </Section>
      </div>

      <div className="grid gap-4 grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 @6xl:grid-cols-4">
        {shortcuts.map((n) => (
          <Link key={n.to} to={n.to}>
            <Card hover className="p-4 flex items-center gap-3 h-full">
              <IconBox icon={n.icon.ms} />
              <div className="min-w-0"><p className="text-sm font-extrabold text-portal-ink">{n.label}</p><p className="text-xs text-portal-ink-muted">{SHORTCUT_TEXT[n.to]}</p></div>
              <Icon name="arrow_forward" className="ml-auto text-[18px] text-portal-ink-muted" />
            </Card>
          </Link>
        ))}
      </div>

      {can("admin.tenants") && (
        <Section title="Recently active tenants" right={<Link to="/admin/businesses" className="text-xs font-bold text-portal-brand hover:underline">View all →</Link>} bodyClass="p-0 pt-3">
          <DataTable columns={cols} rows={TENANTS.slice(0, 5)} onRowClick={(t) => navigate(`/admin/businesses/${t.id}`)} />
        </Section>
      )}
    </Page>
  );
}
