import { Layout } from '~/components'
import { HomeDashboardAPI } from '~/features'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: () => null,
}

export default function FeaturesDashboardAPIPage() {
  return (
    <Layout>
      <HomeDashboardAPI />
    </Layout>
  )
}
