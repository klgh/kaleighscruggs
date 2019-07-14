import React from "react"

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer-links">
        <br />© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </div>
)

export default Footer
