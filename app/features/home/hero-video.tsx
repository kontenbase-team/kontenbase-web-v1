import { AspectRatio, Box, Image, Modal, useMantineTheme } from '@mantine/core'
import { FunctionComponent, useState } from 'react'

import { Flex, VideoYouTube } from '~/components'

interface HomeHeroVideoProps {}

export const HomeHeroVideo: FunctionComponent<HomeHeroVideoProps> = () => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()

  return (
    <>
      <Modal
        centered
        size="xl"
        withCloseButton={false}
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <AspectRatio ratio={16 / 9}>
          <VideoYouTube
            position="absolute"
            data={{
              title: 'Kontenbase - Alpha - Product Demo',
              videoEmbedId: '0eDLqFZPxXw',
            }}
          />
        </AspectRatio>
      </Modal>

      <Box
        sx={{
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme.colors.gray[2],
          borderRadius: theme.radius.lg,
          maxWidth: '960px',
        }}
      >
        <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            alt="Kontenbase Platform Screenshot"
            src="/images/kontenbase-home-hero.png"
            sx={{
              img: {
                borderRadius: theme.radius.lg,
                objectFit: 'contain',
                margin: '0 !important',
              },
            }}
          />
          <Box
            onClick={() => setOpened(true)}
            sx={{
              display: 'flex',
              cursor: 'pointer',
              position: 'absolute',
              alignItems: 'center',
              img: { transition: 'transform 0.25s ease-in-out' },
              '&:hover': {
                img: { transform: 'scale(1.1, 1.1)' },
              },
            }}
          >
            <img
              src="/images/play-button.svg"
              alt="Play Introduction Video"
              width={100}
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
