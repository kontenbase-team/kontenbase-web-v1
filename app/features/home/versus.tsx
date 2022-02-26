import {
  Image,
  Button,
  Container,
  Group,
  Title,
  Anchor,
  Text,
  Box,
  Card,
  List,
  ThemeIcon,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Icon } from '~/components'
import { versusStacksData } from '~/data'

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

      <VersusCards />
    </Container>
  )
}

export const VersusCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card withBorder shadow="md" radius="md" padding="xl">
          <Box sx={{ marginBottom: '1rem' }}>
            <Text size="xl" sx={{ fontWeight: '900' }}>
              Kontenbase Managed Service
            </Text>
            <Text size="xl">Start from $5-$99 / project /month</Text>
          </Box>
          <List
            center
            spacing="md"
            size="xl"
            sx={{ paddingLeft: '0 !important' }}
            icon={
              <ThemeIcon color="green" size={24} radius="xl">
                <Icon name="check" />
              </ThemeIcon>
            }
          >
            <List.Item>VPS with 3 Environment</List.Item>
            <List.Item>Database</List.Item>
            <List.Item>Object Storage</List.Item>
            <List.Item>Message Queue</List.Item>
            <List.Item>Realtime/Multiplayer Server</List.Item>
          </List>
        </Card>

        <Box sx={{ textAlign: 'center' }}>
          <Title order={3}>Start from $5-$99/month, then Pay as You Go.</Title>
          <Text>Grow as your company go without hidden cost!</Text>
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: theme.colors.red[7],
          color: theme.colors.gray[1],
          padding: '1rem',
          borderRadius: '50%',
          height: 100,
          width: 100,
          fontSize: '2rem',
          fontWeight: '900',
          margin: '0 -1rem',
          marginBottom: '5rem',
          zIndex: 1,
        })}
      >
        <span>VS</span>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card
          withBorder
          shadow="md"
          radius="md"
          padding="xl"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {versusStacksData.map((item) => {
            return (
              <Group>
                <ThemeIcon color="orange" size={32} radius="xl">
                  <Icon name={item.icon} />
                </ThemeIcon>
                <Box>
                  <Text sx={{ fontWeight: '900' }}>{item.name}</Text>
                  <Text>{item.price}</Text>
                </Box>
              </Group>
            )
          })}
        </Card>

        <Box sx={{ textAlign: 'center' }}>
          <Title order={3}>$249.98/month with unmanaged service</Title>
          <Text>Also you need to maintain each of them</Text>
        </Box>
      </Box>
    </Box>
  )
}
