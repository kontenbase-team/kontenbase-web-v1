import { Tabs, TabsProps } from '@mantine/core'
import { FunctionComponent } from 'react'

export const CustomTabs: FunctionComponent<TabsProps> = (props) => {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          padding: theme.spacing.sm,
          borderRadius: theme.radius.md,
          backgroundColor: 'none',
          color: theme.colors.red[7],
          fontSize: theme.fontSizes.md,
        },
        tabActive: {
          backgroundColor: theme.colors.red[7],
          color: theme.white,
        },
      })}
      {...props}
    />
  )
}
