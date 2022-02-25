import { Box, Container, Title } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Features } from '~/components'

export const HomeFeatures: FunctionComponent = () => {
  return (
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
      <Title order={2}>Focus on Products, Don’t Reinvent the Wheel!</Title>
      <Features />
    </Container>
  )
}
