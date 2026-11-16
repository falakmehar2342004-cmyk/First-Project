# nExMeg Portal

- theme/portal-theme.css  -> saare rang/surfaces/dark mode (tailwind: portal-* tokens)
- layout/                 -> PortalLayout, Sidebar, Topbar, nav.js (menu yahin se)
- context/PortalContext   -> dark mode, sidebar pin/mobile, country+currency
- ui/                     -> Card, PageHero, StatCard, Button, Badge, Modal, Drawer, Segmented, Toast, Icon, DataTable, Field/Input/Select/Textarea, Toggle, Stepper, ChannelBadge, WizardBar
- hooks/                  -> useDisclosure, useEscape, useHotkey, useActionLinks
- pages/                  -> 19 screens (routes App.jsx mein)

Naya page: pages/ mein file banao, App.jsx mein route, layout/nav.js mein menu entry.
Rang badalna ho: sirf theme/portal-theme.css.

## Role-based access
- auth/roles.js         -> ROLES + PERMS (kaun kya kar sakta hai, sirf yahan edit karein)
- auth/AccessContext    -> useAccess() -> { role, can(perm), setRole }, <Can perm="..."> (button/section chhupane ke liye)
- auth/RequireAccess    -> route guard (App.jsx mein har route par laga hai)
- layout/nav.js         -> har menu entry par `perm`; sidebar sirf allowed entries dikhati hai
- Roles: owner, admin, agent (business) | super_admin, support (admin panel)
- Abhi role avatar menu ke "Demo" switcher se (localStorage) badalta hai. Login judne par
  <AccessProvider initialRole={server_role}> do aur demo switcher hata dein.
- Ye frontend guard hai; backend par bhi yahi permissions enforce karni hongi.

## Admin panel
- Routes (area="admin", guard `admin.access` + page permission): /admin (Dashboard) · /admin/businesses (+ /:id tenant detail)
  · /admin/billing · /admin/channels · /admin/compliance · /admin/support · /admin/analytics · /admin/settings
- Pages: pages/admin/*.jsx, saara demo data: pages/admin/adminData.js (koi API nahi), shared helpers: pages/admin/parts.jsx
- Sidebar entries: NAV_ADMIN (layout/nav.js, icons = Material Symbols). Sign Out button sidebar ke neeche (Sidebar.jsx) -> signOut() + "/" par redirect.
- Pages `@container` use karte hain, is liye sidebar khulne/band hone par grid khud adjust hoti hai.
- Admin permissions: admin.access, admin.tenants, admin.billing, admin.channels, admin.compliance, admin.support, admin.analytics, admin.settings (auth/roles.js).
  Super Admin = sab; Support = Dashboard, Businesses, Channel Health, Support, Analytics.

## Tables
- Saare <thead> ka teal background + white text theme/portal-theme.css (--p-thead) se aata hai.

## Screens (route -> permission)
- /portal/inbox (inbox.use) · /portal/messaging (templates.view) · /portal/social-ads (social.manage)
- /portal/automations (automations.manage) · /portal/segments (contacts.view; edit = segments.manage)
- /portal/integrations (integrations.manage)
- Campaign wizard: modal (Step 1 Channel) -> /portal/campaigns/audience (Step 2) -> /portal/campaigns/new (Step 3) -> /portal/campaigns/review (Step 4). Header: ui/WizardBar.
- Ye naye pages demo data par chalte hain (local state); backend/API judne par data layer badlein, UI wahi rahega.
