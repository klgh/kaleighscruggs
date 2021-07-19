import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Header from '../components/header'
import { rhythm, typography } from '../utils/typography'

function MDXPage({ children }) {
  return (
    <MDXProvider
      components={{
        h1: (props) => <h1 {...props} className="heading1" />,
        h2: (props) => <h2 {...props} className="heading2" />,
        ul: (props) => <ul {...props} className="list-reset" />,
        li: (props) => <li {...props} className="list-reset" />,
        hr: (props) => <hr {...props} className="divider" />,
        a: (props) => <a {...props} className="link" color="teal.500" />,
        p: (props) => <p {...props} className="text-sm" fontSize="lg" />,
      }}
    >
      <Header />
      <div className="mdx_page"> {children}</div>
    </MDXProvider>
  )
}
export default MDXPage
