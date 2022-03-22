/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-mutable-exports */
// Dependencies
import { generateRobotsTxt, generateSitemap } from '@balavishnuvj/remix-seo'

import type { EntryContext } from 'remix'

type Handler = (
  request: Request,
  remixContext: EntryContext
) => Promise<Response | null> | null

export const otherRootRoutes: Record<string, Handler> = {
  '/sitemap.xml': async (request, remixContext) =>
    generateSitemap(request, remixContext, {
      siteUrl: 'https://kontenbase.com',
      headers: {
        'Cache-Control': `public, max-age=${60 * 5}`,
      },
    }),
  '/robots.txt': async () =>
    generateRobotsTxt([
      { type: 'sitemap', value: 'https://kontenbase.com/sitemap.xml' },
    ]),
}

export const otherRootRouteHandlers: Array<Handler> = [
  ...Object.entries(otherRootRoutes).map(
    ([path, handler]) =>
      (request: Request, remixContext: EntryContext) => {
        if (new URL(request.url).pathname !== path) return null
        return handler(request, remixContext)
      }
  ),
]
