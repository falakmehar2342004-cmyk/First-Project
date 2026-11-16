import { useState } from "react";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Segmented, Select, StatCard, Stepper, Textarea, Toggle, useToast } from "../ui/index.js";
import { cx } from "../lib/cx.js";

const PLATFORMS = ["Instagram", "Facebook", "TikTok", "Snapchat"];
const PCOLOR = { Instagram: "bg-pink-500", Facebook: "bg-blue-600", TikTok: "bg-slate-800", Snapchat: "bg-yellow-400" };
const SEED_POSTS = [{ id: 1, day: 3, platform: "Instagram", caption: "Eid collection live 🎉" }, { id: 2, day: 8, platform: "Facebook", caption: "Weekend flash sale" }, { id: 3, day: 14, platform: "TikTok", caption: "Behind the scenes" }, { id: 4, day: 21, platform: "Instagram", caption: "Customer reviews" }];
const ACCOUNTS = [{ name: "Meta (Facebook)", icon: "thumb_up", on: true }, { name: "Instagram", icon: "photo_camera", on: true }, { name: "TikTok", icon: "music_note", on: false }, { name: "Snapchat", icon: "photo_camera_front", on: false }];
const ADS = [
  { id: 1, name: "Eid Mega Sale", platform: "Meta", status: "Active", spend: 42000, reach: 310000, clicks: 9800, roas: 4.2 },
  { id: 2, name: "Ramadan Reels", platform: "Instagram", status: "Active", spend: 28500, reach: 190000, clicks: 6100, roas: 3.1 },
  { id: 3, name: "Cart Retarget", platform: "Meta", status: "Paused", spend: 9200, reach: 41000, clicks: 1500, roas: 5.6 },
];

function Composer({ open, onClose, onSave, day }) {
  const [f, setF] = useState({ platform: "Instagram", caption: "", media: "", date: "" });
  return (
    <Modal open={open} onClose={onClose} className="w-full max-w-lg bg-portal-surface rounded-3xl shadow-2xl p-6 space-y-4">
      <h3 className="text-lg font-extrabold text-portal-ink">Post composer</h3>
      <div className="grid grid-cols-2 gap-3"><Field label="Platform"><Select value={f.platform} onChange={(e) => setF({ ...f, platform: e.target.value })} options={PLATFORMS} /></Field><Field label="Schedule"><Input type="date" value={f.date} onChange={(e) => setF({ ...f, date: e.target.value })} /></Field></div>
      <Field label="Caption" hint={`${f.caption.length}/2200`}><Textarea value={f.caption} onChange={(e) => setF({ ...f, caption: e.target.value })} placeholder="Caption likhein…" /></Field>
      <label className="block border-2 border-dashed border-portal-border rounded-xl p-5 text-center text-sm text-portal-ink-muted cursor-pointer hover:bg-portal-tint/60"><Icon name="image" className="text-2xl text-portal-brand" /><br />{f.media || "Image / video chunein"}<input type="file" accept="image/*,video/*" className="hidden" onChange={(e) => setF({ ...f, media: e.target.files?.[0]?.name || "" })} /></label>
      <div className="flex justify-end gap-2"><Button variant="outline" onClick={onClose}>Cancel</Button><Button disabled={!f.caption.trim()} onClick={() => { const d = f.date ? Number(f.date.slice(8)) : day || 1; onSave({ id: Date.now(), day: d, platform: f.platform, caption: f.caption }); setF({ platform: "Instagram", caption: "", media: "", date: "" }); onClose(); }}>Schedule post</Button></div>
    </Modal>
  );
}

function CreateAd({ open, onClose, onSave }) {
  const [step, setStep] = useState(0);
  const [f, setF] = useState({ name: "", objective: "Sales", audience: "VIP Customers", budget: 5000, creative: "" });
  const reset = () => { setStep(0); onClose(); };
  return (
    <Modal open={open} onClose={reset} className="w-full max-w-lg bg-portal-surface rounded-3xl shadow-2xl p-6 space-y-5">
      <h3 className="text-lg font-extrabold text-portal-ink">Create ad</h3>
      <Stepper steps={["Objective", "Audience", "Budget", "Creative"]} current={step} />
      {step === 0 && <div className="space-y-3"><Field label="Ad name"><Input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></Field><Field label="Objective"><Select value={f.objective} onChange={(e) => setF({ ...f, objective: e.target.value })} options={["Sales", "Traffic", "Leads", "Awareness", "Messages"]} /></Field></div>}
      {step === 1 && <Field label="Audience"><Select value={f.audience} onChange={(e) => setF({ ...f, audience: e.target.value })} options={["VIP Customers", "Cart Abandoners", "KSA High Spenders", "Lookalike 1%"]} /></Field>}
      {step === 2 && <Field label={`Daily budget: PKR ${Number(f.budget).toLocaleString()}`}><input type="range" min="1000" max="50000" step="500" value={f.budget} onChange={(e) => setF({ ...f, budget: e.target.value })} className="w-full accent-teal-600" /></Field>}
      {step === 3 && <Field label="Creative (headline)"><Textarea rows={3} value={f.creative} onChange={(e) => setF({ ...f, creative: e.target.value })} placeholder="Ad ka text…" /></Field>}
      <div className="flex justify-between"><Button variant="outline" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</Button>
        {step < 3 ? <Button disabled={step === 0 && !f.name.trim()} onClick={() => setStep(step + 1)}>Next</Button> : <Button variant="accent" disabled={!f.creative.trim()} onClick={() => { onSave({ id: Date.now(), name: f.name, platform: "Meta", status: "In review", spend: 0, reach: 0, clicks: 0, roas: 0 }); setF({ name: "", objective: "Sales", audience: "VIP Customers", budget: 5000, creative: "" }); reset(); }}>Launch ad</Button>}</div>
    </Modal>
  );
}

