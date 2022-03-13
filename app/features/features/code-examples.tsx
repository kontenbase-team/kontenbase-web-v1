import {
  Text,
  Title,
  Tabs,
  Group,
  Container,
  Anchor,
  Button,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { FunctionComponent } from 'react'

import { CustomTabs, Icon } from '~/components'
import { explainAPICodeImport } from '~/data'

interface FeatureCodeExamplesProps {
  subTitle: string
  subDescription: string
  docsUrl: string
  codeExamples: any[]
}

export const FeatureCodeExamples: FunctionComponent<
  FeatureCodeExamplesProps
> = ({ subTitle, subDescription, docsUrl, codeExamples }) => (
  <Container
    size="lg"
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem',
      padding: `5rem ${theme.spacing.lg}px`,
    })}
  >
    <Group sx={{ width: '100%', flexWrap: 'wrap', gap: '3rem' }}>
      <Group sx={{ width: '100%', justifyContent: 'space-between' }}>
        <Group sx={{ maxWidth: '42ch' }}>
          <Title order={3}>{subTitle}</Title>
          <Text>{subDescription}</Text>
          <Anchor href={docsUrl} target="_blank">
            <Button
              compact
              variant="light"
              rightIcon={<Icon name="arrow-right" />}
            >
              Read Docs
            </Button>
          </Anchor>
        </Group>
      </Group>

      <CustomTabs sx={{ width: '100%', minHeight: 330 }}>
        {codeExamples.map((item: any) => (
          <Tabs.Tab key={item.label} label={item.label}>
            <Prism
              colorScheme="dark"
              language="typescript"
              scrollAreaComponent="div"
              withLineNumbers
              copyLabel="Copy code"
              copiedLabel="Copied!"
              sx={{ pre: { borderRadius: 0, marginTop: 0 } }}
            >
              {explainAPICodeImport + item.code}
            </Prism>
          </Tabs.Tab>
        ))}
      </CustomTabs>
    </Group>
  </Container>
)
