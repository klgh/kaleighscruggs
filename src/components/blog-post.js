import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Link } from "gatsby"
import BlogPostLayout from "../components/blog-post-layout"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
/* Post Page for a blog post */

export default function Template({ data }) {
  const post = data.markdownRemark
  const imagePath = `https://kaleighscruggs.com/images/`
  const blogPath = post.frontmatter.path.split("/").pop()
  const disqusConfig = {
    url: `${blogPath}`,
    title: post.title,
  }
 

  return (
    <BlogPostLayout>
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
          <em>{post.frontmatter.date}</em>
          <h6>
            <Link to={`/category/${post.frontmatter.category}`}>
              {post.frontmatter.category}
            </Link>
          </h6>
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
        <div className="back-to-blog">
          <Link to="categoryLink">back to blog</Link>
        </div>
        <div className="blogComments">
          <CommentCount config={disqusConfig} placeholder={"..."} />
          <Disqus config={disqusConfig} />
        </div>
        <div className="back-to-blog">
          <Link to="/blog">back to blog</Link>
        </div>
      </div>
    </BlogPostLayout>
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
        category
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
