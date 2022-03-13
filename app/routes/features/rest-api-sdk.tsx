import { Layout } from '~/components'
import { featuresDetailData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesRESTAPISDK() {
  const feature = featuresDetailData[0] // REST API & SDK

  return (
    <Layout>
      <FeatureHero feature={feature} />
    </Layout>
  )
}
