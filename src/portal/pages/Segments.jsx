import { useMemo, useState } from "react";
import { Badge, Button, Card, ChannelBadge, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, Stepper, useToast } from "../ui/index.js";
import { Can } from "../auth/AccessContext.jsx";

const FIELDS = { city: ["Lahore", "Karachi", "Islamabad", "Riyadh", "Jeddah"], tag: ["VIP", "Wholesale", "Cart", "Eid Sale"], "last order": ["Last 7 days", "Last 30 days", "Over 90 days"], channel: ["WhatsApp", "SMS", "Email"] };
const SEED_SEGMENTS = [
  { id: 1, name: "VIP Customers", count: 54200, rules: ["tag is VIP", "channel is WhatsApp"] },
  { id: 2, name: "Cart Abandoners", count: 12480, rules: ["tag is Cart", "last order is Last 7 days"] },
  { id: 3, name: "KSA High Spenders", count: 31050, rules: ["city is Riyadh"] },
  { id: 4, name: "Win-back 90d", count: 8920, rules: ["last order is Over 90 days"] },
];
const CONSENT = [
  { id: 1, contact: "Ayesha Khan", channel: "whatsapp", source: "WhatsApp opt-in", date: "2024-11-08", status: "Opted-in" },
  { id: 2, contact: "Hira Sheikh", channel: "sms", source: "QR code", date: "2024-11-06", status: "Opted-in" },
  { id: 3, contact: "Usman Tariq", channel: "email", source: "Web form", date: "2024-10-29", status: "Opted-in" },
  { id: 4, contact: "Omar Al-Harbi", channel: "whatsapp", source: "WhatsApp opt-in", date: "2024-10-21", status: "Opted-in" },
  { id: 5, contact: "Bilal Ahmed", channel: "sms", source: "Reply STOP", date: "2024-11-02", status: "Opted-out" },
  { id: 6, contact: "Sara Iqbal", channel: "email", source: "Unsubscribe link", date: "2024-10-30", status: "Opted-out" },
];
const COLS = ["name", "phone", "city", "tags", "consent"];

function RuleBuilder({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [rules, setRules] = useState([{ f: "city", v: "Lahore" }]);
  const upd = (i, p) => setRules((l) => l.map((r, j) => (j === i ? { ...r, ...p } : r)));
  const est = Math.max(300, 60000 - rules.length * 17000 - rules.reduce((n, r) => n + r.v.length * 130, 0));
  return (
    <Modal open={open} onClose={onClose} className="w-full max-w-xl bg-portal-surface rounded-3xl shadow-2xl p-6 space-y-4">
      <h3 className="text-lg font-extrabold text-portal-ink">Naya segment</h3>
      <Field label="Segment name"><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Lahore VIPs" /></Field>
      <div className="space-y-2">
        <p className="text-xs font-bold text-portal-ink-soft">Rules (sab match hone chahiye)</p>
        {rules.map((r, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Select value={r.f} onChange={(e) => upd(i, { f: e.target.value, v: FIELDS[e.target.value][0] })} options={Object.keys(FIELDS)} className="capitalize" />
            <span className="text-xs text-portal-ink-muted">is</span>
            <Select value={r.v} onChange={(e) => upd(i, { v: e.target.value })} options={FIELDS[r.f]} />
            <button type="button" aria-label="Remove rule" disabled={rules.length === 1} onClick={() => setRules((l) => l.filter((_, j) => j !== i))} className="disabled:opacity-30"><Icon name="close" className="text-[18px]" /></button>
          </div>
        ))}
        <Button size="sm" variant="outline" icon="add" onClick={() => setRules((l) => [...l, { f: "tag", v: "VIP" }])}>Add rule</Button>
      </div>
      <p className="text-sm text-portal-ink-soft">Andaazan audience: <b className="text-portal-brand-deep">{est.toLocaleString()}</b> contacts (sirf opted-in)</p>
      <div className="flex justify-end gap-2"><Button variant="outline" onClick={onClose}>Cancel</Button><Button disabled={!name.trim()} onClick={() => { onSave({ id: Date.now(), name: name.trim(), count: est, rules: rules.map((r) => `${r.f} is ${r.v}`) }); setName(""); setRules([{ f: "city", v: "Lahore" }]); onClose(); }}>Save segment</Button></div>
    </Modal>
  );
}

function ImportWizard() {
  const toast = useToast();
  const [step, setStep] = useState(0);
  const [file, setFile] = useState(null);
  const [map, setMap] = useState({ Name: "name", Mobile: "phone", City: "city", Tag: "tags", "Opt-in": "consent" });
  const [declared, setDeclared] = useState(false);
  const rows = 1240;
  const done = step === 3;
  return (
    <Card className="p-6 space-y-6">
      <Stepper steps={["Upload CSV", "Map columns", "Consent declaration", "Summary"]} current={step} />
      {step === 0 && (
        <label className="block border-2 border-dashed border-portal-border rounded-2xl p-10 text-center cursor-pointer hover:bg-portal-tint/60 transition-colors">
          <Icon name="upload_file" className="text-4xl text-portal-brand" />
          <p className="font-bold text-portal-ink mt-2">{file ? file.name : "CSV file yahan chunein"}</p><p className="text-xs text-portal-ink-muted">Max 10 MB · pehli row header ho</p>
          <input type="file" accept=".csv" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
        </label>
      )}
      {step === 1 && (
        <div className="space-y-2.5 max-w-xl">{Object.keys(map).map((h) => <div key={h} className="flex items-center gap-3"><span className="w-28 text-sm font-bold text-portal-ink">{h}</span><Icon name="arrow_forward" className="text-[16px] text-portal-ink-muted" /><Select value={map[h]} onChange={(e) => setMap((m) => ({ ...m, [h]: e.target.value }))} options={[...COLS, "skip"]} /></div>)}</div>
      )}
      {step === 2 && (
        <div className="space-y-3 max-w-xl">
          <p className="text-sm text-portal-ink-soft">PTA / WhatsApp policy ke mutabiq sirf unhi contacts ko message bheje ja sakte hain jin ki razamandi maujood hai.</p>
          <label className="flex items-start gap-3 p-4 rounded-xl border border-portal-border bg-portal-tint/50 cursor-pointer"><input type="checkbox" checked={declared} onChange={(e) => setDeclared(e.target.checked)} className="mt-1 rounded text-portal-brand focus:ring-portal-brand" /><span className="text-sm text-portal-ink">Main tasdeeq karta/karti hun ke is list ke tamam contacts ne apni marzi se marketing messages receive karne ki ijazat di hai.</span></label>
        </div>
      )}
      {done && (
        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1 text-sm text-portal-ink">
          <p className="font-extrabold flex items-center gap-2"><Icon name="check_circle" className="text-emerald-600" />Import tayyar</p>
          <p><b>{rows.toLocaleString()}</b> rows · <b>1,180</b> valid · <b>42</b> duplicates skip · <b>18</b> invalid numbers</p><p className="text-xs text-portal-ink-muted">File: {file?.name || "contacts.csv"} (demo — backend abhi nahi juda)</p>
        </div>
      )}
      <div className="flex justify-between">
        <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => (done ? 0 : s - 1))}>{done ? "Naya import" : "Back"}</Button>
        {!done && <Can perm="segments.manage"><Button disabled={(step === 0 && !file) || (step === 2 && !declared)} onClick={() => { if (step === 2) toast("Import complete (demo)"); setStep((s) => s + 1); }}>{step === 2 ? "Import karein" : "Next"}</Button></Can>}
      </div>
    </Card>
  );
}

