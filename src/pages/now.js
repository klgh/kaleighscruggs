import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

const Now = props => (
  <PageLayout>
    <SEO title="Now" />
    <div className="now">
      <h1>Now</h1>
      <h1 class="hpIntro">Hi </h1>
    </div>
  </PageLayout>
)

export default Now
