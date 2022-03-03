import {
  Container,
  Group,
  Title,
  Text,
  Anchor,
  SimpleGrid,
  Card,
  Avatar,
  useMantineTheme,
  Box,
} from '@mantine/core'
import { FunctionComponent } from 'react'

import { AnchorButton } from '~/components'
import { teamData } from '~/data'
import { getNameColor, getNameInitials } from '~/utils'

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

      <TeamMembers data={teamData} />
    </Group>
  </Container>
)

interface TeamMembersProps {
  data: any
}

export const TeamMembers: FunctionComponent<TeamMembersProps> = ({ data }) => {
  const theme = useMantineTheme()

  return (
    <Group direction="column" sx={{ width: '100%' }}>
      {data.map((part: any) => (
        <Group key={part.type} direction="column" sx={{ width: '100%' }}>
          <Title order={4}>{part.type}</Title>
          <SimpleGrid
            spacing="sm"
            cols={3}
            sx={{ width: '100%' }}
            breakpoints={[
              { maxWidth: theme.breakpoints.md, cols: 3 },
              { maxWidth: theme.breakpoints.sm, cols: 2 },
              { maxWidth: theme.breakpoints.xs, cols: 1 },
            ]}
          >
            {part.members.map((member: any) => {
              const nameInitials = getNameInitials(member.name)
              const nameColor = getNameColor(nameInitials)

              return (
                <Card key={member.name} withBorder>
                  <Avatar
                    src={member.avatarUrl}
                    alt={member.name}
                    size="lg"
                    radius="xl"
                    color="red"
                    sx={{ backgroundColor: nameColor }}
                  >
                    {nameInitials}
                  </Avatar>

                  <Box sx={{ marginTop: '0.5rem' }}>
                    <Text sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                      {member.name}
                    </Text>
                    <Text>{member.role}</Text>
                  </Box>
                </Card>
              )
            })}
          </SimpleGrid>
        </Group>
      ))}
    </Group>
  )
}
