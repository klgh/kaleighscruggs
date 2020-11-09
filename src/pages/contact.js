import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <PageLayout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <div className="contact-form">
      <div className="content-left">
        <h1>Contact Me</h1>
        <p>
          What's up? Like something you see? Do I have a weird typo? Let me
          know!
        </p>
      </div>
      <div className="content-right"></div>
    </div>
  </PageLayout>
)

export default ContactPage
