import { FunctionComponent } from 'react'
import { Anchor, Group } from '@mantine/core'
import { Icon } from '~/components'
import { socialMediaLinks } from '~/data'

interface SocialMediaLinksProps {
  enabledLinks?: string[]
  withName?: boolean
}

interface SocialMediaLinkProps {
  link: any
}

interface SocialMediaLinkNamedProps {
  link: any
}

export const SocialMediaLinks: FunctionComponent<SocialMediaLinksProps> = ({
  enabledLinks,
  withName,
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
