/** Sidebar ki saari entries ek jagah. Naya page jodna ho to sirf yahan line add karein. */
export const NAV_MAIN = [
  { to: "/portal", perm: "dashboard.view", label: "Dashboard", end: true, icon: "grid" },
  { to: "/portal/inbox", label: "Inbox", perm: "inbox.use", badge: "5", icon: ["M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"] },
  { to: "/portal/campaigns", perm: "campaigns.view", label: "Campaigns", badge: "3", icon: ["M12 19l9 2-9-18-9 18 9-2zm0 0v-8"] },
  { to: "/portal/messaging", label: "Messaging", perm: "templates.view", icon: ["M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"] },
  { to: "/portal/social-ads", label: "Social & Ads", perm: "social.manage", icon: ["M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"] },
  { to: "/portal/automations", label: "Automations", perm: "automations.manage", icon: ["M13 10V3L4 14h7v7l9-11h-7z"] },
  { to: "/portal/audience", perm: "contacts.view", label: "Audience", icon: ["M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"] },
  { to: "/portal/segments", label: "Segments & Consent", perm: "contacts.view", icon: ["M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"] },
  { to: "/portal/templates", perm: "templates.view", label: "Templates", icon: ["M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"] },
  { to: "/portal/analytics", perm: "analytics.view", label: "Analytics", icon: ["M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"] },
  { to: "/portal/compliance", perm: "compliance.view", label: "Compliance", icon: ["M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"] },
];
export const NAV_ACCOUNT = [
  { to: "/portal/integrations", label: "Integrations", perm: "integrations.manage", icon: ["M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"] },
  { to: "/portal/billing", perm: "billing.view", label: "Billing & Wallet", icon: ["M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"] },
  { to: "/portal/settings", perm: "settings.view", label: "Settings", icon: ["M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"] },
];

/** Admin panel (nExMeg staff). icon: { ms: "material_symbol_name" } — Stitch screens wale icons. Har entry ek permission ke peeche. */
export const NAV_ADMIN = [
  { to: "/admin", label: "Dashboard", end: true, perm: "admin.access", icon: { ms: "grid_view" } },
  { to: "/admin/businesses", label: "Businesses", perm: "admin.tenants", icon: { ms: "store" } },
  { to: "/admin/billing", label: "Plans & Billing", perm: "admin.billing", icon: { ms: "payments" } },
  { to: "/admin/channels", label: "Channel Health", perm: "admin.channels", icon: { ms: "monitoring" } },
  { to: "/admin/compliance", label: "Compliance & Logs", perm: "admin.compliance", icon: { ms: "verified_user" } },
  { to: "/admin/support", label: "Support Tickets", perm: "admin.support", badge: "14", icon: { ms: "support_agent" } },
  { to: "/admin/analytics", label: "Analytics", perm: "admin.analytics", icon: { ms: "insights" } },
  { to: "/admin/settings", label: "Settings & Roles", perm: "admin.settings", icon: { ms: "manage_accounts" } },
];
