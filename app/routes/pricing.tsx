import { Layout } from '~/components'
import { PricingHero, PricingTable } from '~/features'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => [{ route: `/pricing`, priority: 0.7 }],
}

export default function PricingPage() {
  return (
    <Layout>
      <PricingHero />
      <PricingTable />
    </Layout>
  )
}
