import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Heading,
  Text,
  Divider,
  ListItem,
  UnorderedList,
  Link,
} from '@chakra-ui/react'
import Header from '../components/header'
import { rhythm, typography } from '../utils/typography'

function MDXPage({ children }) {
  return (
    <MDXProvider
      components={{
        h1: (props) => (
          <Heading {...props} className="heading1" as="h1" size="4xl" />
        ),
        h2: (props) => (
          <Heading {...props} className="heading2" as="h2" size="3xl" />
        ),
        ul: (props) => <UnorderedList {...props} className="list-reset" />,
        li: (props) => <ListItem {...props} className="list-reset" />,
        hr: (props) => <Divider {...props} className="divider" />,
        a: (props) => <Link {...props} className="link" color="teal.500" />,
        p: (props) => <Text {...props} className="text-sm" fontSize="lg" />,
        delete: (props) => <Text {...props} className="text-danger" as="s" />,
        em: (props) => <Text {...props} className="text-xs" as="em" />,
      }}
    >
      <Header />
      <div className="mdx_page"> {children}</div>
    </MDXProvider>
  )
}
export default MDXPage
