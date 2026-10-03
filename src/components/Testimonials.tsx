import { useState } from "react";
import SiteIcon from "./SiteIcon";

const stories = [
  {
    quote:
      "The kind of place where you stop checking the time. Our favourite part was doing absolutely nothing.",
    name: "The weekend escape",
    photo: "photo-1438761681033-6461ffad8d80",
  },
  {
    quote:
      "Slow breakfasts, a room full of light, and the sea never far away. Exactly how we imagined a few days away.",
    name: "The coastal stay",
    photo: "photo-1500648767791-00dcc994a43e",
  },
  {
    quote:
      "Space for everyone to settle in, and little moments together that made us want to stay another night.",
    name: "The family retreat",
    photo: "photo-1534528741775-53994a69daeb",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  function move(direction: number) {
    setActive(
      (current) => (current + direction + stories.length) % stories.length,
    );
  }
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      aria-roledescription="carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      className="px-[7%] py-20 sm:px-[6%] sm:py-28"
    >
      <h2
        id="testimonials-title"
        className="mb-10 text-[42px] leading-tight font-medium tracking-[-.05em] sm:mb-14 sm:text-6xl"
      >
        The feeling stays.
      </h2>
      <div className="grid gap-9 md:grid-cols-[.85fr_1.15fr] md:items-stretch md:gap-[8%]">
        <div className="relative aspect-[4/3] overflow-hidden bg-sage sm:aspect-[4/5] md:max-h-[600px]">
          {stories.map((story, index) => (
            <img
              key={story.photo}
              src={`https://images.unsplash.com/${story.photo}?auto=format&fit=crop&crop=faces&w=1000&h=1250&q=90`}
              alt=""
              aria-hidden="true"
              width={1000}
              height={1250}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 size-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${active === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className="flex min-w-0 flex-col justify-between py-1 md:py-5">
          <div className="grid" aria-live="polite" aria-atomic="true">
            {stories.map((story, index) => (
              <figure
                key={story.name}
                aria-hidden={index !== active}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${stories.length}`}
                className={`col-start-1 row-start-1 transition-opacity duration-300 motion-reduce:transition-none ${index === active ? "visible opacity-100" : "invisible opacity-0"}`}
              >
                <span
                  aria-hidden="true"
                  className="block h-14 text-8xl leading-none text-forest sm:h-20 sm:text-9xl"
                >
                  “
                </span>
                <blockquote className="mt-4 text-[clamp(28px,3.1vw,48px)] leading-[1.2] font-medium tracking-[-.045em]">
                  {story.quote}
                </blockquote>
                <figcaption className="mt-7 text-sm text-muted sm:mt-9">
                  {story.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-between gap-5 pt-6 md:mt-12">
            <div className="flex gap-2" aria-hidden="true">
              {stories.map((story, index) => (
                <span
                  key={story.name}
                  className={`h-1 rounded-full transition-all duration-300 motion-reduce:transition-none ${active === index ? "w-8 bg-forest" : "w-2 bg-forest/20"}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center rounded-full border border-forest/30 transition-colors hover:bg-forest hover:text-white motion-reduce:transition-none"
              >
                <SiteIcon name="down" size={22} className="rotate-90" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center rounded-full bg-forest text-white transition-colors hover:bg-[#42604d] motion-reduce:transition-none"
              >
                <SiteIcon name="down" size={22} className="-rotate-90" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
