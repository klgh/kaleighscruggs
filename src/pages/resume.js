import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

const Resume = () => (
  <PageLayout>
    <SEO title="Resume" keywords={[`kaleigh scruggs`, `resume`]} />
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
      <div className="resumepage1"></div>
      <div className="resumepage2"></div>
    </div>
  </PageLayout>
)

export default Resume
