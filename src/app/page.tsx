import AboutSection from "@/components/aboutSection";
import ExperienceSection from "@/components/experienceSection";
import ProjectsSection from "@/components/projectsSection";
import SkillsSection from "@/components/skillsSection";
import { aboutText } from "@/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-between mx-auto p-2 max-w-screen-xl">
      <div className="2xl:container md:mx-auto p-8 flex">
        <div className="grid md:grid-cols-9 grid-cols-6">
          <span>
            <div>
              <Image
                src="/myPhoto.png"
                width={256}
                height={215}
                alt="professional photo"
                className="w-32 rounded ring ring-primary ring-offset-base-100 ring-offset-2 mr-4 hidden sm:block"
              />
              <Image
                src="/myPhoto.png"
                width={156}
                height={115}
                alt="professional photo"
                className="w-32 rounded ring ring-primary ring-offset-base-100 ring-offset-2 mr-4 block sm:hidden"
              />
            </div>
          </span>
          <div className="col-span-5 px-4">
            <h1 className="sm:text-3xl text-xl font-bold">Cody Hayes</h1>
            <p className="sm:text-lg text-sm font-bold">Los Angeles, CA</p>
            <span className="sm:text-base text-xs font-light">
              Full Stack Developer | Front-End Web Developer | Mobile Developer
            </span>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-end justify-around gap-5 col-start-6 self-start">
          <a href="mailto:hayescody97@gmail.com">
            <Image
              alt="my email"
              width={30}
              height={30}
              className="cursor-pointer opacity-100 hover:opacity-75 min-w-max"
              src="/email.svg"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/cody-hayes-b34722191/"
          >
            <Image
              alt="my email"
              width={30}
              height={30}
              className="cursor-pointer opacity-100 hover:opacity-75 min-w-max"
              src="/linkedin.svg"
            />
          </a>
          <a target="_blank" href="https://github.com/Cody-Hayes97">
            <Image
              alt="my email"
              width={30}
              height={30}
              className="cursor-pointer opacity-100 hover:opacity-75 min-w-max"
              src="/github.svg"
            />
          </a>
        </div>
      </div>
      <div className="mt-2"></div>
      <div className="2xl:container md:mx-auto pr-8 pl-8">
        {aboutText.map((item) => (
          <AboutSection header={item.header} text={item.text} />
        ))}
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
