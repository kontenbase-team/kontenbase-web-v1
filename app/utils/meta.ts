type CreateMeta = {
  title: string
  description: string
  route?: string
}

export const createMeta = ({ title, description, route = '' }: CreateMeta) => ({
  title,
  description,

  'og:title': title,
  'og:description': description,
  'og:url': `https://kontenbase.com/${route}`,

  'twitter:title': title,
  'twitter:description': description,
})
