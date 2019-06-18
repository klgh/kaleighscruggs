import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my portfolio</p>
    <p>Check out my other sites</p>
    <p>thanks</p>
    <a href="https://dev.to/kaleigh">
      <i class="fab fa-dev" title="kaleigh's DEV Profile"></i>
    </a>

    <Link to="/resume/">resume</Link>
  </Layout>
)

export default IndexPage
