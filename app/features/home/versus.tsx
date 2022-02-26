import {
  Image,
  Button,
  Container,
  Group,
  Title,
  Anchor,
  Text,
} from '@mantine/core'
import { FunctionComponent } from 'react'

export const HomeVersus: FunctionComponent = () => {
  return (
    <Container
      size="xl"
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `5rem ${theme.spacing.xl}px`,
        gap: '3rem',
      })}
    >
      <Title order={2} sx={{ maxWidth: '30ch', textAlign: 'center' }}>
        Save big with{' '}
        <Text color="red" inherit component="span">
          Kontenbase
        </Text>
      </Title>

      <Text
        color="dimmed"
        size="xl"
        sx={{
          textAlign: 'center',
          maxWidth: '72ch',
          fontWeight: 500,
          fontSize: '1.5rem',
        }}
      >
        Kontenbase replace a bunch of complex architecture. See how our
        all-in-one price compares to when you combine VPS + Database + Object
        Storage + Message Queue + Realtime/Multiplayer Server
      </Text>
    </Container>
  )
}
