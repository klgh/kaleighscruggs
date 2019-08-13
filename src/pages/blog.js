import React from "react"
import { Link, graphql } from "gatsby"
import BlogPageLayout from "../components/blog-page-layout"
import SEO from "../components/seo"
/* page for kaleighscruggs.com/blog */

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <BlogPageLayout>
      <SEO title="Blog" />
      <h1>Kaleigh Blogs</h1>
      <div className="blogPostList container">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Link to={post.frontmatter.path} className="postPreview">
                <div className="row" key={post.id}>
                  <div className="col">
                    <h3 className="postTitle">{post.frontmatter.title}</h3>
                    <em className="postDate">{post.frontmatter.date}</em>
                    <p className="postDescription">
                      {post.frontmatter.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </BlogPageLayout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
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
