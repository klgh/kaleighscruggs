import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/styles.scss"

const BlogPageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogPageQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="mainBody">
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
)

BlogPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogPageLayout
