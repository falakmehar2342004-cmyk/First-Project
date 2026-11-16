import Card from "./Card.jsx";
import PageHero from "./PageHero.jsx";
import Stepper from "./Stepper.jsx";

export const CAMPAIGN_STEPS = ["Channel", "Audience", "Message", "Schedule & Review"];

/** Campaign wizard ka shared header: hero + 4-step progress. step 1..4. Teeno wizard pages yahi use karte hain. */
export default function WizardBar({ step, title, description, actions }) {
  return (
    <div className="space-y-4 mb-6">
      <PageHero badge={`Campaign Builder · Step ${step} of 4`} title={title} description={description} actions={actions} padding="p-5 lg:p-6" />
      <Card className="px-5 py-3.5"><Stepper steps={CAMPAIGN_STEPS} current={step - 1} /></Card>
    </div>
  );
}
