import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Menu from './menu'

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Header className="header">
    <h1>{data.site.siteMetadata.title}</h1>
      {/* <Logo siteTitle={data.site.siteMetadata.title} /> */}
      <Menu />
      {/* <Social /> */}
    </Header>
  )
}

export default Header
