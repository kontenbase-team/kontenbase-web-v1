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

import { Article } from '~/types'
import { getDate } from '~/utils'

interface BlogContentProps {
  articles: Article[]
}

export const BlogContent: FunctionComponent<BlogContentProps> = ({
  articles,
}) => {
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
        {articles.map((article) => (
          <SimpleGrid
            key={article.id}
            spacing="xl"
            cols={2}
            sx={{ width: '100%' }}
            breakpoints={[{ maxWidth: theme.breakpoints.sm, cols: 1 }]}
          >
            <Image
              radius="md"
              src={article.coverImage.url}
              alt={article.title}
            />
            <Group direction="column" sx={{ width: '100%' }}>
              <Title order={3}>{article.title}</Title>
              <time dateTime={article.date}>{getDate(article.date)}</time>
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
