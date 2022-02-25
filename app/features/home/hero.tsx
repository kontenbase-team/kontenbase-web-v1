import { FunctionComponent } from 'react'
import { Box, Text, Button, Group, Title, useMantineTheme } from '@mantine/core'
import { Icon } from '~/components'

export const HomeHero: FunctionComponent = () => {
  const theme = useMantineTheme()

  return (
    <Box
      sx={{
        paddingTop: '3rem',
        paddingBottom: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem',
      }}
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
        <Button
          size="lg"
          radius="md"
          variant="gradient"
          gradient={{ from: 'red', to: 'orange', deg: 105 }}
        >
          Sign Up for Free
        </Button>
        <Button
          size="lg"
          radius="md"
          variant="outline"
          leftIcon={<Icon name="docs" />}
        >
          Documentation
        </Button>
      </Group>
    </Box>
  )
}