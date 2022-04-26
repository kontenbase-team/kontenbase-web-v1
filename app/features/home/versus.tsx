import {
  Image,
  Container,
  Group,
  Title,
  Text,
  Box,
  Card,
  List,
  ThemeIcon,
  useMantineColorScheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { versusStacksData } from '~/data'

export const HomeVersus: FunctionComponent = () => (
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
      Kontenbase replace a bunch of complex architecture. See how our all-in-one
      price compares to when you have to combine all of them.
    </Text>

    <VersusCards />
  </Container>
)

export const VersusCards = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const cardHeight = isDesktop ? 370 : '100%'

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isDesktop ? 'row' : 'column',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card
          withBorder
          shadow="md"
          radius="md"
          // padding="xl"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: cardHeight,
          }}
        >
          <Box>
            <Image
              width={200}
              src={
                dark ? '/images/logo-on-dark.svg' : '/images/logo-on-light.svg'
              }
            />
            <Text size="xl" sx={{ fontWeight: '900' }}>
              Kontenbase Managed Service
            </Text>
            <Text size="xl">Start from $5-$25 / project /month</Text>
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
              <List.Item>VPS</List.Item>
              <List.Item>Database</List.Item>
              <List.Item>Object Storage</List.Item>
              <List.Item>Message Queue</List.Item>
              <List.Item>Real-time/Multiplayer Server</List.Item>
            </List>
          </Box>
        </Card>

        <Box sx={{ textAlign: 'center' }}>
          <Title order={3}>Start from free or $5-$25/month</Title>
          <Text>Grow as your company go without hidden cost!</Text>
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: theme.colors.red[7],
          color: theme.colors.gray[1],
          padding: '1rem',
          fontSize: '2rem',
          fontWeight: '900',
          margin: isDesktop ? '0 -1rem 5rem -1rem' : '1rem -1rem',
          zIndex: 1,
          minWidth: '100px',
          minHeight: '100px',
          borderRadius: '50%',
        })}
      >
        <span>VS</span>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Card
          withBorder
          shadow="md"
          radius="md"
          // padding="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            height: cardHeight,
          }}
        >
          {versusStacksData.map((item) => (
            <Group key={item.name} sx={{ alignItems: 'center' }}>
              <Text color="orange" sx={{ fontSize: '2rem' }}>
                <Icon name={item.icon} />
              </Text>
              <Box>
                <Text sx={{ fontWeight: '900' }}>{item.name}</Text>
                <Text>{item.price}</Text>
              </Box>
            </Group>
          ))}
        </Card>

        <Box sx={{ textAlign: 'center' }}>
          <Title order={3}>$219.18/month managed by you</Title>
          <Text>Also additional costs to maintain on growth</Text>
        </Box>
      </Box>
    </Box>
  )
}
