import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function HomeContentWrapper({ children }: Props) {
  return (
    <div className="px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0">
      <div className="max-w-[100rem] ">{children}</div>
    </div>
  );
}

export default HomeContentWrapper;
