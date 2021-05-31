import React from 'react'

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
    {` `}
    And <a href="https://wordpress.org/">WordPress</a> by Kaleigh
  </footer>
)

export default Footer
