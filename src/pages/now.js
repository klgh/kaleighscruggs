import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basic-layout'
import SEO from '../components/seo'

const Now = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Now" />
      <div className="now">
        <h2>Now</h2>
        <p>July 22, 2020</p>
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
