import { photos } from "../data/hotel";
import HotelPhoto from "./HotelPhoto";
import Button from "./Button";

export default function HomeInvitation() {
  return <section className="grid bg-forest text-white md:grid-cols-2">
    <HotelPhoto photo={photos.ocean} alt="A warm hotel room opening onto a sunlit balcony" className="h-[340px] md:h-full md:min-h-[480px]" sizes="(min-width: 768px) 50vw, 100vw" />
    <div className="flex flex-col items-start justify-center px-[10%] py-16 sm:py-20"><h2 className="text-5xl leading-none tracking-[-.05em] sm:text-6xl">Make room<br />for a little escape.</h2><p className="mt-6 mb-8 max-w-sm text-sm leading-7 text-white/75">A weekend for two or a few more days together. Find your space, choose your dates, and picture yourself here.</p><Button href="/stay" variant="light">Plan your stay</Button></div>
  </section>;
}




