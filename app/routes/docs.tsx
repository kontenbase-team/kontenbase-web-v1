import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => [{ route: `/docs`, priority: 0.9 }],
}

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/docs')

export default function DocsPage() {
  return <Layout>Docs</Layout>
}
