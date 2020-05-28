import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Portfolio = props => (
  <PageLayout>
    <SEO title="Portfolio" />
    <div className="portfolio">
      <h1>Portfolio</h1>
      <h2>Freelance Sites</h2>
      <div className="kelundra">
        <a
          href="https://kelundra.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={props.data.kelundra.childImageSharp.fluid} />
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
          <Img fluid={props.data.hawkpest.childImageSharp.fluid} />
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
          <Img fluid={props.data.yogaposies.childImageSharp.fluid} />
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
          <Img fluid={props.data.laurensfloralart.childImageSharp.fluid} />
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
  </PageLayout>
)

export default Portfolio

export const pageQuery = graphql`
  query {
    yogaposies: file(relativePath: { eq: "yogaposies.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    laurensfloralart: file(relativePath: { eq: "laurensfloralart.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hawkpest: file(relativePath: { eq: "hawkpest.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kelundra: file(relativePath: { eq: "kelundra.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
