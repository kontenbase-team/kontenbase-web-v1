import { Box } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Footer, Navigation } from '~/components'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Navigation />
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  )
}
