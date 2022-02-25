import { Layout } from '~/components'
import { HomeFeatures, HomeHero } from '~/features'

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
    </Layout>
  )
}
