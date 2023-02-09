'use client'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import { Slider } from '../../SwiperSlider'

const settings: SwiperProps = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
}

export function HomeSlide() {
  return (
    <div className="min-h-screen relative z-50">
      <div className="min-h-[75vh] py-4 lg:px-24 px-3 mx-auto bg-black-op-09 max-w-full text-red-700 text-center flex justify-center items-center xl:w-[1250px] 3xl:w-[1600px] xl:text-8xl text-5xl uppercase font-extrabold font-heading">
        <Slider settings={settings}>
          <SwiperSlide>
            <h2>
              Criamos propósito
              <br /> para marcas inquietas.
            </h2>
          </SwiperSlide>
          <SwiperSlide>
            <h2>
              Criamos propósito
              <br /> para marcas inquietas.
            </h2>
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  )
}
