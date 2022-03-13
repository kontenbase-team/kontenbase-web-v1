import { Layout } from '~/components'
import { featuresDetailData } from '~/data'
import { featureAuthCodeExamples } from '~/data/features'
import { FeatureCodeExamples, FeatureHero } from '~/features'

export default function RouteFeaturesAuth() {
  const feature = featuresDetailData[1] // Auth
  const codeExamples = featureAuthCodeExamples

  return (
    <Layout>
      <FeatureHero feature={feature} />
      <FeatureCodeExamples
        subTitle="Auth API made easy"
        subDescription="We provide auto generated Auth API that work on client and server-side applications."
        docsUrl={feature.docsUrl}
        codeExamples={codeExamples}
      />
    </Layout>
  )
}
