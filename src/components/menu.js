import { Link } from "gatsby"
import React from "react"

const Menu = () => (
  <div className="menu">
    <Link
      to="/portfolio"
      className="linkItem portfolio"
      activeClassName="linkItemActive"
    >
      portfolio
    </Link>

    <Link to="/now" className="linkItem now" activeClassName="linkItemActive">
      now
    </Link>

    <Link to="/blog" className="linkItem blog" activeClassName="linkItemActive">
      blog
    </Link>
  </div>
)

export default Menu
