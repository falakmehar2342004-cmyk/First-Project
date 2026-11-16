/** Admin panel ka saara demo (hard-coded) data. Koi API nahi — backend judne par yahan se hata kar fetch layer lagayein. */

export const TENANTS = [
  { id: "TEN-88421", ini: "AF", name: "Al-Fatah Department Store", legal: "Al-Fatah Department Store Pvt Ltd", reg: "NTN: 0819284-1", sub: "28 Outlets", owner: "Usman Tariq", email: "usman.tariq@alfatah.pk", phone: "+92 300 8472910", city: "Lahore, PK", flag: "🇵🇰", juris: "PTA Registered", plan: "Enterprise Custom", tier: "enterprise", quota: 72, quotaText: "1.8M / 2.5M msgs", channels: ["wa", "sms", "email"], wallet: "PKR 620,000", mrr: "MRR: PKR 240,000", status: "Active", kyc: "KYC Verified" },
  { id: "TEN-88422", ini: "TM", name: "Tamimi Markets KSA", legal: "Tamimi Markets Co. Ltd", reg: "CR: 1010293841", sub: "54 Superstores", owner: "Fahad Al-Otaibi", email: "f.otaibi@tamimimarkets.com", phone: "+966 50 1928471", city: "Riyadh, SA", flag: "🇸🇦", juris: "CITC Compliant", plan: "Enterprise Max", tier: "enterprise", quota: 80, quotaText: "3.2M / 4.0M msgs", channels: ["wa", "sms", "voice"], wallet: "SAR 48,500", mrr: "MRR: SAR 18,200", status: "Active", kyc: "CITC Verified" },
  { id: "TEN-88423", ini: "KH", name: "Khaadi Official Flagship", legal: "Khaadi Retailers PK (Pvt) Ltd", reg: "NTN: 2948102-7", sub: "Ecommerce + 60 Stores", owner: "Ayesha Siddiqui", email: "crm@khaadi.com", phone: "+92 21 34981029", city: "Karachi, PK", flag: "🇵🇰", juris: "Retail Hub", plan: "Business Pro", tier: "pro", quota: 85, quotaText: "850K / 1.0M msgs", channels: ["wa", "sms"], wallet: "PKR 210,000", mrr: "MRR: PKR 95,000", status: "Active", kyc: "KYC Verified" },
  { id: "TEN-88424", ini: "CR", name: "Careem Logistics Hub PK", legal: "Careem Logistics PK (SMC-Pvt)", reg: "NTN: 4819204-5", sub: "Fleet Dispatch", owner: "Bilal Ahmed Khan", email: "b.khan@careem.com", phone: "+92 312 9048123", city: "Islamabad, PK", flag: "🇵🇰", juris: "Core Node", plan: "Enterprise Custom", tier: "enterprise", quota: 82, quotaText: "4.1M / 5.0M msgs", channels: ["wa", "sms", "voice"], wallet: "PKR 890,000", mrr: "MRR: PKR 480,000", status: "Active", kyc: "KYC High Tier" },
  { id: "TEN-88425", ini: "AL", name: "Abdul Latif Jameel Auto", legal: "Abdul Latif Jameel Motors", reg: "CR: 4030192837", sub: "Service & Sales", owner: "Majid Al-Ghamdi", email: "m.ghamdi@alj.com.sa", phone: "+966 55 4910283", city: "Jeddah, SA", flag: "🇸🇦", juris: "Western Hub", plan: "Growth Scale", tier: "starter", quota: 56, quotaText: "140K / 250K msgs", channels: ["wa"], wallet: "SAR 9,200", mrr: "Trial credit", status: "Trial", kyc: "14-Day Trial (5d left)" },
  { id: "TEN-88426", ini: "DZ", name: "Daraz Express Fulfillment", legal: "Daraz Express (Pvt) Ltd", reg: "NTN: 9284710-3", sub: "South Asia Marketplace", owner: "Hamza Sheikh", email: "fulfillment@daraz.pk", phone: "+92 321 0029384", city: "Karachi, PK", flag: "🇵🇰", juris: "Primary Routing", plan: "Enterprise Max", tier: "enterprise", quota: 80, quotaText: "6.4M / 8.0M msgs", channels: ["wa", "sms"], wallet: "PKR 1,450,000", mrr: "MRR: PKR 790,000", status: "Active", kyc: "KYC High Tier" },
  { id: "TEN-88427", ini: "AK", name: "Al-Karim Textile Mills", legal: "Al-Karim Textile Mills Ltd", reg: "CR: 1029384-9", sub: "Debit Failed", owner: "M. Karim", email: "m.karim@alkarimtex.com", phone: "+92 41 8792102", city: "Faisalabad, PK", flag: "🇵🇰", juris: "Textile Zone", plan: "Starter Plan", tier: "starter", quota: 100, quotaText: "Usage halted", channels: ["sms"], wallet: "PKR 0", mrr: "Due: PKR 42,500", status: "Suspended", kyc: "Suspended (Overdue)" },
  { id: "TEN-88428", ini: "LU", name: "Lulu Hypermarket Eastern", legal: "Lulu Hypermarket Eastern Co.", reg: "CR: 2050192849", sub: "32 Hypercenters", owner: "Tariq Mansoor", email: "tariq@lulugroup.com", phone: "+966 53 8291048", city: "Khobar, SA", flag: "🇸🇦", juris: "CITC Approved", plan: "Business Pro", tier: "pro", quota: 72, quotaText: "720K / 1.0M msgs", channels: ["wa", "sms"], wallet: "SAR 14,800", mrr: "MRR: SAR 12,000", status: "Active", kyc: "CITC Approved" },
  { id: "TEN-4891", ini: "FC", name: "FlashCart Deals Ltd", legal: "FlashCart Deals Ltd", reg: "NTN: 5521903-2", sub: "Online Marketplace", owner: "Saad Mirza", email: "ops@flashcart.pk", phone: "+92 322 1184402", city: "Lahore, PK", flag: "🇵🇰", juris: "Watchlist Tier-3", plan: "Business Pro", tier: "pro", quota: 91, quotaText: "910K / 1.0M msgs", channels: ["wa", "sms"], wallet: "PKR 96,000", mrr: "MRR: PKR 95,000", status: "Active", kyc: "KYC Verified" },
  { id: "TEN-1029", ini: "AT", name: "Apex Trading Corp", legal: "Apex Trading Corp (Pvt) Ltd", reg: "NTN: 7710294-8", sub: "B2B Wholesaler", owner: "Rizwan Anwar", email: "it@apextrading.pk", phone: "+92 333 7120945", city: "Lahore, PK", flag: "🇵🇰", juris: "Jazz Telecom", plan: "Growth Scale", tier: "starter", quota: 70, quotaText: "175K / 250K msgs", channels: ["sms"], wallet: "PKR 31,000", mrr: "MRR: PKR 25,000", status: "Active", kyc: "Throttled to 50 TPS" },
  { id: "TEN-88429", ini: "RP", name: "Riyadh Perfumes Ltd", legal: "Riyadh Perfumes Ltd", reg: "CR: 1010554821", sub: "18 Boutiques", owner: "Khalid Al-Harbi", email: "khalid@riyadhperfumes.sa", phone: "+966 50 1289410", city: "Riyadh, SA", flag: "🇸🇦", juris: "KSA Mid-Market", plan: "Business Pro", tier: "pro", quota: 41, quotaText: "410K / 1.0M msgs", channels: ["wa", "sms"], wallet: "SAR 22,400", mrr: "MRR: SAR 9,500", status: "Active", kyc: "CITC Verified" },
  { id: "TEN-88430", ini: "SD", name: "Shifa Diagnostic Clinics", legal: "Shifa Diagnostic Clinics", reg: "NTN: 3318890-4", sub: "Healthcare Network", owner: "Dr. Nadia Hashmi", email: "admin@shifadiag.pk", phone: "+92 302 7710924", city: "Rawalpindi, PK", flag: "🇵🇰", juris: "HIPAA/PTA", plan: "Enterprise Custom", tier: "enterprise", quota: 63, quotaText: "1.6M / 2.5M msgs", channels: ["wa", "voice"], wallet: "PKR 340,000", mrr: "MRR: PKR 240,000", status: "Active", kyc: "KYC Verified" },
];

