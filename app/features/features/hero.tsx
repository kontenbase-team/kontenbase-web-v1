import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  ThemeIcon,
  Title,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { Icon } from '~/components'

interface FeatureHeroProps {
  feature: {
    icon: string
    name: string
    title: string
    description: string
    docsUrl: string
  }
}

export const FeatureHero: FunctionComponent<FeatureHeroProps> = ({
  feature,
}) => {
  const theme = useMantineTheme()

  return (
    <Container
      size="lg"
      sx={{
        paddingTop: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <Group
        direction="column"
        sx={{
          maxWidth: 500,
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
          <Title order={5}>{feature.name}</Title>
        </Box>

        <Title
          order={1}
          sx={{
            margin: '0 !important',
            color: theme.colors.red[7],
          }}
        >
          {feature.title}
        </Title>
        <Text> {feature.description}</Text>

        <Group
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link to="/signup">
            <Button
              size="md"
              radius="md"
              variant="gradient"
              gradient={{ from: 'red', to: 'orange', deg: 105 }}
            >
              Sign Up for Free
            </Button>
          </Link>
          <Anchor href={feature.docsUrl} target="_blank">
            <Button
              size="md"
              radius="md"
              variant="outline"
              leftIcon={<Icon name="docs" />}
            >
              Documentation
            </Button>
          </Anchor>
        </Group>
      </Group>

      <Box>Screenshot</Box>
    </Container>
  )
}
