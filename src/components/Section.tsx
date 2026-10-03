import type { ReactNode } from "react";

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`scroll-mt-8 px-[7%] py-16 sm:px-[6%] sm:py-[105px] 2xl:px-[max(6%,calc((100vw-1320px)/2))] ${className}`}>{children}</section>;
}



export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-[42px] leading-[1.12] font-medium tracking-[-1.8px] sm:text-[clamp(38px,4vw,62px)]">{children}</h2>;
}



