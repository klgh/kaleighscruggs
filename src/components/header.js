import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-links">
      <Link to="/">Home</Link> &nbsp;
      <Link to="/resume">Resume</Link>
    </div>
    <div className="siteName">
      <Link to="/">Kaleigh Scruggs</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
