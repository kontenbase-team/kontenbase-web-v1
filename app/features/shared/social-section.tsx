import { Container } from '@mantine/core'
import { FunctionComponent } from 'react'

import { SocialCardDiscord, SocialCardTwitter } from '~/components'

interface SocialSectionProps {}

export const SocialSection: FunctionComponent<SocialSectionProps> = () => {
  return (
    <Container
      size="xl"
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 1rem',
        gap: '3rem',
      }}
    >
      <SocialCardDiscord />
      <SocialCardTwitter />
    </Container>
  )
}
