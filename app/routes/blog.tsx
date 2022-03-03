import { gql } from '@urql/core'
import { json, useLoaderData } from 'remix'

import type { MetaFunction, LoaderFunction } from 'remix'
import { BlogHero } from '~/features'
import { TBlogArticle } from '~/types'
import { hashnodeClient, createMeta, ReactGA } from '~/utils'
import { Layout } from '~/components'

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
  const articles = useLoaderData<TBlogArticle[]>()

  return (
    <Layout>
      <BlogHero />
      {/* <BlogContent /> */}
    </Layout>
  )
}
