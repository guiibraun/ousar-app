import Image from 'next/image'
import BigLogo from '../../../assets/logos/big-logo.svg'

export function Services() {
  return (
    <section className="mx-auto container flex flex-col lg:py-24 2xl:py-40 py-12 lg:px-8 px-3 lg:gap-16 gap-8">
      <Image
        src={BigLogo}
        alt="Logo da agência Ousar"
        className="h-auto text-center flex justify-center w-full"
      />
      <ul className="flex flex-col self-center justify-center text-left font-semibold font-heading text-red-600 md:text-4xl text-lg md:gap-6 gap-1 services-list">
        <li>BRANDING</li>
        <li>MÍDIA E PERFORMANCE DIGITAL</li>
        <li>DESENVOLVIMENTO WEB/E-COMMERCE</li>
        <li> CONSULTORIA COMERCIAL OUSAR ACADEMY</li>
      </ul>
    </section>
  )
}
