import { useState } from "react";
import { Link } from "react-router-dom";
import SiteIcon from "./SiteIcon";

export default function Story() {
  const [expanded, setExpanded] = useState(false);
  return <section id="story" className="mx-auto max-w-5xl px-[7%] py-24 text-center sm:py-36">
    <h2 className="text-[clamp(42px,6vw,82px)] leading-[1.06] tracking-[-.055em]">Some places you visit.<br /><span className="text-forest">Others, you feel.</span></h2>
    <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-muted">Salt in the air. Sunlight on your skin. Nothing on the agenda but a little time for yourself.</p>
    <button type="button" aria-expanded={expanded} aria-controls="story-more" onClick={() => setExpanded((value) => !value)} className="mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-sage px-5 text-sm">{expanded ? "A little less" : "A little more about us"}<SiteIcon name="down" size={16} className={expanded ? "rotate-180" : ""} /></button>
    <div id="story-more" hidden={!expanded} className="mx-auto mt-7 max-w-lg"><p className="text-base leading-8 text-muted">Aurelia is a quieter kind of escape. Thoughtful spaces, food worth lingering over, and the simple pleasure of feeling completely at home.</p><Link to="/about" className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm hover:text-forest">Read our story<SiteIcon size={16} /></Link></div>
  </section>;
}



