import { Box } from '@mantine/core'
import { FunctionComponent, useState } from 'react'

interface HomeHeroVideoProps {}

export const HomeHeroVideo: FunctionComponent<HomeHeroVideoProps> = () => {
  const [opened, setOpened] = useState(false)

  return (
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
      <img alt="Kontenbase Screenshot" src="/images/kontenbase-home-hero.png" />
    </Box>
  )
}
