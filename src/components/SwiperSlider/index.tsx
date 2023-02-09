import { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

interface SliderProps {
  children: ReactNode
  settings: SwiperProps
}

export function Slider({ children, settings }: SliderProps) {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, A11y, Autoplay]}
      {...settings}
    >
      {children}
    </Swiper>
  )
}
