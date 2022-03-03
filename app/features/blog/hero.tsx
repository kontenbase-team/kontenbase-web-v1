import { Title } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Hero } from '~/components'

export const BlogHero: FunctionComponent = () => (
  <Hero>
    <Title
      order={1}
      sx={(theme) => ({
        color: theme.colors.red[7],
        fontSize: '2rem !important',
      })}
    >
      Blog
    </Title>
    <Title order={2}>Updates from us</Title>
  </Hero>
)
