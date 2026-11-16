import { useState } from "react";
import { Badge, Button, Card, DataTable, Field, Icon, Input, Modal, PageHero, Select, StatCard, Textarea, Toggle, useToast } from "../ui/index.js";

const TRIGGERS = ["New contact joins", "Comment on post", "Order placed", "Cart abandoned", "No order for 90 days"];
const CONDITIONS = ["No condition", "City is Lahore", "Has tag VIP", "Order value > 5,000"];
const ACTIONS = { message: "Send message", wait: "Wait", tag: "Add tag" };
const READY = [
  { name: "Welcome message", trigger: "New contact joins", steps: [["message", "Salam! nExMeg mein khush amdeed 💚"]], icon: "waving_hand" },
  { name: "Comment-to-DM", trigger: "Comment on post", steps: [["message", "Shukriya comment ka! Details DM mein bhej di hain."], ["tag", "Lead"]], icon: "forum" },
  { name: "Order reminder", trigger: "Order placed", steps: [["wait", "1 day"], ["message", "Aap ka order raste mein hai 🚚"]], icon: "local_shipping" },
  { name: "Win-back", trigger: "No order for 90 days", steps: [["message", "Aap ki yaad aa rahi hai! 15% off: BACK15"], ["wait", "3 days"], ["tag", "Win-back sent"]], icon: "favorite" },
];
const SEED = [
  { id: 1, name: "Welcome message", trigger: "New contact joins", cond: "No condition", steps: READY[0].steps, active: true, runs: 1240 },
  { id: 2, name: "Order reminder", trigger: "Order placed", cond: "No condition", steps: READY[2].steps, active: true, runs: 860 },
  { id: 3, name: "Win-back", trigger: "No order for 90 days", cond: "Has tag VIP", steps: READY[3].steps, active: false, runs: 215 },
];
const AI = {
  "New contact joins": "Salam {{name}}! nExMeg mein khush amdeed. Pehle order par 10% off: WELCOME10 💚",
  "Comment on post": "Shukriya {{name}}! Price aur details aap ko DM kar di hain. Koi sawal ho to bata dein.",
  "Order placed": "{{name}}, aap ka order #{{order_id}} confirm ho gaya hai. Hum jald dispatch karenge.",
  "Cart abandoned": "{{name}}, aap ka cart intezar kar raha hai. Aaj order karein, delivery free!",
  "No order for 90 days": "{{name}}, aap ki yaad aa rahi hai! Wapas aane par 15% off: BACK15.",
};

function Builder({ flow, onClose, onSave }) {
  const [f, setF] = useState(flow);
  const setStep = (i, v) => setF((p) => ({ ...p, steps: p.steps.map((s, j) => (j === i ? [s[0], v] : s)) }));
  return (
    <Modal open onClose={onClose} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-portal-surface rounded-3xl shadow-2xl p-6 space-y-4">
      <div className="flex justify-between items-center"><h3 className="text-lg font-extrabold text-portal-ink">{flow.id ? "Flow edit" : "Naya flow"}</h3><button type="button" aria-label="Close" onClick={onClose}><Icon name="close" /></button></div>
      <Field label="Flow name"><Input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></Field>
      <div className="space-y-3">
        <div className="p-4 rounded-2xl border border-portal-brand/40 bg-portal-brand/5"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-brand-deep mb-2">1 · Trigger</p><Select value={f.trigger} onChange={(e) => setF({ ...f, trigger: e.target.value })} options={TRIGGERS} /></div>
        <div className="p-4 rounded-2xl border border-portal-border bg-portal-tint/40"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-ink-muted mb-2">2 · Condition</p><Select value={f.cond} onChange={(e) => setF({ ...f, cond: e.target.value })} options={CONDITIONS} /></div>
        {f.steps.map(([type, val], i) => (
          <div key={i} className="p-4 rounded-2xl border border-portal-border bg-portal-surface">
            <div className="flex justify-between mb-2"><p className="text-[11px] font-bold uppercase tracking-wider text-portal-accent">{i + 3} · Action — {ACTIONS[type]}</p><button type="button" aria-label="Remove step" onClick={() => setF((p) => ({ ...p, steps: p.steps.filter((_, j) => j !== i) }))}><Icon name="delete" className="text-[16px] text-portal-danger" /></button></div>
            {type === "message" ? <Textarea rows={2} value={val} onChange={(e) => setStep(i, e.target.value)} /> : <Input value={val} onChange={(e) => setStep(i, e.target.value)} placeholder={type === "wait" ? "e.g. 2 days" : "tag name"} />}
          </div>
        ))}
        <div className="flex flex-wrap gap-2">{Object.entries(ACTIONS).map(([k, l]) => <Button key={k} size="sm" variant="outline" icon="add" onClick={() => setF((p) => ({ ...p, steps: [...p.steps, [k, k === "wait" ? "1 day" : ""]] }))}>{l}</Button>)}</div>
      </div>
      <div className="p-3.5 rounded-xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-800 flex gap-2 items-start">
        <Icon name="auto_awesome" className="text-[18px] text-violet-600 dark:text-violet-300" /><p className="text-xs text-portal-ink flex-1"><b>AI suggestion:</b> {AI[f.trigger]}</p>
        <button type="button" className="text-xs font-bold text-violet-700 dark:text-violet-300 hover:underline" onClick={() => setF((p) => ({ ...p, steps: [...p.steps, ["message", AI[p.trigger]]] }))}>Add as message</button>
      </div>
      <div className="flex justify-end gap-2"><Button variant="outline" onClick={onClose}>Cancel</Button><Button disabled={!f.name.trim() || f.steps.length === 0} onClick={() => onSave(f)}>Save flow</Button></div>
    </Modal>
  );
}

