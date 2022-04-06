import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params

  return redirect(`https://blog.kontenbase.com/${slug}`)
}
