import { useState } from "react";
import PageIntro from "../components/PageIntro";
import RoomCard from "../components/RoomCard";
import StayCallout from "../components/StayCallout";
import { rooms } from "../data/hotel";

export default function RoomsPage() {
  const [guests, setGuests] = useState(1);
  const [budget, setBudget] = useState(0);
  const [sort, setSort] = useState("recommended");
  const matching = rooms.filter(room => room.capacity >= guests && (!budget || room.rate <= budget));
  const visible = sort === "price" ? [...matching].sort((a,b) => a.rate-b.rate) : matching;
  return <>
    <PageIntro title="Find your kind of quiet." description="Compare spaces, find the right fit, and make a little room for yourself." />
    <section aria-label="Find a room" className="px-[7%] pb-16 sm:px-[6%]">
      <div className="mb-8 flex flex-wrap items-end gap-5 rounded-sm bg-sage/60 p-5 sm:p-7">
        <label className="grid flex-1 gap-2 text-sm">Guests<select value={guests} onChange={e => setGuests(Number(e.target.value))} className="min-h-11 min-w-36 rounded-sm bg-white px-3">{[1,2,3,4].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label>
        <label className="grid flex-1 gap-2 text-sm">Nightly budget<select value={budget} onChange={e => setBudget(Number(e.target.value))} className="min-h-11 min-w-36 rounded-sm bg-white px-3"><option value={0}>Any budget</option><option value={200}>Up to $200</option><option value={300}>Up to $300</option><option value={450}>Up to $450</option></select></label>
        <label className="grid flex-1 gap-2 text-sm">Sort by<select value={sort} onChange={e => setSort(e.target.value)} className="min-h-11 min-w-36 rounded-sm bg-white px-3"><option value="recommended">Recommended</option><option value="price">Price: low to high</option></select></label>
        <button onClick={() => { setGuests(1); setBudget(0); setSort("recommended"); }} className="min-h-11 px-3 text-sm hover:bg-white" type="button">Reset filters</button>
      </div>
      <p role="status" className="mb-7 text-sm text-muted">{visible.length} {visible.length === 1 ? "space matches" : "spaces match"} your preferences · Sample rates in USD, not live availability</p>
      {visible.length ? <div className="grid gap-8 md:grid-cols-3">{visible.map(room => <RoomCard key={room.id} room={room} />)}</div> : <div className="py-14 text-center"><h2 className="text-3xl tracking-tight">Let's make a little more room.</h2><p className="mt-4 text-muted">Try increasing your budget or changing the guest count.</p></div>}
    </section>
    <section className="bg-forest px-[7%] py-16 text-white sm:px-[6%]">
      <h2 className="text-4xl tracking-tight">A little easier to choose.</h2>
      <div className="mt-8 overflow-x-auto"><table className="w-full min-w-[580px] text-left text-sm"><caption className="sr-only">Compare room types, guest capacity and sample rates</caption><thead><tr><th scope="col" className="py-4 pr-5">Your space</th>{rooms.map(room => <th scope="col" key={room.id} className="p-4 font-medium">{room.name}</th>)}</tr></thead><tbody>{[
        ["Guests", ...rooms.map(r => `Up to ${r.capacity}`)],
        ["Size", ...rooms.map(r => r.details.split(" · ")[0])],
        ["Bed setup", ...rooms.map(r => r.details.split(" · ")[1])],
        ["Outdoor space", ...rooms.map(r => r.details.split(" · ")[2])],
        ["Sample nightly rate", ...rooms.map(r => `$${r.rate}`)],
      ].map((row, index) => <tr key={row[0]} className={index % 2 === 0 ? "bg-white/5" : ""}><th scope="row" className="py-4 pr-5 pl-3 font-normal text-white/70">{row[0]}</th>{row.slice(1).map((value,i) => <td key={i} className="p-4">{value}</td>)}</tr>)}</tbody></table></div>
    </section>
    <StayCallout />
  </>;
}

