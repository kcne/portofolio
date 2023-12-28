"use client";
import { Project } from "../../../../sanity/lib/types/project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
}

const builder = imageUrlBuilder(client);

function ProjectCard({ project }: Props) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Card
      key={project._id}
      className="bg-zinc-100/50 backdrop-blur-md h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader>
        <CardTitle className="text-lg hover:cursor-pointer hover:underline">
          <Link href={project.url} target="_blank">
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription>{project.company}</CardDescription>
      </CardHeader>
      <CardContent>
        {isHovering ? (
          <Image
            src={builder.image(project.gif).url()}
            className="rounded-md max-w-full"
            alt="gif"
            width={200}
            height={200}
            unoptimized={true}
            layout={"responsive"}
          ></Image>
        ) : (
          <Image
            src={builder.image(project.image).url()}
            className="rounded-md max-w-full"
            alt="site image"
            width={400}
            height={200}
          />
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <CardDescription>{project.description}</CardDescription>
        <Link
          href={`/projects/${project?.slug.current}`}
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
