import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const gridLayouts = [
  ["", "", "col-span-2"],
  ["row-span-2", "", "col-start-2"],
  ["col-span-2", "row-start-2", "row-start-2"],
  ["", "col-start-1 row-start-2", "row-span-2 col-start-2 row-start-1"],
];

const ServiceImages: React.FC = () => {
  const [classArray, setClassArray] = useState<string[]>(["", "", ""]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gridLayouts.length);
    setClassArray(gridLayouts[randomIndex]);
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 rounded-xl overflow-hidden">
      {classArray.map((className, index) => (
        <div
          key={index}
          className={cn(
            "min-h-[150px] md:min-h-[200px] lg:min-h-[250px] xl:min-h-[300px] w-full",
            className,
            index === 0
              ? "bg-amber-300"
              : index === 1
              ? "bg-rose-300"
              : "bg-fuchsia-400"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default ServiceImages;
