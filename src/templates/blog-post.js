import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import BlogLayout from "../components/bloglayout"
import SEO from "../components/seo"

import "../styles/styles.scss"

export default function Template({ data }) {
  const post = data.markdownRemark
  const imagePath = `https://kaleighscruggs.com/images/`
  const blogPath = post.frontmatter.path.split("/").pop()
  return (
    <BlogLayout>
      <div className="blog-image-container">
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
      </div>
      <SEO
        title={`${post.frontmatter.title}`}
        description={post.frontmatter.description}
        image={`${imagePath}${blogPath}.jpg`}
        card={`summary_large_image`}
      />
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title}`} />
        <div className="siteHeader">
          <h1>{post.frontmatter.title}</h1>
        </div>

        <div className="blog-post">
          <div
            className="blog-post-content"
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
