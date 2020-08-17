import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const PageTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPage.title}
      description={data.wordpressPage.title}
    />
    <div className={data.wordpressPage.slug}>
      <h2>{data.wordpressPage.title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
      ></div>
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
