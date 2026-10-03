import { Section, SectionHeading } from "./Section";
import StayPlanner from "./StayPlanner";

export default function StaySection() {
  return <Section id="stay" className="text-center">
    
    <SectionHeading>Your next chapter,<br />by the sea.</SectionHeading>
    <p className="mt-6 mb-10 text-[13px] text-muted">Choose your dates and make a little room for yourself.</p>
    <StayPlanner />
  </Section>;
}



