import { Layout } from '~/components'
import { featureStorageData } from '~/data'
import { FeatureCodeExamples, FeatureHero } from '~/features'

export default function RouteFeaturesStorage() {
  return (
    <Layout>
      <FeatureHero feature={featureStorageData} />
      <FeatureCodeExamples feature={featureStorageData} />
    </Layout>
  )
}
