import { Layout } from '~/components'
import {
  HomeActionLast,
  HomeActionMiddle,
  HomeFeatures,
  HomeHero,
} from '~/features'

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <HomeActionMiddle />
      <HomeActionLast />
    </Layout>
  )
}
