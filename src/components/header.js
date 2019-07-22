import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col header-links-left">
          <Link to="/">Home</Link> &nbsp;
          <Link to="/portfolio">Portfolio</Link> &nbsp;
        </div>
        <div class="col siteName">
          <Link to="/">Kaleigh Scruggs</Link>
        </div>
        <div class="col header-links-right">
          <Link to="/blog">Blog</Link>
        </div>
      </div>
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
