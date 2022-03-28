import { useActionData, useTransition } from 'remix'

import { Layout } from '~/components'
import { subscribeAction, SubscribeSection } from '~/features'

import type { SEOHandle } from '@balavishnuvj/remix-seo'
import type { MetaFunction, ActionFunction } from 'remix'

export const handle: SEOHandle = {
  getSitemapEntries: () => null,
}

export const meta: MetaFunction = () => ({
  title: 'Subscribe to Kontenbase Newsletter',
  description: 'Subscribe to Kontenbase Newsletter.',
})

export const action: ActionFunction = subscribeAction

export default function SubscribeRoute() {
  const transition = useTransition()
  const actionData = useActionData()

  return (
    <Layout>
      <SubscribeSection transition={transition} actionData={actionData} />
    </Layout>
  )
}
