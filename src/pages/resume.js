import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>This is my resume and portfolio</h1>
    <p>Welcome to page it!</p>
    <Link to="/"> back</Link>
  </Layout>
)

export default Resume