export const CH_META = {
  wa: { icon: "chat", label: "WhatsApp" },
  sms: { icon: "sms", label: "Telco SMS" },
  email: { icon: "alternate_email", label: "Email" },
  voice: { icon: "call", label: "Voice OTP / IVR" },
};

export const BROADCASTS = [
  { id: 1, name: "Eid Mega Shopping Spree", sub: "WhatsApp Interactive Template", ch: "wa", sent: "420,000", target: "Target: VIP Club", dlr: "99.4%", dlrSub: "417.4k read", cost: "PKR 189,000", status: "Completed" },
  { id: 2, name: "Weekend Flash SMS Alert", sub: "Telco Priority Route 'AL-FATAH'", ch: "sms", sent: "180,000", target: "Target: Lahore Geo", dlr: "98.8%", dlrSub: "177.8k ack", cost: "PKR 45,000", status: "Sending (84%)" },
  { id: 3, name: "Ramadan Grocery Deals", sub: "WA Catalog Carousel (12 SKUs)", ch: "wa", sent: "310,000", target: "Target: Loyalty Base", dlr: "99.1%", dlrSub: "307.2k read", cost: "PKR 139,500", status: "Completed" },
  { id: 4, name: "Cart Abandonment Reminder", sub: "Automated Webhook / E-Com Flow", ch: "wa", sent: "14,200", target: "Real-time trigger", dlr: "99.8%", dlrSub: "Instant delivery", cost: "PKR 6,390", status: "Continuous" },
  { id: 5, name: "Mother's Day Special Coupon", sub: "Rich WhatsApp Media Voucher", ch: "wa", sent: "250,000 (Queued)", target: "Target: All Customers", dlr: "—", dlrSub: "Pending dispatch", cost: "Est. PKR 112,500", status: "Scheduled" },
];

