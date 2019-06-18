import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my portfolio</p>
    <p>Check out my other sites</p>
    <br />
    <a href="https://dev.to/kaleigh">
      <FontAwesomeIcon title="kaleigh's DEV Profile" icon={["fab", "dev"]} />
    </a>{" "}
    <br />
    <a href="https://www.linkedin.com/in/kaleigh/">
      <FontAwesomeIcon title="kaleigh's linkedin" icon={["fab", "linkedin"]} />
    </a>{" "}
    <br />
    <a href="https://github.com/klgh">
      <FontAwesomeIcon title="kaleigh's github" icon={["fab", "github"]} />
    </a>{" "}
    <br />
    <a href="https://twitter.com/kaleighscruggs">
      <FontAwesomeIcon title="kaleigh's twitter" icon={["fab", "twitter"]} />
    </a>{" "}
    <br />
    <a href="https://www.instagram.com/klgh.js/">
      <FontAwesomeIcon
        title="kaleigh's instagram"
        icon={["fab", "instagram"]}
      />
    </a>{" "}
    <br />
    <a href="https://kaleighblogs.com/">
      <FontAwesomeIcon title="kaleigh's blog" icon={["fab", "blog"]} />
    </a>{" "}
    <br />
    <Link to="/resume/">resume</Link>
    <br />
  </Layout>
)

export default IndexPage
