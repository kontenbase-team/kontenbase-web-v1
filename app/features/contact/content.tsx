import { Box, Container, Group, Title, Text, Anchor } from '@mantine/core'
import { FunctionComponent } from 'react'

import { AnchorButton } from '~/components'
import { teamData } from '~/data'

export const ContactContent: FunctionComponent = () => (
  <Container
    size="sm"
    sx={{
      marginTop: '5rem',
      marginBottom: '5rem',
    }}
  >
    <Group direction="column" spacing="xl">
      <Group direction="column">
        <Title order={3}>Support</Title>
        <Text>
          Thank you for being interested in Kontenbase! If you have any
          feedback, issue, or problem on learning and using Kontenbase, you can
          reach to us and the community through our main support channels:
        </Text>
        <Group>
          <AnchorButton href="https://github.com/kontenbase/feedback">
            GitHub
          </AnchorButton>
          <AnchorButton href="https://a.kontenbase.com/discord-invite">
            Discord
          </AnchorButton>
          <AnchorButton href="https://twitter.com/kontenbase">
            Twitter
          </AnchorButton>
        </Group>
      </Group>

      <Group direction="column">
        <Title order={3}>Team</Title>
        <Text>
          Kontenbase team is a collaboration between internal developers and
          contributors around the world. Want to join?{' '}
          <Anchor href="https://kontenbase.com/jobs" target="_blank">
            Apply here
          </Anchor>
          .
        </Text>
      </Group>

      <pre>{JSON.stringify(teamData, null, 2)}</pre>
    </Group>
  </Container>
)