export default function SocialAds() {
  const toast = useToast();
  const [tab, setTab] = useState("planner");
  const [posts, setPosts] = useState(SEED_POSTS);
  const [accounts, setAccounts] = useState(ACCOUNTS);
  const [ads, setAds] = useState(ADS);
  const [composer, setComposer] = useState(null);
  const [adOpen, setAdOpen] = useState(false);
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const tone = { Active: "success", Paused: "warning", "In review": "brand" };
  return (
    <div className="space-y-6">
      <PageHero badge="Social & Paid" title="Social & Ads" description="Content calendar, post scheduling aur ad campaigns — Meta, Instagram, TikTok aur Snapchat."
        actions={tab === "planner" ? <Button variant="accent" icon="edit_calendar" onClick={() => setComposer(0)}>New post</Button> : <Button variant="accent" icon="add" onClick={() => setAdOpen(true)}>Create ad</Button>} />
      <Segmented variant="solid" options={[{ value: "planner", label: "Planner" }, { value: "ads", label: "Ads" }]} value={tab} onChange={setTab} />

      {tab === "planner" && (
        <Card className="p-5">
          <div className="flex items-center justify-between mb-4"><h3 className="font-extrabold text-portal-ink">Content calendar</h3><div className="flex gap-3 text-[11px] font-semibold text-portal-ink-muted">{PLATFORMS.map((p) => <span key={p} className="flex items-center gap-1"><span className={cx("w-2 h-2 rounded-full", PCOLOR[p])} />{p}</span>)}</div></div>
          <div className="grid grid-cols-7 gap-1.5 text-center text-[11px] font-bold uppercase text-portal-ink-muted mb-1.5">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => <span key={d}>{d}</span>)}</div>
          <div className="grid grid-cols-7 gap-1.5">
            {days.map((d) => (
              <button key={d} type="button" onClick={() => setComposer(d)} className="min-h-[84px] p-1.5 rounded-xl border border-portal-border bg-portal-surface hover:bg-portal-tint/70 text-left align-top transition-colors">
                <span className="text-[11px] font-bold text-portal-ink-muted">{d}</span>
                {posts.filter((p) => p.day === d).map((p) => <span key={p.id} className={cx("block mt-1 px-1.5 py-0.5 rounded text-[10px] font-semibold text-white truncate", PCOLOR[p.platform], p.platform === "Snapchat" && "!text-slate-900")} title={p.caption}>{p.caption}</span>)}
              </button>
            ))}
          </div>
        </Card>
      )}

      {tab === "ads" && (
        <>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {accounts.map((a) => (
              <Card key={a.name} className="p-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0"><div className="w-10 h-10 rounded-xl bg-portal-brand/10 text-portal-brand-deep flex items-center justify-center"><Icon name={a.icon} /></div><div className="min-w-0"><p className="font-bold text-portal-ink text-sm truncate">{a.name}</p><Badge tone={a.on ? "success" : "neutral"} dot>{a.on ? "Connected" : "Not connected"}</Badge></div></div>
                <Toggle checked={a.on} label={`Connect ${a.name}`} onChange={(v) => { setAccounts((l) => l.map((x) => (x.name === a.name ? { ...x, on: v } : x))); toast(v ? `${a.name} connected (demo)` : `${a.name} disconnected`); }} />
              </Card>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4"><StatCard icon="payments" label="Total spend" value={`PKR ${ads.reduce((n, a) => n + a.spend, 0).toLocaleString()}`} /><StatCard icon="groups" label="Reach" value={ads.reduce((n, a) => n + a.reach, 0).toLocaleString()} tone="deep" /><StatCard icon="ads_click" label="Clicks" value={ads.reduce((n, a) => n + a.clicks, 0).toLocaleString()} tone="accent" /></div>
          <Card className="p-0 overflow-hidden"><div className="p-5"><h3 className="font-extrabold text-portal-ink">Ads</h3></div>
            <DataTable rows={ads} columns={[{ key: "name", label: "Ad", className: "font-bold" }, { key: "platform", label: "Platform" }, { key: "status", label: "Status", render: (a) => <Badge tone={tone[a.status]} dot>{a.status}</Badge> },
              { key: "spend", label: "Spend", align: "right", render: (a) => `PKR ${a.spend.toLocaleString()}` }, { key: "reach", label: "Reach", align: "right", render: (a) => a.reach.toLocaleString() }, { key: "clicks", label: "Clicks", align: "right", render: (a) => a.clicks.toLocaleString() }, { key: "roas", label: "ROAS", align: "right", render: (a) => <b className="text-portal-brand-deep">{a.roas ? `${a.roas}x` : "—"}</b> }]} /></Card>
        </>
      )}
      <Composer open={composer !== null} day={composer} onClose={() => setComposer(null)} onSave={(p) => { setPosts((l) => [...l, p]); toast("Post schedule ho gayi"); }} />
      <CreateAd open={adOpen} onClose={() => setAdOpen(false)} onSave={(a) => { setAds((l) => [a, ...l]); toast("Ad review ke liye bhej di"); }} />
    </div>
  );
}
