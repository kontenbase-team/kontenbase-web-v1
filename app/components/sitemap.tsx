import { Anchor, Box, Group, Title } from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { sitemapData } from '~/data'

interface SitemapProps {}

export const Sitemap: FunctionComponent<SitemapProps> = () => (
  <Group
    spacing="xl"
    align="flex-start"
    sx={{ justifyContent: 'space-between' }}
  >
    {sitemapData.map((group) => (
      <Box key={group.text}>
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
            }
            return (
              <Anchor key={link.href} href={link.href} target="_blank">
                {link.text}
              </Anchor>
            )
          })}
        </Group>
      </Box>
    ))}
  </Group>
)
