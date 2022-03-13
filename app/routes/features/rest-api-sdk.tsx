import { Layout } from '~/components'
import { featureRESTAPISDKData } from '~/data'
import { FeatureCodeExamples, FeatureHero } from '~/features'

export default function RouteFeaturesRESTAPISDK() {
  return (
    <Layout>
      <FeatureHero feature={featureRESTAPISDKData} />
      <FeatureCodeExamples feature={featureRESTAPISDKData} />
    </Layout>
  )
}
