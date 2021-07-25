import React from 'react'
import { Link, graphql } from 'gatsby'
//import Bio from '../components/bio'
import Layout from '../templates/basic-layout'
import SEO from '../components/seo'

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All Posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.frontmatter.slug} className="blog_item">
              <h3 className="blog_item_title">
                <Link to={`/blog/${node.frontmatter.slug}`}>{title}</Link>
              </h3>
              <small className="blog_item_date">{node.frontmatter.date}</small>
              <p
                className="blog_item_excerpt"
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Blog

export const blogQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`
