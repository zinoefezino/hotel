import HotelPhoto from "./HotelPhoto";
import { photos } from "../data/hotel";
import { useScrollHeadline } from "../hooks/useScrollHeadline";
import Button from "./Button";

const headline = "max-w-6xl text-[clamp(60px,16vw,100px)] leading-[.92] font-medium tracking-[-.065em] sm:text-[clamp(88px,11.8vw,180px)]";

export default function HeroScroll() {
  const { trackRef, stickyRef } = useScrollHeadline();
  return <section ref={trackRef} aria-label="Welcome to Aurelia" className="relative mx-2.5 h-[calc(max(620px,100svh-72px)+100svh)] text-white [--first-opacity:1] [--first-y:0px] [--second-opacity:0] [--second-y:65px] sm:mx-5 sm:h-[calc(max(600px,100svh-84px)+100svh)]">
    <div ref={stickyRef} className="sticky top-0 isolate grid h-[max(620px,calc(100svh-72px))] items-center overflow-hidden px-[6%] sm:h-[max(600px,calc(100svh-84px))]">
      <HotelPhoto photo={photos.hero} alt="Palm trees and a swimming pool beside a coastal resort" priority sizes="(max-width: 639px) 1200px, 100vw" className="absolute inset-0 -z-20 size-full" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 to-black/30" />
      <div data-scene="first" className="text-center col-start-1 row-start-1 translate-y-(--first-y) opacity-(--first-opacity) motion-reduce:translate-y-0">
        <h1 className={`${headline} mx-auto`}>Stay somewhere<br className="hidden sm:block" /> you feel.</h1>

      </div>
      <div data-scene="second" aria-hidden="true" inert className="col-start-1 row-start-1 translate-y-(--second-y) opacity-(--second-opacity) motion-reduce:translate-y-0">
        <h1 className={headline}>Less hurry.<br />More here.</h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-white/90 sm:mt-10 sm:text-lg">Long mornings. Salt on your skin. A place to leave the everyday behind, and come back to yourself.</p>
        <Button href="/rooms" variant="light" className="mt-7 sm:mt-8">Find your room</Button>
      </div>
    </div>
  </section>;
}




