"use client";
import React from "react";
import useSWR from "swr";
import { client, customFetcher, fetcher } from "../../../../sanity/lib/client";
import { getOtherPosts, postsQuery } from "../../../../sanity/lib/queries";
import { Post } from "../../../../sanity/lib/types/post";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { buttonVariants } from "../../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const builder = imageUrlBuilder(client);

interface Props {
  slug: string;
}

function LatestPostsHorizontal({ slug }: Props) {
  const { data: posts } = useSWR<Post[]>(
    [getOtherPosts, { slug }],
    // @ts-ignore
    customFetcher
  );
  return (
    <>
      <h2 className="text-zinc-800 leading-snug text-4xl text-center underline mb-5 font-semibold mt-10">
        Latest Posts
      </h2>
      <div className="mt-10 flex flex-col max-w-4xl gap-5 justify-center mx-5 lg:mx-auto">
        {posts &&
          posts?.map((post) => (
            <Card
              key={post._id}
              className=" backdrop-blur-md bg-zinc-50 h-[400px] sm:h-[200px] md:h-[150px]"
            >
              <CardContent className="grid grid-rows-2 gap-y-5 grid-cols-1 sm:grid-rows-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_3fr]  h-full p-5">
                <div className="h-full w-full  flex items-center justify-center sm:border-r md:pr-4 border-zinc-200">
                  <Image
                    className="object-cover obect-center overflow-none max-w-full max-h-full rounded-md mx-auto"
                    src={builder
                      .image(post.mainImage)
                      .width(500)
                      .format("png")
                      .url()}
                    alt={post?.mainImage?.alt}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="ml-4">
                  <Link href={`/blog/${post?.slug.current}`}>
                    <CardTitle className="text-zinc-600 font-semibold text-lg leading-tight hover:underline hover:cursor">
                      {post.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-zinc-500 mt-1.5 text-sm leading-tight">
                    {post.description}
                  </CardDescription>
                  <Link
                    href={`/blog/${post?.slug.current}`}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-4 md:mt-1.5"
                    )}
                  >
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}

export default LatestPostsHorizontal;
