import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Portfolio = props => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <h2>Freelance Sites</h2>
    <div class="kelundra">
      <a href="https://kelundra.com/" target="_blank" rel="noopener noreferrer">
        <Img fluid={props.data.kelundra.childImageSharp.fluid} />
      </a>
      <h4 class="portfolioTitle">
        <a
          href="https://kelundra.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kelundra Smith
        </a>
      </h4>
    </div>
    <div class="hawkpest">
      <a href="https://hawkpest.com/" target="_blank" rel="noopener noreferrer">
        <Img fluid={props.data.hawkpest.childImageSharp.fluid} />
      </a>
      <h4 class="portfolioTitle">
        <a
          href="https://hawkpest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hawk Pest Control
        </a>
      </h4>
    </div>
    <div class="yogaposies">
      <a
        href="http://yogaposies.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={props.data.yogaposies.childImageSharp.fluid} />
      </a>
      <h4 class="portfolioTitle">
        <a
          href="http://yogaposies.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          YogaPosies
        </a>
      </h4>
    </div>
    <div class="laurensfloral">
      <a
        href="http://laurensfloralart.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img fluid={props.data.laurensfloralart.childImageSharp.fluid} />
      </a>
      <h4 class="portfolioTitle">
        <a
          href="http://laurensfloralart.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Laurens Floral Art
        </a>
      </h4>
    </div>
  </Layout>
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