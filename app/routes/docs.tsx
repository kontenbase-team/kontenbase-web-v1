import { Layout } from '~/components'
import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/docs')

export default function DocsPage() {
  return <Layout>Docs</Layout>
}
