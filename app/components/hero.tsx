import { Container } from '@mantine/core'
import { FunctionComponent } from 'react'

interface HeroProps {
  children: React.ReactNode
}

export const Hero: FunctionComponent<HeroProps> = ({ children }) => (
  <Container
    sx={(theme) => ({
      paddingTop: '3rem',
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem',
    })}
  >
    {children}
  </Container>
)
