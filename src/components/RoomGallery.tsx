import { useState } from "react";
import { photos, type Room } from "../data/hotel";
import HotelPhoto from "./HotelPhoto";
import SiteIcon from "./SiteIcon";

export default function RoomGallery({ room }: { room: Room }) {
  const [active, setActive] = useState(0);
  const images = [
    { photo: room.image, alt: room.imageAlt, label: "Room inspiration" },
    { photo: photos.hero, alt: "Resort buildings beside a swimming pool", label: "Around the resort" },
    { photo: photos.coast, alt: "Waves meeting the sand at sunset", label: "Coastal setting" },
  ];
  function move(step: number) { setActive(value => (value + step + images.length) % images.length); }
  return <section aria-label={`${room.name} photo gallery`} className="px-[7%] sm:px-[6%]">
    <div className="relative overflow-hidden bg-sage">
      <HotelPhoto photo={images[active].photo} alt={images[active].alt} priority className="h-[340px] sm:h-[60vh] sm:min-h-[420px]" />
      <div className="absolute right-4 bottom-4 flex gap-2">
        <button type="button" aria-label="Previous photo" onClick={() => move(-1)} className="grid size-11 place-items-center rounded-full bg-white text-forest hover:bg-sage"><SiteIcon name="down" className="rotate-90" /></button>
        <button type="button" aria-label="Next photo" onClick={() => move(1)} className="grid size-11 place-items-center rounded-full bg-white text-forest hover:bg-sage"><SiteIcon name="down" className="-rotate-90" /></button>
      </div>
    </div>
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4"><div className="flex gap-3">{images.map((image, index) => <button key={image.photo} type="button" aria-label={`Show ${image.label.toLowerCase()}`} aria-pressed={active === index} onClick={() => setActive(index)} className={`overflow-hidden rounded-sm p-1 ${active === index ? "bg-forest" : "bg-transparent opacity-60 hover:opacity-100"}`}><HotelPhoto photo={image.photo} alt="" sizes="100px" className="h-14 w-20 sm:h-16 sm:w-24" /></button>)}</div><p aria-live="polite" className="text-xs text-muted">{images[active].label} · Illustrative photography</p></div>
  </section>;
}

