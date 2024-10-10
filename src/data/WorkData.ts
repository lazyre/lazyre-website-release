import { workDataType } from "@/types/types";

const workData: workDataType[] = [
  // {
  //   id: "safe-shift",
  //   title: "Safe Shift",
  //   client: "Æon Enterprises",

  //   tags: ["Web Development", "Responsive Design", "E-commerce"],
  //   image: "/images/work/safe-shift/cover.png",
  //   coverImage: "/images/work/safe-shift/cover2.png",
  //   lightAccentColor: "#FFFFFF",
  //   darkAccentColor: "#000000",
  //   overview: {
  //     heading: "Website for ABC Company",
  //     description:
  //       "A modern and user-friendly website designed to showcase ABC Company's products and services.",
  //     links: ["https://example.com", "https://example.com/portfolio"],
  //   },
  //   section: [
  //     {
  //       type: "HEADING",
  //       name: "Introduction",
  //       sectionDetails: {
  //         title: "Overview",
  //         subtitle:
  //           "Æon Enterprises Group, a leading irish based manufacturer with over 500 factory workers, faced unprecedented challenges during the COVID-19 pandemic. As lockdowns disrupted industrial operations, they needed an urgent solution to monitor the health of their workforce and maintain production continuity. Meridian partnered with Lazyre Tech to develop an internal COVID-19 Tracking App that ensured real-time safety monitoring across all their factory locations. The app combined health tracking, AI-driven self-diagnosis, and a digital access system to safeguard workers while ensuring compliance with evolving government regulations. ",
  //       },
  //     },
  //     {
  //       type: "COVERIMAGE",
  //       name: "Cover Image",
  //       sectionDetails: {
  //         title: "Stunning Cover Image",
  //         subtitle: "Discover the beauty of our website",
  //       },
  //     },
  //     {
  //       type: "FEATURES",
  //       name: "Key Features",
  //       sectionDetails: {
  //         title: "Key Features",
  //         subtitle: "Check out our top offerings",
  //         features: [
  //           {
  //             title: "Real-Time Health Monitoring ",

  //             description:
  //               "SafeShift enabled daily health check-ins for workers, tracking symptoms and temperature data across all factory sites. This real-time monitoring system provided crucial insights that helped prevent COVID-19 outbreaks and ensured smooth factory operations. ",
  //           },
  //           {
  //             title: "AI-Powered Self-Diagnosis & Incident Reporting ",
  //             description:
  //               "The app featured a self-diagnosis tool built with Python, empowering workers to report symptoms and receive instant advice on whether they could attend work or seek medical care. It also included a feature for incident reporting, allowing rapid response to potential COVID-19 exposure. ",
  //           },
  //           {
  //             title: "Digital Access Pass System ",
  //             description:
  //               "Only employees who passed the daily health checks received a digital access pass, allowing safe entry into the factories. This feature significantly reduced the risk of COVID transmission, as symptomatic employees were denied access and instructed to self-isolate. ",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       type: "CAROUSEL",
  //       name: "Featured Products",
  //       sectionDetails: {
  //         title: "Featured Products",
  //         subtitle: "Check out our top offerings",
  //         images: [
  //           {
  //             imageSrc: "/images/work/safe-shift/4.png",
  //             fit: "contain",
  //             bgColor: "#FFD1A9",
  //             paddingValue: "20px",
  //           },
  //           {
  //             imageSrc: "/images/work/safe-shift/3.png",
  //             fit: "contain",
  //             bgColor: "#D3C3F3",
  //             paddingValue: "20px",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       type: "INFOPANE",
  //       name: "Security Measures",
  //       sectionDetails: {
  //         title: "Comprehensive Protection",
  //         subtitle: "Explore our security features",
  //         images: [{ imageSrc: "/images/work/safe-shift/pass.png" }],
  //       },
  //     },
  //     {
  //       type: "OVERVIEWGRID",
  //       name: "Grid Test",
  //       sectionDetails: {
  //         title: "Comprehensive Protection",
  //         subtitle: "Explore our security features",
  //         description: [
  //           "After the success that was Disney Upfront 2022 for both Disney and Raxo, we had the joy of collaborating again with the company for its Disney Upfront 2023 event, a gala that showcases and celebrates the many brands, shows, movies, characters and IPs that live under the vast, magical Disney umbrella.",
  //           "The goal of the Upfront is to celebrate Disney's distinctive, innovative approach to dynamic storytelling backed by technology. For this purpose, they were missing the visual compass and identity for the event, which included branding and brand guidelines, logo and key visuals, such as backgrounds, transitions and video assets.",
  //         ],
  //       },
  //     },
  //     {
  //       type: "FULLCAROUSEL",
  //       name: "Featured Products",
  //       sectionDetails: {
  //         title: "Featured Products",
  //         subtitle: "Check out our top offerings",
  //         images: [
  //           {
  //             imageSrc: "/images/brand/lazyre_build_cover.webp",
  //             fit: "contain",
  //             bgColor: "pink",
  //             paddingValue: "20px",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //           {
  //             imageSrc: "/images/brand/lazyre_tech_cover.webp",
  //           },
  //         ],
  //       },
  //     },
  //     {
  //       type: "IMAGEGRID",
  //       name: "Featured Products",
  //       sectionDetails: {
  //         title: "Featured Products",
  //         subtitle: "Check out our top offerings",
  //         images: [
  //           { imageSrc: "/images/brand/lazyre_lab_cover.webp" },
  //           { imageSrc: "/images/brand/lazyre_lab_cover.webp" },
  //           { imageSrc: "/images/brand/lazyre_lab_cover.webp" },
  //           { imageSrc: "/images/brand/lazyre_lab_cover.webp" },
  //           { imageSrc: "/images/brand/lazyre_lab_cover.webp" },
  //           { imageSrc: "/images/brand/lazyre_lab_cover.webp" },
  //         ],
  //       },
  //     },
  //     {
  //       type: "VIDEOSHOWCASE",
  //       name: "Security Overview",
  //       sectionDetails: {
  //         title: "Securing Your Digital Future",
  //         subtitle: "Watch our security overview video",
  //         video: {
  //           videoSrc: "/videos/logo/lazyre_logo_cubic.mp4",
  //           autoplay: true,
  //         },
  //       },
  //     },
  //   ],
  //   testimonial: {
  //     author: "John Doe",
  //     content:
  //       "Working with the team was a fantastic experience. They delivered an outstanding website that exceeded our expectations.",
  //     designation: "CEO, ABC Company",
  //     link: "https://example.com/testimonial",
  //   },
  //   nextWorkId: "work2",
  // },
  {
    id: "safe-shift",
    title: "Safe Shift",
    client: "Æon Enterprises",

    tags: ["Web Development", "Responsive Design", "E-commerce"],
    image: "/images/work/safe-shift/cover.png",
    coverImage: "/images/work/safe-shift/cover2.png",
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
          title: "Overview",
          subtitle:
            "In 2020, during the height of the global pandemic, Æon Enterprises Group, a mid-sized manufacturer based in the UK, turned to us for a critical solution: a COVID-19 tracker to safeguard their workforce of over 500 factory workers. Faced with the challenge of maintaining employee health and ensuring operational continuity in a high-risk environment, we developed a comprehensive system that addressed these urgent needs. Our COVID-19 tracker featured real-time health monitoring, AI-powered self-diagnosis tools, and an intuitive digital access pass system to efficiently regulate factory entry. This robust solution not only protected the health of the workforce but also enabled Æon Enterprises Group to maintain uninterrupted production during a crucial time.",
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
        type: "FEATURES",
        name: "Key Features",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Real-Time Health Monitoring ",

              description:
                "SafeShift enabled daily health check-ins for workers, tracking symptoms and temperature data across all factory sites. This real-time monitoring system provided crucial insights that helped prevent COVID-19 outbreaks and ensured smooth factory operations. ",
            },
            {
              title: "AI-Powered Self-Diagnosis & Incident Reporting ",
              description:
                "The app featured a self-diagnosis tool built with Python, empowering workers to report symptoms and receive instant advice on whether they could attend work or seek medical care. It also included a feature for incident reporting, allowing rapid response to potential COVID-19 exposure. ",
            },
            {
              title: "Digital Access Pass System ",
              description:
                "Only employees who passed the daily health checks received a digital access pass, allowing safe entry into the factories. This feature significantly reduced the risk of COVID transmission, as symptomatic employees were denied access and instructed to self-isolate. ",
            },
          ],
        },
      },
      {
        type: "CAROUSEL",
        name: "How Are You Feeling Today?",
        sectionDetails: {
          title: "How Are You Feeling Today?",
          subtitle:
            "Our AI-powered self-diagnosis feature used an interactive approach to assess workers' health through a How Are You Feeling Today? section. A carousel of well crafted and animated emotions allowed employees to report their well-being in a simple, fun, intuitive manner.",
          images: [
            {
              imageSrc: "/images/work/safe-shift/emotions/1.png",
              fit: "contain",
              bgColor: "#FFD1A9",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/safe-shift/emotions/2.png",
              fit: "contain",
              bgColor: "#D3C3F3",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/safe-shift/emotions/3.png",
              fit: "contain",
              bgColor: "#F7A59F",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/safe-shift/emotions/4.png",
              fit: "contain",
              bgColor: "#B1D1E8",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/safe-shift/emotions/5.png",
              fit: "contain",
              bgColor: "#C8D5B9",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/safe-shift/emotions/6.png",
              fit: "contain",
              bgColor: "#A8C6D9",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/safe-shift/emotions/7.png",
              fit: "contain",
              bgColor: "#F4A5A5",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "SHOWCASE",
        name: "showcase",
        sectionDetails: {
          title: "Comprehensive Protection",
          subtitle: "Explore our security features",
          showcase: [
            {
              imageSrc:
                "/images/work/safe-shift/safe-shift-body-temperature.png",
              altText: "Temperature Input",
              fit: "contain",
              bgColor: "#E80054",
              paddingValue: "20px",
              description:
                "Employees could select their body temperature using a slider interface.",
              isSquare: false,
            },
            {
              imageSrc: "/images/work/safe-shift/safe-shift-sleep-level.png",
              altText: "Sleep Level Rating",
              fit: "contain",
              bgColor: "#313159",
              paddingValue: "20px",
              description:
                "Workers rated their sleep quality on a scale of 1 to 5, giving managers insights into fatigue levels.",
              isSquare: false,
            },
            {
              imageSrc: "/images/work/safe-shift/safe-shift-health-vitals.png",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#228B22",
              paddingValue: "20px",
              description:
                "If symptoms were present, users could report specific details, including comments, helping management better assess the situation.",
              isSquare: false,
            },
          ],
        },
      },
      {
        type: "INFOPANE",
        name: "Initial Digital Pass System",
        sectionDetails: {
          title: "Initial Digital Pass System",
          subtitle:
            "The digital access pass system was designed with versatility to cater to the diverse needs of employees, allowing them to request passes for various factory zones based on their health status and operational requirements. It included two types of passes: the Day Pass, which provided standard access to the general factory areas, and the Custom Pass, a specialized permit for high-security or restricted zones, granted according to job roles and individual health assessments. This innovative system played a crucial role in maintaining production safety by ensuring that workers could only enter designated areas after successfully passing a health check, thereby enhancing the overall safety and efficiency of factory operations.",
          sectionImage: { imageSrc: "/images/work/safe-shift/pass.png" },
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc: "/images/work/safe-shift/vaccination-cover.png",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        name: "Vaccine Integration",
        sectionDetails: {
          title: "Seamless Vaccine Verification for a Safer Workplace",
          subtitle: "Vaccine Integration: A Crucial Step Forward",
          description: [
            "As COVID-19 vaccines became available in 2021, Æon Enterprises needed a solution to monitor their workforce’s vaccination status and ensure ongoing health safety. Lazyre integrated a Vaccine Verification System within the existing COVID-19 tracker, allowing employees to securely upload vaccination certificates and schedule doses. This system automated vaccine reminders, ensuring that employees were alerted to receive their second doses. With real-time updates, management could track vaccination progress, helping the company align with government mandates while keeping the factory operational.",
            "Handling sensitive health data required careful adherence to privacy regulations, especially GDPR. The vaccine integration was built with advanced encryption methods to protect employee data from unauthorized access. Only authorized personnel could view vaccination statuses, and any changes to personal health information were securely logged. This emphasis on security, coupled with features like automated certificate validation and seamless updates, gave Æon Enterprises the assurance of meeting compliance requirements, while maintaining the health and safety of their workforce in the face of evolving pandemic challenges.",
          ],
        },
      },
      {
        type: "HEADING",
        name: "Moving Forward",
        sectionDetails: {
          largeHeading: true,
          title: "2024: Transitioning to a Digital Pass Application",
          subtitle:
            "As the pandemic subsided in 2024, Æon Enterprises Group sought to repurpose the COVID-19 tracker into a comprehensive Digital Pass System to meet their evolving operational needs. We are gradually updating the app to include:",
        },
      },
      {
        type: "FEATURES",
        name: "Key Features",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              number: "01",
              title: "Zone-Based Access Control",

              description:
                "Users can request passes for specific factory regions based on their roles, departments, and operational requirements.",
            },
            {
              number: "02",
              title: "Enhanced Security Protocols",
              description:
                "The app will include biometric authentication and RFID-based scanning for entry and exit, enhancing workplace security.",
            },
            {
              number: "03",
              title: "Analytics & Reporting",
              description:
                "A comprehensive dashboard will provide insights into workforce movement, productivity, and health patterns, allowing management to make informed decisions.",
            },
            {
              number: "04",
              title: "Integration with HR Systems",
              description:
                "The app will syncs with the company’s HR tools for shift scheduling, attendance tracking, and leave management.",
            },
          ],
        },
      },
    ],
    testimonial: {
      author: "Mark Edwards",
      content:
        "Working with Lazyre has been transformative for Æon Enterprises. What started as an urgent solution to manage COVID-19 risks has evolved into a state-of-the-art digital pass system. The team's ability to adapt the app to our growing needs has been exceptional. From ensuring our workers' safety during the pandemic to now providing streamlined access control, Lazyre's expertise has been invaluable to our operational continuity.",
      designation: " Head of Operations, Æon Enterprises Group",
      link: "https://example.com/testimonial",
    },
    nextWorkId: "bloeiende-werelden",
  },
  {
    id: "bloeiende-werelden",
    title: "Bloeiende Werelden Ecommerce & Branding",
    client: "Bloeiende Werelden",
    tags: ["Web Design", "User Experience", "Content Management"],
    image: "/images/work/bloeiende-werelden/cover2.png",
    coverImage: "/images/work/bloeiende-werelden/cover.png",
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
          title: "Overview",
          subtitle:
            "In early 2023, Bloeiende Werelden, a vibrant florist from the Netherlands, turned to Lazyre Design to develop a cutting-edge e-commerce platform that would highlight their beautiful floral arrangements while enhancing their brand identity. Our mission was to create a visually captivating and intuitive website that provided a seamless shopping experience for customers looking for flowers, bouquets, and gift combinations. By focusing on design aesthetics and user experience, we successfully crafted an online presence that not only showcased their offerings but also engaged customers, making floral shopping a delightful experience.",
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
        type: "FEATURES",
        name: "Key Features",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Real-Time Health Monitoring ",

              description:
                "SafeShift enabled daily health check-ins for workers, tracking symptoms and temperature data across all factory sites. This real-time monitoring system provided crucial insights that helped prevent COVID-19 outbreaks and ensured smooth factory operations. ",
            },
            {
              title: "AI-Powered Self-Diagnosis & Incident Reporting ",
              description:
                "The app featured a self-diagnosis tool built with Python, empowering workers to report symptoms and receive instant advice on whether they could attend work or seek medical care. It also included a feature for incident reporting, allowing rapid response to potential COVID-19 exposure. ",
            },
            {
              title: "Digital Access Pass System ",
              description:
                "Only employees who passed the daily health checks received a digital access pass, allowing safe entry into the factories. This feature significantly reduced the risk of COVID transmission, as symptomatic employees were denied access and instructed to self-isolate. ",
            },
          ],
        },
      },
      {
        type: "CAROUSEL",
        name: "How Are You Feeling Today?",
        sectionDetails: {
          title: "How Are You Feeling Today?",
          subtitle:
            "Our AI-powered self-diagnosis feature used an interactive approach to assess workers' health through a How Are You Feeling Today? section. A carousel of well crafted and animated emotions allowed employees to report their well-being in a simple, fun, intuitive manner.",
          images: [
            {
              imageSrc: "/images/work/bloeiende-werelden/1.png",
              fit: "contain",
              bgColor: "#FFD1A9",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/bloeiende-werelden/2.png",
              fit: "contain",
              bgColor: "#D3C3F3",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/bloeiende-werelden/3.png",
              fit: "contain",
              bgColor: "#FFD1A9",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/bloeiende-werelden/4.png",
              fit: "contain",
              bgColor: "#D3C3F3",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc: "/images/work/bloeiende-werelden/web.png",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        name: "Vaccine Integration",
        sectionDetails: {
          title: "Seamless Vaccine Verification for a Safer Workplace",
          subtitle: "Vaccine Integration: A Crucial Step Forward",
          description: [
            "As COVID-19 vaccines became available in 2021, Æon Enterprises needed a solution to monitor their workforce’s vaccination status and ensure ongoing health safety. Lazyre integrated a Vaccine Verification System within the existing COVID-19 tracker, allowing employees to securely upload vaccination certificates and schedule doses. This system automated vaccine reminders, ensuring that employees were alerted to receive their second doses. With real-time updates, management could track vaccination progress, helping the company align with government mandates while keeping the factory operational.",
            "Handling sensitive health data required careful adherence to privacy regulations, especially GDPR. The vaccine integration was built with advanced encryption methods to protect employee data from unauthorized access. Only authorized personnel could view vaccination statuses, and any changes to personal health information were securely logged. This emphasis on security, coupled with features like automated certificate validation and seamless updates, gave Æon Enterprises the assurance of meeting compliance requirements, while maintaining the health and safety of their workforce in the face of evolving pandemic challenges.",
          ],
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
    nextWorkId: "revenue",
  },
  {
    id: "revenue",
    title: "Revenue Dashboard",
    client: "PQR Enterprises",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity"],
    image: "/images/work/revenue/cover3.png",
    coverImage: "/images/work/revenue/cover2.png",
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
        type: "FEATURES",
        name: "Key Features",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Real-Time Health Monitoring ",

              description:
                "SafeShift enabled daily health check-ins for workers, tracking symptoms and temperature data across all factory sites. This real-time monitoring system provided crucial insights that helped prevent COVID-19 outbreaks and ensured smooth factory operations. ",
            },
            {
              title: "AI-Powered Self-Diagnosis & Incident Reporting ",
              description:
                "The app featured a self-diagnosis tool built with Python, empowering workers to report symptoms and receive instant advice on whether they could attend work or seek medical care. It also included a feature for incident reporting, allowing rapid response to potential COVID-19 exposure. ",
            },
            {
              title: "Digital Access Pass System ",
              description:
                "Only employees who passed the daily health checks received a digital access pass, allowing safe entry into the factories. This feature significantly reduced the risk of COVID transmission, as symptomatic employees were denied access and instructed to self-isolate. ",
            },
          ],
        },
      },
      {
        type: "CAROUSEL",
        name: "How Are You Feeling Today?",
        sectionDetails: {
          title: "How Are You Feeling Today?",
          subtitle:
            "Our AI-powered self-diagnosis feature used an interactive approach to assess workers' health through a How Are You Feeling Today? section. A carousel of well crafted and animated emotions allowed employees to report their well-being in a simple, fun, intuitive manner.",
          images: [
            {
              imageSrc: "/images/work/revenue/1.png",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/revenue/2.png",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/revenue/3.png",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/revenue/4.png",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc: "/images/work/revenue/5.png",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "INFOPANE",
        name: "Initial Digital Pass System",
        sectionDetails: {
          title: "Initial Digital Pass System",
          subtitle:
            "The digital access pass system was designed with versatility to cater to the diverse needs of employees, allowing them to request passes for various factory zones based on their health status and operational requirements. It included two types of passes: the Day Pass, which provided standard access to the general factory areas, and the Custom Pass, a specialized permit for high-security or restricted zones, granted according to job roles and individual health assessments. This innovative system played a crucial role in maintaining production safety by ensuring that workers could only enter designated areas after successfully passing a health check, thereby enhancing the overall safety and efficiency of factory operations.",
          sectionImage: {
            imageSrc: "/images/work/revenue/lang2.png",
            fit: "cover",
            bgColor: "#151F2B",
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
    nextWorkId: "job-cards",
  },
  {
    id: "job-cards",
    title: "Job Cards",
    client: "LMN Company",
    tags: ["Social Media Strategy", "Content Creation", "Campaign Management"],
    image: "/images/work/job-cards/cover.png",
    coverImage: "/images/work/job-cards/cover3.png",
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
        type: "COVERIMAGE",
        name: "Brand Identity",
        sectionDetails: {
          title: "Comprehensive Brand Identity",
          subtitle: "Reflecting our values",
        },
      },
      {
        type: "FEATURES",
        name: "Key Features",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Real-Time Health Monitoring ",

              description:
                "SafeShift enabled daily health check-ins for workers, tracking symptoms and temperature data across all factory sites. This real-time monitoring system provided crucial insights that helped prevent COVID-19 outbreaks and ensured smooth factory operations. ",
            },
            {
              title: "AI-Powered Self-Diagnosis & Incident Reporting ",
              description:
                "The app featured a self-diagnosis tool built with Python, empowering workers to report symptoms and receive instant advice on whether they could attend work or seek medical care. It also included a feature for incident reporting, allowing rapid response to potential COVID-19 exposure. ",
            },
            {
              title: "Digital Access Pass System ",
              description:
                "Only employees who passed the daily health checks received a digital access pass, allowing safe entry into the factories. This feature significantly reduced the risk of COVID transmission, as symptomatic employees were denied access and instructed to self-isolate. ",
            },
          ],
        },
      },
      {
        type: "SHOWCASE",
        name: "showcase",
        sectionDetails: {
          title: "Comprehensive Protection",
          subtitle: "Explore our security features",
          showcase: [
            {
              imageSrc: "/images/work/job-cards/dashboard/2.png",
              altText: "Temperature Input",
              fit: "contain",
              bgColor: "#E80054",
              paddingValue: "20px",
              description:
                "Employees could select their body temperature using a slider interface.",
              isSquare: true,
            },
            {
              imageSrc: "/images/work/job-cards/dashboard/angle1.png",
              altText: "Sleep Level Rating",
              fit: "contain",
              bgColor: "#313159",
              paddingValue: "20px",
              description:
                "Workers rated their sleep quality on a scale of 1 to 5, giving managers insights into fatigue levels.",
              isSquare: false,
            },
            {
              imageSrc: "/images/work/job-cards/dashboard/6.png",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#228B22",
              paddingValue: "20px",
              description:
                "If symptoms were present, users could report specific details, including comments, helping management better assess the situation.",
              isSquare: true,
            },
            {
              imageSrc: "/images/work/job-cards/dashboard/3.png",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#228B22",
              paddingValue: "20px",
              description:
                "If symptoms were present, users could report specific details, including comments, helping management better assess the situation.",
              isSquare: false,
            },
            {
              imageSrc: "/images/work/job-cards/dashboard/4.png",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#228B22",
              paddingValue: "20px",
              description:
                "If symptoms were present, users could report specific details, including comments, helping management better assess the situation.",
              isSquare: true,
            },
            {
              imageSrc: "/images/work/job-cards/dashboard/5.png",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#228B22",
              paddingValue: "20px",
              description:
                "If symptoms were present, users could report specific details, including comments, helping management better assess the situation.",
              isSquare: false,
            },
          ],
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc: "/images/work/job-cards/cover2.png",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        name: "Vaccine Integration",
        sectionDetails: {
          title: "Seamless Vaccine Verification for a Safer Workplace",
          subtitle: "Vaccine Integration: A Crucial Step Forward",
          description: [
            "As COVID-19 vaccines became available in 2021, Æon Enterprises needed a solution to monitor their workforce’s vaccination status and ensure ongoing health safety. Lazyre integrated a Vaccine Verification System within the existing COVID-19 tracker, allowing employees to securely upload vaccination certificates and schedule doses. This system automated vaccine reminders, ensuring that employees were alerted to receive their second doses. With real-time updates, management could track vaccination progress, helping the company align with government mandates while keeping the factory operational.",
            "Handling sensitive health data required careful adherence to privacy regulations, especially GDPR. The vaccine integration was built with advanced encryption methods to protect employee data from unauthorized access. Only authorized personnel could view vaccination statuses, and any changes to personal health information were securely logged. This emphasis on security, coupled with features like automated certificate validation and seamless updates, gave Æon Enterprises the assurance of meeting compliance requirements, while maintaining the health and safety of their workforce in the face of evolving pandemic challenges.",
          ],
        },
      },
      {
        type: "HEADING",
        name: "Moving Forward",
        sectionDetails: {
          title: "Outcome",
          subtitle:
            "As the pandemic subsided in 2024, Æon Enterprises Group sought to repurpose the COVID-19 tracker into a comprehensive Digital Pass System to meet their evolving operational needs. We are gradually updating the app to include:",
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
    nextWorkId: "pharma-souq",
  },
  {
    id: "pharma-souq",
    title: "Pharma Souq",
    client: "Nature Explorers",
    tags: ["Photography", "Nature", "Landscape"],
    image: "/images/work/pharma-souq/cover.png",
    coverImage: "/images/work/pharma-souq/cover.png",
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
    image: "/images/work/work6.webp",
    coverImage: "/images/work/work6.webp",
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
    image: "/images/work/work7.webp",
    coverImage: "/images/work/work7.webp",
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
    nextWorkId: "safe-shift",
  },
];

export default workData;
