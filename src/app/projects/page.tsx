'use client'
import Navbar from '@/components/shared/navbar'
import React from 'react'
import useSWR from 'swr'
import { getProjects } from '../../../sanity/lib/queries'
import { client, fetcher } from '../../../sanity/lib/client'
import { Project } from '../../../sanity/lib/types/project'
import imageUrlBuilder from '@sanity/image-url';
import ProjectCard from '@/components/projects/project-card'
import Footer from '@/components/shared/footer'


interface Props {}
const builder = imageUrlBuilder(client);

function Projects({}: Props) {
    const { data:projects, isLoading } = useSWR<Project[]>(getProjects,fetcher);
  return (
    <div className='w-full min-h-page  bg-gradient-to-r from-rose-100 to-teal-100 pb-5'>
        <Navbar/>
        <div className='w-full h-full pt-20 min-h-screen'>
            <div className='max-w-5xl mx-auto shadow-xl rounded-xl  mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  grid-rows-auto p-5 gap-5'>
                {
                    projects && 
                    projects.map(project => (
                        <ProjectCard key={project._id} project={project}/>
                    ))
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects