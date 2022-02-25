import { Box, Container } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Features } from '~/components'

export const HomeFeatures: FunctionComponent = () => {
  return (
    <Container size="lg">
      <Features />
    </Container>
  )
}
