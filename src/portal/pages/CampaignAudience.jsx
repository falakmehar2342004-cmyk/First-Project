import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, DataTable, Toggle, WizardBar, useToast } from "../ui/index.js";
import { useCountry } from "../context/PortalContext.jsx";
import { cx } from "../lib/cx.js";

const SEGMENTS = [
  { id: "vip", name: "VIP Customers", total: 58400, optedIn: 54200, desc: "tag is VIP · WhatsApp" },
  { id: "cart", name: "Cart Abandoners", total: 13900, optedIn: 12480, desc: "tag is Cart · last 7 days" },
  { id: "ksa", name: "KSA High Spenders", total: 33100, optedIn: 31050, desc: "city is Riyadh" },
  { id: "all", name: "All contacts", total: 142000, optedIn: 118300, desc: "Har contact (sirf opted-in ko message jayega)" },
];
const RATE = { PKR: 4.5, SAR: 0.06 };
const PREVIEW = [
  { id: 1, name: "Ayesha Khan", phone: "+92 300 ••• 4567", city: "Lahore", consent: "Opted-in" },
  { id: 2, name: "Omar Al-Harbi", phone: "+966 50 ••• 4567", city: "Riyadh", consent: "Opted-in" },
  { id: 3, name: "Hira Sheikh", phone: "+92 321 ••• 4321", city: "Karachi", consent: "Opted-in" },
];

/** Campaign wizard — Step 2: Audience. */
export default function CampaignAudience() {
  const navigate = useNavigate();
  const toast = useToast();
  const { currency } = useCountry();
  const [sel, setSel] = useState("vip");
  const [skipRecent, setSkipRecent] = useState(true);
  const seg = SEGMENTS.find((s) => s.id === sel);
  const reach = skipRecent ? Math.round(seg.optedIn * 0.93) : seg.optedIn;
  const blocked = seg.total - seg.optedIn;
  const cost = Math.round(reach * (RATE[currency] ?? RATE.PKR));
  return (
    <div className="space-y-6">
      <WizardBar step={2} title="Choose your audience" description="Sirf wahi contacts jin ki razamandi (opt-in) maujood hai, is channel par message payenge." />
      <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {SEGMENTS.map((s) => (
              <button key={s.id} type="button" onClick={() => setSel(s.id)} aria-pressed={sel === s.id}
                className={cx("p-card text-left p-5 transition-all", sel === s.id ? "!border-portal-brand ring-2 ring-portal-brand/25" : "hover:-translate-y-0.5")}>
                <div className="flex items-center justify-between"><p className="font-extrabold text-portal-ink">{s.name}</p><span className={cx("w-5 h-5 rounded-full border-2 flex items-center justify-center", sel === s.id ? "border-portal-brand bg-portal-brand" : "border-portal-line")}>{sel === s.id && <span className="w-2 h-2 rounded-full bg-white" />}</span></div>
                <p className="text-2xl font-extrabold text-portal-brand-deep mt-1">{s.optedIn.toLocaleString()}</p>
                <p className="text-xs text-portal-ink-muted">{s.desc}</p>
              </button>
            ))}
          </div>
          <Card className="p-5 space-y-4">
            <h3 className="font-extrabold text-portal-ink">Filters</h3>
            <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-bold text-portal-ink">Sirf opted-in contacts</p><p className="text-xs text-portal-ink-muted">Compliance ke liye hamesha on — band nahi ho sakta.</p></div><Toggle checked disabled label="Opted-in only" onChange={() => {}} /></div>
            <div className="flex items-center justify-between gap-4"><div><p className="text-sm font-bold text-portal-ink">Pichle 7 din mein message wale skip karein</p><p className="text-xs text-portal-ink-muted">Spam complaints aur opt-outs kam karta hai.</p></div><Toggle checked={skipRecent} onChange={setSkipRecent} label="Skip recently messaged" /></div>
          </Card>
          <Card className="p-0 overflow-hidden"><div className="p-5 pb-3"><h3 className="font-extrabold text-portal-ink">Preview — {seg.name}</h3></div>
            <DataTable rows={PREVIEW} columns={[{ key: "name", label: "Name", className: "font-bold" }, { key: "phone", label: "Contact" }, { key: "city", label: "City" }, { key: "consent", label: "Consent", render: (r) => <Badge tone="success" dot>{r.consent}</Badge> }]} /></Card>
        </div>
        <Card className="p-5 space-y-3 lg:sticky lg:top-4">
          <h3 className="font-extrabold text-portal-ink">Estimated reach</h3>
          <p className="text-4xl font-extrabold text-portal-brand-deep">{reach.toLocaleString()}</p>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between"><dt className="text-portal-ink-muted">Segment total</dt><dd className="font-bold text-portal-ink">{seg.total.toLocaleString()}</dd></div>
            <div className="flex justify-between"><dt className="text-portal-ink-muted">No consent (blocked)</dt><dd className="font-bold text-portal-danger">−{blocked.toLocaleString()}</dd></div>
            <div className="flex justify-between"><dt className="text-portal-ink-muted">Est. cost</dt><dd className="font-bold text-portal-ink">{currency} {cost.toLocaleString()}</dd></div>
          </dl>
          <Button variant="accent" className="w-full" onClick={() => navigate("/portal/campaigns/new")}>Continue to Message</Button>
          <Button variant="outline" className="w-full" onClick={() => toast("Draft save ho gaya")}>Save as draft</Button>
          <Button variant="ghost" className="w-full" onClick={() => navigate("/portal/campaigns")}>Back to Step 1</Button>
        </Card>
      </div>
    </div>
  );
}
