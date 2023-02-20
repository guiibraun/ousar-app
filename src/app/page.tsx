import { HomeSlide } from '@/components/Home/HomeSlide'

async function getData() {
  const res = await fetch(
    'https://wordpress-401288-2984209.cloudwaysapps.com/wp-json/wp/v2/posts',
  )

  if (!res.ok) {
    throw new Error('Fetch failed')
  }
  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="bg-black text-white min-h-screen">
      <HomeSlide />
      <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></div>
    </main>
  )
}