export default function Automations() {
  const toast = useToast();
  const [flows, setFlows] = useState(SEED);
  const [edit, setEdit] = useState(null);
  const save = (f) => { setFlows((l) => (f.id ? l.map((x) => (x.id === f.id ? f : x)) : [{ ...f, id: Date.now(), active: false, runs: 0 }, ...l])); setEdit(null); toast("Flow save ho gaya"); };
  const blank = (t = {}) => ({ name: "", trigger: TRIGGERS[0], cond: CONDITIONS[0], steps: [["message", ""]], ...t });
  return (
    <div className="space-y-6">
      <PageHero badge="Automation Studio" title="Automations" description="Trigger, condition aur action se auto-reply aur follow-up flows banayein."
        actions={<Button variant="accent" icon="add" onClick={() => setEdit(blank())}>New flow</Button>} />
      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon="bolt" label="Active flows" value={flows.filter((f) => f.active).length} />
        <StatCard icon="play_circle" label="Total runs" value={flows.reduce((n, f) => n + f.runs, 0).toLocaleString()} tone="deep" />
        <StatCard icon="savings" label="Messages saved" value="~38 hrs" tone="accent" />
      </div>
      <Card className="p-0 overflow-hidden">
        <div className="p-5"><h3 className="font-extrabold text-portal-ink">Aap ke flows</h3></div>
        <DataTable rows={flows} onRowClick={(f) => setEdit(f)} columns={[
          { key: "name", label: "Flow", className: "font-bold" }, { key: "trigger", label: "Trigger" },
          { key: "status", label: "Status", render: (f) => <span onClick={(e) => e.stopPropagation()} className="flex items-center gap-2"><Toggle checked={f.active} label={`Toggle ${f.name}`} onChange={(v) => setFlows((l) => l.map((x) => (x.id === f.id ? { ...x, active: v } : x)))} /><Badge tone={f.active ? "success" : "neutral"}>{f.active ? "Active" : "Paused"}</Badge></span> },
          { key: "runs", label: "Runs", align: "right", render: (f) => f.runs.toLocaleString() }]} />
      </Card>
      <div>
        <h3 className="font-extrabold text-portal-ink mb-3">Ready templates</h3>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {READY.map((t) => (
            <Card key={t.name} hover className="p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-portal-brand/10 text-portal-brand-deep flex items-center justify-center"><Icon name={t.icon} /></div>
              <p className="font-bold text-portal-ink">{t.name}</p><p className="text-xs text-portal-ink-muted">Trigger: {t.trigger}</p>
              <Button size="sm" variant="outline" className="w-full" onClick={() => setEdit(blank({ name: t.name, trigger: t.trigger, steps: t.steps }))}>Use template</Button>
            </Card>
          ))}
        </div>
      </div>
      {edit && <Builder flow={edit} onClose={() => setEdit(null)} onSave={save} />}
    </div>
  );
}
