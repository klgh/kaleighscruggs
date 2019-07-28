import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const NotFoundPage = props => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="fourohfourpage">
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness! </p>
      <Link to="/">Go home and try again</Link>
      <div class="imgfourohfour">
        <Img fluid={props.data.saddog.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

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
