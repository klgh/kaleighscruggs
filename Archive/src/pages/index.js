import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../templates/basiclayout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { StaticImage } from 'gatsby-plugin-image'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Kaleigh.Dev"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div>
          <h2>Welcome!</h2>
          <p>
            Hey, I'm Kaleigh 👋! I have over ten years of experience creating
            and styling websites and applications using WordPress, Drupal,
            Angular, ReactJS, and GatsbyJS. I'm currently a front-end engineer
            at{' '}
            <a href="https://www.sportsengine.com/" target="_blank">
              SportsEngine
            </a>
            .
          </p>
          <p>
            I have a passion for diversity and inclusion. I have helped
            establish Women In Technology employee resource groups at 2 former
            employers. These groups offered networking, awareness, and events
            for employees. We also held events and activities for girls to learn
            more about careers in STEM ranging from elementary school to
            college.
          </p>
          <p>
            I'm also a member of{' '}
            <a href="https://www.hiretechladies.com/" target="_blank">
              Tech Ladies
            </a>{' '}
            and a volunteer with{' '}
            <a href="https://www.womenwhocode.com/frontend" target="_blank">
              Women Who Code Front End
            </a>
            .
          </p>
          <p>
            You can find me doing Brazilian jiu-jitsu,{' '}
            <a href="https://www.instagram.com/macandbiscuit/" target="_blank">
              walking my dogs
            </a>
            , or stand-up paddleboarding when I'm not coding. I also love baking
            human and dog treats, playing piano, and birdwatching. I promise I'm
            a millennial! Pre-pandemic, I did{' '}
            <Link to="/comedy">stand-up comedy</Link> and improv. Hopefully, one
            day I'll get back to it!
          </p>
          <StaticImage
            src="../images/kaleighscruggs.jpg"
            alt="kaleigh scruggs"
            className="homepageImg"
          />
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
