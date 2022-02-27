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
      padding: `2rem 0`,
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
            Kontenbase is a one-stop solution generator for your backend
            application! From microservices, databases, API, GraphQL, Socket,
            Storage, CI/CD, Deployment, and much more. You don’t even need to
            think about all of that repetitive stuff, Kontenbase can do it for
            you!
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
