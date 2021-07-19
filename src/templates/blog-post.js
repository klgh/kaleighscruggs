import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import Layout from '../templates/basic-layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import '../styles/styles.scss'
import Header from '../components/header'
import Footer from '../components/footer'

/* class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log(this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate */

export default function BlogPostTemplate({ data: { mdx } }) {
  return (
    <>
      <Header />
      <div className="blog_post">
        <MDXProvider
          components={{
            h1: (props) => <h1 {...props} className="heading1" />,
            h2: (props) => <h2 {...props} className="heading2" />,
            ul: (props) => <ul {...props} className="list-reset" />,
            li: (props) => <li {...props} className="list-reset" />,
            hr: (props) => <hr {...props} className="divider" />,
            a: (props) => <Link {...props} className="link" color="teal.500" />,
            p: (props) => <p {...props} className="text-sm" fontSize="lg" />,
          }}
        >
          <h2>{mdx.frontmatter.title}</h2>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
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
