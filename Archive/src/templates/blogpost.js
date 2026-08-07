import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../components/seo'
import '../styles/styles.scss'
import Header from '../components/header'
import Footer from '../components/footer'

export default function BlogPostTemplate({ data: { mdx }, previous, next }) {
  return (
    <>
      <Header />
      <div className="blog_post">
        <MDXProvider
          components={{
            h1: (props) => <h2 {...props} className="blog_post_h1" />,
            h2: (props) => <h3 {...props} className="blog_post_h2" />,
            h3: (props) => <h4 {...props} className="blog_post_h3" />,
            ul: (props) => <ul {...props} className="blog_post_ul" />,
            li: (props) => <li {...props} className="blog_post_li" />,
            hr: (props) => <hr {...props} className="blog_post_hr" />,
            a: (props) => <Link {...props} className="blog_post_link" />,
            p: (props) => <p {...props} className="blog_post_p" />,
          }}
        >
          <h2>{mdx.frontmatter.title}</h2>
          <MDXRenderer frontmatter={mdx.frontmatter} className="blog_post_body">
            {mdx.body}
          </MDXRenderer>
          <hr />
        </MDXProvider>
        <Footer />
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
