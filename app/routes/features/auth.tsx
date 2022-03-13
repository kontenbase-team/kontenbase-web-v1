import { Layout } from '~/components'
import { featureAuthData } from '~/data'
import { FeatureCodeExamples, FeatureHero } from '~/features'

export default function RouteFeaturesAuth() {
  return (
    <Layout>
      <FeatureHero feature={featureAuthData} />
      <FeatureCodeExamples feature={featureAuthData} />
    </Layout>
  )
}
