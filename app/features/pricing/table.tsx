import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Title,
  Text,
  Group,
  useMantineTheme,
} from '@mantine/core'
import { FunctionComponent, useState } from 'react'
import { Link } from 'remix'

import { Icon } from '~/components'
import { pricingData, pricingFeaturesData } from '~/data'

type TCurrency = 'USD' | 'IDR'

interface PricingTableProps {}

interface PricingTableResponsiveProps {
  currency: TCurrency
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
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Button radius="md" onClick={changeCurrency}>
        Switch USD/IDR
      </Button>

      <PricingTableResponsive currency={currency} />
    </Container>
  )
}

export const PricingTableResponsive: FunctionComponent<
  PricingTableResponsiveProps
> = ({ currency }) => {
  const theme = useMantineTheme()

  return (
    <SimpleGrid
      spacing={0}
      cols={5}
      sx={{
        marginBottom: '1rem',
      }}
    >
      <Box>
        <Box sx={{ height: 220 }} />
        {pricingFeaturesData.map((item) => (
          <Group>
            {item.icon ? (
              <Group
                sx={{
                  width: '100%',
                  padding: '1rem',
                  background: theme.colors.gray[1],
                }}
              >
                <Icon name={item.icon} />
                <Text component="span" sx={{ textTransform: 'uppercase' }}>
                  {item.name}
                </Text>
              </Group>
            ) : (
              <Box
                sx={{
                  width: '100%',
                  padding: '1rem',
                  background: theme.white,
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
          <Group direction="column" spacing="xs" sx={{ height: 220 }}>
            <Title order={4}>{plan?.name}</Title>
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
            <Link to={plan.button.to}>
              <Button radius="md">{plan.button.text}</Button>
            </Link>
          </Group>

          {plan.features.map((item) => (
            <Box
              key={item}
              sx={{
                width: '100%',
                padding: '1rem',
                background: theme.colors.gray[1],
              }}
            >
              {item ? (
                <span>{item}</span>
              ) : (
                <Text component="span" sx={{ opacity: 0 }}>
                  -
                </Text>
              )}
            </Box>
          ))}
        </Group>
      ))}
    </SimpleGrid>
  )
}
