import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my portfolio</p>
    <p>Check out my other sites</p>
    <p>thanks</p>
    <br />
    <a href="https://dev.to/kaleigh">
      <FontAwesomeIcon title="kaleigh's DEV Profile" icon={["fab", "dev"]} />
    </a>{" "}
    <br />
    <Link to="/resume/">resume</Link>
    <br />
  </Layout>
)

export default IndexPage
