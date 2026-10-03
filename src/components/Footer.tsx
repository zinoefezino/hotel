import { Link } from "react-router-dom";
import { navigation } from "../data/hotel";
import SiteIcon from "./SiteIcon";

export default function Footer() {
  function backToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    document.querySelector<HTMLAnchorElement>('header a')?.focus({ preventScroll: true });
  }

  return <footer className="overflow-hidden bg-white px-[6%] pt-16 pb-6 text-forest sm:pt-24 sm:pb-8">
    <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.5fr_1fr_auto] lg:items-start">
      <p className="max-w-md text-4xl leading-[1.08] tracking-[-.05em] sm:text-5xl">A slower pace.<br /><span className="text-muted">A lasting feeling.</span></p>
      <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-7 gap-y-1 text-sm">
        {navigation.filter((item) => item.href !== "/").map((item) => <Link key={item.href} to={item.href} className="flex min-h-11 items-center transition-colors hover:text-muted">{item.label}</Link>)}
        <Link to="/stay" className="group inline-flex min-h-11 items-center gap-2 font-medium">Plan your stay<SiteIcon size={16} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" /></Link>
        <Link to="/policies" className="flex min-h-11 items-center transition-colors hover:text-muted">Good to know</Link>
      </nav>
      <button type="button" onClick={backToTop} className="group inline-flex min-h-11 w-fit items-center gap-3 text-xs sm:col-span-2 lg:col-span-1">
        Back to top<span className="grid size-11 place-items-center rounded-full bg-forest text-white transition-colors group-hover:bg-[#42604d]"><SiteIcon name="down" size={18} className="rotate-180" /></span>
      </button>
    </div>
    <div className="mt-14 flex items-center justify-between text-xs text-muted sm:mt-20"><span>© {new Date().getFullYear()} Aurelia.</span></div>
    <Link to="/" aria-label="Aurelia home" className="mt-6 block text-center text-[25vw] leading-[.85] font-medium tracking-[-.075em] transition-colors hover:text-muted focus-visible:outline-offset-[-4px] sm:mt-10">Aurelia</Link>
  </footer>;
}

