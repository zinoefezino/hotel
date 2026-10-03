export const navigation = [
  { label: "Home", href: "/" },
  { label: "Rooms & suites", href: "/rooms" },
  { label: "Experiences", href: "/experiences" },
  { label: "Our story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const photos = {
  hero: "photo-1566073771259-6a8506099945",
  garden: "photo-1618773928121-c32242e63f39",
  ocean: "photo-1582719478250-c89cae4dc85b",
  pool: "photo-1566665797739-1674de7a421a",
  dining: "photo-1414235077428-338989a2e8c0",
  wellness: "photo-1540555700478-4be289fbecef",
  coast: "photo-1507525428034-b723cf961d3e",
};

export const rooms = [
  { id: "garden", name: "Garden Room", tagline: "YOUR OWN LITTLE SANCTUARY", rate: 185, capacity: 2, image: photos.garden, imageAlt: "An airy bedroom with crisp white linens and a generous upholstered bed", details: "32 m² · King bed · Garden terrace", description: "A quiet space for slow mornings. Warm textures, soft bedding, and your own little terrace make it easy to settle in and switch off.", amenities: ["King-size bed", "Private garden terrace", "Walk-in shower", "Air conditioning", "Coffee and tea station", "Complimentary Wi-Fi"] },
  { id: "ocean", name: "Ocean Suite", tagline: "WAKE UP TO THE HORIZON", rate: 285, capacity: 2, image: photos.ocean, imageAlt: "A spacious light-filled hotel suite with white bedding and comfortable seating", details: "54 m² · King bed · Ocean balcony", description: "A little more space, a little more sea. A separate sitting area and an open-air balcony invite you to turn a short escape into a longer stay.", amenities: ["King-size bed", "Ocean-facing balcony", "Separate sitting area", "Deep soaking bath", "Coffee and tea station", "Complimentary Wi-Fi"] },
  { id: "pool", name: "Pool Residence", tagline: "SPACE TO STAY A LITTLE LONGER", rate: 420, capacity: 4, image: photos.pool, imageAlt: "A bright and spacious bedroom with white linens and warm wood finishes", details: "86 m² · Two bedrooms · Private pool", description: "An easy place to gather, with room for everyone to find their own corner. Two bedrooms, shared living space, and a private pool for afternoons that drift into evenings.", amenities: ["Two bedrooms", "Private plunge pool", "Separate living room", "Outdoor lounge", "Two bathrooms", "Complimentary Wi-Fi"] },
] as const;

export type Room = (typeof rooms)[number];

export const experiences = [
  { icon: "dining", title: "Taste the coast", description: "Seasonal plates, local ingredients, long lunches.", image: photos.dining, alt: "An elegantly set restaurant table for an intimate meal", detail: "Fresh flavours and an unhurried table. Start with breakfast, come back for a leisurely lunch, and let dinner become the evening.", note: "Breakfast, lunch & dinner · Seasonal menus" },
  { icon: "wellness", title: "Come back to yourself", description: "Restorative treatments and unhurried pool days.", image: photos.wellness, alt: "Fresh spa towels, a candle, and flowers beside a bottle of lotion", detail: "Make time for the things that help you reset. A quiet swim, a restorative treatment, or simply a comfortable spot beside the water.", note: "Spa & pool · Treatments by appointment" },
  { icon: "beach", title: "Take the scenic route", description: "Coastal walks and little discoveries along the way.", image: photos.coast, alt: "Clear turquoise water washing onto a bright sandy beach", detail: "Follow the shoreline with no particular destination. Discover a favourite stretch of sand, take a swim, or find somewhere to watch the light change.", note: "Coastal walks · Beach days · Local discoveries" },
] as const;

export const formatMoney = (amount: number) => new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0,
}).format(amount);



