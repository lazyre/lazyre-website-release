import { notFound } from "next/navigation";
import { getData } from "@/lib/getData";
import { workDataType } from "@/types/types";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Our work`,
    description: "Our Work Page",
  };
}

export default function workPage() {
  const workData = getData("work") as workDataType[];

  if (!workData) {
    notFound();
  }

  return <></>;
}
