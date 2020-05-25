import React from "react"
import PageLayout from "../components/page-layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { Link, graphql } from "gatsby"

library.add(fab)

const IndexPage = ({ data }) => (
  <PageLayout>
    <SEO title="Kaleigh Scruggs | web developer, comedian, human" />
    <div className="home-intro">
      <div className="home-main">
        <div className="home-image">
          <img src="https://www.placecage.com/400/400" />
        </div>
        <div className="home-text">
          <h3>Hey! 👋 I'm Kaleigh</h3>
          <p>
            I'm one of those rare Atlanta natives. Ever since I graduated from
            Georgia Southern University in 2012, I've been working in tech. I
            later earned my Masters in Internet Technology from The University
            of Georgia in 2014.
          </p>
        </div>
      </div>
    </div>

    <div className="find-me">
      <div className="find-me-box box-1">
        <div className="text-box">
          <p>dasdfasdfa</p>
        </div>
      </div>
      <div className="find-me-box box-2">
        <div className="text-box">
          <p>dasdfasdfa</p>
        </div>
      </div>
      <div className="find-me-box box-3">
        <div className="text-box">
          <p>dasdfasdfa</p>
        </div>
      </div>
    </div>

    <div className="from-the-blog">
      <h3>from the blog</h3>
      <div className="blog-cards">
        {data.allWordpressPost.edges.map(blog => (
          <div className="card">
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
                <div
                  className="postDescription"
                  dangerouslySetInnerHTML={{ __html: blog.node.excerpt }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    <div className="work-together">
      <h3>work-together</h3>
      <p>dfafddfads</p>
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
          excerpt
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
  }
`
