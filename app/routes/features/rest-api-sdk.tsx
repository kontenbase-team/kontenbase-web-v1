import { Layout } from '~/components'
import { featureRESTAPISDKData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesRESTAPISDK() {
  return (
    <Layout>
      <FeatureHero feature={featureRESTAPISDKData} />
    </Layout>
  )
}
