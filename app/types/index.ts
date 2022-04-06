export type Article = {
  id: string
  slug: string
  title: string
  publishedAt: string
  brief: string
  coverImage: {
    url: string
  }
  content: {
    html: string
  }
}

export type TBlogArticle = {
  cuid: string
  slug: string
  title: string
  dateAdded: string
  coverImage: string
  brief?: string
  content?: string
  contentMarkdown?: string
  html?: string
}
