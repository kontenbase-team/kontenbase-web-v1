import { Layout } from '~/components'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: () => null,
}

export default function SubscribePage() {
  return <Layout>Subscribe</Layout>
}
