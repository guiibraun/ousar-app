import { TitleSlide } from '@/components/Home/TitleSlide'
import { Services } from '@/components/Layouts/Services'
import Image from 'next/image'
import bgHero from '../assets/home/bg-hero.jpg'

export default async function Home() {
  return (
    <main className="min-h-screen">
      <section className="min-h-screen relative z-50 md:px-8 px-4">
        <Image src={bgHero} fill alt="" className="z-[-1] object-cover" />
        <div className="min-h-[75vh] bg-gray-700 bg-opacity-90 py-4 lg:px-24 px-3 bg-black-op-09  text-red-600 text-center flex justify-center items-center container 3xl:max-w-[1736px] xl:text-8xl lg:text-7xl md:text-6xl text-5xl uppercase font-extrabold mx-auto">
          <TitleSlide />
        </div>
      </section>
      <Services />
    </main>
  )
}
