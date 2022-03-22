import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => [{ route: `/jobs`, priority: 0.8 }],
}

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/jobs')

export default function JobsPage() {
  return <Layout>Jobs</Layout>
}
