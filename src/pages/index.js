import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/layout'
import SEO from '../components/seo'
import '../styles/styles.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Bio from '../components/bio'

const IndexPage = () => {
  const { data } = this.props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={this.props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <div className="index">
        <div className="small-container">
          <h3>Hey! I'm Kaleigh</h3>
          <StaticImage
            src="../images/kaleighscruggs.jpg"
            alt="A photo of Kaleigh outside"
            layout="constrained"
            placeholder="blurred"
          />
          <p>
            I'm a developer with over ten years of experience creating and
            styling websites and applications. I received my master's degree in
            Business and Technology from UGA and my undergrad at Georgia
            Southern. I'm currently a developer at{' '}
            <a href="https://www.sportsengine.com/">SportsEngine</a>. I've
            worked on various projects using WordPress, Drupal, Angular,
            ReactJS, and GatsbyJS, Ember.JS, and more.
          </p>

          <p>
            I have a passion for diversity and inclusion and at both North
            Highland and State Farm helped establish Women In Technology
            employee groups. These groups offered networking, awareness, and
            events for employees as well as activities for younger (school-aged)
            girls to learn more about careers in STEM. I am also a founding
            member of{' '}
            <a
              href="https://www.hiretechladies.com/"
              alt="tech ladies website"
              className="currently-looking"
            >
              Tech Ladies
            </a>{' '}
            and involved with{' '}
            <a
              href="https://www.womenwhocode.com/atlanta"
              alt="women who code atlanta"
              className="currently-looking"
            >
              Women Who Code Atlanta
            </a>{' '}
            as a host for the Gwinnett meetups and the{' '}
            <a
              href="https://www.womenwhocode.com/frontend"
              alt="women who code frontend track"
              className="currently-looking"
            >
              Women Who Code Front End track
            </a>{' '}
            as an evangelist and volunteer.
          </p>
        </div>
        <div className="small-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
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
          }
        }
      }
    }
  }
`
