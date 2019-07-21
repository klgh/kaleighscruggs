import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import BlogLayout from "../components/bloglayout"
import "../styles/styles.scss"

export default function Template({ data }) {
  const post = data.markdownRemark
  const imagePath = `https://kaleighscruggs.com/images/`
  const blogPath = post.frontmatter.path.split("/").pop()
  return (
    <BlogLayout>
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description}
        image={`${imagePath}${blogPath}.jpg`}
        card={`summary_large_image`}
      />
      <div className="blogPost">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="blogTitle">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div className="blogMainImage">
          <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        </div>
        <div className="blogText">
          <div
            className="blogPostText"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>
    </BlogLayout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1440) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
