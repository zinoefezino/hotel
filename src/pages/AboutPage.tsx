import PageIntro from "../components/PageIntro";
import HotelPhoto from "../components/HotelPhoto";
import Button from "../components/Button";
import { photos } from "../data/hotel";

export default function AboutPage() {
  return <>
    <PageIntro title="A slower kind of stay." description="Aurelia begins with a simple idea: time away should give you more space to be yourself." />
    <div className="grid items-center gap-9 px-[7%] pb-20 sm:px-[6%] md:grid-cols-[1.2fr_1fr] md:gap-16">
      <HotelPhoto photo={photos.garden} alt="A welcoming bedroom with soft white linens" priority className="h-[380px] sm:h-[540px]" sizes="(min-width: 768px) 50vw, 90vw" />
      <div><h2 className="text-4xl leading-tight tracking-[-.04em] sm:text-5xl">Thoughtful spaces.<br />Simple pleasures.</h2><p className="mt-6 text-sm leading-7 text-muted">Warm materials. Generous daylight. A favourite chair and the first coffee of the morning. We imagine a hotel built around the small things that help you feel at home.</p><p className="mt-5 text-sm leading-7 text-muted">Stay for a weekend or settle in a little longer. You choose the pace. We make room for it.</p><Button href="/rooms" className="mt-8">Find your space</Button></div>
    </div>
    <section className="bg-sage/50 px-[7%] py-16 sm:px-[6%]"><h2 className="text-4xl tracking-tight">What makes a stay feel good?</h2><div className="mt-10 grid gap-9 md:grid-cols-3">{[
      ["Space to breathe", "Rooms with comfortable beds, natural finishes and room to settle into your own routine."],
      ["Time at your pace", "A leisurely meal, a quiet afternoon or a day exploring somewhere new. No fixed agenda."],
      ["Details that matter", "Useful room information and honest answers to practical questions before you arrive."],
    ].map(([title, text]) => <article key={title}><h3 className="text-2xl tracking-tight">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{text}</p></article>)}</div></section>
    <section className="grid gap-9 px-[7%] py-20 sm:px-[6%] md:grid-cols-2"><div><h2 className="text-4xl tracking-tight">Start with the place.</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted">Our location guide explores Denver, Colorado. Discover the city map, arrival information and the questions to ask before your trip.</p><Button href="/contact" className="mt-7">Contact & getting here</Button></div><div className="rounded-sm bg-forest p-8 text-white"><h3 className="text-2xl tracking-tight">A hotel concept, thoughtfully imagined.</h3><p className="mt-5 text-sm leading-7 text-white/80">Aurelia is a portfolio project, not an operating hotel. Room details, rates, resort photography and guest stories illustrate the experience. The Denver map shows the city, not a confirmed property address.</p><Button href="/policies" variant="light" className="mt-6">Good to know</Button></div></section>
  </>;
}

