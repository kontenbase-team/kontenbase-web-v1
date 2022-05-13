import { Box, Container, Group, Image } from '@mantine/core'

export const HomePowered = () => (
  <Container
    size="xl"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      textAlign: 'center',
    }}
  >
    <h3>Powered by</h3>
    <Group spacing="sm" sx={{ justifyContent: 'center' }}>
      <Box
        sx={{
          img: {
            maxWidth: '450px !important',
            maxHeight: '156px !important',
            '@media (min-width: 540px)': {
              maxWidth: '600px !important',
              maxHeight: '210px !important',
            },
          },
        }}
      >
        <Image
          src={`/images/partners/idcloudhost/idcloudhost-h-light.png`}
          alt="IDCloudHost"
          fit="contain"
          sx={{
            filter: 'grayscale(1) contrast(0.5)',
            '&:hover': {
              filter: 'grayscale(0)',
            },
          }}
        />
      </Box>
    </Group>
  </Container>
)
