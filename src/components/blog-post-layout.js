import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"
/* Main Layout for a blog post */

const BlogPostLayout = ({ featuredImage, description, children }) => (
  <StaticQuery
    query={graphql`
      query BlogTitleQuery {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="blog-layout">{children}</div>
        <Footer />
      </>
    )}
  />
)

BlogPostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogPostLayout
