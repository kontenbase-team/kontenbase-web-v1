import { Container, Title, Text } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Examples } from '~/components'

interface HomeExamplesProps {}

export const HomeExamples: FunctionComponent<HomeExamplesProps> = () => {
  return (
    <Container
      size="xl"
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `5rem ${theme.spacing.xl}px`,
        gap: '3rem',
      })}
    >
      <Title order={2} sx={{ textAlign: 'center' }}>
        What can you build with{' '}
        <Text color="red" inherit component="span">
          Kontenbase
        </Text>
        ?
      </Title>

      <Text
        color="dimmed"
        size="xl"
        sx={{
          textAlign: 'center',
          maxWidth: '45ch',
          fontWeight: 500,
          fontSize: '1.5rem',
        }}
      >
        Kontenbase can be used to build any app! Seriously, anything! Here some
        example that you can clone and try.
      </Text>
      <Examples />
    </Container>
  )
}
