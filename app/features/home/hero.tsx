import { Box, Text, Button, Group, Title, Image, Anchor } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { Icon } from '~/components'

export const HomeHero: FunctionComponent = () => (
  <Box
    sx={(theme) => ({
      paddingTop: '3rem',
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '2rem',
    })}
  >
    <Title order={1} sx={{ maxWidth: '16ch' }}>
      <Text color="red" inherit component="span">
        No Code
      </Text>{' '}
      Backend API, Fast and Easy!
    </Title>

    <Text
      size="xl"
      color="dimmed"
      sx={{ maxWidth: '38ch', fontWeight: 500, fontSize: '1.5rem' }}
    >
      Kontenbase allows you to easily create backend API, auth, and storage in
      less than 1 minute without coding.
    </Text>

    <Group>
      <Link to="/signup">
        <Button
          size="lg"
          radius="md"
          variant="gradient"
          gradient={{ from: 'red', to: 'orange', deg: 105 }}
        >
          Sign Up for Free
        </Button>
      </Link>
      <Anchor href="https://docs.kontenbase.com">
        <Button
          size="lg"
          radius="md"
          variant="outline"
          leftIcon={<Icon name="docs" />}
        >
          Documentation
        </Button>
      </Anchor>
    </Group>

    <Image
      alt="Kontenbase Screenshot"
      src="/images/kontenbase-home-hero.png"
      fit="contain"
      radius="lg"
      sx={(theme) => ({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.colors.gray[2],
        borderRadius: theme.radius.lg,
        maxWidth: '960px',
        img: { margin: 0 },
      })}
    />
  </Box>
)
