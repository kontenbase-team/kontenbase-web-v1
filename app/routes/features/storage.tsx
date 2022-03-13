import { Layout } from '~/components'
import { featuresDetailData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesStorage() {
  const feature = featuresDetailData[2] // Storage

  return (
    <Layout>
      <FeatureHero feature={feature} />
    </Layout>
  )
}
