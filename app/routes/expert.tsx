import { LoaderFunction, redirect } from 'remix'

export const loader: LoaderFunction = async () => {
  return redirect('https://a.kontenbase.com/expert')
}
