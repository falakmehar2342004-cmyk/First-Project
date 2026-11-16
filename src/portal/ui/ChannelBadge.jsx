import { cx } from "../lib/cx.js";
import Icon from "./Icon.jsx";
export const CHANNELS = {
  whatsapp: { label: "WhatsApp", icon: "chat", cls: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800" },
  sms: { label: "SMS", icon: "sms", cls: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800" },
  email: { label: "Email", icon: "mail", cls: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800" },
  voice: { label: "Voice", icon: "call", cls: "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800" },
  instagram: { label: "Instagram", icon: "photo_camera", cls: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800" },
  facebook: { label: "Facebook", icon: "thumb_up", cls: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800" },
};
/** Channel pill (Campaigns ke chips jaisa). */
export default function ChannelBadge({ channel, iconOnly, className }) {
  const c = CHANNELS[channel] || CHANNELS.sms;
  return (
    <span className={cx("inline-flex items-center gap-1 rounded-full border text-[11px] font-bold", iconOnly ? "w-6 h-6 justify-center" : "px-2.5 py-0.5", c.cls, className)} title={c.label}>
      <Icon name={c.icon} className="text-[14px]" />{!iconOnly && c.label}
    </span>
  );
}
