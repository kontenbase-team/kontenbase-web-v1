import { Box } from '@mantine/core'
import { FunctionComponent } from 'react'

interface FlexProps {
  sx?: any
  children: React.ReactNode
}

export const Flex: FunctionComponent<FlexProps> = ({ sx, children }) => (
  <Box sx={{ display: 'flex', ...sx }}>{children}</Box>
)
