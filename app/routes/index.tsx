import { Layout } from '~/components'
import {
  HomeActionLast,
  HomeActionMiddle,
  HomeDashboardAPI,
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
      <HomeDashboardAPI />
      <HomeActionMiddle />
      <HomeExamples />
      <HomeVersus />
      <HomeActionLast />
    </Layout>
  )
}
