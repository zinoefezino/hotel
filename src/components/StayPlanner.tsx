import { useState, type SubmitEvent } from "react";
import { rooms } from "../data/hotel";
import Button from "./Button";
import StayEstimate, { type Estimate } from "./StayEstimate";

const labelStyle = "min-w-0 text-sm";
const fieldStyle = "mt-2 block min-h-12 w-full rounded-sm border border-forest/20 bg-white px-3 text-sm text-forest";

export default function StayPlanner({ initialRoom = "garden" }: { initialRoom?: string }) {
  const [error, setError] = useState("");
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  function clearResult() { setEstimate(null); setError(""); }

  function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const arrival = String(data.get("arrival") || "");
    const departure = String(data.get("departure") || "");
    const guests = Number(data.get("guests"));
    const selected = rooms.find((room) => room.id === data.get("room"));
    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const nights = (Date.parse(departure) - Date.parse(arrival)) / 86400000;
    if (!arrival || !departure || arrival < today || !Number.isFinite(nights) || nights <= 0) {
      setError("Choose an arrival date from today onwards and a later departure date.");
      setEstimate(null); return;
    }
    if (!selected || guests < 1 || !Number.isInteger(guests) || guests > selected.capacity) {
      setError("For more than two guests, please choose the Pool Residence.");
      setEstimate(null); return;
    }
    setError("");
    setEstimate({ nights, total: nights * selected.rate, name: selected.name, guests, arrival, departure, rate: selected.rate });
  }

  return <div>
    <form onSubmit={submit} aria-label="Stay estimate" onInput={clearResult} onChange={clearResult}
      className="grid grid-cols-1 items-end gap-5 rounded-sm bg-sage/40 p-5 text-left sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
      <label className={labelStyle}>Check in<input className={fieldStyle} name="arrival" aria-describedby={error ? "booking-error" : undefined} type="date" required /></label>
      <label className={labelStyle}>Check out<input className={fieldStyle} name="departure" type="date" required /></label>
      <label className={labelStyle}>Guests<select className={fieldStyle} name="guests" defaultValue="2">{[1,2,3,4].map((n) => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label>
      <label className={labelStyle}>Your room<select className={fieldStyle} name="room" defaultValue={initialRoom}>{rooms.map((room) => <option key={room.id} value={room.id}>{room.name}</option>)}</select></label>
      <Button type="submit" className="justify-self-start whitespace-nowrap sm:col-span-2 lg:col-span-4">Review sample stay</Button>
    </form>
    {error && <p id="booking-error" className="p-4 text-[13px] text-[#962f24]" role="alert">{error}</p>}
    <div aria-live="polite">{estimate && <StayEstimate estimate={estimate} />}</div>
    <p className="mt-[18px] text-[10px] text-[#79816f]">Plan a little escape · Sample rates in USD · No payment required</p>
  </div>;
}







