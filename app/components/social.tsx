import { Anchor, Group } from '@mantine/core'
import { FunctionComponent } from 'react'

import { Icon } from '~/components'
import { socialMediaLinks } from '~/data'

interface SocialMediaLinksProps {
  enabledLinks?: string[]
}

interface SocialMediaLinkProps {
  link: any
}

export const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
  enabledLinks,
}) => {
  // Check if there are enabledLinks array
  const filteredLinks = enabledLinks?.length
    ? socialMediaLinks.filter((item) => enabledLinks?.includes(item.name))
    : socialMediaLinks

  return (
    <Group>
      {filteredLinks.map((link) => (
        <SocialMediaLink key={link.name} link={link} />
      ))}
    </Group>
  )
}

export const SocialMediaLink: FunctionComponent<SocialMediaLinkProps> = ({
  link,
}) => (
  <Anchor href={link.url}>
    <Icon name={link.name.toLowerCase()} />
  </Anchor>
)
