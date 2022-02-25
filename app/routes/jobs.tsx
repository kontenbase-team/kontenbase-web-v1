import { Layout } from '~/components'
import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/jobs')

export default function JobsPage() {
  return <Layout>Jobs</Layout>
}
