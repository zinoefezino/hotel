import { useEffect, useRef } from "react";

export function useScrollHeadline() {
  const trackRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function update() {
      frame = 0;
      if (!track || !sticky) return;
      const distance = Math.max(1, track.offsetHeight - sticky.offsetHeight);
      const progress = Math.min(1, Math.max(0, -track.getBoundingClientRect().top / distance));
      const transition = Math.min(1, Math.max(0, (progress - 0.2) / 0.38));
      const blend = reducedMotion.matches ? Number(transition >= 0.5) : transition * transition * (3 - 2 * transition);
      track.style.setProperty("--first-opacity", String(1 - blend));
      track.style.setProperty("--second-opacity", String(blend));
      track.style.setProperty("--first-y", reducedMotion.matches ? "0px" : `${-65 * blend}px`);
      track.style.setProperty("--second-y", reducedMotion.matches ? "0px" : `${65 * (1 - blend)}px`);
      const secondActive = blend >= 0.5;
      track.querySelectorAll<HTMLElement>("[data-scene]").forEach((scene) => {
        const hidden = (scene.dataset.scene === "second") !== secondActive;
        scene.inert = hidden;
        scene.setAttribute("aria-hidden", String(hidden));
      });
    }

    function schedule() { if (!frame) frame = window.requestAnimationFrame(update); }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { trackRef, stickyRef };
}


