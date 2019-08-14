import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/1.png"

const Header = ({ siteTitle }) => (
  <div className="header">
    <Link to="/">
      <img className="kslogo" src={logo} alt="logo" />
    </Link>
    <section>
      <ul className="header-links">
        <li>
          <Link
            to="/"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="linkItem"
            activeClassName="linkItemActive"
          >
            blog
          </Link>
        </li>
      </ul>
    </section>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
