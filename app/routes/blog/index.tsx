import { Container } from '@mantine/core'
import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import { Layout } from '~/components'
import { BlogHero, BlogContent } from '~/features'
import { graphcmsClient } from '~/lib'
import { Article } from '~/types'
import { createMeta, ReactGA } from '~/utils'

import type { MetaFunction, LoaderFunction } from 'remix'

export const meta: MetaFunction = () =>
  createMeta({
    title: 'Kontenbase - Blog',
    description: 'Blog articles and updates by Kontenbase.',
    route: 'blog',
  })

export const loader: LoaderFunction = async () => {
  const ALL_BLOG_ARTICLES = gql`
    query allBlogArticles {
      articles(orderBy: date_DESC) {
        id
        slug
        title
        date
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
  const response = await graphcmsClient.query(ALL_BLOG_ARTICLES).toPromise()
  const { articles } = response.data

  return json({
    articles,
  })
}

type LoaderData = {
  articles: Article[]
}

export default function Blog() {
  ReactGA.send({ hitType: 'pageview', page: '/blog' })

  const { articles } = useLoaderData<LoaderData>()

  return (
    <Layout>
      <BlogHero />
      <BlogContent articles={articles} />
    </Layout>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Layout>
      <BlogHero />
      <Container
        size="lg"
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <p>Failed to get blog articles, please refresh to try again.</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </Container>
    </Layout>
  )
}
