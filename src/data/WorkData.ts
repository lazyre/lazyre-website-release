import { workDataType } from "@/types/types";

const workData: workDataType[] = [
  {
    id: "safe-shift",
    title: "Safe Shift",
    client: "Æon Enterprises",

    tags: ["App Development", "AI", "Branding", "Enterprise", "Logo Design"],
    image:
      "https://cdn.lazyre.com/images/work/safe-shift/safeshift-work-image.webp",
    coverImage:
      "https://cdn.lazyre.com/images/work/safe-shift/safeshift-cover-image.webp",
    overview: {
      heading: "Overview",
      description:
        "In 2020, during the height of the global pandemic, Æon Enterprises Group, a mid-sized manufacturer based in the UK, turned to us for a critical solution: a COVID-19 tracker to safeguard their workforce of over 500 factory workers. Faced with the challenge of maintaining employee health and ensuring operational continuity in a high-risk environment, we developed a comprehensive system that addressed these urgent needs. Our COVID-19 tracker featured real-time health monitoring, AI-powered self-diagnosis tools, and an intuitive digital access pass system to efficiently regulate factory entry. This robust solution not only protected the health of the workforce but also enabled Æon Enterprises Group to maintain uninterrupted production during a crucial time.",
    },
    section: [
      {
        type: "FEATURES",
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
        sectionDetails: {
          title: "How Are You Feeling Today?",
          subtitle:
            "Our AI-powered self-diagnosis feature used an interactive approach to assess workers' health through a How Are You Feeling Today? section. A carousel of well crafted and animated emotions allowed employees to report their well-being in a simple, fun, intuitive manner.",
          images: [
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/happy.webp",
              altText: "Happy emotion",
              fit: "contain",
              bgColor: "#FFD1A9",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/tired.webp",
              altText: "Tired emotion",
              fit: "contain",
              bgColor: "#D3C3F3",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/frustrated.webp",
              altText: "Frustrated emotion",
              fit: "contain",
              bgColor: "#F7A59F",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/scared.webp",
              altText: "Scared emotion",
              fit: "contain",
              bgColor: "#B1D1E8",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/neutral.webp",
              altText: "Neutral emotion",
              fit: "contain",
              bgColor: "#C8D5B9",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/sad.webp",
              altText: "Sad emotion",
              fit: "contain",
              bgColor: "#A8C6D9",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/emotions/angry.webp",
              altText: "Angry emotion",
              fit: "contain",
              bgColor: "#F4A5A5",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "SHOWCASE",
        sectionDetails: {
          title: "Health Monitoring Interface",
          subtitle:
            "Leveraging Interactive Tools for Employee Well-Being: Temperature, Sleep Quality, and Symptom Reporting",
          showcase: [
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/safe-shift-body-temperature.webp",
              altText: "Temperature Input",
              fit: "contain",
              bgColor: "#E80054",
              paddingValue: "20px",
              description:
                "Employees could select their body temperature using a slider interface.",
              isSquare: false,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/safe-shift-sleep-level.webp",
              altText: "Sleep Level Rating",
              fit: "contain",
              bgColor: "#313159",
              paddingValue: "20px",
              description:
                "Workers rated their sleep quality on a scale of 1 to 5, giving managers insights into fatigue levels.",
              isSquare: false,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/safe-shift/safe-shift-health-vitals.webp",
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
        sectionDetails: {
          title: "Initial Digital Pass System",
          subtitle:
            "The digital access pass system was designed with versatility to cater to the diverse needs of employees, allowing them to request passes for various factory zones based on their health status and operational requirements. It included two types of passes: the Day Pass, which provided standard access to the general factory areas, and the Custom Pass, a specialized permit for high-security or restricted zones, granted according to job roles and individual health assessments. This innovative system played a crucial role in maintaining production safety by ensuring that workers could only enter designated areas after successfully passing a health check, thereby enhancing the overall safety and efficiency of factory operations.",
          sectionImage: {
            imageSrc: "https://cdn.lazyre.com/images/work/safe-shift/pass.webp",
            altText: "Safe shift initial pass",
          },
        },
      },
      {
        type: "COVERIMAGE",
        sectionDetails: {
          title: "Safe shift vaccination integration",
          subtitle: "Safe shift vaccination integration",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/safe-shift/vaccination-cover.webp",
            altText: "Safe shift vaccination integration",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
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
        sectionDetails: {
          largeHeading: true,
          title: "2024: Transitioning to a Digital Pass Application",
          subtitle:
            "As the pandemic subsided in 2024, Æon Enterprises Group sought to repurpose the COVID-19 tracker into a comprehensive Digital Pass System to meet their evolving operational needs. We are gradually updating the app to include:",
        },
      },
      {
        type: "FEATURES",
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
    nextWorkId: "voxel-verse",
  },
  {
    id: "voxel-verse",
    title: "Voxel Verse",
    client: "Kaleidoscope Digital Creations",
    tags: ["3D Design", "Blockchain", "NFT", "Logo Design"],
    image:
      "https://cdn.lazyre.com/images/work/voxel-verse/voxel-verse-cover.webp",
    coverImage:
      "https://cdn.lazyre.com/images/work/voxel-verse/voxel-verse-arab-showcase.webp",
    overview: {
      heading: "Overview",
      description:
        "At Lazyre Studios, we were commissioned to create VoxelVerse, a global collection of voxel-based 3D city models designed for the NFT boom. At the heart of this series was the Dubai Edition, the crown jewel of the collection, representing the UAE’s most iconic city. Commissioned by an influential Dubai-based art collector and NFT investor, this voxel model was meticulously crafted to capture the essence of Dubai’s vibrant skyline, cultural richness, and futuristic allure. Rendered using Blender, these digital art pieces became part of an exclusive NFT collection. The Dubai model stood as the centerpiece of the VoxelVerse collection, which featured cities such as New York, Paris, and Tokyo. Dubai’s unique combination of cultural heritage and cutting-edge modernity made it the focal point, embodying the client’s vision of showcasing world-class cities through the lens of voxel art. ",
    },
    section: [
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
              title: "Cultural Essence in Voxel Form",

              description:
                "The Dubai model featured voxel depictions of Arab characters in traditional thobes, blending culture with modernity. This balance of heritage and innovation reflected the spirit of Dubai and connected deeply with the region’s cultural narrative. ",
            },
            {
              title: "A Skyline of Global Icons",
              description:
                "Capturing the breathtaking Burj Khalifa and Burj Al Arab, the Dubai skyline voxel model was a work of art. The detailed high-rise buildings and the futuristic cityscape in one frame mirrored the grandeur that Dubai is known for, making it the perfect subject for NFT collectors. ",
            },
            {
              title: "NFT-Ready for the Digital Art Market",
              description:
                "The models were rendered using Blender and optimized for NFT platforms, turning Dubai into a digital asset that could be owned and traded. The NFT-ready art pieces were part of a larger collection, making Dubai the centerpiece in a world tour of voxel art. ",
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
            imageSrc:
              "https://cdn.lazyre.com/images/work/voxel-verse/voxel-verse-birds-eye-view-night.webp",
            altText: "Dubai birds eye view",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        sectionDetails: {
          title: "Where Tradition Meets Digital Innovation",
          subtitle: "The NFT Centerpiece",
          description: [
            "Dubai is a city where tradition meets innovation, and VoxelVerse captured this juxtaposition in intricate voxel art. From the towering Burj Khalifa to the winding desert roads, each element of the city was recreated with an eye for detail and authenticity, turning the urban landscape into a visually captivating NFT series.",
            "The use of MagicaVoxel allowed us to model everything from the smallest streetlights to the tallest buildings, offering a digital experience that was both immersive and highly detailed. These voxel models were later transformed using Blender into digital artworks, establishing VoxelVerse as a premium NFT collection that resonated with the growing digital art community.",
          ],
        },
      },
      {
        type: "HEADING",
        name: "Moving Forward",
        sectionDetails: {
          title: "A City at Night: Roads and Lights in Voxel Art",
          subtitle:
            "The first-person view of Dubai’s roads and lighting captures the city’s energy after dark. From the glowing streetlights to the intricate layout of the roads, this voxel model showcases Dubai’s infrastructure in stunning detail. The image below simulates the experience of walking down Dubai’s streets, with the skyscrapers casting long shadows across the city. Each voxel, carefully positioned, brings the city to life, merging digital art with real-world architecture.",
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/voxel-verse/voxel-verse-street.webp",
            altText: "Street view of the dubai model",
          },
        },
      },
      {
        type: "HEADING",
        name: "Moving Forward",
        sectionDetails: {
          title:
            "Skyline Focus: Burj Khalifa, Burj Al Arab, and the High-Rises",
          subtitle:
            "In this striking voxel model, Dubai’s Burj Khalifa and Burj Al Arab rise majestically against the backdrop of high-rise buildings. The city's iconic skyline has been meticulously recreated, showing the gleaming towers that define Dubai’s global identity. As seen in the image below, this is not just a digital replica, but an artistic interpretation that captures the essence of Dubai's luxury and architectural ambition.",
        },
      },
      {
        type: "COVERIMAGE",
        name: "Cover Image",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/voxel-verse/voxel-verse-skyline.webp",
            altText: "Dubai Skyline view",
          },
        },
      },
      {
        type: "HEADING",
        name: "Moving Forward",
        sectionDetails: {
          largeHeading: true,
          title: "Cultural Icons and Global Characters",
          subtitle:
            "VoxelVerse also featured individual models that expanded beyond Dubai, bringing a diverse cast of characters and wildlife to life. Each model tells its own story, complementing the larger cityscape:",
        },
      },
      {
        type: "SHOWCASE",
        name: "showcase",
        sectionDetails: {
          title: "Comprehensive Protection",
          subtitle: "Explore our security features",
          videoShowcase: [
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/arab-male.mp4",
              altText: "Arab Male Character in a Thobe",
              description:
                "This voxel figure represents Dubai’s rich culture, dressed in traditional Emirati attire.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/falcon.mp4",
              altText: "Falcon Sitting",
              description:
                "The falcon, an important symbol in UAE culture, is shown with great detail, highlighting its significance.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/oryx.mp4",
              altText: "Oryx",
              description:
                "The Arabian oryx, with its striking horns, symbolizes the region’s natural beauty and strength.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/eagle.mp4",
              altText: "Eagle",
              description:
                "This majestic eagle is portrayed beautifully, representing strength and grace in the desert.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/cow.mp4",
              altText: "Cow",
              description:
                "This voxel cow adds a simple, earthy touch to the collection.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/vulture-sitting.mp4",
              altText: "Vulture Sitting",
              description:
                "The sitting vulture, with its sharp gaze, captures a moment of stillness in nature.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/andorra-male.mp4",
              altText: "Male Character from Andorra",
              description:
                "This character showcases the unique cultural attire of Andorra, adding to the collection’s diversity.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/vulture-flying.mp4",
              altText: "Vulture Flying",
              description:
                "This flying vulture captures a moment of action, soaring gracefully above the landscape.",
              isSquare: false,
            },
            {
              videoSrc:
                "https://cdn.lazyre.com/videos/work/voxel-verse/andorra-female.mp4",
              altText: "Female Character from Andorra",
              description:
                "Dressed in traditional Andorran clothing, this character adds to the global appeal of the collection.",
              isSquare: false,
            },
          ],
        },
      },
    ],
    testimonial: {
      author: "Sahar Al mansoori",
      content:
        "Lazyre Studios delivered far beyond our expectations with VoxelVerse. Their intricate attention to detail, from the roads of Dubai to the soaring Burj Khalifa, transformed our vision into a breathtaking reality. The Dubai model became the centerpiece of our NFT collection, captivating collectors worldwide. Lazyre’s mastery of voxel art and digital rendering made VoxelVerse a pioneering project in the NFT space.",
      designation: "Creative Director, Kaleidoscope Digital Creations",
    },
    nextWorkId: "revenue",
  },
  {
    id: "revenue",
    title: "Revenue Dashboard",
    client: "Revenue",
    tags: [
      "Enterprise",
      "Web Development",
      "Progressive Web App",
      "Logo Design",
    ],
    image: "https://cdn.lazyre.com/images/work/revenue/revenue-cover.webp",
    coverImage:
      "https://cdn.lazyre.com/images/work/revenue/revenue-dashboard-cover.webp",
    overview: {
      heading: "Overview",
      description:
        "Revenue, an innovative internal web application developed to transform the way renewable energy is monitored and managed. This platform was designed for a prominent energy company based in Eindhoven, Netherlands, to centralize data collection from solar panels, wind turbines, IoT devices, and security cameras. Through a fully customizable interface, users can track key performance indicators (KPIs), view real-time weather conditions, and manage security, all while receiving instant alerts for critical events. Revenue bridges the gap between sustainability and cutting-edge technology by offering a card-like customizable dashboard that enables seamless navigation and powerful data visualization. Designed to scale, this solution not only optimizes energy production and security but also supports multilingual capabilities, including Dutch, for broader usability. It empowers stakeholders to make data-driven decisions, ensuring operational efficiency in real-time. ",
    },
    section: [
      {
        type: "COVERIMAGE",
        sectionDetails: {
          title: "Comprehensive Brand Identity",
          subtitle: "Reflecting our values",
        },
      },
      {
        type: "FEATURES",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Customizable Card-Based Layout",
              description:
                "The heart of the Revenue platform lies in its flexibility. Users can create their own dashboard views by arranging cards, each representing vital information like energy output, IoT device status, security feeds, and weather updates. Whether users prefer to track data trends or immediate real-time performance, the customizable layout adapts to their workflow.",
            },
            {
              title: "Real-Time Energy & Device Monitoring",
              description:
                "Track solar and wind energy metrics in real time to ensure optimal energy generation and identify inefficiencies. IoT devices integrated into the platform provide crucial insights into system health, alerting users to potential maintenance issues or operational downtime.",
            },
            {
              title: "Integrated Security Camera Feeds",
              description:
                "Revenue is not just about energy management; it integrates live security camera feeds directly into the dashboard. Users can view and monitor multiple locations, ensuring that both energy production and facility security are under constant surveillance.",
            },
            {
              title: "Weather Report Integration",
              description:
                "Up-to-the-minute weather data is available to aid in forecasting energy production. With localized weather conditions at hand, the platform helps users make informed decisions on energy storage and deployment strategies based on environmental factors.",
            },
            {
              title: "File Upload & Management",
              description:
                "Users can securely upload custom files such as maintenance logs, technical reports, or energy production documents into the platform. This central repository ensures that all critical documentation is stored and easily accessible, streamlining internal processes.",
            },
            {
              title: "Real-Time Notifications",
              description:
                "The platform sends timely notifications via desktop and mobile devices for any energy production anomalies, device malfunctions, or security concerns. This ensures that users remain informed of any critical changes as they occur, allowing for immediate action and minimizing downtime.",
            },
          ],
        },
      },
      {
        type: "CAROUSEL",
        name: "How Are You Feeling Today?",
        sectionDetails: {
          title: "Progressive Web App",
          subtitle:
            "The Revenue web app is fully responsive and features a Progressive Web App (PWA) version for mobile use, enabling energy management on the go. Explore the key mobile screens",
          images: [
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/revenue/revenue-authentication.webp",
              altText: "Authentication page",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/revenue/revenue-dashboard.webp",
              altText: "Dashboard page",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/revenue/revenue-weather-card.webp",
              altText: "Weather page",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/revenue/revenue-downloads.webp",
              altText: "Search page",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/revenue/revenue-files.webp",
              altText: "Files page",
              fit: "contain",
              bgColor: "#151F2B",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "INFOPANE",
        sectionDetails: {
          title: "Multilingual Support for Dutch",
          subtitle:
            "Understanding the diverse needs of international clients, Lazyre ensured that Revenue offers full multilingual support, including Dutch. This localized experience helps users in the Netherlands seamlessly navigate the platform in their native language, ensuring ease of use and comfort. From the onboarding experience to detailed system alerts and reports, every element of the platform is available in Dutch, helping non-English speakers fully leverage the platform’s capabilities. The addition of multilingual support not only improves accessibility but also makes Revenue a powerful tool for teams that work across linguistic barriers, boosting internal collaboration and reducing any communication gaps. By catering to Dutch-speaking users, the platform creates an inclusive environment that enhances the overall user experience and facilitates smoother operation.",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/revenue/revenue-language-dutch.webp",
            altText: "Revenue dutch language showcase",
            fit: "cover",
            bgColor: "#151F2B",
          },
        },
      },
      {
        type: "COVERIMAGE",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/revenue/revenue-technology-cover.webp",
            altText: "Dubai birds eye view",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        sectionDetails: {
          subtitle:
            "Delivering Seamless Energy Management: A Technical Journey",
          title:
            "Harnessing Cutting-Edge Technology to Power Renewable Solutions",
          description: [
            "To create Revenue, Lazyre leveraged the latest in web technologies and cloud computing, ensuring the platform could handle complex real-time data streams from multiple sources without compromising speed or reliability. We started by designing a flexible, card-based UI using NextJs, which allowed users to customize their dashboards according to their unique monitoring needs. The app's backend was built on Node.js, handling API integration for solar and wind energy data, IoT devices, and security camera feeds. For real-time weather updates and notifications, we integrated a third-party weather API and established WebSocket connections to push critical alerts and ensure uninterrupted monitoring.",
            "In addition to scalability and performance, data security and compliance were top priorities. Lazyre implemented AWS Cloud Infrastructure to provide secure, scalable storage and computational power, ensuring the app could handle high traffic and heavy data loads. MQTT protocols were used for efficient IoT communication, enabling seamless connectivity across devices.",
          ],
        },
      },
      // {
      //   type: "HEADING",
      //   sectionDetails: {
      //     title: "Outcome",
      //     subtitle:
      //       "Revenue platform has become an integral part of the client’s energy and security management strategy. Its flexibility and scalability allowed the client to streamline energy production monitoring and optimize system performance, leading to improved operational efficiency. With real-time notifications, the client could quickly address any issues, minimizing downtime and maximizing energy output. The seamless integration of weather data and IoT device monitoring gave the team deeper insights, allowing them to plan and act on accurate data in real-time.",
      //   },
      // },
    ],
    testimonial: {
      author: "vanessa de vries",
      content:
        "The platform's intuitive, customizable layout and real-time data tracking allow us to stay on top of our renewable energy production and ensure all our IoT systems are functioning optimally. Their attention to detail and commitment to understanding our unique requirements set them apart from other developers we’ve worked with. We’re also thrilled with the multilingual support, which ensures that our Dutch-speaking team members can use the app seamlessly. Lazyre's professionalism, technical expertise, and dedication to delivering a superior solution made this project an overwhelming success.",
      designation: "Operations Manager",
    },
    nextWorkId: "job-cards",
  },
  {
    id: "job-cards",
    title: "Job Cards",
    client: "Midtec Trading & Contracting",
    tags: ["Enterprise", "Inventory", "ERP", "Web Development"],
    image: "https://cdn.lazyre.com/images/work/job-cards/job-cards-cover.webp",
    coverImage:
      "https://cdn.lazyre.com/images/work/job-cards/job-cards-dashboard-showcase.webp",
    overview: {
      heading: "Overview",
      description:
        "Lazyre partnered with Midtec, a leading manufacturing and engineering firm in Qatar, to develop a custom ERP system named Job Cards. Designed to streamline work order management, Job Cards was crafted to meet Midtec’s unique operational needs, allowing them to efficiently handle their day-to-day processes. This bespoke ERP solution provided comprehensive tools for creating, managing, and tracking work orders, along with dynamic profit calculation and inventory management. Built with scalability and precision, it enhanced Midtec's operational efficiency, financial insight, and resource planning.",
    },
    section: [
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
              title: "Comprehensive Work Order Management",
              description:
                "Job Cards allows Midtec to create and manage work orders from inception to completion. Users can seamlessly update job statuses—marking orders as 'Open' or 'Closed'—while tracking job progression in real-time. The system also provides easy labeling for payment statuses, ensuring that every project stage is accounted for.",
            },
            {
              title: "Dynamic Profit Calculations",
              description:
                "The system integrates a robust dynamic profit calculation engine. As work orders are updated with new data, such as materials used or services rendered, the ERP recalculates profits in real-time, offering a precise overview of each project’s financial performance.",
            },
            {
              title: "Payment Status Management",
              description:
                "Job Cards facilitates efficient payment tracking, enabling users to easily adjust and manage payment statuses throughout the project lifecycle.",
            },
            {
              title: "Inventory Tracking",
              description:
                "The system includes a basic inventory management feature that monitors material availability, alerting users when stock levels are low and aiding in effective resource allocation.",
            },
            {
              title: "Integrated Product Database for Pricing",
              description:
                "To ensure accuracy in work order creation, the system dynamically fetches product details and pricing from a central database. This feature guarantees that each order is generated using the most up-to-date information, minimizing errors and maximizing operational efficiency.",
            },
            {
              title: "Customizable Printables for Work Orders",
              description:
                "Based on Midtec's request, Lazyre added a printable work order feature. Users can easily generate print-friendly versions of their orders, providing a clean and professional format for on-site use or client sharing. This includes detailed breakdowns of job items, services, pricing, and payment statuses.",
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
                "https://cdn.lazyre.com/images/work/job-cards/dashboard/job-cards-all-cards.webp",
              altText: "Temperature Input",
              fit: "contain",
              bgColor: "#0235A1",
              paddingValue: "20px",
              description:
                "Job Cards dashboard displays all work orders with labels indicating payment and job statuses, providing an at-a-glance overview for efficient tracking.",
              isSquare: true,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/job-cards/dashboard/job-cards-authentication.webp",
              altText: "Sleep Level Rating",
              fit: "contain",
              bgColor: "#0235A1",
              paddingValue: "20px",
              description:
                "Secure login interface for authenticated access, ensuring data protection and user-specific access rights.",
              isSquare: false,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/job-cards/dashboard/job-cards-card-print.webp",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#0235A1",
              paddingValue: "20px",
              description:
                "Preview of a print-friendly work order format, designed for easy sharing and record-keeping.",
              isSquare: true,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/job-cards/dashboard/job-cards-details-1.webp",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#0235A1",
              paddingValue: "20px",
              description:
                "Detailed view of a specific work order, showing job information, client information, and status updates.",
              isSquare: false,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/job-cards/dashboard/job-cards-details-2.webp",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#0235A1",
              paddingValue: "20px",
              description:
                "Breakdown of items and services in the work order, with dynamic profit calculations displayed for real-time financial insights.",
              isSquare: true,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/job-cards/dashboard/job-cards-details-3.webp",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#0235A1",
              paddingValue: "20px",
              description:
                "Section for recording important remarks and updating payment details, ensuring full transparency and financial clarity.",
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
            imageSrc:
              "https://cdn.lazyre.com/images/work/job-cards/job-cards-print-pdf.webp",
            altText: "",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        sectionDetails: {
          title: "Enhancing Workflow through Efficient Printing Solutions",
          subtitle: "Streamlined Printables Feature for Work Orders",
          description: [
            "During the development process, Midtec requested the ability to generate printable versions of their work orders, enhancing their workflow by enabling them to provide physical copies for internal and client-related use. In response, Lazyre integrated a feature that allowed users to preview and print work orders directly from the ERP system. This functionality generates a clean, easy-to-read format that includes detailed breakdowns of work order items, services, and costs, as well as the calculated profit and payment statuses.",
            "This printable feature has proven invaluable for Midtec’s field operations and client interactions. By ensuring that work orders are accessible both digitally and in print, the system has increased transparency and operational efficiency across departments. Midtec staff can now produce hard copies quickly for on-site workers, while maintaining a digital record for future reference.",
          ],
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
    tags: [
      "Point Of Sale",
      "Inventory",
      "Branding",
      "Enterprise",
      "Logo Design",
    ],
    image:
      "https://cdn.lazyre.com/images/work/pharma-souq/pharma-souq-cover.webp",
    coverImage:
      "https://cdn.lazyre.com/images/work/pharma-souq/pharma-souq-dashboard-showcase.webp",
    overview: {
      heading: "Overview",
      description:
        "Lazyre partnered with a leading pharmacy in Saudi Arabia to create Pharma Souq, a fully customizable sales and inventory tracking solution designed to meet the unique demands of pharmaceutical retail. Built for speed, security, and efficiency, Pharma Souq offers a seamless experience for both customers and pharmacy staff, combining real-time data tracking, automation, and user-friendly design. This robust system enhances customer service while ensuring accurate inventory management and regulatory compliance.",
    },
    section: [
      {
        type: "FEATURES",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Prescription Scanning & Management",
              description:
                "Automate the intake process by scanning prescriptions to instantly populate product details, reducing manual data entry errors and saving valuable time for pharmacists.",
            },
            {
              title: "Multiple Waitlists & Counter Segregation",
              description:
                "Handle high customer volumes efficiently by assigning individuals to separate waitlists and specific service counters, optimizing workflow and customer flow management.",
            },
            {
              title: "Barcode & RFID Scanning",
              description:
                "Expedite checkout processes with barcode and RFID scanning for quick and accurate product identification, minimizing errors at the point of sale.",
            },
            {
              title: "Bill Printing",
              description:
                "Integrated with compatible printers, Pharma Souq provides seamless, on-demand bill printing, delivering receipts instantly to customers while reducing operational delays.",
            },
            {
              title: "Discount & Coupon Handling",
              description:
                "Manage promotions, discounts, and loyalty programs effortlessly by integrating them directly into the POS, allowing for personalized customer experiences and increased engagement.",
            },
          ],
        },
      },
      {
        type: "SHOWCASE",
        sectionDetails: {
          title: "Comprehensive Protection",
          subtitle: "Explore our security features",
          showcase: [
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/cart/pharma-souq-printing-card.webp",
              altText: "Temperature Input",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
              description:
                "Seamless transactions: The integrated printer produces the bill seamlessly",
              isSquare: true,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/cart/pharma-souq-cart-card.webp",
              altText: "Sleep Level Rating",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
              description:
                "Efficient and accurate: Product details are automatically populated from scanned prescriptions or can be manually entered, ensuring a smooth checkout process",
              isSquare: false,
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/cart/pharma-souq-done-card.webp",
              altText: "Symptom Reporting",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
              description:
                "All set: The checkout process concludes with a simple All Done card, completing the sale.",
              isSquare: true,
            },
          ],
        },
      },
      {
        type: "FEATURES",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Low Stock Alerts & Automated Reordering",
              description:
                "Prevent stockouts with real-time inventory tracking. Receive low-stock alerts and generate automated purchase orders to suppliers, ensuring key pharmaceuticals are always in stock.",
            },
            {
              title: "Profile Management & Authentication",
              description:
                "Secure login and role-based profile management ensure that pharmacy staff access the system according to their responsibilities, enhancing data security and user accountability.",
            },
            {
              title: "Sales Analytics & Reporting",
              description:
                "Leverage detailed analytics on sales trends, inventory movements, and customer behavior, allowing management to make data-driven decisions to optimize stock and sales strategies.",
            },
            {
              title: "Real-Time Inventory Management",
              description:
                "Monitor and update inventory levels in real-time, helping staff quickly adjust stock counts, add new products, and process incoming orders with ease.",
            },
            {
              title: "Multilingual Support",
              description:
                "Ensure seamless operation for staff and customers with support for both Arabic and English, allowing for wider usability across different language preferences.",
            },
          ],
        },
      },
      {
        type: "FULLCAROUSEL",
        sectionDetails: {
          title: "Inventory Management Flow",
          subtitle:
            "Pharma Souq’s real-time inventory management system is a game-changer for pharmacies. Staff can track stock levels with precision, receiving automatic low-stock alerts and effortlessly adding new products to the system. The intuitive dashboard allows pharmacy staff to manage existing inventory, adjust stock quantities, and upload new product details with barcode or RFID integration.Whenever a product falls below a preset threshold, the system sends a notification. This proactive approach saves time and helps prevent stockouts of critical medications, ensuring that customers can always find what they need.",
          images: [
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/pharma-souq-inventory.webp",
              altText: "Inventory page",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/pharma-souq-add-item.webp",
              altText: "Add Entry modal page 1",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/pharma-souq-add-item-2.webp",
              altText: "Add Entry modal page 2",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/pharma-souq/pos/pharma-souq-add-item-success.webp",
              altText: "Add Entry modal confirmation",
              fit: "contain",
              bgColor: "#22C55E",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "INFOPANE",
        sectionDetails: {
          title: "Multilingual Support for Arabic and English",
          subtitle:
            "Pharma Souq was developed with multilingual support to cater to the diverse population of Saudi Arabia. The system seamlessly integrates both Arabic and English languages, offering a user-friendly experience for pharmacy staff and customers alike. Staff can easily switch between languages, making the system accessible to all employees regardless of their preferred language. Furthermore, all customer-facing elements, such as receipts and communications, are available in either language, ensuring that customers receive accurate and comprehensible service. This bilingual design not only improves usability but also ensures that Pharma Souq aligns with regional linguistic preferences, enhancing the pharmacy’s ability to serve a wider audience. By offering language flexibility, Pharma Souq meets both the operational needs of the pharmacy and the communication needs of its customer base.",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/pharma-souq/pos/pharma-souq-dashboard-arabic.webp",
            altText: "",
            fit: "cover",
            bgColor: "#22C55E",
          },
        },
      },
      {
        type: "COVERIMAGE",
        sectionDetails: {
          title: "Stunning Cover Image",
          subtitle: "Discover the beauty of our website",
          sectionImage: {
            imageSrc:
              "https://cdn.lazyre.com/images/work/pharma-souq/pharma-souq-security-showcase.webp",
            altText: "Dubai birds eye view",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        sectionDetails: {
          title: "Robust Compliance",
          subtitle: "Ensuring Secure Processing of Sensitive Patient Data",
          description: [
            "In the healthcare and pharmaceutical industry, safeguarding sensitive patient data is not just a priority but a legal obligation. With the development of Pharma Souq, Lazyre took special care to build a system that handles patient data securely, ensuring that every aspect of the prescription process is compliant with industry standards and regulations. Sensitive information, including prescription details and patient profiles, is encrypted end-to-end, both during transmission and while at rest. By utilizing advanced encryption protocols, the software minimizes the risk of unauthorized access, providing secure data storage and protecting it from potential breaches. The platform also incorporates role-based authentication, ensuring that only authorized personnel can access or modify sensitive information. These measures help pharmacies ensure data confidentiality, integrity, and availability, which are key to maintaining trust and safety in patient care.",
            "Recognizing the evolving landscape of data privacy, we enhanced Pharma Souq in a future update to align with SDAIA’s (Saudi Data and Artificial Intelligence Authority) Personal Data Protection Law. This new law introduced more stringent guidelines for handling personal information in the Kingdom of Saudi Arabia, and Lazyre proactively adapted Pharma Souq’s security protocols and terms to comply. These updates included implementing more comprehensive data privacy policies, revising consent mechanisms for patient data collection, and ensuring secure cross-border data transfers, where applicable. By remaining in compliance with the latest legal frameworks, Pharma Souq gives pharmacies and patients the confidence that their sensitive data is protected, securely processed, and handled in full accordance with national regulations, positioning it as a reliable and forward-thinking solution for the healthcare sector.",
          ],
        },
      },
    ],
    testimonial: {
      author: "Mariyam Sheikh",
      content:
        "From day one, their team was responsive, detail-oriented, and genuinely invested in improving our operations. The custom POS solution they created transformed how we manage everything—from prescription processing to inventory control. Pharma Souq has not only streamlined our workflow but also significantly reduced our checkout times, making both staff and customers happier. We couldn’t be more pleased with the results.",
      designation: "Pharmacy Operations Manager",
      link: "https://example.com/testimonial5",
    },
    nextWorkId: "bloeiende-werelden",
  },
  {
    id: "bloeiende-werelden",
    title: "Bloeiende Werelden Store",
    client: "Bloeiende Werelden",
    tags: [
      "Ecommerce",
      "Branding",
      "Progressive Web App",
      "Web Development",
      "Logo Design",
    ],
    image:
      "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-cover.webp",
    coverImage:
      "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-website-showcase.webp",
    overview: {
      heading: "Overview",
      description:
        "In 2023 Lazyre partnered with Bloeiende Werelden, a Netherlands-based florist, to create a full-fledged e-commerce platform and an entirely new brand identity. The objective was to design a localized, feature-rich website and mobile PWA (Progressive Web App) to deliver an exceptional online shopping experience, while staying true to the vibrant nature of their floral business. From seamless mobile shopping to a responsive web platform, Lazyre ensured that every element was crafted to fit Bloeiende Werelden’s specific business needs, focusing on local market appeal.",
    },
    section: [
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
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Personalized Recommendations",
              description:
                "The platform includes a smart recommendation engine that analyzes user preferences and offers personalized floral suggestions, significantly boosting customer engagement by showcasing relevant products at the right time.",
            },
            {
              title: "Real-time Stock Management",
              description:
                "Real-time inventory updates ensure customers only see available products, keeping the catalog fresh and reducing abandoned carts due to out-of-stock items.",
            },
            {
              title: "Mobile-Optimized PWA",
              description:
                "The mobile Progressive Web App offers an app-like experience across devices, featuring quick load times, offline access to selected pages, and push notifications for an enhanced mobile experience.",
            },
          ],
        },
      },
      {
        type: "CAROUSEL",
        name: "Stunning Mobile Experience",
        sectionDetails: {
          title: "Stunning Mobile Experience",
          subtitle:
            "The mobile version of the website was designed to offer a smooth, interactive experience, mimicking native app functionality. Below are the key screens:",
          images: [
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-splash-screen.webp",
              altText: "Splash screen",
              fit: "contain",
              bgColor: "#FFD1A9",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-home-page.webp",
              altText: "Home page",
              fit: "contain",
              bgColor: "#D3C3F3",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-product-page.webp",
              altText: "Product page",
              fit: "contain",
              bgColor: "#FFD1A9",
              paddingValue: "20px",
            },
            {
              imageSrc:
                "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-checkout-page.webp",
              altText: "Checkout page",
              fit: "contain",
              bgColor: "#D3C3F3",
              paddingValue: "20px",
            },
          ],
        },
      },
      {
        type: "FEATURES",
        sectionDetails: {
          title: "Key Features",
          subtitle: "Check out our top offerings",
          features: [
            {
              title: "Combos & Seasonal Discounts",
              description:
                "Bloeiende Werelden frequently introduces new floral bundles and seasonal promotions, allowing customers to easily build customizable combos, apply discount codes, and redeem special offers during checkout.",
            },
            {
              title: "Localized Shopping Experience",
              description:
                "The e-commerce platform is localized for Dutch and English, with location-based features to limit orders within the Netherlands, ensuring smooth transactions for local customers.",
            },
            {
              title: "Coupons & Loyalty Programs",
              description:
                "A built-in coupon and loyalty program system rewards recurring customers with personalized offers and referral bonuses, encouraging repeat business and new customer acquisition.",
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
            imageSrc:
              "https://cdn.lazyre.com/images/work/bloeiende-werelden/bloeiende-werelden-ecommerce.webp",
            altText: "",
          },
        },
      },
      {
        type: "OVERVIEWGRID",
        sectionDetails: {
          title: "Your Local Floral Experience",
          subtitle: "Multilingual & Localized E-commerce Experience",
          description: [
            "In today’s e-commerce world, localization plays a key role in maximizing customer engagement and ensuring smooth communication. Lazyre integrated multilingual support for Dutch and English across Bloeiende Werelden’s platform, offering an intuitive language switcher for customers to easily toggle between the two. The entire interface, from product descriptions to checkout instructions, was carefully translated, ensuring a natural and authentic experience in both languages. This feature caters to the local market, while ensuring that non-Dutch speakers living in the Netherlands can also comfortably shop for flowers.",
            "Because Bloeiende Werelden operates exclusively within the Netherlands and does not offer international shipping, Lazyre developed a fully localized platform. The system is geolocation-aware, meaning it limits orders to regions within the Netherlands. This hyper-focused localization ensures a seamless shopping experience for domestic customers. Moreover, localized payment methods popular in the country were integrated, offering a culturally relevant and user-friendly checkout process. By ensuring that the e-commerce platform speaks to the needs of the local market, Lazyre helped Bloeiende Werelden connect more deeply with their customers, strengthening brand loyalty and improving sales conversions.",
          ],
        },
      },
    ],
    testimonial: {
      author: "Lotte van der Meer",
      content:
        "The team took the time to understand the essence of what we do and transformed that into a beautiful, functional platform. From the logo that perfectly captures the vibrancy of our flowers, to the intuitive mobile experience that has made online shopping easy for our customers, Lazyre delivered on every front.",
      designation: "CEO, Bloeiende Werelden",
    },
    nextWorkId: "safe-shift",
  },
];

export default workData;
