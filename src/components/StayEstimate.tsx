import { formatMoney } from "../data/hotel";
import Button from "./Button";

export type Estimate = { nights: number; total: number; name: string; guests: number; arrival: string; departure: string; rate: number };
export default function StayEstimate({ estimate }: { estimate: Estimate }) {
  const message = `I'd like to ask about ${estimate.name} for ${estimate.guests} guest(s), arriving ${estimate.arrival} and departing ${estimate.departure}. The demo room subtotal is ${formatMoney(estimate.total)} for ${estimate.nights} nights.`;
  const date = (value: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(value + "T00:00:00Z"));
  return <div className="mt-7 grid gap-8 rounded-sm bg-sage/60 p-6 text-left sm:p-8 md:grid-cols-2">
    <div><h3 className="text-3xl tracking-tight">Your stay, at a glance.</h3><p className="mt-5 text-xl">{estimate.name}</p><p className="mt-2 text-sm leading-6 text-muted">{date(estimate.arrival)} – {date(estimate.departure)}<br />{estimate.nights} nights · {estimate.guests} guests</p></div>
    <div><dl className="space-y-3 text-sm"><div className="flex justify-between gap-4"><dt>{formatMoney(estimate.rate)} × {estimate.nights} nights</dt><dd>{formatMoney(estimate.total)}</dd></div><div className="flex justify-between gap-4 text-muted"><dt>Taxes & fees</dt><dd>Not calculated</dd></div><div className="flex justify-between gap-4 pt-3 text-xl"><dt>Room subtotal</dt><dd className="font-medium">{formatMoney(estimate.total)}</dd></div></dl><p className="mt-5 text-xs leading-6 text-muted">Illustrative estimate in USD. No availability is checked and no room is reserved. The final total may include taxes and fees.</p><Button href={`/contact?topic=Planning%20a%20stay&message=${encodeURIComponent(message)}`} className="mt-6">Prepare an enquiry</Button></div>
  </div>;
}

