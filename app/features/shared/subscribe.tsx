import {
  Title,
  Text,
  Input,
  Alert,
  Box,
  Container,
  Button,
  Group,
} from '@mantine/core'
import axios from 'axios'
import { FunctionComponent } from 'react'
import { Form, json } from 'remix'

import { getEnvServer } from '~/utils'

import type { ActionFunction } from 'remix'

interface SubscribeSectionProps {
  transition?: any
  actionData?: any
}

export const SubscribeSection: FunctionComponent<SubscribeSectionProps> = ({
  transition,
  actionData,
}) => {
  return (
    <Container
      size="sm"
      sx={{
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Box sx={{ marginBottom: '1rem' }}>
        <Title order={2}>Subscribe to our newsletter</Title>
        <Text>Get updates and join our newsletter</Text>
      </Box>

      <SubscribeBoxForm transition={transition} />

      <Box sx={{ marginTop: '1rem' }}>
        {actionData && (
          <Alert radius="md" color="green">
            Thank you for subscribing. Please check your inbox.
          </Alert>
        )}

        {!actionData && (
          <Alert radius="md" color="red">
            Sorry something went wrong. Please try again.
          </Alert>
        )}
      </Box>
    </Container>
  )
}

export const SubscribeBoxForm = ({ transition }: { transition: any }) => {
  const subscribeText =
    transition.state === 'submitting' ? 'Subscribing...' : 'Subscribe'

  return (
    <Form method="post">
      <Group
        sx={{
          flexWrap: 'wrap',
          flexDirection: 'column',
          '@media (max-width: 640px)': {
            '& *, & button': { width: '100%' },
          },
          '@media (min-width: 640px)': {
            flexDirection: 'row',
          },
        }}
      >
        <Input
          size="md"
          radius="md"
          name="name"
          type="text"
          placeholder="Your Full Name"
          required
        />
        <Input
          size="md"
          radius="md"
          name="email"
          type="email"
          placeholder="name@email.com"
          required
          sx={{ flex: 1 }}
        />
        <Button
          size="md"
          radius="md"
          type="submit"
          disabled={transition.state === 'submitting'}
        >
          {subscribeText}
        </Button>
      </Group>
    </Form>
  )
}

/**
 * Regular function to request to Buttondown
 */
export const subscribeNew = async ({
  email,
  name,
}: {
  email: string
  name: string
}) => {
  try {
    const payload = {
      api_key: `${getEnvServer('CONVERTKIT_API_KEY')}`,
      email,
      first_name: name,
    }

    const response = await axios.post(
      'https://api.convertkit.com/v3/forms/3160913/subscribe',
      payload
    )

    return response.data
  } catch (error: any) {
    console.error(error.response.status, error.response.data)
    return error.response.data[0]
  }
}

/**
 * Remix Action
 */
export const subscribeAction: ActionFunction = async ({ request }) => {
  try {
    const form = await request.formData()
    const email = form.get('email')?.toString()
    const name = form.get('name')?.toString()

    if (email && name) {
      const data = await subscribeNew({ email, name })

      console.log(JSON.stringify(data, null, 2))

      if (data?.email) {
        return json({
          message: `${data?.email} is subscribed! Check your inbox to confirm`,
          subscriber: data,
        })
      }
      return json({ error: true, message: data })
    }
    return json({
      error: true,
      message: 'Sorry, please provide name and email',
    })
  } catch (error) {
    return json({ error: true, message: 'Sorry, failed for unknown reason' })
  }
}
