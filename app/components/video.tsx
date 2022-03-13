import { Box } from '@mantine/core'
import { FunctionComponent } from 'react'

interface VideoYouTubeProps {
  data: {
    title: string
    videoEmbedId: string
  }
}

export const VideoYouTube: FunctionComponent<VideoYouTubeProps> = ({
  data,
}) => (
  <Box
    component="iframe"
    sx={{
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute',
    }}
    title={data.title}
    src={`https://www.youtube.com/embed/${data.videoEmbedId}?playlist=${data.videoEmbedId}&controls=1&modestbranding=1&rel=0&disablekb=1`}
    width="1280"
    height="720"
    frameBorder="0"
    allowFullScreen
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
  />
)
