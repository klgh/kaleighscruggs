import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Kaleigh Scruggs | web developer, comedian, human" />
    <div class="container">
      <div class="row">
        <div class="col hpBio">
          <h1 class="hpIntro">
            Hi{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <div class="bio">
            <p>
              Hey, I'm Kaleigh Scruggs. I'm one of those rare Atlanta natives.
            </p>
            <p>
              Ever since I graduated from Georgia Southern University in 2012,
              I've been working in tech. I later earned my Masters in Internet
              Technology from The University of Georgia in 2014.{" "}
            </p>
            <p>
              When I'm not in front of the computer, I'm usually at the gym
              doing Brazilian Jiu-Jitsu.{" "}
            </p>
            <p>
              If you can't find me there, then I'm{" "}
              <a
                href="http://kaleighcomedy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                writing and performing stand-up comedy
              </a>{" "}
              around Atlanta.{" "}
            </p>
            <p>
              When the weather's nice I love to go kayaking on the Chattahoochee
              River and hike with my husband and 2 dogs.
            </p>
            <p>
              If you're looking for my dev site,{" "}
              <a
                href="https://kaleigh.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                you can find it here
              </a>
              .
            </p>
          </div>
          <div class="connect">
            <p>
              Connect with me! <br />
              <div class="faIcons">
                <a href="https://www.linkedin.com/in/kaleigh/">
                  <FontAwesomeIcon
                    title="kaleigh's linkedin"
                    icon={["fab", "linkedin"]}
                  />
                </a>{" "}
                <a href="https://github.com/klgh">
                  <FontAwesomeIcon
                    title="kaleigh's github"
                    icon={["fab", "github"]}
                  />
                </a>{" "}
                <a href="https://dev.to/kaleigh">
                  <FontAwesomeIcon
                    title="kaleigh's DEV Profile"
                    icon={["fab", "dev"]}
                  />
                </a>{" "}
                <a href="https://twitter.com/kaleighscruggs">
                  <FontAwesomeIcon
                    title="kaleigh's twitter"
                    icon={["fab", "twitter"]}
                  />
                </a>{" "}
                <a href="https://www.instagram.com/klgh.js/">
                  <FontAwesomeIcon
                    title="kaleigh's instagram"
                    icon={["fab", "instagram"]}
                  />
                </a>{" "}
                <a href="https://kaleighblogs.com/">
                  <FontAwesomeIcon
                    title="kaleigh's blog"
                    icon={["fab", "wordpress"]}
                  />
                </a>{" "}
              </div>
            </p>
          </div>
        </div>
        <div class="col">
          <Image />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
