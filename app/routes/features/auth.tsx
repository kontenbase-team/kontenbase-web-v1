import { Layout } from '~/components'
import { featuresDetailData } from '~/data'
import { FeatureHero } from '~/features'

export default function RouteFeaturesAuth() {
  const data = featuresDetailData[1] // Auth

  return (
    <Layout>
      <h1>Route Features Auth</h1>
      <FeatureHero data={data} />
    </Layout>
  )
}