export const INVOICES = [
  { id: "INV-2024-0501", date: "01 May 2024", desc: "Monthly Enterprise Retainer", note: "May 2024 • Unlimited SMS/WA Routing", base: "PKR 278,400", split: "240,000 + 38,400 PRA", ref: "TRX-9823104", refSub: "HBL Direct Debit", status: "Paid" },
  { id: "TOPUP-8921", date: "18 Apr 2024", desc: "500,000 WhatsApp Credits Top-Up", note: "Pre-Eid Broadcast Surge Quota", base: "PKR 580,000", split: "500,000 + 80,000 PRA", ref: "HBL-WIRE-8172", refSub: "Online Interbank IBFT", status: "Paid" },
  { id: "INV-2024-0401", date: "01 Apr 2024", desc: "Monthly Enterprise Retainer", note: "Apr 2024 • Base 2.50M Tier", base: "PKR 278,400", split: "240,000 + 38,400 PRA", ref: "TRX-8739102", refSub: "HBL Direct Debit", status: "Paid" },
  { id: "INV-2024-0301", date: "01 Mar 2024", desc: "Monthly Enterprise Retainer + Ramadan Overage", note: "Mar 2024 • 140k Additional SMS Overage", base: "PKR 315,520", split: "272,000 + 43,520 PRA", ref: "TRX-7462910", refSub: "HBL Direct Debit", status: "Paid" },
  { id: "TOPUP-8411", date: "15 Feb 2024", desc: "Auto-Refill Credit Top-Up", note: "Triggered when balance fell below 100k", base: "PKR 290,000", split: "250,000 + 40,000 PRA", ref: "AUTOREF-6610", refSub: "Standing Mandate", status: "Paid" },
  { id: "INV-2024-0201", date: "01 Feb 2024", desc: "Monthly Enterprise Retainer", note: "Feb 2024 • Base Tier", base: "PKR 278,400", split: "240,000 + 38,400 PRA", ref: "TRX-6102948", refSub: "HBL Direct Debit", status: "Paid" },
];

export const WALLET_ACTIVITY = [
  { id: 1, amt: "+PKR 500,000", title: "Manual Bank Transfer Top-Up", sub: "Approved by Ahmed Raza • 18 Apr 11:42", tag: "Credited", up: true },
  { id: 2, amt: "−PKR 189,000", title: "Eid Shopping Spree Broadcast", sub: "84,200 WA messages delivered", tag: "Deducted", up: false },
  { id: 3, amt: "−PKR 45,000", title: "Weekend Flash SMS Alert", sub: "31,050 SMS outbound routes", tag: "Deducted", up: false },
  { id: 4, amt: "+PKR 250,000", title: "Auto-Refill Threshold Trigger", sub: "HBL Mandate • Balance < PKR 100k", tag: "Auto", up: true },
];

