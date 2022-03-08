import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  MediaQuery,
  Menu,
  useMantineColorScheme,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { ButtonToggleTheme } from '~/components'
import { navigationData } from '~/data'

interface NavigationProps {}

export const Navigation: FunctionComponent<NavigationProps> = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <Box
      component="nav"
      sx={(theme) => ({
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
      })}
    >
      <Container
        size="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Group id="nav-logo">
          <Link to="/">
            <Image
              height={42}
              src={
                dark ? '/images/logo-on-dark.svg' : '/images/logo-on-light.svg'
              }
              sx={{
                img: {
                  margin: 0,
                },
              }}
            />
          </Link>
        </Group>

        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group id="nav-links" sx={{ marginLeft: '5rem' }}>
            {navigationData.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.text}
              </Link>
            ))}
          </Group>
        </MediaQuery>

        <Group spacing="sm">
          <ButtonToggleTheme />

          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Group id="nav-auth">
              <Link to="/signin">
                <Button radius="md" variant="subtle" color="red">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  radius="md"
                  variant="gradient"
                  gradient={{ from: 'red', to: 'orange', deg: 105 }}
                >
                  Sign Up for Free
                </Button>
              </Link>
            </Group>
          </MediaQuery>

          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Box>
              <NavigationMenu />
            </Box>
          </MediaQuery>
        </Group>
      </Container>
    </Box>
  )
}

interface NavigationMenuProps {}

export const NavigationMenu: FunctionComponent<NavigationMenuProps> = () => (
  <Menu
    size="lg"
    shadow="xl"
    control={
      <Button
        radius="md"
        variant="gradient"
        gradient={{ from: 'red', to: 'orange', deg: 105 }}
      >
        Menu
      </Button>
    }
  >
    {navigationData.map((item) => (
      <Menu.Item component={Link} key={item.to} to={item.to}>
        {item.text}
      </Menu.Item>
    ))}
    <Divider />
    <Menu.Item>Sign In</Menu.Item>
    <Menu.Item color="red">Sign Up</Menu.Item>
  </Menu>
)
