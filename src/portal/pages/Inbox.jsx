import { useMemo, useState } from "react";
import { Badge, Button, Card, ChannelBadge, Icon, PageHero, Segmented, Select, useToast } from "../ui/index.js";
import { useAccess } from "../auth/AccessContext.jsx";
import { cx } from "../lib/cx.js";

const AGENTS = ["Unassigned", "Ahmed Raza", "Sana Malik", "Bilal Khan"];
const QUICK = ["Shukriya! Hum jald rabta karte hain.", "Aap ka order dispatch ho gaya hai.", "Kya aap apna address confirm kar sakte hain?", "Offer 31 tak valid hai."];
const SEED = [
  { id: 1, name: "Ayesha Khan", channel: "whatsapp", city: "Lahore", phone: "+92 300 1234567", unread: 2, assigned: "Ahmed Raza", status: "open", windowHrs: 3.5, tags: ["VIP", "Eid Sale"], ai: "Wa alaikum assalam Ayesha! Aap ka order #1042 kal tak pohanch jayega. Tracking link bhej dun?", msgs: [["in", "Assalam o alaikum, mera order abhi tak nahi aaya", "10:12"], ["out", "Salam! Order number bata dein please", "10:14"], ["in", "Order #1042, 3 din ho gaye", "10:15"]] },
  { id: 2, name: "Omar Al-Harbi", channel: "whatsapp", city: "Riyadh", phone: "+966 50 123 4567", unread: 1, assigned: "Unassigned", status: "open", windowHrs: 21, tags: ["KSA"], ai: "Marhaba Omar! Yes, the Ramadan bundle is available. Shall I share the price list?", msgs: [["in", "Hi, do you have the Ramadan bundle in stock?", "09:40"]] },
  { id: 3, name: "Hira Sheikh", channel: "sms", city: "Karachi", phone: "+92 321 7654321", unread: 0, assigned: "Sana Malik", status: "open", windowHrs: null, tags: ["Cart"], ai: "Hira, aap ka cart abhi save hai. Code SAVE10 se 10% off pao.", msgs: [["out", "Aap ka cart intezar kar raha hai. Code SAVE10", "Yesterday"], ["in", "Discount kitna hai?", "Yesterday"]] },
  { id: 4, name: "Usman Tariq", channel: "email", city: "Islamabad", phone: "usman@mail.com", unread: 2, assigned: "Bilal Khan", status: "open", windowHrs: null, tags: ["Wholesale"], ai: "Dear Usman, thank you for your interest. Our wholesale price sheet is attached.", msgs: [["in", "Please share wholesale rates for 500 units.", "Mon"], ["in", "Also delivery timeline to Islamabad?", "Mon"]] },
  { id: 5, name: "Zainab Noor", channel: "instagram", city: "Lahore", phone: "@zainab.noor", unread: 0, assigned: "Unassigned", status: "resolved", windowHrs: null, tags: ["Comment-to-DM"], ai: "Thanks Zainab! Link aap ko DM kar diya hai.", msgs: [["in", "Price?", "Sun"], ["out", "DM check karein 💚", "Sun"]] },
];

