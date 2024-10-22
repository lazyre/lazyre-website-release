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
      title: `${workData.title} | Our Work`,
      description: workData.overview.excerpt,

      openGraph: {
        siteName: "Lazyre - Software Development & Digital Solutions",
        locale: "en_US",
        type: "website",
        title: `${workData.title} | Our Work | Lazyre`,
        description: workData.overview.excerpt,
        url: `https://lazyre.com/work/${workData.id}`,
        images: [
          {
            url: workData.coverImage,
            width: 1200,
            height: 630,
            alt: `${workData.title} by Lazyre`,
            type: "image/webp",
            secureUrl: workData.coverImage,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        site: "@lazyrehub",
        creator: "@lazyrehub",
        title: `${workData.title} | Our Work | Lazyre`,
        description: workData.overview.excerpt,
        images: [
          {
            url: workData.coverImage,
            alt: `${workData.title} by Lazyre`,
            width: 800,
            height: 418,
          },
        ],
      },
      keywords: workData.keywords,
    };
  } catch (error) {
    return {
      title: "Work Not Found",
      description: "Sorry, the project you are looking for could not be found.",
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
