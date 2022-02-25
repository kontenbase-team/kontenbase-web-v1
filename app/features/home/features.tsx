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
        padding: '3rem',
        gap: '3rem',
      })}
    >
      <Title order={2}>Focus on Products, Don’t Reinvent the Wheel!</Title>
      <Features />
    </Container>
  )
}
