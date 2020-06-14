import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/page-layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Resume = props => (
  <PageLayout>
    <div className="resume">
      <div className="resumeinfo">
        <p>
          to get the most updated resume with contact info,{" "}
          <a href="mailto:hi@kaleigh.dev?subject=Resume%20Request">
            please shoot me an email
          </a>
          !
        </p>
      </div>
      <div className="resumepage"></div>
    </div>
  </PageLayout>
)

export default Resume
