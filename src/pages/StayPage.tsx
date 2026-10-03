import { useSearchParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import StayPlanner from "../components/StayPlanner";
import { rooms } from "../data/hotel";

const questions = [
  { question: "How do I choose the right room?", answer: "The Garden Room and Ocean Suite each accommodate up to two guests. The Pool Residence has space for up to four. Explore the room pages to compare amenities and layouts." },
  { question: "Does this confirm a reservation?", answer: "No. This planner calculates a sample room subtotal. It does not check live availability, charge a payment, or create a hotel reservation." },
  { question: "What is included in the estimate?", answer: "The selected room's sample nightly rate multiplied by your number of nights. Taxes, fees, meals, and additional services are not included." },
];

export default function StayPage() {
  const [params] = useSearchParams();
  const selected = rooms.find((room) => room.id === params.get("room"))?.id ?? "garden";
  return <>
    <PageIntro title="A little time, just for you." description="Choose your room, dates, and guests to explore a sample stay. Your next slow morning starts here." />
    <section aria-label="Plan a hotel stay" className="px-[7%] pb-16 text-center sm:px-[6%]"><div className="mb-8 grid gap-4 text-left sm:grid-cols-3"><div className="rounded-sm bg-sage/60 p-5"><h2 className="font-medium">Choose your stay</h2><p className="mt-2 text-sm text-muted">Select dates, guests and a room.</p></div><div className="rounded-sm bg-sage/40 p-5"><h2 className="font-medium">Review the estimate</h2><p className="mt-2 text-sm text-muted">See the nightly rate and room subtotal.</p></div><div className="rounded-sm bg-sage/20 p-5"><h2 className="font-medium">Prepare an enquiry</h2><p className="mt-2 text-sm text-muted">Preview your questions before contacting.</p></div></div><StayPlanner key={selected} initialRoom={selected} /></section>
    <section className="grid gap-10 bg-sage px-[7%] py-16 sm:px-[6%] md:grid-cols-[1fr_1.5fr]">
      <div><h2 className="text-4xl font-medium tracking-tight">Before you settle in.</h2><p className="mt-5 text-sm leading-6 text-muted">A few things to know about planning your escape.</p></div>
      <div>{questions.map((item) => <details key={item.question} className="py-5"><summary className="text-base font-medium">{item.question}</summary><p className="mt-4 pr-5 text-sm leading-7 text-muted">{item.answer}</p></details>)}</div>
    </section>
  </>;
}




