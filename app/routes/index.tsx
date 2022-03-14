import { Layout } from '~/components'
import {
  HomeActionLast,
  HomeActionMiddle,
  HomeDashboardAPI,
  HomeExamples,
  HomeFeatures,
  HomeHero,
  HomePartners,
  HomeVersus,
} from '~/features'

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomePartners />
      <HomeFeatures />
      <HomeDashboardAPI />
      <HomeActionMiddle />
      <HomeExamples />
      <HomeVersus />
      <HomeActionLast />
    </Layout>
  )
}
