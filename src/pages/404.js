import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const NotFoundPage = props => (
  <PageLayout>
    <SEO title="404: Not found" />
    <div class="fourohfourpage">
      <h1>NOT FOUND</h1>
      <p>You just hit a page that doesn&#39;t exist... the sadness! </p>
      <Link to="/">Go home and try again</Link>
      <div class="imgfourohfour">
        <Img fluid={props.data.saddog.childImageSharp.fluid} />
      </div>
    </div>
  </PageLayout>
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
