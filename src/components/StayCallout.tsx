import Button from "./Button";
import { SectionHeading } from "./Section";

export default function StayCallout() {
  return <section className="flex flex-col items-start justify-between gap-8 bg-sage px-[7%] py-16 sm:px-[6%] md:flex-row md:items-center">
    <div><SectionHeading>Stay a little longer.</SectionHeading></div>
    <Button href="/stay">Plan your stay</Button>
  </section>;
}



