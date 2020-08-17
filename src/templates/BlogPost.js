import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

export default function BlogPostTemplate({ data }) {
  const post = data.allWpPost.nodes[0]
  return (
    <Layout>
      <SEO title={post.title} description={post.excerpt} />
      <div className="blog-post-layout">
        <div className="blogPost">
          <div className="blogTitle">
            <h1>{post.title}</h1>
            <em>{post.date}</em>
          </div>

          <div className="blogText">{post.content}</div>

          <div className="back-to-blog">
            <Link to="/blog">back to blog</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        excerpt
        date(formatString: "MMMM DD, YYYY")
        categories {
          name
        }
      }
    }
  }
`
