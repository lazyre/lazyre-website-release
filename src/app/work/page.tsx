import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { Metadata } from "next";
import AllWork from "./AllWork";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Our works`,
    description: "Our Work Page",
  };
}

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
