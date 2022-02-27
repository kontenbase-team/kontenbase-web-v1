import { Container, Title } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Features } from '~/components'

export const HomeFeatures: FunctionComponent = () => (
  <Container
    size="xl"
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `5rem ${theme.spacing.xl}px`,
      gap: '5rem',
    })}
  >
    <Title order={2} sx={{ textAlign: 'center', maxWidth: '18ch' }}>
      Focus on your products, don’t reinvent the wheel!
    </Title>
    <Features />
  </Container>
)
