import { experiences } from "../data/hotel";
import { SectionHeading } from "./Section";
import SiteIcon from "./SiteIcon";

export default function Experiences() {
  return <section id="experiences" className="grid scroll-mt-8 bg-sage md:grid-cols-2">
    <img className="h-[350px] w-full object-cover md:h-full md:min-h-[660px]" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85" alt="Peaceful spa pool with tropical plants and warm natural finishes" width={1200} height={1000} loading="lazy" />
    <div className="px-[8%] py-[50px] md:px-[13%] lg:py-[75px]">
      
      <SectionHeading>The art of<br />doing less.</SectionHeading>
      <p className="mt-6 mb-9 text-[13px] leading-[1.9] text-muted">A dip before breakfast. An afternoon at the spa. One more course, one more sunset. The best moments are the ones you never planned.</p>
      {experiences.map((experience) => <div key={experience.icon} className="flex gap-6 border-t border-[#ccd0c1] py-[19px]">
        <SiteIcon name={experience.icon} size={25} className="mt-1 text-[#6a705e]" />
        <div><h3 className="text-[22px] font-medium">{experience.title}</h3><p className="mt-2 text-[11px] text-muted">{experience.description}</p></div>
      </div>)}
    </div>
  </section>;
}



