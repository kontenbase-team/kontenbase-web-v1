import { Title } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Hero } from '~/components'

export const ContactHero: FunctionComponent = () => (
  <Hero>
    <Title
      order={1}
      sx={(theme) => ({
        color: theme.colors.red[7],
      })}
    >
      Contact
    </Title>
    <Title order={2}>Support links and team</Title>
  </Hero>
)
