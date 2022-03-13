import { Layout } from '~/components'
import { featureRealTimeData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesRealTime() {
  return (
    <Layout>
      <FeatureHero feature={featureRealTimeData} />
    </Layout>
  )
}
