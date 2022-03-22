import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => [{ route: `/signin`, priority: 0.9 }],
}

export const loader: LoaderFunction = async () =>
  redirect('https://app.kontenbase.com')

export default function SignInPage() {
  return <Layout>Sign In</Layout>
}
