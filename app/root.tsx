import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  TypographyStylesProvider,
} from '@mantine/core'
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import {
  json,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from 'remix'

import { themeData } from '~/data'
import { getEnv } from '~/utils/env.server'

import type { MetaFunction } from 'remix'

import globalStylesUrl from '~/styles/global.css'
import nProgressStyles from '~/styles/nprogress.css'

export type LoaderData = {
  ENV: ReturnType<typeof getEnv>
}

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: globalStylesUrl,
  },
  {
    rel: 'stylesheet',
    href: nProgressStyles,
  },
]

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    ENV: getEnv(),
  }

  return json(data)
}

export const meta: MetaFunction = () => {
  const name = 'Kontenbase'
  const title = 'Kontenbase'
  const description =
    'No code backend API, fast and easy! Easily create backend API, auth, and storage in less than 1 minute without coding.'
  const url = 'https://kontenbase.com/'
  const ogImageUrl = `${url}images/kontenbase-og.png?v=1`
  const ogImageAlt = 'Kontenbase is a No Code Backend as a Service'
  const twiterImageUrl = `${url}images/kontenbase-twitter.png?v=1`

  return {
    title,
    description,

    'og:site_name': name,
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:locale': 'en_US',
    'og:image': ogImageUrl,
    'og:image:alt': ogImageAlt,
    'og:type': 'website',

    'twitter:card': 'summary_large_image',
    'twitter:site': '@kontenbase',
    'twitter:creator': '@kontenbase',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': twiterImageUrl,
  }
}

export default function App() {
  const data = useLoaderData<LoaderData>()

  const transition = useTransition()

  useEffect(() => {
    // when the state is idle then we can to complete the progress bar
    if (transition.state === 'idle') NProgress.done()
    // and when it's something else it means it's either submitting a form or
    // waiting for the loaders of the next location so we start it
    else NProgress.start()
  }, [transition.state])

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)};`,
          }}
        />

        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ ...themeData, colorScheme } as any}
            withGlobalStyles
          >
            <TypographyStylesProvider>
              <Outlet />
            </TypographyStylesProvider>
          </MantineProvider>
        </ColorSchemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
