import { useState } from "react";
import { experiences } from "../data/hotel";
import HotelPhoto from "./HotelPhoto";
import Button from "./Button";
import SiteIcon from "./SiteIcon";

export default function HomeExperiences() {
  const [active, setActive] = useState(0);
  const selected = experiences[active];
  return <section id="moments" aria-label="Life at Aurelia" className="relative isolate flex min-h-[700px] flex-col justify-between gap-16 overflow-hidden px-[7%] py-14 text-white sm:min-h-[800px] sm:px-[6%] sm:py-20">
    {experiences.map((experience, index) => <HotelPhoto key={experience.icon} photo={experience.image} alt={index === active ? experience.alt : ""} className={`absolute inset-0 -z-20 size-full transition-opacity duration-700 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`} />)}
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/35" />
    <h2 className="max-w-2xl text-5xl leading-none tracking-[-.055em] sm:text-7xl">What does your<br />day feel like?</h2>
    <div>
      <div className="mb-9 flex flex-wrap gap-3" aria-label="Choose an experience">{experiences.map((experience, index) => <button key={experience.icon} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm transition-colors ${active === index ? "bg-white text-forest" : "bg-black/30 text-white hover:bg-white/20"}`}><SiteIcon name={experience.icon} size={18} />{["A long lunch", "A little stillness", "The open coast"][index]}</button>)}</div>
      <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div aria-live="polite" aria-atomic="true" className="max-w-xl"><h3 className="text-3xl tracking-tight sm:text-5xl">{selected.title}</h3><p className="mt-4 max-w-md text-base leading-7 text-white/85">{selected.description}</p></div>
        <Button href="/experiences" variant="light" className="self-start md:self-auto">Discover the experiences</Button>
      </div>
    </div>
  </section>;
}



