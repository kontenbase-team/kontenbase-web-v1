import { Box, Container, Image, Group, Text } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { Sitemap, SocialMediaLinks } from '~/components'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => (
  <Box
    component="footer"
    sx={(theme) => ({
      background: theme.colors.gray[9],
      padding: `3rem 0`,
      color: theme.colors.gray[0],
    })}
  >
    <Container size="xl">
      <Group
        align="flex-start"
        spacing="xl"
        sx={{ justifyContent: 'space-between', marginBottom: '2rem' }}
      >
        <Box sx={{ maxWidth: '620px' }}>
          <Link to="/">
            <Image width={150} src="/images/logo-on-dark.svg" />
          </Link>
          <Text sx={{ marginBottom: '1rem' }}>
            Create backend API, auth, and storage in less than 1 minute with
            Kontenbase no-code platform. Also called Backend as a Service
            (BaaS).
          </Text>
          <ProductHuntBadge />
        </Box>

        <Sitemap />
      </Group>

      <Group
        sx={{
          justifyContent: 'space-between',
          a: {
            fontSize: '1.5rem',
            '&:hover': {
              opacity: '0.8',
            },
          },
        }}
      >
        <SocialMediaLinks />

        <Text>Copyright &copy; 2022 Kontenbase. All rights reserved</Text>
      </Group>
    </Container>
  </Box>
)

interface ProductHuntBadgeProps {}

export const ProductHuntBadge: FunctionComponent<
  ProductHuntBadgeProps
> = () => {
  return (
    <a
      href="https://www.producthunt.com/posts/kontenbase-alpha?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kontenbase&#0045;alpha"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=339570"
        alt="Kontenbase&#0032;&#0040;Alpha&#0041; - No&#0032;code&#0032;backend&#0032;API&#0046;&#0032;Fast&#0032;and&#0032;easy&#0033; | Product Hunt"
        width="250"
        height="54"
      />
    </a>
  )
}
