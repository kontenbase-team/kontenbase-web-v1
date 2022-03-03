import {
  Group,
  Title,
  Image,
  Text,
  Container,
  Button,
  SimpleGrid,
  useMantineTheme,
} from '@mantine/core'
import { FunctionComponent } from 'react'
import { Link } from 'remix'

import { TBlogArticle } from '~/types'
import { getDate } from '~/utils'

interface BlogContentProps {
  data: TBlogArticle[]
}

export const BlogContent: FunctionComponent<BlogContentProps> = ({ data }) => {
  const theme = useMantineTheme()

  return (
    <Container
      size="md"
      sx={{
        marginTop: '5rem',
        marginBottom: '5rem',
      }}
    >
      <Group direction="column" sx={{ gap: '5rem' }}>
        {data.map((article: any) => (
          <SimpleGrid
            key={article.cuid}
            spacing="xl"
            cols={2}
            sx={{ width: '100%' }}
            breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}
          >
            <Image radius="md" src={article.coverImage} alt={article.title} />
            <Group direction="column" sx={{ width: '100%' }}>
              <Title order={3}>{article.title}</Title>
              <time dateTime={article.dateAdded}>
                {getDate(article.dateAdded)}
              </time>
              <Text>{article.brief}</Text>
              <Link to={article.slug} prefetch="intent">
                <Button>Read more</Button>
              </Link>
            </Group>
          </SimpleGrid>
        ))}
      </Group>
    </Container>
  )
}
