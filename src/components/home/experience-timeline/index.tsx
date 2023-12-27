import React from "react";
import { Experience } from "../../../../sanity/lib/types/experience";
import { formatMMYY } from "@/lib/utils";

interface Props {
  experience: Experience[];
}

function ExperienceTimeline({ experience }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-10">
      <h2 className="text-zinc-800 leading-snug text-4xl text-center underline mb-5 font-semibold">
        Experience
      </h2>
      <ol className="relative border-s border-zinc-200">
        {experience.map((exp, idx) => (
          <li
            key={exp._id}
            className={`${idx == experience.length ? "" : "mb-10"}  ms-4`}
          >
            <div className="absolute w-3 h-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-zinc-50 antialiased rounded-full mt-1.5 -start-[6.3px]"></div>
            <time className="mb-1 text-sm font-normal leading-none text-zinc-600">
              {formatMMYY(exp.startDate)}
            </time>
            <h3 className="text-lg font-semibold text-zinc-900">
              {`${exp.position} at ${exp.company}, ${exp.location}`}
            </h3>
            <p className="mb-4 text-base font-normal text-zinc-500">
              {exp.summary}
            </p>
          </li>
        ))}

        {/* <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black border-zinc-50 antialiased rounded-full mt-1.5 -start-1.5 border"></div>
          <time className="mb-1 text-sm font-normal leading-none text-zinc-600">
            April 2023
          </time>
          <h3 className="text-lg font-semibold text-zinc-900">
            Frontend Engineering Intern at Piton Technology, Eskişehir
          </h3>
          <p className="text-base font-normal text-zinc-500">
            During my internship, I advanced a Smart City Project by improving
            modules using Next.js and TailwindCSS, boosting performance and user
            experience. I implemented Chart.js and Leaflet for data
            visualization and mapping, vital for urban monitoring. My work with
            GraphQL and REST APIs led to a more dynamic UI, enhancing my skills
            in developing urban tech integrations.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black border-zinc-50 antialiased rounded-full mt-1.5 -start-1.5 border"></div>
          <time className="mb-1 text-sm font-normal leading-none text-zinc-600">
            April 2022
          </time>
          <h3 className="text-lg font-semibold text-zinc-900">
            Co-founder/Web Developer at quuix. formerly BeeDigital, Remote
          </h3>
          <p className="text-base font-normal text-zinc-500">
            As a freelancer, I&apos;ve delivered over 10 unique web projects
            using Next.js and TailwindCSS, combining shadcn/ui&apos;s design
            with Sanity CMS for captivating, functional sites. I&apos;ve driven
            project success using Google and Vercel Analytics for informed
            decision-making.
          </p>
        </li> */}
      </ol>
    </div>
  );
}

export default ExperienceTimeline;
