import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/styles.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
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
