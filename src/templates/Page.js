import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.allWpPage.title}
      description={data.allWpPage.title}
    />
    <div className={data.allWpPage.slug}>
      <h2>{data.allWpPage.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.allWpPage.content }} />
    </div>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        slug
      }
    }
  }
`
