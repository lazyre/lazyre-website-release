import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { Metadata } from "next";
import WorkDetails from "./WorkDetails";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const workData = getData("work", params.id) as workDataType;
  if (!workData) return { title: "work Not Found" };

  return {
    title: `${workData.title} | Our work`,
    description: workData.overview.description,
  };
}

export default function workPage({ params }: { params: { id: string } }) {
  const workData = getData("work", params.id) as workDataType;

  if (!workData) {
    notFound();
  }

  return <WorkDetails work={workData} />;
}
