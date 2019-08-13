import React from "react"
import { Link, graphql } from "gatsby"
import BlogPageLayout from "./blog-page-layout"
import SEO from "./seo"

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext
  const PostsList = ({ postEdges }) => {
    return postEdges.map(({ node }) => {
      return <PostsListCard key={node.fields.title} {...node} />
    })
  }
  const PostsListCard = ({ frontmatter, fields }) => {
    const title = frontmatter.title || fields.slug
    return <Link to={`${frontmatter.path}`}>{title}</Link>
  }

  return (
    <BlogPageLayout>
      <SEO title={`${category}`} />
      <div className="blogPageLayout">
        <h1>more {category}</h1>
        <h3>
          <PostsList postEdges={data.allMarkdownRemark.edges} />
        </h3>
      </div>
    </BlogPageLayout>
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
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            description
          }
        }
      }
    }
  }
`

export default CategoryTemplate
