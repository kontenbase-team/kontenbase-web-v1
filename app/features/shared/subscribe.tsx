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
import { Form, json } from 'remix'

import { getEnvServer } from '~/utils'

import type { ActionFunction } from 'remix'

interface SubscribeSectionProps {
  transition?: any
  actionData?: any
}

export const SubscribeSection = (props: SubscribeSectionProps) => (
  <Container
    size="sm"
    sx={{
      marginTop: '5rem',
      marginBottom: '5rem',
    }}
  >
    <Box sx={{ marginBottom: '1rem' }}>
      <Title order={2}>Subscribe to our newsletter</Title>
      <Text>Get updates and join our early adopter program</Text>
    </Box>

    <SubscribeBoxForm transition={props.transition} />

    <Box sx={{ marginTop: '1rem' }}>
      {props.actionData?.error && (
        <Alert radius="md" color="red">
          {props.actionData?.message}
        </Alert>
      )}
      {props.actionData?.subscriber?.email && (
        <Alert radius="md" color="green">
          {props.actionData?.message}
        </Alert>
      )}
    </Box>
  </Container>
)

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
      email,
      metadata: { name },
      notes: 'early',
      tags: ['early'],
    }

    const response = await axios.post(
      'https://api.buttondown.email/v1/subscribers',
      payload,
      {
        headers: {
          Authorization: `Token ${getEnvServer('BUTTONDOWN_API_KEY')}`,
        },
      }
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

      console.log({ data })

      if (data?.email) {
        return json({
          message: `${data?.email} is subscribed! Check the inbox to confirm`,
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
