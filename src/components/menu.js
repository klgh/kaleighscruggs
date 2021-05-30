import { Link } from 'gatsby'
import React from 'react'

const Menu = () => (
  <div className="menu">
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
    </ul>
  </div>
)

export default Menu
