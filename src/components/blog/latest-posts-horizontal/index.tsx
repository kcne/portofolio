'use client'
import React from 'react'
import useSWR from 'swr';
import { client, fetcher } from '../../../../sanity/lib/client';
import { postsQuery } from '../../../../sanity/lib/queries';
import { Post } from '../../../../sanity/lib/types/post';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../ui/card';
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image'
import { Button } from '../../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const builder = imageUrlBuilder(client);

interface Props {}

function LatestPostsHorizontal({}: Props) {
    const { data:posts, error } = useSWR<Post[]>(postsQuery,fetcher);
    console.log(posts,'posts');
  return (
    <>
    <h2 className='text-zinc-800 leading-snug text-4xl text-center underline mb-5 font-semibold mt-10'>Latest Posts</h2>
    <div className='mt-10 flex flex-col max-w-5xl gap-5 justify-center mx-5 lg:mx-auto'>
        {
            posts?.map(post =>
                    <Card key={post._id} className={cn('w-full md:h-[200px] bg-zinc-100/50 relative overflow-hidden')}>

                    <CardContent className='flex md:flex-row flex-col justify-start max-h-full gap-5 p-5'>

                            <Image
                            className="object-center object-cover md:h-[170px] md:w-[300px] rounded-md mx-auto md:mx-0"
                            src={builder.image(post.mainImage).width(600).height(300).url()}
                            alt={post?.mainImage?.alt}
                            height={200}
                            width={400}
                            />

                        <div>
                        <CardTitle className='text-lg leading-tight hover:underline hover:cursor-pointer'>{post.title}</CardTitle>
                        <CardDescription className='mt-2 mb-10 md:mb-0'>{post?.description}</CardDescription>
                        <Link href={`/blog/${post && post?.slug?.current}`}>
                                <Button variant="outline" className='absolute bottom-3'>Read More</Button>
                        </Link>
                        </div>
                    </CardContent>
                    </Card>
                )
        }
    </div>
    </>
  )
}

export default LatestPostsHorizontal



