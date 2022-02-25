import {
  Card,
  Group,
  Title,
  Text,
  Button,
  useMantineTheme,
  SimpleGrid,
  ThemeIcon,
  Box,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { featuresData } from '~/data/features'
import { Icon } from '~/components'

interface FeaturesProps {}

export const Features: FunctionComponent<FeaturesProps> = () => {
  return (
    <SimpleGrid cols={4}>
      {featuresData.map((feature) => {
        return (
          <Box key={feature.icon}>
            <FeatureCard feature={feature} />
          </Box>
        )
      })}
    </SimpleGrid>
  )
}

interface FeatureCardProps {
  feature: any
}

export const FeatureCard: FunctionComponent<FeatureCardProps> = ({
  feature,
}) => {
  const theme = useMantineTheme()

  return (
    <Card
      padding="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
      }}
    >
      <Box
        sx={{ display: 'flex', gap: theme.spacing.md, alignItems: 'center' }}
      >
        <ThemeIcon radius="md" size="xl" color="red">
          <Icon name={feature.icon} />
        </ThemeIcon>
        <Title order={5}>{feature.name}</Title>
      </Box>

      <Text size="sm">{feature.description}</Text>

      <Link to="/docs">
        <Button variant="light" fullWidth>
          Explore docs
        </Button>
      </Link>
    </Card>
  )
}
