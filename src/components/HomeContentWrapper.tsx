import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function HomeContentWrapper({ children }: Props) {
  return (
    <div className="flex justify-center px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0 xl:px-0">
      <div className="container w-full ">{children}</div>
    </div>
  );
}

export default HomeContentWrapper;
