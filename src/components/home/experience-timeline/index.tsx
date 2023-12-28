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
      </ol>
    </div>
  );
}

export default ExperienceTimeline;
