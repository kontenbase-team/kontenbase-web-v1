import { FunctionComponent } from 'react'
import { Title, Text } from '@mantine/core'
import { Hero } from '~/components'

export const PricingHero: FunctionComponent = () => {
  return (
    <Hero>
      <Title
        order={1}
        sx={(theme) => ({
          color: theme.colors.red[7],
          fontSize: '2rem !important',
        })}
      >
        Pricing
      </Title>
      <Title order={2}>
        Predictable pricing, no surprises
        <br />
        Scale to millions of users
      </Title>
    </Hero>
  )
}
