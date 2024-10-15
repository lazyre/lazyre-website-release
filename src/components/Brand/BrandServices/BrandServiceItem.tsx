"use client";

import React, { useState } from "react";
import servicesData from "@/data/ServicesData";
import ServiceImages from "./ServiceImages";
import ServiceFeatures from "./ServiceFeatures";
import ParallaxText from "@/components/ui/animations/ParallaxText";

type BrandServiceItemProps = {
  id: string;
};

const BrandServiceItem: React.FC<BrandServiceItemProps> = ({ id }) => {
  const [expanded, setExpanded] = useState<false | number>(false);
  const serviceDetails = servicesData.find((service) => service.id === id);

  if (!serviceDetails) {
    return null;
  }

  return (
    <article className="mb-24 xl:mb-0">
      <div className="my-24 xl:mb-0">
        <ParallaxText baseVelocity={2} text={serviceDetails.title}>
          <h3 className="font-mono font-bold text-5xl lg:text-6xl xl:text-7xl">
            {serviceDetails.title.toUpperCase()}
          </h3>
        </ParallaxText>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="container flex flex-col xl:flex-row xl:gap-12">
          {serviceDetails.images && (
            <div className="xl:w-1/2">
              <ServiceImages images={serviceDetails.images} />
            </div>
          )}
          <div className="xl:w-1/2">
            <p className="text-xl mt-12 xl:mt-0">
              {serviceDetails.description}
            </p>
            <ul>
              {serviceDetails.serviceList.map((item, index) => (
                <ServiceFeatures
                  key={index}
                  index={index}
                  item={item}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BrandServiceItem;
