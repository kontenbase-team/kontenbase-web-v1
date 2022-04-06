import { Container } from '@mantine/core'
import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import { Layout } from '~/components'
import { BlogHero, BlogContent } from '~/features'
import { TBlogArticle } from '~/types'
import { hashnodeClient, createMeta, ReactGA } from '~/utils'

import type { MetaFunction, LoaderFunction } from 'remix'

export const meta: MetaFunction = () =>
  createMeta({
    title: 'Kontenbase - Blog',
    description: 'Blog articles and posts by Kontenbase.',
    route: 'blog',
  })

export const loader: LoaderFunction = async () => {
  const BlogPostsQuery = gql`
    query {
      user(username: "kontenbase") {
        publication {
          posts(page: 0) {
            cuid
            slug
            title
            brief
            coverImage
            dateAdded
          }
        }
      }
    }
  `
  const response = await hashnodeClient.query(BlogPostsQuery).toPromise()
  const articles: TBlogArticle[] = response.data.user.publication.posts

  return json(articles)
}

export default function Blog() {
  ReactGA.send({ hitType: 'pageview', page: '/blog' })

  // eslint-disable-next-line no-unused-vars
  const data = useLoaderData<TBlogArticle[]>()

  return (
    <Layout>
      <BlogHero />
      <BlogContent data={data} />
    </Layout>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  // eslint-disable-next-line no-console
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
      </Container>
    </Layout>
  )
}
