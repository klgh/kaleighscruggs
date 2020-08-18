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
    <SEO title="Home" />
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
            I'm a software engineer with over ten years of experience creating
            and styling websites. I'm now a Senior Consultant with Daugherty
            Business Solutions. <br /> I've worked on various projects with
            clients using their content management systems (WordPress, Drupal,
            Netlify CMS) to implement new designs and features. I have also
            worked on web apps using Angular, React, and Gatsby.
          </p>
          <p>
            I have a passion for diversity and inclusion and at both North
            Highland and State Farm helped establish Women In Technology
            employee groups. These groups offered networking, awareness, and
            events for employees as well as activities for younger (school-aged)
            girls to learn more about careers in STEM. I am also a founding
            member of{" "}
            <a
              href="https://www.hiretechladies.com/"
              alt="tech ladies website"
              className="currently-looking"
            >
              Tech Ladies
            </a>{" "}
            and involved with{" "}
            <a
              href="https://www.womenwhocode.com/atlanta"
              alt="women who code atlanta"
              className="currently-looking"
            >
              Women Who Code Atlanta
            </a>{" "}
            as a host for the Gwinnett meetups and the{" "}
            <a
              href="https://www.womenwhocode.com/frontend"
              alt="women who code frontend track"
              className="currently-looking"
            >
              Women Who Code Front End track
            </a>{" "}
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
        {data.allWpPost.nodes.map(blog => (
          <div className="card" key={blog.uri}>
            <Link to={`/blog/${blog.uri}`}>
              <div className="postPreview">
                <img
                  src={`${blog.featuredImage.node.sourceUrl}`}
                  className="blog-card-img"
                />
                <h4 className="postTitle">{blog.title}</h4>
                <p className="postDate">{blog.date}</p>
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
    allWpPost(limit: 2) {
      nodes {
        title
        uri
        date(formatString: "MMMM DD, YYYY")
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
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
