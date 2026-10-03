
export default function PageIntro({ title, description }: { title: string; description: string }) {
  return <div className="px-[7%] pt-14 pb-12 sm:px-[6%] sm:pt-16 sm:pb-14">
    
    <h1 className="max-w-5xl text-[clamp(44px,6.5vw,88px)] leading-[.98] font-medium tracking-[-.06em]">{title}</h1>
    <p className="mt-7 max-w-xl text-sm leading-7 text-muted sm:text-base">{description}</p>
  </div>;
}





