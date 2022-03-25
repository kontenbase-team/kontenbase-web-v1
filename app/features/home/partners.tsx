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
      padding: '5rem 1rem',
      gap: '3rem',
      textAlign: 'center',
    }}
  >
    <h2>Powering tech enterprise and startups</h2>
    <Group
      spacing="xl"
      sx={{
        justifyContent: 'center',
        gap: '1.5rem',
        '@media (min-width: 540px)': {
          gap: '2rem',
        },
      }}
    >
      {partnersData.map((partner) => (
        <Box
          key={partner.slug}
          sx={{
            img: {
              maxWidth: '150px !important',
              maxHeight: '52px !important',
              '@media (min-width: 540px)': {
                maxWidth: '200px !important',
                maxHeight: '70px !important',
              },
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
