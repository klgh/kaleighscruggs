import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const CategoryTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressCategory.name}
      /* description={data.wordpressCategory.excerpt} */
    />
    <h2>{data.wordpressCategory.name}</h2>
  </Layout>
)

export default CategoryTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressCategory(wordpress_id: { eq: $id }) {
      name
    }
  }
`
