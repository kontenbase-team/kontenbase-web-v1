import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Icon } from '~/components'

interface ButtonToggleThemeProps {}

export const ButtonToggleTheme: FunctionComponent<
  ButtonToggleThemeProps
> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      radius="md"
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Icon name="light" /> : <Icon name="dark" />}
    </ActionIcon>
  )
}
