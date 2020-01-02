import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressCategory.name} />
    <h2>{data.wordpressCategory.name}</h2>
    <div
      dangerouslySetInnerHTML={{ __html: data.wordpressCategory.path }}
    ></div>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      name
      path
    }
  }
`
