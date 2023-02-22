import Image from 'next/image'
import { Button } from '@/components/Layouts/Button'
import { Services } from '@/components/Layouts/Services'
import { Cases } from './components/Home/Cases'
import { TitleSlide } from './components/Home/TitleSlide'
import bgHero from '../../assets/home/bg-hero.jpg'
import Collaborators from '../../assets/home/collaborators.png'
import { fetchCases } from '@/lib/wordpress'

export default async function Home() {
  const cases = await fetchCases()

  return (
    <main>
      <section className="lg:min-h-screen min-h-[80vh] relative z-50 md:px-8 px-4">
        <Image src={bgHero} fill alt="" className="z-[-1] object-cover" />
        <div className="lg:min-h-[85vh] min-h-[65vh] bg-gray-700 bg-opacity-90 py-4 lg:px-24 px-3 bg-black-op-09  text-red-600 text-center flex justify-center items-center container 3xl:max-w-[1736px] xl:text-8xl lg:text-7xl md:text-6xl text-4xl uppercase font-extrabold mx-auto">
          <TitleSlide />
        </div>
      </section>
      <Services />
      <section className="relative lg:min-h-screen min-h-[70vh] flex flex-col justify-center items-center">
        <Image
          src={Collaborators}
          alt=""
          fill
          className="object-cover z-[-1]"
          quality={100}
        />
        <h2 className="text-white uppercase lg:text-9xl text-5xl text-center lg:mb-36 mb-10">
          Isso Muda Tudo
        </h2>
        <Button
          background="gray-700"
          color="white"
          description="Conheça a Ousar"
          endpoint="/"
        />
      </section>
      <Cases cases={cases} />
    </main>
  )
}
