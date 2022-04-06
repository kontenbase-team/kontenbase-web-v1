import { createClient } from '@urql/core'

export const graphcmsClient = createClient({
  url: process.env.GRAPHCMS_ENDPOINT as string,
})

export const hashnodeClient = createClient({
  url: 'https://api.hashnode.com',
})
