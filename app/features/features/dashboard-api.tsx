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
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { CustomTabs } from '~/components'
import { explainDashboardData } from '~/data'
import { Link } from 'remix'

export const HomeDashboardAPI: FunctionComponent = () => {
  return (
    <Container
      size="lg"
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
        padding: '5rem 0',
      })}
    >
      <Title order={2} sx={{ maxWidth: '20ch', textAlign: 'center' }}>
        Easy to use Dashboard & Instant API Creation
      </Title>

      <Box sx={{ width: '100%', minHeight: 400 }}>
        <TabFeatureDatabase />
      </Box>
    </Container>
  )
}

export const TabFeatureDatabase: FunctionComponent = () => {
  return (
    <CustomTabs>
      {explainDashboardData.map((item) => {
        return (
          <Tabs.Tab key={item.label} label={item.label}>
            <Image src={item.imageUrl} alt={item.label} />
            <Group direction="column" sx={{ maxWidth: '420px' }}>
              <Title order={3}>{item.title}</Title>
              <Text>{item.description}</Text>
              {item.extraInfo && (
                <Card
                  sx={(theme) => ({
                    background: theme.colors.gray[1],
                  })}
                >
                  <Text>{item.extraInfo}</Text>
                </Card>
              )}
            </Group>
          </Tabs.Tab>
        )
      })}
    </CustomTabs>
  )
}
