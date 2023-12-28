"use client";
import React from "react";
import useSWR from "swr";
import { getProjects } from "../../../sanity/lib/queries";
import { client, fetcher } from "../../../sanity/lib/client";
import { Project } from "../../../sanity/lib/types/project";
import ProjectCard from "@/components/projects/project-card";

interface Props {}

function Projects({}: Props) {
  const { data: projects } = useSWR<Project[]>(getProjects, fetcher);
  return (
    <div className="w-full h-full pt-20 min-h-screen">
      <div className="max-w-5xl mx-auto shadow-xl rounded-xl  mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  grid-rows-auto p-5 gap-5">
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
      </div>
    </div>
  );
}

export default Projects;
