import { Image, Button, Container, Group, Title } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { stacksData } from '~/data'

export const HomeActionLast: FunctionComponent = () => {
  return (
    <Container
      size="xl"
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '3rem',
        gap: '3rem',
        textAlign: 'center',
      })}
    >
      <Title order={2} sx={{ maxWidth: '24ch' }}>
        Try our managed service with battle tested technology stack
      </Title>

      <Group>
        {stacksData.map((item) => {
          return (
            <Image
              key={item.name}
              src={item.imageUrl}
              alt={item.name}
              fit="contain"
            />
          )
        })}
      </Group>

      <Link to="/signup">
        <Button
          size="lg"
          radius="md"
          variant="gradient"
          gradient={{ from: 'red', to: 'orange', deg: 105 }}
        >
          Sign Up for Free
        </Button>
      </Link>
    </Container>
  )
}
