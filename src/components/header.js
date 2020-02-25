import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Header = ({ siteTitle }) => (
  <header>
    <div className="connect">
      <div class="faIcons">
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
        <a href="https://www.instagram.com/klgh.js/">
          <FontAwesomeIcon
            title="kaleigh's instagram"
            icon={["fab", "instagram"]}
          />
        </a>{" "}
      </div>
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
          <Link to="/" className="ks-logo-name">
            Kaleigh Scruggs
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
        <li>
          <Link
            to="/"
            className="linkItem contact"
            activeClassName="linkItemActive"
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
    {/* social icons */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
