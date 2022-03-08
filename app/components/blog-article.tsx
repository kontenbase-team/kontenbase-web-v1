import { Container, Title, Image, Text, Box } from '@mantine/core'
import parse from 'html-react-parser'
import { FunctionComponent } from 'react'

import { TBlogArticle } from '~/types'
import { getDate } from '~/utils'

interface BlogArticleProps {
  article: TBlogArticle
}

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
  article,
}) => (
  <Container
    size="sm"
    sx={{
      marginTop: '5rem',
      marginBottom: '5rem',
    }}
  >
    <Image radius="md" src={article.coverImage} alt={article.title} />

    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Title order={2}>{article.title}</Title>
      <Text
        component="time"
        dateTime={article.dateAdded}
        sx={{ fontWeight: 'bold' }}
      >
        {getDate(article.dateAdded)}
      </Text>
    </Box>

    <Box sx={{ marginTop: '2rem', fontSize: '1.2rem' }}>
      {parse(String(article?.html))}
    </Box>
  </Container>
)
