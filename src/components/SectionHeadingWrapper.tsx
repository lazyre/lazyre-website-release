import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function SectionHeadingWrapper({ children }: Props) {
  return (
    <div className="flex justify-center items-center align-middle px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:min-h-[50vh]">
      <div className="max-w-[100rem] ">{children}</div>
    </div>
  );
}

export default SectionHeadingWrapper;
