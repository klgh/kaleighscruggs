import React from 'react'
//import { useStaticQuery, graphql } from 'gatsby'
import Menu from '../components/menu'

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   query HeaderQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <header className="header">
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      {/* <Logo siteTitle={data.site.siteMetadata.title} /> */}
      <Menu />
      {/* <Social /> */}
    </header>
  )
}

export default Header
