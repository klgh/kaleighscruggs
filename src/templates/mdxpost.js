import React from 'react'
import Header from '../layouts/header'
import '../styles/styles.scss'

class MDXPost extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <h1>header</h1>
    } else {
      header = <Header />
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

export default MDXPost
