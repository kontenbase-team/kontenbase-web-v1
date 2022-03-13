import { Container } from '@mantine/core'
import { gql } from '@urql/core'
import { marked } from 'marked'
import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { BlogArticle, Layout } from '~/components'
import { TBlogArticle } from '~/types'
import { createMeta, hashnodeClient, ReactGA } from '~/utils'

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
    html: marked.parse(String(article?.contentMarkdown)),
  })
}

export default function BlogArticleSlug() {
  const article = useLoaderData<TBlogArticle>()

  ReactGA.send({ hitType: 'pageview', page: `/blog/${article?.slug}` })

  return (
    <Layout>
      <BlogArticle article={article} />
    </Layout>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  // eslint-disable-next-line no-console
  console.error(error)

  return (
    <Layout>
      <Container
        size="lg"
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <p>Failed to get blog articles, please refresh to try again.</p>
      </Container>
    </Layout>
  )
}
