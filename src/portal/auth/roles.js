/**
 * ROLES + PERMISSIONS — access control ka single source of truth.
 * Role badalna ho ya kisi role ko koi cheez dena/hatana ho to sirf yahan edit karein.
 * Pages / nav / buttons role nahi, "permission" dekhte hain (can("billing.manage")).
 *
 * NOTE: ye sirf frontend guard hai (UI chhupata hai, route rokta hai). Asli suraksha
 * ke liye backend/API par bhi har request par yahi permissions check hone chahiye.
 */

export const PERMS = [
  // --- Business portal ---
  "dashboard.view",
  "campaigns.view", "campaigns.manage",
  "contacts.view", "contacts.manage",
  "templates.view", "templates.manage",
  "analytics.view",
  "compliance.view", "compliance.manage",   // Sender ID, consent
  "billing.view", "billing.manage",         // manage = Top-Up / payment
  "settings.view", "team.manage", "security.manage",
  // --- aane wali screens (Inbox, Social & Ads, Automations, Integrations, Segments) ---
  "inbox.use", "social.manage", "automations.manage", "integrations.manage", "segments.manage",
  // --- Admin panel (nExMeg staff) ---
  "admin.access",                                   // /admin ka darwaza + Dashboard
  "admin.tenants", "admin.billing", "admin.channels", // Businesses, Plans & Billing, Channel Health
  "admin.compliance", "admin.support", "admin.analytics", "admin.settings", // baaki admin pages
];

const BUSINESS_ALL = PERMS.filter((p) => !p.startsWith("admin."));

export const ROLES = {
  // ---- Business portal roles ----
  owner: {
    label: "Owner", area: "portal", desc: "Poora access, billing aur team",
    perms: BUSINESS_ALL,
  },
  admin: {
    label: "Admin", area: "portal", desc: "Billing dekh sakta hai, Top-Up/security nahi",
    perms: BUSINESS_ALL.filter((p) => !["billing.manage", "security.manage"].includes(p)),
  },
  agent: {
    label: "Agent", area: "portal", desc: "Inbox, contacts aur campaigns dekhna; billing/settings nahi",
    perms: ["dashboard.view", "campaigns.view", "contacts.view", "contacts.manage", "templates.view", "inbox.use", "compliance.view"],
  },
  // ---- Platform (nExMeg staff) roles — admin screens aane par yahin se control honge ----
  super_admin: {
    label: "Super Admin", area: "admin", desc: "Admin panel + poora portal",
    perms: PERMS,
  },
  support: {
    label: "Support", area: "admin", desc: "Admin: Businesses, Channel Health, Support, Analytics (billing/compliance/settings nahi)",
    perms: ["admin.access", "admin.tenants", "admin.channels", "admin.support", "admin.analytics", "dashboard.view", "campaigns.view", "contacts.view", "templates.view", "analytics.view", "compliance.view", "billing.view", "settings.view"],
  },
};

export const DEFAULT_ROLE = "owner";
export const ROLE_KEYS = Object.keys(ROLES);
export const hasPerm = (role, perm) => !perm || !!ROLES[role]?.perms.includes(perm);
