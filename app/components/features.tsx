import {
  Title,
  Text,
  Button,
  useMantineTheme,
  SimpleGrid,
  ThemeIcon,
  Box,
  Badge,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { Icon } from '~/components'
import { featuresSimpleData } from '~/data'

interface FeaturesProps {}

export const Features: FunctionComponent<FeaturesProps> = () => {
  const theme = useMantineTheme()

  return (
    <SimpleGrid
      spacing="xl"
      cols={4}
      breakpoints={[
        { maxWidth: theme.breakpoints.md, cols: 3 },
        { maxWidth: theme.breakpoints.sm, cols: 2 },
        { maxWidth: theme.breakpoints.xs, cols: 1 },
      ]}
    >
      {featuresSimpleData.map((feature) => (
        <FeatureCard key={feature.icon} feature={feature} />
      ))}
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.sm,
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: theme.spacing.md,
          alignItems: 'center',
        }}
      >
        <ThemeIcon radius="md" size="xl" color="red">
          <Icon name={feature.icon} />
        </ThemeIcon>
        <Title order={5}>{feature.title}</Title>
      </Box>

      <Text size="sm">{feature.description}</Text>

      {feature.isComingSoon && <Badge variant="dot">Coming Soon</Badge>}

      {feature.isAvailable && feature.to && (
        <Link to={feature.to}>
          <Button
            compact
            variant="light"
            rightIcon={<Icon name="arrow-right" />}
          >
            Learn more
          </Button>
        </Link>
      )}
    </Box>
  )
}
