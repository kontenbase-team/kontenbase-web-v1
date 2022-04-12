import { FunctionComponent } from 'react'

interface AnchorProps {
  href: string
  children: React.ReactNode
}

export const Anchor: FunctionComponent<AnchorProps> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
)
