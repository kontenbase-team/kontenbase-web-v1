import { ActionFunction, useActionData, useTransition } from 'remix'

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
  SocialSection,
  subscribeAction,
  SubscribeSection,
} from '~/features'

import type { SEOHandle } from '@balavishnuvj/remix-seo'

export const handle: SEOHandle = {
  getSitemapEntries: async () => [{ route: `/`, priority: 1 }],
}

export const action: ActionFunction = subscribeAction

export default function Index() {
  const transition = useTransition()
  const actionData = useActionData()

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
      {/* <SocialSection /> */}
      <SubscribeSection transition={transition} actionData={actionData} />
    </Layout>
  )
}
