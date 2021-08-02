import React from 'react'
import { graphql } from 'gatsby'
//import Bio from '../components/bio'

import Layout from '../templates/basic-layout'
import SEO from '../components/seo'

const PortfolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="PortfolioPage" />
      <div className="portfolio">
        <h1>Portfolio</h1>
        <p>updates coming!</p>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
