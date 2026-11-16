import { useNavigate } from "react-router-dom";
import { PageHero, useToast } from "../ui/index.js";
import { useActionLinks } from "../hooks/useActionLinks.js";
import { useEscape } from "../hooks/useEscape.js";


/** Ye page "Register Sender ID" modal hai (Top-Up ki tarah): khula rehta hai, band karne par Compliance par wapas. */
export default function ComplianceSenders() {
  const navigate = useNavigate();
  const toast = useToast();
  const close = () => navigate("/portal/compliance");
  useEscape(close);
  const rules = [[["close", "sign & dispatch", "back to step"], (el) => {
    if (/dispatch/i.test(el.textContent)) toast("Sender ID submitted (demo) — backend abhi connect nahi.");
    close();
  }]];
  const onAction = useActionLinks(rules);
  return (
    <div className="contents" onClick={onAction}>
      <div className="flex flex-col w-full relative">
        <div aria-hidden="true" className="w-full space-y-8 p-6 lg:p-8 filter blur-[2px] pointer-events-none select-none opacity-80">
          <PageHero>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-jk-label-sm tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-portal-mint animate-ping" />
                  {' '}
                  <span>
                    NATIONAL TELCO GATEWAY STATUS: SYNCHRONIZED
                  </span>
                </div>
                <h1 className="text-jk-display-hero text-white tracking-tight">
                  Compliance &amp; Carrier Governance Hub
                </h1>
                <p className="text-jk-body-md text-portal-mint-2 leading-relaxed">
                  Direct cryptographic routing across Pakistan Telecom Authority (PTA) licensed MNOs (Jazz, Zong, Telenor, Ufone) and Meta Business Cloud.
                </p>
              </div>
              <div className="bg-white/15 backdrop-blur-xl p-5 rounded-2xl border-none shadow-lg flex flex-col gap-3 min-w-[280px]">
                <div className="flex items-center justify-between text-white">
                  <span className="text-jk-label-sm opacity-90">
                    Corporate NTN Registration
                  </span>
                  {' '}
                  <span className="text-jk-label-md font-bold text-portal-mint">
                    VERIFIED
                  </span>
                </div>
                <div className="text-jk-headline-sm font-bold tracking-tight text-white">
                  7392810-4
                </div>
                <div className="flex items-center gap-2 text-white/80 text-jk-body-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  {' '}
                  <span>
                    nExMeg Solutions Pvt Ltd (SECP)
                  </span>
                </div>
              </div>
            </div>
          </PageHero>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                  PTA Approved Masks
                </span>
                <div className="w-10 h-10 rounded-xl bg-portal-tint text-portal-brand-deep flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    badge
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-jk-metric-stat text-portal-ink">
                  14 Masks
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-portal-success text-jk-label-md">
                  <span className="material-symbols-outlined text-[16px]">
                    trending_up
                  </span>
                  {' '}
                  <span>
                    +2 Approved this cycle
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                  WhatsApp Quality
                </span>
                <div className="w-10 h-10 rounded-xl bg-portal-tint text-portal-success flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    chat_bubble
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-jk-metric-stat text-portal-ink">
                  HIGH (99.8%)
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-portal-success text-jk-label-md">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  {' '}
                  <span>
                    Tier 3 Unlimited Tier Active
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                  Opt-Out DSR Rate
                </span>
                <div className="w-10 h-10 rounded-xl bg-portal-tint text-portal-danger flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    person_remove
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-jk-metric-stat text-portal-ink">
                  0.038%
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-portal-ink-muted text-jk-label-md">
                  <span className="material-symbols-outlined text-[16px]">
                    format_image_left
                  </span>
                  {' '}
                  <span>
                    Compliant (&lt; 0.50% ceiling)
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                  Carrier DND Scrub
                </span>
                <div className="w-10 h-10 rounded-xl bg-portal-tint text-portal-brand flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    filter_alt
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-jk-metric-stat text-portal-ink">
                  1,492,028
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-portal-brand-deep text-jk-label-md">
                  <span className="material-symbols-outlined text-[16px]">
                    history
                  </span>
                  {' '}
                  <span>
                    Auto-scrubbed in 30 days
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-jk-headline-md text-portal-ink">
                  Registered Telecom Masks
                </h2>
                <span className="text-jk-label-sm text-portal-ink-muted uppercase">
                  Active Gateway Routes
                </span>
              </div>
              <div className="space-y-3">
                <div className="h-12 bg-portal-tint rounded-xl" />
                <div className="h-12 bg-portal-tint rounded-xl" />
                <div className="h-12 bg-portal-tint rounded-xl" />
              </div>
            </div>
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-jk-headline-md text-portal-ink mb-4">
                PTA Audit Checklist
              </h2>
              <div className="space-y-3">
                <div className="h-10 bg-portal-tint rounded-xl" />
                <div className="h-10 bg-portal-tint rounded-xl" />
                <div className="h-10 bg-portal-tint rounded-xl" />
              </div>
            </div>
          </div>
        </div>
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl my-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300">
            <div className="h-1.5 w-full bg-gradient-to-r from-portal-brand-deep via-portal-success to-portal-accent" />
            <div className="p-6 sm:p-8 pb-5 bg-portal-tint/60 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-portal-brand-deep/10 text-portal-brand-deep text-jk-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-portal-brand-deep" />
                    {' '}
                    <span>
                      PTA &amp; Telco Regulation
                    </span>
                  </div>
                  <h2 className="text-jk-headline-lg text-portal-ink tracking-tight">
                    Register New Sender ID
                  </h2>
                  <p className="text-jk-body-md text-portal-ink-soft">
                    Submit your verified brand alphanumeric mask for PTA statutory compliance and direct telecom gateway dispatch.
                  </p>
                </div>
                <button aria-label="Close dialog" className="w-10 h-10 rounded-xl bg-white hover:bg-portal-tint-2 text-portal-ink-soft hover:text-portal-ink flex items-center justify-center shadow-sm transition-colors cursor-pointer shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    close
                  </span>
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 bg-portal-tint/40 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 text-portal-success text-jk-label-md">
                    <span className="w-5 h-5 rounded-full bg-portal-mint text-[#002113] font-bold text-[11px] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[14px]">
                        check
                      </span>
                    </span>
                    {' '}
                    <span className="text-portal-ink-soft line-through opacity-80">
                      1: Identity &amp; Specs
                    </span>
                  </div>
                  <span className="text-portal-line font-bold text-xs">
                    /
                  </span>
                  <div className="flex items-center gap-2 text-portal-brand-deep text-jk-label-md font-bold">
                    <span className="w-5 h-5 rounded-full bg-portal-brand-deep text-white text-[11px] flex items-center justify-center shadow-sm">
                      2
                    </span>
                    {' '}
                    <span>
                      Step 2 of 2: Legal Review &amp; Digital Authorization
                    </span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portal-mint/30 text-portal-success text-jk-label-sm font-bold shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-portal-success animate-pulse" />
                  {' '}
                  <span>
                    Ready to Dispatch
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-6 max-h-[calc(88vh-220px)] overflow-y-auto">
              <div className="bg-portal-tint/80 p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-portal-brand-deep text-[20px]">
                      assignment_turned_in
                    </span>
                    <h3 className="text-jk-headline-sm text-portal-ink">
                      Registration Specs Summary
                    </h3>
                  </div>
                  <button className="text-jk-label-sm text-portal-brand-deep hover:text-portal-brand flex items-center gap-1 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[14px]">
                      edit
                    </span>
                    {' '}
                    <span>
                      Modify Specs
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between gap-2">
                    <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                      Sender ID / Brand Mask
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-portal-tint-2 rounded-lg font-mono font-bold text-portal-brand-deep text-[15px] tracking-wide">
                        NEXMEG-PAY
                      </span>
                      {' '}
                      <span className="px-2.5 py-0.5 rounded-full bg-portal-mint-2 text-portal-brand-deeper text-jk-label-sm">
                        Transactional / OTP
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between gap-2">
                    <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                      Corporate Legal Entity
                    </span>
                    <div>
                      <div className="text-jk-label-md text-portal-ink font-bold">
                        nExMeg Solutions Pvt Ltd
                      </div>
                      <div className="font-mono text-portal-ink-muted text-jk-label-sm mt-0.5">
                        NTN: 7392810-4 • SECP Reg #0192842
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between gap-2">
                    <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                      Operator Routing Whitelist
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-portal-tint-2 text-portal-ink text-jk-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-portal-success" />
                        Jazz
                      </span>
                      {' '}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-portal-tint-2 text-portal-ink text-jk-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-portal-success" />
                        Zong
                      </span>
                      {' '}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-portal-tint-2 text-portal-ink text-jk-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-portal-success" />
                        Telenor
                      </span>
                      {' '}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-portal-tint-2 text-portal-ink text-jk-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-portal-success" />
                        Ufone
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl shadow-sm flex flex-col justify-between gap-2">
                    <span className="text-jk-label-sm text-portal-ink-muted uppercase tracking-wider">
                      Attached Verification Records
                    </span>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-portal-ink text-jk-label-sm bg-portal-tint px-2 py-1 rounded-lg">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-portal-brand-deep text-[16px]">
                            picture_as_pdf
                          </span>
                          {' '}
                          <span className="truncate font-mono">
                            LOA_nExMeg_PTA_2024.pdf
                          </span>
                        </span>
                        {' '}
                        <span className="font-mono text-portal-ink-muted shrink-0 ml-2">
                          1.4 MB
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-portal-ink text-jk-label-sm bg-portal-tint px-2 py-1 rounded-lg">
                        <span className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-portal-brand-deep text-[16px]">
                            picture_as_pdf
                          </span>
                          {' '}
                          <span className="truncate font-mono">
                            SECP_Form29_Incorporation.pdf
                          </span>
                        </span>
                        {' '}
                        <span className="font-mono text-portal-ink-muted shrink-0 ml-2">
                          820 KB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-portal-danger text-[20px]">
                      policy
                    </span>
                    <h3 className="text-jk-headline-sm text-portal-ink">
                      PTA Undertaking &amp; PECA 2016 Indemnity
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-portal-tint-2 text-portal-ink-soft font-mono text-[10px] uppercase font-bold tracking-wider">
                    Statutory Ref: PTA-DIR-2024/PECA
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-portal-tint text-jk-body-sm text-portal-ink-soft leading-relaxed space-y-2 max-h-24 overflow-y-auto">
                  <p>
                    Under Section 13 of the Pakistan Electronic Crimes Act (PECA 2016) and Pakistan Telecommunication Authority's Regulatory Guidelines on Commercial Alphanumeric Masks, the enterprise affirms that the requested Sender ID is an authentic representation of registered business operations.
                  </p>
                  <p>
                    Transmission of fraudulent alerts, financial spoofing, unencrypted OTP interception, or unauthorized promotional broadcasts during prohibited nocturnal hours (9:00 PM – 9:00 AM PKT) shall result in instantaneous gateway revocation, regulatory blacklisting, and penal forfeiture.
                  </p>
                </div>
                <div className="space-y-3 pt-1">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-0.5 w-5 h-5 rounded-md bg-portal-brand-deep text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <span className="material-symbols-outlined text-[16px] font-bold">
                        check
                      </span>
                    </div>
                    <span className="text-jk-body-sm text-portal-ink select-none">
                      I, as Authorized Signatory (
                      <strong className="text-portal-ink font-semibold">
                        Ahmed Raza
                      </strong>
                      ), solemnly confirm that{' '}
                      <span className="font-semibold text-portal-brand-deep">
                        nExMeg Solutions Pvt Ltd
                      </span>
                      {' '}owns legal rights and trademark certification to utilize the alphanumeric mask{' '}
                      <strong className="font-mono text-portal-ink">
                        NEXMEG-PAY
                      </strong>
                      .
                    </span>
                  </label>
                  {' '}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-0.5 w-5 h-5 rounded-md bg-portal-brand-deep text-white flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <span className="material-symbols-outlined text-[16px] font-bold">
                        check
                      </span>
                    </div>
                    <span className="text-jk-body-sm text-portal-ink select-none">
                      I agree to telco gateway non-repudiation terms, carrier indemnity indemnification, and statutory retention of immutable message logs for{' '}
                      <strong className="text-portal-ink font-semibold">
                        180 days
                      </strong>
                      {' '}for PTA audit compliance.
                    </span>
                  </label>
                </div>
              </div>
              <div className="bg-portal-tint/80 p-5 rounded-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-portal-brand-deep text-[20px]">
                      draw
                    </span>
                    <h3 className="text-jk-headline-sm text-portal-ink">
                      Digital Signature &amp; Cryptographic Authorization
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-portal-mint/30 text-portal-success text-jk-label-sm font-bold">
                    <span className="material-symbols-outlined text-[14px]">
                      shield
                    </span>
                    {' '}
                    <span>
                      OTP Authenticated
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between h-32 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-portal-ink-muted uppercase tracking-widest font-bold">
                        Signatory Stamp
                      </span>
                      {' '}
                      <span className="font-mono text-[10px] text-portal-brand-deep font-bold">
                        PK-PKI AUTH
                      </span>
                    </div>
                    <div className="my-auto flex items-center justify-center">
                      <span className="font-serif italic font-bold text-2xl tracking-wide text-portal-brand-deep transform -rotate-2 select-none">
                        Ahmed Raza
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[10px] text-portal-ink-muted pt-2 bg-portal-tint px-2 py-1 rounded">
                      <span>
                        Cert Token:
                      </span>
                      {' '}
                      <span className="font-bold text-portal-success">
                        #NOC-9921-SIG
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-7 bg-white p-4 rounded-xl shadow-sm space-y-2 text-jk-body-sm">
                    <div className="flex items-center justify-between py-1 bg-portal-tint/50 px-3 rounded-lg">
                      <span className="text-portal-ink-soft text-jk-label-sm">
                        Authorized Signatory
                      </span>
                      {' '}
                      <span className="text-portal-ink font-bold">
                        Ahmed Raza (Marketing Lead)
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-portal-tint/50 px-3 rounded-lg">
                      <span className="text-portal-ink-soft text-jk-label-sm">
                        Verification Handshake
                      </span>
                      {' '}
                      <span className="text-portal-ink font-mono font-medium">
                        +92 300 0000000 (SMS OTP)
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-portal-tint/50 px-3 rounded-lg">
                      <span className="text-portal-ink-soft text-jk-label-sm">
                        Authorization Timestamp
                      </span>
                      {' '}
                      <span className="text-portal-ink font-mono font-bold text-portal-brand-deep">
                        PKT 2025-05-18 14:32:09
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-portal-tint/50 px-3 rounded-lg">
                      <span className="text-portal-ink-soft text-jk-label-sm">
                        Dispatch Gateway Payload
                      </span>
                      {' '}
                      <span className="text-portal-success font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          lock
                        </span>
                        {' '}
                        <span>
                          Digitally Sealed &amp; Validated
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-portal-tint/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-portal-ink-soft hover:text-portal-ink hover:bg-portal-tint-2 text-jk-label-md transition-colors flex items-center justify-center gap-2 cursor-pointer" type="button">
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                {' '}
                <span>
                  Back to Step 1
                </span>
              </button>
              <div className="flex items-center flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-portal-tint-2 text-portal-ink text-jk-label-md shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer" type="button">
                  <span className="material-symbols-outlined text-portal-brand-deep text-[18px]">
                    picture_as_pdf
                  </span>
                  {' '}
                  <span>
                    Download Undertaking (PDF)
                  </span>
                </button>
                <button className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-portal-accent to-portal-danger text-white text-jk-label-md shadow-lg shadow-portal-accent/40 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold" type="button">
                  <span>
                    Sign &amp; Dispatch to PTA / Telco Gateway
                  </span>
                  {' '}
                  <span className="text-[14px]">
                    🚀
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
