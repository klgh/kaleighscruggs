import React from 'react'
import { Link } from 'gatsby'

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/blog">Blog</Link>
      {/*   <Link to="/portfolio">Portfolio</Link> */}
      {/*   <Link to="/now">Now</Link> */}
      <Link to="/uses">Uses</Link>
    </div>
  )
}
