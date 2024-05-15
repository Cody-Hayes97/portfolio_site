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
    text: "Hello World, I'm Cody Hayes and I am a Senior Front-End Developer from Los Angeles, CA. I specialize in designing and developing scalable, reliable, full-scale modern web and mobile applications utilized by millions of users. I love to write quality, coherent and maintainable code. I consider myself to be an analytical thinker, problem solver, and solution-oriented person. I prioritize effective time management and take pride in producing high-quality work that surpasses expectations. I am dedicated to fulfilling commitments. Additionally, I am a collaborative team member with strong interpersonal communication skills that allow me to work effectively with others.",
  },
  {
    header: "Experience Summary",
    text: "More than six years of work experience developing full-stack, web, and mobile applications with a proven track record of working in client-facing web and mobile codebases including advanced features such as full-breadth search functionality, performance refactoring, onboarding, creation of component libraries, IoT SaaS integration, etc. that are used by hundreds of thousands of users every day. My work focuses on modern technologies like React, React Native, TypeScript, NextJS, Node, Express, OAuth, Microsoft Azure, GCP, AWS and many API integrations along with e2e testing tools like Playwright. I work with many databases including PostgreSQL, MySQL, MongoDB, and more. And I work with many design and development tools such as Git, BitBucket, GitHub, Trello, Slack, Figma, Azure App Services, etc.",
  },
];

export const projectDetails: ProjectDetailsProps[] = [
  {
    title: "Jobs Search Portal",
    description:
      "A comprehensive job search portal for traveling clinicians to search new jobs. clinicians can sort by shift type, location, specialization, job title etc. all including personalized search predictions",
    iconSrc: "mood-search.svg",
    id: 1,
    technologiesIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/reactQuery.svg",
      "/reactRouter.svg",
      "/redux.svg",
      "/reactHookForm.svg",
    ],
    projectImages: [
      "/projectScreenshots/jobSearch1.png",
      "/projectScreenshots/jobSearch2.png",
      "/projectScreenshots/jobSearch3.png",
    ],
  },
  {
    title: "Clinician Job Matching Preferences",
    description:
      "Job matching feature built with React in conjunction with AI and Machine Learning. Clinicians will be presented a 'questionnaire' that with auto-magically match them with relevant jobs",
    iconSrc: "/settings-2.svg",
    id: 2,
    technologiesIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/reactQuery.svg",
      "/reactRouter.svg",
      "/redux.svg",
      "/restApi.svg",
    ],
    projectImages: [
      "/projectScreenshots/jobPref1.png",
      "/projectScreenshots/jobPref2.png",
      "/projectScreenshots/jobPref3.png",
      "/projectScreenshots/jobPref4.png",
      "/projectScreenshots/jobPref5.png",
    ],
  },
  {
    title: "Component Library",
    description:
      "Shared component library for web and mobile apps built using on-brand colors, sizing, icons, etc. using React. Used across multiple cross-functional teams everyday.",
    iconSrc: "/library-minus.svg",
    id: 3,
    technologiesIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/reactQuery.svg",
      "/reactRouter.svg",
      "/redux.svg",
      "/storybook.svg",
    ],
    projectImages: [
      "/projectScreenshots/library1.png",
      "/projectScreenshots/library2.png",
      "/projectScreenshots/library3.png",
      "/projectScreenshots/library4.png",
      "/projectScreenshots/library5.png",
      "/projectScreenshots/library6.png",
      "/projectScreenshots/library7.png",
      "/projectScreenshots/library8.png",
      "/projectScreenshots/library9.png",
    ],
  },
  {
    title: "Athlete Deal Platform",
    description:
      "SaaS allowing users to make deals with pro and college level athletes similar to cameo. Users can book shoutouts, signings, videos, etc. complete with payments integration and video processing",
    iconSrc: "/moneybag.svg",
    id: 4,
    technologiesIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/redux.svg",
      "/nextjs.svg",
      "/tailwind.svg",
      "/restApi.svg",
    ],
    projectImages: [
      "/projectScreenshots/deal1.png",
      "/projectScreenshots/deal2.png",
      "/projectScreenshots/deal3.png",
      "/projectScreenshots/deal4.png",
      "/projectScreenshots/deal5.png",
      "/projectScreenshots/deal6.png",
      "/projectScreenshots/deal7.png",
      "/projectScreenshots/deal8.png",
    ],
  },
  {
    title: "Carbon Capture and Solar Energy Monitoring Dashboard",
    description:
      "Full-scale IoT monitoring application for commercial buildings to monitor carbon and energy usage. Allows clients to see their devices on a map and view usage data over various time periods",
    iconSrc: "/home-bolt.svg",
    id: 5,
    technologiesIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/postgresql.svg",
      "/restApi.svg",
    ],
    projectImages: [
      "/projectScreenshots/capture1.png",
      "/projectScreenshots/capture2.png",
      "/projectScreenshots/capture3.png",
      "/projectScreenshots/capture4.png",
      "/projectScreenshots/capture5.png",
      "/projectScreenshots/capture6.png",
      "/projectScreenshots/capture7.png",
      "/projectScreenshots/capture8.png",
      "/projectScreenshots/capture9.png",
    ],
  },
  {
    title: "Pizza Lovers Social Media App",
    description:
      "Social media application for pizza lovers. Users can search and sort for pizza restaurants in their location with real time mapbox geolocation integration, connect with friends, and organize meetups for fellow lovers of pizza!",
    iconSrc: "/pizza.svg",
    id: 6,
    technologiesIcons: [
      "/reactjs.svg",
      "/typescript.svg",
      "/redux.svg",
      "/nodejs.svg",
      "/postgresql.svg",
      "/reactRouter.svg",
    ],
    projectImages: [
      "/projectScreenshots/pizza1.png",
      "/projectScreenshots/pizza2.png",
      "/projectScreenshots/pizza3.png",
      "/projectScreenshots/pizza4.png",
      "/projectScreenshots/pizza5.png",
    ],
  },
];