export const PLANS = [
  { id: "starter", name: "Starter / Growth", tag: "Active Tier • 312 Tenants", desc: "Self-serve, start-ups & single branch retail", price: "PKR 25,000", sar: "Approx. SAR 350 / month", count: 312, icon: "bolt", feats: ["100,000 msgs incl. (WhatsApp & SMS)", "20 TPS transaction throttle", "Single WABA WhatsApp Channel", "Standard Support (Email, 24h SLA)", "Standard Analytics & Webhooks"] },
  { id: "pro", name: "Business Pro", tag: "Most Popular • 624 Tenants", desc: "Growing ecommerce brands & omni-retail", price: "PKR 95,000", sar: "Approx. SAR 1,280 / month", count: 624, icon: "rocket_launch", popular: true, feats: ["500,000 msgs incl. pooled quota", "150 TPS burst throughput limit", "Priority SMPP Direct Telco Routing", "AI Co-Pilot & Campaign Automation", "Multi-user (5 seats + RBAC access)"] },
  { id: "enterprise", name: "Enterprise Custom", tag: "Enterprise • 244 Tenants", desc: "Tier-1 retail, QSR chains & logistics", price: "PKR 240,000", sar: "Approx. SAR 3,250 / month", count: 244, icon: "apartment", feats: ["2.50M msgs (overages @ PKR 0.45/0.22)", "Dedicated IP & VIP P1 availability node", "450+ TPS pooled direct bind", "99.95% SLA + dedicated 1AM", "Unlimited multi-tenant sub-accounts"] },
  { id: "gov", name: "Gov & Telco VIP", tag: "Custom SLA • 68 Tenants", desc: "Mission-critical utilities & fintech banks", price: "Custom Contract", sar: "Annual advance billing", count: 68, icon: "shield", dark: true, feats: ["Unlimited throughput & burst elasticity", "Zero-hop SS7 direct operator bind", "On-premise HSM key sync encryption", "FBR digital invoicing & CITC audit vault", "24/7 dedicated Ops Center hot-line"] },
];

export const SETTLEMENTS = [
  { id: "INV-2024-8841", ini: "AF", tenant: "Al-Fatah Department Store", reg: "NTN: 2948102-1 • Lahore, PK", tid: "TEN-88421", plan: "Enterprise Custom", period: "May 2024 Retainer", gross: "PKR 278,400", tax: "Incl. 16% PRA Tax (PKR 38.4k)", gw: "HBL Direct Mandate", gwSub: "Corporate Auto-Debit ••••4921", status: "Settled" },
  { id: "INV-2024-8840", ini: "TM", tenant: "Tamimi Markets KSA", reg: "CR: 1010892019 • Riyadh, SA", tid: "TEN-88422", plan: "Enterprise Max", period: "May 2024 Retainer", gross: "SAR 3,737.50", tax: "Incl. 15% ZATCA VAT (SAR 487.5)", gw: "SADAD / Mada Auto", gwSub: "B2B Direct Clearance #8839", status: "Settled" },
  { id: "INV-2024-8839", ini: "KH", tenant: "Khaadi Official Fashion", reg: "NTN: 1493012-7 • Karachi, PK", tid: "TEN-88423", plan: "Business Pro", period: "May 2024 Retainer", gross: "PKR 110,200", tax: "Incl. 16% SRB Tax + Surge", gw: "Bank Alfalah e-Pay", gwSub: "Corporate Direct Bind ••••1184", status: "Retry (1/3)" },
  { id: "INV-2024-8790", ini: "CL", tenant: "Careem Logistics Fleet", reg: "CR: 4030194829 • Jeddah, SA", tid: "TEN-88424", plan: "Gov / VIP", period: "Q2 2024 Multi-node Advance", gross: "SAR 18,500.00", tax: "Incl. 15% ZATCA VAT", gw: "Riyad Bank B2B", gwSub: "SADAD Direct Payout Mandate", status: "Settled" },
  { id: "INV-2024-8835", ini: "DX", tenant: "Daraz Express Logistics", reg: "NTN: 3829104-5 • Karachi, PK", tid: "TEN-88426", plan: "Enterprise Custom", period: "May 2024 Retainer + Surge", gross: "PKR 312,800", tax: "Incl. 16% PRA Tax (PKR 43.1k)", gw: "Standard Chartered Direct", gwSub: "Host-to-Host Corporate Wire", status: "Settled" },
];

