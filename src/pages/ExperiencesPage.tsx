import { useState } from "react";
import { experiences } from "../data/hotel";
import PageIntro from "../components/PageIntro";
import HotelPhoto from "../components/HotelPhoto";
import Button from "../components/Button";

const labels = ["Dining", "Wellness", "Local experiences"];
export default function ExperiencesPage() {
  const [active, setActive] = useState(0);
  const current = experiences[active];
  return <>
    <PageIntro title="Make the day your own." description="A long lunch, a little stillness, or somewhere new to explore. Choose what you're in the mood for." />
    <section className="px-[7%] pb-20 sm:px-[6%]">
      <div className="mb-8 flex flex-wrap gap-3" aria-label="Choose an experience">{labels.map((label,index) => <button key={label} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-11 rounded-full px-6 py-3 text-sm ${active === index ? "bg-forest text-white" : "bg-sage/60 hover:bg-sage"}`}>{label}</button>)}</div>
      <div className="grid overflow-hidden bg-sage/50 lg:grid-cols-[1.2fr_1fr]">
        <HotelPhoto key={current.image} photo={current.image} alt={current.alt} priority className="h-[320px] sm:h-[460px] lg:h-full lg:min-h-[560px]" sizes="(min-width: 1024px) 55vw, 90vw" />
        <div className="p-7 sm:p-12" aria-live="polite"><h2 className="text-4xl leading-tight tracking-[-.04em] sm:text-5xl">{current.title}</h2><p className="mt-6 text-sm leading-7 text-muted">{current.detail}</p><p className="mt-6 text-sm font-medium">{current.note}</p><details className="mt-8 rounded-sm bg-white p-5"><summary className="text-sm font-medium">Before you make plans</summary><p className="mt-3 text-sm leading-7 text-muted">Opening hours, prices and availability have not been set for this concept. Ask about dietary needs, accessibility or your preferred dates in an enquiry.</p></details><Button href={`/contact?topic=${encodeURIComponent(labels[active])}`} className="mt-8">Ask about {labels[active].toLowerCase()}</Button></div>
      </div>
    </section>
    <section className="flex flex-col justify-between gap-7 bg-forest px-[7%] py-16 text-white sm:px-[6%] md:flex-row md:items-center"><div><h2 className="text-4xl tracking-tight">Leave a little room for discovery.</h2><p className="mt-4 text-sm text-white/75">Explore the Denver city map and plan the practical details.</p></div><Button href="/contact" variant="light">Explore the location</Button></section>
  </>;
}

