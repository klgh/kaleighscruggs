import React from 'react'
import Header from '../components/header'
import '../styles/styles.scss'

class BasicPage extends React.Component {
  render() {
    const { location, title, children } = this.props
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

export default BasicPage
