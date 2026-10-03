import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, ArrowDown01Icon, Sun03Icon, Menu01Icon, Restaurant01Icon, Yoga01Icon, BeachIcon } from "@hugeicons/core-free-icons";

const icons = { arrow: ArrowUpRight01Icon, down: ArrowDown01Icon, sun: Sun03Icon, menu: Menu01Icon, dining: Restaurant01Icon, wellness: Yoga01Icon, beach: BeachIcon };

export default function SiteIcon({ name = "arrow", size = 20, className = "" }: { name?: keyof typeof icons; size?: number; className?: string }) {
  return <HugeiconsIcon icon={icons[name]} size={size} strokeWidth={1.5} className={`shrink-0 ${className}`} aria-hidden="true" focusable="false" />;
}




