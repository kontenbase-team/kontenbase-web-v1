import { Container } from '@mantine/core'
import { FunctionComponent } from 'react'

import { teamData } from '~/data'

export const ContactContent: FunctionComponent = () => (
  <Container
    size="xl"
    sx={{
      marginTop: '5rem',
      marginBottom: '5rem',
    }}
  >
    Contact Content
    <pre>{JSON.stringify(teamData, null, 2)}</pre>
  </Container>
)
