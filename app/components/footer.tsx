import { Box, Container, Image, Group, Text, Title } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        background: theme.colors.gray[9],
        padding: theme.spacing.xl,
        color: theme.colors.gray[0],
      })}
    >
      <Container size="lg">
        <Group sx={{ marginBottom: '2rem' }}>
          <Box sx={{ maxWidth: '620px' }}>
            <Link to="/">
              <Image width={150} src="/images/logo-on-dark.svg" />
            </Link>
            <Text>
              Kontenbase is one stop solution generator for your backend
              application! From microservices, databases, API, GraphQL, Socket,
              Storage, CI/CD, Deployment, and much more. You don’t even need to
              think about all of that repetitive stuff, Kontenbase do it for
              you!
            </Text>
          </Box>

          <Group>
            <Box>
              <Title order={4} sx={{ color: '#fff' }}>
                Products
              </Title>
            </Box>
          </Group>
        </Group>

        <Group>
          <Group>
            <p>Social Media Links</p>
          </Group>
          <Text>Copyright &copy; 2022 Kontenbase. All rights reserved</Text>
        </Group>
      </Container>
    </Box>
  )
}
