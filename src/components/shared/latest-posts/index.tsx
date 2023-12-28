"use client";
import React from "react";
import useSWR from "swr";
import { client, fetcher } from "../../../../sanity/lib/client";
import { postsQuery } from "../../../../sanity/lib/queries";
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
import { Button } from "../../ui/button";
import Link from "next/link";

const builder = imageUrlBuilder(client);

interface Props {}

function LatestPosts({}: Props) {
  const { data: posts, error } = useSWR<Post[]>(postsQuery, fetcher);
  return (
    <>
      <div className="mt-10 flex max-w-5xl gap-5 justify-center mx-auto flex-wrap">
        {posts?.map((post) => (
          <Card
            key={post._id}
            className="max-w-[300px] h-[500px] bg-zinc-100/50 relative"
          >
            <CardHeader className="p-5 pb-3">
              <Image
                className="object-center rounded-md"
                src={builder.image(post.mainImage).width(600).height(400).url()}
                alt={post?.mainImage?.alt}
                width={600}
                height={400}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg leading-tight hover:underline hover:cursor-pointer">
                {post.title}
              </CardTitle>
              <CardDescription className="mt-2">
                {post?.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post && post?.slug?.current}`}>
                <Button variant="outline" className="absolute bottom-3">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

export default LatestPosts;
