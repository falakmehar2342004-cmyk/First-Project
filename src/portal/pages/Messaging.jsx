import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge, Button, Card, ChannelBadge, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, StatCard, Textarea, useToast } from "../ui/index.js";
import { Can } from "../auth/AccessContext.jsx";
import { cx } from "../lib/cx.js";

const TABS = [{ value: "whatsapp", label: "WhatsApp" }, { value: "sms", label: "SMS" }, { value: "email", label: "Email" }, { value: "templates", label: "Templates" }];
const SETUP = {
  whatsapp: { title: "WhatsApp Business API", status: ["success", "Connected"], rows: [["Number", "+92 300 0000000"], ["Business name", "nExMeg Store"], ["Quality rating", "High"], ["Messaging limit", "10K / 24h"]], stats: [["Sent", "84,200"], ["Delivered", "99.1%"], ["Read", "86.4%"]] },
  sms: { title: "SMS Gateway", status: ["warning", "1 Sender ID pending"], rows: [["Sender ID", "NEXMEG (approved)"], ["Pending", "NEXSALE (PTA review)"], ["Routes", "PK, KSA"], ["Mask quality", "Good"]], stats: [["Sent", "31,050"], ["Delivered", "97.8%"], ["Failed", "0.9%"]], link: ["/portal/compliance/senders", "Register new Sender ID"] },
  email: { title: "Email Sending", status: ["warning", "Domain verify pending"], rows: [["From", "hello@nexmeg.com"], ["Domain", "nexmeg.com (SPF ✓, DKIM ✗)"], ["Daily limit", "5,000"], ["Bounce rate", "0.8%"]], stats: [["Sent", "12,480"], ["Delivered", "98.9%"], ["Opened", "41.2%"]] },
};
const RECENT = [
  { id: 1, to: "Ayesha Khan", ch: "whatsapp", text: "Eid Mega Sale: 30% off…", status: "Read", time: "10:12" },
  { id: 2, to: "Hira Sheikh", ch: "sms", text: "Cart reminder: SAVE10", status: "Delivered", time: "09:50" },
  { id: 3, to: "Usman Tariq", ch: "email", text: "Wholesale price sheet", status: "Opened", time: "Mon" },
  { id: 4, to: "Omar Al-Harbi", ch: "whatsapp", text: "Ramadan bundle offer", status: "Failed", time: "Mon" },
];
const TEMPLATES = [
  { id: 1, name: "eid_sale_2024", ch: "whatsapp", cat: "Marketing", status: "Approved" },
  { id: 2, name: "order_confirmation", ch: "whatsapp", cat: "Utility", status: "Approved" },
  { id: 3, name: "winback_offer", ch: "whatsapp", cat: "Marketing", status: "Pending" },
  { id: 4, name: "otp_login", ch: "sms", cat: "Auth", status: "Approved" },
  { id: 5, name: "flash_sale_urdu", ch: "whatsapp", cat: "Marketing", status: "Rejected" },
];
const tone = { Approved: "success", Pending: "warning", Rejected: "danger", Read: "success", Delivered: "brand", Opened: "success", Failed: "danger" };

