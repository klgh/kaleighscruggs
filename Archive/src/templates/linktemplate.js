import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Logo from '../components/logo'

function LinkTemplate({ children }) {
  return (
    <>
      <div className="link_template">
        <Logo />
        <MDXProvider
          components={{
            h1: (props) => <h2 {...props} className="heading2" />,
            h2: (props) => <h3 {...props} className="heading3 link_item" />,
            h3: (props) => <h4 {...props} className="heading4 link_item" />,
            ul: (props) => <ul {...props} className="list-reset" />,
            li: (props) => <li {...props} className="list-reset" />,
            hr: (props) => <hr {...props} className="divider" />,
            a: (props) => <a {...props} className="link" color="teal.500" />,
            p: (props) => <p {...props} className="text-sm" />,
          }}
        >
          {children}
        </MDXProvider>
      </div>
    </>
  )
}
export default LinkTemplate
