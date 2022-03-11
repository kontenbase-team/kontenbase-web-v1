import { Box } from '@mantine/core'
import { FunctionComponent } from 'react'

import { decorationData } from '~/data'

interface DecorationProps {
  index: number
}

export const Decoration: FunctionComponent<DecorationProps> = ({
  index = 0,
}) => (
  <Box>
    <Box
      sx={{
        zIndex: '2',
        position: 'absolute',
        ...decorationData[index],
      }}
    />
  </Box>
)
