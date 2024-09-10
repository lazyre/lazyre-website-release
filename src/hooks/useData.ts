"use client";
import { useState, useEffect } from "react";
import {
  brandDataType,
  servicesDataType,
  workDataType,
  sectionHeadingDataType,
  blogDataType,
} from "@/types/types";
import brandData from "@/data/BrandData";
import servicesData from "@/data/ServicesData";
import workData from "@/data/WorkData";
import sectionHeadingData from "@/data/SectionHeadingData";
import blogData from "@/data/BlogData";

type DataType = "brand" | "services" | "work" | "sectionHeading" | "blog";

type DataTypeMap = {
  brand: brandDataType;
  services: servicesDataType;
  work: workDataType;
  sectionHeading: sectionHeadingDataType;
  blog: blogDataType;
};

const dataMap: { [K in DataType]: DataTypeMap[K][] } = {
  brand: brandData,
  services: servicesData,
  work: workData,
  sectionHeading: sectionHeadingData,
  blog: blogData,
};

function useData<T extends DataType>(
  type: T,
  id?: string
): {
  data: DataTypeMap[T] | DataTypeMap[T][] | null;
  isLoading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<DataTypeMap[T] | DataTypeMap[T][] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Simulate an API call with a small delay
        await new Promise((resolve) => setTimeout(resolve, 100));

        const result = dataMap[type];

        if (id) {
          const item = result.find((item) => item.id === id);
          if (!item) {
            throw new Error(`Item with id ${id} not found in ${type} data`);
          }
          setData(item);
        } else {
          setData(result);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("An unknown error occurred")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [type, id]);

  return { data, isLoading, error };
}

export default useData;
