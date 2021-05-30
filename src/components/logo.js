import React from 'react'
import { Link } from 'gatsby'
import kslogo from '../images/kslogo.svg'

const Logo = ({ siteTitle }) => (
  <div className="site-logo">
    <img src={kslogo} alt="kaleigh scruggs" className="ks-logo" />
    <Link to="/" className="ks-name">
      {siteTitle}
    </Link>
  </div>
)

export default Logo
