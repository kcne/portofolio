'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Badge, badgeVariants } from '../../ui/badge'
import { cn } from '@/lib/utils'

// tech stack
import { LinkedinOriginal, GithubOriginal} from 'devicons-react';
import Link from 'next/link'
import { Button, buttonVariants } from '../../ui/button'
import Navbar from '../../shared/navbar'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <Navbar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-200 to-amber-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl pt-10 md:pt-32 pb-16">
            <div className='w-full grid grid-cols-1 grid-rows-2 md:grid-cols-[2fr_1fr] md:grid-rows-1 gap-x-5'>
                <div className='md:order-1 order-2'>
                    {/* <h1 className='text-4xl font-semibold leading-tight tracking-tighter'>Frontend Developer</h1> */}
                    <div className='flex justify-start items-center gap-4'>
                    <Badge className={cn(badgeVariants({variant:'default'}))}>Web Developer</Badge>
                        <div className='flex justify-start gap-2'>
                            <Link target="_blank" href='https://github.com/kcne'>
                                <GithubOriginal size={25}/>
                            </Link>
                            <Link target="_blank" href='https://www.linkedin.com/in/kcne/'>
                                <LinkedinOriginal size={25}/>
                            </Link>
                        </div>
                    </div>
                    <p className='text-6xl leading-tight tracking-tighter'>Emin Kocan</p>
                    <p className='text-zinc-600 mt-5'>As a Frontend Engineer at PITON Technology, I design and develop robust, user-friendly web applications for various clients and domains, using cutting-edge technologies such as Nextjs, Material-UI, Sanity, GraphQL, and Tailwind CSS. I work with a diverse and talented team of engineers, designers, and project managers, contributing to the delivery of high-quality products and services that meet the needs and expectations of our customers and stakeholders.</p>

                    <div className='flex justify-center md:justify-start gap-3 mt-10'>
                    <Link href='/projects' className={cn(buttonVariants({variant:'default'}),'flex justify-center items-center')}>See Projects <ArrowRight className='ml-1' size={15}/></Link>
                    <Link href="https://cdn.sanity.io/files/6k7pyniy/production/c72378fdf969fdd0c6842f654ec94316bfaed14c.pdf" target='_blank' className={cn(buttonVariants({variant:'secondary'}),'flex justify-center items-center')}>Download CV </Link>
                    </div>
                </div>
                <div className='md:order-2 order-1 pb-10 md:pb-0 flex justify-center sm:justify-start md:justify-end'>
                    <Image src='/hero-image.jpg' alt="image" className='rounded-xl w-full sm:w-auto' width={300} height={600}/>
                </div>
            </div>
        </div>

        <div className='max-w-5xl mx-auto '>
            <h2 className='text-zinc-800 leading-snug text-4xl text-center underline mb-5 font-semibold'>Experience</h2>
            <ol className="relative border-s border-zinc-200">                  
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-zinc-50 antialiased rounded-full mt-1.5 -start-[6.3px]"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-zinc-600">July 2023</time>
                    <h3 className="text-lg font-semibold text-zinc-900">Frontend Engineer at Piton Technology, Eskişehir</h3>
                    <p className="mb-4 text-base font-normal text-zinc-500">As a lead front-end developer for ALFA and UBS(Kocaeli), I improved user interfaces and met over 95% of our sprint goals, showcasing strong project management skills. I specialized in technologies like MaterialUI and React Hook Form, enhancing our web applications scalability. This expertise advanced our company&apos;s market standing and my personal growth as a developer and mentor.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black border-zinc-50 antialiased rounded-full mt-1.5 -start-1.5 border"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-zinc-600">April 2023</time>
                    <h3 className="text-lg font-semibold text-zinc-900">Frontend Engineering Intern at Piton Technology, Eskişehir</h3>
                    <p className="text-base font-normal text-zinc-500">During my internship, I advanced a Smart City Project by improving modules using Next.js and TailwindCSS, boosting performance and user experience. I implemented Chart.js and Leaflet for data visualization and mapping, vital for urban monitoring. My work with GraphQL and REST APIs led to a more dynamic UI, enhancing my skills in developing urban tech integrations.</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gradient-to-r from-gray-700 via-gray-900 to-black border-zinc-50 antialiased rounded-full mt-1.5 -start-1.5 border"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-zinc-600">April 2022</time>
                    <h3 className="text-lg font-semibold text-zinc-900">Co-founder/Web Developer at quuix. formerly BeeDigital, Remote</h3>
                    <p className="text-base font-normal text-zinc-500">As a freelancer, I&apos;ve delivered over 10 unique web projects using Next.js and TailwindCSS, combining shadcn/ui&apos;s design with Sanity CMS for captivating, functional sites. I&apos;ve driven project success using Google and Vercel Analytics for informed decision-making.</p>
                </li>
            </ol>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-200 to-amber-500  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
