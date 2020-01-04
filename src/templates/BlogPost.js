import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
import "../styles/styles.scss"

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.excerpt}
    />
    <div className="blog-post-layout">
      <div className="blogPost">
        <div className="blogTitle">
          <h1>{data.wordpressPost.title}</h1>
          <em>{data.wordpressPost.date}</em>
          <em>{data.wordpressPost.categories.name}</em>
        </div>

        <div
          className="blogText"
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />

        <div className="back-to-blog">
          <Link to="/blog">back to blog</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
      }
    }
  }
`
