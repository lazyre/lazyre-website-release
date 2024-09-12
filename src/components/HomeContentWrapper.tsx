import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  home?: Boolean;
};

function HomeContentWrapper({ children, home }: Props) {
  return (
    <div className="flex justify-center px-6 md:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-0 xl:px-0">
      <div className={cn("container w-full", !home && "xl:py-24 mx-auto")}>
        {children}
      </div>
    </div>
  );
}

export default HomeContentWrapper;
