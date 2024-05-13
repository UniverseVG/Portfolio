import React from "react";
import { experienceList } from "@/utils/experienceList";
import SlideUp from "@/utils/SlideUp";

const Experience = () => {
  return (
    <section id="Experience" className="w-9/12 mx-auto pt-12 pb-10">
      <SlideUp>
        <h3 className="text-5xl py-10 font-semibold text-center">
          <span className="border-b-4 border-primary-main">My Experience</span>
        </h3>

        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-16">
          {experienceList.map((exp, idx) => (
            <React.Fragment key={idx}>
              <ExperienceCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === experienceList.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SlideUp>
    </section>
  );
};

interface ExperienceCardProps {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  desc,
  year,
  company,
  companyLink,
}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500 hover:underline">
        {company}
      </a>
      <p className="text-gray-600">{year}</p>
      <p className="text-gray-700 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

export default Experience;
