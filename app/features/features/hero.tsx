import { FunctionComponent } from 'react'

interface FeatureHeroProps {
  data: {
    icon: string
    name: string
    title: string
    description: string
    docsUrl: string
  }
}

export const FeatureHero: FunctionComponent<FeatureHeroProps> = ({ data }) => (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)
