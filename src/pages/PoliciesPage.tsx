import PageIntro from "../components/PageIntro";
import Button from "../components/Button";

const policies = [
  ["Arriving and leaving", "Arrival and departure times have not been set for this hotel concept. Confirm them with the property before planning transport."],
  ["Payments and cancellation", "The stay planner does not collect payment or create a reservation. Deposit, cancellation and refund terms will be displayed before checkout when a booking service is connected."],
  ["Families and extra guests", "Garden Rooms and Ocean Suites illustrate accommodation for two guests. Pool Residences accommodate up to four. Cots, extra beds and child rates are not currently specified."],
  ["Accessibility and special requests", "Step-free access, adapted bathrooms, dietary requirements and other arrangements must be confirmed with the property. The current concept does not guarantee these facilities."],
  ["Privacy in this demo", "Enquiry previews are held in the page's memory and are not submitted or saved to a backend. External photo and map services receive requests when their content loads. Do not enter sensitive information into the demo."],
];

export default function PoliciesPage() {
  return <><PageIntro title="Good to know." description="Clear expectations make for a better stay. These notes explain the current demo; they are not final hotel booking terms." /><section className="grid gap-12 px-[7%] pb-20 sm:px-[6%] md:grid-cols-[.7fr_1.3fr]"><div><h2 className="text-3xl tracking-tight">Before you arrive.</h2><p className="mt-5 mb-7 text-sm leading-7 text-muted">Have a question about your stay? Start with an enquiry.</p><Button href="/contact">Contact & getting here</Button></div><div className="space-y-4">{policies.map(([title, text]) => <details key={title} className="rounded-sm bg-sage/50 p-6"><summary className="min-h-6 text-lg font-medium">{title}</summary><p className="mt-4 text-sm leading-7 text-muted">{text}</p></details>)}</div></section></>;
}

