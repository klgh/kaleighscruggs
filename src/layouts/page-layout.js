import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/styles.scss"
/* Standard layout for pages */

const PageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className="page-layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
