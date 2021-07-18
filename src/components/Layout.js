import React from 'react'
import { Link } from 'gatsby'
//import '../styles/styles.scss'
import Footer from './footer'
import { rhythm, scale } from '../utils/typography'
import Header from './header'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <Header />
    } else {
      header = (
        <h3
          className="layout2"
          style={{
            marginTop: 0,
            marginBottom: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Kaleigh Scruggs
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
