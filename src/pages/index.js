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
    <Link to="/resume/">resume</Link>
  </Layout>
)

export default IndexPage
