import { Link } from 'gatsby'
import React from 'react'
import ThemeToggle from '../theme/toggle-theme'
import { StaticImage } from 'gatsby-plugin-image'

const Header = ({}) => (
  <header>
    <div className="header_logo">
      <Link to={`/`} className="linkz">
        <StaticImage
          src="../images/kslogo.svg"
          alt="kaleigh scruggs"
          className="ks_logo"
        />
        <h1>Kaleigh Scruggs</h1>
      </Link>
    </div>
    <ThemeToggle />
  </header>
)
export default Header
