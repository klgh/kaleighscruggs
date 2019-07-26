import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"
/* layout for kaleighscruggs.com/blog */

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog &mdash; Kaleigh Scruggs" />
      <h1>Blog</h1>
      <div className="blogPostList">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="postPreview" key={post.id}>
                <h3 className="postTitle">
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <em>{post.frontmatter.date}</em>
                <p>{post.frontmatter.description}</p>
              </div>
            )
          })}
      </div>
    </Layout>
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
