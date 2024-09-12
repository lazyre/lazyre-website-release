import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompanyInfo {
  logo: string;
  name: string;
  description: string;
}

interface PortfolioShowcaseProps {
  headline: string;
  companies: CompanyInfo[];
  buttonText: string;
}

export default function PortfolioShowcase({
  headline,
  companies,
  buttonText,
}: PortfolioShowcaseProps) {
  return (
    <section className=" ">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl">
        {headline}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-12 mb-4 ">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={150}
                height={48}
                objectFit="contain"
                className="filter invert"
              />
            </div>
            <p className="text-sm  text-foreground-muted mt-2">
              {company.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
