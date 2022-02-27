import { Title } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Hero } from '~/components'

export const PricingHero: FunctionComponent = () => (
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
