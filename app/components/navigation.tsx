/* eslint-disable no-nested-ternary */
import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  MediaQuery,
  Text,
  Menu,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link, NavLink, useLocation } from 'remix'

import { ButtonToggleTheme, SocialMediaLinks } from '~/components'
import { appData, navigationData, navigationFeaturesData } from '~/data'

interface NavigationProps {}

export const Navigation: FunctionComponent<NavigationProps> = () => {
  const location = useLocation()

  const { colorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  const dark = colorScheme === 'dark'

  return (
    <Box
      component="nav"
      sx={{
        userSelect: 'none',
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
      }}
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
              sx={{
                img: {
                  height: '30px !important',
                  margin: '0 !important',
                  '@media (min-width: 540px)': {
                    height: '42px !important',
                  },
                },
              }}
              src={
                dark ? '/images/logo-on-dark.svg' : '/images/logo-on-light.svg'
              }
            />
          </Link>
        </Group>

        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Group
            id="nav-links"
            sx={{ marginLeft: appData.isAuthEnabled ? '5rem' : '-8rem' }}
          >
            {navigationData.map((item) => {
              const isCurrentPage = location.pathname === item.to
              const color = dark ? theme.white : theme.black

              return (
                <NavLink key={item.to} to={item.to}>
                  <Text
                    sx={{
                      fontWeight: 'bold',
                      color: isCurrentPage ? theme.colors.red[7] : color,
                    }}
                  >
                    {item.text}
                  </Text>
                </NavLink>
              )
            })}
            {/* Navigation Menu: Features */}
            <Menu
              size="lg"
              trigger="hover"
              placement="end"
              shadow="xl"
              withArrow
              control={
                <Text
                  sx={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: location.pathname.includes('features')
                      ? theme.colors.red[7]
                      : dark
                      ? theme.white
                      : theme.black,
                  }}
                >
                  Features
                </Text>
              }
            >
              {navigationFeaturesData.map((item) => (
                <Menu.Item key={item.text} component={NavLink} to={item.to}>
                  {item.text}
                </Menu.Item>
              ))}
            </Menu>
          </Group>
        </MediaQuery>

        <Group spacing="sm" sx={{ alignItems: 'center' }}>
          <SocialMediaLinks enabledLinks={['Twitter', 'GitHub', 'Discord']} />

          <ButtonToggleTheme />

          {appData.isAuthEnabled && (
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Group id="nav-auth">
                <Link to="/signup">
                  <Button
                    radius="md"
                    variant="gradient"
                    gradient={{ from: 'red', to: 'orange', deg: 105 }}
                  >
                    Start for Free
                  </Button>
                </Link>
              </Group>
            </MediaQuery>
          )}

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
    <Menu.Label>Website</Menu.Label>
    {navigationData.map((item) => (
      <Menu.Item component={Link} key={item.to} to={item.to}>
        {item.text}
      </Menu.Item>
    ))}

    <Divider />
    <Menu.Label>Features</Menu.Label>
    {navigationFeaturesData.map((item) => (
      <Menu.Item component={Link} key={item.to} to={item.to}>
        {item.text}
      </Menu.Item>
    ))}

    {appData.isAuthEnabled && (
      <>
        <Divider />
        <Menu.Label>Account</Menu.Label>
        <Menu.Item component={Link} to="/signin">
          Sign In
        </Menu.Item>
        <Menu.Item component={Link} to="/signup" color="red">
          Sign Up
        </Menu.Item>
      </>
    )}
  </Menu>
)
