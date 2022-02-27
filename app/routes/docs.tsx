import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/docs')

export default function DocsPage() {
  return <Layout>Docs</Layout>
}
