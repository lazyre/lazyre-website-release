interface FeatureItem {
  number: string;
  title?: string;
  description: string;
}

interface FeatureListProps {
  features: FeatureItem[];
}

export default function FeatureList({ features }: FeatureListProps) {
  return (
    <section>
      {features.map((feature, index) => (
        <div
          key={index}
          className="mb-12 last:mb-0 border-t border-foreground pt-12 first:pt-0 first:border-t-0"
        >
          <div className="flex flex-col md:flex-row md:justify-end gap-16">
            <div className="mb-4 md:mb-0 md:w-1/4">
              <h2 className="text-xl font-bold ">{feature.number}</h2>
              <h3 className="text-base sm:text-lg md:text-xl font-bold uppercase">
                {feature.title}
              </h3>
            </div>
            <div className="md:w-3/4 ">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
