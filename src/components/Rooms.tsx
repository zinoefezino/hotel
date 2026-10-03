import { useState } from "react";
import { rooms, formatMoney } from "../data/hotel";
import HotelPhoto from "./HotelPhoto";
import Button from "./Button";
import SiteIcon from "./SiteIcon";

export default function Rooms() {
  const [active, setActive] = useState(0);
  return <section id="rooms" className="grid bg-sage lg:grid-cols-[.85fr_1.15fr]">
    <div className="px-[8%] py-14 lg:px-[12%] lg:py-20">
      <h2 className="mb-8 text-5xl leading-none tracking-[-.05em] sm:text-6xl">Find your<br />kind of quiet.</h2>
      <div className="space-y-3">{rooms.map((room, index) => <div key={room.id} className={active === index ? "bg-white p-5" : "p-5"}>
        <h3><button type="button" aria-expanded={active === index} aria-controls={`room-preview-${room.id}`} onClick={() => setActive(index)} className="flex w-full items-center justify-between gap-4 text-left text-xl font-medium sm:text-2xl"><span>{room.name}</span><SiteIcon name="down" size={18} className={active === index ? "rotate-180" : ""} /></button></h3>
        <div id={`room-preview-${room.id}`} hidden={active !== index}>
          <p className="mt-4 text-sm leading-6 text-muted">{room.description}</p>
          <p className="mt-4 text-xs text-muted">{room.details}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4"><span className="text-sm">From {formatMoney(room.rate)} / night</span><Button href={`/rooms/${room.id}`}>Explore room</Button></div>
        </div>
      </div>)}</div>
    </div>
    <div className="relative min-h-[360px] sm:min-h-[520px]">{rooms.map((room, index) => <HotelPhoto key={room.id} photo={room.image} alt={index === active ? room.imageAlt : ""} sizes="(min-width: 1024px) 58vw, 100vw" className={`absolute inset-0 size-full transition-opacity duration-500 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`} />)}</div>
  </section>;
}