export default function Inbox() {
  const toast = useToast();
  const { can } = useAccess();
  const [convs, setConvs] = useState(SEED);
  const [sel, setSel] = useState(1);
  const [filter, setFilter] = useState("all");
  const [draft, setDraft] = useState("");
  const me = "Ahmed Raza";
  const list = useMemo(() => convs.filter((c) => (filter === "unread" ? c.unread > 0 : filter === "mine" ? c.assigned === me : filter === "resolved" ? c.status === "resolved" : c.status === "open")), [convs, filter]);
  const cur = convs.find((c) => c.id === sel);
  const patch = (id, fn) => setConvs((l) => l.map((c) => (c.id === id ? fn(c) : c)));
  const open = (id) => { setSel(id); patch(id, (c) => ({ ...c, unread: 0 })); };
  const send = (text) => {
    const t = text.trim(); if (!t || !cur) return;
    patch(cur.id, (c) => ({ ...c, msgs: [...c.msgs, ["out", t, "Now"]] })); setDraft("");
  };
  const unreadTotal = convs.reduce((n, c) => n + c.unread, 0);
  const win = cur?.windowHrs;

  return (
    <div className="space-y-4">
      <PageHero badge="Unified Inbox" title="Inbox" description={`Saare channels ki conversations ek jagah · ${unreadTotal} unread`} padding="p-5 lg:p-6" />
      <Segmented options={[{ value: "all", label: "Open" }, { value: "unread", label: `Unread ${unreadTotal}` }, { value: "mine", label: "Mine" }, { value: "resolved", label: "Resolved" }]} value={filter} onChange={setFilter} />
      <Card className="grid lg:grid-cols-[300px_1fr_280px] min-h-[600px] overflow-hidden">
        {/* conversations */}
        <div className="border-r border-portal-border/80 overflow-y-auto max-h-[680px] custom-scrollbar">
          {list.length === 0 && <p className="p-6 text-sm text-center text-portal-ink-muted">Koi conversation nahi.</p>}
          {list.map((c) => (
            <button key={c.id} type="button" onClick={() => open(c.id)} className={cx("w-full text-left px-4 py-3.5 border-b border-portal-border/60 flex gap-3 transition-colors", sel === c.id ? "bg-portal-brand/10" : "hover:bg-portal-tint/70")}>
              <div className="w-10 h-10 rounded-full bg-portal-tint-3 text-portal-brand-deep font-bold text-sm flex items-center justify-center shrink-0">{c.name.split(" ").map((w) => w[0]).join("")}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2"><p className="text-sm font-bold text-portal-ink truncate">{c.name}</p><ChannelBadge channel={c.channel} iconOnly /></div>
                <p className="text-xs text-portal-ink-muted truncate">{c.msgs[c.msgs.length - 1][1]}</p>
                <div className="flex items-center justify-between mt-1"><span className="text-[10px] font-semibold text-portal-ink-muted">{c.assigned}</span>{c.unread > 0 && <span className="px-1.5 min-w-5 h-5 rounded-full bg-portal-accent text-white text-[10px] font-bold flex items-center justify-center">{c.unread}</span>}</div>
              </div>
            </button>
          ))}
        </div>
        {/* chat */}
        {cur && (
          <div className="flex flex-col min-w-0">
            <div className="px-5 py-3 border-b border-portal-border/80 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2.5 min-w-0"><p className="font-bold text-portal-ink truncate">{cur.name}</p><ChannelBadge channel={cur.channel} />{cur.status === "resolved" && <Badge tone="success">Resolved</Badge>}</div>
              <div className="flex items-center gap-2">
                <Select aria-label="Assign" value={cur.assigned} onChange={(e) => { patch(cur.id, (c) => ({ ...c, assigned: e.target.value })); toast(`Assigned to ${e.target.value}`); }} options={AGENTS} className="!py-1.5 !text-xs !w-36" />
                <Button size="sm" variant="outline" icon="check" onClick={() => { patch(cur.id, (c) => ({ ...c, status: c.status === "resolved" ? "open" : "resolved" })); toast(cur.status === "resolved" ? "Reopened" : "Marked resolved"); }}>{cur.status === "resolved" ? "Reopen" : "Resolve"}</Button>
              </div>
            </div>
            {cur.channel === "whatsapp" && win != null && (
              <div className={cx("px-5 py-2 text-xs font-bold flex items-center gap-2", win < 4 ? "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300" : "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300")}>
                <Icon name="schedule" className="text-[16px]" />24-hour window: {win < 4 ? `sirf ${win}h bacha — jald reply karein` : `${win}h bacha hai`} (iske baad sirf approved template bhej sakte hain)
              </div>
            )}
            <div className="flex-1 p-5 space-y-3 overflow-y-auto bg-portal-chat/50 max-h-[420px] custom-scrollbar">
              {cur.msgs.map(([dir, text, t], i) => (
                <div key={i} className={cx("flex", dir === "out" && "justify-end")}>
                  <div className={cx("max-w-[75%] px-3.5 py-2 rounded-2xl text-sm shadow-xs", dir === "out" ? "bg-portal-brand text-white rounded-br-md" : "bg-portal-surface text-portal-ink rounded-bl-md")}>{text}<span className="block text-[10px] opacity-70 text-right mt-0.5">{t}</span></div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-portal-border/80 space-y-2.5">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800">
                <Icon name="auto_awesome" className="text-[18px] text-violet-600 dark:text-violet-300" />
                <p className="text-xs text-portal-ink flex-1"><b>AI suggestion:</b> {cur.ai}</p>
                <button type="button" onClick={() => setDraft(cur.ai)} className="text-xs font-bold text-violet-700 dark:text-violet-300 hover:underline shrink-0">Use</button>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-0.5">{QUICK.map((q) => <button key={q} type="button" onClick={() => setDraft(q)} className="whitespace-nowrap px-2.5 py-1 rounded-full bg-portal-tint text-[11px] font-semibold text-portal-ink-soft hover:bg-portal-tint-2">{q}</button>)}</div>
              <div className="flex gap-2">
                <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(draft)} placeholder="Reply likhein…" className="flex-1 px-3.5 py-2.5 text-sm bg-portal-surface text-portal-ink border border-portal-border rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-brand/25" />
                <Button icon="send" onClick={() => send(draft)}>Send</Button>
              </div>
            </div>
          </div>
        )}
        {/* contact info */}
        {cur && (
          <aside className="border-l border-portal-border/80 p-5 space-y-4 text-sm hidden lg:block">
            <div className="text-center"><div className="w-16 h-16 mx-auto rounded-full bg-portal-brand text-white text-xl font-extrabold flex items-center justify-center">{cur.name.split(" ").map((w) => w[0]).join("")}</div><p className="font-bold text-portal-ink mt-2">{cur.name}</p><p className="text-xs text-portal-ink-muted">{cur.phone}</p></div>
            <dl className="space-y-2.5 text-xs">
              {[["City", cur.city], ["Channel", cur.channel], ["Assigned", cur.assigned], ["Status", cur.status]].map(([k, v]) => <div key={k} className="flex justify-between"><dt className="text-portal-ink-muted font-semibold">{k}</dt><dd className="font-bold text-portal-ink capitalize">{v}</dd></div>)}
            </dl>
            <div><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted mb-1.5">Tags</p><div className="flex flex-wrap gap-1.5">{cur.tags.map((t) => <Badge key={t} tone="brand">{t}</Badge>)}</div></div>
            <div><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted mb-1.5">Consent</p><Badge tone="success" dot>Opted-in ({cur.channel})</Badge></div>
            {can("contacts.view") && <Button variant="outline" size="sm" className="w-full" onClick={() => toast("Full profile: Audience page se khulega")}>View full profile</Button>}
          </aside>
        )}
      </Card>
    </div>
  );
}
