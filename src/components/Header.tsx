import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigation } from "../data/hotel";
import Brand from "./Brand";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  function closeMenu() { setOpen(false); }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function resize() { if (desktop.matches) setOpen(false); }
    desktop.addEventListener("change", resize);
    return () => desktop.removeEventListener("change", resize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      toggle.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between gap-7 bg-white px-[6%] sm:h-[84px] sm:px-[5%]">
    <Brand />
    <nav aria-label="Main navigation" className="hidden gap-3 text-[13px] lg:flex">
      {navigation.map((link) => <NavLink key={link.href} to={link.href} end={link.href === "/"} className={({ isActive }) => `rounded-full px-3 py-2 transition-colors ${isActive ? "bg-sage font-medium" : "hover:bg-sage/50"}`}>{link.label}</NavLink>)}
    </nav>
    <Button href="/stay" className="max-lg:hidden">Plan your stay</Button>
    <button ref={toggle} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className={`grid size-11 place-items-center rounded-full hover:bg-sage lg:hidden ${open ? "invisible" : ""}`}>
      <span aria-hidden="true" className="relative h-5 w-5">
        <span className={`absolute top-[5px] left-0 h-px w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${open ? "translate-y-[5px] rotate-45" : ""}`} />
        <span className={`absolute top-[10px] left-0 h-px w-5 bg-current transition-opacity duration-300 motion-reduce:transition-none ${open ? "opacity-0" : ""}`} />
        <span className={`absolute top-[15px] left-0 h-px w-5 bg-current transition-transform duration-300 motion-reduce:transition-none ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
      </span>
    </button>
    <div ref={panel} id="mobile-navigation" role="dialog" aria-modal={open ? true : undefined} aria-label="Navigation" aria-hidden={!open} inert={!open}
      onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); closeMenu(); }
        if (event.key === "Tab") {
          const targets = panel.current?.querySelectorAll<HTMLElement>('a[href], button:not([tabindex="-1"])');
          if (!targets?.length) return;
          const first = targets[0]; const last = targets[targets.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
      }}
      className={`fixed inset-0 z-50 h-dvh transition-[visibility] duration-[320ms] motion-reduce:transition-none lg:hidden ${open ? "visible" : "invisible pointer-events-none"}`}>
      <div aria-hidden="true" className={`absolute inset-0 bg-black/20 transition-opacity duration-[320ms] motion-reduce:transition-none ${open ? "opacity-100" : "opacity-0"}`} />
      <div className={`relative flex h-full w-full transition-transform duration-[320ms] ease-out motion-reduce:transition-none ${open ? "translate-x-0" : "translate-x-full"}`}>
        <button type="button" tabIndex={-1} aria-label="Close navigation backdrop" onClick={closeMenu} className="h-full w-1/4 shrink-0 bg-white/10 backdrop-blur-md backdrop-saturate-150" />
        <div className="relative flex h-full w-3/4 flex-col overflow-y-auto bg-white px-6 pt-24 pb-10 shadow-xl sm:px-10 sm:pt-28">
          <button ref={close} type="button" onClick={closeMenu} aria-label="Close navigation" className="absolute top-[14px] right-[8%] grid size-11 place-items-center rounded-full text-forest hover:bg-sage sm:top-5">
            <span aria-hidden="true" className="relative size-5"><span className="absolute top-2.5 left-0 h-px w-5 rotate-45 bg-current" /><span className="absolute top-2.5 left-0 h-px w-5 -rotate-45 bg-current" /></span>
          </button>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
            {navigation.map((link) => <NavLink key={link.href} to={link.href} end={link.href === "/"} onClick={closeMenu} className={({ isActive }) => `flex min-h-14 items-center rounded-lg px-2 text-[clamp(22px,3.5vw,32px)] leading-tight tracking-[-.035em] transition-colors ${isActive ? "font-medium text-forest" : "text-muted hover:text-forest"}`}>{link.label}</NavLink>)}
          </nav>
          <NavLink to="/stay" onClick={closeMenu} className="mt-8 inline-flex min-h-11 items-center justify-center self-start rounded-full bg-forest px-5 py-3 text-sm font-medium text-white hover:bg-[#42604d]">Plan your stay</NavLink>
        </div>
      </div>
    </div>
  </header>;
}


