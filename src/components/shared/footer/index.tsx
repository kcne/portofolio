import Link from 'next/link'
import React from 'react'
import { GithubOriginal, LinkedinOriginal } from 'devicons-react';

interface Props {}

function Footer({}: Props) {
  return (
    <footer className="bg-zinc-50/50 backdrop-blur-sm rounded-lg shadow m-4 z-10 mt-32">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <div className='flex justify-start items-center gap-7'>
    <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">kcne.</span>
                  <h1 className='text-2xl text-zinc-950'>kcne.</h1>
    </Link>
        <div className='flex justify-start gap-1.5'>
            <Link target="_blank" href='https://github.com/kcne'>
                <GithubOriginal size={20}/>
            </Link>
            <Link target="_blank" href='https://www.linkedin.com/in/kcne/'>
                <LinkedinOriginal size={20}/>
            </Link> 
        </div>
    </div>

    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-zinc-500 sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
  )
}

export default Footer