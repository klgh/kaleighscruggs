import React from "react"
import { Link, graphql } from "gatsby"
import BlogPageLayout from "./blog-page-layout"
import SEO from "./seo"

const TagTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
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
        <SEO title={`${tag}`} />
        <h1>more {tag}</h1>
        <p>
          <PostsList postEdges={data.allMarkdownRemark.edges} />
        </p>
      </div>
    </BlogPageLayout>
  )
}

export const pageQuery = graphql`
         query TagPage($tag: String) {
           allMarkdownRemark(
             limit: 1000
             filter: { fields: { tags: { eq: $tag } } }
           ) {
             totalCount
             edges {
               node {
                 frontmatter {
                   path
                   title
                   date
                   tags
                 }
               }
             }
           }
         }
       `

export default TagTemplate
