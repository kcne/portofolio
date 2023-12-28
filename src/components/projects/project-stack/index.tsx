"use client";

import { Technology } from "../../../../sanity/lib/types/technology";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../sanity/lib/client";

interface Props {
  stack: Technology[];
}

const builder = imageUrlBuilder(client);

function ProjectStack({ stack }: Props) {
  return (
    <div className="flex justify-start gap-3 items-center h-fit my-5">
      {stack &&
        stack.map((t) => (
          <TooltipProvider key={t._id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  key={t._id}
                  className="object-contain overflow-none max-w-[40px]"
                  src={builder.image(t.image).width(100).format("png").url()}
                  alt={t?.image?.alt}
                  width={100}
                  height={100}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{t.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
    </div>
  );
}

export default ProjectStack;
