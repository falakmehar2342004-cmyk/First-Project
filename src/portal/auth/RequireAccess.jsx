import { Link } from "react-router-dom";
import { useAccess } from "./AccessContext.jsx";
import { Card, PageHero } from "../ui/index.js";

function AccessDenied({ perm }) {
  const { roleInfo } = useAccess();
  const adminPage = perm.startsWith("admin.") && perm !== "admin.access";
  return (
    <div className="space-y-6">
      <PageHero title="Access restricted" description={`Aap ka role (${roleInfo.label}) is page ko nahi khol sakta.`} />
      <Card className="p-8 text-center">
        <p className="text-sm text-portal-ink-soft mb-1">Required permission: <code className="font-mono font-bold text-portal-ink">{perm}</code></p>
        <p className="text-xs text-portal-ink-muted mb-5">Zaroorat ho to apne account Owner se role badalne ko kahein.</p>
        <Link to={adminPage ? "/admin" : "/portal"} className="inline-flex px-4 py-2 rounded-xl bg-portal-brand text-white text-sm font-bold hover:opacity-90">{adminPage ? "Admin Dashboard par wapas" : "Dashboard par wapas"}</Link>
      </Card>
    </div>
  );
}

/** Route guard: <Route path="billing" element={<RequireAccess perm="billing.view"><Billing/></RequireAccess>} /> */
export default function RequireAccess({ perm, children }) {
  const { can } = useAccess();
  return can(perm) ? children : <AccessDenied perm={perm} />;
}
