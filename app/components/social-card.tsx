import { Box, Text } from '@mantine/core'
import { FunctionComponent } from 'react'

interface SocialCardProps {}

export const SocialCard: FunctionComponent<SocialCardProps> = () => {
  return (
    <Box>
      <h1>Social Card</h1>
    </Box>
  )
}

export const SocialCardDiscord: FunctionComponent<SocialCardProps> = () => {
  return (
    <a href="https://a.kontenbase.com/discord" target="_blank" rel="noreferrer">
      <Box
        sx={{
          color: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          background: '#5865F2',
        }}
      >
        <h4>Join our Discord</h4>
        <Text>
          Let's discuss with the community, our team and other developers on
          using Kontenbase. You can also help shape our product.
          https://a.kontenbase.com/discord
        </Text>
      </Box>
    </a>
  )
}

export const SocialCardTwitter: FunctionComponent<SocialCardProps> = () => {
  return (
    <a href="https://a.kontenbase.com/discord" target="_blank" rel="noreferrer">
      <Box
        sx={{
          color: 'white',
          padding: '2rem',
          borderRadius: '1rem',
          background: '#1DA1F2',
        }}
      >
        <h4>Follow us on Twitter</h4>
        <Text>
          Get quick updates on your timeline. https://twitter.com/kontenbase
        </Text>
      </Box>
    </a>
  )
}
