import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Portfolio = props => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <Img fluid={props.data.saddog.childImageSharp.fluid} />
  </Layout>
)

export default Portfolio

export const pageQuery = graphql`
  query {
    saddog: file(relativePath: { eq: "saddog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
