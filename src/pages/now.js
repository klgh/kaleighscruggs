import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'

const Now = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Now" />
      <div className="now">
        <h2>Now</h2>
        <p>August 2021</p>
      </div>
    </Layout>
  )
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
