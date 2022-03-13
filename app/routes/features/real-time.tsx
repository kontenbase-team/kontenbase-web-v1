import { Layout } from '~/components'
import { featuresDetailData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesRealTime() {
  const feature = featuresDetailData[3] // Real-Time

  return (
    <Layout>
      <FeatureHero feature={feature} />
    </Layout>
  )
}
