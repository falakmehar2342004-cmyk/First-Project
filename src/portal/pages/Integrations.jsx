import { useState } from "react";
import { Badge, Button, Card, DataTable, Icon, PageHero, useToast } from "../ui/index.js";

const CHANNELS = [
  { id: "wa", name: "WhatsApp Business", icon: "chat", on: true }, { id: "fb", name: "Facebook", icon: "thumb_up", on: true }, { id: "ig", name: "Instagram", icon: "photo_camera", on: false },
  { id: "tt", name: "TikTok", icon: "music_note", on: false }, { id: "sc", name: "Snapchat", icon: "photo_camera_front", on: false }, { id: "sms", name: "SMS gateway", icon: "sms", on: true }, { id: "em", name: "Email domain", icon: "mail", on: false },
];
const TOOLS = [{ id: "sh", name: "Shopify", icon: "storefront", on: false }, { id: "wc", name: "WooCommerce", icon: "shopping_cart", on: false }, { id: "gs", name: "Google Sheets", icon: "table_chart", on: true }, { id: "pos", name: "POS", icon: "point_of_sale", on: false }];
const HOOKS = [{ id: 1, url: "https://shop.example.com/hooks/nexmeg", event: "message.delivered", status: "Active" }, { id: 2, url: "https://crm.example.com/inbound", event: "contact.opted_out", status: "Active" }];

function Tile({ item, onToggle }) {
  return (
    <Card hover className="p-5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0"><div className="w-11 h-11 rounded-xl bg-portal-brand/10 text-portal-brand-deep flex items-center justify-center shrink-0"><Icon name={item.icon} /></div><div className="min-w-0"><p className="font-bold text-portal-ink text-sm truncate">{item.name}</p><Badge tone={item.on ? "success" : "neutral"} dot>{item.on ? "Connected" : "Not connected"}</Badge></div></div>
      <Button size="sm" variant={item.on ? "outline" : "primary"} onClick={() => onToggle(item)}>{item.on ? "Disconnect" : "Connect"}</Button>
    </Card>
  );
}

export default function Integrations() {
  const toast = useToast();
  const [channels, setChannels] = useState(CHANNELS);
  const [tools, setTools] = useState(TOOLS);
  const [key, setKey] = useState("nxm_live_8f3a91c2d7e04b5a");
  const [show, setShow] = useState(false);
  const flip = (set) => (it) => { set((l) => l.map((x) => (x.id === it.id ? { ...x, on: !x.on } : x))); toast(it.on ? `${it.name} disconnected` : `${it.name} connected (demo)`); };
  const done = channels.filter((c) => c.on).length + tools.filter((t) => t.on).length;
  const total = channels.length + tools.length;
  return (
    <div className="space-y-6">
      <PageHero badge="Setup" title="Integrations" description="Channels aur business tools connect karein. Pehli dafa yahin se setup shuru hota hai.">
        <div className="mt-5 max-w-md"><div className="flex justify-between text-xs font-bold text-teal-50 mb-1.5"><span>Onboarding progress</span><span>{done} / {total} connected</span></div><div className="h-2 rounded-full bg-white/20 overflow-hidden"><div className="h-full bg-portal-mint rounded-full transition-all" style={{ width: `${(done / total) * 100}%` }} /></div></div>
      </PageHero>
      <section><h3 className="font-extrabold text-portal-ink mb-3">Channels</h3><div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">{channels.map((c) => <Tile key={c.id} item={c} onToggle={flip(setChannels)} />)}</div></section>
      <section><h3 className="font-extrabold text-portal-ink mb-3">Business tools</h3><div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">{tools.map((c) => <Tile key={c.id} item={c} onToggle={flip(setTools)} />)}</div></section>
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <h3 className="font-extrabold text-portal-ink">API keys</h3>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-portal-tint font-mono text-sm text-portal-ink"><span className="flex-1 truncate">{show ? key : `${key.slice(0, 9)}${"•".repeat(14)}`}</span>
            <button type="button" aria-label={show ? "Hide key" : "Show key"} onClick={() => setShow(!show)}><Icon name={show ? "visibility_off" : "visibility"} className="text-[18px]" /></button>
            <button type="button" aria-label="Copy key" onClick={() => { navigator.clipboard?.writeText(key); toast("Key copy ho gayi"); }}><Icon name="content_copy" className="text-[18px]" /></button></div>
          <Button variant="outline" size="sm" icon="refresh" onClick={() => { setKey(`nxm_live_${Math.random().toString(16).slice(2, 18)}`); setShow(true); toast("Nayi key bani — purani band ho gayi"); }}>Regenerate key</Button>
        </Card>
        <Card className="p-0 overflow-hidden"><div className="p-5 pb-3 flex justify-between items-center"><h3 className="font-extrabold text-portal-ink">Webhooks</h3><Button size="sm" icon="add" variant="outline" onClick={() => toast("Webhook form (demo)")}>Add</Button></div>
          <DataTable rows={HOOKS} columns={[{ key: "url", label: "Endpoint", className: "font-mono text-xs" }, { key: "event", label: "Event" }, { key: "status", label: "Status", render: (h) => <Badge tone="success" dot>{h.status}</Badge> }]} /></Card>
      </div>
    </div>
  );
}
