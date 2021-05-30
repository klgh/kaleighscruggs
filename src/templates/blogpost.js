import React from 'react'
import Menu from '../components/header'
import '../styles/styles.scss'
class BlogPost extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <h1>header</h1>
    } else {
      header = <Menu />
    }
    return (
      <div className="basic-page">
        {header}
        {children}
        <footer>woooo</footer>
      </div>
    )
  }
}

export default BlogPost
