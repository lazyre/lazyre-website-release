import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { Metadata } from "next";
import WorkDetails from "./WorkDetails";
import { workerData } from "worker_threads";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const workData = getData("work", params.id) as workDataType;
    return {
      title: `${workData.title} | Our Brand`,
      description: workerData.subDescription,
    };
  } catch (error) {
    return {
      title: "Work Not Found",
    };
  }
}

export default function workPage({ params }: { params: { id: string } }) {
  try {
    const workData = getData("work", params.id) as workDataType;
    return <WorkDetails work={workData} />;
  } catch (error) {
    notFound();
  }
}
