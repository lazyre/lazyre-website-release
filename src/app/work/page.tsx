import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { Metadata } from "next";
import AllWork from "./AllWork";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Discover the impactful digital experiences and products created by Lazyre's brands, offering cutting-edge solutions across design and technology for clients worldwide.",
};

export default function workPage() {
  const allWorkData = getData("work") as workDataType[];

  if (!allWorkData) {
    notFound();
  }

  const workData = allWorkData.map((work, index) => {
    return {
      id: work.id,
      title: work.title,
      client: work.client,
      tags: work.tags,
      image: work.image,
    };
  });

  return <AllWork workData={workData} />;
}
