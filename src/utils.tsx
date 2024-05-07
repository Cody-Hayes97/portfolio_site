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
  },
  {
    title: "Traveler Onboarding Portal",
    description:
      "An easy to use client portal for submitting all the necessary documents to land on a job",
  },
  {
    title: "Jobs Search Portal",
    description:
      "A UI/UX driven job search portal for travel nurses to search new jobs, with personalized search predictions",
  },
  {
    title: "Referral & Rewards Platform",
    description:
      "A state-of-the-art rewards platform, to view and track your referral bonus and reward points for completed tasks.",
  },
  {
    title: "Component Library",
    description:
      "Medical Solutions based shared component library for react built using its own colors and branding for react.",
  },
  {
    title: "PADI Custom Admin Portal",
    description:
      "A modern custom built document library management system for recruiters and carrier consultant",
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
