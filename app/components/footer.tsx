import { Box, Container } from '@mantine/core'
import { FunctionComponent } from 'react'

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        background: theme.colors.gray[9],
        padding: theme.spacing.xl,
        color: theme.colors.gray[0],
      })}
    >
      <Container size="lg">
        Copyright &copy; 2022 Kontenbase. All rights reserved
      </Container>
    </Box>
  )
}
