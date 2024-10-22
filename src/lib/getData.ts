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

type DataType = "brand" | "services" | "work" | "sectionHeading";

type DataTypeMap = {
  brand: brandDataType;
  services: servicesDataType;
  work: workDataType;
  sectionHeading: sectionHeadingDataType;
};

const dataMap: { [K in DataType]: DataTypeMap[K][] } = {
  brand: brandData,
  services: servicesData,
  work: workData,
  sectionHeading: sectionHeadingData,
};

export function getData<T extends DataType>(
  type: T,
  id?: string
): DataTypeMap[T] | DataTypeMap[T][] {
  const result = dataMap[type];

  if (id) {
    const item = result.find((item) => item.id === id);
    if (!item) {
      throw new Error(`Item with id ${id} not found in ${type} data`);
    }
    return item;
  }

  return result;
}
