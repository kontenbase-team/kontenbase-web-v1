import { Container, Title, Image, Text, Box } from '@mantine/core'
import parse from 'html-react-parser'
import { FunctionComponent } from 'react'

import { Article } from '~/types'
import { getDate } from '~/utils'

interface BlogArticleProps {
  article: Article
}

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
  article,
}) => (
  <Container size="sm" sx={{ marginTop: '5rem', marginBottom: '5rem' }}>
    <Image radius="md" src={article.coverImage.url} alt={article.title} />

    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Title order={2}>{article.title}</Title>
      <Text
        component="time"
        dateTime={article.publishedAt}
        sx={{ fontWeight: 'bold' }}
      >
        {getDate(article.publishedAt)}
      </Text>
    </Box>

    <Box sx={{ marginTop: '2rem', fontSize: '1.2rem' }}>
      {parse(String(article?.content?.html))}
    </Box>
  </Container>
)