export const CARRIERS = [
  { id: "wa", grp: "wa", icon: "chat", name: "WhatsApp Meta Cloud API v19.0", state: "Operational", note: "MENA Cluster", sub: "Bahrain & UAE Edge Nodes • Tier: Unlimited Enterprise • Webhook Latency: 98ms", stats: [["Health SLA", "99.99%"], ["API Latency", "112 ms"], ["Throughput (TPS)", "420 / 1,000 TPS"], ["Queue State", "0 Queued"]] },
  { id: "jazz", grp: "telco", icon: "cell_tower", name: "Pakistan Direct SMPP Bind (Jazz / VEON SS7)", state: "Operational", note: "Tier-1 Telco", sub: "TX/RX Transceiver • 8 active sessions • Mask: Priority Bank & Enterprise • DLR: 1.2s avg", stats: [["Health SLA", "99.85%"], ["Bind Latency", "165 ms"], ["Throughput (TPS)", "380 / 600 TPS"], ["Window Cap", "63.3% Load"]] },
  { id: "telenor", grp: "telco", icon: "router", name: "Pakistan Direct SMPP Bind (Telenor PK Priority Route)", state: "Operational", note: "", sub: "4 active transceiver binds • Mask: Corporate & Marketing • DLR Window: 2.1s avg", stats: [["Health SLA", "99.70%"], ["Bind Latency", "190 ms"], ["Throughput (TPS)", "210 / 400 TPS"], ["Delivery Rate", "99.64%"]] },
  { id: "zong", grp: "telco", icon: "warning", name: "Pakistan SMPP Bind (Zong / CMPak High Volume)", state: "Throttled", note: "Throttled by Carrier", sub: "Carrier rate limit warning — automatic traffic reroute to Jazz standby active", warn: true, stats: [["Health SLA", "97.40%"], ["Bind Latency", "340 ms"], ["Throughput (TPS)", "180 / 250 TPS (85%)"], ["Reroute Active", "40% Shifted"]] },
  { id: "citc", grp: "telco", icon: "verified_user", name: "Saudi Arabia CITC Direct SMPP (STC & Mobily National Gateway)", state: "Operational", note: "CITC Verified", sub: "CITC approved white mask • ZATCA QR Phase II compliant binds • 6 transceivers", stats: [["Health SLA", "99.95%"], ["Leased Line Ping", "135 ms"], ["Throughput (TPS)", "230 / 500 TPS"], ["Failover Link", "Hot Standby"]] },
  { id: "relay", grp: "email", icon: "mail", name: "Dedicated Email Relay (Postfix / Amazon SES Enterprise)", state: "Operational", note: "99/100 Reputation", sub: "DKIM, SPF & DMARC 100% pass • Automated bounce filtering • Dedicated IP pool", stats: [["Health SLA", "99.99%"], ["Relay Latency", "85 ms"], ["Send Rate", "120 / 350 msg/s"], ["Bounce Rate", "0.03% (Low)"]] },
];

export const FAILOVER = [
  { id: "F1", title: "Meta WhatsApp Failure", when: "DLR timeout > 120s", then: "Auto-switch to Priority Telco SMS", on: true },
  { id: "F2", title: "Carrier Throttle Code 58", when: "Zong LHR Node throttle", then: "Split 60% Jazz / 40% Telenor", on: true, triggered: true },
  { id: "F3", title: "Voice OTP Dialout Timeout", when: "SIP 486 / No answer", then: "Instant WhatsApp Encrypted OTP", on: true },
];

export const GW_EVENTS = [
  { id: 1, time: "10:14 AM", tag: "Throttle Warning", text: "Zong SMPP Carrier throttled on LHR Node. 40% traffic shifted to Jazz SS7. Recovery auto-monitored.", warn: true },
  { id: 2, time: "08:30 AM", tag: "Token Renewed", text: "Meta Cloud API v19.0 routine token renewal verified 100% across all 4 cloud workers." },
  { id: 3, time: "Yesterday", tag: "Transceivers Re-synced", text: "All 18 SMPP transceiver binds successfully re-synced following scheduled upstream maintenance." },
];

export const SECURITY_ITEMS = [
  { id: 1, icon: "lock", title: "SSL / TLS Wildcard", sub: "DigiCert EV SHA-256", right: "284 days left" },
  { id: 2, icon: "webhook", title: "Inbound Webhook Workers", sub: "99.99% uptime • 42ms ack" },
  { id: 3, icon: "vpn_lock", title: "IPsec Telco VPN Tunnel", sub: "Karachi - Islamabad Encrypted" },
  { id: 4, icon: "public", title: "Riyadh CITC Leased Line", sub: "100 Mbps Direct Connect" },
];

export const CONSENTS = [
  { id: "CNS-89421", hash: "sha256:7f8a92e10c", biz: "Khaadi Retailers PK", tier: "Tier-1 Enterprise", msisdn: "+92 300 4829104", ch: "wa", src: "E-Com Checkout Opt-in", proof: "Checkbox ID: #chk_opt_wa", net: "Karachi, PK", ip: "39.44.112.5 (PTCL)", time: "12 mins ago", ts: "14:28:10 PKT" },
  { id: "CNS-89420", hash: "sha256:bc3101aa94", biz: "Riyadh Perfumes Ltd", tier: "KSA Mid-Market", msisdn: "+966 50 1289410", ch: "sms", src: "POS In-Store Digital QR", proof: "Terminal #RYD-POS-04", net: "Riyadh, SA", ip: "188.54.21.90 (STC)", time: "28 mins ago", ts: "12:12:04 AST" },
  { id: "CNS-89419", hash: "Missing cryptographic hash", biz: "FlashCart Deals Ltd", tier: "Watchlist Tier-3", msisdn: "+92 321 9940125", ch: "wa", src: "Bulk CSV Ingested", proof: "No Timestamp Proof Hash", net: "Lahore, PK", ip: "115.186.42.1 (Nayatel)", time: "45 mins ago", ts: "13:55:18 PKT", flagged: true },
  { id: "CNS-89418", hash: "sha256:d84033b019", biz: "Careem Delivery Fleet", tier: "Tier-1 Logistics", msisdn: "+92 333 5102941", ch: "wa", src: "App Registration Terms", proof: "SDK Handshake v4.2", net: "Islamabad, PK", ip: "182.180.12.8 (CMPak)", time: "1h ago", ts: "14:40:22 PKT" },
  { id: "CNS-89417", hash: "sha256:10eef32918", biz: "Shifa Diagnostic Clinics", tier: "Healthcare HIPAA/PTA", msisdn: "+92 302 7710924", ch: "voice", src: "Patient Portal Consent", proof: "DTMF Affirmation (Key 1)", net: "Rawalpindi, PK", ip: "110.37.19.44 (Telenor)", time: "2h ago", ts: "12:38:40 PKT" },
];

