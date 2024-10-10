interface OverviewGridProps {
  title: string;
  heading: string;
  description1: string;
  description2: string;
}

export default function OverviewGrid({
  title,
  heading,
  description1,
  description2,
}: OverviewGridProps) {
  return (
    <section className="m-6 xl:m-0">
      <h2 className="text-sm font-semibold uppercase tracking-wider mb-6">
        {title}
      </h2>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl">
        {heading}
      </h1>
      <div className="grid md:grid-cols-2 gap-8 text-base sm:text-lg md:text-xl leading-relaxed">
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
    </section>
  );
}
