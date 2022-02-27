import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

export const loader: LoaderFunction = async () =>
  redirect('https://app.kontenbase.com')

export default function SignUpPage() {
  return <Layout>Sign Up</Layout>
}