export const WATCHLIST = [
  { id: "TEN-4891", ini: "FC", name: "FlashCart Deals Ltd", tag: "HIGH SPIKE", tone: "danger", corridor: "PK (Jazz / Zong)", metric: "Opt-Out Spike 4.8%", note: "WhatsApp Broadcast (12k Batch)", tel: "Telemetry: Lack of recorded digital opt-in hash" },
  { id: "TEN-1029", ini: "AT", name: "Apex Trading Corp", tag: "THROTTLED", tone: "warning", corridor: "PK (Jazz Telecom)", metric: "18 Carrier Complaints", note: "Throttled to 50 TPS", tel: "Jazz Carrier Escalation #CR-88219" },
];

export const STRIKES = [
  { n: 1, title: "1st Strike: Warning Notice", sub: "Formal alert + 24h compliance cure" },
  { n: 2, title: "2nd Strike: 48h Rate Throttle", sub: "Throughput clamped to 25 TPS" },
  { n: 3, title: "3rd Strike: Complete Lock", sub: "API revoked + carrier report filed" },
];

export const TICKETS = [
  { id: "TKT-9842", biz: "FlashCart Deals Ltd", tid: "TEN-4891", tier: "Tier-1 Enterprise", age: "6m ago", issue: "Webhook 504 Timeout", detail: "50k WhatsApp Broadcast stalled", cat: "api", ch: "wa", chLabel: "WhatsApp Cloud", pri: "P0 Blocker", who: "Hamza Tariq", sla: "14m left", crit: true },
  { id: "TKT-9840", biz: "Careem Delivery Fleet", tid: "TEN-88424", tier: "Tier-1 Enterprise", age: "19m ago", issue: "OTP Latency Spike", detail: "Islamabad Region CMPak route", cat: "carrier", ch: "sms", chLabel: "Telco SMPP", pri: "P1 High", who: "Sarah Khan", sla: "48m left", crit: true },
  { id: "TKT-9835", biz: "Khaadi Retailers PK", tid: "TEN-88423", tier: "Tier-1 Enterprise", age: "48m ago", issue: "Urgent Sender ID Reg", detail: "Eid Promotional Drop Alpha-ID", cat: "tenant", ch: "wa", chLabel: "PTA Whitelist", pri: "P2 Normal", who: "Bilal Ahmed", sla: "3h 12m left" },
  { id: "TKT-9831", biz: "Riyadh Perfumes Ltd", tid: "TEN-88429", tier: "KSA Mid-Market", age: "1h 14m ago", issue: "Wallet Reversal Request", detail: "Mada Gateway duplicate debit", cat: "billing", ch: "sms", chLabel: "Billing / Pay", pri: "P2 Normal", who: "Zainab Ali", sla: "5h 40m left" },
  { id: "TKT-9828", biz: "Shifa Diagnostic Clinics", tid: "TEN-88430", tier: "Enterprise", age: "2h 05m ago", issue: "Voice IVR Drop Rate 12%", detail: "SIP Trunk SIP/2.0 486 busy", cat: "carrier", ch: "voice", chLabel: "Voice OTP/IVR", pri: "P1 High", who: "Usman Farooq", sla: "1h 05m left" },
];

