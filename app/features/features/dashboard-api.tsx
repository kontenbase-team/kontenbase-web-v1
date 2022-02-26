import {
  Image,
  Button,
  Container,
  Group,
  Title,
  Anchor,
  Tabs,
  Box,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { CustomTabs } from '~/components'
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
      })}
    >
      <Title order={2} sx={{ maxWidth: '20ch', textAlign: 'center' }}>
        Easy to use Dashboard & Instant API Creation
      </Title>

      <Box sx={{ width: '100%' }}>
        <TabFeatureDatabase />
      </Box>
    </Container>
  )
}

export const TabFeatureDatabase: FunctionComponent = () => {
  return (
    <CustomTabs>
      <Tabs.Tab label="Database">First tab content</Tabs.Tab>
      <Tabs.Tab label="Auth">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Storage">Third tab content</Tabs.Tab>
    </CustomTabs>
  )
}
