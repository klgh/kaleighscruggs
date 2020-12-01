import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/page-layout"
import SEO from "../components/seo"
/* page for kaleighscruggs.com/blog */

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blogPage">
      <h1>Blog</h1>
      <h4>
        <Link to={`/category/`}>Categories</Link>
      </h4>
      <ul>
        {data.allWordpressPost.edges.map((blog) => (
          <li>
            <Link to={`/blog/${blog.node.slug}`}>
              <div className="postPreview">
                <h2
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
