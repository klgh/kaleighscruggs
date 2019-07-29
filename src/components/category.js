import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "./page-layout"
import SEO from "./seo"
import PostsList from "./blog-page-layout"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  return (
    <Layout location={location} title={`Posts in category "${category}"`}>
      <div className="category-container">
        <SEO title={`Posts in category "${category}"`} />

        <Container>
          <h1>Category: {category}</h1>
          <PostsList postEdges={data.allMarkdownRemark.edges} />
        </Container>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            category
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default CategoryTemplate
