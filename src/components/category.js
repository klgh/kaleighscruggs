import React from "react"
import { Link, graphql } from "gatsby"
import BlogPageLayout from "./blog-page-layout"
import SEO from "./seo"

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { category } = pageContext
  const PostsList = ({ postEdges }) => {
    return postEdges.map(({ node }) => {
      return <PostsListCard key={node.fields.slug} {...node} />
    })
  }
  const PostsListCard = ({ frontmatter, fields }) => {
    const title = frontmatter.title || fields.slug

    return (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: frontmatter.description,
          }}
        />
        <Link to={`/${frontmatter.path}/`}>{title}</Link>
      </>
    )
  }

  return (
    <BlogPageLayout
      location={location}
      title={`Posts in category "${category}"`}
    >
      <div className="category-container">
        <SEO title={`${category}`} />
        <h1>more {category}</h1>
        <PostsList postEdges={data.allMarkdownRemark.edges} />
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
            path
            title
            date
          }
        }
      }
    }
  }
`

export default CategoryTemplate
