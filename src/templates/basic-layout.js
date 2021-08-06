import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="theme_toggler_transition">
        <Header />
        <div className="basic_layout">
          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
