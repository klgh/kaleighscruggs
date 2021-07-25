import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Logo = ({}) => (
  <div className="logo">
    <Link to={`/`} className="logo_link">
      <StaticImage
        src="../images/kslogo.svg"
        alt="kaleigh scruggs"
        className="ks_logo"
        placeholder="blurred"
      />
      <h1>Kaleigh Scruggs</h1>
    </Link>
  </div>
)
export default Logo
