import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import kslogo from "../images/kslogo.svg"

library.add(fab)

const Header = ({ siteTitle }) => (
  <header>
    <div className="site-logo">
      <img src={kslogo} alt="kaleigh scruggs" className="ks-logo" />
      <Link to="/" className="ks-name">
        {siteTitle}
      </Link>
    </div>

    <div className="navigation">
      <ul>
        <li>
          <Link
            to="/portfolio"
            className="linkItem portfolio"
            activeClassName="linkItemActive"
          >
            portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/now"
            className="linkItem now"
            activeClassName="linkItemActive"
          >
            now
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="linkItem blog"
            activeClassName="linkItemActive"
          >
            blog
          </Link>
        </li>
        {/* <li>
          <Link
            to="/contact"
            className="linkItem contact"
            activeClassName="linkItemActive"
          >
            contact
          </Link>
        </li> */}
      </ul>
    </div>
    <div className="connect">
      <div className="faIcons">
        <a href="https://www.linkedin.com/in/kaleigh/">
          <FontAwesomeIcon
            title="kaleigh's linkedin"
            icon={["fab", "linkedin"]}
          />
        </a>{" "}
        <a href="https://github.com/klgh">
          <FontAwesomeIcon title="kaleigh's github" icon={["fab", "github"]} />
        </a>{" "}
        <a href="https://dev.to/kaleigh">
          <FontAwesomeIcon
            title="kaleigh's DEV Profile"
            icon={["fab", "dev"]}
          />
        </a>{" "}
        <a href="https://twitter.com/kaleighscruggs">
          <FontAwesomeIcon
            title="kaleigh's twitter"
            icon={["fab", "twitter"]}
          />
        </a>{" "}
        <a href="https://www.instagram.com/kaleighcodes/">
          <FontAwesomeIcon
            title="kaleigh's instagram"
            icon={["fab", "instagram"]}
          />
        </a>{" "}
      </div>
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
