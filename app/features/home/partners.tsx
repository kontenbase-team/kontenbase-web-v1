import { Box, Container, Group, Image } from '@mantine/core'
import { FunctionComponent } from 'react'

import { partnersData } from '~/data'

interface HomePartnersProps {}

export const HomePartners: FunctionComponent<HomePartnersProps> = () => (
  <Container
    size="xl"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5rem',
      gap: '3rem',
      textAlign: 'center',
    }}
  >
    <h1>Powering tech enterprise and startups</h1>
    <Group spacing="xl" sx={{ gap: '2rem', justifyContent: 'center' }}>
      {partnersData.map((partner) => (
        <Box
          key={partner.slug}
          sx={{
            img: {
              maxWidth: 200,
              maxHeight: 70,
            },
          }}
        >
          <Image
            src={`/images/partners/${partner.slug}-light.png`}
            alt={partner.name}
            fit="contain"
            sx={{
              filter: 'grayscale(1) contrast(0.5)',
              '&:hover': {
                filter: 'grayscale(0)',
              },
            }}
          />
        </Box>
      ))}
    </Group>
  </Container>
)

export default HomePartners
