import { Container } from '@mantine/core'
import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import { BlogArticle, Layout } from '~/components'
import { graphcmsClient } from '~/lib'
import { Article } from '~/types'
import { createMeta, ReactGA } from '~/utils'

import type { MetaFunction, LoaderFunction } from 'remix'

export const meta: MetaFunction = ({ data, params }) => {
  const { article } = data

  if (!article.title) {
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
  const ONE_BLOG_ARTICLE_BY_SLUG = gql`
    query oneBlogArticleBySlug($slug: String!) {
      article(where: { slug: $slug }) {
        id
        slug
        title
        publishedAt
        brief
        coverImage {
          url
        }
        content {
          html
        }
      }
    }
  `
  const response = await graphcmsClient
    .query(ONE_BLOG_ARTICLE_BY_SLUG, {
      slug: params.slug,
    })
    .toPromise()

  const article: Article = response.data.article

  return json({
    article,
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
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </Container>
    </Layout>
  )
}
