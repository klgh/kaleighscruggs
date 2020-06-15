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
      <div className="content-right">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <p>
            <input type="text" name="name" required placeholder="Your Name" />
          </p>
          <p>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
          </p>

          <p>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              style={{ marginLeft: "4px" }}
            ></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  </PageLayout>
)

export default ContactPage
