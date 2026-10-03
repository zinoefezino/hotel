import { Link } from "react-router-dom";
import type { Room } from "../data/hotel";
import { formatMoney } from "../data/hotel";
import SiteIcon from "./SiteIcon";
import HotelPhoto from "./HotelPhoto";

export default function RoomCard({ room }: { room: Room }) {
  return <article className="mb-5 md:mb-0">
    <Link to={`/rooms/${room.id}`} aria-label={`Explore ${room.name}`} className="group relative block overflow-hidden rounded-sm">
      <HotelPhoto photo={room.image} alt={room.imageAlt} sizes="(min-width: 768px) 30vw, 90vw" className="aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
      <span className="absolute right-4 bottom-4 grid size-9 place-items-center rounded-sm bg-white/95"><SiteIcon size={16} /></span>
    </Link>
    
    <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-[25px] font-medium"><Link to={`/rooms/${room.id}`} className="hover:text-forest">{room.name}</Link></h3>
      <span className="whitespace-nowrap text-xs">From {formatMoney(room.rate)}<small className="text-[10px] text-muted"> / night</small></span>
    </div>
    <p className="mt-3.5 text-[11px] text-muted">{room.details}</p>
  </article>;
}





