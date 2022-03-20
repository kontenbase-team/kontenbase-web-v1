import {
  Image,
  Button,
  Container,
  Text,
  Title,
  Anchor,
  Tabs,
  Box,
  Card,
  Group,
  useMantineColorScheme,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { FunctionComponent } from 'react'

import { CustomTabs, Icon } from '~/components'
import {
  explainAPICodeImport,
  explainAPIData,
  explainAPILinksData,
  explainDashboardData,
} from '~/data'

export const HomeDashboardAPI: FunctionComponent = () => (
  <Container
    size="lg"
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem',
      padding: `5rem ${theme.spacing.lg}px`,
    })}
  >
    <Title order={2} sx={{ maxWidth: '20ch', textAlign: 'center' }}>
      Easy to use Dashboard & Instant API Creation
    </Title>

    <Group direction="column" sx={{ gap: '5rem', width: '100%' }}>
      <ExplainDashboard />
      <ExplainAPI />
    </Group>
  </Container>
)

export const ExplainDashboard: FunctionComponent = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Box sx={{ minHeight: 400 }}>
      <CustomTabs>
        {explainDashboardData
          .filter((item) => item.isAvailable)
          .map((item) => (
            <Tabs.Tab key={item.label} label={item.label}>
              <Group align="flex-start" spacing="xl">
                <Box>
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    fit="contain"
                    radius="md"
                    sx={(theme) => ({
                      width: '100%',
                      maxWidth: 600,
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: theme.colors.gray[2],
                      borderRadius: theme.radius.md,
                      img: { margin: '0 !important' },
                    })}
                  />
                </Box>
                <Group direction="column" sx={{ maxWidth: '420px' }}>
                  <Title order={4}>{item.title}</Title>
                  <Text>{item.description}</Text>
                  {item.extraInfo && (
                    <Card
                      radius="md"
                      sx={(theme) => ({
                        background: dark
                          ? theme.colors.gray[9]
                          : theme.colors.gray[1],
                      })}
                    >
                      <Text>{item.extraInfo}</Text>
                    </Card>
                  )}
                </Group>
              </Group>
            </Tabs.Tab>
          ))}
      </CustomTabs>
    </Box>
  )
}

export const ExplainAPI: FunctionComponent = () => (
  <Group
    id="ExplainAPI"
    sx={{
      width: '100%',
      flexWrap: 'wrap',
      gap: '3rem',
    }}
  >
    <Group sx={{ width: '100%', justifyContent: 'space-between' }}>
      <Group sx={{ maxWidth: '42ch' }}>
        <Title order={3}>
          Auto generated API and SDK to speed up development time
        </Title>
        <Text>
          We turn database schema to instantly provide API and SDK. So you can
          stop building repetitive CRUD API, and focus on your product.
        </Text>
      </Group>

      <Group align="flex-start" sx={{ flexWrap: 'wrap' }} spacing="xl">
        {explainAPILinksData.map((item) => (
          <Box key={item.name} sx={{ maxWidth: '170px' }}>
            <Group direction="column" spacing="xs">
              <Title order={5}>{item.name}</Title>
              <Text size="sm">{item.description}</Text>
              <Anchor href={item.url} target="_blank">
                <Button
                  compact
                  variant="light"
                  rightIcon={<Icon name="arrow-right" />}
                >
                  Explore docs
                </Button>
              </Anchor>
            </Group>
          </Box>
        ))}
      </Group>
    </Group>

    <CustomTabs sx={{ width: '100%', minHeight: 330 }}>
      {explainAPIData.map((item) => (
        <Tabs.Tab key={item.label} label={item.label}>
          <Prism
            colorScheme="dark"
            language="typescript"
            scrollAreaComponent="div"
            withLineNumbers
            copyLabel="Copy code"
            copiedLabel="Copied!"
            sx={{
              pre: { borderRadius: 0, marginTop: 0 },
            }}
          >
            {explainAPICodeImport + item.code}
          </Prism>
        </Tabs.Tab>
      ))}
    </CustomTabs>
  </Group>
)
