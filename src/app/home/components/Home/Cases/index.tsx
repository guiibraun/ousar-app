'use client'
import Image from 'next/image'
import { Slider } from '@/components/SwiperSlider'
import { SwiperProps, SwiperSlide } from 'swiper/react'

interface CaseProps {
  cases: {
    id: number
    title: string
    content: string
    featuredImage: string
    tags: string[]
  }[]
}

export function Cases({ cases }: CaseProps) {
  const settings: SwiperProps = {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.next-button-custom',
      prevEl: '.prev-button-custom',
    },
    effect: 'fade',
  }

  return (
    <div>
      <Slider settings={settings}>
        {cases.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="min-h-screen w-full relative">
                <Image
                  src={item.featuredImage}
                  fill
                  alt=""
                  className="object-cover z-[-1]"
                />

                <article className="bg-white z-10 absolute bottom-[10%] right-[10%] min-h-[241px] max-w-[444px] w-full flex flex-col justify-center items-center">
                  <h3 className="font-content font-black text-3xl">
                    {item.title}
                  </h3>
                </article>
              </div>
            </SwiperSlide>
          )
        })}
      </Slider>
    </div>
  )
}
