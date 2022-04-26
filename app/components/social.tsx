import { Anchor, Group } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { socialMediaLinks } from '~/data'

interface SocialMediaLinksProps {
  enabledLinks?: string[]
  sx: any
}

interface SocialMediaLinkProps {
  link: any
}

export const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
  enabledLinks,
  sx,
}) => {
  // Check if there are enabledLinks array
  const filteredLinks = enabledLinks?.length
    ? socialMediaLinks.filter((item) => enabledLinks?.includes(item.name))
    : socialMediaLinks

  return (
    <Group sx={sx}>
      {filteredLinks.map((link) => (
        <SocialMediaLink key={link.name} link={link} />
      ))}
    </Group>
  )
}

export const SocialMediaLink: FunctionComponent<SocialMediaLinkProps> = ({
  link,
}) => (
  <Anchor
    href={link.url}
    sx={{ lineHeight: 'initial' }}
    target="_blank"
    rel="noreferrer"
  >
    <Icon name={link.name.toLowerCase()} />
  </Anchor>
)
