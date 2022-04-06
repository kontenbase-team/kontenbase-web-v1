import { Container } from '@mantine/core'
import { gql } from '@urql/core'
import { marked } from 'marked'
import { json, useLoaderData } from 'remix'

import { BlogArticle, Layout } from '~/components'
import { hashnodeClient } from '~/lib'
import { Article, TBlogArticle } from '~/types'
import { createMeta, ReactGA } from '~/utils'

import type { MetaFunction, LoaderFunction } from 'remix'

export const meta: MetaFunction = ({ data: article, params }) => {
  if (!article) {
    return createMeta({
      title: `No blog article found - Kontenbase Blog`,
      description: `Sorry, article not found`,
      route: `blog/${params.slug}`,
    })
  }
  return createMeta({
    title: `${article.title} - Kontenbase Blog`,
    description: `${article.brief}`,
    route: `blog/${article.slug}`,
  })
}

export const loader: LoaderFunction = async ({ params }) => {
  const BlogPostSlugQuery = gql`
    query BlogPostSlug($slug: String!) {
      post(hostname: "kontenbase", slug: $slug) {
        cuid
        slug
        title
        brief
        coverImage
        dateAdded
        contentMarkdown
      }
    }
  `
  const response = await hashnodeClient
    .query(BlogPostSlugQuery, { slug: params.slug })
    .toPromise()

  const article: TBlogArticle = response.data.post

  if (!article) return json(null)

  return json({
    ...article,
  })
}

type LoaderData = {
  article: Article
}

export default function BlogArticleSlug() {
  const { article } = useLoaderData<LoaderData>()

  ReactGA.send({ hitType: 'pageview', page: `/blog/${article?.slug}` })

  return (
    <Layout>
      <BlogArticle article={article} />
    </Layout>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Layout>
      <Container size="lg" sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <p>Failed to get the blog article. Please refresh to try again.</p>
      </Container>
    </Layout>
  )
}
