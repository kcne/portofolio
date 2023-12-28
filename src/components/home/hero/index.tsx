import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Badge, badgeVariants } from "../../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";
import { UserInfo } from "../../../../sanity/lib/types/userInfo";

interface Props {
  userInfo: UserInfo;
}
export default function Hero({ userInfo }: Props) {
  console.log("userInfo", userInfo);
  return (
    <div className="mx-auto max-w-5xl pt-10 md:pt-32 pb-16">
      <div className="w-full grid grid-cols-1 grid-rows-2 md:grid-cols-[2fr_1fr] md:grid-rows-1 gap-x-5">
        <div className="md:order-1 order-2">
          <div className="flex justify-start items-center gap-4">
            <Badge className={cn(badgeVariants({ variant: "default" }))}>
              {userInfo && userInfo.title}
            </Badge>
            <div className="flex justify-start gap-2">
              {userInfo.githubUrl && (
                <Link target="_blank" href={userInfo.githubUrl}>
                  <Github size={25} />
                </Link>
              )}
              {userInfo.linkedInUrl && (
                <Link target="_blank" href={userInfo.linkedInUrl}>
                  <Linkedin size={25} />
                </Link>
              )}
            </div>
          </div>
          <p className="text-6xl leading-tight tracking-tighter">
            {userInfo && `${userInfo?.name} ${userInfo?.surname}`}
          </p>
          <p className="text-zinc-600 mt-5">{userInfo && userInfo.summary}</p>

          <div className="flex justify-center md:justify-start gap-3 mt-10">
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "default" }),
                "flex justify-center items-center"
              )}
            >
              See Projects <ArrowRight className="ml-1" size={15} />
            </Link>
            <Link
              href={userInfo?.cv.url ?? "#"}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "flex justify-center items-center"
              )}
            >
              Download CV{" "}
            </Link>
          </div>
        </div>
        <div className="md:order-2 order-1 pb-10 md:pb-0 flex justify-center sm:justify-start md:justify-end">
          <img
            src="/hero-image.webp?q=70"
            alt="image"
            loading="eager"
            fetchPriority="high"
            className="rounded-xl w-full sm:w-auto"
            width="200"
            height="400"
            srcSet={`/hero-image.webp?q=70 400, 
                        /hero-image.webp?w=200?q=70 200w,
                        /hero-image.webp?w=400?q=70 400w, 
                        /hero-image.webp?w=800?q=70 400w, 
                        /hero-image.webp?w=1024?q=70 400w`}
          />
        </div>
      </div>
    </div>
  );
}
