import { Title } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Hero } from '~/components'

export const PricingHero: FunctionComponent = () => (
  <Hero>
    <Title
      order={1}
      sx={(theme) => ({
        color: theme.colors.red[7],
      })}
    >
      Pricing
    </Title>
    <Title order={2} sx={{ maxWidth: '25ch' }}>
      Predictable pricing, no surprises. Scale to millions of users
    </Title>
  </Hero>
)
