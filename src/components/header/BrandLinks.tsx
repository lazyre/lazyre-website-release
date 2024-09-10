"use client";
import useData from "@/hooks/useData";
import { brandDataType } from "@/types/types";
import React from "react";
import TransitionLink from "../TransitionLink";
import { Loader } from "lucide-react";
import AppearOpacity from "../ui/animations/AppearOpacity";

type Props = {};

const BrandLinks = (props: Props) => {
  const { data: brandData, isLoading, error } = useData("brand");
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="w-8 h-8" />
      </div>
    );
  }

  if (error) {
    return <></>;
  }

  if (!brandData) {
    return <></>;
  }
  const brandItems = (brandData as brandDataType[]).map((brand) => ({
    href: `brand/${brand.id}`,
    label: brand.title,
  }));
  return (
    <ul className="space-y-2 flex-grow overflow-y-auto">
      {brandItems.map(({ href, label }) => (
        <AppearOpacity key={label} fromDirection="left">
          <li>
            <TransitionLink href={href} className="hover:underline">
              <span className="text-xl lg:3xl">{label}</span>
            </TransitionLink>
          </li>
        </AppearOpacity>
      ))}
    </ul>
  );
};

export default BrandLinks;
