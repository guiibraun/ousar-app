import { Case, Tag } from '@/@types/wordpress'

export async function fetchCases() {
  const resCases = await fetch(`${process.env.BASE_URL}cases`)
  const resTags = await fetch(`${process.env.BASE_URL}case_tags`)

  const cases: Case[] = await resCases.json()
  const tags: Tag[] = await resTags.json()

  const casesWithTagName = cases.map((item) => {
    const tagNames = tags
      .filter((tag) => item.case_tags.includes(tag.id))
      .map((tag) => tag.name)

    return {
      id: item.id,
      title: item.title.rendered,
      content: item.content.rendered,
      featuredImage: item.featured_image_url,
      tags: tagNames,
    }
  })

  return casesWithTagName
}
