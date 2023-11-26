import LastPost from '@/components/blog/latest-post'
import Navbar from '@/components/shared/navbar'
import React from 'react'
import LatestPosts from '@/components/shared/latest-posts';
import Footer from '@/components/shared/footer';

interface Props {}

function Blog({}: Props) {
    

  return (
    <main className='w-full min-h-screen bg-zinc-100'>
    <Navbar className='bg-zinc-100/60'/>
    <LastPost/>
    <LatestPosts />
    <Footer/>
    </main>
  )
}

export default Blog