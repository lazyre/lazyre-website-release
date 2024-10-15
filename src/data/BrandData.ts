import { brandDataType } from "@/types/types";

const brandData: brandDataType[] = [
  {
    id: "tech",
    title: "Lazyre Tech",
    image: "/images/brand/tech/lazyre_tech_cover.webp",
    services: [
      { id: "app-development", name: "App Development" },
      { id: "cloud-solutions", name: "Cloud Solutions" },
      { id: "network-security", name: "Network Security & Cybersecurity" },
      { id: "api-integrations", name: "API Integrations" },
      { id: "data-management", name: "Data Management & Analysis" },
      { id: "blockchain-solutions", name: "Blockchain Solutions" },
      { id: "machine-learning", name: "Machine Learning" },
      {
        id: "artificial-intelligence",
        name: "Artificial Intelligence",
      },
    ],
    lightAccentColor: "#ff8480",
    darkAccentColor: "#800400",

    subtitle:
      "Driving innovation through tailored technology solutions that transform businesses and shape the future.",
    subHeading: "Innovative Tech Solutions for Modern Businesses.",
    subDescription:
      "Lazyre Tech offers cutting-edge technological solutions tailored to meet the evolving needs of modern businesses. From app development and cloud solutions to advanced network security, we ensure your digital infrastructure is future-proof. With a focus on efficiency and scalability, our team builds systems that grow with your business, helping you innovate and compete in today’s fast-paced digital world.",

    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Advanced Tech Solutions",
    toolsDescription:
      "Lazyre Tech utilizes a range of cutting-edge tools to develop efficient, scalable, and secure solutions. Our tools help streamline app development, cloud infrastructure, and more, ensuring modern businesses are equipped for the future.",
    tools: [
      {
        category: "App Development",
        toolList: ["Flutter", "React Native", "Xamarin", "Swift", "Kotlin"],
      },
      {
        category: "Cloud Solutions",
        toolList: [
          "AWS",
          "Microsoft Azure",
          "Google Cloud",
          "IBM Cloud",
          "Heroku",
        ],
      },
    ],

    workHeading: "Explore Our Innovative Solutions",
    workDescription:
      "Our portfolio features a variety of projects that demonstrate our expertise in delivering innovative solutions across multiple industries. From technology development to digital transformations, our work exemplifies how we tackle challenges and deliver results. Dive into our showcase to explore what we’ve achieved.",
    relatedWork: ["safe-shift", "revenue", "job-cards"],
  },
  {
    id: "design",
    title: "Lazyre Design",
    image: "/images/brand/design/lazyre_design_cover.webp",
    services: [
      { id: "logo-creation", name: "Logo Creation" },
      { id: "ui-ux-design", name: "UI UX design" },
      { id: "mockups-prototypes", name: "Mockups & Prototypes" },
      { id: "3d-prototyping", name: "3d Prototyping" },
      { id: "business-cards-stationery", name: "Business Cards & Stationery" },
      { id: "brochures-flyers-posters", name: "Brochures, Flyers & Posters" },
      {
        id: "animations-motion-graphics",
        name: "Animations & Motion Graphics",
      },
    ],
    lightAccentColor: "#ff80a8",
    darkAccentColor: "#800028",
    subtitle:
      "Crafting visually stunning and meaningful designs that elevate your brand and leave a lasting impact.",
    subHeading: "Designs that Elevate Your Brand.",
    subDescription:
      "Lazyre Design is where creativity meets strategy. Our team specializes in delivering impactful visuals that resonate with your audience. From logo creation to UI/UX design and 3D prototypes, we blend aesthetics with functionality, ensuring that every design we produce reflects your brand's unique identity. Whether it's a sleek logo or an immersive digital interface, our designs speak for themselves, setting you apart in a crowded marketplace.",
    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Design Tools for Impactful Creations",
    toolsDescription:
      "At Lazyre Design, we leverage top-tier design tools that enable us to create visually stunning and meaningful designs. These tools empower us to deliver everything from logos to complex 3D prototypes with precision and creativity.",
    tools: [
      {
        category: "Graphic Design",
        toolList: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Figma",
          "Sketch",
          "CorelDRAW",
        ],
      },
      {
        category: "3D Prototyping",
        toolList: [
          "Blender",
          "AutoCAD",
          "Tinkercad",
          "Cinema 4D",
          "MagicaVoxel",
        ],
      },
    ],

    workHeading: "Explore Some of Our Most Creative Work",
    workDescription:
      "Discover a selection of projects that showcase our ability to combine creativity with functionality. From visual design to complex projects, these works highlight the diverse capabilities we bring to every task. Check out our portfolio to see how we turn ideas into impactful results.",
    relatedWork: ["safe-shift", "revenue", "job-cards"],
  },
  {
    id: "build",
    title: "Lazyre Build",
    image: "/images/brand/build/lazyre_build_cover.webp",
    services: [
      { id: "business-strategy", name: "Business Strategy" },
      { id: "target-audience-research", name: "Target Audience Research" },
      { id: "brand-positioning", name: "Brand Positioning & Messaging" },
      { id: "brand-naming", name: "Brand Naming & Taglines" },
      { id: "brand-identity", name: "Brand Identity & Logo Design" },
      { id: "content-strategy", name: "Content Strategy" },
      {
        id: "website-digital-presence",
        name: "Website Branding & Development",
      },
    ],
    lightAccentColor: "#f4aa8b",
    darkAccentColor: "#752b0b",
    subtitle:
      "Building powerful brand identities that resonate with your audience and set you apart in the marketplace.",
    subHeading: "Building Brands That Resonate.",
    subDescription:
      "Lazyre Build is all about creating cohesive and memorable brand identities. We handle everything from brand naming and logo design to messaging and positioning, ensuring your brand stands out. With a strategic approach to every element of branding, we help businesses connect emotionally with their target audience, driving loyalty and recognition across all touchpoints.",
    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Brand Tools for Powerful Identities",
    toolsDescription:
      "Lazyre Build employs an array of strategic tools to create cohesive and impactful brand identities. These tools assist us in developing unique brand messaging, logos, and effective communication strategies.",
    tools: [
      {
        category: "Brand Identity & Design",
        toolList: [
          "Canva",
          "Adobe Illustrator",
          "InVision",
          "Affinity Designer",
          "Balsamiq",
        ],
      },
      {
        category: "Messaging & Strategy",
        toolList: ["HubSpot", "Trello", "Slack", "Google Workspace", "Asana"],
      },
    ],
    workHeading: "See How We Build Brands That Last",
    workDescription:
      "Explore a range of successful branding projects that highlight our approach to creating lasting and memorable identities. From strategy to execution, our work is focused on building brands that resonate with audiences. Dive into our portfolio to see how we craft strong, enduring brands.",
    relatedWork: ["work1", "work3", "work5"],
  },
  {
    id: "web",
    title: "Lazyre Web",
    image: "/images/brand/web/lazyre_web_cover.webp",
    services: [
      { id: "frontend-development", name: "Front-End Development" },
      { id: "backend-development", name: "Back-End Development" },
      { id: "ecommerce-solutions", name: "E-Commerce Solutions" },
      { id: "crm-solutions", name: "Custom CRM Solutions" },
      // { id: "web-applications", name: "Web Applications" },
      { id: "cms-development", name: "CMS Development" },
      { id: "web-hosting-deployment", name: "Web Deployment & Maintenance" },
    ],
    lightAccentColor: "#9eb6e0",
    darkAccentColor: "#1f3761",
    subtitle:
      "Delivering high-performance, scalable web experiences that connect brands with their audience effortlessly.",
    subHeading: "High-Performance Web Experiences.",
    subDescription:
      "Lazyre Web is dedicated to creating seamless, responsive websites and web applications that prioritize user experience and performance. Our web solutions are built to scale with your business, offering customized e-commerce platforms, content management systems, and more. We focus on delivering fast, secure, and optimized websites that ensure your brand’s digital presence is powerful and effective.",
    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Web Tools for Seamless Experiences",
    toolsDescription:
      "Lazyre Web harnesses powerful tools to create responsive, high-performance websites and web applications. Our toolkit enables us to deliver scalable, secure, and optimized digital experiences for businesses across all sectors.",
    tools: [
      {
        category: "Frontend Development",
        toolList: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js"],
      },
      {
        category: "Backend Development",
        toolList: ["Node.js", "Django", "Flask", "Laravel", "Ruby on Rails"],
      },
    ],

    workHeading: "Browse Our Outstanding Digital Projects",
    workDescription:
      "Take a look at our diverse range of projects that reflect our passion for crafting excellent digital experiences. Whether it’s websites or applications, each project demonstrates our commitment to delivering performance and usability. Explore our portfolio to see the results of our web expertise.",
    relatedWork: ["work1", "work3", "work5"],
  },
  {
    id: "digitalytics",
    title: "Lazyre Digitalytics",
    image: "/images/brand/digitalytics/lazyre_digitalytics_cover.webp",
    services: [
      { id: "seo", name: "Search Engine Optimization (SEO)" },
      { id: "ppc", name: "Pay-Per-Click Advertising (PPC)" },
      {
        id: "smm",
        name: "Social Media Marketing",
      },
      { id: "email-marketing", name: "Email Marketing" },
      { id: "content-marketing", name: "Content Marketing" },
      { id: "cro", name: "Conversion Rate Optimization (CRO)" },
      { id: "orm", name: "Online Reputation Management (ORM)" },
    ],
    lightAccentColor: "#9ce1e3",
    darkAccentColor: "#1c6163",
    subtitle:
      "Maximizing your digital presence with data-driven strategies that boost visibility, engagement, and growth.",
    subHeading: "Data-Driven Digital Marketing Solutions.",
    subDescription:
      "Lazyre Digitalytics specializes in crafting comprehensive digital marketing strategies that deliver real results. Our expertise spans SEO, PPC, content marketing, and social media management, all designed to enhance your online presence. We focus on data-driven decision-making to drive traffic, improve engagement, and increase conversions, ensuring your marketing efforts translate into measurable success.",
    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Marketing Tools for Maximum Reach",
    toolsDescription:
      "At Lazyre Digitalytics, we use advanced marketing tools to optimize and measure digital campaigns. Our toolkit allows us to enhance SEO, manage PPC ads, and track audience engagement effectively.",
    tools: [
      {
        category: "SEO & Analytics",
        toolList: [
          "Google Analytics",
          "SEMrush",
          "Moz",
          "Ahrefs",
          "Screaming Frog",
        ],
      },
      {
        category: "Social Media Management",
        toolList: [
          "Hootsuite",
          "Buffer",
          "Sprout Social",
          "Later",
          "SocialBee",
        ],
      },
    ],

    workHeading: "Discover Our Impactful Campaigns",
    workDescription:
      "Browse through our portfolio of successful projects, where strategic thinking meets creativity. Our results-driven work spans across various industries and showcases how we turn insights into impactful solutions. Check out our best work and see how we create value for clients.",
    relatedWork: ["work1", "work3", "work5"],
  },
  {
    id: "studios",
    title: "Lazyre Studios",
    image: "/images/brand/studios/lazyre_studios_cover.webp",
    services: [
      { id: "photography", name: "Photography" },
      { id: "video-production", name: "Video Production" },
      { id: "video-photo-editing", name: "Photo & Video Editing" },
      { id: "3d-prototyping", name: "3D Prototyping" },
      { id: "brand-photography", name: "Brand Photography" },
      { id: "showreels", name: "Showreels" },
    ],
    lightAccentColor: "#c697e7",
    darkAccentColor: "#461867",
    subtitle:
      "Bringing your brand to life through compelling visual storytelling that captures attention and builds trust.",
    subHeading: "Compelling Visual Storytelling for Brands.",
    subDescription:
      "Lazyre Studios transforms your brand’s story into visually compelling content that engages and excites your audience. From professional photography to high-quality videography and 3D brand experiences, we deliver media that enhances your brand’s image. Our creative team specializes in producing content that tells your story in a way that captivates and resonates across digital platforms.",
    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Visual Tools for Stunning Content",
    toolsDescription:
      "Lazyre Studios leverages cutting-edge tools to bring your brand's story to life through visual storytelling. Our suite of media tools ensures professional-grade photography and videography that enhance your brand’s image.",
    tools: [
      {
        category: "Photography & Videography",
        toolList: [
          "Adobe Premiere Pro",
          "Final Cut Pro",
          "DaVinci Resolve",
          "Lightroom",
          "After Effects",
        ],
      },
      {
        category: "3D Rendering & Animation",
        toolList: ["Maya", "Blender", "Cinema 4D", "Houdini", "3ds Max"],
      },
    ],

    workHeading: "Discover the Power of Visual Storytelling",
    workDescription:
      "Our portfolio presents a selection of visually-driven projects that demonstrate our ability to tell compelling stories through media. Whether through photography, video, or other visual mediums, our work highlights creativity and technical expertise. Explore some of our best projects and see our vision in action.",
    relatedWork: ["work1", "work3", "work5"],
  },
  {
    id: "lab",
    title: "Lazyre Lab",
    image: "/images/brand/lab/lazyre_lab_cover.webp",
    services: [
      { id: "augmented-reality", name: "Augmented Reality (AR)" },
      { id: "virtual-reality", name: "Virtual Reality (VR)" },
      { id: "internet-of-things", name: "Internet of Things (IoT)" },
      { id: "machine-learning-lab", name: "Machine Learning" },
      // { id: "blockchain-development-lab", name: "Blockchain Development" },
      { id: "artificial-intelligence-lab", name: "Artificial Intelligence" },
    ],
    lightAccentColor: "#dea1b7",
    darkAccentColor: "#5e2138",
    subtitle:
      "Pioneering cutting-edge technologies to create intelligent, interactive solutions for the next generation of business.",
    subHeading: "Innovative Solutions with Emerging Technologies.",
    subDescription:
      "Lazyre Lab explores the frontier of technology, from AI and machine learning to augmented and virtual reality. We experiment with emerging tech to build innovative solutions that transform industries and redefine how businesses operate. With a focus on AI-powered automation and interactive experiences, Lazyre Lab is your gateway to staying ahead in the tech-driven future.",
    coverImage: "/images/brand/tech.jpg",
    toolsHeading: "Tech Tools for Emerging Solutions",
    toolsDescription:
      "At Lazyre Lab, we utilize a wide range of innovative tools to explore cutting-edge technologies. Whether it's AI or augmented reality, our tools help create intelligent, immersive solutions for businesses of the future.",
    tools: [
      {
        category: "Artificial Intelligence",
        toolList: [
          "TensorFlow",
          "PyTorch",
          "OpenAI API",
          "IBM Watson",
          "Hugging Face",
        ],
      },
      {
        category: "Augmented Reality",
        toolList: ["ARCore", "ARKit", "Unity", "Vuforia", "Spark AR"],
      },
    ],

    workHeading: "Explore Our Groundbreaking Innovations",
    workDescription:
      "Our portfolio features cutting-edge projects that explore the frontiers of technology and innovation. From experimental solutions to breakthrough ideas, we’re pushing boundaries across a range of fields. Browse through our work to see the innovative solutions we’ve created.",
    relatedWork: ["work1", "work3", "work5"],
  },
];

export default brandData;