export const experienceDetails: ExperienceDetailsProps[] = [
  {
    years: "2023 - 2024",
    jobTitle: "Senior Front-End Engineer | Mobile Engineer",
    company: "Medical Solutions, LLC",
    experienceItems: [
      "Utilized React and React Native to build and maintain new clinician user search and sorting features from the ground up, vastly improving ease of applications for users and boosting app traffic by 35% more than before.",
      "Improved median response time of API calls and load times by 50% by identifying bottlenecks in legacy API and refactoring dozens of inefficient React components throughout the web and mobile applications.",
      "Spearheaded new Clinician Job Matching feature that incorporated Data science and AI in conjunction with React Native to automatically connect users with preferred jobs, boosting company revenue by 1.5x quarterly expectation.",
      "Led teams of 10-15 engineers in scrum ceremonies, feature release flow, and establishing best coding practices, doubling team efficiency and speed of task completion.",
    ],
  },
  {
    years: "2022 - 2023",
    jobTitle: "Front-End Engineer",
    company: "Opendorse",
    experienceItems: [
      "Leveraged TypeScript, React, and NextJS to build numerous features that enhanced the Opendorse web application such as user home page, full search/sort/filter functionality, and payment processing. Currently being utilized by upwards of 100,000 users.",
      "Developed high-quality modular React code that leveraged user action logging with tools such as Azure AppInsights and FullStory, along with e2e testing using tools such as Cypress and Jest. Expanding code coverage from 60% to 90% throughout the codebase.",
      "Introduced Google Captcha v3 from the ground up alongside NextJS to greatly improve security and authorization functionality of the application and reduce likelihood of bot attacks by more than 3x.",
      "Added and maintained various private NPM packages such as an expansive proprietary component library, internally used and shared across different platforms and a dozen teams.",
    ],
  },
  {
    years: "2020 - 2022",
    jobTitle: "Full-Stack Web Developer",
    company: "Verify Energy",
    experienceItems: [
      "Applied JavaScript, Node, and React to build highly responsive user interfaces and widgets for energy saving and solar device monitoring systems, tripling the ease of operation for more than a dozen commercial buildings.",
      "Researched and incorporated new workflows to the team that leveled up and modernized development processes such as automated CI/CD notification systems and GCP build integration.",
      "Integrated NodeJS and Google Cloud Computing in conjunction with React to feed data from IoT hardware to the user facing web app and display real-time data to the user in the form of high-speed graph and chart components.",
    ],
  },
  {
    years: "2018 - 2020",
    jobTitle: "Development Team Lead",
    company: "Bloomtech a.k.a. Lambda School",
    experienceItems: [
      "Studied Full Stack Web Development throughout a year and a half long comprehensive course involving both back-end and front-end technologies. After a year of study here, I was given the opportunity to be hired Full-time as a Team Lead/Mentor for new students just starting the program.",
      "As a Mentor at Lambda School, I helped students navigate their coding journeys by providing guidance, support and feedback on their projects. I honed my ability to break down complex concepts into simple terms, and facilitated a positive and inclusive learning environment for students from diverse backgrounds. My experience at Lambda School has helped me develop strong communication, leadership and technical skills. I am proud to have contributed to the success of many students, as they transitioned from beginners to confident coders.",
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
