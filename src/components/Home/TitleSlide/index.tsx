'use client'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import { Slider } from '../../SwiperSlider'

const settings: SwiperProps = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
}

export function TitleSlide() {
  return (
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
  )
}
