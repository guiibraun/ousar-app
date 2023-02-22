export interface Case {
  id: number
  slug: string
  status: string
  featured_image_url: string
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  meta: {
    featured_image_home: string
  }

  case_tags: number[]
}

export interface Tag {
  id: number
  name: string
}
