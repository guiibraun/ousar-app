import Link from 'next/link'

interface ButtonProps {
  background: 'white' | 'gray-700'
  color: 'white' | 'gray-700'
  description: string
  endpoint: string
}

export function Button({
  background,
  color,
  description,
  endpoint,
}: ButtonProps) {
  return (
    <Link
      href={endpoint}
      className={`unset bg-${background} text-${color} px-8 lg:h-[60px] h-[60px] text-xl rounded-full flex justify-center items-center`}
    >
      {description}
    </Link>
  )
}
