import Hero from '@/components/home/hero'
import Footer from '@/components/shared/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen ">
        <Hero/>
        <Footer/>
    </main>
  )
}
