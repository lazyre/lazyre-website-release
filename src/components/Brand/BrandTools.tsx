import React from "react";
import ParallaxText from "../ui/animations/ParallaxText";

type BrandToolsProps = {
  tools: Array<{ category: string; toolList: string[] }>;
};

const BrandTools: React.FC<BrandToolsProps> = ({ tools }) => {
  return (
    <section className="space-y-6" aria-labelledby="tools-heading">
      <h2 id="tools-heading" className="sr-only">
        Our Tools
      </h2>
      {tools.map((toolCategory) => (
        <ParallaxText
          key={toolCategory.category}
          baseVelocity={2}
          text={`${toolCategory.category} ${toolCategory.toolList.join(" ")}`}
        >
          <div className="flex justify-center items-center mt-6">
            <h3 className="text-4xl bg-primary py-3 px-6 rounded-full">
              {toolCategory.category}
            </h3>
            {toolCategory.toolList.map((tool) => (
              <p key={tool} className="ml-12 text-3xl">
                {tool}
              </p>
            ))}
          </div>
        </ParallaxText>
      ))}
    </section>
  );
};

export default BrandTools;
