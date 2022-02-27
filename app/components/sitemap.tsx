import { Anchor, Box, Group, Title } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'
import { sitemapData } from '~/data'

interface SitemapProps {}

export const Sitemap: FunctionComponent<SitemapProps> = () => {
  return (
    <Group
      spacing="xl"
      align="flex-start"
      sx={{ justifyContent: 'space-between' }}
    >
      {sitemapData.map((group) => {
        return (
          <Box>
            <Title order={4} sx={{ color: '#fff' }}>
              {group.text}
            </Title>
            <Group direction="column" spacing={0}>
              {group.links.map((link: any) => {
                if (link.to) {
                  return (
                    <Link key={link.to} to={link.to}>
                      {link.text}
                    </Link>
                  )
                } else {
                  return (
                    <Anchor key={link.href} href={link.href}>
                      {link.text}
                    </Anchor>
                  )
                }
              })}
            </Group>
          </Box>
        )
      })}
    </Group>
  )
}
