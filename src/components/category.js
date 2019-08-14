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
    const date = frontmatter.date
    const description = frontmatter.description
    return (
      <Link to={`${frontmatter.path}`}>
        <p className="catTitle">{title}</p>
        <p className="catDate">{date}</p>
        <p className="catDesc">{description}</p>
        <p className="catReadMore">read more</p>
      </Link>
    )
  }

  return (
    <BlogPageLayout>
      <SEO title={`${category}`} />
      <div className="blogPageLayout">
        <h1>more posts in: {category}</h1>
        <p className="postPreview">
          <PostsList postEdges={data.allMarkdownRemark.edges} />
        </p>
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
