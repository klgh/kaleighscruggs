import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Header from '../components/header'
import Footer from '../components/footer'

function MDXPage({ children }) {
  return (
    <>
      <Header />
      <div className="mdx_page">
        <MDXProvider
          components={{
            h1: (props) => <h2 {...props} className="heading2" />,
            h2: (props) => <h3 {...props} className="heading3" />,
            h3: (props) => <h4 {...props} className="heading4" />,
            ul: (props) => <ul {...props} className="list-reset" />,
            li: (props) => <li {...props} className="list-reset" />,
            hr: (props) => <hr {...props} className="divider" />,
            a: (props) => <a {...props} className="link" color="teal.500" />,
            p: (props) => <p {...props} className="text-sm" />,
          }}
        >
          {children}
        </MDXProvider>
        <Footer />
      </div>
    </>
  )
}
export default MDXPage
