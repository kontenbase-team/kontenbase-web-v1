import { Layout } from '~/components'
import { PricingHero, PricingTable } from '~/features'

export default function PricingPage() {
  return (
    <Layout>
      <PricingHero />
      <PricingTable />
    </Layout>
  )
}
