import { Layout } from '~/components'
import {
  HomeActionLast,
  HomeActionMiddle,
  HomeExamples,
  HomeFeatures,
  HomeHero,
} from '~/features'

export default function Index() {
  return (
    <Layout>
      <HomeHero />
      <HomeFeatures />
      <HomeActionMiddle />
      <HomeExamples />
      <HomeActionLast />
    </Layout>
  )
}
