export default function LocationMap() {
  return <section aria-labelledby="location-title" className="bg-sage/50">
    <div className="flex flex-col justify-between gap-5 px-[7%] py-9 sm:px-[6%] md:flex-row md:items-end"><div><h2 id="location-title" className="text-4xl tracking-tight">Find your way to Denver.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted">Denver, Colorado, United States. This map shows the city area, not a confirmed Aurelia hotel address.</p></div><a href="https://www.openstreetmap.org/#map=13/39.7392/-104.9903" target="_blank" rel="noreferrer" className="inline-flex min-h-11 w-fit items-center rounded-sm bg-forest px-5 py-3 text-sm text-white">Open larger map</a></div>
    <iframe title="Interactive map of Denver, Colorado — city area only" src="https://www.openstreetmap.org/export/embed.html?bbox=-105.055%2C39.705%2C-104.925%2C39.775&layer=mapnik" loading="lazy" referrerPolicy="no-referrer" className="h-[360px] w-full border-0 sm:h-[500px]" />
    <p className="px-[7%] py-4 text-xs text-muted sm:px-[6%]">Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="font-medium">OpenStreetMap contributors</a>. If the embedded map cannot load, use the larger-map link above.</p>
  </section>;
}

