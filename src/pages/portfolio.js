import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioPage = ({ data, location, props }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Portfolio" />
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Freelance Sites</h3>
        <div className="kelundra freelance_site">
          <h4>Kelundra Smith</h4>
          <a
            href="https://kelundra.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/kelundra.png" alt="kelundra.com" />
          </a>
        </div>
        <div className="hawkpest freelance_site">
          <h4>Hawk Pest Control</h4>
          <a
            href="https://hawkpest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/hawkpest.png" alt="hawkpest.com" />
          </a>
        </div>
        <div className="yogaposies freelance_site">
          <h4>YogaPosies</h4>
          <a
            href="http://yogaposies.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage src="../images/yogaposies.png" alt="hawkpest.com" />
          </a>
        </div>
        <div className="laurensfloral freelance_site">
          <a
            href="http://laurensfloralart.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Laurens Floral Art</h4>
            <StaticImage
              src="../images/laurensfloralart.png"
              alt="hawkpest.com"
            />
          </a>
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
