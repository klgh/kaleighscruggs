import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const IndexPage = () => (
  <PageLayout>
    <SEO title="Kaleigh Scruggs | web developer, comedian, human" />
    <div class="container">
      <div class="row">
        <div class="col hpBio">
          <div class="bio">
            <h1>Hey! 👋 I'm Kaleigh.</h1>
            <p>
              I'm one of those rare Atlanta natives. Ever since I graduated from
              Georgia Southern University in 2012, I've been working in tech. I
              later earned my Masters in Internet Technology from The University
              of Georgia in 2014.{" "}
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
          </div>
        </div>
        <div class="col hpImage">
          <Image />
        </div>
      </div>
    </div>
    <div class="find-me"></div>
    <div class="from-the-blog"></div>
    <div class="work-together"></div>
  </PageLayout>
)

export default IndexPage
