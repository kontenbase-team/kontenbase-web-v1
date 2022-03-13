import { Layout } from '~/components'
import { featureStorageData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesStorage() {
  return (
    <Layout>
      <FeatureHero feature={featureStorageData} />
    </Layout>
  )
}