export const SLA_URGENT = [
  { id: "TKT-9842", pri: "P0 Blocker", tier: "Tier-1 Enterprise", biz: "FlashCart Deals Ltd", issue: "Meta Cloud API Webhook Failure & DLR Ingestion Lag", left: "14 mins left", owner: "NOC Alpha", tone: "danger", to: "/admin/channels", act: ["Quick Reassign", "Trigger Gateway Reroute", "Open War Room"] },
  { id: "TKT-9839", pri: "P1 High", tier: "Tier-2 Mid-Market", biz: "Apex Trading Corp", issue: "Telco SMPP DND Scrub Dispute (Zong Direct Route)", left: "28 mins left", owner: "Telco Ops Lead", tone: "warning", to: "/admin/compliance", act: ["Review Logs", "Expedite Carrier Query"] },
];

export const PODS = [
  { id: 1, name: "Tier-1 Incident Pod", load: 88, sub: "4 engineers assigned • 18 open tickets" },
  { id: 2, name: "Telco Interconnect NOC", load: 65, sub: "3 engineers assigned • 14 open tickets" },
  { id: 3, name: "Billing & Legal Ops", load: 40, sub: "2 specialists assigned • 6 open tickets" },
];

export const BRIDGES = [
  { id: 1, ini: "META", name: "Meta Direct NOC Line", sub: "Cloud API Tier-1 Bridge", state: "Active" },
  { id: 2, ini: "JAZZ", name: "Jazz Core NOC Desk", sub: "SS7 Direct Route (PK)", state: "Active" },
  { id: 3, ini: "TEL", name: "Telenor Direct Gateway", sub: "Avg ticket response 18m", state: "Active" },
  { id: 4, ini: "PTA", name: "PTA Whitelist Portal", sub: "Office Hours Active", state: "Syncing" },
];

export const DLR_ROUTES = [
  { id: 1, ini: "WZ", name: "WhatsApp Cloud API v19", sub: "Meta Direct Webhook Pool #4", vol: "22.8M", dlr: 99.1, err: "META_WABA_RATE_LIMIT", lat: "420ms", status: "Optimal" },
  { id: 2, ini: "JZ", name: "Jazz SS7 Core (PK)", sub: "Primary SMPP Interconnect 8920", vol: "14.2M", dlr: 98.4, err: "CARRIER_PTA_DND_BLOCK", lat: "1.2s", status: "Optimal" },
  { id: 3, ini: "TL", name: "Telenor Direct Gateway", sub: "Backup Bind Route C-02", vol: "6.4M", dlr: 96.8, err: "ERR_SMPP_SUBMIT_SM_THROTTLED", lat: "2.8s", status: "Degraded" },
  { id: 4, ini: "ZG", name: "Zong Route B", sub: "High Volume Promotional SMS", vol: "4.8M", dlr: 95.2, err: "MSISDN_BARRED_ROAMING", lat: "3.1s", status: "Investigating" },
];

export const LEADERS = [
  { id: 1, ini: "FC", name: "FlashCart Deals Ltd", tag: "WA heavy", sub: "Enterprise E-commerce • SLA Tier 1", msgs: "12.4M msgs", flow: "25.7% total flow", rev: "PKR 4.8M", tid: "TEN-4891" },
  { id: 2, ini: "CR", name: "Careem Delivery Fleet", tag: "OTP & SMS", sub: "Logistics / Mobility • Real-time dispatch", msgs: "9.8M msgs", flow: "20.3% total flow", rev: "PKR 2.9M", tid: "TEN-88424" },
  { id: 3, ini: "KH", name: "Khaadi Retailers PK", tag: "Marketing", sub: "Retail & Apparel • Scheduled Broadcasts", msgs: "6.2M msgs", flow: "12.8% total flow", rev: "PKR 2.4M", tid: "TEN-88423" },
  { id: 4, ini: "RP", name: "Riyadh Perfumes Ltd", tag: "KSA Corridor", sub: "GCC Luxury Retail • Cross-border WA", msgs: "4.1M msgs", flow: "8.5% total flow", rev: "SAR 180k", tid: "TEN-88429" },
  { id: 5, ini: "AT", name: "Apex Trading Corp", tag: "Throttled", sub: "B2B Wholesaler • Batch Alerts", msgs: "3.5M msgs", flow: "7.2% total flow", rev: "PKR 1.1M", tid: "TEN-1029" },
];

