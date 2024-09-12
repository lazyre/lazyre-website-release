interface CompanyIntroProps {
  headline: string;
  subheadline: string;
  description: string[];
  stats: { label: string; value: string; description: string }[];
}

export default function CompanyIntro({
  headline,
  subheadline,
  description,
  stats,
}: CompanyIntroProps) {
  return (
    <section>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl">
        {headline}
      </h1>
      <div className="flex flex-col md:flex-row md:justify-end gap-16">
        <div className="mb-4 md:mb-0 md:w-1/4">
          <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase">
            {subheadline}
          </h2>
        </div>
        <div className="md:w-3/4 space-y-6">
          {description.map((paragraph, index) => (
            <p
              key={index}
              className="text-base sm:text-lg md:text-xl leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="md:w-3/4 flex flex-row justify-between gap-8 md:ml-auto md:pl-12 mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-light mb-2">
              {stat.value}
            </div>
            <div className="text-sm uppercase tracking-wide">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
