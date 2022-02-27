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
  Divider,
  useMantineColorScheme,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { CustomTabs, Icon } from '~/components'
import {
  explainAPIData,
  explainAPILinksData,
  explainDashboardData,
} from '~/data'
import { Link } from 'remix'
import { Prism } from '@mantine/prism'

export const HomeDashboardAPI: FunctionComponent = () => {
  return (
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
}

export const ExplainDashboard: FunctionComponent = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Box sx={{ minHeight: 400 }}>
      <CustomTabs>
        {explainDashboardData.map((item) => {
          return (
            <Tabs.Tab key={item.label} label={item.label}>
              <Group align="flex-start">
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  fit="contain"
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                  }}
                />
                <Group direction="column" sx={{ maxWidth: '450px' }}>
                  <Title order={3}>{item.title}</Title>
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
          )
        })}
      </CustomTabs>
    </Box>
  )
}

export const ExplainAPI: FunctionComponent = () => {
  return (
    <Group
      id="ExplainAPI"
      align="flex-start"
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        minHeight: 400,
        flexWrap: 'wrap',
      }}
    >
      <Group direction="column" sx={{ maxWidth: '42ch' }}>
        <Title order={3}>
          Auto generated API and SDK to speed up development time
        </Title>
        <Text>
          We turn database schema to instantly provide API and SDK. So you can
          stop building repetitive CRUD API, and focus on your product.
        </Text>
        <Group align="flex-start" sx={{ flexWrap: 'wrap' }}>
          {explainAPILinksData.map((item) => {
            return (
              <Card padding={0} sx={{ maxWidth: '200px' }}>
                <Group direction="column" spacing="xs">
                  <Title order={5}>{item.name}</Title>
                  <Text size="sm">{item.description}</Text>
                  <Anchor href={item.url}>
                    <Button
                      compact
                      variant="light"
                      rightIcon={<Icon name="arrow-right" />}
                    >
                      Explore docs
                    </Button>
                  </Anchor>
                </Group>
              </Card>
            )
          })}
        </Group>
      </Group>

      <CustomTabs sx={{ width: '100%', maxWidth: '550px' }}>
        {explainAPIData.map((item) => {
          return (
            <Tabs.Tab key={item.label} label={item.label}>
              <Prism.Tabs>
                <Prism.Tab
                  label="index.ts"
                  language="typescript"
                  icon={<Icon name="typescript" />}
                  scrollAreaComponent="div"
                  withLineNumbers
                  copyLabel="Copy code"
                  copiedLabel="Copied!"
                  sx={{
                    pre: { borderRadius: 0, marginTop: 0 },
                  }}
                >
                  {item.code}
                </Prism.Tab>
              </Prism.Tabs>
            </Tabs.Tab>
          )
        })}
      </CustomTabs>
    </Group>
  )
}
