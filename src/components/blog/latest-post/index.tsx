// ./nextjs-app/app/_components/Posts.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client, fetcher } from "../../../../sanity/lib/client";
import { Urbanist } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import useSWR from "swr";
import { latestPostQuery } from "../../../../sanity/lib/queries";

const builder = imageUrlBuilder(client);
const urbanist = Urbanist({ subsets: ["latin"] });

export default function LastPost() {
  const { data: post } = useSWR(latestPostQuery, fetcher);
  return post ? (
    <div className="w-full h-fit mt-20">
      {post?.mainImage ? (
        <div className="w-full h-[500px] relative">
          <Image
            className="object-cover object-center md:object-cover"
            src={builder.image(post.mainImage).width(1500).height(500).url()}
            fill={true}
            alt={post?.mainImage?.alt ?? "image"}
          />
        </div>
      ) : null}
      <div className={`max-w-5xl px-5 lg:mx-auto ${urbanist.className} pt-10`}>
        <Badge variant="outline">{post?.category ?? "Latest Post"}</Badge>
        <h3 className="font-[700] text-[36px] mt-1.5">
          {post?.title ?? "Untitled"}
        </h3>
        <p className="text-[#939394] text-[20px] mb-5">{post?.description}</p>
        <Link
          href={`/blog/${post?.slug.current}`}
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Read More
        </Link>
        <div className="mt-10 border-b border-[#D0D5DD]"></div>
      </div>
    </div>
  ) : null;
}
