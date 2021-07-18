import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../templates/basic-layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { ChakraProvider } from '@chakra-ui/react'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <ChakraProvider>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Kaleigh.Dev"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <div>
            <h2>Welcome!</h2>
            <p>
              I'm a developer with over ten years of experience creating and
              styling websites and applications. I received my master's degree
              in Business and Technology from UGA and my undergrad at Georgia
              Southern. I'm currently a senior consultant at Daugherty Business
              Solutions. I've worked on various projects using WordPress,
              Drupal, Angular, ReactJS, and GatsbyJS, Ember.JS, and more.
            </p>
            <p>
              I have a passion for diversity and inclusion and at both North
              Highland and State Farm helped establish Women In Technology
              employee groups. These groups offered networking, awareness, and
              events for employees as well as activities for younger
              (school-aged) girls to learn more about careers in STEM. I am also
              a founding member of Tech Ladies and involved with Women Who Code
              Atlanta as a host for the Gwinnett meetups and the Women Who Code
              Front End track as an evangelist and volunteer.
            </p>
          </div>
          <div className="blog-posts">
          <h2>Blog Posts</h2>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`/blog/${node.frontmatter.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              )
            })}
          </div>
        </Layout>
      </ChakraProvider>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
