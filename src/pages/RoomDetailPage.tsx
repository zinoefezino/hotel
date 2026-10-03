import { Link, useParams } from "react-router-dom";
import { rooms, formatMoney } from "../data/hotel";
import RoomGallery from "../components/RoomGallery";
import Button from "../components/Button";
import NotFoundPage from "./NotFoundPage";

export default function RoomDetailPage() {
  const { roomId } = useParams();
  const room = rooms.find((item) => item.id === roomId);
  if (!room) return <NotFoundPage />;
  return <>
    <div className="px-[7%] pt-8 pb-10 sm:px-[6%]">
      <Link to="/rooms" className="text-sm  ">Back to rooms & suites</Link>
      <div className="mt-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><h1 className="text-[clamp(48px,7vw,96px)] leading-none font-medium tracking-[-.06em]">{room.name}</h1></div>
        <p className="text-sm text-muted">{room.details}</p>
      </div>
    </div>
    <RoomGallery key={room.id} room={room} />
    <section className="grid gap-12 px-[7%] py-16 sm:px-[6%] lg:grid-cols-[1.5fr_1fr] lg:gap-24">
      <div>
        <h2 className="text-3xl font-medium tracking-tight">Your own place to exhale.</h2>
        <p className="mt-5 max-w-2xl leading-7 text-muted">{room.description}</p>
        <h3 className="mt-10 text-xl font-medium">Inside your room</h3>
        <ul className="mt-5 grid gap-x-8 sm:grid-cols-2">{room.amenities.map((amenity) => <li key={amenity} className="my-1 rounded-sm bg-sage/40 px-4 py-4 text-sm">{amenity}</li>)}</ul>
      </div>
      <aside className="h-fit rounded-sm bg-sage/60 p-7 lg:sticky lg:top-28">
        
        <p><span className="text-4xl tracking-tight">{formatMoney(room.rate)}</span><span className="text-sm text-muted"> / night</span></p>
        <p className="mt-4 mb-7 text-sm text-muted">For up to {room.capacity} guests</p>
        <Button href={`/stay?room=${room.id}`} className="w-full">Plan this stay</Button>
        <p className="mt-5 text-xs leading-5 text-muted">Sample nightly rate. Your stay planner shows an illustrative subtotal, not live availability.</p>
      </aside>
    </section>
    <section className="px-[7%] pb-20 sm:px-[6%]"><div className="flex flex-col justify-between gap-5 rounded-sm bg-forest p-8 text-white sm:flex-row sm:items-center"><div><h2 className="text-3xl tracking-tight">A few things before you settle in.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/75">Review guest capacity, accessibility questions and the demo booking information before planning your stay.</p></div><Button href="/policies" variant="light">Good to know</Button></div></section>
  </>;
}




