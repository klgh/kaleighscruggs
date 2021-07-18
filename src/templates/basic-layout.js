import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { rhythm } from '../utils/typography'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/styles.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ChakraProvider>
        <Header />
        <div className="basic_layout">
          {children}
          <Footer />
        </div>
      </ChakraProvider>
    )
  }
}

export default Layout
