import { cx } from "../lib/cx.js";
/** On/off switch: <Toggle checked={on} onChange={setOn} label="Active" /> */
export default function Toggle({ checked, onChange, label, disabled }) {
  return (
    <button type="button" role="switch" aria-checked={checked} aria-label={label} disabled={disabled} onClick={() => onChange(!checked)}
      className={cx("relative w-10 h-6 rounded-full transition-colors shrink-0 disabled:opacity-50", checked ? "bg-portal-brand" : "bg-portal-line")}>
      <span className={cx("absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform", checked && "translate-x-4")} />
    </button>
  );
}
