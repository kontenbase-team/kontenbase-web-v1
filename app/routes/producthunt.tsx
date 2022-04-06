import { LoaderFunction, redirect } from 'remix'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => null,
}

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/producthunt')

