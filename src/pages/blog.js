import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog &mdash; Kaleigh Scruggs" />
      <div className="siteHeader">
        <h1>Blog</h1>
      </div>
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h2>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <h3>{post.frontmatter.date}</h3>
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
