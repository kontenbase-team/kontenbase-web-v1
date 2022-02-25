import { Layout } from '~/components'
import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async () =>
  redirect('https://app.kontenbase.com')

export default function SignUpPage() {
  return <Layout>Sign Up</Layout>
}
