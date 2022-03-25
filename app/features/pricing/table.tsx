import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Title,
  Text,
  Group,
  useMantineTheme,
  useMantineColorScheme,
  MediaQuery,
} from '@mantine/core'
import { FunctionComponent, useState } from 'react'
import { Link } from 'remix'

import { Flex, Icon } from '~/components'
import { appData, pricingData, pricingFeaturesData } from '~/data'

type TCurrency = 'USD' | 'IDR'

interface PricingTableProps {}

interface PricingTableResponsiveProps {
  currency: TCurrency
}

interface AdaptiveLinkButtonProps {
  plan: any
}

export const PricingTable: FunctionComponent<PricingTableProps> = () => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [currency, setCurrency] = useState<TCurrency>('USD')

  const changeCurrency = () => {
    if (currency === 'USD') {
      setCurrency('IDR')
    } else {
      setCurrency('USD')
    }
  }

  return (
    <Container
      size="xl"
      sx={{
        marginTop: '1rem',
        marginBottom: '5rem',
      }}
    >
      <Flex sx={{ justifyContent: 'center', marginBottom: '5rem' }}>
        <Button variant="outline" radius="md" onClick={changeCurrency}>
          Switch USD/IDR
        </Button>
      </Flex>

      <PricingTableDesktop currency={currency} />

      <PricingTableMobile currency={currency} />
    </Container>
  )
}

export const AdaptiveLinkButton: FunctionComponent<AdaptiveLinkButtonProps> = ({
  plan,
}) => {
  if (plan.button.to) {
    return (
      <Link to={plan.button.to}>
        <Button radius="md">{plan.button.text}</Button>
      </Link>
    )
  }

  return (
    <Button radius="md" variant="outline">
      {plan.button.text}
    </Button>
  )
}

export const PricingTableDesktop: FunctionComponent<
  PricingTableResponsiveProps
> = ({ currency }) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'
  const backgroundFirst = isDark ? theme.colors.gray[9] : theme.colors.gray[1]
  const backgroundSecond = isDark ? theme.colors.gray[8] : theme.white

  const headerHeight = appData.isAuthEnabled ? 220 : 175

  return (
    <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
      <SimpleGrid spacing={0} cols={5} sx={{ marginBottom: '1rem' }}>
        <Box>
          <Box sx={{ height: headerHeight }} />
          {pricingFeaturesData.map((item) => (
            <Group key={item.name}>
              {item.icon ? (
                <Group
                  sx={{
                    width: '100%',
                    padding: '1rem',
                    background: backgroundFirst,
                  }}
                >
                  <Text component="span" color="red">
                    <Icon name={item.icon} />
                  </Text>
                  <Text
                    component="span"
                    sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                  >
                    {item.name}
                  </Text>
                </Group>
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    padding: '1rem',
                    background: backgroundSecond,
                  }}
                >
                  <Text component="span" sx={{ fontWeight: 'bold' }}>
                    {item.name}
                  </Text>
                </Box>
              )}
            </Group>
          ))}
        </Box>

        {pricingData.map((plan) => (
          <Group key={plan.name} direction="column" spacing={0}>
            <Group
              direction="column"
              spacing="xs"
              sx={{ height: headerHeight }}
            >
              <Title order={3}>{plan.name}</Title>
              <Group spacing={5}>
                <Text
                  component="span"
                  sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                >
                  {currency === 'USD' ? '$' : 'Rp '}
                  {plan?.price[currency]}
                </Text>
                <span>/project/month</span>
              </Group>
              <Text>{plan.info}</Text>
              {appData.isAuthEnabled && <AdaptiveLinkButton plan={plan} />}
            </Group>

            {plan.features.map((item) => (
              <Box
                key={item}
                sx={{
                  width: '100%',
                  padding: '1rem',
                  background: item ? backgroundSecond : backgroundFirst,
                }}
              >
                {item ? (
                  <Text component="span">{item}</Text>
                ) : (
                  <Text component="span" sx={{ opacity: 0 }}>
                    -
                  </Text>
                )}
              </Box>
            ))}

            {appData.isAuthEnabled && (
              <Box sx={{ marginTop: '1rem' }}>
                <AdaptiveLinkButton plan={plan} />
              </Box>
            )}
          </Group>
        ))}
      </SimpleGrid>
    </MediaQuery>
  )
}

export const PricingTableMobile: FunctionComponent<
  PricingTableResponsiveProps
> = ({ currency }) => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'
  const backgroundFirst = isDark ? theme.colors.gray[9] : theme.colors.gray[1]
  const backgroundSecond = isDark ? theme.colors.gray[8] : theme.white

  const headerHeight = appData.isAuthEnabled ? 180 : 150

  return (
    <MediaQuery largerThan="md" styles={{ display: 'none' }}>
      <Box>
        {pricingData.map((plan) => (
          <SimpleGrid
            key={plan.name}
            spacing={0}
            cols={2}
            sx={{ marginBottom: '5rem' }}
          >
            <Box>
              <Box sx={{ height: headerHeight }} />
              {pricingFeaturesData.map((item) => (
                <Group key={item.name}>
                  {item.icon ? (
                    <Group
                      sx={{
                        width: '100%',
                        padding: '1rem',
                        background: backgroundFirst,
                      }}
                    >
                      <Text component="span" color="red">
                        <Icon name={item.icon} />
                      </Text>
                      <Text
                        component="span"
                        sx={{
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.name}
                      </Text>
                    </Group>
                  ) : (
                    <Box
                      sx={{
                        width: '100%',
                        padding: '1rem',
                        background: backgroundSecond,
                      }}
                    >
                      <Text component="span" sx={{ fontWeight: 'bold' }}>
                        {item.name}
                      </Text>
                    </Box>
                  )}
                </Group>
              ))}
            </Box>

            <Box>
              <Group key={plan.name} direction="column" spacing={0}>
                <Group
                  direction="column"
                  spacing="xs"
                  sx={{ height: headerHeight }}
                >
                  <Title order={3}>{plan.name}</Title>
                  <Group spacing={5}>
                    <Text
                      component="span"
                      sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                    >
                      {currency === 'USD' ? '$' : 'Rp '}
                      {plan?.price[currency]}
                    </Text>
                    <span>/project/month</span>
                  </Group>
                  <Text>{plan.info}</Text>
                  {appData.isAuthEnabled && <AdaptiveLinkButton plan={plan} />}
                </Group>

                {plan.features.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      width: '100%',
                      padding: '1rem 0',
                      background: item ? backgroundSecond : backgroundFirst,
                    }}
                  >
                    {item ? (
                      <Text component="span">{item}</Text>
                    ) : (
                      <Text component="span" sx={{ opacity: 0 }}>
                        -
                      </Text>
                    )}
                  </Box>
                ))}

                {appData.isAuthEnabled && (
                  <Box sx={{ marginTop: '1rem' }}>
                    <AdaptiveLinkButton plan={plan} />
                  </Box>
                )}
              </Group>
            </Box>
          </SimpleGrid>
        ))}
      </Box>
    </MediaQuery>
  )
}
