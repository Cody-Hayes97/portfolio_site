export interface AboutSectionProps {
  header: string;
  text: string;
}

export interface TechIconsProps {
  source: string;
  alt: string;
}

export interface ProjectDetailsProps {
  title: string;
  description: string;
  iconSrc: string;
  id: number;
  technologiesIcons: string[];
  projectImages: string[];
}

export interface ExperienceDetailsProps {
  years: string;
  jobTitle: string;
  company: string;
  experienceItems: string[];
}

export const aboutText: AboutSectionProps[] = [
  {
    header: "About Me",
    text: "Hello World, I'm Manol Sharma and I am a full-stack developer from omaha, NE. I specialized in creating advanced modern web and mobile applications for small to medium-sized businesses. I love to write simple, coherent and maintainable code. I consider myself to be an analytical thinker, problem solver, and solution-oriented person. I prioritize effective time management and take pride in producing high-quality work that surpasses expectations. I am dedicated to fulfilling commitments, Additionally, I am a collaborative team member with strong interpersonal communication skills that allow me to work effectively with others.",
  },
  {
    header: "Experience Summary",
    text: "More than five years of work experience on developments of web and mobile applications with a proven track record of working in client-facing web and mobile apps with some advanced features such as time-sheets, resume ingestion, onboarding, referral rewards platforms, e-signature platform, etc., that are used by thousands of users every day. My work focuses on modern technologies like React, React Native, NextJS, Node, Express, Firebase, OAuth, Microsoft Azure, and many API integrations along with e2e testing tools like Playwright. I work with many databases including PostgreSQL, MySQL, MongoDB, Redis, and more. And I work with many design and development tools such as Git, BitBucket, GitHub, Trello, Slack, Figma, Azure App Services, etc.",
  },
];

export const projectDetails: ProjectDetailsProps[] = [
  {
    title: "Full Aplication /W resume ingestion",
    description:
      "A cutting-edge system for automated resume text extraction using OpenAI, significantly reducing manual effort for candidate evaluation processes.",
    iconSrc: "/reactjs.svg",
    id: 1,
    technologiesIcons: [
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
    ],
    projectImages: ["/screenshot.png", "/screenshot2.png"],
  },
  {
    title: "Traveler Onboarding Portal",
    description:
      "An easy to use client portal for submitting all the necessary documents to land on a job",
    iconSrc: "/reactjs.svg",
    id: 2,
    technologiesIcons: [
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
    ],
    projectImages: ["/screenshot.png"],
  },
  {
    title: "Jobs Search Portal",
    description:
      "A UI/UX driven job search portal for travel nurses to search new jobs, with personalized search predictions",
    iconSrc: "/reactjs.svg",
    id: 3,
    technologiesIcons: [
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
    ],
    projectImages: ["/screenshot.png"],
  },
  {
    title: "Referral & Rewards Platform",
    description:
      "A state-of-the-art rewards platform, to view and track your referral bonus and reward points for completed tasks.",
    iconSrc: "/reactjs.svg",
    id: 4,
    technologiesIcons: [
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
    ],
    projectImages: ["/screenshot.png"],
  },
  {
    title: "Component Library",
    description:
      "Medical Solutions based shared component library for react built using its own colors and branding for react.",
    iconSrc: "/reactjs.svg",
    id: 5,
    technologiesIcons: [
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
    ],
    projectImages: ["/screenshot.png"],
  },
  {
    title: "PADI Custom Admin Portal",
    description:
      "A modern custom built document library management system for recruiters and carrier consultant",
    iconSrc: "/reactjs.svg",
    id: 6,
    technologiesIcons: [
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
      "/reactjs.svg",
    ],
    projectImages: ["/screenshot.png"],
  },
];

export const experienceDetails: ExperienceDetailsProps[] = [
  {
    years: "2021 - 2024",
    jobTitle: "Front End Developer - II",
    company: "Medical Solutions, LLC",
    experienceItems: [
      "Managed front-end development of cutting-edge system for automated resume text extraction using OpenAI, reducing manual effort and improving efficiency in candidate evaluation processes, Development included advanced data-mappings, pre-populating form fields with scanned data with complex validation logic, to ensure data validation.",
      "Contributed to FE development for successful introduction and integration of DocuSign as eSignature provider, streamlining contract management processes and enhancing overall workflow efficiency.",
    ],
  },
  {
    years: "2021 - 2024",
    jobTitle: "Front End Developer - II",
    company: "Medical Solutions, LLC",
    experienceItems: [
      "Managed front-end development of cutting-edge system for automated resume text extraction using OpenAI, reducing manual effort and improving efficiency in candidate evaluation processes, Development included advanced data-mappings, pre-populating form fields with scanned data with complex validation logic, to ensure data validation.",
      "Contributed to FE development for successful introduction and integration of DocuSign as eSignature provider, streamlining contract management processes and enhancing overall workflow efficiency.",
    ],
  },
];

export const techIcons: TechIconsProps[] = [
  {
    source: "/reactjs.svg",
    alt: "reactjs",
  },
  {
    source: "/nextjs.svg",
    alt: "nextjs",
  },
  {
    source: "/javascript.svg",
    alt: "javascript",
  },
  {
    source: "/typescript.svg",
    alt: "typescript",
  },
  {
    source: "/css3.svg",
    alt: "css3",
  },
  {
    source: "/html5.svg",
    alt: "html5",
  },
  {
    source: "/nodeJs.svg",
    alt: "nodeJs",
  },
  {
    source: "/expressJs.svg",
    alt: "expressJs",
  },
  {
    source: "/reactQuery.svg",
    alt: "reactQuery",
  },
  {
    source: "/jest.svg",
    alt: "jest",
  },
  {
    source: "/tailwind.svg",
    alt: "tailwind",
  },
  {
    source: "/materialui.svg",
    alt: "materialui",
  },
  {
    source: "/aws.svg",
    alt: "aws",
  },
  {
    source: "/azure.svg",
    alt: "azure",
  },
  {
    source: "/docker.svg",
    alt: "docker",
  },
  {
    source: "/firebase.svg",
    alt: "firebase",
  },
  {
    source: "/mongodb.svg",
    alt: "mongodb",
  },
  {
    source: "/mysql.svg",
    alt: "mysql",
  },
  {
    source: "/postgresql.svg",
    alt: "postgresql",
  },
  {
    source: "/figma.svg",
    alt: "figma",
  },
  {
    source: "/fullstory.svg",
    alt: "fullstory",
  },
  {
    source: "/postman.svg",
    alt: "postman",
  },
  {
    source: "/android.svg",
    alt: "android",
  },
  {
    source: "/ios.svg",
    alt: "ios",
  },
  {
    source: "/vscode.svg",
    alt: "vscode",
  },
  {
    source: "/github.svg",
    alt: "github",
  },
];
