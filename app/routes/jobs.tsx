import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

export const loader: LoaderFunction = async () =>
  redirect('https://a.kontenbase.com/jobs')

export default function JobsPage() {
  return <Layout>Jobs</Layout>
}
