import React from 'react'

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> by Kaleigh
    </footer>
  )
}

export default Footer
