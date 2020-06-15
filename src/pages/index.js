import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

library.add(fab)

const IndexPage = ({ data }) => (
  <PageLayout>
    <SEO title="Kaleigh Scruggs | web developer, comedian, human" />
    <div className="home-intro">
      <div className="home-main">
        <div className="home-image">
          <Img
            fixed={data.kaleighscruggs.childImageSharp.fixed}
            className="introimg"
          />
        </div>
        <div className="home-text">
          <h3>Hey! 👋 I'm Kaleigh</h3>
          <p>
            I'm a front-end web developer with over 10 years of experience
            creating and styling websites. My most recent role was with North
            Highland working as a senior web developer within the Technology
            Capability{" "}
            <Link to="/resume" className="currently-looking">
              {" "}
              (I'm currently looking for a new role){" "}
            </Link>
            . I worked on a variety of projects with clients using their content
            management systems (WordPress, Drupal, Netlify CMS) to implement new
            designs and features. I have also worked on web apps using Angular,
            React, and Gatsby. I've acted as both a developer and lead developer
            on client-facing projects and am very comfortable in those roles.{" "}
          </p>
          <p>
            I have a passion for diversity and inclusion and at both North
            Highland and State Farm helped establish Women In Technology
            employee groups. These groups offered networking, awareness, and
            events for employees as well as activities for younger (school-aged)
            girls to learn more about careers in STEM. I am also a founding
            member of Tech Ladies and involved with Women Who Code Atlanta as a
            host for the Gwinnett meetups and the Women Who Code Front End track
            as an evangelist and volunteer.
          </p>
        </div>
      </div>
    </div>

    <div className="find-me">
      <div className="find-me-box box-1">
        <div className="text-box">
          <Link to="/uses">
            <p>Find out what I use</p>
          </Link>
        </div>
      </div>
      <div className="find-me-box box-2">
        <div className="text-box">
          <Link to="/portfolio">
            <p>Check out my work</p>
          </Link>
        </div>
      </div>
      <div className="find-me-box box-3">
        <div className="text-box">
          <Link to="/now">
            <p>See what I'm up to</p>
          </Link>
        </div>
      </div>
    </div>

    <div className="from-the-blog">
      <h3>
        lately from the{" "}
        <Link to="/blog" className="from-the-blog-link">
          blog
        </Link>
      </h3>
      <div className="blog-cards">
        {data.allWordpressPost.edges.map(blog => (
          <div className="card" key={blog.node.slug}>
            <Link to={`/blog/${blog.node.slug}`}>
              <div className="postPreview">
                <img
                  src={`${blog.node.featured_media.source_url}`}
                  className="blog-card-img"
                />
                <h4
                  className="postTitle"
                  dangerouslySetInnerHTML={{ __html: blog.node.title }}
                />
                <p className="postDate">{blog.node.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressPost(limit: 2) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          categories {
            name
          }
          featured_media {
            source_url
          }
        }
      }
    }
    kaleighscruggs: file(relativePath: { eq: "kaleighscruggs.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
