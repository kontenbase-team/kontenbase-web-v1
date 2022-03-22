import { Layout } from '~/components'
import {
  HomeActionLast,
  HomeActionMiddle,
  HomeDashboardAPI,
  HomeExamples,
  HomeFeatures,
  HomeHero,
  HomePartners,
  HomeVersus,
} from '~/features'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => [{ route: `/`, priority: 1 }],
}

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomePartners />
      <HomeFeatures />
      <HomeDashboardAPI />
      <HomeActionMiddle />
      <HomeExamples />
      <HomeVersus />
      <HomeActionLast />
    </Layout>
  )
}
