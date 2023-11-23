'use client'
import LastPost from '@/components/blog/latest-post'
import Navbar from '@/components/shared/navbar'
import React from 'react'
import useSWR from 'swr';
import { fetcher } from '../../../sanity/lib/client';
import { latestPostQuery } from '../../../sanity/lib/queries';
import LatestPosts from '@/components/shared/latest-posts';

interface Props {}

function Blog({}: Props) {
    const {data:lastPost} = useSWR(latestPostQuery,fetcher)

  return (
    <main className='w-full min-h-screen bg-zinc-100 pb-10'>
    <Navbar className='bg-zinc-100/60'/>
    <LastPost post={lastPost}/>
    <LatestPosts />
    </main>
  )
}

export default Blog