/** Simple blocks wala email editor (Modal ke andar). */
function EmailBuilder({ open, onClose }) {
  const toast = useToast();
  const [subject, setSubject] = useState("Eid ki khaas offer 🎉");
  const [blocks, setBlocks] = useState([{ id: 1, type: "heading", text: "Eid Mubarak!" }, { id: 2, type: "text", text: "Is hafte sab products par 30% tak discount." }, { id: 3, type: "button", text: "Shop now" }]);
  const add = (type) => setBlocks((l) => [...l, { id: Date.now(), type, text: type === "heading" ? "Naya heading" : type === "button" ? "Click here" : type === "image" ? "Image placeholder" : "Naya paragraph" }]);
  const move = (i, d) => setBlocks((l) => { const n = [...l]; const j = i + d; if (j < 0 || j >= n.length) return l; [n[i], n[j]] = [n[j], n[i]]; return n; });
  return (
    <Modal open={open} onClose={onClose} className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-portal-surface rounded-3xl shadow-2xl p-6">
      <div className="flex items-center justify-between mb-4"><h3 className="text-lg font-extrabold text-portal-ink">Email builder</h3><button type="button" onClick={onClose} aria-label="Close"><Icon name="close" /></button></div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Field label="Subject"><Input value={subject} onChange={(e) => setSubject(e.target.value)} /></Field>
          {blocks.map((b, i) => (
            <div key={b.id} className="p-3 rounded-xl border border-portal-border bg-portal-tint/40 space-y-2">
              <div className="flex items-center justify-between"><Badge tone="brand">{b.type}</Badge>
                <div className="flex gap-1"><button type="button" aria-label="Up" onClick={() => move(i, -1)}><Icon name="arrow_upward" className="text-[16px]" /></button><button type="button" aria-label="Down" onClick={() => move(i, 1)}><Icon name="arrow_downward" className="text-[16px]" /></button><button type="button" aria-label="Delete" onClick={() => setBlocks((l) => l.filter((x) => x.id !== b.id))}><Icon name="delete" className="text-[16px] text-portal-danger" /></button></div></div>
              <Input value={b.text} onChange={(e) => setBlocks((l) => l.map((x) => (x.id === b.id ? { ...x, text: e.target.value } : x)))} />
            </div>
          ))}
          <div className="flex flex-wrap gap-2">{["heading", "text", "image", "button"].map((t) => <Button key={t} size="sm" variant="outline" icon="add" onClick={() => add(t)}>{t}</Button>)}</div>
        </div>
        <div className="rounded-2xl border border-portal-border bg-white p-5 text-slate-800 space-y-3">
          <p className="text-[11px] text-slate-400">Subject: {subject}</p>
          {blocks.map((b) => b.type === "heading" ? <h4 key={b.id} className="text-xl font-extrabold">{b.text}</h4> : b.type === "button" ? <span key={b.id} className="inline-block px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-bold">{b.text}</span> : b.type === "image" ? <div key={b.id} className="h-24 rounded-lg bg-slate-100 text-slate-400 text-xs flex items-center justify-center">{b.text}</div> : <p key={b.id} className="text-sm">{b.text}</p>)}
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-5"><Button variant="outline" onClick={onClose}>Cancel</Button><Button onClick={() => { toast("Email template saved (demo)"); onClose(); }}>Save template</Button></div>
    </Modal>
  );
}

function NewTemplate({ open, onClose }) {
  const toast = useToast();
  const [f, setF] = useState({ name: "", ch: "whatsapp", cat: "Marketing", body: "" });
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));
  return (
    <Modal open={open} onClose={onClose} className="w-full max-w-lg bg-portal-surface rounded-3xl shadow-2xl p-6 space-y-4">
      <h3 className="text-lg font-extrabold text-portal-ink">Naya template</h3>
      <Field label="Template name"><Input value={f.name} onChange={set("name")} placeholder="eid_sale_2025" /></Field>
      <div className="grid grid-cols-2 gap-3"><Field label="Channel"><Select value={f.ch} onChange={set("ch")} options={["whatsapp", "sms", "email"]} /></Field><Field label="Category"><Select value={f.cat} onChange={set("cat")} options={["Marketing", "Utility", "Auth"]} /></Field></div>
      <Field label="Message" hint="Variables: {{name}}, {{order_id}}"><Textarea value={f.body} onChange={set("body")} placeholder="Salam {{name}}, …" /></Field>
      <div className="flex justify-end gap-2"><Button variant="outline" onClick={onClose}>Cancel</Button><Button disabled={!f.name || !f.body} onClick={() => { toast("Template approval ke liye submit hua"); onClose(); }}>Submit for approval</Button></div>
    </Modal>
  );
}