export default function Segments() {
  const toast = useToast();
  const [tab, setTab] = useState("segments");
  const [segs, setSegs] = useState(SEED_SEGMENTS);
  const [builder, setBuilder] = useState(false);
  const [cf, setCf] = useState("all");
  const log = useMemo(() => CONSENT.filter((c) => cf === "all" || (cf === "out" ? c.status === "Opted-out" : c.status === "Opted-in")), [cf]);
  return (
    <div className="space-y-6">
      <PageHero badge="Audience Tools" title="Segments & Consent" description="Rule-based segments, CSV import aur har contact ka consent record — compliance ke liye ek hi source."
        actions={<Can perm="segments.manage"><Button variant="accent" icon="add" onClick={() => setBuilder(true)}>New segment</Button></Can>} />
      <Segmented variant="solid" options={[{ value: "segments", label: "Segments" }, { value: "import", label: "Import" }, { value: "consent", label: "Consent log" }]} value={tab} onChange={setTab} />

      {tab === "segments" && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {segs.map((s) => (
            <Card key={s.id} hover className="p-5 space-y-3">
              <div className="flex justify-between items-start"><h3 className="font-extrabold text-portal-ink">{s.name}</h3>
                <Can perm="segments.manage"><button type="button" aria-label="Delete segment" onClick={() => { setSegs((l) => l.filter((x) => x.id !== s.id)); toast("Segment hata diya"); }}><Icon name="delete" className="text-[18px] text-portal-ink-muted hover:text-portal-danger" /></button></Can></div>
              <p className="text-3xl font-extrabold text-portal-brand-deep">{s.count.toLocaleString()}</p>
              <div className="flex flex-wrap gap-1.5">{s.rules.map((r) => <Badge key={r} tone="neutral">{r}</Badge>)}</div>
              <Can perm="campaigns.manage"><Button size="sm" variant="outline" className="w-full" onClick={() => toast(`"${s.name}" campaign ke liye select hua`)}>Use in campaign</Button></Can>
            </Card>
          ))}
        </div>
      )}
      {tab === "import" && <ImportWizard />}
      {tab === "consent" && (
        <Card className="p-0 overflow-hidden">
          <div className="p-5 flex items-center justify-between gap-3 flex-wrap"><div><h3 className="font-extrabold text-portal-ink">Consent log</h3><p className="text-xs text-portal-ink-muted">Source: QR, form, WhatsApp opt-in · opt-outs yahin se block hote hain</p></div>
            <Segmented variant="chips" options={[{ value: "all", label: "All" }, { value: "in", label: "Opted-in" }, { value: "out", label: "Opt-out list" }]} value={cf} onChange={setCf} /></div>
          <DataTable rows={log} columns={[
            { key: "contact", label: "Contact", className: "font-bold" }, { key: "channel", label: "Channel", render: (r) => <ChannelBadge channel={r.channel} /> },
            { key: "source", label: "Source" }, { key: "date", label: "Date", className: "text-portal-ink-muted" },
            { key: "status", label: "Status", render: (r) => <Badge tone={r.status === "Opted-in" ? "success" : "danger"} dot>{r.status}</Badge> }]} />
        </Card>
      )}
      <RuleBuilder open={builder} onClose={() => setBuilder(false)} onSave={(s) => { setSegs((l) => [s, ...l]); toast("Segment save ho gaya"); }} />
    </div>
  );
}
