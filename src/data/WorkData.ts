import { workDataType } from "@/types/types";

const workData: workDataType[] = [
  {
    id: "work1",
    title: "ABC Website",
    client: "ABC Company",
    tags: ["Web Development", "Responsive Design", "E-commerce"],
    image: "/images/brand/build.jpg",
    coverImage: "/images/brand/build.jpg",
    lightAccentColor: "#FFFFFF",
    darkAccentColor: "#000000",
    overview: {
      heading: "Website for ABC Company",
      description:
        "A modern and user-friendly website designed to showcase ABC Company's products and services.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Welcome to ABC Website",
          subtitle: "Explore our products and services",
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
        },
      },
      {
        type: "CARASOUEL",
        name: "Featured Products",
        sectionDetails: {
          title: "Featured Products",
          subtitle: "Check out our top offerings",
          images: [
            {
              imageSrc: "/images/work/work-device-portrait.png",
              fit: "contain",
              bgColor: "pink",
              paddingValue: "20px",
            },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
            { imageSrc: "/images/brand/build.jpg" },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
          ],
        },
      },
      {
        type: "INFOPANE",
        name: "Security Measures",
        sectionDetails: {
          title: "Comprehensive Protection",
          subtitle: "Explore our security features",
          images: [{ imageSrc: "/images/brand/web.jpg" }],
        },
      },
      {
        type: "FULLCARASOUEL",
        name: "Featured Products",
        sectionDetails: {
          title: "Featured Products",
          subtitle: "Check out our top offerings",
          images: [
            {
              imageSrc: "/images/work/work-test.png",
              fit: "contain",
              bgColor: "pink",
              paddingValue: "20px",
            },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
            { imageSrc: "/images/brand/build.jpg" },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
          ],
        },
      },
      {
        type: "IMAGEGRID",
        name: "Featured Products",
        sectionDetails: {
          title: "Featured Products",
          subtitle: "Check out our top offerings",
          images: [
            { imageSrc: "/images/brand/build.jpg" },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
            { imageSrc: "/images/brand/build.jpg" },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
          ],
        },
      },
      {
        type: "VIDEOSHOWCASE",
        name: "Security Overview",
        sectionDetails: {
          title: "Securing Your Digital Future",
          subtitle: "Watch our security overview video",
          video: {
            videoSrc: "/videos/Lazyre_Final_Logo_Pc_Final_abyie3.mp4",
            autoplay: true,
          },
        },
      },
    ],
    testimonial: {
      author: "John Doe",
      content:
        "Working with the team was a fantastic experience. They delivered an outstanding website that exceeded our expectations.",
      designation: "CEO, ABC Company",
      link: "https://example.com/testimonial",
    },
    nextWorkId: "work2",
  },
  {
    id: "work2",
    title: "Client Website",
    client: "XYZ Corporation",
    tags: ["Web Design", "User Experience", "Content Management"],
    image: "/images/brand/tech.jpg",
    coverImage: "/images/brand/tech.jpg",
    lightAccentColor: "#FFC107",
    darkAccentColor: "#263238",
    overview: {
      heading: "Website for XYZ Corporation",
      description:
        "A visually stunning and intuitive website designed to represent XYZ Corporation's brand and offerings.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Welcome to XYZ Corporation's Website",
          subtitle: "Discover the essence of our brand",
        },
      },
      {
        type: "COVERIMAGE",
        name: "Brand Image",
        sectionDetails: {
          title: "Striking Brand Image",
          subtitle: "Representing XYZ Corporation",
        },
      },
      {
        type: "INFOPANE",
        name: "Website Showcase",
        sectionDetails: {
          title: "Website Showcase",
          subtitle: "Explore the design and functionality",
          images: [{ imageSrc: "/images/brand/tech.jpg" }],
        },
      },
    ],
    testimonial: {
      author: "Jane Smith",
      content:
        "The team at XYZ Corporation delivered an exceptional website that perfectly captures our brand essence. It has greatly enhanced our online presence.",
      designation: "Marketing Director, XYZ Corporation",
      link: "https://example.com/testimonial2",
    },
    nextWorkId: "work3",
  },
  {
    id: "work3",
    title: "Client Branding",
    client: "PQR Enterprises",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity"],
    image: "/images/brand/mechatronics.jpg",
    coverImage: "/images/brand/mechatronics.jpg",
    lightAccentColor: "#4CAF50",
    darkAccentColor: "#263238",
    overview: {
      heading: "Branding for PQR Enterprises",
      description:
        "A comprehensive brand identity that reflects the essence of PQR Enterprises and communicates its unique value proposition.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Discover PQR Enterprises",
          subtitle: "Unveiling our unique identity",
        },
      },
      {
        type: "COVERIMAGE",
        name: "Brand Identity",
        sectionDetails: {
          title: "Comprehensive Brand Identity",
          subtitle: "Reflecting our values",
        },
      },
      {
        type: "VIDEOSHOWCASE",
        name: "Brand Video",
        sectionDetails: {
          title: "Brand Showcase Video",
          subtitle: "Watch the story behind our brand",
          video: {
            videoSrc: "/videos/Lazyre_Final_Logo_Pc_Final_abyie3.mp4",
            autoplay: false,
          },
        },
      },
    ],
    testimonial: {
      author: "Alex Johnson",
      content:
        "The branding work delivered by your team was exceptional. Our brand now has a strong identity that resonates with our target audience.",
      designation: "CEO, PQR Enterprises",
      link: "https://example.com/testimonial3",
    },
    nextWorkId: "work4",
  },
  {
    id: "work4",
    title: "Client Social Media Marketing",
    client: "LMN Company",
    tags: ["Social Media Strategy", "Content Creation", "Campaign Management"],
    image: "/images/brand/design.jpg",
    coverImage: "/images/brand/design.jpg",
    lightAccentColor: "#2196F3",
    darkAccentColor: "#FFFFFF",
    overview: {
      heading: "Social Media Marketing for LMN Company",
      description:
        "An effective social media marketing strategy to enhance LMN Company's online presence, engage the target audience, and drive business growth.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Unlock the Power of Social Media",
          subtitle: "Our strategy for LMN Company",
        },
      },
      {
        type: "INFOPANE",
        name: "Social Media Campaign",
        sectionDetails: {
          title: "Engaging Campaign",
          subtitle: "See the impact of our social media efforts",
          images: [{ imageSrc: "/images/brand/design.jpg" }],
        },
      },
      {
        type: "VIDEOSHOWCASE",
        name: "Success Story Video",
        sectionDetails: {
          title: "Success in Action",
          subtitle: "Watch how we achieved results",
          video: {
            videoSrc: "/videos/Lazyre_Final_Logo_Pc_Final_abyie3.mp4",
            autoplay: true,
          },
        },
      },
    ],
    testimonial: {
      author: "Sarah Thompson",
      content:
        "The social media marketing work by your team has significantly boosted our online presence and engagement. We're seeing tangible results in terms of increased brand awareness and customer interaction.",
      designation: "Marketing Manager, LMN Company",
      link: "https://example.com/testimonial4",
    },
    nextWorkId: "work5",
  },
  {
    id: "work5",
    title: "Nature Photography",
    client: "Nature Explorers",
    tags: ["Photography", "Nature", "Landscape"],
    image: "/images/brand/lab.jpg",
    coverImage: "/images/brand/lab.jpg",
    lightAccentColor: "#8BC34A",
    darkAccentColor: "#263238",
    overview: {
      heading: "Capturing the Wonders of Nature",
      description:
        "A collection of breathtaking nature photographs showcasing the beauty and diversity of our natural world.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Journey into Nature's Beauty",
          subtitle: "Explore our photography collection",
        },
      },
      {
        type: "INFOPANE",
        name: "Nature Photography Collection",
        sectionDetails: {
          title: "Breathtaking Moments",
          subtitle: "A glimpse into the beauty of nature",
          images: [{ imageSrc: "/images/brand/lab.jpg" }],
        },
      },
      {
        type: "VIDEOSHOWCASE",
        name: "Behind the Lens",
        sectionDetails: {
          title: "Behind the Scenes",
          subtitle: "Discover the stories behind the photographs",
          video: {
            videoSrc: "/videos/Lazyre_Final_Logo_Pc_Final_abyie3.mp4",
            autoplay: true,
          },
        },
      },
    ],
    testimonial: {
      author: "John Roberts",
      content:
        "The nature photography by your team is truly remarkable. Each photograph tells a story and transports me to the breathtaking beauty of the natural world.",
      designation: "Nature Enthusiast",
      link: "https://example.com/testimonial5",
    },
    nextWorkId: "work6",
  },
  {
    id: "work6",
    title: "Ecommerce Website Development",
    client: "XYZ Store",
    tags: ["Ecommerce", "Online Retail", "Web Development"],
    image: "/images/brand/studio.jpg",
    coverImage: "/images/brand/studio.jpg",
    lightAccentColor: "#FF9800",
    darkAccentColor: "#263238",
    overview: {
      heading: "Online Shopping Made Easy",
      description:
        "An intuitive and user-friendly ecommerce website that offers a seamless shopping experience for customers of XYZ Store.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Welcome to XYZ Store",
          subtitle: "Discover a new way to shop online",
        },
      },
      {
        type: "INFOPANE",
        name: "Ecommerce Showcase",
        sectionDetails: {
          title: "Seamless Shopping Experience",
          subtitle: "Explore our user-friendly website",
          images: [{ imageSrc: "/images/brand/studio.jpg" }],
        },
      },
      {
        type: "VIDEOSHOWCASE",
        name: "Shopping Guide",
        sectionDetails: {
          title: "Navigate with Ease",
          subtitle: "Watch our guide for a smooth shopping experience",
          video: {
            videoSrc: "/videos/Lazyre_Final_Logo_Pc_Final_abyie3.mp4",
            autoplay: true,
          },
        },
      },
    ],
    testimonial: {
      author: "Emily Johnson",
      content:
        "The ecommerce website developed by your team has greatly enhanced our online presence and boosted sales. Our customers find it easy to navigate and make purchases, resulting in a seamless shopping experience.",
      designation: "CEO, XYZ Store",
      link: "https://example.com/testimonial6",
    },
    nextWorkId: "work7",
  },
  {
    id: "work7",
    title: "Network Security Solutions",
    client: "ABC Corporation",
    tags: ["Network Security", "Cybersecurity", "Risk Assessment"],
    image: "/images/brand/web.jpg",
    coverImage: "/images/brand/web.jpg",
    lightAccentColor: "#607D8B",
    darkAccentColor: "#FFFFFF",
    overview: {
      heading: "Protecting Your Network",
      description:
        "Comprehensive network security solutions that safeguard ABC Corporation's digital assets and ensure data confidentiality, integrity, and availability.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Ensuring Digital Security",
          subtitle: "Discover our network security solutions",
        },
      },
      {
        type: "INFOPANE",
        name: "Security Measures",
        sectionDetails: {
          title: "Comprehensive Protection",
          subtitle: "Explore our security features",
          images: [{ imageSrc: "/images/brand/web.jpg" }],
        },
      },
      {
        type: "VIDEOSHOWCASE",
        name: "Security Overview",
        sectionDetails: {
          title: "Securing Your Digital Future",
          subtitle: "Watch our security overview video",
          video: {
            videoSrc: "/videos/Lazyre_Final_Logo_Pc_Final_abyie3.mp4",
            autoplay: false,
          },
        },
      },
    ],
    testimonial: {
      author: "Mark Davis",
      content:
        "The network security solutions provided by your team have been instrumental in safeguarding our digital assets. We now have peace of mind knowing that our network is protected against potential threats and vulnerabilities.",
      designation: "CTO, ABC Corporation",
      link: "https://example.com/testimonial7",
    },
    nextWorkId: "work8",
  },
  {
    id: "work8",
    title: "UI/UX Design for Mobile App",
    client: "Mobile Solutions Ltd.",
    tags: ["UI Design", "UX Design", "Mobile App"],
    image: "/images/brand/digitalytics.jpg",
    coverImage: "/images/brand/digitalytics.jpg",
    lightAccentColor: "#03A9F4",
    darkAccentColor: "#FFFFFF",
    overview: {
      heading: "Enhancing User Experience",
      description:
        "Intuitive and visually appealing UI/UX design for Mobile Solutions Ltd.'s mobile app, ensuring a seamless and engaging user experience.",
      links: ["https://example.com", "https://example.com/portfolio"],
    },
    section: [
      {
        type: "HEADING",
        name: "Introduction",
        sectionDetails: {
          title: "Welcome to ABC Website",
          subtitle: "Explore our products and services",
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
        },
      },
      {
        type: "CARASOUEL",
        name: "Featured Products",
        sectionDetails: {
          title: "Featured Products",
          subtitle: "Check out our top offerings",
          images: [
            { imageSrc: "/images/brand/build.jpg" },
            { imageSrc: "/images/brand/tech.jpg" },
            { imageSrc: "/images/brand/studio.jpg" },
          ],
        },
      },
    ],
    testimonial: {
      author: "Jessica Carter",
      content:
        "The UI/UX design for our mobile app by your team has greatly enhanced the overall user experience. Our users find the app visually appealing, easy to navigate, and enjoyable to use. It has resulted in increased user engagement and positive feedback.",
      designation: "Product Manager, Mobile Solutions Ltd.",
      link: "https://example.com/testimonial8",
    },
    nextWorkId: "work1",
  },
];

export default workData;