export default function Messaging() {
  const toast = useToast();
  const navigate = useNavigate();
  const [tab, setTab] = useState("whatsapp");
  const [builder, setBuilder] = useState(false);
  const [newTpl, setNewTpl] = useState(false);
  const [bc, setBc] = useState(false);
  const setup = SETUP[tab];
  const recent = RECENT.filter((r) => r.ch === tab);
  return (
    <div className="space-y-6">
      <PageHero badge="Channel Hub" title="Messaging" description="Channel setup, sender status, templates aur recent messages. Bulk bhejne ke liye Campaigns use karein."
        actions={<Can perm="campaigns.manage"><Button variant="accent" icon="campaign" onClick={() => setBc(true)}>Broadcast</Button></Can>} />
      <Segmented variant="solid" options={TABS} value={tab} onChange={setTab} />

      {setup && (
        <>
          <div className="grid sm:grid-cols-3 gap-4">{setup.stats.map(([l, v], i) => <StatCard key={l} icon={["send", "done_all", "visibility"][i]} label={l} value={v} tone={["brand", "deep", "accent"][i]} />)}</div>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between"><h3 className="font-extrabold text-portal-ink">{setup.title}</h3><Badge tone={setup.status[0]} dot>{setup.status[1]}</Badge></div>
              <dl className="space-y-2.5 text-sm">{setup.rows.map(([k, v]) => <div key={k} className="flex justify-between gap-3"><dt className="text-portal-ink-muted font-semibold">{k}</dt><dd className="font-bold text-portal-ink text-right">{v}</dd></div>)}</dl>
              {setup.link && <Button variant="outline" size="sm" className="w-full" onClick={() => navigate(setup.link[0])}>{setup.link[1]}</Button>}
              {tab === "email" && <Button variant="outline" size="sm" className="w-full" icon="edit" onClick={() => setBuilder(true)}>Open email builder</Button>}
            </Card>
            <Card className="lg:col-span-2 p-0 overflow-hidden">
              <div className="p-5 pb-3"><h3 className="font-extrabold text-portal-ink">Recent messages</h3></div>
              <DataTable rows={recent} empty="Is channel par abhi koi message nahi." columns={[
                { key: "to", label: "To", className: "font-bold" }, { key: "text", label: "Message", className: "text-portal-ink-soft" },
                { key: "status", label: "Status", render: (r) => <Badge tone={tone[r.status]}>{r.status}</Badge> }, { key: "time", label: "Time", className: "text-portal-ink-muted" }]} />
            </Card>
          </div>
        </>
      )}

      {tab === "templates" && (
        <Card className="p-0 overflow-hidden">
          <div className="p-5 flex items-center justify-between gap-3 flex-wrap"><div><h3 className="font-extrabold text-portal-ink">Message templates</h3><p className="text-xs text-portal-ink-muted">WhatsApp templates Meta approval ke baad hi bheje ja sakte hain.</p></div>
            <div className="flex gap-2"><Button variant="outline" size="sm" onClick={() => navigate("/portal/templates")}>Template studio</Button><Can perm="templates.manage"><Button size="sm" icon="add" onClick={() => setNewTpl(true)}>New template</Button></Can></div></div>
          <DataTable rows={TEMPLATES} columns={[
            { key: "name", label: "Name", className: "font-mono font-bold" }, { key: "ch", label: "Channel", render: (r) => <ChannelBadge channel={r.ch} /> },
            { key: "cat", label: "Category" }, { key: "status", label: "Approval", render: (r) => <Badge tone={tone[r.status]} dot>{r.status}</Badge> }]} />
        </Card>
      )}

      <Modal open={bc} onClose={() => setBc(false)} className="w-full max-w-md bg-portal-surface rounded-3xl shadow-2xl p-6 space-y-4">
        <h3 className="text-lg font-extrabold text-portal-ink">Quick broadcast</h3>
        <Field label="Channel"><Select options={["WhatsApp", "SMS", "Email"]} defaultValue={TABS.find((t) => t.value === tab)?.label} /></Field>
        <Field label="Template"><Select options={TEMPLATES.filter((t) => t.status === "Approved").map((t) => t.name)} /></Field>
        <Field label="Audience"><Select options={["All opted-in contacts", "VIP Customers", "Cart Abandoners"]} /></Field>
        <div className="flex justify-end gap-2"><Button variant="outline" onClick={() => setBc(false)}>Cancel</Button><Button variant="accent" onClick={() => { toast("Broadcast queued (demo)"); setBc(false); }}>Send now</Button></div>
      </Modal>
      <EmailBuilder open={builder} onClose={() => setBuilder(false)} />
      <NewTemplate open={newTpl} onClose={() => setNewTpl(false)} />
    </div>
  );
}