export const STAFF = [
  { id: 1, ini: "AR", name: "Ahmed Raza", email: "ahmed.raza@nexmeg.internal", role: "Super Admin", dept: "Core Executive", mfa: "Hardware FIDO2", active: "2 mins ago", ip: "192.168.1.14 (VPN-KHI)" },
  { id: 2, ini: "SK", name: "Sarah Khan", email: "sarah.k@nexmeg.internal", role: "NOC Lead", dept: "Interconnect Ops", mfa: "Authenticator App", active: "18 mins ago", ip: "10.0.12.84 (VPN-ISB)" },
  { id: 3, ini: "BA", name: "Bilal Ahmed", email: "bilal.a@nexmeg.internal", role: "Compliance Lead", dept: "Legal & PTA/CITC", mfa: "Authenticator App", active: "1 hour ago", ip: "192.168.1.66 (VPN-RUH)" },
  { id: 4, ini: "ZA", name: "Zainab Ali", email: "zainab.ali@nexmeg.internal", role: "Billing & Finance", dept: "Finance Audit", mfa: "Hardware FIDO2", active: "3 hours ago", ip: "10.0.18.201 (VPN-DXB)" },
  { id: 5, ini: "HT", name: "Hamza Tariq", email: "hamza.t@nexmeg.internal", role: "Support & Ops Lead", dept: "Tier-1 & Routing Ops", mfa: "Authenticator App", active: "Yesterday", ip: "192.168.1.109 (VPN-LHE)" },
];

export const MATRIX_ROLES = ["Super Admin", "NOC Lead", "Compliance", "Billing Admin", "Support Agent"];
// 2 = full, 1 = view only, 0 = none
export const MATRIX = [
  { id: 1, scope: "Tenant Management", sub: "Create, suspend tenants, approve KYC documents", v: [2, 2, 2, 0, 0] },
  { id: 2, scope: "Gateway & Route Re-routing", sub: "SS7, Meta WABA binds, SMPP throughput throttles", v: [2, 2, 0, 0, 0] },
  { id: 3, scope: "Billing & Credit Adjustments", sub: "Manual top-up, refunds, credit notes, custom rate cards", v: [2, 0, 0, 2, 0] },
  { id: 4, scope: "Regulatory & DND Management", sub: "PTA / CITC national blacklist overrides, opt-out scrub", v: [2, 0, 2, 0, 0] },
  { id: 5, scope: "Platform Analytics & BI", sub: "Aggregate telemetry vs export raw CDR logs", v: [2, 2, 2, 2, 1] },
  { id: 6, scope: "Security & Admin Provisioning", sub: "Create admin users, revoke sessions, generate root API tokens", v: [2, 0, 0, 0, 0] },
];

export const TENANT_TABS = [
  { value: "broadcasts", label: "Recent Broadcasts" },
  { value: "invoices", label: "Billing & Invoices" },
  { value: "compliance", label: "Compliance & Senders" },
  { value: "team", label: "Team & API Keys" },
  { value: "security", label: "Security Logs" },
];

export const TENANT_COMPLIANCE = [
  { id: 1, name: "AL-FATAH", type: "Alpha Sender Mask (PTA)", status: "Approved", date: "12 Jan 2023" },
  { id: 2, name: "ALFATAH-PROMO", type: "Promotional Sender ID", status: "Approved", date: "02 Mar 2023" },
  { id: 3, name: "AF-OTP", type: "Transactional / OTP Mask", status: "Pending", date: "05 May 2024" },
];
export const TENANT_TEAM = [
  { id: 1, name: "Usman Tariq", role: "Owner", email: "usman.tariq@alfatah.pk", last: "2 hours ago" },
  { id: 2, name: "Maryam Qureshi", role: "Admin", email: "maryam.q@alfatah.pk", last: "Yesterday" },
  { id: 3, name: "Ali Raza", role: "Agent", email: "ali.raza@alfatah.pk", last: "3 days ago" },
];
export const TENANT_SECURITY = [
  { id: 1, ev: "Production API token generated", who: "Usman Tariq", ip: "39.44.112.5", time: "42 days ago" },
  { id: 2, ev: "Login success (2FA verified)", who: "Maryam Qureshi", ip: "39.44.118.20", time: "Yesterday" },
  { id: 3, ev: "Webhook endpoint updated", who: "Usman Tariq", ip: "39.44.112.5", time: "5 days ago" },
  { id: 4, ev: "Failed login attempt", who: "unknown", ip: "103.14.88.201", time: "9 days ago" },
];

export const DASH_ALERTS = [
  { id: 1, icon: "warning", tone: "danger", text: "Zong SMPP bind throttled — 40% traffic rerouted to Jazz", to: "/admin/channels", perm: "admin.channels" },
  { id: 2, icon: "schedule", tone: "warning", text: "2 P0/P1 tickets will breach SLA within 30 minutes", to: "/admin/support", perm: "admin.support" },
  { id: 3, icon: "gavel", tone: "danger", text: "FlashCart Deals Ltd — opt-out spike 4.8%, review needed", to: "/admin/compliance", perm: "admin.compliance" },
  { id: 4, icon: "payments", tone: "warning", text: "22 tenants overdue — auto-debit retries running", to: "/admin/billing", perm: "admin.billing" },
];
