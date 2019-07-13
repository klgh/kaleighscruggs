import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      background: "#679499",
      padding: "0.5em 30px",
    }}
  >
    <div
      className="header-links"
      style={{
        maxWidth: "960px",
        textAlign: "right",
        margin: "0 auto",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
