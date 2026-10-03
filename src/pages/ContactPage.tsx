import { useSearchParams } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import LocationMap from "../components/LocationMap";
import EnquiryForm from "../components/EnquiryForm";
import Button from "../components/Button";

export default function ContactPage() {
  const [params] = useSearchParams();
  const topic = params.get("topic") ?? "Planning a stay";
  const message = (params.get("message") ?? "").slice(0,3000);
  return <>
    <PageIntro title="Your escape starts with hello." description="Questions about a room, a special occasion, or finding your way? Make a little space for the details." />
    <LocationMap />
    <section className="grid gap-12 px-[7%] py-16 sm:px-[6%] sm:py-24 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
      <aside><h2 className="text-3xl tracking-tight">Getting here.</h2><div className="mt-7 space-y-7 text-sm leading-7 text-muted">
        <div><h3 className="mb-2 text-lg font-medium text-forest">By air & rail</h3><p>The A Line connects Denver International Airport with Denver Union Station. Check current services before travelling.</p><a href="https://visitdenver.com/about-denver/transportation/denver-airport-rail/" target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center font-medium text-forest">Airport rail guide ↗</a></div>
        <div><h3 className="mb-2 text-lg font-medium text-forest">By car</h3><p>The map is a city guide. A street address, parking details and hotel-specific directions will be added when the property location is confirmed.</p></div>
        <div><h3 className="mb-2 text-lg font-medium text-forest">Before you arrive</h3><p>Ask about accessibility, dietary requirements and special arrangements before making travel plans.</p></div>
      </div><Button href="/policies" className="mt-8">Good to know</Button></aside>
      <EnquiryForm key={topic + message} initialTopic={topic} initialMessage={message} />
    </section>
  </>;
}

