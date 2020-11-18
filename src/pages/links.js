import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

library.add(fab)

const IndexPage = () => (
  <PageLayout>
    <SEO title="Links" />
    <div><p>Links</p></div>
  </PageLayout>
)

export default IndexPage
