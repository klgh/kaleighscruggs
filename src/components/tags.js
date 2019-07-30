import React from "react"
import { Link, graphql } from "gatsby"
import BlogPageLayout from "./blog-page-layout"
import SEO from "./seo"

const TagTemplate = ({ location, pageContext, data }) => {
  const { tags } = pageContext
  const PostsList = ({ postEdges }) => {
    return postEdges.map(({ node }) => {
      return <PostsListCard key={node.fields.slug} {...node} />
    })
  }
  const PostsListCard = ({ frontmatter, fields }) => {
    const title = frontmatter.title || fields.slug
    return <Link to={`${frontmatter.path}`}>{title}</Link>
  }

  return (
    <BlogPageLayout>
      <div className="tag-container">
        <SEO title={`${tags}`} />
        <h1>more {tags}</h1>
        <p>
          <PostsList postEdges={data.allMarkdownRemark.edges} />
        </p>
      </div>
    </BlogPageLayout>
  )
}

export const pageQuery = graphql`
         query TagPage($tags: String) {
           allMarkdownRemark(
             limit: 1000
             filter: { fields: { tags: { eq: $tags } } }
           ) {
             totalCount
             edges {
               node {
                 fields {
                   tags
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

export default TagTemplate
