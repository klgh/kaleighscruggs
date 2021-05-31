import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const PortfolioPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="PortfolioPage" />
      <div className="portfolio">
        <h1>Portfolio</h1>
        <h2>Freelance Sites</h2>
        <div className="kelundra">
          <a
            href="https://kelundra.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Img fluid={props.data.kelundra.childImageSharp.fluid} /> */}
          </a>
          <h4 className="websiteTitle">
            <a
              href="https://kelundra.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kelundra Smith
            </a>
          </h4>
        </div>
        <div className="hawkpest">
          <a
            href="https://hawkpest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Img fluid={props.data.hawkpest.childImageSharp.fluid} /> */}
          </a>
          <h4 className="websiteTitle">
            <a
              href="https://hawkpest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hawk Pest Control
            </a>
          </h4>
        </div>
        <div className="yogaposies">
          <a
            href="http://yogaposies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Img fluid={props.data.yogaposies.childImageSharp.fluid} /> */}
          </a>
          <h4 className="websiteTitle">
            <a
              href="http://yogaposies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YogaPosies
            </a>
          </h4>
        </div>
        <div className="laurensfloral">
          <a
            href="http://laurensfloralart.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <Img fluid={props.data.laurensfloralart.childImageSharp.fluid} /> */}
          </a>
          <h4 className="websiteTitle">
            <a
              href="http://laurensfloralart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Laurens Floral Art
            </a>
          </h4>
        </div>
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
