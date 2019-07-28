import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

<<<<<<< HEAD:src/components/bloglayout.js
<<<<<<< HEAD:src/components/bloglayout.js
const BlogLayout = ({ featuredImage, description, children }) => (
=======
const BlogPostLayout = ({ featuredImage, description, children }) => (
>>>>>>> parent of 7b2973c... Update blog-post-layout.js:src/components/blog-post-layout.js
=======
const BlogPostLayout = ({ featuredImage, description, children }) => (
>>>>>>> parent of 7b2973c... Update blog-post-layout.js:src/components/blog-post-layout.js
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
<<<<<<< HEAD:src/components/bloglayout.js
<<<<<<< HEAD:src/components/bloglayout.js
        <div>{children}</div>
=======
        <div className="blog-layout">{children}</div>
>>>>>>> parent of 7b2973c... Update blog-post-layout.js:src/components/blog-post-layout.js
=======
        <div className="blog-layout">{children}</div>
>>>>>>> parent of 7b2973c... Update blog-post-layout.js:src/components/blog-post-layout.js
        <Footer />
      </>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
