import {
  Card,
  Group,
  Title,
  Text,
  Button,
  useMantineTheme,
  SimpleGrid,
  Anchor,
  Avatar,
} from '@mantine/core'
import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { examplesData } from '~/data'

interface ExamplesProps {}

export const Examples: FunctionComponent<ExamplesProps> = () => {
  const theme = useMantineTheme()

  return (
    <SimpleGrid
      spacing="sm"
      cols={3}
      breakpoints={[
        { maxWidth: theme.breakpoints.md, cols: 2 },
        { maxWidth: theme.breakpoints.sm, cols: 2 },
        { maxWidth: theme.breakpoints.xs, cols: 1 },
      ]}
    >
      {examplesData.map((example) => (
        <ExampleCard key={example.name} example={example} />
      ))}
    </SimpleGrid>
  )
}

interface ExampleCardProps {
  example: any
}

export const ExampleCard: FunctionComponent<ExampleCardProps> = ({
  example,
}) => {
  const theme = useMantineTheme()

  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.xl,
        alignItems: 'flex-start',
      }}
    >
      <Group direction="column" sx={{ flex: 1 }}>
        <Title order={4}>{example.name}</Title>
        <Text size="sm">{example.description}</Text>
      </Group>

      <Group direction="column">
        <Group>
          <Text weight="bold">Created by</Text>
          <Group spacing="xs">
            <Avatar color="blue" alt="A" radius="xl">
              A
            </Avatar>
            <Text>{example.creatorName}</Text>
          </Group>
        </Group>
        <Group>
          {example.demoUrl && (
            <Anchor href={example.demoUrl} target="_blank">
              <Button radius="md" rightIcon={<Icon name="arrow-right" />}>
                Try Demo
              </Button>
            </Anchor>
          )}
          {example.githubUrl && (
            <Anchor href={example.githubUrl} target="_blank">
              <Button
                radius="md"
                variant="white"
                color="dark"
                rightIcon={<Icon name="github" />}
                sx={{
                  border: '1px solid black',
                }}
              >
                View Source
              </Button>
            </Anchor>
          )}
        </Group>
      </Group>
    </Card>
  )
}
