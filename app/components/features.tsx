import { Card, Group, Title } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { featuresData } from '~/data/features'

interface FeaturesProps {}

export const Features: FunctionComponent<FeaturesProps> = () => {
  return (
    <Group>
      {featuresData.map((feature) => {
        return (
          <Link key={feature.icon} to={feature.to}>
            <Card>
              <Title order={4}>{feature.name}</Title>
            </Card>
          </Link>
        )
      })}
    </Group>
  )
}
