import { Layout } from '~/components'
import { featuresDetailData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesAuth() {
  const feature = featuresDetailData[1] // Auth

  return (
    <Layout>
      <FeatureHero feature={feature} />
    </Layout>
  )
}
