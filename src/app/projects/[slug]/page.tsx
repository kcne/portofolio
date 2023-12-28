import Navbar from "@/components/shared/navbar";
import React from "react";
import { getOtherProjects, getProject } from "../../../../sanity/lib/queries";
import { fetcher } from "../../../../sanity/lib/client";
import { Project } from "../../../../sanity/lib/types/project";
import { PortableText } from "@portabletext/react";
import { Badge } from "@/components/ui/badge";
import ProjectStack from "@/components/projects/project-stack";
import ImageSwiper from "@/components/projects/image-swiper";
import ProjectCard from "@/components/projects/project-card";

export const revalidate = 1; // revalidate at most every hour

interface Props {
  params: {
    slug: string;
  };
}

async function Projects({ params }: Props) {
  const { slug } = params;
  const project: Project = await fetcher(getProject, { slug });
  const otherProjects: Project[] = await fetcher(getOtherProjects, { slug });

  return (
    <div className="w-full min-h-page  bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div className="w-full h-full pt-20 min-h-screen pb-5">
        <div className="max-w-6xl mx-auto bg-white/50 text-zinc-800 shadow-xl rounded-xl  mt-10  p-5 gap-5">
          <Badge variant="secondary">{project?.company}</Badge>
          <h2 className="font-semibold text-zinc-800 text-4xl my-2">
            {project?.title}
          </h2>
          {project.stack && <ProjectStack stack={project?.stack} />}
          <p className="mt-5 mb-5 text-lg text-zinc-600">
            {project?.description}
          </p>
          {project.gallery && <ImageSwiper images={project?.gallery} />}

          <div className="prose prose-lg md:prose-xl mt-10 zinc-800">
            <PortableText value={project?.body} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto bg-white/50 text-zinc-800 shadow-xl rounded-xl  mt-10 p-5">
          <h1 className="text-3xl mr-2 mt-1.5 font-semibold">Other Projects</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  grid-rows-auto gap-5 mt-8">
            {otherProjects &&
              otherProjects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
