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
      <div>
        <a href="#freelance">Freelance</a> | <a href="#48in48">48in48</a> |{' '}
        <a href="#professional">Professional</a>
      </div>
      <h2>Portfolio</h2>
      <div className="portfolio" id="freelance">
        <div className="freelance">
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
        <div className="48in48" id="48in48">
          <h3>48in48: Volunteering</h3>
          <p>
            <a href="https://48in48.org/">48in48</a> is a hackathon style
            volunteer event where teams of marketing and technology
            professionals are connected to local nonprofits to create brand new
            WordPress websites in one weekend.
          </p>
          <div className="48in48">
            Women's Build Event- April 9-11, 2021:{' '}
            <a
              href="https://communityvillagesdfw.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community Villages DFW
            </a>
          </div>
          <div>
            Social Justice Event - June 11-13, 2021:{' '}
            <a
              href="https://auntiehelens.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Auntie Helen’s
            </a>
          </div>
          <div>
            Global Virtual Event - October 1-3, 2021:{' '}
            <a
              href="https://guardianangelsocialserviceagency.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guardian Angel Social Services
            </a>
          </div>
        </div>
        <div className="professional" id="professional">
          <h3>Professional Sites</h3>
          <p>
            <a
              href="https://news.delta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Delta News Hub
            </a>
          </p>
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
