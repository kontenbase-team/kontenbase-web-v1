import {
  Image,
  Button,
  Container,
  Group,
  Title,
  Anchor,
  Box,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { appData, stacksData } from '~/data'

export const HomeActionLast: FunctionComponent = () => (
  <Container
    size="xl"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5rem 1rem',
      gap: '3rem',
      textAlign: 'center',
    }}
  >
    <Title order={2} sx={{ maxWidth: '24ch' }}>
      Try our managed service with battle tested technology stack
    </Title>

    <Group
      spacing="xl"
      sx={{
        justifyContent: 'center',
        maxWidth: '780px',
        gap: '1.5rem',
        '@media (min-width: 540px)': {
          gap: '2rem',
        },
      }}
    >
      {stacksData.map((item) => (
        <Anchor key={item.name} href={item.url} target="_blank">
          <Box
            sx={{
              img: {
                maxHeight: '35px !important',
                '@media (min-width: 540px)': {
                  maxHeight: '70px !important',
                },
              },
            }}
          >
            <Image
              key={item.name}
              src={item.imageUrl}
              alt={item.name}
              fit="contain"
              height={60}
              sx={{
                filter: 'grayscale(1) contrast(0.5)',
                '&:hover': {
                  filter: 'grayscale(0)',
                },
              }}
            />
          </Box>
        </Anchor>
      ))}
    </Group>

    {appData.isAuthEnabled && (
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
    )}
  </Container>
)
