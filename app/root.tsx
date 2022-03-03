import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  TypographyStylesProvider,
} from '@mantine/core'
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks'
import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'

import type { MetaFunction } from 'remix'
import { themeData } from '~/data'

import globalStylesUrl from '~/styles/global.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: globalStylesUrl },
]

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
