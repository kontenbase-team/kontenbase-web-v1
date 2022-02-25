import { Layout } from '~/components'
import { HomeActionLast, HomeFeatures, HomeHero } from '~/features'

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <HomeActionLast />
    </Layout>
  )
}
