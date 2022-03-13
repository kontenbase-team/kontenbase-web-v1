import { Layout } from '~/components'
import { featureRealTimeData } from '~/data'
import { FeatureCodeExamples, FeatureHero } from '~/features'

export default function RouteFeaturesRealTime() {
  return (
    <Layout>
      <FeatureHero feature={featureRealTimeData} />
      <FeatureCodeExamples feature={featureRealTimeData} />
    </Layout>
  )
}
