import { Box, Modal } from '@mantine/core'
import { FunctionComponent, useState } from 'react'

import { Flex, VideoYouTube } from '~/components'

interface HomeHeroVideoProps {}

export const HomeHeroVideo: FunctionComponent<HomeHeroVideoProps> = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Modal
        centered
        size="xl"
        hideCloseButton
        transition="fade"
        transitionDuration={600}
        transitionTimingFunction="ease"
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Box sx={{ minHeight: '450px' }}>
          <VideoYouTube
            data={{
              title: 'Kontenbase - Alpha - Product Demo',
              videoEmbedId: '0eDLqFZPxXw',
            }}
          />
        </Box>
      </Modal>

      <Box
        sx={(theme) => ({
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme.colors.gray[2],
          borderRadius: theme.radius.lg,
          maxWidth: '960px',
          img: {
            borderRadius: theme.radius.lg,
            objectFit: 'contain',
            margin: 0,
          },
        })}
      >
        <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <img
            alt="Kontenbase Platform Screenshot"
            src="/images/kontenbase-home-hero.png"
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
