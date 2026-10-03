type Props = {
  photo: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export default function HotelPhoto({ photo, alt, className = "", priority = false, sizes = "100vw" }: Props) {
  const imageUrl = (width: number) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=90`;
  return <img
    src={imageUrl(1600)}
    srcSet={[640, 960, 1440, 1920, 2560].map((width) => `${imageUrl(width)} ${width}w`).join(", ")}
    sizes={sizes}
    alt={alt}
    width={1920}
    height={1280}
    loading={priority ? "eager" : "lazy"}
    fetchPriority={priority ? "high" : undefined}
    decoding="async"
    className={`w-full object-cover ${className}`}
  />;
}



