import Image from 'next/image'
import BigLogo from '../../../assets/logos/big-logo.svg'

export function Services() {
  return (
    <section className="mx-auto container flex flex-col lg:py-40 py-12 px-3 lg:px-8 lg:gap-16">
      <Image
        src={BigLogo}
        alt="Logo da agência Ousar"
        className="h-auto text-center flex justify-center w-full"
      />
      <ul className="flex flex-col self-center justify-center text-left font-semibold font-heading text-red-600 text-4xl gap-6 services-list">
        <li>BRANDING</li>
        <li>MÍDIA E PERFORMANCE DIGITAL</li>
        <li>DESENVOLVIMENTO WEB/E-COMMERCE</li>
        <li> CONSULTORIA COMERCIAL OUSAR ACADEMY</li>
      </ul>
    </section>
  )
}
