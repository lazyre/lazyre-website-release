export interface brandDataType {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  subHeading: string;
  subDescription: string;
  coverImage: string;
  toolsHeading: string;
  toolsDescription: string;
  tools: Array<{ category: string; toolList: Array<string> }>;
  services: Array<{ id: string; name: string }>;
  lightAccentColor: string;
  darkAccentColor: string;
  workHeading: string;
  workDescription: string;
  relatedWork: Array<string>;
}

export interface servicesDataType {
  id: string;
  title: string;
  images: Array<string>;
  description: string;
  serviceList: Array<string>;
}

export interface workDataType {
  id: string;
  title: string;
  client: string;
  tags: Array<string>;
  image: string;
  coverImage: string;
  lightAccentColor: string;
  darkAccentColor: string;
  overview: { heading: string; description: string; links: Array<string> };
  section: Array<{
    type: string;
    name: string;
    sectionDetails: {
      title: string;
      subtitle: string;
      images?: Array<{
        imageSrc: string;
        description?: string;
        fit?: "cover" | "contain";
        bgColor?: string;
        paddingValue?: string;
      }>;
      video?: { videoSrc: string; autoplay: boolean };
    };
  }>;
  testimonial: {
    author: string;
    content: string;
    designation?: string;
    link?: string;
  };
  nextWorkId: string;
}

export interface sectionHeadingDataType {
  id: string;
  title: string;
  titleHighlight?: number;
  subtitle: string;
}

export interface blogDataType {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}
