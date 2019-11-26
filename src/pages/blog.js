import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/page-layout"
import SEO from "../components/seo"
/* page for kaleighscruggs.com/blog */

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blogPage">
      <ul>
        {data.allWordpressPost.edges.map(post => (
          <li>
            <Link to={`/post/${post.node.slug}`}>
              <div className="postPreview">
                <h1
                  className="postTitle"
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
                <p className="postDate">{post.node.date}</p>
                <div
                  className="postDescription"
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
