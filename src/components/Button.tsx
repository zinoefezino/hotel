import { Link } from "react-router-dom";
import type { ComponentProps, ReactNode } from "react";
import SiteIcon from "./SiteIcon";

type SharedProps = { children: ReactNode; variant?: "dark" | "light"; className?: string };
type ButtonProps = SharedProps & (
  | ({ href: string } & Omit<ComponentProps<"a">, keyof SharedProps>)
  | ({ href?: never } & Omit<ComponentProps<"button">, keyof SharedProps>)
);

export default function Button({ children, variant = "dark", className = "", ...props }: ButtonProps) {
  const classes = `group inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-sm border border-transparent px-4 py-2.5 text-xs font-medium leading-4 transition-colors sm:min-h-10 sm:py-2 motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50 ${variant === "dark" ? "bg-forest text-white hover:bg-[#42604d]" : "bg-white text-forest hover:bg-sage"} ${className}`;
  const content = <>{children}<SiteIcon size={16} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" /></>;
  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = props as ComponentProps<"a"> & { href: string };
    return href.startsWith("/") ? <Link {...linkProps} to={href} className={classes}>{content}</Link> : <a {...linkProps} href={href} className={classes}>{content}</a>;
  }
  return <button {...props as ComponentProps<"button">} className={classes}>{content}</button>;
}






