import { ArrowUpRight } from "lucide-react";
import React from "react";

type ArrowButtonProps = {
  buttonText: string;
  arrowColor?: string;
  justifyBetween?: boolean;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  buttonText,
  arrowColor,
  justifyBetween,
}) => {
  return (
    <div
      className={`w-full h-24 flex items-center cursor-pointer ${
        justifyBetween && "justify-between"
      } `}
    >
      <p className="text-text text-2xl font-bold z-20 xl:group-hover:text-3xl transition-all">
        {buttonText}
      </p>
      <div className="ml-6 h-6 overflow-hidden">
        <div className="relative top-0 group-hover:-top-6 transition-[top] delay-150 duration-300">
          <ArrowUpRight
            className={`relative ${
              arrowColor ? arrowColor : "text-text"
            } text-2xl z-20`}
          />
          <ArrowUpRight className="absolute text-text text-2xl z-20" />
        </div>
      </div>
    </div>
  );
};
export default ArrowButton;
