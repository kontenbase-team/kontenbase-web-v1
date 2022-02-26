import { Layout } from '~/components'
import {
  HomeActionLast,
  HomeActionMiddle,
  HomeExamples,
  HomeFeatures,
  HomeHero,
  HomeVersus,
} from '~/features'

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <HomeActionMiddle />
      <HomeExamples />
      <HomeVersus />
      <HomeActionLast />
    </Layout>
  )
}
