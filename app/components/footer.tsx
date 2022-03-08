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
          <Text>
            Create backend API, auth, and storage in less than 1 minute with
            Kontenbase no-code platform. Also called Backend as a Service
            (BaaS).
          </Text>
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
