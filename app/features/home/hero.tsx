import {
  Box,
  Text,
  Button,
  Group,
  Title,
  Anchor,
  MediaQuery,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { Decoration, Icon } from '~/components'
import { appData } from '~/data'
import { HomeHeroVideo } from '~/features'

export const HomeHero: FunctionComponent = () => (
  <Box
    sx={(theme) => ({
      paddingTop: '3rem',
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      gap: '2rem',
    })}
  >
    <Title
      order={1}
      sx={{
        maxWidth: '16ch',
        fontSize: '2.5rem !important',
        marginTop: '0 !important',
        '@media (min-width: 540px)': {
          fontSize: '3.5rem !important',
        },
      }}
    >
      <Text
        inherit
        component="span"
        sx={(theme) => ({
          color: theme.colors.red[7],
        })}
      >
        No Code
      </Text>{' '}
      Backend API, Fast and Easy!
    </Title>

    <Text
      size="xl"
      color="dimmed"
      sx={{
        maxWidth: '38ch',
        fontWeight: 500,
        fontSize: '1rem',
        '@media (min-width: 540px)': {
          fontSize: '1.5rem',
        },
      }}
    >
      Kontenbase allows you to easily create backend API, auth, and storage in
      less than 1 minute without coding.
    </Text>

    <Group
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {appData.isAuthEnabled && (
        <Link to="/signup">
          <Button
            size="md"
            radius="md"
            variant="gradient"
            gradient={{ from: 'red', to: 'orange', deg: 105 }}
          >
            Sign Up for Free
          </Button>
        </Link>
      )}
      <Anchor href="https://docs.kontenbase.com" target="_blank">
        <Button
          size="md"
          radius="md"
          variant="outline"
          leftIcon={<Icon name="docs" />}
        >
          Documentation
        </Button>
      </Anchor>
    </Group>

    <HomeHeroDecoration>
      <HomeHeroVideo />
    </HomeHeroDecoration>
  </Box>
)

export const HomeHeroDecoration: FunctionComponent = ({ children }) => (
  <Box sx={{ position: 'relative' }}>
    {children}
    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      <Box>
        <Decoration index={0} />
        <Decoration index={1} />
        <Decoration index={2} />
        <Decoration index={3} />
        <Decoration index={4} />
        <Decoration index={5} />
      </Box>
    </MediaQuery>
  </Box>
)
