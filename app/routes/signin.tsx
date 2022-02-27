import { LoaderFunction, redirect } from 'remix'

import { Layout } from '~/components'

export const loader: LoaderFunction = async () =>
  redirect('https://app.kontenbase.com')

export default function SignInPage() {
  return <Layout>Sign In</Layout>
}
