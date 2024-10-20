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
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-3xl">
        {headline}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {companies.map((company, index) => (
          <div key={index} className="flex flex-col">
            <div className="h-8 mb-4 relative w-full">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={32}
                style={{ objectFit: "contain", objectPosition: "left" }}
                className="filter invert opacity-50"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {company.description}
            </p>
          </div>
        ))}
      </div>
      {/* <Button variant="outline" className="group">
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button> */}
    </section>
  );
}
