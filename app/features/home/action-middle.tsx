import { Text, Button, Container, Group, Title, Box } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

export const HomeActionMiddle: FunctionComponent = () => {
  return (
    <Box
      sx={(theme) => ({
        color: theme.colors.gray[1],
        background: theme.colors.gray[9],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `5rem ${theme.spacing.xl}px`,
        gap: '3rem',
        textAlign: 'center',
      })}
    >
      <Title order={2} sx={(theme) => ({ color: theme.colors.gray[1] })}>
        Ready to try the power of{' '}
        <Text color="red" inherit component="span">
          no code
        </Text>
        ?
      </Title>

      <Text
        size="xl"
        sx={{ maxWidth: '38ch', fontWeight: 500, fontSize: '1.5rem' }}
      >
        Speed up development time by up to 90% then launch within days. Focus on
        product and let us do the scale!
      </Text>

      <Link to="/signup">
        <Button
          size="lg"
          radius="md"
          variant="gradient"
          gradient={{ from: 'red', to: 'orange', deg: 105 }}
        >
          Sign Up for Free
        </Button>
      </Link>
    </Box>
  )
}
