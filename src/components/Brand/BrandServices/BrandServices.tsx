import React from "react";
import BrandServiceItem from "./BrandServiceItem";

type BrandServicesProps = {
  services: Array<{
    id: string;
    name: string;
  }>;
};

const BrandServices: React.FC<BrandServicesProps> = ({ services }) => {
  return (
    <section aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Our Services
      </h2>
      {services.map((service) => (
        <BrandServiceItem key={service.id} id={service.id} />
      ))}
    </section>
  );
};

export default BrandServices;
