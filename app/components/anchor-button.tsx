import { Anchor, Button } from '@mantine/core'
import { FunctionComponent } from 'react'

interface AnchorButtonProps {
  href: string
  children: React.ReactNode
}

export const AnchorButton: FunctionComponent<AnchorButtonProps> = ({
  href,
  children,
}) => (
  <Anchor href={href}>
    <Button>{children}</Button>
  </Anchor>
)
