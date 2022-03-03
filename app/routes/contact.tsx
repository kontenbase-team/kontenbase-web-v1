import { Layout } from '~/components'
import { ContactHero, ContactContent } from '~/features'

export default function ContactPage() {
  return (
    <Layout>
      <ContactHero />
      <ContactContent />
    </Layout>
  )
}
