import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Kaleigh Scruggs | web developer, comedian, human" />
    <h1>
      Hi{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
    </h1>
    <p>
      Kaleigh Scruggs is an Atlanta native. She has been working in the
      technology field since graduating from Georgia Southern University with a
      BS in IT. She also has a Masters in Internet Technology from the
      University of Georgia. She enjoys stand-up comedy, kayaking on the
      Chattahoochee River, Brazilian Jiu-Jitsu, and Hiking with her husband and
      dogs.
    </p>
    <p>
      If you're looking for my dev site,{" "}
      <a href="https://kaleigh.dev/" target="_blank" rel="noopener noreferrer">
        you can find it here
      </a>
      .
    </p>
    <p>
      If you like to laugh,{" "}
      <a
        href="http://kaleighcomedy.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        check me out in Atlanta!
      </a>
    </p>
    <p>
      Connect with me!{" "}
      <span role="img" aria-label="down arrow">
        ↙️
      </span>{" "}
      <br />
      <a href="https://www.linkedin.com/in/kaleigh/">
        <FontAwesomeIcon
          title="kaleigh's linkedin"
          icon={["fab", "linkedin"]}
        />
      </a>{" "}
      <a href="https://github.com/klgh">
        <FontAwesomeIcon title="kaleigh's github" icon={["fab", "github"]} />
      </a>{" "}
      <a href="https://dev.to/kaleigh">
        <FontAwesomeIcon title="kaleigh's DEV Profile" icon={["fab", "dev"]} />
      </a>{" "}
      <a href="https://twitter.com/kaleighscruggs">
        <FontAwesomeIcon title="kaleigh's twitter" icon={["fab", "twitter"]} />
      </a>{" "}
      <a href="https://www.instagram.com/klgh.js/">
        <FontAwesomeIcon
          title="kaleigh's instagram"
          icon={["fab", "instagram"]}
        />
      </a>{" "}
      <a href="https://kaleighblogs.com/">
        <FontAwesomeIcon title="kaleigh's blog" icon={["fab", "wordpress"]} />
      </a>{" "}
    </p>
  </Layout>
)

export default IndexPage
