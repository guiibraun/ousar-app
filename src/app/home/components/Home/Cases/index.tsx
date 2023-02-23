'use client'
import Image from 'next/image'
import { Slider } from '@/components/SwiperSlider'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { Button } from '@/components/Layouts/Button'

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
    <Slider settings={settings}>
      {cases.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="min-h-screen w-full">
              <div className="flex flex-col justify-center items-center overflow-hidden">
                <article className="py-4 px-8 bg-white z-10 absolute bottom-[10%] right-[10%] min-h-[241px] max-w-[400px] w-full flex flex-col justify-center items-center gap-4">
                  <div>
                    <button
                      className="prev-button-custom"
                      title="Previous case"
                    >
                      <CaretLeft size={40} weight="thin" />
                    </button>

                    <button className="next-button-custom" title="Next case">
                      <CaretRight size={40} weight="thin" />
                    </button>
                  </div>
                  <div className="flex justify-center items-center flex-col gap-4">
                    <h3 className="font-content font-black text-3xl">
                      {item.title}
                    </h3>
                    <span className="text-sm text-center">
                      {item.tags.join(', ')}
                    </span>
                  </div>
                  <div className="absolute bottom-[-2rem]">
                    <Button
                      background="gray-700"
                      color="white"
                      description="Ver Cases"
                      endpoint="/cases"
                    />
                  </div>
                </article>
              </div>
              <Image
                src={item.featuredImage}
                fill
                alt=""
                className="object-cover z-[-1] min-h-full"
              />
            </div>
          </SwiperSlide>
        )
      })}
    </Slider>
  )
}
